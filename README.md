# WorldChangers Website

Static multi-page website for **WorldChangers**, focused on sustainability education, community projects, and climate-action resources.

## Pages

- `index.html` - Home page with mission, initiatives, videos, and contribution form.
- `html/about.html` - About the organization and working approach.
- `html/gallery.html` - Visual gallery grouped by sustainability themes.
- `html/faqs.html` - Frequently asked questions and contact form.
- `html/resource directory.html` - Resource links and project submission form.

## Tech Stack

- HTML5
- CSS3 (`css/style.css`)
- Vanilla JavaScript (`js/script.js`)
- Boxicons (CDN)
- Netlify form attributes for submissions

## Project Structure

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── html/
│   ├── about.html
│   ├── gallery.html
│   ├── faqs.html
│   └── resource directory.html
└── images/
```

## Run Locally

Because this is a static site, serve it with any local web server:

```bash
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/index.html`

## Deployment

Deploy as a static site on Netlify (or any static host).  
Netlify form handling will work when forms are deployed with `data-netlify="true"` and `form-name` fields intact.

