// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mkramer2000', // Your GitHub org/user name. (This is the only required config)
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
      mode: 'manuel', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['mkramer2000/genome-assembly-assignment', 'mkramer2000/recipes'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Migration to Cities',
          description:
            'Discusses the implications of the movement of people from rural environments to urban cities.',
          imageUrl:
            'https://github.com/mkramer2000/mkramer2000.github.io/raw/main/Migration.png',
          link: 'https://github.com/mkramer2000/mkramer2000.github.io/raw/main/Migration%20PDF.pdf',
        },
        {
          title: 'Do we have the Right to Die',
          description:
            'Discusses the grand ethical issues related to peoples right in medical environemts when it comes to end of life treatment/care.',
          imageUrl:
            'https://github.com/mkramer2000/mkramer2000.github.io/raw/main/Eu.png',
          link: 'https://github.com/mkramer2000/mkramer2000.github.io/raw/main/euthanasia%20PDF.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mason Kramer',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    x: '',
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
    website: 'https://www.mkramer2000.github.io.com',
    phone: '',
    email: 'masonkramer45@yahoo.com',
  },
  resume: {
    fileUrl:
      'https://github.com/mkramer2000/Mason-s-CV/raw/main/Mason-s-CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Bioinformatics',
    'Statistics',
    'Driving',
    'Problem Solving',
    
  ],
  experiences: [
    {
      company: 'NorCal Ambulance',
      position: 'EMT',
      from: 'June 2024',
      to: 'Present',
      companyLink: 'https://www.norcalambulance.com/',
    },
  ],
  certifications: [
    {
      name: ' California EMT Certificate',
      body: 'National Regerestry of Emergency Medical Technicians',
      year: 'March 2024',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Stanislaus State',
      degree: 'Biological Sciences',
      from: '2019',
      to: '2025',
    },
    {
      institution: 'Modesto Junior College',
      degree: 'Prereqs of Biological Sciences',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [
    {
      title: 'Draft Genome Sequence of Intestinibacter bartletti DSM 16795, a Human Gut Isolate Associatedwith Autism Microbiome Studies',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcements',
      authors: 'Christina Johne1,,Mason Kramer1,, Raneem Makrai1,, Holly Moffett1,, Fiona Shavilof 1,, Tricia A. Van Laar',
      link: 'https://github.com/mkramer2000/Microbio-Species-Announcement-Paper/raw/main/DraftGenomeSequenceofIntestinbacterbartletti%20DSM%2016795%2C%20a%20Human%20Gut%20Isolate%20Associated%20with%20Autism%20Microbiome%20Studies.pdf',
      description:
        'Here we present the draft genome sequence of Intestinibacter bartletti DSM 16795, a humangut isolate of interest in autism-associated microbiome studies. The genome spans 2.97 Mb across 22 contigs, with a GC content of 28.84% and 100% estimated completeness. Keygenomic features include virulence factors, antibiotic resistance genes, biosynthetic clusters,and CRISRP-Cas loci.',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
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
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
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
