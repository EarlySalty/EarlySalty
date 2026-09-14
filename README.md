<div align="center">

<img src="assets/banner.jpg" width="100%" alt="EarlySalty, Nani, Deutsche Deadlock Community" />

<img src="assets/avatar-circle.png" width="138" alt="EarlySalty" />

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=C8A86B&center=true&vCenter=true&width=760&lines=Deutsche+Deadlock+Community;Discord-Bots+%C2%B7+Twitch-Bot+%C2%B7+Steam;Voice-Router+%C2%B7+Raids+%C2%B7+Turniere" alt="Deutsche Deadlock Community" />

<br />

<a href="https://deutsche-deadlock-community.de">
  <img src="https://img.shields.io/badge/Website-0b0907?style=for-the-badge&logo=googlechrome&logoColor=c8a86b" alt="Website" />
</a>
<a href="https://discord.gg/PhkP3WgY7w">
  <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
</a>
<a href="https://www.twitch.tv/earlysalty">
  <img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" alt="Twitch" />
</a>
<a href="https://deutsche-deadlock-community.de/twitch/demo">
  <img src="https://img.shields.io/badge/Streamer_Dashboard-0b0907?style=for-the-badge&logo=twitch&logoColor=c8a86b" alt="Streamer Dashboard Demo" />
</a>
<a href="https://github.com/EarlySalty?tab=repositories">
  <img src="https://img.shields.io/badge/Code-181717?style=for-the-badge&logo=github&logoColor=white" alt="Code" />
</a>

</div>

---

## Über mich

Hey, ich bin **Nani**, auf GitHub **EarlySalty**. Ich habe die **Deutsche Deadlock Community** gebaut und betreibe sie: Discord, Twitch, Steam, Website und Turniere. Rund **2.500 Mitglieder**, deutschsprachig, von Spielern für Spieler.

