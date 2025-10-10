# Blue Marine - Bridal Palace Landing Page

A beautiful Hebrew landing page for Blue Marine Bridal Palace, built with Next.js 15, TypeScript, and Tailwind CSS. This project was generated from Figma designs using the Figma MCP Server.

## Features

- ✨ Fully responsive design
- 🎨 Hebrew RTL support
- 🖼️ Interactive gallery slider
- ❓ Collapsible FAQ section
- 📍 Location map and contact information
- 🎯 Modern React components with TypeScript
- 🚀 Optimized images with Next.js Image component

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Noto Sans Hebrew, Source Serif Pro
- **Image Optimization:** Next.js Image

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd blue-marine-landing
```

2. Install dependencies:
```bash
npm install
```

3. Download assets from Figma:
```bash
node public/download-assets.js
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
blue-marine-landing/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main landing page
├── public/
│   ├── gallery/              # Gallery images
│   ├── logo.png              # Blue Marine logo
│   ├── hero-image.jpg        # Hero section image
│   ├── map.jpg               # Location map
│   └── download-assets.js    # Asset download script
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Design System

### Color Palette

- **Primary:** `#4c6973` - Deep teal blue
- **Primary Light:** `#6e8891` - Light teal
- **Secondary:** `#d9c7a3` - Gold/beige
- **Secondary Dark:** `#bfa273` - Dark gold
- **Secondary Light:** `#ede1c9` - Light beige
- **Background:** `#faf9f7` - Off-white

### Typography

- **Headings:** Noto Sans Hebrew (Light, Semibold)
- **Body:** Noto Sans Hebrew (Regular, Medium)
- **Branding:** Source Serif Pro (Regular, Semibold)

## Components

- **NavLink** - Navigation menu items
- **Button** - Call-to-action buttons
- **FeatureCard** - Feature highlight cards with emoji icons
- **FAQItem** - Expandable FAQ accordion items

## Deployment

### Deploy to Vercel

The easiest way to deploy this Next.js app is with Vercel:

```bash
npm run build
```

Then connect your repository to Vercel for automatic deployments.

### Environment Variables

No environment variables are required for basic deployment.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact

Blue Marine - Bridal Palace
- **Address:** אקסודוס 30, אשדוד, ישראל
- **Phone:** 050-358-6949

## License

This project was created for Blue Marine Bridal Palace.

---

Built with ❤️ using Next.js and designed in Figma
