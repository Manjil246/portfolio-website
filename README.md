# Manjil Dhungana - Full Stack Developer Portfolio ⚡️

A modern, responsive portfolio website showcasing my work as a Full Stack Developer. Built with Vite, TypeScript, React, Tailwind CSS, and shadcn/ui components with a premium dark theme and coding aesthetic.

## 🚀 Features

- ⚡️ **Vite** - Lightning fast build tool and dev server
- 🔷 **TypeScript** - Type-safe development
- ⚛️ **React** - Modern component-based architecture
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, accessible UI components
- 🌙 **Premium Dark Theme** - Modern coding aesthetic with matrix-inspired design
- 📱 **Fully Responsive** - Works perfectly on all devices
- ✨ **Custom Animations** - Typewriter effects, matrix rain, neon glows
- 🎯 **Terminal UI** - Command-line inspired interface elements
- 🔍 **SEO Optimized** - Meta tags and structured data
- 📊 **Analytics Ready** - Google Analytics integration

## 📋 Sections

- **Hero** - Introduction with terminal-style typing animation and matrix effects
- **About** - Personal information, mission, and career goals
- **Experience** - Professional work history with company logos
- **Skills** - Technical skills organized by category (Frontend, Backend, Database, etc.)
- **Education** - Academic background and achievements
- **Contact** - Contact information with interactive cards and terminal status

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm
- **Fonts**: JetBrains Mono (coding aesthetic)
- **Animations**: Custom CSS keyframes and Tailwind utilities

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Manjil246/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
personal-portfolio/
├── src/
│   ├── assets/            # Images and other assets
│   │   ├── img/          # Profile, skill logos, company logos
│   │   └── resume/       # Resume PDF
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components (Button, Card, Badge)
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── EducationSection.tsx
│   │   └── ContactSection.tsx
│   ├── lib/              # Utility functions (cn, utils)
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles with dark theme
├── index.html            # HTML template with favicon
├── tailwind.config.js    # Tailwind configuration with custom theme
├── postcss.config.js     # PostCSS configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Dark Theme Colors

The custom dark theme colors are defined in `tailwind.config.js`:

```javascript
colors: {
  'matrix-green': '#00FF7F',
  'terminal-bg': '#0D1117',
  'terminal-border': '#21262D',
  'code-bg': '#161B22',
  'dark-bg': '#0D1117',
  'dark-card': '#161B22'
}
```

### Content

Update the content in each component file:
- Personal information in `AboutSection.tsx`
- Work experience in `ExperienceSection.tsx`
- Skills and technologies in `SkillsSection.tsx`
- Education in `EducationSection.tsx`
- Contact info in `ContactSection.tsx`

### Images

Replace images in `src/assets/img/` with your own:
- Profile picture: `profile.jpg` (also used as favicon)
- Company logos: `kreeadddalabs_logo.jpg`, `DPN_LOGO_mrvh8l.png`
- Skill icons: Various technology logos (React, Node.js, TypeScript, etc.)

## 📊 Analytics

Google Analytics and Tag Manager are already integrated. Update the tracking IDs in `App.tsx`:

```typescript
// Google Tag Manager
'GTM-PGZH8HT'

// Google Analytics
'UA-126939217-2'
```

## 🚀 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to GitHub Pages

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Contact

**Manjil Dhungana** - Full Stack Developer

- 📧 **Email**: manjildhungana8@gmail.com
- 💼 **LinkedIn**: [linkedin.com/in/manjildhungana](https://www.linkedin.com/in/manjildhungana/)
- 🐙 **GitHub**: [github.com/Manjil246](https://github.com/Manjil246)
- 📱 **Phone**: +91 6362428010
- 📍 **Location**: Pune, Maharashtra, India

**Project Link**: [https://github.com/Manjil246/personal-portfolio](https://github.com/Manjil246/personal-portfolio)

---

⭐ **Star this repository if you found it helpful!**
