/**
 * CORLINK IT — canonical site content.
 *
 * Every string here is either ported verbatim from the existing CORLINK IT
 * website or supplied directly by the client. Do not rewrite, shorten, or
 * invent copy. UI/UX may change; content changes only on request.
 *
 * The Real Estate, Consultancy and BPO entries were added at the client's
 * request with copy they provided.
 */

export const brand = {
  name: "CorlinkIt",
  footerName: "Corlink IT",
  /** The strapline already set inside the logo artwork. */
  tagline: ["People", "Process", "Possibilities"],
  // The same artwork as /logo.png, with its baked-in white background keyed out.
  // /logo.png is kept as the untouched original.
  logo: "/logo-mark.png",
};

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/about" },
  { name: "Medical", path: "/medical-coding" },
  { name: "Opportunities", path: "/opportunities" },
  { name: "Contact", path: "/contact" },
] as const;

export const navCta = { label: "Get Quote", path: "/contact" };

/** Vertical rail sections on the homepage. */
export const railSections = [
  { num: "01", label: "Home", id: "home" },
  { num: "02", label: "About", id: "about" },
  { num: "03", label: "Services", id: "services" },
  { num: "04", label: "Medical", id: "medical" },
  { num: "05", label: "Opportunities", id: "opportunities" },
  { num: "06", label: "Contact", id: "contact" },
] as const;

/** Visual-only ecosystem labels used in the hero composition. */
export const ecosystemStages = ["IDEAS", "TECHNOLOGY", "PEOPLE", "PROGRESS"] as const;

export const hero = {
  badge: "CORLINK IT",
  headline: "Transform",
  headlineAccent: "Your Digital Future",
  subheading: "Where Innovation Drives Excellence, and Your Success Is Our Mission.",
  primaryCta: { label: "Explore Services", path: "/services" },
  secondaryCta: { label: "Learn More", path: "/about" },
  badgeStat: { value: "10+", label: "GLORIOUS YEARS" },
  image: "/assets/images/corl-medical-workstation.webp",
};

export const liveCodes = {
  title: "Live Codes",
  analytics: "Analytics",
  vitals: "Vitals",
  items: [
    { system: "ICD", code: "E11.9" },
    { system: "CPT", code: "99213" },
    { system: "HCPCS", code: "E0114" },
  ],
};

export const homeAbout = {
  eyebrow: "ABOUT",
  title: "Accelerate Your Digital Transformation Journey",
  body: "CORLINK IT is your trusted partner in navigating the complex digital landscape. As a premier mobile app development and IT consulting powerhouse, we don’t just deliver technology solutions—we craft digital experiences that revolutionize how you do business.",
  points: [
    "Supporting Fortune 500 enterprises and startups alike.",
    "Driving growth with technology and innovation.",
    "Delivering measurable results that unlock potential.",
  ],
  cta: { label: "Learn More", path: "/about" },
  image: "/assets/images/corl-home-office.webp",
};

export const stats = [
  { value: 10, suffix: "+", label: "YEARS OF EXPERIENCE" },
  { value: 200, suffix: "+", label: "ACTIVE CLIENTS" },
  { value: 400, suffix: "+", label: "IT PROJECTS" },
  { value: 50, suffix: "+", label: "TEAM ADVISORS" },
];

export const homeServices = {
  eyebrow: "SERVICES",
  title: "Transforming Business Through Innovative Technology",
  body: "Unlock your business potential with CORLINK IT’s cutting-edge technology solutions. We don’t just deliver services, We craft digital transformations that propel your business ahead of the competition.",
  cta: { label: "View Services", path: "/services" },
  features: [
    {
      title: "Deep Technical Expertise",
      body: "Our multidisciplinary teams master diverse technology stacks, ensuring the perfect solution for your unique challenges.",
      image: "/assets/images/home-consulting.jpg",
    },
    {
      title: "Strategic Partnership Network",
      body: "Exclusive collaborations with global technology leaders amplify our capabilities and unlock premium resources for your projects.",
      image: "/assets/images/home-healthtech.jpg",
    },
    {
      title: "Data-Driven Results",
      body: "Every solution is built with measurable KPIs, ensuring tangible ROI and business impact from day one.",
      image: "/assets/images/svc-data.jpg",
    },
    {
      title: "Global Reach, Local Excellence",
      body: "Spanning multiple continents with offices across India and North America, we combine local market insights with international best practices.",
      image: "/assets/images/svc-cloud.jpg",
    },
  ],
};

