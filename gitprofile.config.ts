// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'sean-hodgson', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Nick2k4L/PetFriends', 'Sean-Hodgson/OpcodeCloud'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Sean Hodgson',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'sean-hodgson',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'seanmhodgson@icloud.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'MongoDB',
    'Git',
    'Docker',
    'Python',
    'HTML',
    'Haskell',
    'Postscript v3',
  ],
  experiences: [
    {
      company: 'Crimson Service Desk',
      position: 'Technical Assistant',
      from: 'August 2022',
      to: 'Present',
      companyLink: 'https://its.wsu.edu/crimson-service-desk/',
    },
    {
      company: 'Griffiss Institute & Air Force Research Laboratory',
      position: 'MAVEN Cybersecurity Research Intern',
      from: 'Summer 2024',
      to: 'August 2024',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Washington State University',
      degree: 'Cybersecurity, BS',
      from: '2022',
      to: '2026',
    }
  ],
  publications: [
    {
      title: 'Obfuscation-Resilient Static Analysis for Binary Malware Detection',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'Sean Hodgson, Emily West, Tashi Stirewalt, and Assefaw Gebremedhin',
      link: 'https://example.com',
      description:
        'As cyber threats become more sophisticated and our dependence on software systems increases, it is crucial to implement robust security measures. One significant aspect of software security is analyzing binary code files, often targeted by cyberattacks. Although various techniques for static analysis of binary code files are available, considerable challenges remain. These challenges include but are not limited to, overcoming code obfuscation techniques, handling dynamically generated or self-modifying code, scaling to large codebases, heavy reliance on domain expertise, and high rates of false positives and negatives in practice. In this study, we propose an tournament selection style dynamic programming LCS algorithm for learning opcode sequence signatures of similarity between different binary files known to be similar. Using similarity measures of Cosine, Jaccard, and Damerau-Levenshtein, we explore the threshold prediction approach. In addition, we explore a vectorization process using a Bag-of-Words (BoW), TF-IDF, and statistical opcode combined feature embedding to train a Random Forest ML model to classify binary files into a multiple-class environment. Our experimental results demonstrate that the approach shows great potential and lays a solid foundation for efficient prediction tasks for detecting similarity between binary files resiliently to obfuscation',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'dark'
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
