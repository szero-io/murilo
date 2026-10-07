export const profile = {
  name: 'Murilo Luz',
  givenName: 'Murilo',
  familyName: 'Luz',
  role: 'Head de TI do CEIA · Founder da Szero',
  company: 'CEIA · Szero',
  location: 'Brazil',
  intro:
    'Head de TI do CEIA and Founder da Szero, leading technology, software architecture and applied AI initiatives.',
  shortIntro:
    'Technology leadership, software architecture and applied AI built from first principles.',
  image: '/images/murilo.webp',
  emailSzero: 'murilo@szero.io',
  emailCeia: 'murilo@ceia.ufg.br',
  phone: '+5562982588782',
  phoneDisplay: '+55 62 98258-8782',
  github: 'https://github.com/muriloluz',
  linkedin: 'https://www.linkedin.com/in/murilo-lopes-da-luz-b3749728/',
  instagram: 'https://www.instagram.com/murilolopesluz/',
  szero: 'https://szero.io',
  site: 'https://murilo.szero.io'
} as const;

export const contacts = [
  { label: 'LinkedIn', value: 'Perfil no LinkedIn', href: profile.linkedin },
  { label: 'Email · Szero', value: profile.emailSzero, href: `mailto:${profile.emailSzero}` },
  { label: 'Email · CEIA', value: profile.emailCeia, href: `mailto:${profile.emailCeia}` },
  { label: 'Phone', value: profile.phoneDisplay, href: `tel:${profile.phone}` },
  { label: 'Instagram', value: '@murilolopesluz', href: profile.instagram },
  { label: 'Szero', value: 'szero.io', href: profile.szero },
  { label: 'GitHub', value: '@muriloluz', href: profile.github }
] as const;
