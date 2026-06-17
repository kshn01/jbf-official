# Agent Guidelines (AGENTS.md)

This file contains context and strict guidelines for any AI coding assistants or agents interacting with this repository. 

## Project Context
- **Client:** Jay Bhavani Furniture (JBF), a premium furniture showroom in Navsari.
- **Design Philosophy:** Premium, modern, and trustworthy. The site uses the `Outfit` font and a mix of soft `slate-50` backgrounds with deep `slate-950` sections. The primary brand color is Orange (`brand-500`).
- **Core Architecture:** The site is fully static, built with Astro.

## Strict Development Rules

### 1. Base URL Routing (CRITICAL)
This project is deployed to GitHub Pages under the subpath `/jbf-official/`. 
**Rule:** You MUST use the normalized `baseUrl` variable for ALL internal links and asset paths. Never hardcode absolute paths like `/assets/image.png` or `/contact/`.
*Correct Usage:*
```astro
---
const rawBase = import.meta.env.BASE_URL ?? '/';
const baseUrl = rawBase.endsWith('/') ? rawBase : rawBase + '/';
---
<a href={`${baseUrl}contact/`}>Contact Us</a>
<img src={`${baseUrl}assets/logo.png`} />
```

### 2. Data Management
- Do not hardcode showroom details (phone numbers, addresses, hours) into components.
- Always import and use data from `src/data/showroom.json`.

### 3. Styling
- Use Tailwind CSS exclusively for styling.
- Do not write custom CSS in `<style>` blocks unless absolutely necessary for complex animations not supported by Tailwind.
- Ensure all links and interactive elements have appropriate `hover:` and `transition` states.

### 4. Blog Content
- Blog posts use Astro's Content Collections (`src/content/blog/`).
- Markdown files should contain strict frontmatter (title, description, pubDate, heroImage, tags).
- Use `@tailwindcss/typography` (the `prose` class) for rendering markdown content in `src/pages/blog/[slug].astro`.

### 5. Contact & Map Elements
- When linking to the physical showroom, provide an embedded map and a distinct "Get Directions" button that links to `showroom.mapUrl`.
