# Dwight Richard T. Mongaya - Digital Portfolio

An AI-generated/custom-built CV website showcasing my professional background, skills, education, and projects as a 2nd-year Computer Science student at St. Paul University Philippines.

## 🎯 Project Overview

This is a modern, fully responsive CV website built with cutting-edge web technologies. The site features:

- **Professional Profile Page** with contact information and social links
- **Technical Skills Section** with detailed categorization
- **Leadership & Experience** showcasing current roles and responsibilities  
- **Education** highlighting academic background
- **Academic Projects & Learning** documenting coursework and development journey
- **Professional Development** listing seminars and conventions attended
- **Projects Portfolio** displaying personal and academic projects
- **Contact Page** with messaging capabilities and direct contact information

## 🎨 Design Features

### Color Scheme
- **Dark Mode**: Dark Green (#050f0c) background with Beige (#c9ae87) text
- **Light Mode**: Beige (#fefdfb) background with Dark Green (#1b4d3e) text
- Carefully selected color palette provides excellent contrast and readability

### Responsive Design
- Fully responsive layout that works on mobile, tablet, and desktop
- Mobile-first design approach with proper breakpoints
- Touch-friendly interactive elements

### Dark/Light Mode Toggle
- Integrated theme toggle in the navigation header
- Persisted theme preference using `next-themes`
- System preference detection with user override capability
- Smooth transitions between themes

## 🛠 Tech Stack

**Frontend Framework:**
- Next.js 16 (Latest)
- React 19
- TypeScript for type safety

**Styling & Components:**
- Tailwind CSS for utility-first styling
- Shadcn UI component patterns
- Custom component library

**Theme Management:**
- next-themes for dark/light mode
- lucide-react for consistent iconography

**Development Tools:**
- ESLint for code quality
- PostCSS for CSS processing
- TypeScript compiler for type checking

## 📦 Dependencies

```json
{
  "dependencies": {
    "next": "^16.2.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "next-themes": "^0.5.1",
    "lucide-react": "^0.379.0",
    "tailwindcss": "^4.0.0",
    "clsx": "^2.1.1",
    "class-variance-authority": "^0.7.0",
    "tailwind-merge": "^2.6.1"
  }
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/DwightRTM/my-digital-portfolio.git
cd my-digital-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` in your browser to see the site in development mode.

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
my-digital-portfolio/
├── app/
│   ├── page.tsx              # Main profile page
│   ├── layout.tsx            # Root layout with providers
│   ├── globals.css           # Global styles with CSS variables
│   ├── projects/
│   │   └── page.tsx          # Projects portfolio page
│   └── contact/
│       └── page.tsx          # Contact page with form
├── components/
│   ├── header.tsx            # Navigation header with theme toggle
│   ├── footer.tsx            # Footer with links and info
│   ├── providers.tsx         # Theme provider wrapper
│   └── theme-toggle.tsx      # Dark/light mode toggle button
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind CSS configuration with custom colors
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 📄 Page Descriptions

### Profile Page (/)
The main landing page featuring:
- Professional avatar with initials
- Personal introduction and bio
- Contact information (email, phone, location)
- Quick links to GitHub and LinkedIn
- Technical skills by category (Frontend, Backend, Languages)
- Current leadership roles and responsibilities
- Education background
- Academic projects and learning path
- Seminars and conventions attended

### Projects Page (/projects)
Showcases portfolio of work:
- Digital Portfolio Website (this site)
- Web Development Projects
- Programming Assignments
- Robotics & Automation Experience
- Project status, technologies, and descriptions

### Contact Page (/contact)
Provides multiple contact methods:
- Email, phone, and location information
- Social media links (GitHub, LinkedIn)
- Contact form for direct messages
- Form submission feedback (success message)

## 🎯 Key Features

1. **Dark/Light Mode Toggle** - Seamless theme switching with persistence
2. **Fully Responsive** - Optimized for all screen sizes
3. **Performance Optimized** - Static site generation for fast load times
4. **Type Safe** - Full TypeScript support throughout
5. **SEO Optimized** - Proper metadata and semantic HTML
6. **Accessible** - WCAG compliant with proper color contrast
7. **Professional Design** - Modern aesthetic with carefully chosen typography and spacing

## 🔐 Content

The website contains:
- Real professional information from my CV (my-cv.md)
- Actual contact details and social profiles
- Authentic educational background and current roles
- Genuine technology interests and skills
- Real seminar and convention attendance records

## 📞 Contact & Connect

- **Email**: dwightmongaya@spup.edu.ph
- **Phone**: 0915-528-1202
- **Location**: Centro West, Allacapan, Cagayan, Philippines
- **GitHub**: https://github.com/DwightRTM
- **LinkedIn**: https://www.linkedin.com/in/dwightrt-mongaya-9085552b4

## 🌐 Deployment

### Vercel Deployment

The website is optimized for deployment on Vercel:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel
```

Push to GitHub and connect the repository to Vercel for automatic deployments on every push.

**Live Site**: [Your Vercel URL will appear here after deployment]

## 📧 Acknowledgments

Built with modern web development best practices using:
- Next.js for production-grade React framework
- Tailwind CSS for efficient styling
- TypeScript for code reliability
- Dark/light mode support for accessibility and user preference

## 📄 License

This project is personal portfolio work. Feel free to use it as inspiration for your own portfolio.

---

**Last Updated**: March 2026
**Status**: Actively Maintained