/** The six signature service panels shown in the homepage service corridor. */
export const serviceCorridor = [
  {
    num: "01",
    title: "Enterprise Business Applications",
    image: "/assets/images/corl-enterprise.webp",
  },
  { num: "02", title: "Mobile App Development", image: "/assets/images/corl-mobile.webp" },
  { num: "03", title: "Blockchain Solutions", image: "/assets/images/corl-blockchain.webp" },
  { num: "04", title: "AI & Machine Learning", image: "/assets/images/corl-ai.webp" },
  { num: "05", title: "Data Science & Analytics", image: "/assets/images/corl-data.webp" },
  { num: "06", title: "Automation & RPA", image: "/assets/images/corl-rpa.webp" },
];

export const whyCorlink = {
  title: "Why Industry Leaders Choose CORLINK IT",
  items: [
    "Proven Track Record of Success",
    "End-to-End Digital Solutions",
    "Rapid Time-to-Market",
    "Innovation-First Approach",
  ],
  banner: "MORE THAN 1K CLIENTS CHOOSE CORLINK IT",
  offerTitle: "Service We Offer",
  offer: [
    "Enterprise Business Applications",
    "Mobile Application Development",
    "Blockchain Solutions",
    "AI & Machine Learning",
    "Data Science & Analytics",
    "Cloud Technologies",
    "Medical Coding",
    "Healthcare Technology",
    "Real Estate",
    "Consultancy",
    "BPO",
  ],
};

export const serviceTicker = [
  "OUR SERVICES",
  "ENTERPRISE BUSINESS APPLICATIONS",
  "MOBILE APP DEVELOPMENT",
  "BLOCKCHAIN SOLUTIONS",
  "AI & MACHINE LEARNING",
  "DATA SCIENCE & ANALYTICS",
  "AUTOMATION & RPA",
];

export const finalCta = {
  title: "Ready to Transform Your Business?",
  body: "Connect with us today and discover how CORLINK IT can turn your technological aspirations into competitive advantages.",
  cta: { label: "Contact Us", path: "/contact" },
  image: "/assets/images/corl-boardroom.webp",
};

export const footer = {
  tagline: "Where Innovation Drives Excellence, and Your Success Is Our Mission.",
  /**
   * Social profiles shown as icons in the footer. Entries with an empty `url`
   * are skipped, so an icon never renders until it has a real destination —
   * fill one in to publish it.
   */
  social: [
    { label: "LinkedIn", short: "LI", url: "" },
    { label: "X", short: "X", url: "" },
    { label: "Instagram", short: "IG", url: "" },
  ],
  columns: [
    {
      heading: "SERVICES",
      links: [
        { label: "Enterprise Business Applications", path: "/services" },
        { label: "Mobile Application Development", path: "/services" },
        { label: "AI & Machine Learning", path: "/services" },
        { label: "Cloud Technologies", path: "/services" },
        { label: "Medical Coding", path: "/medical-coding" },
      ],
    },
    {
      heading: "COMPANY",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Services", path: "/services" },
        { label: "Contact Us", path: "/contact" },
      ],
    },
  ],
  contactHeading: "CONTACT",
  contact: {
    email: "reach@corlinkit.com",
    phone: "+91 70360 77778",
    address: "Flat No 502, Sri Vishnu Elite, Pupalaguda, Manikonda, Hyderabad 500089",
    website: "www.corlinkit.com",
    gst: "GST: 36AAMCC9546N1ZT",
  },
  copyright: "© 2026 Corlink IT. All rights reserved.",
  /** Build credit shown beside the copyright. */
  credit: {
    prefix: "Made by",
    label: "Ayaan Innovations",
    url: "https://ayaaninnovations.com/",
  },
};

/* ------------------------------- SERVICES ------------------------------- */

