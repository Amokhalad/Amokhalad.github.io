# Mo Aljuboori — Personal Portfolio

![License](https://img.shields.io/github/license/Amokhalad/Amokhalad.github.io)
![Top language](https://img.shields.io/github/languages/top/Amokhalad/Amokhalad.github.io)
![Last commit](https://img.shields.io/github/last-commit/Amokhalad/Amokhalad.github.io)

A responsive personal portfolio website with sections for an introduction, about, projects, skills, education, and contact.

Live site: https://amokhalad.github.io

<!-- TODO: add a screenshot of the site -->

## Tech Stack

- HTML
- Tailwind CSS (compiled to `src/output.css`) alongside a hand-written `src/style.css`
- JavaScript with jQuery, plus Typed.js, Waypoints, and Owl Carousel for the typing effect, scroll triggers, and project carousel

## Project layout

The site source lives in the `src/` directory (`index.html`, `style.css`, `script.js`, images, and the generated `output.css`).

## Run locally

Open `src/index.html` directly in a browser, or serve it locally:

```bash
cd src
python3 -m http.server
```

Then visit http://localhost:8000.

To rebuild the Tailwind styles while editing, install dependencies and run the watch script from the repo root:

```bash
npm install
npm run dev
```

This watches `src/style.css` and regenerates `src/output.css`.
