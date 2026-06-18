# Jay Bhavani Furniture — Official Website

A premium, fast, and SEO-friendly website for **Jay Bhavani Furniture**, a trusted furniture showroom and custom manufacturer in Navsari, Gujarat since 1998.

Built with [Astro v6](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/).

## Getting Started

**Requirements:** Node.js >= 22

```shell
npm install
npm run dev
```

## Commands

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`         |
| `npm run preview` | Preview production build locally           |
| `npm run check`   | Check project for errors                   |
| `npm run fix`     | Run ESLint & Prettier formatting           |

## Deployment

The site is automatically deployed to **GitHub Pages** at `https://jaybhavanifurniture.github.io/jbf-official/` on every push to the `main` branch via the `.github/workflows/deploy.yml` workflow.

## Project Structure

```
src/
├── components/       # Reusable UI components & widgets
├── content/          # Content collections (blog posts)
├── data/
│   ├── showroom.json # Showroom info: phone, address, hours, etc.
│   └── post/         # Blog posts (.md / .mdx)
├── layouts/          # Page layouts
├── pages/            # Routes (index, about, contact, blog...)
├── config.yaml       # Global SEO & site configuration
└── navigation.ts     # Header & footer link structure
public/
└── assets/           # Static assets (logo, images)
```

## Key Files

- **`src/config.yaml`** — Site name, SEO metadata, blog settings
- **`src/data/showroom.json`** — Single source of truth for all showroom details
- **`src/navigation.ts`** — Header navigation links & footer structure
- **`src/components/CustomStyles.astro`** — Brand colors (orange) & font (Outfit)

## License

MIT