export const servicesPage = {
  hero: {
    eyebrow: "OUR EXPERTISE",
    title: "Digital solutions",
    titleAccent: "for modern enterprises",
    body: "From visionary application development to specialized healthcare technology. We deliver high-impact engineering that drives business value and operational efficiency.",
  },
  items: [
    {
      title: "Enterprise Business Applications",
      body: "At CORLINK IT, we empower enterprises with intelligent business applications. Our SAP-powered ERP systems streamline operations with real-time visibility. We build custom enterprise software that scales with your growth. Through legacy system modernization, we revitalize existing infrastructure.",
      image: "/assets/images/corl-enterprise.webp",
    },
    {
      title: "Mobile Application Development",
      body: "At CORLINK IT, we deliver cutting-edge mobile solutions to engage customers and empower teams. Our customer-centric retail apps boost sales with personalized shopping experiences. Through healthcare and telemedicine platforms, we enable remote care and patient monitoring. With field service management tools.",
      image: "/assets/images/corl-mobile.webp",
    },
    {
      title: "Blockchain Solutions",
      body: "At CORLINK IT, we build trust and transparency with distributed ledger technology. Our supply chain verification solutions ensure end-to-end product authenticity and traceability. With smart contracts, we help automate business processes through tamper-proof agreements. Through cryptocurrency integration.",
      image: "/assets/images/corl-blockchain.webp",
    },
    {
      title: "AI & Machine Learning",
      body: "At CORLINK IT, we help businesses harness the power of intelligent automation. With predictive analytics, organizations can forecast trends and make data-driven decisions. Our computer vision solutions automate quality control and visual inspection processes.",
      image: "/assets/images/corl-ai.webp",
    },
    {
      title: "Data Science & Analytics",
      body: "At CORLINK IT, we transform raw data into meaningful insights that drive strategy and growth. Our business intelligence dashboards enable real-time KPI monitoring and reporting. Through risk assessment models and customer behavior analytics, we help protect businesses and anticipate customer needs.",
      image: "/assets/images/corl-data.webp",
    },
    {
      title: "Automation & RPA",
      body: "At CORLINK IT, we help businesses eliminate repetitive tasks and boost overall efficiency. Our robotic process automation solutions automate routine business processes seamlessly. With intelligent workflow management, we streamline operations through smart routing. Through quality assurance automation.",
      image: "/assets/images/corl-rpa.webp",
    },
    {
      title: "Cybersecurity Solutions",
      body: "At CORLINK IT, we protect your digital assets with enterprise-grade security solutions. Our advanced threat detection uses AI-powered monitoring and rapid response. With compliance management and zero-trust architecture, we ensure regulatory confidence and secure access control. Through incident response planning.",
      image: "/assets/images/corl-cyber.webp",
    },
    {
      title: "Cloud Technologies",
      body: "At CORLINK IT, we help businesses scale effortlessly with modern cloud infrastructure. Our multi-cloud strategies optimize costs and performance across providers. With cloud migration services and DevOps implementation, we enable seamless, cloud-first operations. Through disaster recovery solutions.",
      image: "/assets/images/corl-cloud.webp",
    },
    {
      title: "Web Development",
      body: "At CORLINK IT, we create powerful digital experiences that engage users and drive conversions. Our progressive web applications deliver fast, responsive, and engaging interactions. With e-commerce platforms and API development & integration, we boost sales and enable seamless connectivity.",
      image: "/assets/images/corl-web.webp",
    },
    {
      title: "Digital Marketing & Growth",
      body: "At CORLINK IT, we help businesses amplify their reach and accelerate growth. Our data-driven marketing strategies deliver ROI-focused campaigns with measurable results. Through marketing automation, SEO, and content optimization, we nurture leads and drive organic traffic. With social media management, we build strong brand presence and foster community engagement.",
      image: "/assets/images/corl-marketing.webp",
    },
    {
      title: "Medical Coding",
      body: "Enterprise-grade medical coding and healthcare technology services.",
      image: "/assets/images/corl-medicalcoding.webp",
    },
    {
      title: "Healthcare Technology",
      body: "Healthcare platforms, interoperability, and digital health solutions.",
      image: "/assets/images/corl-healthtech.webp",
    },
    {
      title: "IT Consulting & Strategy",
      body: "Advisory, architecture planning, and transformation roadmaps.",
      image: "/assets/images/corl-consulting.webp",
    },
    {
      title: "Staffing & Talent Solutions",
      body: "Build teams faster with vetted talent and delivery support.",
      image: "/assets/images/corl-staffing.webp",
    },
    {
      title: "Product Development",
      body: "From idea to launch with scalable engineering and design.",
      image: "/assets/images/corl-product.webp",
    },
    {
      title: "Real Estate",
      body: "Strategic real estate solutions designed to simplify property decisions, optimize investments, and connect clients with the right opportunities for long-term growth and value.",
      image: "/assets/images/corl-realestate.webp",
    },
    {
      title: "Consultancy",
      body: "Expert consulting services that provide practical insights, strategic guidance, and tailored solutions to help businesses improve performance, overcome challenges, and achieve sustainable growth.",
      image: "/assets/images/corl-consultancy.webp",
    },
    {
      title: "BPO",
      body: "Reliable business process outsourcing solutions that streamline operations, reduce costs, and improve efficiency through skilled professionals, optimized processes, and technology-enabled support.",
      image: "/assets/images/corl-bpo.webp",
    },
  ],
  values: [
    {
      title: "Innovation in Our DNA",
      body: "We build with a future-first mindset and rapid experimentation.",
    },
    {
      title: "Global Vision, Local Understanding",
      body: "We combine global best practices with local execution excellence.",
    },
    {
      title: "Your Success is Our Mission",
      body: "We align to outcomes, not just deliverables, from day one.",
    },
  ],
  hoverHint: "Hover to Explore",
  readMore: "Read More",
};

