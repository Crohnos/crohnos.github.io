import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Projects',
      href: getPermalink('/projects'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'GitHub', href: 'https://github.com/Crohnos', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Content',
      links: [
        { text: 'Blog', href: '/blog' },
        { text: 'Projects', href: '/projects' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'GitHub', href: 'https://github.com/Crohnos' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/crohnos/' },
        { text: 'Email', href: 'mailto:johncgraham1997@gmail.com' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/Crohnos' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/crohnos/' },
  ],
  footNote: `Made with <a class="text-blue-600 underline dark:text-muted" href="https://astro.build/"> Astro</a> · All rights reserved.`,
};