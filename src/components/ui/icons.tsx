import {
  Activity,
  CheckCircle2,
  Award,
  BadgeCheck,
  BarChart3,
  Blocks,
  Bot,
  BrainCircuit,
  Briefcase,
  Building,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Rocket,
  Database,
  FileSearch,
  FileText,
  Flag,
  Factory,
  Gauge,
  Globe,
  GraduationCap,
  Handshake,
  Headset,
  Heart,
  Hospital,
  HeartPulse,
  Landmark,
  Layers,
  Lightbulb,
  LineChart,
  Lock,
  Mail,
  MapPin,
  PenTool,
  Package,
  Phone,
  Receipt,
  Scale,
  Search,
  SearchCheck,
  Send,
  RefreshCw,
  Server,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Stethoscope,
  ShoppingCart,
  Tags,
  Target,
  TrendingUp,
  UserCheck,
  UserRound,
  Users,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/**
 * Thin blue line icons.
 *
 * Icons are decorative: they are resolved from the content strings that already
 * exist in src/content, never stored alongside them. Adding a service to the
 * content file therefore needs no change here — it falls back to a neutral mark.
 */

export type { LucideIcon };

/** Matched longest-key-first, so "medical coding" wins over "medical". */
const KEYWORD_ICONS: ReadonlyArray<readonly [string, LucideIcon]> = [
  ["enterprise business applications", Building2],
  ["mobile application development", Smartphone],
  ["mobile app development", Smartphone],
  ["digital marketing", TrendingUp],
  ["data science", BarChart3],
  ["staffing", Users],
  ["product development", Package],
  ["healthcare technology", HeartPulse],
  ["medical coding", Stethoscope],
  ["web development", Globe],
  ["cybersecurity", ShieldCheck],
  ["blockchain", Blocks],
  ["automation", Bot],
  ["consulting", Compass],
  ["embedded", Server],
  ["machine learning", BrainCircuit],
  ["analytics", LineChart],
  ["cloud", Cloud],
  ["mobile", Smartphone],
  ["security", ShieldCheck],
  ["erp", Layers],
  ["ai", BrainCircuit],
  ["rpa", Workflow],
  ["data", Database],
];

/** Explicit lookups for short, non-service labels. */
const EXACT_ICONS: Readonly<Record<string, LucideIcon>> = {
  // Hero ecosystem stages
  ideas: Lightbulb,
  technology: Cpu,
  people: Users,
  progress: TrendingUp,

  // Homepage statistics
  "years of experience": CalendarCheck,
  "active clients": Users,
  "it projects": Layers,
  "team advisors": UserCheck,

  // Why industry leaders choose CORLINK IT
  "proven track record of success": Award,
  "end-to-end digital solutions": Workflow,
  "rapid time-to-market": Gauge,
  "innovation-first approach": Lightbulb,

  // Homepage feature cards
  "deep technical expertise": Code2,
  "strategic partnership network": Handshake,
  "data-driven results": LineChart,
  "global reach, local excellence": Globe,

  // Services page values / About DNA
  "innovation in our dna": Sparkles,
  "global vision, local understanding": Globe,
  "your success is our mission": Target,

  // Contact information
  electronic: Mail,
  voice: Phone,
  physical: MapPin,

  // Medical coding hero pills
  "process billing": Receipt,
  "patient records": FileText,
  "track diseases": Activity,
  "legal compliance": Scale,

  // Opportunities — departments
  engineering: Code2,
  healthcare: Stethoscope,
  design: PenTool,

  // About — mission / vision
  "the mission": Target,
  "the vision": Compass,

  // Non-IT service lines
  "real estate": Building,
  consultancy: Briefcase,
  bpo: Headset,

  // Homepage industries tiles
  "healthcare & hospitals": Hospital,
  "enterprise & manufacturing": Factory,
  "banking & financial services": Landmark,
  "retail & e-commerce": ShoppingCart,
  "real estate & property": Building,

  // Medical — what a coder does
  "reviews patient records & doctor notes": FileSearch,
  "assigns correct icd, cpt & hcpcs codes": Tags,
  "ensures accuracy for insurance claims": ShieldCheck,
  "fixes denied or rejected claims": RefreshCw,
  "works closely with billing & clinical teams": Users,
  "follows healthcare regulations (hipaa)": Scale,

  // Medical — types of coding jobs
  "outpatient coding": UserRound,
  "inpatient coding": Hospital,
  "specialty coding": HeartPulse,

  // Contact page — hero reassurance row
  "quick response": Gauge,
  "expert guidance": Compass,
  "confidential discussion": Lock,
  "long-term partnership": Handshake,

  // Opportunities page — hero reassurance row and benefits
  "meaningful work": Target,
  "growth opportunities": TrendingUp,
  "collaborative culture": Users,
  "positive impact": Heart,
  "continuous learning": GraduationCap,
  "career growth": TrendingUp,
  "inclusive culture": Users,
  "work-life balance": Heart,

  // Opportunities page — hiring process
  apply: FileText,
  connect: Handshake,
  join: UserCheck,

  // Work page — hero reassurance row
  "people centric": Users,
  "process driven": Workflow,
  "technology enabled": Cpu,

  // Work page — delivery flow chips
  discover: Compass,
  build: Package,
  test: ClipboardCheck,
  deploy: Rocket,
  support: Headset,

  // Services page — hero reassurance row
  "accurate & compliant": ShieldCheck,
  "improved revenue": TrendingUp,
  "better outcomes": HeartPulse,

  // Services page — capability panel
  "enterprise delivery": Building2,

  // Services page — five-step process rail
  assess: SearchCheck,
  plan: ClipboardList,
  execute: Settings,
  review: ClipboardCheck,

  // Key benefits row
  "delivery you can audit": ClipboardCheck,
  "time to market": Gauge,
  "teams and infrastructure": Server,
  "compliance by design": ShieldCheck,
  "reported against kpis": LineChart,

  // "How we work" process rail — people, analysis, tuning, delivery
  understand: Users,
  analyze: Search,
  optimize: Settings,
  deliver: Flag,

  // Medical coding workflow steps — one distinct mark per step in the rail
  "patient visit": UserRound,
  documentation: FileText,
  "coder reviews": ClipboardCheck,
  "code assignment": Code2,
  "claim submitted": Send,
  payment: Wallet,
};

const FALLBACK = BadgeCheck;

/**
 * Keyword lookups are matched on whole words. A plain substring test picks the
 * wrong icon on short keys — "erp" hits "ent(erp)rises" and "ai" hits "expl(ai)n"
 * — which is how a sentence about Fortune 500 clients ended up wearing the ERP
 * icon. The word boundaries keep "AI & Machine Learning" matching while
 * "enterprises" no longer does.
 */
const boundaryCache = new Map<string, RegExp>();

function wordRegex(needle: string): RegExp {
  const cached = boundaryCache.get(needle);
  if (cached) return cached;
  const escaped = needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(^|[^a-z0-9])${escaped}($|[^a-z0-9])`, "i");
  boundaryCache.set(needle, re);
  return re;
}

/** Resolve a thin line icon for any content string. */
function iconFor(label: string): LucideIcon {
  const key = label.trim().toLowerCase();

  const exact = EXACT_ICONS[key];
  if (exact) return exact;

  for (const [needle, Icon] of KEYWORD_ICONS) {
    if (wordRegex(needle).test(key)) return Icon;
  }

  return FALLBACK;
}

/**
 * Icon in a light blue rounded tile — the card treatment used across the site.
 * `strokeWidth` stays at 1.5 everywhere so the line weight reads as one set.
 */
export function IconTile({
  label,
  className,
  size = 22,
}: {
  label: string;
  className?: string;
  size?: number;
}) {
  const Icon = iconFor(label);
  return (
    <span className={`icon-tile ${className ?? ""}`} aria-hidden="true">
      <Icon size={size} strokeWidth={1.5} />
    </span>
  );
}

/** Icon in an outlined circle — the numbered process rows. */
export function IconRing({
  label,
  className,
  size = 24,
}: {
  label: string;
  className?: string;
  size?: number;
}) {
  const Icon = iconFor(label);
  return (
    <span className={`icon-ring ${className ?? ""}`} aria-hidden="true">
      <Icon size={size} strokeWidth={1.5} />
    </span>
  );
}

/** Bare icon, no container. */
export function Glyph({
  label,
  className,
  size = 18,
}: {
  label: string;
  className?: string;
  size?: number;
}) {
  const Icon = iconFor(label);
  return <Icon size={size} strokeWidth={1.5} className={className} aria-hidden="true" />;
}

export { Briefcase, CheckCircle2, Clock, GraduationCap, Lock, MapPin, Mail, Phone, Users };
