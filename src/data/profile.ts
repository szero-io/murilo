export const profile = {
  name: 'Murilo Lopes',
  givenName: 'Murilo',
  familyName: 'Lopes da Luz',
  role: 'Software Architect & AI Researcher',
  company: 'Szero',
  location: 'Brazil',
  intro:
    'I design software and intelligence systems for complex decisions, interoperable health and applied research.',
  shortIntro:
    'Software architecture, applied AI and research systems built from first principles.',
  image: '/images/murilo.webp',
  email: 'hello@szero.io',
  github: 'https://github.com/muriloluz',
  linkedin: 'https://www.linkedin.com/in/murilo-lopes-da-luz-b3749728/',
  szero: 'https://szero.io',
  site: 'https://murilo.szero.io'
} as const;

export const contacts = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'LinkedIn', value: 'murilo-lopes-da-luz', href: profile.linkedin },
  { label: 'GitHub', value: '@muriloluz', href: profile.github },
  { label: 'Szero', value: 'szero.io', href: profile.szero }
] as const;
