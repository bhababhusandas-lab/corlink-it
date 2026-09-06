/**
 * CORLINK IT — Medical Coding career guide content.
 * Ported verbatim from the existing site. Do not rewrite or invent claims.
 */

export const medHero = {
  eyebrow: "CAREER GUIDE · HEALTHCARE IT",
  title: "What is",
  titleAccent: "Medical Coding?",
  body: "Translating doctor diagnoses, procedures, lab reports, and prescriptions into universal alphanumeric codes — the engine behind healthcare billing, records, and compliance worldwide.",
  pills: ["Process Billing", "Patient Records", "Track Diseases", "Legal Compliance"],
  caption: "Real-world healthcare workflows",
  image: "/assets/images/corl-med-command.webp",
};

export const medStats = [
  { value: 0, suffix: "+", label: "Projects Coded" },
  { value: 0, prefix: "₹", suffix: "L+", label: "Salary Potential" },
  { value: 0, suffix: "%", label: "Placement Rate" },
  { value: 0, suffix: " Types", label: "Code Systems" },
];

export const workflowSteps = [
  {
    n: "01",
    t: "Patient Visit",
    d: "Medical coder reads the full patient record, interprets medical terminology, and identifies every billable diagnosis and procedure.",
  },
  {
    n: "02",
    t: "Documentation",
    d: "Correct ICD-10 (diagnosis), CPT (procedure), and HCPCS (equipment) codes are assigned. Sequencing and specificity matter critically here.",
  },
  {
    n: "03",
    t: "Coder Reviews",
    d: "Codes are sent to the billing team, who bundle them into an insurance claim (CMS-1500 or UB-04 form) and submit electronically.",
  },
  {
    n: "04",
    t: "Code Assignment",
    d: "Insurer reviews codes for medical necessity, approves the claim, and pays the provider. Wrong codes → rejection → revenue loss.",
  },
  {
    n: "05",
    t: "Claim Submitted",
    d: "Codes are sent to the billing team, who bundle them into an insurance claim (CMS-1500 or UB-04 form) and submit electronically.",
  },
  {
    n: "06",
    t: "Payment",
    d: "Insurer reviews codes for medical necessity, approves the claim, and pays the provider. Wrong codes → rejection → revenue loss.",
  },
] as const;

export const criticalNote =
  "Wrong codes → claim rejection → revenue loss. A single miscoded digit can cost a hospital thousands of dollars.";

export const codeSystems = {
  icd: {
    tab: "ICD-10 — Diagnosis",
    name: "ICD",
    full: "International Classification of Diseases",
    purpose: "Describes diagnoses, diseases, and medical conditions",
    examples: [
      ["E11.9", "Type 2 Diabetes without complications"],
      ["J18.9", "Pneumonia, unspecified"],
      ["I10", "Essential (primary) hypertension"],
      ["U07.1", "COVID-19, confirmed"],
    ],
    struct: [
      ["E", "Category", "Endocrine diseases"],
      ["11", "Type", "Type 2 Diabetes"],
      [".9", "Specificity", "without complications"],
    ],
    tip: "Always code to the highest level of specificity. Avoid using unspecified codes if a more specific one exists.",
  },
  cpt: {
    tab: "CPT — Procedures",
    name: "CPT",
    full: "Current Procedural Terminology",
    purpose: "Describes medical procedures and services performed",
    examples: [
      ["99213", "Office visit — established patient, moderate complexity"],
      ["93000", "Electrocardiogram (ECG) with interpretation"],
      ["27447", "Total knee arthroplasty (replacement)"],
      ["71046", "Chest X-ray, 2 views"],
    ],
    struct: [
      ["I", "Category I", "Common procedures (surgery, lab, radiology)"],
      ["II", "Category II", "Performance tracking — optional supplement"],
      ["III", "Category III", "Emerging / experimental technology codes"],
    ],
    tip: "CPT codes are 5-digit numeric. Always pair with the matching ICD code to justify medical necessity.",
  },
  hcpcs: {
    tab: "HCPCS — Equipment",
    name: "HCPCS",
    full: "Healthcare Common Procedure Coding System",
    purpose: "Equipment, supplies and services not covered by CPT",
    examples: [
      ["E0114", "Crutches, underarm, wood, pair"],
      ["E1130", "Standard wheelchair, fixed full-length arms"],
      ["A0430", "Ambulance service, conventional air"],
      ["L5100", "Below knee molded socket prosthetic"],
    ],
    struct: [
      ["A", "A codes", "Transport, medical supplies"],
      ["E", "E codes", "Durable medical equipment (DME)"],
      ["L", "L codes", "Orthotic and prosthetic procedures"],
    ],
    tip: "HCPCS Level II codes begin with a letter (A–V) followed by 4 digits. Required for Medicare/Medicaid billing.",
  },
} as const;

