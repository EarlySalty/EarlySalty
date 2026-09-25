import fs from "node:fs/promises";

const OWNER = "EarlySalty";
const USERNAME = "EarlySalty";
const README_PATH = "README.md";
const TOP_N = 10;
const DAY_MS = 24 * 60 * 60 * 1000;
const token = process.env.PROFILE_STATS_TOKEN;

if (!token) {
  console.log("PROFILE_STATS_TOKEN fehlt; vorhandener Snapshot bleibt unverändert.");
  process.exit(0);
}

async function api(path) {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "EarlySalty-profile-activity",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed (${response.status})`);
  }

  return response.json();
}

async function listOwnedRepositories() {
  const repositories = [];

  for (let page = 1; ; page += 1) {
    const batch = await api(
      `/user/repos?affiliation=owner&type=all&sort=full_name&direction=asc&per_page=100&page=${page}`
    );

    repositories.push(
      ...batch.filter(
        (repo) => repo.owner?.login === OWNER && !repo.archived
      )
    );

    if (batch.length < 100) {
      break;
    }
  }

  return repositories;
}

async function commitActivity(repo, since30, since7) {
  let page = 1;
  let count30 = 0;
  let count7 = 0;

  while (true) {
    const commits = await api(
      `/repos/${OWNER}/${encodeURIComponent(repo.name)}/commits?` +
        new URLSearchParams({
          author: USERNAME,
          sha: repo.default_branch,
          since: since30.toISOString(),
          per_page: "100",
          page: String(page),
        })
    );

    count30 += commits.length;

    for (const commit of commits) {
      const timestamp =
        commit.commit?.author?.date ?? commit.commit?.committer?.date;
      if (timestamp && new Date(timestamp) >= since7) {
        count7 += 1;
      }
    }

    if (commits.length < 100) {
      break;
    }

    page += 1;
  }

  return { count7, count30 };
}

function renderTable(entries, updatedAt) {
  let privateRank = 0;
  const rows = entries.map((entry, index) => {
    let label;

    if (entry.private) {
      privateRank += 1;
      label = `🔒 Privates Repo #${privateRank}`;
    } else {
      label = `[${entry.name}](https://github.com/${OWNER}/${entry.name})`;
    }

    return `| ${index + 1} | ${label} | ${entry.count7} | ${entry.count30} |`;
  });

  return [
    "<!-- activity-stats:start -->",
    "| Rang | Repository | 7 Tage | 30 Tage |",
    "|---:|---|---:|---:|",
    ...rows,
    "",
    `_Aktualisiert: ${updatedAt}_`,
    "<!-- activity-stats:end -->",
  ].join("\n");
}

const now = new Date();
const since30 = new Date(now.getTime() - 30 * DAY_MS);
const since7 = new Date(now.getTime() - 7 * DAY_MS);
const repositories = await listOwnedRepositories();

if (!repositories.some((repo) => repo.private)) {
  console.log(
    "Token sieht keine privaten Repositories; vorhandener Snapshot bleibt unverändert."
  );
  process.exit(0);
}

const activity = [];
let skipped = 0;

for (const repo of repositories) {
  try {
    const counts = await commitActivity(repo, since30, since7);
    if (counts.count30 > 0) {
      activity.push({
        name: repo.name,
        private: repo.private,
        ...counts,
      });
    }
  } catch {
    skipped += 1;
  }
}

if (skipped > 0) {
  console.log(`${skipped} Repository-Auswertungen wurden ohne Namensausgabe übersprungen.`);
}

activity.sort(
  (a, b) =>
    b.count7 - a.count7 ||
    b.count30 - a.count30 ||
    (a.private === b.private ? 0 : a.private ? 1 : -1)
);

const top = activity.slice(0, TOP_N);
const readme = await fs.readFile(README_PATH, "utf8");
const start = "<!-- activity-stats:start -->";
const end = "<!-- activity-stats:end -->";
const startIndex = readme.indexOf(start);
const endIndex = readme.indexOf(end);

if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
  throw new Error("Activity markers missing in README");
}

const updatedAt = now.toISOString().slice(0, 10);
const replacement = renderTable(top, updatedAt);
const nextReadme =
  readme.slice(0, startIndex) +
  replacement +
  readme.slice(endIndex + end.length);

if (nextReadme !== readme) {
  await fs.writeFile(README_PATH, nextReadme, "utf8");
}
