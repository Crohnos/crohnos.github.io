# John Graham - Developer Portfolio & Blog

A clean, professional developer portfolio and blog built with Astro, featuring my projects, technical writing, and journey as a full-stack developer.

**Live Site:** [crohnos.github.io](https://crohnos.github.io)

## 🚀 Features

- **Clean, minimal design** focused on content and readability
- **13 blog posts** organized by category (Development, Personal, Projects)
- **Project showcase** highlighting key applications
- **SEO optimized** with proper meta tags and sitemap
- **Dark/light theme** support
- **Mobile responsive** design
- **Fast loading** with Astro's static site generation

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[MDX](https://mdxjs.com/)** - Blog posts with rich content
- **[GitHub Actions](https://github.com/features/actions)** - Automated deployment

## 📁 Project Structure

```
/
├── src/
│   ├── content/post/          # Blog posts organized by category
│   │   ├── development/       # Technical posts
│   │   ├── personal/          # Personal experiences
│   │   └── projects/          # Project deep-dives
│   ├── pages/                 # Site pages
│   │   ├── about.astro        # About page
│   │   ├── projects.astro     # Project showcase
│   │   ├── contact.astro      # Contact information
│   │   └── index.astro        # Homepage
│   └── components/            # Reusable components
├── .github/workflows/         # GitHub Actions deployment
└── public/                    # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Crohnos/crohnos.github.io.git
   cd crohnos.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
npm run preview  # Preview the build locally
```

## 📝 Adding Blog Posts

1. **Create a new `.md` file** in the appropriate category folder:
   - `src/content/post/development/` - Technical posts
   - `src/content/post/personal/` - Personal experiences  
   - `src/content/post/projects/` - Project case studies

2. **Add frontmatter** to your post:
   ```yaml
   ---
   title: "Your Post Title"
   description: "SEO-friendly description"
   publishDate: 2024-12-01T00:00:00Z
   author: "John Graham"
   tags:
     - tag1
     - tag2
   ---
   ```

3. **Write your content** using Markdown or MDX

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch via GitHub Actions.

**Manual deployment steps:**
1. Ensure GitHub Pages is configured to use "GitHub Actions" as the source
2. Push changes to the main branch
3. GitHub Actions will build and deploy automatically

## 🎯 Transformation Notes

This portfolio was transformed from the AstroWind template with these key changes:

1. **Simplified structure** - Removed complex demo content and unnecessary widgets
2. **Content migration** - Organized 13 existing blog posts by category with proper frontmatter
3. **Personal branding** - Updated with personal information, projects, and tech stack
4. **Improved titles** - Enhanced blog post titles for better engagement and SEO
5. **Clean navigation** - Streamlined to Home, About, Blog, Projects, Contact
6. **GitHub Pages optimization** - Configured for main site deployment without base path

## 📄 License

This project maintains the original [MIT License](./LICENSE.md) from the AstroWind template.