export type CodeSystemKey = keyof typeof codeSystems;

export const copyableCodes = [
  ["E11.9", "Type 2 Diabetes without complications"],
  ["J18.9", "Pneumonia, unspecified"],
  ["I10", "Essential (primary) hypertension"],
  ["U07.1", "COVID-19, confirmed"],
];

export const coderDuties = [
  "Reviews patient records & doctor notes",
  "Assigns correct ICD, CPT & HCPCS codes",
  "Ensures accuracy for insurance claims",
  "Fixes denied or rejected claims",
  "Works closely with billing & clinical teams",
  "Follows healthcare regulations (HIPAA)",
];

export const workplaces = [
  "Hospitals",
  "Clinics",
  "Insurance Companies",
  "Medical Billing Cos.",
  "IT Healthcare",
  "Work From Home ✓",
];

export const specializations = [
  {
    title: "Outpatient Coding",
    body: "Clinics and doctor office visits. Best for beginners — lower complexity, high daily volume. Uses CMS-1500 claim forms.",
    badge: "Entry Level",
  },
  {
    title: "Inpatient Coding",
    body: "Hospital admissions, surgeries, ICU stays. Complex multi-system conditions. Requires DRG (Diagnosis Related Group) assignment.",
    badge: "Intermediate",
  },
  {
    title: "Specialty Coding",
    body: "Cardiology, Orthopedics, Radiology, Oncology. Highest pay, needs 2+ years experience and specialty knowledge.",
    badge: "Advanced",
  },
];

export const requirements = {
  eligibility: {
    minimum: "Graduation — any stream",
    preferred: "Life sciences / Pharmacy / Nursing background",
    skills: [
      "Attention to detail (critical)",
      "Basic medical knowledge",
      "Good English comprehension",
      "Computer literacy",
      "Analytical thinking",
    ],
  },
  syllabus: [
    ["Medical Terminology", "Root words, prefixes, suffixes"],
    ["Human Anatomy", "Organs and body systems"],
    ["ICD-10 Coding", "Diagnosis coding rules"],
    ["CPT Coding", "Procedure codes"],
    ["HCPCS Coding", "Equipment & services"],
    ["Healthcare Laws", "HIPAA privacy rules"],
    ["Billing Process", "Revenue cycle basics"],
  ],
  duration: "Duration: 3 months – 1 year",
  toolsIntro: "Real jobs use software — not paper. Master these:",
  tools: [
    ["EHR Software", "Electronic Health Records"],
    ["3M Encoder", "Industry code lookup tool"],
    ["Epic", "Hospital management system"],
    ["Cerner", "Clinical information system"],
    ["Billing Software", "Claim submission & tracking"],
  ],
};

export const certifications = {
  cpc: {
    tab: "CPC — Most Popular",
    name: "CPC",
    full: "Certified Professional Coder",
    by: "AAPC",
    level: "Entry–Mid",
    stats: [
      ["Questions", "100"],
      ["Duration", "~4 hours"],
      ["Format", "Open book"],
      ["Passing", "70%"],
    ],
    focus: "Outpatient / physician office coding",
    steps: [
      "Study ICD-10, CPT, HCPCS manuals",
      "Complete 80+ CEUs",
      "Practice mock exams (10+ tests)",
      "Register on aapc.com",
      "Sit the exam (open book)",
      "Receive results in 7–10 days",
    ],
  },
  cca: {
    tab: "CCA — Entry Level",
    name: "CCA",
    full: "Certified Coding Associate",
    by: "AHIMA",
    level: "Entry Level",
    stats: [
      ["Duration", "~3.5 hours"],
      ["Setting", "Inpatient + Outpatient"],
    ],
    focus: "Both inpatient and outpatient settings",
    steps: [
      "Review AHIMA's CCA study guide",
      "Cover ICD-10-CM/PCS and CPT",
      "Take AHIMA practice exams",
      "Register at ahima.org",
      "Sit computer-based test",
      "Results within 2–3 weeks",
    ],
  },
  ccs: {
    tab: "CCS — Advanced",
    name: "CCS",
    full: "Certified Coding Specialist",
    by: "AHIMA",
    level: "Advanced",
    stats: [
      ["Duration", "~5 hours"],
      ["Requires", "3+ years experience"],
    ],
    focus: "Hospital inpatient coding & DRG assignment",
    steps: [
      "Deep study of ICD-10-PCS",
      "Master DRG grouping logic",
      "Complete AHIMA CCS prep materials",
      "Take multiple full-length mocks",
      "Sit exam at a Pearson VUE center",
      "Requires 3+ years experience",
    ],
  },
} as const;

export type CertKey = keyof typeof certifications;

