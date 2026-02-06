# Zidan Graphics – Printing & Branding Website

A modern, responsive Next.js website for **Zidan Graphics**, inspired by PrintHub-style printing and branding services. Built with React, Tailwind CSS, Framer Motion, and Lucide icons.

## Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS** v4
- **Framer Motion** – animations and transitions
- **Lucide React** – icons
- **TypeScript**

## Getting Started

1. **Install dependencies** (from project root):

   ```bash
   cd zidan-web
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
zidan-web/
├── app/
│   ├── globals.css      # Global styles & theme
│   ├── layout.tsx       # Root layout & metadata
│   └── page.tsx         # Home page (all sections)
├── components/
│   ├── layout/
│   │   ├── Header.tsx   # Sticky navbar, mobile menu
│   │   └── Footer.tsx   # Links, contact, social
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ProductCategories.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── CorporateBulk.tsx
│   │   └── Testimonials.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── SectionHeader.tsx
│       └── Skeleton.tsx   # For loading states / API integration
├── data/
│   └── dummy.ts          # Dummy products & content (replace with API)
└── lib/
    └── utils.ts
```

## Features

- **Header**: Logo, nav links (Home, Products, Services, Corporate Gifting, About Us, Contact), search icon, “Get Quote” CTA, sticky with shadow on scroll, mobile hamburger menu.
- **Hero**: Headline, subtext, “Get a Quote” / “View Products” CTAs, product mockup images (Unsplash).
- **Product categories**: Grid of 6 categories with hover zoom and shadow.
- **Featured products**: Grid of 4 products with image, name, description, price, “Order Now”.
- **Why Choose Us**: 4 columns (Quality, Pricing, Fast Delivery, Custom Designs) with icons.
- **Corporate & bulk**: Split layout, bullet list, “Request Corporate Quote” CTA.
- **Testimonials**: Card slider with star rating, photo, and auto-rotate.
- **Footer**: Company info, quick links, product links, contact (address, phone, email), social icons, copyright.

Theme: white background, accent **#c41e3a** (red), dark navy **#1a1a2e**, printing/digital-printing feel. All product images use Unsplash (configured in `next.config.ts`). Dummy data is in `data/dummy.ts` and can be replaced with your API.

## Build

```bash
npm run build
npm start
```

## Notes

- Skeleton loaders (`components/ui/Skeleton.tsx`) are ready for when you connect a products API.
- For production, replace placeholder contact details and social links in `Footer.tsx` and update `data/dummy.ts` or hook up your backend.
