# The Harralsons Wedding Site

A beautiful "Coming Soon" wedding website built with React and Vite.

## Features

- Elegant hero section with "The Harralsons" title
- "Coming soon..." subtitle
- Interactive photo gallery with lightbox view
- Responsive design for all devices
- Modern, wedding-themed styling

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy to your domain.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Adding Your Photos

To add your own photos to the gallery:

1. Create a `public/images` folder in the project root
2. Add your photos to that folder
3. Update the `photos` array in `src/PhotoGallery.jsx`:

```jsx
const [photos] = useState([
  {
    id: 1,
    src: '/images/photo1.jpg',
    alt: 'Description of photo 1'
  },
  // Add more photos...
])
```

Or you can keep using external URLs if you prefer.

## Deployment

You can deploy this site to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Your own web server

Just build the project and upload the `dist` folder contents to your hosting provider.

