// Club details used across the site. Safe to edit by hand.

export const site = {
  name: 'Ladies in High Heels Plymouth',
  shortName: 'LIHH Plymouth',
  strapline: 'Celebrate friendship. Inspire each other. Shine together.',
  location: 'Plymouth, Devon',
  memberCount: 478,
  founded: 'June 2024',
  typicalAttendance: '10–20',

  facebookGroupUrl: 'https://www.facebook.com/groups/1010764360646001',
  // Left empty on purpose: an address that nobody reads is worse than none. Fill
  // this in and the Contact link and the gallery's email route appear by themselves.
  contactEmail: '',

  // Path under /public. Set to '' to fall back to a plain gradient hero.
  coverImage: '/images/hero.jpg',

  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/events', label: 'Events' },
    { href: '/join', label: 'Join' },
  ],
};