/* -------------------------------- ABOUT -------------------------------- */

export const aboutPage = {
  hero: {
    eyebrow: "WHO WE ARE",
    title: "Where innovation",
    titleAccent: "meets execution",
    body: "CORLINK IT isn’t just an IT firm—we are a catalyst for digital evolution. Our team of visionary technologists, strategists, and engineers work relentlessly to turn complex business challenges into elegant, scalable solutions.",
    image: "/assets/images/corl-team.webp",
  },
  mv: [
    {
      label: "The Mission",
      body: "Your Success is Our Mission — We don’t just deliver projects; we forge partnerships. Your vision becomes our blueprint, and we execute with precision to achieve measurable business outcomes.",
      image: "/assets/images/about-mission.jpg",
    },
    {
      label: "The Vision",
      body: "Our vision is to become a globally recognized leader in IT services and technology solutions, empowering businesses worldwide through innovation, excellence, and trusted digital transformation partnerships.",
      image: "/assets/images/about-vision-cloud.jpg",
    },
  ],
  capabilitiesLabel: "Capabilities",
  expertiseTitle: "Expertise",
  expertise: [
    "ERP",
    "Cybersecurity",
    "AI/ML",
    "Blockchain",
    "Cloud",
    "Data Science",
    "Embedded Systems",
  ],
  dna: {
    eyebrow: "OUR DNA",
    title: "Core Directives",
    items: [
      {
        title: "Innovation in Our DNA",
        body: "We build with a future-first mindset, combining creativity with engineering discipline.",
      },
      {
        title: "Global Vision, Local Understanding",
        body: "We align global best practices with local execution excellence to deliver outcomes that last.",
      },
    ],
  },
  leadershipTitle: "Leadership",
  leaders: [
    { name: "KOUSHIK ANGARIKA", role: "Founder & CEO", image: "/assets/images/leader-ceo.jpg" },
    {
      name: "A Rajendra Prasad",
      role: "Managing Director",
      image: "/assets/images/leader-coo.jpg",
    },
  ],
  exploreTitle: "Explore",
  explore: [
    "Enterprise Business Applications",
    "Mobile Application Development",
    "Blockchain Solutions",
    "AI & Machine Learning",
    "Data Science & Analytics",
    "Automation & RPA",
    "Cybersecurity Solutions",
    "Cloud Technologies",
    "Web Development",
    "Digital Marketing & Growth",
    "Medical Coding",
    "Healthcare Technology",
    "Real Estate",
    "Consultancy",
    "BPO",
  ],
};

/* ---------------------------- OPPORTUNITIES ---------------------------- */

export const opportunitiesPage = {
  hero: {
    eyebrow: "CAREERS",
    title: "Build your future",
    titleAccent: "with CorlinkIt",
    body: "Join a team of passionate innovators shaping the future of technology and healthcare. Discover your next big opportunity.",
  },
  openTitle: "Open Positions",
  openBody: "We are always looking for talented individuals to join our growing team.",
  jobs: [
    {
      dept: "Engineering",
      title: "Senior Full Stack Developer",
      location: "Hyderabad, India",
      type: "Full-time",
      exp: "5+ years",
      cta: "Apply Now",
      image: "/assets/images/corl-enterprise.webp",
    },
    {
      dept: "Healthcare",
      title: "Medical Coding Specialist",
      location: "Remote / Hyderabad",
      type: "Full-time",
      exp: "3+ years",
      cta: "Apply Now",
      image: "/assets/images/corl-medicalcoding.webp",
    },
    {
      dept: "Design",
      title: "UI/UX Designer",
      location: "Hyderabad, India",
      type: "Full-time",
      exp: "2-4 years",
      cta: "Apply Now",
      image: "/assets/images/corl-product.webp",
    },
    {
      dept: "Engineering",
      title: "Cloud Infrastructure Engineer",
      location: "Remote",
      type: "Full-time",
      exp: "4+ years",
      cta: "Apply Now",
      image: "/assets/images/corl-cloud.webp",
    },
  ],
  noFit: {
    title: "Don't see a fit?",
    body: "We are always eager to meet driven and talented individuals. Send us your resume and tell us how you can make a difference at CorlinkIt.",
    cta: "Submit Resume",
  },
};

/* ------------------------------- CONTACT ------------------------------- */

