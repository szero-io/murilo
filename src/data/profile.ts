export const profile = {
  name: 'Murilo Lopes',
  givenName: 'Murilo',
  familyName: 'Lopes da Luz',
  role: 'Head de TI do CEIA · Founder da Szero',
  company: 'CEIA · Szero',
  location: 'Brazil',
  intro:
    'Head de TI do CEIA and Founder da Szero, leading technology, software architecture and applied AI initiatives.',
  shortIntro:
    'Technology leadership, software architecture and applied AI built from first principles.',
  image: '/images/murilo.webp',
  email: 'hello@szero.io',
  github: 'https://github.com/muriloluz',
  linkedin: 'https://www.linkedin.com/in/murilo-lopes-da-luz-b3749728/',
  szero: 'https://szero.io',
  site: 'https://murilo.szero.io'
} as const;

export const contacts = [
  { label: 'LinkedIn', value: 'linkedin.com/in/murilo-lopes-da-luz-b3749728', href: profile.linkedin },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Szero', value: 'szero.io', href: profile.szero },
  { label: 'GitHub', value: '@muriloluz', href: profile.github }
] as const;
