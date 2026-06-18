import { getPermalink, getBlogPermalink, getHomePermalink } from './utils/permalinks';
import showroomData from './data/showroom.json';

const homeUrl = getHomePermalink().replace(/\/$/, '');

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Products', href: `${homeUrl}#features` },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Blog', href: getBlogPermalink() },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [{ text: 'Get Directions', href: showroomData.mapUrl, target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Products',
      links: [
        { text: 'Living Room Sets', href: `${homeUrl}#features` },
        { text: 'Bedroom Furniture', href: `${homeUrl}#features` },
        { text: 'Office Furniture', href: `${homeUrl}#features` },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    &copy; ${new Date().getFullYear()} Jay Bhavani Furniture · All rights reserved.
  `,
};