export const salaryProfiles = [
  "Fresher — No certification",
  "Fresher — CPC certified",
  "1–2 years experience",
  "2–5 years experience",
  "5+ years / Specialty coder",
  "US projects / Remote coding",
];

export const salaryBands = [
  { label: "Fresher (no cert)", range: "₹1.8–3L", pct: 15 },
  { label: "CPC Fresher", range: "₹3–5L", pct: 28 },
  { label: "2–3 Yr Exp", range: "₹5–10L", pct: 50 },
  { label: "5+ Yr Specialty", range: "₹10–18L", pct: 75 },
  { label: "US Remote", range: "₹12–22L+", pct: 100 },
] as const;

export const careerPath = [
  {
    role: "Medical Coder",
    yr: "0–1 yr",
    sal: "₹2–5 LPA",
    skills: ["ICD-10 basics", "CPT coding", "EHR navigation"],
  },
  {
    role: "Senior Coder",
    yr: "1–3 yr",
    sal: "₹5–8 LPA",
    skills: ["Specialty coding", "Auditing basics", "Claim resolution"],
  },
  {
    role: "Coding Auditor",
    yr: "3–5 yr",
    sal: "₹8–12 LPA",
    skills: ["Compliance review", "DRG auditing", "Quality assurance"],
  },
  {
    role: "Coding Manager",
    yr: "5–8 yr",
    sal: "₹10–18 LPA",
    skills: ["Team leadership", "Revenue cycle", "Workflow management"],
  },
  {
    role: "Trainer / Consultant",
    yr: "8+ yr",
    sal: "₹15–25+ LPA",
    skills: ["Teaching coders", "Consulting hospitals", "US outsourcing"],
  },
];

export const advantages = [
  "High demand globally",
  "Non-clinical — no patient handling",
  "Work-from-home options available",
  "Stable, long-term career",
  "Good growth potential",
  "International exposure (US coding)",
  "Skill-based — merit matters",
];

export const challenges = [
  "Extreme accuracy required — errors cost revenue",
  "Must stay updated with changing coding rules",
  "Work can feel repetitive at times",
  "Deadline pressure in billing cycles",
  "First 6 months are tough financially",
  "Fake institutes are a real problem",
  "Not fast money — patience required",
];

export const beginnerMistakes = [
  "Joining fake institutes",
  "Skipping certification",
  "Not practicing real cases",
  "Expecting high salary immediately",
];

export const mistakesNote = "This field rewards skill + accuracy, not shortcuts.";

