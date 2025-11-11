# Copyright Clinic Landing Page

A modern, responsive landing page for Copyright Clinic - a platform that helps creators, artists, and content professionals protect their intellectual property rights through expert legal consultations and AI-powered tools.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Components](#components)
- [Development Guidelines](#development-guidelines)
- [Browser Support](#browser-support)

## 🎯 Overview

The Copyright Clinic Landing Page is a single-page application (SPA) built with React and TypeScript, designed to showcase the Copyright Clinic platform's features, benefits, and services. The page provides information about copyright protection services for various creative industries including music, video, writing, and art.

## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Hero Section**: Eye-catching introduction with clear call-to-action
- **Service Highlights**: Showcase of key features and benefits
- **Live Consultations**: Information about attorney consultations
- **Trust Indicators**: Social proof and credibility elements
- **Legal Pages**: Terms of Service and Privacy Policy pages
- **Fast Performance**: Optimized for quick loading and smooth interactions

## 🛠 Tech Stack

- **React 19.2.0**: Frontend library for building user interfaces
- **TypeScript 5.9.3**: Type-safe JavaScript
- **React Router DOM 7.9.5**: Client-side routing
- **React Scripts 5.0.1**: Build tooling and configuration
- **CSS3**: Custom styling
- **Testing Library**: Unit and integration testing utilities

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 16.x or higher
- **npm**: Version 8.x or higher (comes with Node.js)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd copyright-landing-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.

- Opens [http://localhost:3000](http://localhost:3000) in your browser
- The page will reload when you make changes
- You may also see lint errors in the console

### `npm test`

Launches the test runner in interactive watch mode.

- Runs all test suites
- See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information

### `npm run build`

Builds the app for production to the `build` folder.

- Correctly bundles React in production mode
- Optimizes the build for best performance
- The build is minified and filenames include hashes
- Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## 📁 Project Structure

```
copyright-landing-page/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── LandingPage/
│   │   ├── assets/
│   │   │   ├── icons/          # SVG icons
│   │   │   ├── Harold.png      # Team member photo
│   │   │   ├── phoneHeroWeb.png
│   │   │   └── webHero.png
│   │   ├── components/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── HaroldSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── LandingFooter.tsx
│   │   │   ├── LandingHeader.tsx
│   │   │   ├── LiveConsultationsSection.tsx
│   │   │   └── TrustedBySection.tsx
│   │   ├── index.ts
│   │   ├── LandingPage.css
│   │   ├── LandingPage.tsx
│   │   ├── Privacy.tsx
│   │   ├── StaticPages.css
│   │   └── Terms.tsx
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── react-app-env.d.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 📄 Pages

### Landing Page (`/`)

The main landing page featuring:

- Hero section with call-to-action
- About section explaining the service
- Live consultations information
- Harold section (team member highlight)
- Trusted by section
- Call-to-action section
- Footer with links and information

### Terms of Service (`/terms`)

Legal terms and conditions for using the Copyright Clinic platform.

### Privacy Policy (`/privacy`)

Detailed privacy policy explaining how user data is collected, used, and protected.

## 🧩 Components

### Core Components

- **`LandingHeader`**: Navigation header with logo and menu items
- **`HeroSection`**: Main hero section with headline and CTA
- **`AboutSection`**: Information about Copyright Clinic services
- **`LiveConsultationsSection`**: Details about live attorney consultations
- **`HaroldSection`**: Team member spotlight section
- **`TrustedBySection`**: Social proof and trust indicators
- **`CTASection`**: Call-to-action section encouraging user engagement
- **`LandingFooter`**: Footer with links, contact info, and legal pages

## 💻 Development Guidelines

### Code Style

- Use TypeScript for all new components
- Follow React best practices and hooks patterns
- Use functional components over class components
- Keep components small and focused on a single responsibility
- Use meaningful variable and function names

### File Naming

- Components: PascalCase (e.g., `HeroSection.tsx`)
- CSS files: Match component name (e.g., `LandingPage.css`)
- Assets: camelCase or kebab-case (e.g., `webHero.png`, `app-store.svg`)

### CSS Organization

- Use component-specific CSS files
- Follow BEM naming convention where applicable
- Keep styles modular and reusable
- Use CSS variables for theme colors and common values

### Adding New Sections

1. Create a new component in `src/LandingPage/components/`
2. Import and add the component to `LandingPage.tsx`
3. Add corresponding styles to `LandingPage.css` or create a new CSS file
4. Update the component exports in `index.ts`

## 🌐 Browser Support

### Production

- \>0.2% market share
- Not dead browsers
- Not Opera Mini

### Development

- Last version of Chrome
- Last version of Firefox
- Last version of Safari

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request with a clear description of changes

## 📝 License

This project is private and proprietary.

## 📧 Contact

For questions or support, please contact the Copyright Clinic team.

---

**Built with ❤️ by BrainX Technologies**