export const contactPage = {
  hero: {
    eyebrow: "CONTACT",
    title: "Let's build something",
    titleAccent: "extraordinary",
    body: "Whether you have a specific project in mind or just want to explore possibilities, our team of experts is ready to help you navigate your digital transformation.",
  },
  form: {
    title: "Submit Your Request",
    subtitle: "Reach out and share what you need. We’ll respond with next steps.",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel", required: false },
      { name: "company", label: "Company", type: "text", required: false },
      { name: "message", label: "Message", type: "textarea", required: true },
    ] as const,
    submit: "Submit Your Request",
    success: "Thanks — we’ll respond with next steps.",
  },
  info: {
    title: "Contact Information",
    items: [
      { label: "Electronic", value: "reach@corlinkit.com" },
      { label: "Voice", value: "+91 70360 77778" },
      {
        label: "Physical",
        value: "Flat No 502, Sri Vishnu Elite\nPupalaguda, Manikonda\nHyderabad 500089",
      },
    ],
  },
};

/**
 * Privacy Policy and Terms & Conditions copy.
 *
 * NOTE: this is a starting draft assembled from the company details above, not
 * reviewed legal advice. Have counsel review and replace the wording before
 * treating these pages as binding.
 */
export const legalPages = {
  privacy: {
    slug: "/privacy-policy",
    eyebrow: "LEGAL",
    title: "Privacy",
    titleAccent: "Policy",
    body: "How Corlink IT collects, uses, and protects the information you share with us.",
    updated: "Last updated: 4 September 2026",
    sections: [
      {
        heading: "Who we are",
        body: [
          "Corlink IT (“Corlink IT”, “we”, “us”) operates www.corlinkit.com and provides IT consulting, application development, cloud, AI, and medical coding services.",
          "Our registered address is Flat No 502, Sri Vishnu Elite, Pupalaguda, Manikonda, Hyderabad 500089, India. Our GST identification number is 36AAMCC9546N1ZT.",
        ],
      },
      {
        heading: "Information we collect",
        body: ["We collect only what we need to respond to you and to run our services:"],
        list: [
          "Contact details you submit through our enquiry and careers forms — typically your name, email address, phone number, and message.",
          "Application material you choose to send us, such as a CV or portfolio link.",
          "Basic technical data your browser sends automatically, including IP address, device and browser type, and the pages you view on our site.",
        ],
      },
      {
        heading: "How we use your information",
        body: ["We use the information above to:"],
        list: [
          "Reply to your enquiry and provide the services you ask us for.",
          "Assess applications for roles and training programmes.",
          "Maintain the security, availability, and performance of our website.",
          "Meet our accounting, tax, and other legal obligations.",
        ],
      },
      {
        heading: "Sharing your information",
        body: [
          "We do not sell your personal information. We share it only with service providers who help us operate — for example hosting, email, and analytics providers — and only to the extent they need it to perform that work. We may also disclose information where the law requires it.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [
          "We keep enquiry and application records only as long as needed for the purpose they were collected for, and for any period our legal and accounting obligations require. When a record is no longer needed, we delete it or anonymise it.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can ask us to confirm what personal information we hold about you, to correct it if it is wrong, or to delete it where we have no continuing need or legal obligation to keep it. You can also ask us to stop sending you marketing messages at any time.",
          "To make any of these requests, write to reach@corlinkit.com and we will respond within a reasonable period.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "Our site uses a small number of cookies to keep it working correctly and to understand how it is used in aggregate. You can block or delete cookies in your browser settings; parts of the site may not work as intended if you do.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "We may update this policy as our services change. When we do, we will revise the date shown at the top of this page.",
        ],
      },
      {
        heading: "Contact us",
        body: [
          "Questions about this policy or about how we handle your information can be sent to reach@corlinkit.com or +91 70360 77778.",
        ],
      },
    ],
  },
  terms: {
    slug: "/terms-and-conditions",
    eyebrow: "LEGAL",
    title: "Terms &",
    titleAccent: "Conditions",
    body: "The terms that apply when you use the Corlink IT website and engage our services.",
    updated: "Last updated: 4 September 2026",
    sections: [
      {
        heading: "Agreement to these terms",
        body: [
          "These terms govern your use of www.corlinkit.com and any content or material available on it. By using the site you accept these terms. If you do not accept them, please do not use the site.",
        ],
      },
      {
        heading: "Services",
        body: [
          "The services described on this site are offered subject to a separate written agreement between Corlink IT and the client. Nothing on this site is an offer to contract, and descriptions of our services are indicative rather than binding.",
          "Where a signed statement of work or service agreement exists, that document governs the engagement and takes precedence over these terms in the event of a conflict.",
        ],
      },
      {
        heading: "Acceptable use",
        body: ["When using this site you agree not to:"],
        list: [
          "Use it for any unlawful purpose or in breach of any applicable regulation.",
          "Attempt to gain unauthorised access to the site, its servers, or any connected system.",
          "Interfere with the site's normal operation, including by introducing malicious code or placing unreasonable load on it.",
          "Copy, scrape, or republish our content for commercial purposes without our written permission.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "The content on this site — including text, design, graphics, logos, and the Corlink IT name and marks — belongs to Corlink IT or its licensors and is protected by applicable intellectual property law. You may view and print pages for your own reference; any other use requires our written consent.",
        ],
      },
      {
        heading: "Third-party links",
        body: [
          "This site may link to sites we do not control. We provide those links for convenience only and are not responsible for the content, accuracy, or practices of any third-party site.",
        ],
      },
      {
        heading: "Disclaimer",
        body: [
          "The site and its content are provided on an “as is” basis. While we take care to keep the information accurate and current, we make no warranty that it is complete, error-free, or suitable for any particular purpose, and we do not warrant that the site will be uninterrupted or free of defects.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "To the extent permitted by law, Corlink IT is not liable for any indirect, incidental, or consequential loss arising from your use of this site, including loss of profit, revenue, or data. Nothing in these terms limits liability that cannot be limited by law.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of India, and the courts at Hyderabad, Telangana have exclusive jurisdiction over any dispute arising from them or from your use of this site.",
        ],
      },
      {
        heading: "Changes to these terms",
        body: [
          "We may revise these terms from time to time. The version published on this page is the one that applies, and we will update the date shown at the top when we change it.",
        ],
      },
      {
        heading: "Contact us",
        body: [
          "Questions about these terms can be sent to reach@corlinkit.com or +91 70360 77778, or by post to Flat No 502, Sri Vishnu Elite, Pupalaguda, Manikonda, Hyderabad 500089.",
        ],
      },
    ],
  },
};

