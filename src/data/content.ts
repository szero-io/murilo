export const capabilities = [
  {
    title: 'Technology Leadership',
    description:
      'Leading teams, shaping technology strategies, and connecting technical decisions with organizational goals.'
  },
  {
    title: 'Software Architecture',
    description:
      'Designing reliable, scalable, and maintainable systems with a focus on long-term quality.'
  },
  {
    title: 'Software & Systems Development',
    description:
      'Turning complex requirements into practical solutions through sound engineering practices.'
  },
  {
    title: 'Infrastructure & Platforms',
    description:
      'Building and managing computing environments that support development, research, and production systems.'
  },
  {
    title: 'Research & Innovation',
    description:
      'Exploring emerging technologies and connecting academic research with real-world applications.'
  },
  {
    title: 'Interoperability & Digital Health',
    description:
      'Developing connected healthcare systems through standards and technologies such as HL7 FHIR.'
  }
] as const;

export const researchInterests = [
  'Software Architecture',
  'Machine Learning & AI',
  'Reasoning Systems',
  'Distributed Systems',
  'Healthcare Interoperability',
  'Applied Computing'
] as const;

export const publications = [
  {
    title: 'Partial Reasoning in Language Models: Search and Refinement Guided by Uncertainty',
    detail: 'Language model reasoning · arXiv 2026',
    href: 'https://arxiv.org/abs/2601.12040'
  },
  {
    title: 'Hubsaúde: A Proposal for Statewide Interoperability',
    detail: 'Healthcare interoperability · 2026',
    href: 'https://doi.org/10.63756/cegrafufg.hub.ebook.978-85-495-1297-0/2026'
  },
  {
    title: 'Health Information Security Policy: Mandatory Requirements for Electronic Health Data Exchange',
    detail: 'Health information security · 2026',
    href: 'https://doi.org/10.63756/cegrafufg.pol.ebook.978-85-495-1308-3/2026'
  },
  {
    title: 'Sliding Puzzles Gym: A Scalable Benchmark for State Representation in Visual Reinforcement Learning',
    detail: 'Visual reinforcement learning · ICML 2025',
    href: 'https://arxiv.org/abs/2410.14038'
  },
  {
    title: 'Reinforcement Learning for Debt Pricing: A Case Study in Financial Services',
    detail: 'Applied reinforcement learning · RLC 2025 Workshop',
    href: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7XlZS0gAAAAJ&citation_for_view=7XlZS0gAAAAJ:9yKSN-GCB0IC'
  },
  {
    title: 'An undergraduate Software Engineering practice course: bridging the academia-industry gap',
    detail: 'Software engineering education · 2024',
    href: 'https://doi.org/10.5753/sbes.2024.3516'
  }
] as const;

export const selectedWork = [
  {
    category: 'Reasoning with Language Models',
    title: 'Partial Reasoning in Language Models',
    description:
      'PREGU uses output uncertainty to decide when partial reasoning needs localized refinement, focusing computation where it is most useful.',
    href: 'https://arxiv.org/abs/2601.12040',
    linkLabel: 'Read on arXiv'
  },
  {
    category: 'Visual Reinforcement Learning',
    title: 'Sliding Puzzles Gym',
    description:
      'An ICML 2025 benchmark for isolating and scaling state-representation challenges in visual reinforcement learning.',
    href: 'https://arxiv.org/abs/2410.14038',
    linkLabel: 'Read on arXiv'
  },
  {
    category: 'Healthcare Interoperability',
    title: 'Hubsaúde',
    description:
      'A published proposal for statewide healthcare interoperability, connecting institutions and health information through shared standards.',
    href: 'https://doi.org/10.63756/cegrafufg.hub.ebook.978-85-495-1297-0/2026',
    linkLabel: 'Read the publication'
  },
  {
    category: 'HL7 FHIR',
    title: 'Clinical Record FHIR demonstration',
    description:
      'A reproducible FHIR Shorthand workflow that builds and validates Brazilian clinical record examples with SUSHI and the official HL7 validator.',
    href: 'https://github.com/muriloluz/curso-fhir-demonstracao',
    linkLabel: 'View on GitHub'
  },
  {
    category: 'Research Infrastructure',
    title: 'FHIR implementation guide environment',
    description:
      'A containerized environment for building, running, and reviewing HL7 FHIR implementation guides.',
    href: 'https://github.com/muriloluz/fhir-ambiente',
    linkLabel: 'View on GitHub'
  },
  {
    category: 'Technical Education & Mentorship',
    title: 'Software Engineering practice course',
    description:
      'A published account of an undergraduate practice course designed to bring academic learning closer to real software work.',
    href: 'https://doi.org/10.5753/sbes.2024.3516',
    linkLabel: 'Read the paper'
  }
] as const;
