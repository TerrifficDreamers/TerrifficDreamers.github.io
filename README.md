# Terrific Dreamers — Website

Statische Website für den Star-Stable-Klub *Terrific Dreamers*. Gebaut mit [Astro](https://astro.build), gehostet auf GitHub Pages unter `terrifficdreamers.github.io`.

## Schnellstart

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # Output → dist/
```

Node.js ≥ 18 nötig.

## Inhalte ändern (kein Code-Anfassen nötig)

Alle Texte/Daten leben in `src/config/*.json` — Datei editieren, committen, fertig.

| Datei | Zweck |
|---|---|
| `site.json` | Domain, Title, Discord-Invite, Social-Links |
| `legal.json` | Impressum-Daten + Datenschutz-Variablen |
| `schedule.json` | Wochenplan |
| `ranks.json` | Rangsystem (8 Stufen) |
| `outfit.json` | Cluboutfit (Items, Preise) |
| `members.json` | Clubmanagement + Reitlehrer |
| `story.json` | Klubgeschichte / Timeline |

## Bilder/Videos austauschen

Alle Medien liegen in `public/media/` mit fester Ordnerstruktur:

```
public/media/
├─ hero/        Hero-Video + Posterbild
├─ logo/        Logo + SSD-Badge + Favicon
├─ gallery/     Klubfotos pro Jahr
├─ outfit/      Cluboutfit-Items
├─ ranks/       (optional) Rang-Icons
├─ members/     Profilbilder
└─ misc/        sonstige Bilder
```

**Hot-Swap:** Datei mit gleichem Namen ersetzen → fertig. Pfade in den `config/*.json` zeigen auf `/media/...`.

## Struktur

```
src/
├─ components/  wiederverwendbare Bausteine
├─ layouts/     Seitengerüst
├─ pages/       eine Datei = eine URL
├─ config/      JSON-Inhalte (siehe oben)
├─ scripts/     kleine JS-Module (Mobile-Nav, Scroll-Reveal)
└─ styles/      Designsystem
```

## Deployment

Push auf `main` → GitHub Action baut + deployt automatisch. In den Repo-Settings unter **Pages** muss Source = "GitHub Actions" eingestellt sein.

## Analytics

Keine. Bewusst weggelassen — keine Cookies, kein Tracking, kein DSGVO-Aufwand.
