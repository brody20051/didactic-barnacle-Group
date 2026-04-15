# Class Shortcut Finder

A lightweight app to help classmates search and filter keyboard shortcuts.

## Requirements Checklist

- ✅ Uses JavaScript `fetch()` API to retrieve JSON data (`shortcuts.json`).
- ✅ Lets users search by text and filter by app/tool and OS.
- ✅ Includes team members in both app UI and this README.
- ✅ Can be deployed as a static site (GitHub Pages, Netlify, Vercel, etc.).

## Team Members

- Member 1
- Member 2
- Member 3

## Run Locally

Because `fetch()` requests a JSON file, run with a local server (not `file://`).

```bash
python3 -m http.server 8000
```

Then open:

- http://localhost:8000

## JSON Format

Each shortcut entry in `shortcuts.json`:

```json
{
  "shortcut": "Ctrl + C / Cmd + C",
  "action": "Copy selected text",
  "app": "General",
  "os": "Cross-platform",
  "submittedBy": "Student Name"
}
```

## Suggested Team Workflow

1. Split ownership:
   - Person A: UI + filters
   - Person B: JSON data collection + validation
   - Person C: deployment + README + CNVS submission
2. Ensure each classmate contributes one unique shortcut entry.
3. Submit one CNVS group submission with:
   - app link
   - repo link
   - member names
