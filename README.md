# M. Hollyfeet & Sons — Next.js Site

A Next.js 14 (App Router) + TypeScript + Tailwind CSS conversion of the original
React component, preserving the original design, layout, functionality, and
responsiveness.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
├── app/
│   ├── layout.tsx      # Root layout + metadata
│   ├── page.tsx        # Renders the Mohyl page component
│   └── globals.css     # Tailwind directives + global styles
├── components/
│   └── Mohyl.tsx        # The full landing page (navbar, hero, about,
│                         # products, global reach, why-us, CTA, contact, footer)
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Notes

- Icons are from `lucide-react`.
- Hero and About section images are loaded from Unsplash via a plain `<img>` tag.
  If you'd like to switch to `next/image` for optimization, the `images.remotePatterns`
  entry for `images.unsplash.com` is already configured in `next.config.js`.
- The contact form currently shows a simple `alert()` on submit as a placeholder —
  wire it up to your API route, email service, or form backend of choice.
