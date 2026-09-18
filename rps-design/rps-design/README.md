# rps-design

Source of truth for the shared RPS design tokens used by www.1rps.com,
portal.1rps.com and hub.1rps.com. Build Plan v0.2, Phase 2.

| File | What it is |
| --- | --- |
| `rps-tokens.css` | Colour, type, space and radius as CSS variables, with a print block that flips every surface to paper. |
| `index.html` | The rendered check page. Open it in a browser, and print it. |
| `assets/rps-mark.png` | Logo mark, from RPS-website. |

## How apps use it

Each app keeps its own copy of `rps-tokens.css`, with the version comment at
the top left intact. Nothing hot-links it, so no app's content security
policy or uptime depends on another site. The apps have no build chain;
copying the file is the whole mechanism. When the file changes here, bump
the version and copy it again.

## Decided

- **Ring order**, 18 September 2026: 1 System Health & Reporting,
  2 Spares, Repairs & Maintenance, 3 Training & Knowledge, 4 Lifecycle
  Management, 5 Triage Intelligence, 6 Engineer Access, clockwise from the
  top. Tokens are named by service so a later reorder does not touch the
  palette.
- **Pillar colours**, approved 18 September 2026: Health mint #00EBB4,
  Spares magenta #D46BD9, Training steel #9DB4D0, Lifecycle violet
  #8B7CF6, Triage cyan #00BEEB, Engineer Access blue #008CF5. Arranged so
  no ring neighbours merge for red–green colour-blind viewers. Supersedes
  Build Plan 5.3.
- **Type**: Roboto for all text; Stolzl retired. IBM Plex Mono for figures.
- **Filled buttons** use `--rps-action-fill` #0072CE with white text (4.9:1),
  because white on #008CF5 is 3.5:1 and fails AA.

## Mapping from the website's variables (for Phase 5)

| RPS-website `styles.css` | Token |
| --- | --- |
| `--ink` | `--rps-shell` |
| `--panel` / `--panel-2` | `--rps-panel` / `--rps-panel-raised` |
| `--line` | `--rps-line` |
| `--paper` / `--muted` | `--rps-text` / `--rps-text-muted` |
| `--teal` | `--rps-brand-mint` |
| `--blue` | `--rps-brand-blue` |
| `--violet` (actually #008cf5) | `--rps-brand-blue` — retire the name |
| `--amber` | `--rps-cta-public` |
| inline `--accent` on ring and pillar cards | `var(--rps-pillar-health)` etc., by service |
