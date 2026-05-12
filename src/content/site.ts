export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type CapabilityDetail = {
  title: string;
  body: string;
};

export type ProjectEntry = {
  slug: string;
  name: string;
  category: string;
  status: string;
  statusTone: 'active' | 'pending' | 'default';
  summary: string;
  description: string;
  tags: string[];
  searchTerms: string[];
  proof: string[];
  capabilities: CapabilityDetail[];
  architecture: CapabilityDetail[];
  commandPreview: string[];
  links?: {
    sourceLabel: string;
    sourceHref: string;
    docsLabel?: string;
    docsHref?: string;
  };
};

type SiteContent = {
  person: {
    name: string;
    title: string;
    headline: string;
    summary: string;
  };
  direction: {
    currentFocus: string;
    shortExplanation: string;
  };
  links: {
    github: string;
    linkedin: string;
    email: string;
    liveSite: string;
  };
  home: {
    eyebrow: string;
    heroHeading: string;
    heroSummary: string;
    heroNote: string;
    metrics: Array<{ label: string; value: string }>;
    proofSignals: string[];
    about: string[];
  };
  focusPages: Array<{
    slug: string;
    title: string;
    summary: string;
  }>;
  research: {
    summary: string;
    signals: string[];
    roleDetails: CapabilityDetail[];
    evaluationStandards: CapabilityDetail[];
  };
  skills: SkillGroup[];
  projects: ProjectEntry[];
};