/* ------------------- REFERENCE-DESIGN SECTIONS (DRAFT) ------------------- */
/**
 * These entries exist so the pages match the approved reference design.
 *
 * DRAFT COPY — written to complete the layout, NOT supplied by the client.
 * Replace before publishing. The three marked `REPLACE:` below must not go
 * live as-is: they describe clients, results and partners.
 */

export const trustStrip = {
  label: "TRUSTED BY ORGANISATIONS WORLDWIDE",
  note: "and more partners",
  /** REPLACE: add real partner names only with their permission. */
  partners: [] as readonly string[],
};

export const industries = {
  eyebrow: "INDUSTRIES WE SERVE",
  title: "Built for the sectors we work in",
  link: { label: "View All Industries", path: "/services" },
  items: [
    { name: "Healthcare & Hospitals", image: "/assets/images/corl-healthtech.webp" },
    { name: "Enterprise & Manufacturing", image: "/assets/images/corl-enterprise.webp" },
    { name: "Medical Coding & RCM", image: "/assets/images/corl-medicalcoding.webp" },
    { name: "Banking & Financial Services", image: "/assets/images/corl-data.webp" },
    { name: "Retail & E-commerce", image: "/assets/images/corl-web.webp" },
    { name: "Real Estate & Property", image: "/assets/images/corl-realestate.webp" },
  ],
};

export const howWeWork = {
  eyebrow: "HOW WE WORK",
  title: "From Insight to Impact",
  body: "We follow a simple, proven and transparent process that turns your requirements into measurable outcomes.",
  steps: [
    {
      num: "01",
      title: "Understand",
      body: "We start by understanding your operational, technical and commercial challenges.",
    },
    {
      num: "02",
      title: "Analyze",
      body: "We assess your current workflows, systems and data to find the highest-value opportunities.",
    },
    {
      num: "03",
      title: "Optimize",
      body: "We deploy the right people, processes and technology to improve accuracy and efficiency.",
    },
    {
      num: "04",
      title: "Deliver",
      body: "We measure outcomes, share insights and drive sustained improvement after go-live.",
    },
  ],
};

export const testimonial = {
  /** While true the block does not render — no invented client is shown. */
  draft: true,
  eyebrow: "WHAT OUR CLIENTS SAY",
  title: "Trusted by the teams we work with",
  /** REPLACE: use a real, approved client quote and attribution. */
  quote:
    "Placeholder testimonial — replace with a real, approved client quote before this page goes live.",
  name: "Client name",
  role: "Role, Organisation",
  image: "/assets/images/corl-team.webp",
};

export const insights = {
  eyebrow: "INSIGHTS",
  title: "Perspectives on technology and change",
  link: { label: "View All Insights", path: "/services" },
  readMore: "Read More",
  items: [
    { category: "MEDICAL CODING", date: "Draft", title: "What accurate coding changes downstream" },
    { category: "CLOUD", date: "Draft", title: "Planning a migration that does not stall" },
    { category: "AI & ML", date: "Draft", title: "Where automation actually pays back" },
  ],
};

