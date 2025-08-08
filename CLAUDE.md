# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build for production to ./dist/
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier

## Project Architecture

This is a **personal developer blog/portfolio** built with AstroWind template, streamlined for a full-stack developer working with TypeScript, Go, Rust, and AI.

### Content Structure
- **Blog Posts**: `src/content/post/` organized by category (development/, personal/, projects/)
- **Pages**: Clean structure with Home, About, Blog, Projects, Contact
- **Components**: Essential widgets only (Header, Footer, Hero, Features, BlogLatestPosts)

### Key Features
- Static site generation with Astro
- Tailwind CSS for styling
- MDX support for blog posts
- Category-based blog organization (by directory structure)
- GitHub Pages deployment with Actions to crohnos.github.io
- SEO optimized
- Dark/light theme support

## Deployment
- **Target**: Main GitHub Pages site (crohnos.github.io)
- **Method**: GitHub Actions automatically builds and deploys on push to main branch
- **Configuration**: No base path needed - deploys to root domain

## Development Guidelines
- Follow TypeScript strict mode
- Use Tailwind for all styling
- Organize blog posts by category in subdirectories
- Keep components minimal and focused
- Test builds before deployment with `npm run build && npm run preview`

## Blog Post Structure
- Use `publishDate` field in frontmatter (not pubDatetime)
- Organize in category folders: development/, personal/, projects/
- Include proper SEO descriptions and relevant tags
- All posts authored by "John Graham"