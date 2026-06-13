import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "../../data/projects";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = PROJECTS.find((item) => item.slug === params.slug);

    return {
      meta: [
        { title: project ? `${project.name} - Mythri Prasanna` : "Project - Mythri Prasanna" },
        {
          name: "description",
          content: project?.description ?? "Project case study by Mythri Prasanna.",
        },
      ],
    };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { slug } = Route.useParams();
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen text-foreground">
        <section className="mx-auto max-w-3xl px-6 py-24">
          <div className="font-mono text-xs text-primary mb-3">~/projects</div>
          <h1 className="font-display text-5xl font-bold">Project not found.</h1>
          <p className="mt-4 text-muted-foreground">
            This project page does not exist yet.
          </p>
          <a
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 hover:bg-surface"
          >
            <ArrowLeft className="size-4" />
            Back to Projects
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-foreground">
      <article className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition mb-10"
        >
          <ArrowLeft className="size-4" />
          All Projects
        </a>

        <header className="max-w-4xl">
          <div className="font-mono text-xs text-primary mb-3">
            {project.tag}
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {project.description}
          </p>

          <ProjectLinks project={project} />
        </header>

        <ProjectVisual project={project} />

        <div className="grid lg:grid-cols-[1fr_18rem] gap-10 mt-16">
          <div className="space-y-16">
            <ContentSection title="Overview">
              {(project.overview ?? [project.blurb]).map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </ContentSection>

            <ContentSection title="Tech Stack">
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(project.techStack ?? { Stack: project.stack }).map(
                  ([group, items]) => (
                    <div
                      key={group}
                      className="rounded-lg border border-border bg-surface p-5"
                    >
                      <div className="font-mono text-xs text-primary mb-4">
                        {group}
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {items.map((item) => (
                          <div key={item}>{item}</div>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </ContentSection>

            <ContentSection title="Features">
              <div className="grid sm:grid-cols-2 gap-3">
                {(project.features ?? project.highlights).map((feature) => (
                  <div
                    key={feature}
                    className="rounded-md border border-border bg-surface px-4 py-3 text-sm"
                  >
                    <span className="text-primary">+</span> {feature}
                  </div>
                ))}
              </div>
            </ContentSection>

            <ContentSection title="Architecture">
              <div className="rounded-lg border border-border bg-surface p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-3 font-mono text-xs">
                  {(project.architecture ?? ["User", "Application", "Data"]).map(
                    (step, index, steps) => (
                      <div key={step} className="flex md:flex-1 items-center gap-3">
                        <div className="w-full rounded-md border border-border bg-surface-2 px-4 py-3 text-center">
                          {step}
                        </div>
                        {index < steps.length - 1 && (
                          <span className="hidden md:block text-primary">-&gt;</span>
                        )}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </ContentSection>

            <ContentSection title="Challenges">
              {(project.challenges ?? project.highlights).map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </ContentSection>

            <ContentSection title="Lessons Learned">
              <ul className="grid sm:grid-cols-2 gap-3">
                {(project.lessons ?? project.stack).map((lesson) => (
                  <li
                    key={lesson}
                    className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-muted-foreground"
                  >
                    {lesson}
                  </li>
                ))}
              </ul>
            </ContentSection>
          </div>

          <aside className="lg:sticky lg:top-20 h-fit rounded-lg border border-border bg-surface p-5">
            <div className="font-mono text-xs text-primary mb-4">Links</div>
            <ProjectLinks project={project} compact />
          </aside>
        </div>
      </article>
    </main>
  );
}

function ContentSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-3xl font-bold mb-5">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function ProjectLinks({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const links = [
    project.github && { label: "GitHub", href: project.github },
    project.demo && { label: project.name === "Sonara" ? "APK" : "Demo", href: project.demo },
    project.kaggle?.[0] && { label: "Kaggle P1", href: project.kaggle[0] },
    project.kaggle?.[1] && { label: "Kaggle P2", href: project.kaggle[1] },
  ].filter(Boolean) as { label: string; href: string }[];

  if (links.length === 0) {
    return (
      <div className={compact ? "text-sm text-muted-foreground" : "mt-8 text-sm text-muted-foreground"}>
        Private or internal project.
      </div>
    );
  }

  return (
    <div className={compact ? "flex flex-col gap-2" : "mt-8 flex flex-wrap gap-3"}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2 text-sm hover:bg-surface-2 transition"
        >
          {link.label}
          <ArrowUpRight className="size-4" />
        </a>
      ))}
    </div>
  );
}

// function ProjectVisual({ project }: { project: Project }) {
//   const Icon = project.icon;

//   return (
//     <div className="relative mt-14 overflow-hidden rounded-xl border border-border bg-surface h-[28rem]">
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(circle at 22% 18%, color-mix(in oklab, var(--lime) 26%, transparent), transparent 35%), linear-gradient(135deg, color-mix(in oklab, var(--surface-2) 80%, black), var(--background))",
//         }}
//       />
//       <div className="absolute inset-6 rounded-lg border border-border bg-background/60 p-5 font-mono text-xs shadow-2xl">
//         <div className="flex items-center gap-1.5 border-b border-border pb-4">
//           <span className="size-2.5 rounded-full bg-destructive/70" />
//           <span className="size-2.5 rounded-full bg-amber" />
//           <span className="size-2.5 rounded-full bg-primary" />
//           <span className="ml-3 text-muted-foreground">~/projects/{project.slug}</span>
//         </div>
//         <div className="grid h-[calc(100%-2.75rem)] md:grid-cols-[16rem_1fr] gap-5 pt-5">
//           <div className="rounded-lg border border-border bg-surface p-5">
//             <div className="grid size-16 place-items-center rounded-lg border border-primary/30 bg-primary/10">
//               <Icon className="size-8 text-primary" />
//             </div>
//             <div className="mt-5 text-lg text-foreground">{project.imageLabel}</div>
//             <div className="mt-2 text-muted-foreground">{project.tag}</div>
//           </div>
//           <div className="rounded-lg border border-border bg-surface p-5">
//             <div className="mb-5 flex gap-2">
//               {["Home Screen", "Player Screen", "Search Screen"].map((tab) => (
//                 <span key={tab} className="rounded-full border border-border px-3 py-1 text-muted-foreground">
//                   {tab}
//                 </span>
//               ))}
//             </div>
//             <div className="space-y-3">
//               {project.highlights.map((highlight) => (
//                 <div key={highlight} className="rounded-md border border-border bg-surface-2 p-4">
//                   <div className="text-primary">{highlight}</div>
//                   <div className="mt-2 h-2 w-2/3 rounded-full bg-primary/20" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function ProjectVisual({ project }: { project: Project }) {
  if (!project.images?.length) return null;

  return (
    <div className="mt-14 space-y-4">
      {project.images.map((image) => (
        <div
          key={image}
          className="overflow-hidden rounded-xl border border-border bg-surface"
        >
          <img
            src={image}
            alt={project.name}
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}