Ich stream selbst auf [Twitch](https://www.twitch.tv/earlysalty) und baue die Werkzeuge, mit denen andere Creator und Spieler auf dem Server zurechtkommen. Wenn nachts etwas ausfällt, gehe ich selbst ran.

Seit August 2025 läuft das auf einem eigenen Root-Server. Rust in Produktion, PostgreSQL als Speicher, KI-Agenten für den Betrieb.

---

## Discord

Der Server ist das Zuhause der Community: Mitspieler, Coaching, Builds, Patchnotes, Voice.

- **Mitspieler finden (LFG):** Modus, Rang, freie Plätze. Der Bot schiebt dich in die passende Lane.
- **Voice-Router:** Sprachkanäle für Ranked, Casual, Custom. Lane anlegen, verwalten, Leute reinholen.
- **Steam-Verifikation und Rang:** Steam-Konto verknüpfen, Rang sichtbar machen, ohne dass jemand das von Hand prüft.
- **Onboarding:** Rollen und Einstieg laufen automatisch, sobald jemand beitritt.
- **Coaching:** kostenlose Replay-Analyse und Lane-Grundlagen über den Server.
- **!brain:** Fragen zu Helden, Items, Builds und Mechaniken im Kanal.
- **Scrims, Custom Games, Turniere:** organisierte Runden, nicht nur Solo-Queue.
- **Patchnotes:** neue Deadlock-Patches landen auf dem Server, ohne Copy-Paste.

🔗 [Discord beitreten](https://discord.gg/PhkP3WgY7w) · [Mitspieler](https://deutsche-deadlock-community.de/mitspieler/) · [Coaching](https://deutsche-deadlock-community.de/coaching/)

---

## Streams

Ich spiele Deadlock live und baue den Twitch-Bot, den Community-Streamer selbst einrichten.

Mein Kanal: [twitch.tv/earlysalty](https://www.twitch.tv/earlysalty)

Was der Bot für Creator auf dem Server macht:

- **Selfservice:** Streamer verbinden den Kanal per Twitch-OAuth. Kein Ticket bei mir.
- **Go-Live auf Discord:** sobald der Stream startet, landet die Ankündigung auf dem Server. Text, Embed, Ping-Rolle, der Streamer stellt das selbst ein.
- **Auto-Raids:** am Streamende geht der Raid zu einem anderen Community-Kanal, der gerade live ist.
- **Chat:** Bot im Chat als `deutschedeadlockcommunity`. Befehle, Moderation, Clips.
- **Dashboard:** Viewer, Chat, Titel, Tags, Raid-Wirkung. Öffentliche Demo unter [/twitch/demo](https://deutsche-deadlock-community.de/twitch/demo).

---

## Bots

Alles eigene Dienste, keine zusammengekauften Fertig-Bots.

| Dienst | Was er tut |
|---|---|
| Discord-Bot | Onboarding, LFG, Voice-Router, Ränge, Coaching, Moderation, Brain |
| Twitch-Bot | Chat, Go-Live, Auto-Raid, Analytics, Streamer-Dashboard |
| Steam-Bot | Profil- und Match-Abgleich, Rang aus den Spieldaten |
| Patchnotes-Bot | Deadlock-Patches auf den Server bringen |
| Turniere | Brackets und Betrieb für Community-Turniere |
| Spam-Erkennung | Vorprüfung durch ein Sprachmodell, Entscheidungen stehen im Log |

KI-Aufrufe laufen über eine eigene Schnittstelle. Das Modell dahinter ist austauschbar.

---

## Coding

Ich baue Systeme, die im Alltag der Community laufen, nicht Demos.

- **Rust** in Produktion (Serenity, Axum, sqlx). Python ist der Altbestand, vor allem noch im Twitch-Bot.
- **TypeScript und React** für Streamer-Dashboard und Website.
- **PostgreSQL** als zentrale Datenbank, TimescaleDB für Zeitreihen. Kein SQLite mehr im Live-Betrieb.
- **Caddy** als Proxy, **Docker** wo es passt, **systemd** für die eigenen Units.
- Ein Root-Server: Discord, Twitch, Steam, Website und Docs auf einer Maschine.
- APIs: Discord Gateway und Slash-Commands, Twitch EventSub und OAuth, Steam Web-API.

Öffentlicher Code liegt unter [github.com/EarlySalty](https://github.com/EarlySalty). Ein Teil der Bots ist privat, weil Tokens, Moderationslogik und Betriebsdaten nicht auf die Straße gehören.

---

## Woran ich arbeite

<p>
  <img src="https://img.shields.io/badge/Community-c8a86b?style=for-the-badge" alt="Community" />
  <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
  <img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" alt="Twitch" />
  <img src="https://img.shields.io/badge/Steam-1b2838?style=for-the-badge&logo=steam&logoColor=white" alt="Steam" />
  <img src="https://img.shields.io/badge/Rust-DEA584?style=for-the-badge&logo=rust&logoColor=black" alt="Rust" />
  <img src="https://img.shields.io/badge/KI_Agenten-2563EB?style=for-the-badge&logo=openai&logoColor=white" alt="KI-Agenten" />
</p>

---

## Tech Stack

### Sprachen

<p>
  <img src="https://skillicons.dev/icons?i=rust,python,ts,html,css&theme=dark" alt="Rust, Python, TypeScript, HTML, CSS" />
</p>

### Systeme und Tools

<p>
  <img src="https://skillicons.dev/icons?i=react,postgres,docker,linux,redis,git,github,vscode&theme=dark" alt="React, PostgreSQL, Docker, Linux, Redis, Git, GitHub, VS Code" />
</p>

---

## Projekte

### Deutsche Deadlock Community

Website, Discord und die Dienste, die den Server tragen. Rund 2.500 Mitglieder, Mitspieler, Coaching, Voice, Streamer.

🔗 [deutsche-deadlock-community.de](https://deutsche-deadlock-community.de) · [Discord](https://discord.gg/PhkP3WgY7w)

### Twitch-Bot und Streamer-Dashboard

Selfservice für Community-Streamer: OAuth, Go-Live, Auto-Raid, Analytics. Demo ist öffentlich.

🔗 [EarlySalty/Deadlock-Twitch-Bot](https://github.com/EarlySalty/Deadlock-Twitch-Bot) · [Demo](https://deutsche-deadlock-community.de/twitch/demo)

### Turniere

Turnierbetrieb für die Community, Rust und Axum.

🔗 [EarlySalty/Deadlock-Turniere](https://github.com/EarlySalty/Deadlock-Turniere)

### Docs

Öffentliche Seiten für Spieler: Discord-Server, Twitch-Bot, Steam, Helden, Patchnotes.

🔗 [EarlySalty/Deadlock-Docs](https://github.com/EarlySalty/Deadlock-Docs)

---

## GitHub

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=EarlySalty&show_icons=true&theme=dark&hide_border=true&bg_color=0b0907&title_color=c8a86b&icon_color=efd49d&text_color=ece0c8" height="160" alt="GitHub Statistik" />
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=EarlySalty&layout=compact&theme=dark&hide_border=true&bg_color=0b0907&title_color=c8a86b&text_color=ece0c8" height="160" alt="Meistgenutzte Sprachen" />

</div>

---

<div align="center">

### Systeme bauen, die die Community tragen.

Schreib mir: [mail@earlysalty.com](mailto:mail@earlysalty.com)

<img src="assets/footer.jpg" width="100%" alt="" />

</div>
