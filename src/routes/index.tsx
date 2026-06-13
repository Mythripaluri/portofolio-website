import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Terminal,
  Code2, Server, Smartphone, Database, Brain, Eye, Wrench,
  FileText, MapPin, Sparkles,
  Lightbulb,
  Trophy,
} from "lucide-react";
import {useEffect, useState} from "react";
import { CASE_STUDIES } from "../data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mythri Prasanna — Full Stack, Mobile & AI Developer" },
      { name: "description", content: "Portfolio of Mythri Prasanna — building scalable web, mobile and AI-powered applications with React Native, FastAPI, Node.js and modern LLM tooling." },
    ],
  }),
  component: Portfolio,
});

const NAME = "Mythri Prasanna";

function Logo() {
  const [text, setText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < NAME.length) {
        setText(NAME.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTypingComplete(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href="#top"
      className="font-mono text-sm flex items-center gap-2 whitespace-nowrap min-w-[180px]"
    >
      <span className="text-primary">~/</span>

      {text}

      <span
        className={`text-primary ${
          typingComplete ? "animate-pulse" : ""
        }`}
      >
        _
      </span>
    </a>
  );
}

/* ---------- data ---------- */

const NAV = [
  ["About", "#about"],
  ["Stack", "#stack"],
  ["Work", "#work"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
] as const;

const STACK: { label: string; icon: any; items: string[] }[] = [
  {
    label: "Languages",
    icon: Code2,
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C++"]
  },
  {
    label: "Frontend",
    icon: Code2,
    items: ["React", "TypeScript", "Tailwind CSS", "Vite", "TanStack Query"]
  },
  {
    label: "Backend",
    icon: Server,
    items: ["FastAPI", "Node.js", "Express.js", "Flask", "REST APIs", "JWT", "WebSockets"]
  },
  {
    label: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Expo", "Expo Router", "AsyncStorage", "Expo Audio", "React Navigation"]
  },
  {
    label: "Databases",
    icon: Database,
    items: ["MySQL", "ChromaDB", "MongoDB", "Vector Databases"]
  },
  {
    label: "AI / ML",
    icon: Brain,
    items: [
      "LangChain",
      "Ollama",
      "Sentence Transformers",
      "RAG",
      "Embeddings",
      "Semantic Search"
    ]
  },
  {
    label: "Computer Vision",
    icon: Eye,
    items: ["MediaPipe", "OpenCV", "NumPy", "Pose Estimation", "Image Processing"]
  },
  {
    label: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Postman", "VS Code", "Swagger", "Figma"]
  },
  {
    label: "Concepts",
    icon: Lightbulb,
    items: [
      "Data Structures",
      "Algorithms",
      "System Design",
      "API Integration",
      "State Management"
    ]
  }
];

const SKILLS: [string, number][] = [
  ["Full Stack Development", 90],
  ["Mobile Development", 90],
  ["Frontend Engineering", 89],
  ["Backend Engineering", 92],
  ["AI Applications", 82],
  ["Computer Vision", 78],
  ["Database Systems", 84],
  ["API Integration", 88],
  ["Problem Solving", 85],
  ["System Design", 75],
];

const PROJECTS = [
  {
    name: "OQB",
    tag: "Full Stack · Mobile",
    blurb:
      "Online examination platform featuring secure test workflows, bookmarks, result analytics, and tab-switch monitoring built during my internship.",
    highlights: [
      "Secure exam workflows",
      "Result analytics dashboard",
      "Bookmark & review system",
    ],
    stack: [
      "React Native",
      "Expo Router",
      "FastAPI",
      "MySQL",
      "REST APIs",
      "Analytics",
    ],
    private: true,
  },

  {
    name: "Sonara",
    tag: "Mobile · Streaming",
    blurb:
      "Music streaming platform with a custom Express backend, intelligent search, offline caching, lyrics synchronization, and optimized audio playback.",
    highlights: [
      "Custom audio streaming backend",
      "Offline caching",
      "Lyrics synchronization",
    ],
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express.js",
      "yt-dlp",
    ],
    github: "https://github.com/Mythripaluri/sonara",
    demo: "https://github.com/Mythripaluri/sonara/releases/tag/v1.0.0",
  },

  {
    name: "RAG Chatbot",
    tag: "AI · Retrieval",
    blurb:
      "Document intelligence system supporting PDF ingestion, semantic search, summarization, and context-aware question answering with local LLMs.",
    highlights: [
      "Multi-document support",
      "Streaming responses",
      "Source citations",
    ],
    stack: [
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Ollama",
      "Embeddings",
      "Sentence Transformers",
    ],
    github: "https://github.com/Mythripaluri/rag-chatbot",
  },

  {
    name: "FitLens",
    tag: "Computer Vision",
    blurb:
      "AI-powered fitness assistant that analyzes exercise form in real time using pose estimation and provides interactive voice feedback.",
    highlights: [
      "Real-time pose estimation",
      "Voice-guided feedback",
      "Exercise form analysis",
    ],
    stack: [
      "MediaPipe",
      "OpenCV",
      "Flask",
      "NumPy",
      "Computer Vision",
    ],
    github: "https://github.com/Mythripaluri/Fitness",
  },

  {
    name: "Marine Species Classification",
    tag: "Research · Deep Learning",
    blurb:
      "Achieved a Macro F1 score of 0.922 while evaluating CNN and Transformer architectures for endangered marine species classification.",
    highlights: [
      "Macro F1 Score: 0.922",
      "Dataset unification",
      "Transformer model evaluation",
    ],
    stack: [
      "Swin Transformer",
      "ConvNeXt",
      "ViT",
      "Computer Vision",
      "Research",
    ],
    kaggle: [
      "https://www.kaggle.com/code/mythriprasanna/endangered-marine-species-classification-1",
      "https://www.kaggle.com/code/mythriprasanna/endangered-marine-species-classification-2",
    ],
  },
];

const TIMELINE = [
  {
    period: "2026",
    role: "Software Developer Intern",
    org: "nDMatrix",
    points: [
      "Developed features for the Online Question Bank (OQB) platform using React Native, Expo Router, FastAPI, and MySQL.",
      "Integrated REST APIs for tests, attempts, bookmarks, analytics, and exam workflows.",
      "Built responsive examination interfaces and improved frontend-backend integration.",
      "Collaborated using Git-based workflows to deliver production-ready features."
    ]
  },
];

/* ---------- page ---------- */

function Portfolio() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Stack />
      <Experience />
      <ProjectHighlights />
      {/* <Architecture />
      <AIShowcase /> */}
      <Skills />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- sections ---------- */

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {NAV.map(([l, h]) => (
            <a key={l} href={h}
               className="px-3 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-surface transition">
              <span className="text-primary">·</span> {l}
            </a>
          ))}
        </nav>
        <a href="#contact"
           className="font-mono text-xs px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
          Let&apos;s Talk →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="chip mb-6 float-in">
          <span className="size-1.5 rounded-full bg-primary" />
          available for Full Stack, AI, ML roles
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight float-in">
          Building <span className="glow-text text-primary">scalable</span>
          <br />web, mobile &amp;
          <br />AI-powered apps.
        </h1>

        <p className="mt-8 max-w-xl text-lg text-muted-foreground float-in">
          I&apos;m <span className="text-foreground font-medium">Mythri Prasanna Paluri</span> — a Full Stack &amp; Mobile Developer focused on creating performant, user-centric web, mobile, and AI solutions.
        </p>

<div className="mt-10 flex flex-wrap gap-3 float-in">
  <a
    href="/projects"
    className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
  >
    View Projects
    <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
  </a>

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:bg-surface transition font-medium"
  >
    <Download className="size-4" />
    Resume
  </a>
</div>

        {/* Terminal */}
        <div className="mt-16 max-w-2xl float-in">
          <div className="rounded-lg border border-border bg-surface overflow-hidden"
               style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-surface-2">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-amber" />
              <span className="size-2.5 rounded-full bg-primary" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">~/mythri — zsh</span>
            </div>
            <pre className="p-5 font-mono text-sm leading-relaxed max-h-64 overflow-auto">
              <span className="text-muted-foreground">$</span> whoami
              <span className="text-primary">mythri prasanna</span>
              <span className="text-muted-foreground">$</span> cat role.txt
              full stack · mobile · ai engineer
              <span className="text-muted-foreground">$</span> ls stacks/
              react/  react-native/  fastapi/  node/  langchain/
              <span className="text-muted-foreground">$</span> _<span className="cursor-blink text-primary">▍</span>
            </pre>

            {/* <pre className="p-5 font-mono text-sm leading-relaxed max-h-80 overflow-y-auto">
            {`$ whoami
            mythri prasanna

            $ cat role.txt
            full stack · mobile · ai engineer

            $ ls stacks/
            react/
            react-native/
            typescript/
            fastapi/
            nodejs/
            mysql/
            langchain/
            chromadb/
            opencv/

            $ pwd
            /home/mythri/projects

            $ echo "building cool things..."
            building cool things...
            `}
            </pre> */}

          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
const items = ["Full Stack", "Mobile Apps", "AI Applications", "Computer Vision", "React", "React Native", "TypeScript", "Python", "FastAPI", "Node.js", "Expo", "MySQL", "LangChain", "Ollama", "RAG", "Vector Databases", "Semantic Search", "MediaPipe", "OpenCV", "REST APIs", "Git", "System Design", "Problem Solving", "Performance Optimization", "Responsive UI", "API Integration"];
  return (
    <div className="border-y border-border bg-surface/40 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap py-4">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-mono text-sm text-muted-foreground px-6 flex items-center gap-6">
            {t} <span className="text-primary">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-12">
      <div className="font-mono text-xs text-primary mb-3">// {kicker}</div>
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground max-w-2xl">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader kicker="about" title="Three strengths. One developer." />
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: Smartphone, t: "Mobile Development",
            d: "Cross-platform mobile apps built with performance, usability, and scalability in mind." },
          { icon: Server, t: "Full-Stack Engineering",
            d: "End-to-end application development covering frontend, backend, databases, and system architecture." },
          { icon: Brain, t: "AI Applications",
            d: "Practical AI solutions powered by RAG pipelines, semantic retrieval, and modern language models." },
        ].map(({ icon: Icon, t, d }) => (
          <div key={t} className="group p-6 rounded-lg border border-border bg-surface hover:bg-surface-2 transition">
            <Icon className="size-6 text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold mb-2">{t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader kicker="tech-stack" title="The stack I ship with."
        sub="A focused toolkit across product, infrastructure and intelligence." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {STACK.map(({ label, icon: Icon, items }) => (
          <div key={label}
               className="p-6 rounded-lg border border-border bg-surface hover:border-primary/40 transition">
            <div className="flex items-center gap-2 mb-4">
              <Icon className="size-5 text-primary" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {items.map(i => (
                <span key={i} className="chip" style={{ background: "var(--surface-2)" }}>{i}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader kicker="experience" title="Where I&apos;ve been building." />
      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-border" />
        {TIMELINE.map((t, i) => (
          <div key={i} className="relative mb-12 last:mb-0">
            <div className="absolute -left-7 md:-left-10 top-1.5 size-3 rounded-full bg-primary"
                 style={{ boxShadow: "0 0 0 4px var(--background), 0 0 20px var(--lime)" }} />
            <div className="font-mono text-xs text-primary mb-1">{t.period}</div>
            <h3 className="font-display text-2xl font-semibold">{t.role}</h3>
            <div className="text-muted-foreground mb-3">{t.org}</div>
            <ul className="space-y-1.5 text-sm">
              {t.points.map((p, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectHighlights() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex items-end justify-between gap-6 mb-12">
        <div>
          <div className="font-mono text-xs text-primary mb-3">
            // featured-work
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Selected projects.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Hand-picked work that shows the breadth across mobile, full stack,
            computer vision, and AI.
          </p>
        </div>

        <a
          href="/projects"
          className="hidden sm:inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline whitespace-nowrap"
        >
          View All Projects
          <ArrowUpRight className="size-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {CASE_STUDIES.map((p) => (
          <a
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group relative block p-6 md:p-8 rounded-xl border border-border bg-surface hover:bg-surface-2 transition overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 20% 0%, color-mix(in oklab, var(--lime) 12%, transparent), transparent 60%)",
              }}
            />

            <div className="relative">
              <div className="flex items-start justify-between mb-4 gap-4">
                <div>
                  <div className="font-mono text-xs text-primary mb-1">
                    {p.tag}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold">
                    {p.name}
                  </h3>
                </div>

                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
              </div>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {p.blurb}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.stack.slice(0, 5).map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <a
        href="/projects"
        className="sm:hidden mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:bg-surface-2 transition font-medium"
      >
        View All Projects
        <ArrowUpRight className="size-4" />
      </a>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
<div className="flex items-end justify-between mb-12">
  <div>
    <div className="font-mono text-xs text-primary mb-3">
      // featured-work
    </div>

    <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
      Selected projects.
    </h2>

    <p className="mt-4 text-muted-foreground max-w-2xl">
      Hand-picked work that shows the breadth — mobile, full stack, CV and AI.
    </p>
  </div>

  <a
    href="/projects"
    className="font-mono text-sm text-primary hover:underline whitespace-nowrap mb-2"
  >
    View All Projects →
  </a>
</div>

      <div className="grid md:grid-cols-2 gap-4">
        {CASE_STUDIES.map((p) => (
          <a
            key={p.name}
            href={`/projects/${p.slug}`}
            className="group relative block p-6 md:p-8 rounded-xl border border-border bg-surface hover:bg-surface-2 transition overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 20% 0%, color-mix(in oklab, var(--lime) 12%, transparent), transparent 60%)",
              }}
            />

            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="font-mono text-xs text-primary mb-1">
                    {p.tag}
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display text-2xl md:text-3xl font-bold">
                      {p.name}
                    </h3>

                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-mono text-xs text-primary hover:underline"
                      >
                        {p.name === "Sonara" ? "APK ↗" : "Live ↗"}
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {p.private && (
                    <span className="font-mono text-xs text-muted-foreground">
                      Internal
                    </span>
                  )}

                  {p.github && (
                    <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                  )}

                  {p.kaggle && (
                    <>
                      <a
                        href={p.kaggle[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-mono text-xs text-muted-foreground hover:text-primary"
                      >
                        P1↗
                      </a>

                      <a
                        href={p.kaggle[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-mono text-xs text-muted-foreground hover:text-primary"
                      >
                        P2↗
                      </a>
                    </>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {p.blurb}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// function Architecture() {
//   return (
//     <section className="mx-auto max-w-6xl px-6 py-24">
//       <SectionHeader kicker="system-design" title="How I think about systems."
//         sub="A typical product architecture I work across — from client to data." />
//       <div className="p-6 md:p-10 rounded-xl border border-border bg-surface">
//         <div className="grid md:grid-cols-4 gap-4 font-mono text-xs">
//           {[
//             { t: "Client",   l: ["React Native", "Next.js", "Expo Router"] },
//             { t: "API",      l: ["FastAPI", "Node + Express", "REST / JWT"] },
//             { t: "Data",     l: ["MySQL", "ChromaDB", "Caching layer"] },
//             { t: "Services", l: ["LLMs (Ollama)", "Storage", "Analytics"] },
//           ].map((c, i) => (
//             <div key={c.t} className="relative">
//               <div className="p-4 rounded-lg border border-border bg-surface-2 h-full">
//                 <div className="text-primary mb-3">0{i + 1} · {c.t}</div>
//                 <ul className="space-y-1 text-muted-foreground">
//                   {c.l.map(x => <li key={x}>▸ {x}</li>)}
//                 </ul>
//               </div>
//               {i < 3 && (
//                 <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 text-primary text-lg">→</div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function AIShowcase() {
//   const steps = ["PDF", "Chunking", "Embedding", "Vector DB", "Retriever", "LLM", "Answer"];
//   return (
//     <section className="mx-auto max-w-6xl px-6 py-24">
//       <SectionHeader
//         kicker="ai-pipeline"
//         title="A RAG pipeline, end to end."
//         sub="One of the patterns I build with — retrieval-augmented generation over private docs." />
//       <div className="p-8 md:p-12 rounded-xl border border-border bg-surface">
//         <div className="flex items-center gap-3 mb-6 text-sm">
//           <Sparkles className="size-4 text-primary" />
//           <span className="font-mono text-xs text-muted-foreground">LangChain · ChromaDB · Ollama</span>
//         </div>
//         <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
//           {steps.map((s, i) => (
//             <div key={s} className="flex items-center gap-2">
//               <span className="px-3 py-2 rounded-md border border-border bg-surface-2">{s}</span>
//               {i < steps.length - 1 && <span className="text-primary">→</span>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader kicker="strengths" title="Where I&apos;m strongest." />
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
        {SKILLS.map(([name, val]) => (
          <div key={name}>
            <div className="font-mono text-xs mb-2">
              <span>{name}</span>
            </div>
            <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
              <div className="h-full rounded-full bg-primary"
                   style={{ width: `${val}%`, boxShadow: "0 0 12px var(--lime)" }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const cards = [
    {
      k: "GitHub",
      v: "30+ repos",
      sub: "active contributor",
      icon: Github,
      href: "https://github.com/Mythripaluri",
    },
    {
      k: "LeetCode",
      v: "650+ problems",
      sub: "problems solved · highest rating 1861",
      icon: Terminal,
      href: "https://leetcode.com/u/Mythri7/",
    },
    {
      k: "CodeChef",
      v: "3★",
      sub: "highest rating 1624 · 349 solved",
      icon: Trophy,
      href: "https://www.codechef.com/users/mythrip737",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <SectionHeader kicker="stats" title="" />
      <div className="grid md:grid-cols-3 gap-4">
        {cards.map(({ k, v, sub, icon: Icon, href }) => (
          <a
            key={k}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg border border-border bg-surface hover:bg-surface-2 transition flex items-center gap-4"
          >
            <Icon className="size-6 text-primary" />

            <div>
              <div className="font-mono text-xs text-muted-foreground">
                {k}
              </div>

              <div className="font-display text-xl font-semibold">
                {v}
              </div>

              <div className="text-xs text-muted-foreground">
                {sub}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-2xl border border-border bg-surface p-10 md:p-16 text-center relative overflow-hidden"
           style={{ boxShadow: "var(--shadow-glow)" }}>
        <div className="font-mono text-xs text-primary mb-4">// let&apos;s build</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
          Got an idea? <br />
          <span className="text-primary glow-text">Let&apos;s make it real.</span>
        </h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Open to SDE-1, Full Stack, Mobile, and AI Engineering opportunities. Or a coffee chat about RAG, mobile UX or system design.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="mailto:mythrip737@gmail.com"
             className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
            <Mail className="size-4" /> Email
          </a>
          <a href="https://www.linkedin.com/in/mythri7/" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:bg-surface-2 transition">
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <a href="https://github.com/Mythripaluri" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:bg-surface-2 transition">
            <Github className="size-4" /> GitHub
          </a>
          <a id="resume" href="/resume.pdf" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:bg-surface-2 transition">
            <FileText className="size-4" /> Résumé
          </a>
          {/* <br />
          <a href="https://leetcode.com/u/Mythri7/" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:bg-surface-2 transition">
            <Code2 className="size-4" /> LeetCode
          </a>
          <a href="https://www.codechef.com/users/mythrip737" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border hover:bg-surface-2 transition">
            <Trophy className="size-4" /> CodeChef
          </a> */}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <div>
          © {new Date().getFullYear()} Mythri Prasanna
        </div>

        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          available for SDE-1 opportunities
        </div>
      </div>
    </footer>
  );
}
