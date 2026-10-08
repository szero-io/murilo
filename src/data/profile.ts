export const profile = {
  name: 'Murilo Luz',
  givenName: 'Murilo',
  familyName: 'Luz',
  role: 'Computer Scientist · Technology Leader · Software Architect',
  company: 'CEIA · Szero',
  location: 'Brazil',
  intro:
    'I work at the intersection of software, research, and technology, turning complex challenges into practical, reliable, and meaningful solutions.',
  shortIntro:
    'Computer Scientist, technology leader, and software architect building technology that makes a difference.',
  image: '/images/murilo.webp',
  emailSzero: 'murilo@szero.io',
  emailCeia: 'murilo@ceia.ufg.br',
  phone: '+5562982588782',
  phoneDisplay: '+55 62 98258-8782',
  github: 'https://github.com/muriloluz',
  scholar: 'https://scholar.google.com/citations?user=7XlZS0gAAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/murilo-lopes-da-luz-b3749728/',
  instagram: 'https://www.instagram.com/murilolopesluz/',
  szero: 'https://szero.io',
  site: 'https://murilo.szero.io'
} as const;

export const contacts = [
  { label: 'LinkedIn', value: 'Professional profile', href: profile.linkedin },
  { label: 'Email · Szero', value: profile.emailSzero, href: `mailto:${profile.emailSzero}` },
  { label: 'Email · CEIA', value: profile.emailCeia, href: `mailto:${profile.emailCeia}` },
  { label: 'Phone', value: profile.phoneDisplay, href: `tel:${profile.phone}` },
  { label: 'Instagram', value: '@murilolopesluz', href: profile.instagram },
  { label: 'Szero', value: 'szero.io', href: profile.szero },
  { label: 'GitHub', value: '@muriloluz', href: profile.github }
] as const;

export const primaryContacts = [
  { label: 'Email', value: profile.emailSzero, href: `mailto:${profile.emailSzero}` },
  { label: 'GitHub', value: '@muriloluz', href: profile.github },
  { label: 'LinkedIn', value: 'Professional profile', href: profile.linkedin }
] as const;
