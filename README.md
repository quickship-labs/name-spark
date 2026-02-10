# NameSpark

A modern, feature-rich name generator website built with Next.js 15, offering 8 different types of name generators.

## Features

- 8 Name Generators:
  - Baby Name Generator (300+ names with meanings)
  - Business Name Generator
  - Username Generator
  - Gamertag Generator
  - Fantasy Name Generator
  - Pet Name Generator
  - WiFi Name Generator (200+ funny names)
  - Team Name Generator

- Modern UI with Tailwind CSS
- Copy-to-clipboard functionality
- SEO optimized with metadata
- Google AdSense integration ready
- Google Analytics integration ready
- Responsive design
- Server and Client Components

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SITE_NAME=NameSpark
NEXT_PUBLIC_SITE_URL=https://namespark.vercel.app
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=your-adsense-id
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id
```

## Project Structure

```
name-spark/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable components
│   ├── data/            # Name databases
│   └── lib/             # Utilities and configs
├── public/              # Static assets
└── package.json
```

## Deploy

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/name-spark)

## License

MIT