export const roadmap = [
  {
    num: "01",
    title: "Understand the Field",
    dur: "1–2 Days",
    summary: "Be honest with yourself before investing time and money.",
    detail:
      "You will read doctor handwriting and medical reports daily. Work is detail-heavy and accuracy-focused. Mistakes cost hospitals revenue. If you prefer creative or fast-paced work this may not suit you.",
    checklist: [
      "Read 2–3 real coding job descriptions",
      "Shadow or interview a working coder",
      "Decide if you can handle repetitive precision work",
    ],
  },
  {
    num: "02",
    title: "Build Medical Foundation",
    dur: "2–4 Weeks",
    summary: "Learn medical terminology, anatomy, and common diseases.",
    detail: "Learn medical terminology, anatomy, and common diseases.",
    checklist: [
      "Complete a free medical terminology course",
      "Study 8 major body systems",
      "Learn 20+ common diagnosis names",
    ],
  },
  {
    num: "03",
    title: "Join a Good Institute",
    dur: "2–6 Months",
    summary: "Your institute choice makes or breaks your career start.",
    detail:
      "Choose one that offers CPC preparation, real-time case practice, and trainers with active industry experience. Avoid anyone promising a job in 15 days or skipping certification training.",
    checklist: [
      "Verify trainer has CPC credential",
      "Confirm real case practice is included",
      "Check placement track record",
    ],
  },
  {
    num: "04",
    title: "Master the Code Systems",
    dur: "Core Phase",
    summary: "Learn ICD-10, CPT, and HCPCS deeply — understand logic, not memory.",
    detail:
      "Focus on understanding coding logic: why a code is selected, how to navigate code books, and how guidelines direct sequencing.",
    checklist: [
      "Code 5 ICD-10 cases daily",
      "Memorize E&M CPT code ranges",
      "Practice HCPCS equipment scenarios",
    ],
  },
  {
    num: "05",
    title: "Practice Real Cases Daily",
    dur: "Ongoing",
    summary: "10–20 real patient cases per day — this separates job-ready coders.",
    detail:
      "Without real case practice you will fail interviews even after completing a course. Use patient reports, discharge summaries, and operative notes. Time yourself to build speed alongside accuracy.",
    checklist: [
      "Code 10 cases minimum per day",
      "Track error rate — aim below 5%",
      "Simulate timed exam conditions weekly",
    ],
  },
  {
    num: "06",
    title: "Get CPC Certified",
    dur: "Exam Day",
    summary: "CPC certification is your non-negotiable entry ticket.",
    detail:
      "100 questions, ~4 hours, open book. Without it salary stays low and growth is slow. Practice time management — you have ~2.4 minutes per question.",
    checklist: [
      "Score 80%+ on 5 consecutive mock exams",
      "Complete 80 CEUs before sitting",
      "Register at aapc.com at least 30 days ahead",
    ],
  },
  {
    num: "07",
    title: "Apply for Jobs Strategically",
    dur: "Job Hunt",
    summary: "Target the right companies — not all coding jobs are equal.",
    detail:
      "Apply to medical coding companies, hospitals with large billing departments, and healthcare BPOs. Recruiters check: certification, accuracy, and basic medical knowledge.",
    checklist: [
      "Apply to 5+ positions per week",
      "Tailor resume to highlight CPC and accuracy",
      "Prepare 10 mock coding cases for the interview",
    ],
  },
  {
    num: "08",
    title: "Crack the Interview",
    dur: "Preparation",
    summary: "Know coding definitions, differences, and live case coding.",
    detail:
      "Common questions: What is upcoding? How do you sequence diagnosis codes? Difference between ICD and CPT? Many employers will give a live case test.",
    checklist: [
      "Define upcoding, downcoding, unbundling",
      "Code 2 full cases without error",
      "Know HIPAA basics cold",
    ],
  },
  {
    num: "09",
    title: "Navigate Your First 6 Months",
    dur: "0–6 Months",
    summary: "Salary will be low and work will feel repetitive — stay focused.",
    detail:
      "This phase is critical. Focus entirely on accuracy, speed, and learning from every error. Avoid job-hopping in the first year — consistency builds your professional reputation.",
    checklist: [
      "Maintain accuracy above 95%",
      "Ask for feedback weekly",
      "Track productivity improvement monthly",
    ],
  },
  {
    num: "10",
    title: "Level Up Your Career",
    dur: "After 1 Year",
    summary: "Move into specialty coding, auditing, or US remote projects.",
    detail: "Move into specialty coding, auditing, or US remote projects.",
    checklist: [
      "Pick one specialty to master first",
      "Study for CCS if targeting hospital coding",
      "Connect with US-focused outsourcing firms",
    ],
  },
];

export const quizQuestions = [
  "Are you okay with detail-heavy, repetitive work?",
  "Do you prefer office or remote work over clinical settings?",
  "Can you stay updated with changing rules and guidelines?",
  "Are you willing to study for a certification exam?",
  "Do you have patience for a 1–2 year ramp-up period?",
  "Are you interested in the healthcare industry?",
];

export const quizResults = {
  strong: (n: number) => ({
    t: `Strong fit — ${n}/6`,
    b: "Medical coding aligns well with your strengths. Next step: get CPC certified and start practicing real cases.",
  }),
  medium: (n: number) => ({
    t: `Worth exploring — ${n}/6`,
    b: "You have real potential. Focus on the areas you were unsure about before committing fully.",
  }),
  low: (n: number) => ({
    t: `Reconsider carefully — ${n}/6`,
    b: "Medical coding rewards patience and precision. Reflect on whether the daily reality suits you.",
  }),
};

export const medSectionTitles = {
  workflow: {
    eyebrow: "Real Workflow",
    title: "End-to-End Process",
    hint: "Click each step to see what happens inside.",
  },
  codes: { eyebrow: "Code Systems", title: "The 3 Major Code Types" },
  daily: { eyebrow: "Daily Role", title: "What a Medical Coder Does" },
  workplaces: "Where You Can Work",
  specializations: { eyebrow: "Specializations", title: "Types of Coding Jobs" },
  requirements: { eyebrow: "Requirements", title: "Eligibility, Syllabus & Tools" },
  certifications: { eyebrow: "Certifications", title: "Your Entry Ticket to the Industry" },
  salary: {
    eyebrow: "Salary Calculator",
    title: "What Will You Earn?",
    hint: "Select your profile and get a realistic estimate.",
  },
  career: {
    eyebrow: "Career Path",
    title: "Growth Trajectory",
    hint: "Click any role to see skills and salary.",
  },
  honest: { eyebrow: "Honest Assessment", title: "Advantages & Challenges" },
  roadmapT: {
    eyebrow: "Complete Roadmap",
    title: "Zero to Job — Step by Step",
    hint: "Click any step to expand the full action plan.",
  },
  quiz: {
    eyebrow: "Self Assessment",
    title: "Is Medical Coding Right for You?",
    hint: "Answer honestly — takes 30 seconds.",
  },
};
