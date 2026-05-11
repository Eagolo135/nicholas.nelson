export const site = {
  person: {
    name: 'Nicholas Nelson',
    title: 'Cybersecurity & AI Systems Student',
    headline:
      'I am building toward security engineering roles that combine cybersecurity analysis, AI evaluation, coding, and clear technical communication.',
    summary:
      'Focused, student-level portfolio built to show research, revision, technical curiosity, and professional direction.',
  },
  direction: {
    currentFocus: 'Security Engineer – AI Trainer',
    shortExplanation:
      'This path fits because it combines cybersecurity judgment, AI evaluation, technical writing, and practical problem solving.',
  },
  links: {
    github: 'https://github.com/Eagolo135/nicholas.nelson',
    linkedin: '',
    email: '',
    liveSite: 'https://eagolo135.github.io/nicholas.nelson/',
  },
  focusPages: [
    {
      slug: 'research',
      title: 'Research',
      summary: 'Why this career direction makes sense.',
    },
    {
      slug: 'projects',
      title: 'Projects',
      summary: 'The required proof and revision story.',
    },
    {
      slug: 'workflow',
      title: 'Workflow',
      summary: 'How AI and planning were used intentionally.',
    },
  ],
  sections: {
    about:
      'I am an IT student interested in the intersection of cybersecurity, artificial intelligence, and software development. My goal is to grow toward roles where security knowledge is used to evaluate AI-generated content, solve technical problems, and improve how AI systems reason about real-world threats and defenses.',
    research:
      'The Security Engineer – AI Trainer direction is attractive because the work depends on accuracy, technical judgment, and the ability to explain why an answer is correct, risky, or incomplete. It is not just about using AI. It is about evaluating AI output for cybersecurity quality and helping improve the system through clear feedback.',
    aiWorkflow:
      'AI was used as a planning, research, and revision tool. I used it to understand the target role, organize the portfolio direction, compare wording options, and test whether the site message stayed clear. I reviewed and edited the results instead of treating them as final.',
  },
  projects: [
    {
      slug: 'midterm-project',
      name: 'Revised Midterm Project',
      status: 'TODO',
      description:
        'Placeholder until the exact midterm project details are supplied.',
      proof: [
        'Original project: TODO',
        'What improved: TODO',
        'Skills shown: TODO',
      ],
    },
    {
      slug: 'job-technology-project',
      name: 'Job Technology Project',
      status: 'TODO',
      description:
        'Placeholder for the assignment or job-research project connected to the chosen career direction.',
      proof: [
        'Role or technology researched: TODO',
        'What I learned: TODO',
        'Connection to career path: TODO',
      ],
    },
  ],
  skills: {
    cybersecurity: ['Networking basics', 'Wireshark / TLS analysis', 'Vulnerability research', 'Security concepts'],
    technical: ['Linux / Ubuntu', 'Bash scripting', 'Git / GitHub', 'HTML / CSS / JavaScript'],
    ai: ['AI-assisted research', 'Prompt refinement', 'AI output evaluation', 'Technical explanation revision'],
    professional: ['Technical writing', 'Project planning', 'Problem solving', 'Clear communication'],
  },
} as const;
