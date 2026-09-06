import { Link } from "@tanstack/react-router";
import { Briefcase, Clock, Glyph, MapPin } from "@/components/ui/icons";
import { ArrowGlyph } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/Reveal";

export type Job = {
  dept: string;
  title: string;
  location: string;
  type: string;
  exp: string;
  cta: string;
  image: string;
};

/**
 * Open roles as white cards: photograph on the left, department, serif title,
 * location and the type/experience chips on the right.
 */
export function OpportunityRows({ jobs }: { jobs: readonly Job[] }) {
  return (
    <ul className="grid gap-5 lg:grid-cols-2">
      {jobs.map((job, i) => (
        <Reveal as="li" key={job.title} delay={(i % 2) * 70} className="min-w-0">
          <Link
            to="/contact"
            aria-label={`${job.title} — ${job.cta}`}
            className="card-base card-lift group flex h-full min-w-0 flex-col overflow-hidden sm:flex-row"
          >
            <span className="relative block h-40 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[38%]">
              <img
                src={job.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,var(--navy)_18%,transparent)]" />
            </span>

            <span className="flex min-w-0 flex-1 flex-col p-5">
              <span className="flex items-center gap-2">
                <Glyph label={job.dept} size={15} className="text-[var(--blue)]" />
                <span className="text-[0.7rem] font-semibold tracking-[0.12em] text-[var(--blue)] uppercase">
                  {job.dept}
                </span>
              </span>

              <span className="h-card mt-2.5 block font-display">{job.title}</span>

              <span className="mt-2 flex items-center gap-2 text-[0.82rem] text-[var(--ink-muted)]">
                <MapPin size={15} strokeWidth={1.5} className="shrink-0" aria-hidden="true" />
                {job.location}
              </span>

              <span className="mt-4 flex flex-wrap items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-[var(--tint)] px-3 py-1.5 text-[0.72rem] font-medium text-[var(--navy)]">
                  <Briefcase size={13} strokeWidth={1.5} aria-hidden="true" />
                  {job.type}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-[var(--tint)] px-3 py-1.5 text-[0.72rem] font-medium text-[var(--navy)]">
                  <Clock size={13} strokeWidth={1.5} aria-hidden="true" />
                  {job.exp}
                </span>
              </span>

              <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-[var(--blue)]">
                {job.cta}
                <ArrowGlyph className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
