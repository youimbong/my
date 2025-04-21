# Portfolio Website

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- TypeScript for type safety
- Next.js for server-side rendering
- Tailwind CSS for styling
- Internationalization with next-i18next (English and Korean)
- Responsive design

## Project Structure

```
├── components/       # React components
├── pages/            # Next.js pages
├── public/           # Static assets
│   └── locales/      # i18n translation files
│       ├── en/       # English translations
│       └── ko/       # Korean translations
├── styles/           # Global styles
└── types/            # TypeScript type definitions
```

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## TypeScript

This project uses TypeScript for type safety. Run type checking with:

```bash
npm run type-check
```

## Internationalization

The website supports English and Korean languages. Translation files are located in the `public/locales` directory.

## Building for Production

```bash
npm run build
npm start
```