export const keyBenefits = {
  eyebrow: "KEY BENEFITS",
  title: "Delivering value at every step",
  /** REPLACE: substitute your own measured figures. */
  items: [
    { stat: "Accurate", label: "Delivery you can audit" },
    { stat: "Faster", label: "Time to market" },
    { stat: "Scalable", label: "Teams and infrastructure" },
    { stat: "Secure", label: "Compliance by design" },
    { stat: "Measured", label: "Reported against KPIs" },
  ],
};

export const caseStudy = {
  /** While true the block does not render — no invented engagement is shown. */
  draft: true,
  eyebrow: "FEATURED CASE STUDY",
  title: "Making a real impact",
  /** REPLACE: this is an illustrative outline, not a real engagement. */
  headline: "Illustrative",
  headlineLabel: "case outline",
  org: "Replace with a real client engagement",
  image: "/assets/images/about-vision-cloud.jpg",
  blocks: [
    {
      heading: "The Challenge",
      body: "Describe the problem the client came to you with.",
    },
    {
      heading: "Our Approach",
      body: "Describe the team, process and technology you put in place.",
    },
    {
      heading: "The Result",
      body: "Describe the measured outcome, with figures you can evidence.",
    },
  ],
};

export const faqs = {
  eyebrow: "FREQUENTLY ASKED QUESTIONS",
  title: "Quick Answers",
  link: { label: "View All FAQs", path: "/contact" },
  items: [
    {
      q: "How do I request a quote?",
      a: "Send your requirements through the contact form and our team will respond with next steps.",
    },
    {
      q: "How soon can I expect a response?",
      a: "We aim to reply to every enquiry within one working day.",
    },
    {
      q: "What services does CORLINK IT offer?",
      a: "Enterprise applications, mobile, cloud, AI and machine learning, data, cybersecurity, medical coding, real estate, consultancy and BPO. The full list is on the Services page.",
    },
    {
      q: "Is my information kept confidential?",
      a: "Yes. Enquiry details are used only to respond to you, as set out in our Privacy Policy.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes. We work with clients across India and North America.",
    },
    {
      q: "Can I schedule a consultation call?",
      a: "Yes. Mention a preferred time in your message and we will confirm a slot.",
    },
  ],
};

export const offices = {
  title: "Our Offices",
  body: "Where you can find us.",
  link: { label: "View All Locations", path: "/contact" },
  items: [
    {
      name: "India (Corporate Office)",
      address: "Flat No 502, Sri Vishnu Elite\nPupalaguda, Manikonda\nHyderabad 500089",
      image: "/assets/images/corl-enterprise.webp",
    },
  ],
};

/* --------------- SERVICES PAGE — REFERENCE SECTIONS (DRAFT) --------------- */
/**
 * DRAFT COPY for the services layout. Replace before publishing.
 * Nothing here names a client, a partner or a measured result.
 */

export const servicesHero = {
  /** Reassurance row under the hero copy. */
  points: ["Accurate & Compliant", "Improved Revenue", "Better Outcomes"],
};

export const serviceDetail = {
  /** Pull quote beside the selected service. */
  quote: "Built once, built properly, and built to keep working.",
  cta: { label: "Get Quote", path: "/contact" },
};

export const serviceTabs = [
  { label: "Overview", id: "overview" },
  { label: "Key Features", id: "key-features" },
  { label: "Benefits", id: "benefits" },
  { label: "Our Process", id: "our-process" },
  { label: "Case Study", id: "case-study" },
  { label: "FAQs", id: "faqs" },
] as const;

export const serviceOverview = {
  eyebrow: "SERVICE OVERVIEW",
  title: "Engineering built around your business",
  body: [
    "Our teams combine deep technical expertise with delivery discipline, so every engagement is scoped, built and measured against outcomes you agreed up front.",
    "We work across enterprise applications, mobile, cloud, data and healthcare technology — and we stay with the solution after launch.",
  ],
  cta: { label: "Contact Us", path: "/contact" },
  capabilities: [
    { title: "Enterprise Delivery", body: "Systems that scale with your operations" },
    { title: "Cloud Technologies", body: "Migration, DevOps and multi-cloud strategy" },
    { title: "AI & Machine Learning", body: "Predictive models and intelligent automation" },
    { title: "Cybersecurity Solutions", body: "Threat detection and compliance management" },
    { title: "Medical Coding", body: "Certified coders and audit-ready accuracy" },
  ],
};

