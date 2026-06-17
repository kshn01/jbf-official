# Jay Bhavani Furniture (JBF) Official Website

This is the official repository for the Jay Bhavani Furniture website, a custom furniture manufacturer and showroom based in Navsari, Gujarat.

## Tech Stack
- **Framework:** [Astro](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Typography:** Google Fonts (Outfit)
- **Content:** Markdown-based Astro Content Collections (for the Blog)

## Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the local development server:
```bash
npm run dev
```
The site will be available at `http://localhost:4321/`.

### Build & Deployment
This project is configured to be deployed on GitHub Pages under a subpath (`/jbf-official/`).
To build the static site for production:
```bash
npm run build
```
The output will be generated in the `dist/` directory.

## Project Structure
- `src/pages/`: Contains the main application routes (`index.astro`, `contact.astro`, etc.).
- `src/components/`: Reusable UI components (`Header`, `Footer`, `ProductCard`, etc.).
- `src/layouts/`: Base HTML layouts.
- `src/data/`: JSON files acting as a lightweight database for showroom details and product highlights.
- `src/content/blog/`: Markdown files for blog posts.
- `public/`: Static assets (images, icons) that are copied directly to the build output.
