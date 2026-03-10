# Portfolio Landing Page 13 - React, Vite, Three.js Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.168-green)](https://threejs.org/)
[![styled-components](https://img.shields.io/badge/styled--components-5.3-DB7093)](https://styled-components.com/)

A single-page portfolio showcase built with React, Vite, and Three.js. It demonstrates scroll-snap sections, 3D visuals with React Three Fiber, a contact form with EmailJS, and a world map with react-simple-maps. Use it as a template for learning modern front-end tooling or as a base for your own portfolio.

- **Live Demo:** [https://portfolio-ui-12.vercel.app/](https://portfolio-ui-12.vercel.app/)

<img width="1898" height="928" alt="Screenshot 2026-03-10 at 11 45 24" src="https://github.com/user-attachments/assets/7a34c72f-a5da-416b-bf1d-b9cfa37cdd8f" /> <img width="1860" height="792" alt="Screenshot 2026-03-10 at 11 45 33" src="https://github.com/user-attachments/assets/a5a953b5-dc59-4a65-995e-b2699268fbb2" /> <img width="1853" height="874" alt="Screenshot 2026-03-10 at 11 45 55" src="https://github.com/user-attachments/assets/a9591257-ce71-4c7f-a274-ea4931c547e4" /> <img width="1886" height="920" alt="Screenshot 2026-03-10 at 11 46 11" src="https://github.com/user-attachments/assets/12b950ae-2ff5-4f55-b434-042288cc0f2d" />

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Features & Functionality](#features--functionality)
- [Components Walkthrough](#components-walkthrough)
- [Reusing Components](#reusing-components)
- [API & Backend](#api--backend)
- [Deployment](#deployment)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Introduction

This project is a **front-end-only** portfolio landing page. It has no backend; the contact form uses **EmailJS** to send emails from the browser. The app is a single route: one scrollable page with four main sections (Hero, Who, Works, Contact). All 3D content is rendered with **React Three Fiber** and **Three.js**; styling is done with **styled-components**. The goal is to provide a clear, educational codebase for React + Vite + 3D + forms.

---

## Tech Stack

| Category       | Technology                                                                   |
| -------------- | ---------------------------------------------------------------------------- |
| Build tool     | Vite 6                                                                       |
| UI library     | React 18                                                                     |
| Styling        | styled-components                                                            |
| 3D rendering   | Three.js, @react-three/fiber, @react-three/drei, @react-three/postprocessing |
| Maps           | react-simple-maps                                                            |
| Email (client) | @emailjs/browser                                                             |
| Linting        | ESLint 9 (flat config)                                                       |

---

## Project Structure

```bash
portfolio-ui-12/
├── index.html              # Entry HTML, meta tags, initial CSS
├── package.json
├── vite.config.js          # Vite config, manual chunks for 3D/maps
├── vercel.json             # Vercel build/output config
├── eslint.config.js        # ESLint flat config (src only)
├── public/
│   ├── vite.svg            # Favicon
│   ├── features.json       # GeoJSON for world map (Map.jsx)
│   └── shoe.gltf           # 3D model for Product Design section
├── src/
│   ├── main.jsx            # React root
│   ├── App.jsx             # Scroll container, section layout
│   └── components/
│       ├── Navbar.jsx      # Top nav (logo, links, Hire Now)
│       ├── Hero.jsx        # Hero + 3D sphere
│       ├── Who.jsx         # “Who we Are” + Cube
│       ├── Works.jsx       # Tabs: Web Design / Development / Product Design
│       ├── Contact.jsx     # Form + Map
│       ├── Cube.jsx        # R3F cube with render texture text
│       ├── Atom.jsx        # R3F atom + bloom (Development tab)
│       ├── Development.jsx # Canvas + Atom
│       ├── WebDesign.jsx   # Canvas + Mac (optional mac-draco.glb)
│       ├── ProductDesign.jsx # Canvas + Shoe (shoe.gltf)
│       ├── Mac.jsx         # GLB mesh (mac-draco.glb)
│       ├── Shoe.jsx        # GLTF mesh (shoe.gltf)
│       └── Map.jsx         # react-simple-maps world map
└── src/img/                # Static images (logo, line, moon, bg.jpeg, etc.)
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (or 20+ recommended)
- **npm** (or yarn/pnpm)

### Install and run

```bash
# Clone the repository (or use your fork)
git clone <your-repo-url>
cd portfolio-ui-12

# Install dependencies
npm install

# Start development server (http://localhost:5173 by default)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Environment Variables

The app does **not** read environment variables by default. The contact form in `Contact.jsx` uses **EmailJS** with placeholder IDs:

```javascript
emailjs.sendForm(
  "service_id", // Replace with your EmailJS Service ID
  "template_id", // Replace with your EmailJS Template ID
  ref.current,
  "public_key", // Replace with your EmailJS Public Key
);
```

To keep keys out of the repo and support different environments:

1. **Create a `.env` file** in the project root (`.env` is already in `.gitignore` so it won’t be committed):

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. **Use them in code** (e.g. in `Contact.jsx`):

   ```javascript
   import.meta.env.VITE_EMAILJS_SERVICE_ID;
   import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
   import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
   ```

3. **Get EmailJS values**: Sign up at [https://www.emailjs.com/](https://www.emailjs.com/), create a service, a template, and copy Service ID, Template ID, and Public Key.

4. **Optional**: Add a `.env.example` (no real values) so others know which variables are needed:

   ```env
   VITE_EMAILJS_SERVICE_ID=
   VITE_EMAILJS_TEMPLATE_ID=
   VITE_EMAILJS_PUBLIC_KEY=
   ```

---

## Scripts

| Command           | Description                 |
| ----------------- | --------------------------- |
| `npm run dev`     | Start Vite dev server (HMR) |
| `npm run build`   | Production build → `dist/`  |
| `npm run preview` | Serve `dist/` locally       |
| `npm run lint`    | Run ESLint on `src/`        |

---

## Features & Functionality

- **Single-page layout**: One scrollable page with `scroll-snap-type: y mandatory` for full-height sections.
- **Hero**: Headline, “What We Do”, CTA, and a 3D distorted sphere (R3F + Drei).
- **Who**: “Who we Are” copy and an auto-rotating 3D cube with render-to-texture text (Cube.jsx).
- **Works**: Tabbed list (Web Design, Development, Illustration, Product Design, Social Media). Only three tabs render 3D: Web Design (Mac), Development (Atom), Product Design (Shoe). Others can be wired later.
- **Contact**: Form (name, email, message) sent via EmailJS; world map (react-simple-maps) with annotations (e.g. Paris, Warsaw).
- **Responsive**: Breakpoints around 768px; some sections stack or hide on small screens.
- **No routing**: Single route; no React Router. All content is in `App.jsx` and its children.

---

## Components Walkthrough

### App.jsx

Root layout: a full-height scroll container with background image and four sections. No state; purely presentational.

```jsx
<Container>
  {" "}
  {/* scroll-snap, overflow-y: auto */}
  <Hero />
  <Who />
  <Works />
  <Contact />
</Container>
```

---

### Hero.jsx

- Renders **Navbar** and a two-column layout: left (title, subtitle, description, button), right (R3F Canvas with Sphere + MeshDistortMaterial, plus a static moon image).
- Uses `Suspense` around the Canvas to avoid blocking the rest of the UI while 3D loads.

---

### Who.jsx

- Left: R3F Canvas with **Cube** and OrbitControls (autoRotate).
- Right: “Think outside the square space”, “Who we Are”, short copy, “See our works” button.

---

### Works.jsx

- **State**: `work` holds the selected tab (e.g. `"Web Design"`, `"Development"`, `"Product Design"`).
- Left: List of categories; clicking sets `work`.
- Right: Renders **WebDesign**, **Development**, or **ProductDesign** based on `work`. Each shows a Canvas and a small description overlay.

---

### Contact.jsx

- **Ref**: `ref` on the form for EmailJS.
- **State**: `success` (true/false/null) for submit feedback.
- **handleSubmit**: Calls `emailjs.sendForm` with service ID, template ID, form ref, and public key. On success/failure, sets `success` and shows a message.
- Right side: **Map** (world map with annotations).

---

### 3D components (Cube, Atom, Mac, Shoe)

- **Cube.jsx**: Box with `RenderTexture` and Drei `Text`; `useFrame` animates the text. No external model.
- **Atom.jsx**: Custom shape with `THREE.EllipseCurve`, Drei `Line`/`Sphere`, and postprocessing `Bloom`.
- **Mac.jsx**: Uses `useGLTF("/mac-draco.glb")`. Ensure `mac-draco.glb` is in `public/` if you use the Web Design tab.
- **Shoe.jsx**: Uses `useGLTF("/shoe.gltf")` (included in `public/`). Preloads with `useGLTF.preload("/shoe.gltf")`.

---

### Map.jsx

- **react-simple-maps**: `ComposableMap`, `Geographies` (data from `/features.json`), `Geography`, `Annotation`. Styles and projection are set via props; annotations show labels (e.g. Paris, Warsaw).

---

## Reusing Components

- **Navbar**: Copy `Navbar.jsx` and adjust logo, links, and button. Replace `./img/logo.png` and other assets.
- **Hero**: Reuse the structure; swap copy and replace the R3F sphere with another Drei/R3F scene if desired.
- **Cube / Atom**: Drop into any R3F `<Canvas>`; they are self-contained. Adjust materials and text in Cube, or curve/line params in Atom.
- **Shoe / Mac**: Use in any `<Canvas>`; ensure the GLB/GLTF URL matches your `public/` assets. You can pass `position`/`scale` via props.
- **Map**: Use `Map.jsx` as-is or change `projectionConfig`, `fill`/`stroke`, and `Annotation` coordinates/labels. Keep `features.json` in `public/` (or point `geography` to another URL).
- **Contact form**: Replace EmailJS IDs with your own (or env vars). Same pattern works with other form endpoints if you replace `emailjs.sendForm` with `fetch` to your API.

---

## API & Backend

- **No custom backend**. The only “API” is **EmailJS**: the browser sends the form to EmailJS, which then sends an email using your configured service and template. No server code in this repo.
- **Map data**: `public/features.json` is static GeoJSON loaded by react-simple-maps from the same origin.

---

## Deployment

- **Vercel**: Connect the repo; use build command `npm run build` and output directory `dist`. `vercel.json` already sets these.
- **Elsewhere**: Run `npm run build` and serve the `dist/` folder as a static site. Ensure env vars (if you use them) are set in the host’s dashboard.

---

## Keywords

Portfolio, React, Vite, Three.js, React Three Fiber, Drei, styled-components, single-page, scroll-snap, EmailJS, contact form, world map, react-simple-maps, 3D, WebGL, front-end, demo, educational, open-source.

---

## Conclusion

This repo is a **front-end portfolio demo** with React, Vite, Three.js, styled-components, EmailJS, and react-simple-maps. Use it to learn the stack, reuse sections (Hero, Who, Works, Contact, Map, 3D components), or extend it with your own content and env-based EmailJS config. No backend is required for the current feature set.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