export const site: SiteContent = {
  person: {
    name: 'Nicholas Nelson',
    title: 'Cybersecurity & AI Systems Student',
    headline: 'Evaluating cybersecurity problems with research, code, and AI-aware technical judgment.',
    summary: 'Recruiter-facing portfolio translating security research, technical review, and project evidence into a clearer case for cloud security and AI evaluation work.',
  },
  direction: {
    currentFocus: 'Cloud Security Engineer - AI Trainer',
    shortExplanation:
      'This direction fits because it combines security fundamentals, cloud awareness, code literacy, and the ability to evaluate AI-generated technical content for accuracy and risk.',
  },
  links: {
    github: 'https://github.com/Eagolo135/nicholas.nelson',
    linkedin: '',
    email: '',
    liveSite: 'https://eagolo135.github.io/nicholas.nelson/',
  },
  home: {
    eyebrow: 'NJIT // Cyber & AI Intelligence',
    heroHeading: 'Evaluating cybersecurity problems with research, code, and AI-aware technical judgment.',
    heroSummary:
      'Security-minded IT student building toward cloud security work that depends on careful research, technically accurate review, and public-ready evidence.',
    heroNote:
      'The site stays recruiter-facing: no framework notes, no inflated claims, and no project detail presented before it is verified.',
    metrics: [
      { label: 'Focus', value: 'Cloud security + AI review' },
      { label: 'Proof lanes', value: 'Research, projects, and technical judgment' },
      { label: 'Current mode', value: 'Student portfolio with explicit pending evidence' },
    ],
    proofSignals: ['Research-led review', 'Code-aware analysis', 'AI-aware judgment'],
    about: [
      'I am an IT student focused on cybersecurity, cloud platforms, and applied AI. The goal of this portfolio is to show how I frame technical problems, review answers carefully, and communicate results in a way another reviewer can trust.',
      'The site is intentionally scoped to resume-appropriate material for the Cloud Security Engineer - AI Trainer direction. That means using evidence carefully, keeping placeholders honest, and showing process without pretending unfinished work is final.',
      'The most important signal here is not volume. It is whether the work demonstrates careful reasoning, technical reading, and the discipline to separate verified proof from work that is still in progress.',
    ],
  },
  focusPages: [
    {
      slug: 'research',
      title: 'Research',
      summary: 'Role fit, evaluation standards, and why cloud-aware AI review matters.',
    },
    {
      slug: 'projects',
      title: 'Projects',
      summary: 'Searchable project evidence with deeper modal detail and explicit pending states.',
    },
  ],
  research: {
    summary:
      'The Cloud Security Engineer - AI Trainer path fits because it depends on technical accuracy, cloud security context, and the judgment to identify where AI-generated cybersecurity guidance is incomplete, unsafe, or misleading.',
    signals: ['Cloud security fit', 'AI evaluation standards', 'Risk-based review', 'Clear technical writing'],
    roleDetails: [
      {
        title: 'Role scope',
        body: 'Evaluate AI-generated cybersecurity content for correctness, completeness, and operational safety, especially where infrastructure and cloud topics are involved.',
      },
      {
        title: 'Why it matters',
        body: 'In cloud security contexts, incomplete guidance can lead to real exposure. Accuracy and missing assumptions matter more than output speed.',
      },
      {
        title: 'Current fit',
        body: 'This portfolio shows student-level work in cybersecurity concepts, scripting, technical reasoning, and explanation review. The emphasis is careful evaluation, not unsupported expertise claims.',
      },
      {
        title: 'Next upgrade',
        body: 'The next step is replacing public placeholders with verified project detail and stronger cloud-specific evidence that directly supports the target role.',
      },
    ],
    evaluationStandards: [
      {
        title: 'Accuracy before polish',
        body: 'A well-written answer is not enough if the technical recommendation is incomplete or unsafe in practice.',
      },
      {
        title: 'Context before recommendation',
        body: 'Cloud and security advice should be grounded in environment, threat model, and operational assumptions before it is trusted.',
      },
      {
        title: 'Evidence before publication',
        body: 'Anything exposed publicly should be backed by verified detail. If the detail is not ready, the site should say so directly.',
      },
    ],
  },
  skills: [
    {
      title: 'Security Foundations',
      summary: 'Core areas used to reason about systems, traffic, and security risk.',
      items: ['Network security basics', 'Traffic analysis', 'Vulnerability research', 'Security concepts'],
    },
    {
      title: 'Technical Stack',
      summary: 'Tools and environments used to inspect, script, and organize technical work.',
      items: ['Linux / Ubuntu', 'Bash scripting', 'Git / GitHub', 'HTML / CSS / JavaScript'],
    },
    {
      title: 'AI Evaluation',
      summary: 'Review habits that focus on whether generated technical content can be trusted.',
      items: ['AI output evaluation', 'Prompt refinement', 'Technical explanation review', 'Accuracy-focused feedback'],
    },
    {
      title: 'Professional Signal',
      summary: 'Communication habits needed for reviewer-facing technical work.',
      items: ['Technical writing', 'Problem solving', 'Clear communication', 'Structured analysis'],
    },
  ],
  projects: [
    {
      slug: 'midterm-project',
      name: 'Revised Midterm Project',
      category: 'Academic Revision',
      status: 'Verification Pending',
      statusTone: 'pending',
      summary: 'Portfolio slot reserved for the revised midterm deliverable once final scope, artifacts, and role-relevant takeaways are verified.',
      description:
        'This entry exists because revision quality matters to the target role. The public version stays cautious until the assignment scope, technical choices, and final outcomes can be published accurately.',
      tags: ['revision', 'evidence control', 'academic work', 'security framing'],
      searchTerms: ['midterm', 'revision', 'security', 'evidence', 'review', 'portfolio'],
      proof: [
        'Original scope will be published after final verification.',
        'Revision details will replace placeholder copy once they can be stated precisely.',
        'Role-relevant takeaways will focus on technical judgment, not filler summary.',
      ],
      capabilities: [
        {
          title: 'Revision tracking',
          body: 'The project is positioned as evidence of iteration quality rather than a one-pass submission.',
        },
        {
          title: 'Public-safe publishing',
          body: 'Only verified assignment detail will be exposed publicly; the rest remains marked as pending.',
        },
        {
          title: 'Role alignment review',
          body: 'The final write-up should show what parts of the work support cloud security and AI review readiness.',
        },
        {
          title: 'Evidence discipline',
          body: 'The modal preserves the structure for deeper proof without inventing technical claims before they are validated.',
        },
      ],
      architecture: [
        {
          title: 'Verify scope and deliverables',
          body: 'Confirm the exact assignment boundaries, what changed in the revision, and which details are safe to publish.',
        },
        {
          title: 'Map the project to role signals',
          body: 'Translate the work into recruiter-readable evidence tied to research quality, code awareness, and security reasoning.',
        },
        {
          title: 'Publish the validated summary',
          body: 'Replace placeholder text only after the final project narrative is technically accurate and concise.',
        },
      ],
      commandPreview: [
        '[SYSTEM] Revised midterm entry initialized.',
        '[STATUS] Final assignment scope awaiting verification.',
        '[NEXT] Replace placeholder evidence with validated technical detail.',
      ],
    },
    {
      slug: 'job-technology-project',
      name: 'Job Technology Project',
      category: 'Career Mapping',
      status: 'Verification Pending',
      statusTone: 'pending',
      summary: 'Career-focused project slot reserved for verified details on the chosen technology or role alignment once final review is complete.',
      description:
        'This project matters because it should connect technical learning to the target job direction. The current version preserves the structure for that case while keeping incomplete facts out of public view.',
      tags: ['career path', 'technology review', 'cloud direction', 'portfolio proof'],
      searchTerms: ['job', 'technology', 'career', 'cloud', 'security', 'research'],
      proof: [
        'Technology or role focus will be published after final review.',
        'The project summary will highlight why the technology matters to the target role.',
        'Career-path takeaways will stay evidence-based and avoid unsupported claims.',
      ],
      capabilities: [
        {
          title: 'Career relevance mapping',
          body: 'The finished entry should show how the project supports the Cloud Security Engineer - AI Trainer direction.',
        },
        {
          title: 'Technology review lane',
          body: 'The page structure is ready to hold the selected tooling, its practical value, and any security-specific takeaways.',
        },
        {
          title: 'Recruiter-safe framing',
          body: 'The public explanation will stay focused on what was actually learned and demonstrated.',
        },
        {
          title: 'Evidence-first publication',
          body: 'Like the other entry, this one keeps placeholders explicit until the final version can be stated correctly.',
        },
      ],
      architecture: [
        {
          title: 'Confirm the selected technology focus',
          body: 'Lock the exact role or technology angle that the project is meant to represent.',
        },
        {
          title: 'Translate it into role evidence',
          body: 'Clarify the cloud, security, and AI-review relevance in language a recruiter can scan quickly.',
        },
        {
          title: 'Publish only the verified outcome',
          body: 'Avoid expanding the story until the final evidence package is complete and technically precise.',
        },
      ],
      commandPreview: [
        '[SYSTEM] Job technology project entry initialized.',
        '[STATUS] Final technology focus awaiting verification.',
        '[NEXT] Publish validated role and tooling details when ready.',
      ],
    },
  ],
};