export const serviceProcess = {
  eyebrow: "OUR PROCESS",
  title: "A structured approach for quality and accuracy",
  steps: [
    { num: "01", title: "Assess", body: "Understand your requirements, systems and constraints." },
    { num: "02", title: "Plan", body: "Agree a tailored strategy, scope and delivery workflow." },
    {
      num: "03",
      title: "Execute",
      body: "Build with certified professionals and QA at every stage.",
    },
    { num: "04", title: "Review", body: "Multi-level quality checks and compliance validation." },
    {
      num: "05",
      title: "Deliver",
      body: "Timely handover with continuous performance monitoring.",
    },
  ],
};

/* ----------------- WORK PAGE — REFERENCE SECTIONS (DRAFT) ----------------- */
/**
 * DRAFT COPY for the work layout. Replace before publishing.
 * Nothing here names a client, a partner or a measured result.
 */

export const workHero = {
  /** Reassurance row under the hero copy. */
  points: ["People Centric", "Process Driven", "Technology Enabled"],
  /** Flow chips floated over the hero photograph. */
  flowLabel: "From idea to lasting impact",
  flow: ["Discover", "Design", "Build", "Test", "Deploy", "Support"],
};

export const workApproach = {
  eyebrow: "OUR APPROACH",
  quote: "A collaborative approach that puts our clients' goals at the centre of everything we do.",
  cta: { label: "Contact Us", path: "/contact" },
};

export const workCta = {
  eyebrow: "LET'S WORK TOGETHER",
  /** Checklist down the right of the closing band. */
  points: [
    "Proven Track Record of Success",
    "End-to-End Digital Solutions",
    "Rapid Time-to-Market",
    "Innovation-First Approach",
  ],
};

/* ------------- MEDICAL CODING PAGE — REFERENCE SECTIONS (DRAFT) ----------- */
/** DRAFT COPY for the medical layout. Replace before publishing. */

export const medWhy = {
  eyebrow: "WHY MEDICAL CODING MATTERS",
  title: "The foundation of a healthy revenue cycle",
  body: "Accurate coding decides whether a provider is paid correctly, stays compliant, and can trust its own data. It is the difference between a claim that clears and a claim that is denied.",
  cta: { label: "Get Quote", path: "/contact" },
};

/* ------------- OPPORTUNITIES PAGE — REFERENCE SECTIONS (DRAFT) ------------ */
/** DRAFT COPY for the careers layout. Replace before publishing. */

export const careersHero = {
  /** Divided icon row under the hero copy. */
  points: ["Meaningful Work", "Growth Opportunities", "Collaborative Culture", "Positive Impact"],
  /** Card floated over the hero photograph. */
  card: { lines: ["Build", "Belong"], note: "Be the Difference" },
};

export const careersWhy = {
  eyebrow: "WHY CORLINK IT",
  title: "A workplace where",
  titleAccent: "you belong",
  body: "We believe our people are the driving force behind everything we do. You will find a supportive culture, continuous learning, and the chance to make a real impact.",
  cta: { label: "Learn More", path: "/about" },
  points: ["Continuous Learning", "Career Growth", "Inclusive Culture", "Work-Life Balance"],
  image: "/assets/images/corl-staffing.webp",
};

export const hiringProcess = {
  eyebrow: "OUR HIRING PROCESS",
  title: "Simple steps to join us",
  body: "Our hiring process is designed to be smooth, transparent and applicant-friendly.",
  steps: [
    { num: "01", title: "Apply", body: "Submit your application for the role you want." },
    { num: "02", title: "Review", body: "Our team reviews your profile and experience." },
    {
      num: "03",
      title: "Connect",
      body: "Shortlisted candidates are contacted for a conversation.",
    },
    { num: "04", title: "Join", body: "Become part of the team and start delivering." },
  ],
};

export const careersCta = { eyebrow: "READY FOR A MEANINGFUL CAREER?" };

/* --------------- CONTACT PAGE — REFERENCE SECTIONS (DRAFT) --------------- */
/** DRAFT COPY for the contact layout. Replace before publishing. */

export const contactHero = {
  /** Reassurance row under the hero copy. */
  points: ["Quick Response", "Expert Guidance", "Confidential Discussion", "Long-Term Partnership"],
};

export const contactExtras = {
  /** Shown after the form hands the enquiry to the visitor's mail client. */
  mailFallback: {
    before: "If your email app did not open, send your message to",
  },
  formEyebrow: "GET IN TOUCH",
  /** Consent control above the submit button. */
  consent: {
    before: "I agree to the",
    linkLabel: "Privacy Policy",
    after: "and consent to be contacted by Corlink IT.",
  },
  map: {
    title: "Find Us on the Map",
    body: "Visit our office or get directions below.",
  },
  ctaEyebrow: "LET'S CONNECT",
};
