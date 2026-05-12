export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type CapabilityDetail = {
  title: string;
  body: string;
};

export type HomeContent = {
  eyebrow: string;
  aboutEyebrow: string;
  aboutTitle: string;
  about: string[];
  careerEyebrow: string;
  careerTitle: string;
  careerSummary: string[];
  focusEyebrow: string;
  focusTitle: string;
  focusSummary: string;
  focusAreas: CapabilityDetail[];
  projectsEyebrow: string;
  projectsTitle: string;
  projectsSummary: string;
  skillsEyebrow: string;
  skillsTitle: string;
  skillsSummary: string;
  contactEyebrow: string;
  contactTitle: string;
  contactSummary: string;
  footerSummary: string;
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
    details: string[];
  };
  links: {
    github: string;
    linkedin: string;
    email: string;
    liveSite: string;
  };
  home: HomeContent;
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
    title: 'Applied AI Systems Student',
    headline: 'Turning complex AI ideas into clear, testable systems.',
    summary:
      'I am an IT student focused on applied AI, context engineering, technical communication, and building practical digital tools that turn messy ideas into organized systems.',
  },
  direction: {
    currentFocus: 'Applied AI Engineering and AI Systems Design',
    shortExplanation:
      'I am interested in roles where technical builders help turn AI ideas into working products, evaluate whether AI systems perform well, and communicate complex technical decisions clearly.',
    details: [
      'The Applied AI Architect path stood out to me because it combines software engineering, AI product thinking, technical communication, evaluation frameworks, and architecture design.',
      'It is not only about using AI. It is about understanding what a product needs, shaping the right context, testing outputs, and building systems that people can actually rely on.',
    ],
  },
  links: {
    github: 'https://github.com/Eagolo135',
    linkedin: 'https://www.linkedin.com/in/nicholas-nelson-21b5a329b/',
    email: 'nan@njit.edu',
    liveSite: 'https://eagolo135.github.io/nicholas.nelson/',
  },
  home: {
    eyebrow: 'Applied AI // Systems Portfolio',
    aboutEyebrow: 'About',
    aboutTitle: 'Building practical systems from ideas, context, and clear communication.',
    about: [
      'I am an Information Technology student at New Jersey Institute of Technology with experience across web development, data analysis, applied AI projects, and technical project building. My work has included generative AI output optimization, MySQL database design, machine learning experiments, mobile app development, and full-stack web applications.',
      'I am drawn to applied AI because I like the space between ideas and implementation. I like figuring out what a tool should do, what information it needs, how the output should be evaluated, and how to explain the system clearly to someone else.',
      'My goal is to keep building projects that show technical growth, practical thinking, and strong communication.',
    ],
    careerEyebrow: 'Career Direction',
    careerTitle: 'Applied AI engineering with context, testing, and system thinking.',
    careerSummary: [
      'My current professional direction is applied AI engineering and AI systems design.',
      'I want to work on AI products that combine clear requirements, strong context, useful outputs, and technical communication that makes the system understandable to other people.',
    ],
    focusEyebrow: 'Professional Focus Areas',
    focusTitle: 'The areas I want each AI project to prove.',
    focusSummary:
      'These focus areas shape how I evaluate product ideas, retrieval workflows, system behavior, and the clarity of the final explanation.',
    focusAreas: [
      {
        title: 'Applied AI Systems',
        body: 'I am interested in building AI tools that are useful, structured, and grounded in real user needs. My work focuses on turning broad ideas into systems with clear inputs, outputs, and evaluation points.',
      },
      {
        title: 'Context Engineering',
        body: 'I care about how AI systems receive instructions, source material, constraints, tone, and user goals. Strong AI output depends on strong context, not just a clever prompt.',
      },
      {
        title: 'Evaluation and Testing',
        body: 'I am interested in testing whether AI outputs are accurate, useful, consistent, and aligned with the task. I want my AI projects to be checked and validated, not just impressive at first glance.',
      },
      {
        title: 'Technical Communication',
        body: 'I enjoy making technical ideas easier to understand. Whether I am documenting a project, presenting a system, or explaining a design choice, I want the reasoning behind the work to be clear.',
      },
    ],
    projectsEyebrow: 'Featured Projects',
    projectsTitle: 'Project work organized around practical systems.',
    projectsSummary:
      'The portfolio includes retrieval-grounded AI work, machine learning, mobile development, and full-stack application work, all framed as portfolio-ready project summaries.',
    skillsEyebrow: 'Skills and Tools',
    skillsTitle: 'Technical stack and working strengths.',
    skillsSummary:
      'The skill surface combines applied AI methods, software development, data and machine learning tools, and communication skills that support clearer project work.',
    contactEyebrow: 'Contact and Links',
    contactTitle: "Let's connect.",
    contactSummary:
      'I am building toward applied AI and AI systems work through practical projects, technical writing, and structured product thinking.',
    footerSummary:
      'Applied AI systems student focused on context engineering, evaluation design, technical communication, and practical digital tools.',
  },
  focusPages: [
    {
      slug: 'research',
      title: 'Direction',
      summary: 'Applied AI engineering, system design, and the evaluation standards behind the portfolio direction.',
    },
    {
      slug: 'projects',
      title: 'Projects',
      summary: 'Searchable project summaries with deeper architecture, capability, and evaluation detail.',
    },
  ],
  research: {
    summary:
      'The direction that fits best right now is applied AI engineering and AI systems design: work that turns ideas into reliable products, defines the right context, evaluates output quality, and explains technical decisions clearly.',
    signals: ['Applied AI systems', 'Context engineering', 'Evaluation design', 'Technical communication'],
    roleDetails: [
      {
        title: 'Role scope',
        body: 'The work I am drawn to sits between product thinking and implementation: shaping what an AI system should do, what information it should receive, and how the result should be judged.',
      },
      {
        title: 'Why this path fits',
        body: 'The Applied AI Architect path stood out because it combines software engineering, evaluation frameworks, system design, and communication instead of treating AI as a black box.',
      },
      {
        title: 'What makes the systems useful',
        body: 'Useful AI work depends on context, source material, constraints, and testing. I want to build systems that are not only interesting but dependable and understandable.',
      },
      {
        title: 'Current portfolio goal',
        body: 'This portfolio is meant to show project thinking, evaluation habits, and technical communication without overstating experience. Pending items stay marked instead of being filled with invented detail.',
      },
    ],
    evaluationStandards: [
      {
        title: 'Context before output',
        body: 'Strong AI results depend on good source material, clear instructions, explicit constraints, and a defined user goal.',
      },
      {
        title: 'Source grounding matters',
        body: 'When a system depends on prior notes, rules, or structured knowledge, the output should be traceable to the material that shaped it.',
      },
      {
        title: 'Evaluation should be explicit',
        body: 'The system should define what success means, what failure looks like, and how quality will be checked beyond first impressions.',
      },
      {
        title: 'Explanation is part of the build',
        body: 'Technical decisions should be understandable to other people. Documentation, framing, and clear reasoning are part of system quality, not add-ons.',
      },
    ],
  },
  skills: [
    {
      title: 'Applied AI and Evaluation',
      summary: 'Methods used to shape context, judge output quality, and keep generation grounded in the task.',
      items: [
        'Prompt engineering',
        'Context engineering',
        'RAG-style retrieval',
        'Evaluation design',
        'Output analysis',
        'Source-grounded generation',
      ],
    },
    {
      title: 'Software Development',
      summary: 'Frontend, backend, and application-development tools used across the portfolio projects.',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'PHP', 'Laravel', 'Kotlin'],
    },
    {
      title: 'Data and Machine Learning',
      summary: 'Data-processing and ML tools used for experimentation, model building, and evaluation work.',
      items: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'Machine learning pipelines', 'Data preprocessing', 'Model evaluation', 'MySQL'],
    },
    {
      title: 'Tools and Professional Strengths',
      summary: 'The supporting tools and communication skills that make the technical work more useful and understandable.',
      items: ['Git', 'GitHub', 'Docker', 'Android Studio', 'Zod', 'Vitest', 'Technical communication', 'Project planning', 'Documentation', 'Peer mentoring', 'Presentation'],
    },
  ],
  projects: [
    {
      slug: 'storylens-ai',
      name: 'StoryLens AI',
      category: 'Applied AI',
      status: 'Featured Concept',
      statusTone: 'active',
      summary: 'A RAG-style storyboarding tool that retrieves story context, creates structured scene plans, and checks continuity against the source material.',
      description:
        'StoryLens AI is a source-grounded storyboarding assistant for writers building long-form stories with complex lore, character arcs, and style rules. The system retrieves relevant story notes, character details, worldbuilding rules, previous chapter summaries, and style guidance before generating a structured scene plan and checking it for continuity risk.',
      tags: ['next.js', 'typescript', 'zod', 'vitest', 'rag', 'context engineering'],
      searchTerms: ['storyboarding', 'retrieval', 'continuity', 'writers', 'source grounding', 'evaluation design'],
      proof: [
        'Retrieves story notes, lore, style rules, and prior chapter summaries before generation.',
        'Generates structured scene plans with scene goal, opening situation, beats, conflict, continuity notes, and ending hook.',
        'Evaluates source alignment, character consistency, worldbuilding consistency, tone fit, style match, scene clarity, and hallucination risk.',
      ],
      capabilities: [
        {
          title: 'Source-grounded retrieval',
          body: 'The project is built around pulling the right notes, rules, and story context before asking the model to plan a scene.',
        },
        {
          title: 'Structured generation',
          body: 'The output is organized into predictable storyboard sections instead of acting like a loose chat response.',
        },
        {
          title: 'Continuity evaluation',
          body: 'The system checks whether the generated scene stays aligned with the source material, characters, world rules, and intended tone.',
        },
        {
          title: 'Writer-facing workflow design',
          body: 'The product is framed around a real planning problem for long-form writers rather than generic AI assistance.',
        },
      ],
      architecture: [
        {
          title: 'Load the story knowledge base',
          body: 'Character notes, lore, plot points, style rules, and previous chapter summaries act as the source material for later steps.',
        },
        {
          title: 'Retrieve context for the current request',
          body: 'A scene or chapter request triggers retrieval of the source fragments most relevant to the requested plan.',
        },
        {
          title: 'Generate and evaluate the storyboard',
          body: 'The system produces a structured scene plan and then checks it for alignment, consistency, style fit, and hallucination risk before export.',
        },
      ],
      commandPreview: [
        '[INPUT] Scene request received for next chapter.',
        '[RETRIEVE] Story notes, lore, and style rules loaded into context.',
        '[EVAL] Storyboard checked for continuity, tone fit, and hallucination risk.',
      ],
      links: {
        sourceLabel: 'View Source Repository',
        sourceHref: 'https://github.com/Eagolo135/storyboard.ai',
        docsLabel: 'Open Live Project',
        docsHref: 'https://eagolo135.github.io/storyboard.ai/',
      },
    },
    {
      slug: 'techblogger',
      name: 'TechBlogger',
      category: 'Featured Project',
      status: 'Featured Live',
      statusTone: 'active',
      summary: 'A live blogging-focused web application deployed on GitHub Pages with a full TypeScript codebase.',
      description:
        'TechBlogger is a featured project in this portfolio and includes both a live GitHub Pages deployment and source repository for direct review.',
      tags: ['featured', 'typescript', 'blogging', 'web app', 'github pages'],
      searchTerms: ['TechBlogger', 'live project', 'blog app', 'github pages'],
      proof: [
        'Live project URL is available for direct product review.',
        'Source repository is linked for implementation validation.',
        'Project now appears as a featured portfolio entry instead of a pending placeholder.',
      ],
      capabilities: [
        {
          title: 'Live deployment visibility',
          body: 'Reviewers can open and evaluate a running version of the project immediately.',
        },
        {
          title: 'Source transparency',
          body: 'The project keeps direct source access for technical and code-level review.',
        },
        {
          title: 'Featured positioning',
          body: 'Status, category, and content are tuned to present this as a core project in the portfolio.',
        },
        {
          title: 'Portfolio-ready proof',
          body: 'This entry replaces pending placeholders with verifiable live and source links.',
        },
      ],
      architecture: [
        {
          title: 'Open live application',
          body: 'Use the live URL to validate user-facing functionality and product presentation.',
        },
        {
          title: 'Inspect source repository',
          body: 'Use the GitHub repository to review implementation approach and project structure.',
        },
        {
          title: 'Review featured alignment',
          body: 'Confirm the card, modal detail, and links align with a featured project role in the portfolio.',
        },
      ],
      commandPreview: [
        '[FEATURED] TechBlogger highlighted in project inventory.',
        '[LINK] Live demo and source repository connected.',
        '[READY] Featured project card available for reviewer access.',
      ],
      links: {
        sourceLabel: 'View Source Repository',
        sourceHref: 'https://github.com/Eagolo135/TechBlogger',
        docsLabel: 'Open Live Project',
        docsHref: 'https://eagolo135.github.io/TechBlogger/',
      },
    },
    {
      slug: 'unsw-nb15-intrusion-detection',
      name: 'UNSW-NB15 Intrusion Detection',
      category: 'Machine Learning',
      status: 'Project Summary',
      statusTone: 'active',
      summary: 'A machine learning project that classifies network traffic as normal or attack using supervised and unsupervised models.',
      description:
        'This project uses Logistic Regression, Decision Tree, Random Forest, and Isolation Forest models to analyze network traffic with an end-to-end scikit-learn pipeline for preprocessing, imbalance handling, and hyperparameter optimization.',
      tags: ['python', 'pandas', 'scikit-learn', 'intrusion detection', 'model evaluation'],
      searchTerms: ['unsw-nb15', 'network traffic', 'classification', 'supervised learning', 'isolation forest'],
      proof: [
        'Includes supervised and unsupervised models for normal-versus-attack classification.',
        'Uses preprocessing, class-imbalance handling, and hyperparameter optimization in a full ML pipeline.',
        'Frames the work as machine-learning evaluation and data analysis rather than generic cybersecurity hype.',
      ],
      capabilities: [
        {
          title: 'Model comparison',
          body: 'The project compares multiple model families instead of relying on a single baseline result.',
        },
        {
          title: 'Pipeline thinking',
          body: 'The workflow includes preprocessing, imbalance handling, and tuning as part of the actual system design.',
        },
        {
          title: 'Evaluation focus',
          body: 'The project emphasizes how the models are assessed, not just that they ran successfully.',
        },
        {
          title: 'Data-oriented explanation',
          body: 'It presents the work as a machine-learning classification problem with clear tooling and model choices.',
        },
      ],
      architecture: [
        {
          title: 'Prepare and balance the dataset',
          body: 'Traffic data is cleaned, preprocessed, and handled for class imbalance before modeling.',
        },
        {
          title: 'Train multiple models',
          body: 'Logistic Regression, Decision Tree, Random Forest, and Isolation Forest are used to compare performance across approaches.',
        },
        {
          title: 'Tune and evaluate results',
          body: 'Hyperparameter optimization and model evaluation close the loop on which approach performs best for the classification task.',
        },
      ],
      commandPreview: [
        '[LOAD] UNSW-NB15 traffic data prepared for training.',
        '[TRAIN] Logistic Regression, Decision Tree, Random Forest, and Isolation Forest fitted.',
        '[EVAL] Pipeline compared across model performance and detection quality.',
      ],
    },
    {
      slug: 'taro-app',
      name: 'Taro App',
      category: 'Mobile App',
      status: 'Project Summary',
      statusTone: 'active',
      summary: 'A chore management app with authentication, task tracking, rewards, groups, leaderboards, and statistics.',
      description:
        'Taro demonstrates practical product thinking through user accounts, shared progress, engagement mechanics, and team-based interaction in a mobile application built with Kotlin, Android Studio, and Firebase.',
      tags: ['kotlin', 'android studio', 'firebase', 'product design', 'agile'],
      searchTerms: ['mobile', 'chore management', 'leaderboards', 'rewards', 'groups', 'android'],
      proof: [
        'Includes authentication, task tracking, rewards, groups, leaderboards, and statistics.',
        'Shows product thinking around shared progress and engagement mechanics.',
        'Frames the app as a usable team-based mobile tool instead of a feature list with no user model.',
      ],
      capabilities: [
        {
          title: 'Mobile product design',
          body: 'The feature set is organized around how users join, track progress, and stay engaged over time.',
        },
        {
          title: 'User accounts and persistence',
          body: 'Authentication and Firebase support a system with ongoing account state and shared progress.',
        },
        {
          title: 'Gamified interaction',
          body: 'Rewards, groups, and leaderboards add a product layer beyond basic task management.',
        },
        {
          title: 'Agile build mindset',
          body: 'The project reflects iterative product thinking in how the app features work together.',
        },
      ],
      architecture: [
        {
          title: 'Authenticate and organize users',
          body: 'The app starts with account-level access and user identity before shared participation features come into play.',
        },
        {
          title: 'Track tasks and shared progress',
          body: 'Task state, rewards, and group participation give the product its core interaction loop.',
        },
        {
          title: 'Expose stats and leaderboards',
          body: 'Statistics and competitive views turn raw task completion into visible shared progress.',
        },
      ],
      commandPreview: [
        '[AUTH] User session established.',
        '[TRACK] Tasks, rewards, and group progress updated.',
        '[RANK] Leaderboard and statistics refreshed.',
      ],
    },
    {
      slug: 'sakila-movies',
      name: 'Sakila Movies',
      category: 'Full Stack',
      status: 'Project Summary',
      statusTone: 'active',
      summary: 'A full-stack film rental platform with search, detailed views, RESTful APIs, and customer management.',
      description:
        'Sakila Movies demonstrates full-stack application development using React, Node.js, Express, and MySQL to support search, item detail views, customer management, and CRUD-driven application flows.',
      tags: ['react', 'node.js', 'express', 'mysql', 'rest api', 'crud'],
      searchTerms: ['film rental', 'sakila', 'customer management', 'restful api', 'full stack'],
      proof: [
        'Supports search, detail views, RESTful APIs, and customer management.',
        'Uses a React, Node.js, Express, and MySQL stack across the application.',
        'Demonstrates CRUD-oriented full-stack development with a clear product domain.',
      ],
      capabilities: [
        {
          title: 'Frontend and backend integration',
          body: 'The project connects a React interface to Node and Express services backed by MySQL data.',
        },
        {
          title: 'REST API design',
          body: 'The system exposes structured CRUD behavior instead of treating the backend as an opaque data layer.',
        },
        {
          title: 'Search and detail workflows',
          body: 'The product is organized around browsing, inspecting, and managing film-rental information.',
        },
        {
          title: 'Database-backed product thinking',
          body: 'Customer management and detail views reflect application structure, not just isolated API demos.',
        },
      ],
      architecture: [
        {
          title: 'Serve searchable film data',
          body: 'The application begins with searchable catalog access and detailed film views for user exploration.',
        },
        {
          title: 'Handle RESTful CRUD flows',
          body: 'Node.js and Express provide API endpoints that support the application state and customer workflows.',
        },
        {
          title: 'Persist customer and rental data',
          body: 'MySQL stores the data model that powers search, detail surfaces, and customer management behaviors.',
        },
      ],
      commandPreview: [
        '[QUERY] Film search request submitted.',
        '[API] Express routes returned detail and customer data.',
        '[DB] MySQL records updated through CRUD workflow.',
      ],
    },
    {
      slug: 'anime-site',
      name: 'Anime Site',
      category: 'Featured Project',
      status: 'Featured Live',
      statusTone: 'active',
      summary: 'A featured live anime web app deployed at anime-site-pearl.vercel.app with source code available on GitHub.',
      description:
        'Anime Site is now presented as a featured project in the portfolio. The entry includes both a live demo and source repository so reviewers can quickly validate the product surface and implementation.',
      tags: ['featured', 'typescript', 'web app', 'vercel', 'github'],
      searchTerms: ['anime site', 'anime-site', 'featured project', 'vercel', 'live demo'],
      proof: [
        'Live deployment available for direct product review.',
        'Source repository linked for implementation validation.',
        'Promoted to featured status in the projects section.',
      ],
      capabilities: [
        {
          title: 'Live product visibility',
          body: 'Reviewers can open a running version of the project instead of only reading repository metadata.',
        },
        {
          title: 'Source-linked validation',
          body: 'The project keeps one-click access to source code for technical review.',
        },
      ],
      architecture: [
        {
          title: 'Live deployment plus source',
          body: 'The featured card pairs a public demo URL with the GitHub repository for complete review coverage.',
        },
        {
          title: 'Featured project positioning',
          body: 'Status, category, and copy are tuned so the project stands out in the portfolio projects area.',
        },
      ],
      commandPreview: [
        '[FEATURED] Anime Site promoted in project inventory.',
        '[LINK] Live demo and source repository ready for review.',
      ],
      links: {
        sourceLabel: 'View Source Repository',
        sourceHref: 'https://github.com/Eagolo135/anime-site',
        docsLabel: 'Open Live Demo',
        docsHref: 'https://eagolo135.github.io/anime-site/',
      },
    },
    {
      slug: 'cli-ai-toolkit',
      name: 'cli-ai-toolkit',
      category: 'GitHub Repository',
      status: 'Repository Linked',
      statusTone: 'active',
      summary: 'TypeScript CLI-focused repository from the GitHub project set.',
      description:
        'Repository-backed project included so the project section reflects all public GitHub work currently available on the account.',
      tags: ['typescript', 'cli', 'github'],
      searchTerms: ['cli-ai-toolkit', 'cli', 'typescript', 'github'],
      proof: [
        'Sourced directly from the public GitHub repository list.',
        'Project card is linked to the repository for direct code inspection.',
      ],
      capabilities: [
        {
          title: 'CLI project visibility',
          body: 'Adds command-line project work to the same searchable portfolio surface.',
        },
        {
          title: 'Direct source handoff',
          body: 'Reviewers can open the source repository from the project modal.',
        },
      ],
      architecture: [
        {
          title: 'Repository mapped to card',
          body: 'The GitHub repo is represented as a first-class project entry.',
        },
        {
          title: 'Modal source linkage',
          body: 'The entry uses modal links for quick source navigation.',
        },
      ],
      commandPreview: [
        '[SYNC] cli-ai-toolkit added from GitHub.',
        '[LINK] Source repository attached for project review.',
      ],
      links: {
        sourceLabel: 'View Source Repository',
        sourceHref: 'https://github.com/Eagolo135/cli-ai-toolkit',
      },
    },
    {
      slug: 'eagolo135-github-io',
      name: 'Eagolo135.github.io',
      category: 'GitHub Repository',
      status: 'Repository Linked',
      statusTone: 'active',
      summary: 'JavaScript GitHub Pages repository from the public profile.',
      description:
        'This project card reflects the GitHub Pages repository on the account so portfolio visitors can track published-web workflow history.',
      tags: ['javascript', 'github pages', 'web'],
      searchTerms: ['Eagolo135.github.io', 'github pages', 'javascript'],
      proof: [
        'Mapped directly from the account repository list.',
        'Includes source link for immediate access and verification.',
      ],
      capabilities: [
        {
          title: 'Pages workflow visibility',
          body: 'Shows static-site deployment work represented in the same project inventory.',
        },
        {
          title: 'Portfolio consistency',
          body: 'Keeps GitHub web projects discoverable alongside other technical work.',
        },
      ],
      architecture: [
        {
          title: 'Account repo ingestion',
          body: 'Repository is included as part of the full GitHub project listing.',
        },
        {
          title: 'Search-ready entry',
          body: 'Card fields are normalized for project search and category filtering.',
        },
      ],
      commandPreview: [
        '[SYNC] Eagolo135.github.io included in project inventory.',
        '[INDEX] Search and filter metadata generated for this repo entry.',
      ],
      links: {
        sourceLabel: 'View Source Repository',
        sourceHref: 'https://github.com/Eagolo135/Eagolo135.github.io',
      },
    },
    {
      slug: 'log-analyzer',
      name: 'log_analyzer',
      category: 'GitHub Repository',
      status: 'Repository Linked',
      statusTone: 'active',
      summary: 'Log analysis repository surfaced from GitHub for complete project coverage.',
      description:
        'This entry was added directly from the GitHub account so repository-based tooling projects are represented in the portfolio project section.',
      tags: ['logs', 'analysis', 'github'],
      searchTerms: ['log_analyzer', 'log analysis', 'repository', 'github'],
      proof: [
        'Repository included from the GitHub account list.',
        'Source link is available in the modal for direct code review.',
      ],
      capabilities: [
        {
          title: 'Tooling project representation',
          body: 'Includes utility-style repositories in the same portfolio browsing experience.',
        },
        {
          title: 'Reviewer access',
          body: 'Provides immediate source visibility for technical review.',
        },
      ],
      architecture: [
        {
          title: 'Repository-to-card mapping',
          body: 'GitHub project metadata is normalized into the shared project schema.',
        },
        {
          title: 'Modal source handoff',
          body: 'The modal links directly to the upstream GitHub source.',
        },
      ],
      commandPreview: [
        '[SYNC] log_analyzer project added from GitHub.',
        '[LINK] Source repository attached for review.',
      ],
      links: {
        sourceLabel: 'View Source Repository',
        sourceHref: 'https://github.com/Eagolo135/log_analyzer',
      },
    },
    {
      slug: 'nicholas-nelson-portfolio-repo',
      name: 'nicholas.nelson',
      category: 'GitHub Repository',
      status: 'Repository Linked',
      statusTone: 'active',
      summary: 'Source repository for this portfolio site.',
      description:
        'This card links directly to the repository that powers the current portfolio, so reviewers can inspect implementation details and project history.',
      tags: ['portfolio', 'typescript', 'react', 'github pages'],
      searchTerms: ['nicholas.nelson', 'portfolio repo', 'react', 'typescript'],
      proof: [
        'Represents the exact source repo for the live portfolio.',
        'Provides direct access to implementation and commit history.',
      ],
      capabilities: [
        {
          title: 'Portfolio transparency',
          body: 'Lets reviewers move from public site to source code immediately.',
        },
        {
          title: 'Development traceability',
          body: 'Supports deeper review through visible history and repository artifacts.',
        },
      ],
      architecture: [
        {
          title: 'Live-source alignment',
          body: 'This card is tied to the repository behind the deployed portfolio.',
        },
        {
          title: 'Modal source link',
          body: 'The project modal links straight to the upstream source repo.',
        },
      ],
      commandPreview: [
        '[SYNC] nicholas.nelson source repo linked to portfolio projects.',
        '[VERIFY] Project card maps to live site source repository.',
      ],
      links: {
        sourceLabel: 'View Source Repository',
        sourceHref: 'https://github.com/Eagolo135/nicholas.nelson',
      },
    },
    {
      slug: 'on-point',
      name: 'on-point',
      category: 'GitHub Repository',
      status: 'Repository Linked',
      statusTone: 'active',
      summary: 'TypeScript repository included from the GitHub project list.',
      description:
        'This project entry was added from the public GitHub inventory so the site includes complete account-level project coverage.',
      tags: ['typescript', 'github', 'project'],
      searchTerms: ['on-point', 'typescript repo', 'github project'],
      proof: [
        'Included from GitHub repository inventory.',
        'Source repository is linked for direct review.',
      ],
      capabilities: [
        {
          title: 'Complete repo coverage',
          body: 'Ensures this account project appears in the portfolio project section.',
        },
        {
          title: 'One-click source access',
          body: 'The modal includes direct navigation to the repository.',
        },
      ],
      architecture: [
        {
          title: 'Inventory inclusion',
          body: 'Mapped from GitHub account data into the shared project schema.',
        },
        {
          title: 'Search integration',
          body: 'Added tags and search terms for discoverability in the projects surface.',
        },
      ],
      commandPreview: [
        '[SYNC] on-point imported from GitHub list.',
        '[INDEX] Search metadata generated and linked to source.',
      ],
      links: {
        sourceLabel: 'View Source Repository',
        sourceHref: 'https://github.com/Eagolo135/on-point',
      },
    },
    {
      slug: 'qr-code-generator-docker',
      name: 'qr-code-generator-docker',
      category: 'GitHub Repository',
      status: 'Repository Linked',
      statusTone: 'active',
      summary: 'Python repository for a Docker-based QR code generation project.',
      description:
        'This repository entry captures containerized utility tooling work from the public GitHub account and makes it discoverable through the portfolio project search.',
      tags: ['python', 'docker', 'qr code', 'utility'],
      searchTerms: ['qr-code-generator-docker', 'python docker', 'qr generator'],
      proof: [
        'Included from the public GitHub repository inventory.',
        'Source repository linked for direct technical validation.',
      ],
      capabilities: [
        {
          title: 'Containerized tooling signal',
          body: 'Represents utility-focused development with Docker and Python workflows.',
        },
        {
          title: 'Portfolio discoverability',
          body: 'Project is searchable through tags and keyword terms in the projects UI.',
        },
      ],
      architecture: [
        {
          title: 'Repo card generation',
          body: 'The account repository is normalized into the shared project entry format.',
        },
        {
          title: 'Modal source access',
          body: 'Users can open the linked GitHub source directly from the project modal.',
        },
      ],
      commandPreview: [
        '[SYNC] qr-code-generator-docker included from GitHub.',
        '[LINK] Source repository attached for review.',
      ],
      links: {
        sourceLabel: 'View Source Repository',
        sourceHref: 'https://github.com/Eagolo135/qr-code-generator-docker',
      },
    },
    {
      slug: 'scrollytelling',
      name: 'scrollytelling',
      category: 'GitHub Repository',
      status: 'Repository Linked',
      statusTone: 'active',
      summary: 'TypeScript repository for scrollytelling-focused web experimentation.',
      description:
        'This project entry adds the scrollytelling repository from GitHub so storytelling-focused interface work is included in the portfolio project section.',
      tags: ['typescript', 'scrollytelling', 'web'],
      searchTerms: ['scrollytelling', 'typescript', 'interactive web'],
      proof: [
        'Mapped directly from public GitHub repositories.',
        'Repository source link is included for direct project review.',
      ],
      capabilities: [
        {
          title: 'Interactive web project signal',
          body: 'Captures experimentation in narrative interface and scroll-driven web structure.',
        },
        {
          title: 'Source-linked entry',
          body: 'Uses modal source actions for one-click repository access.',
        },
      ],
      architecture: [
        {
          title: 'GitHub inventory mapping',
          body: 'Repo metadata is converted into the shared project schema fields.',
        },
        {
          title: 'Project search integration',
          body: 'Entry is indexed by category, tags, and keyword search terms.',
        },
      ],
      commandPreview: [
        '[SYNC] scrollytelling imported from account repositories.',
        '[INDEX] Card and search metadata ready in project surface.',
      ],
      links: {
        sourceLabel: 'View Source Repository',
        sourceHref: 'https://github.com/Eagolo135/scrollytelling',
      },
    },
    {
      slug: 'student-reality-lab-nelson',
      name: 'student-reality-lab-nelson',
      category: 'GitHub Repository',
      status: 'Repository Linked',
      statusTone: 'active',
      summary: 'Interactive data story analyzing middle-class income shifts adjusted for inflation.',
      description:
        'Repository-backed project describing an interactive data story on how the middle-class income line has shifted over time when adjusted for inflation.',
      tags: ['kotlin', 'data story', 'inflation analysis'],
      searchTerms: ['student-reality-lab-nelson', 'income', 'inflation', 'interactive data story'],
      proof: [
        'Includes the repository description from GitHub for project framing.',
        'Added to ensure full account repository coverage in the portfolio.',
      ],
      capabilities: [
        {
          title: 'Data narrative orientation',
          body: 'Shows project work that combines analysis framing with interactive presentation.',
        },
        {
          title: 'Repository-backed evidence',
          body: 'Entry links directly to source so claims can be verified against code artifacts.',
        },
      ],
      architecture: [
        {
          title: 'Data story project inclusion',
          body: 'GitHub project is represented in the same searchable card system as other work.',
        },
        {
          title: 'Source validation path',
          body: 'Modal actions provide direct repository access for technical review.',
        },
      ],
      commandPreview: [
        '[SYNC] student-reality-lab-nelson imported from GitHub.',
        '[LINK] Source repository connected to project modal actions.',
      ],
      links: {
        sourceLabel: 'View Source Repository',
        sourceHref: 'https://github.com/Eagolo135/student-reality-lab-nelson',
      },
    },
  ],
};
