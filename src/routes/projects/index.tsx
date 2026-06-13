import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { FEATURED_PROJECTS, PROJECTS, type Project } from "../../data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects - Mythri Prasanna" },
      {
        name: "description",
        content:
          "A collection of projects across full stack, mobile, AI, computer vision, and research.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
      return PROJECTS;
    }

    return PROJECTS.filter((project) =>
      [
        project.name,
        project.tag,
        project.description,
        project.blurb,
        ...project.stack,
        ...project.highlights,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [query]);

  const featured = FEATURED_PROJECTS.filter((project) =>
    filtered.some((match) => match.slug === project.slug),
  );
  const allProjects = filtered.filter(
    (project) => !featured.some((item) => item.slug === project.slug),
  );

  return (
    <main className="min-h-screen text-foreground">
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24">
        <a
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition mb-10"
        >
          <ArrowLeft className="size-4" />
          Back Home
        </a>

        <div className="font-mono text-xs text-primary mb-3">~/projects</div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
              All Projects.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              A collection of projects across full stack, mobile, AI, computer
              vision, and research.
            </p>
          </div>

          <label className="relative block w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-md border border-border bg-surface py-3 pl-10 pr-4 font-mono text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary"
            />
          </label>
        </div>

        <ProjectSection title="Featured" projects={featured} />
        <ProjectSection title="All Projects" projects={allProjects} />

        {filtered.length === 0 && (
          <div className="mt-14 rounded-lg border border-border bg-surface p-8 text-center">
            <div className="font-display text-2xl font-semibold">
              No projects found.
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Try searching for React Native, FastAPI, AI, or computer vision.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

function ProjectSection({
  title,
  projects,
}: {
  title: string;
  projects: Project[];
}) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-border pt-10">
      <div className="font-mono text-xs uppercase tracking-wider text-primary mb-6">
        {title}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition hover:bg-surface-2 hover:border-primary/40"
    >
      <ProjectVisual project={project} compact />
      <div className="flex flex-1 flex-col p-5">
        <div className="font-mono text-xs text-primary mb-2">{project.tag}</div>
        <h2 className="font-display text-2xl font-bold">{project.name}</h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-primary">
          View Details
          <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
}

function ProjectVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const Icon = project.icon;

  return (
    <div
      className={`relative overflow-hidden border-b border-border bg-surface-2 ${compact ? "h-44" : "h-72"}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 15%, color-mix(in oklab, var(--lime) 28%, transparent), transparent 35%), linear-gradient(135deg, color-mix(in oklab, var(--surface-2) 80%, black), var(--background))",
        }}
      />
      <div className="absolute inset-4 rounded-lg border border-border bg-background/55 p-4 font-mono text-xs">
        <div className="flex items-center gap-1.5 border-b border-border pb-3">
          <span className="size-2 rounded-full bg-destructive/70" />
          <span className="size-2 rounded-full bg-amber" />
          <span className="size-2 rounded-full bg-primary" />
          <span className="ml-2 text-muted-foreground">~/preview</span>
        </div>
        <div className="mt-5 flex items-center gap-4">
          <div className="grid size-14 place-items-center rounded-lg border border-primary/30 bg-primary/10">
            <Icon className="size-7 text-primary" />
          </div>
          <div>
            <div className="text-foreground">{project.imageLabel}</div>
            <div className="mt-1 text-muted-foreground">{project.name}</div>
          </div>
        </div>
        <div className="mt-5 space-y-2">
          {project.highlights.slice(0, 3).map((highlight) => (
            <div key={highlight} className="h-2 rounded-full bg-primary/20" />
          ))}
        </div>
      </div>
    </div>
  );
}
