# ❄ Snow

A calm, chapter-by-chapter tracker for **JEE Main**, **JEE Advanced** and **Class 12 Boards**.
Tick off Notes, DCET, NCERT, PYQ and reference books for every chapter, and jot a quick note when you do.

By **Gamestatue** · gamestatue1@gmail.com

## Features
- Preloaded syllabus for JEE Main, JEE Advanced and Boards (English chapter by chapter, plus an optional subject)
- Add, rename and delete chapters and columns
- Notes on any cell, previewed in the table
- Progress ring, per-subject bars, day streak, search, "pending only" filter
- Light and dark themes; installable and offline-capable (PWA)
- JSON backup, restore and reset

## Run locally
No build step. Open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deploy
Push to `main`, then in **Settings → Pages** choose **GitHub Actions**. The included workflow publishes the site.

## Structure
```
index.html       page shell
css/style.css    styles and themes
js/store.js      storage adapter (localStorage today)
js/data.js       syllabus data and seed
js/app.js        UI and logic
sw.js            offline cache
```

## Adding a backend (Firebase, Supabase, REST)
All persistence goes through `Store.load()` and `Store.save(data)` in `js/store.js`.
Keep those two async methods and swap the bodies. Nothing else changes.

## Notes
Syllabus lists are a best-effort starting point. Verify against official NTA, JAB and CBSE documents, then edit in the app.

## License
MIT
