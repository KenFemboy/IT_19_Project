# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## TTMS logo replacement

Use this to replace the dashboard logo placeholder in the TTMS hero card.

1. Add your logo image to:
	- src/assets/logo.png (PNG, JPG, or SVG)
2. Open src/pages/Dashboard.jsx and replace the placeholder source with:

```jsx
import Logo from '../assets/logo.png'
```

3. Swap the placeholder content with the real logo:

```jsx
<img src={Logo} alt="TTMS Logo" className="w-full h-full object-contain" />
```

Fallback behavior: if the image is missing or fails to load, the placeholder tile will remain visible.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
