import {
  Brain,
  Database,
  Eye,
  Library,
  Lock,
  Music,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  slug: string;
  name: string;
  year: string;
  status: string;

  tag: string;
  type: string;
  role: string;
  duration?: string;

  blurb: string;
  description: string;

  stack: string[];
  highlights: string[];
  impact?: string[];

  featured?: boolean;
  caseStudy?: boolean;
  private?: boolean;

  github?: string;
  demo?: string;
  kaggle?: string[];

  coverImage?: string;
  images?: string[];

  imageLabel: string;
  icon: LucideIcon;

  overview?: string[];
  techStack?: Record<string, string[]>;
  features?: string[];
  architecture?: string[];
  challenges?: string[];
  lessons?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "oqb",
    name: "OQB",
    year: "2026",
    status: "Completed",
    tag: "Full Stack / Mobile",
    type: "Internship Project",
    role: "Full Stack Developer",
    duration: "3 Months",
    blurb:
      "Online examination platform featuring secure test workflows, bookmarks, result analytics, and tab-switch monitoring built during my internship.",
    description:
      "A secure mobile-first examination workflow with analytics, review tools, and candidate monitoring.",
    highlights: ["Secure exam workflows", "Result analytics dashboard", "Bookmark and review system"],
    stack: ["React Native", "Expo Router", "FastAPI", "MySQL", "REST APIs"],
    private: true,
    caseStudy: true,
    imageLabel: "Exam dashboard",
    icon: Smartphone,
    images: [
      "/projects/oqb/dashboard.png",
      "/projects/oqb/exam-interface.png",
      "/projects/oqb/analytics.png"
    ],
    overview: [
      "OQB is a secure mobile-first examination platform engineered to handle reliable test delivery, instantaneous performance feedback, and robust candidate state tracking.",
      "Collaborated across frontend mobile surfaces and backend services to construct resilient state workflows, preventing data loss during unpredictable testing environments."
    ],
    techStack: {
      Mobile: ["React Native", "Expo Router"],
      Backend: ["FastAPI", "REST APIs", "JWT Authentication"],
      Data: ["MySQL", "Relational Architecture"],
    },
    features: [
      "Secure stateful test attempts",
      "Interactive bookmarking and quick-review navigation flow",
      "Real-time candidate result analytics and breakdown dashboards",
      "Proctoring telemetry and background tab-switch monitoring",
      "Highly responsive exam layouts tuned for focus"
    ],
    architecture: [
      "Candidate Client (Mobile)",
      "React Native Context Layer",
      "FastAPI Secure Gateway",
      "MySQL Relational Store",
      "Analytics & Monitoring Pipeline"
    ],
    challenges: [
      "High-stakes exam screens must maintain flawless user state and data integrity across network drops without confusing the student.",
      "Designed an API-driven offline/online synchronized attempt tracker using localized state layers to keep submission steps fully predictable.",
      "Constructed isolated review flows that eliminated ambiguous client-side states during complex multi-tier question layouts."
    ],
    impact: [
      "Successfully delivered a secure, responsive exam client that reduced multi-user synchronization dropouts.",
      "Mitigated cheating vectors by integrating automatic background proctoring and tab-monitoring logs.",
      "Accelerated candidate performance feedback through optimized relational analytics views."
    ],
    lessons: [
      "Production-level mobile design patterns for high-reliability workflows",
      "State preservation architecture under strict connectivity constraints",
      "Enterprise REST API integration within corporate security frameworks"
    ],
  },
  {
    slug: "sonara",
    name: "Sonara",
    year: "2025",
    status: "Completed",
    tag: "Mobile / Streaming",
    type: "Personal Project",
    role: "Sole Developer",
    duration: "2025",
    blurb:
      "Music streaming platform with a custom Express backend, intelligent search, offline caching, lyrics synchronization, and optimized audio playback.",
    description:
      "Music streaming app with intelligent search, offline caching, queue management, and synchronized lyrics.",
    highlights: ["Custom audio streaming backend", "Offline caching", "Lyrics synchronization"],
    stack: ["React Native", "Expo", "TypeScript", "Node.js", "Express.js", "yt-dlp"],
    featured: true,
    caseStudy: true,
    github: "https://github.com/Mythripaluri/sonara",
    demo: "https://github.com/Mythripaluri/sonara/releases/tag/v1.0.0",
    imageLabel: "Player screen",
    icon: Music,
    images: [
      "/projects/sonara/home.png",
      "/projects/sonara/search.png",
      "/projects/sonara/player.png",
      "/projects/sonara/playlist.png"
    ],
    overview: [
      "Sonara is a cross-platform music streaming application built with React Native and TypeScript that delivers fast and reliable audio playback without relying on paid music APIs.",
      "The platform dynamically resolves audio streams through a custom backend, while providing playlist management, offline caching, synchronized lyrics, and a polished mobile listening experience."
    ],
    techStack: {
      Frontend: ["React Native", "Expo", "TypeScript"],
      Backend: ["Node.js", "Express.js", "yt-dlp"],
      Storage: ["AsyncStorage"],
    },
    features: [
      "Intelligent multi-query search",
      "Audio streaming and playback",
      "Queue management",
      "Playlist creation and management",
      "Offline caching",
      "Lyrics synchronization",
      "Animated player interface"
    ],
    architecture: [
      "User Interface",
      "React Native Application",
      "Express Backend",
      "yt-dlp Resolver Service",
      "Audio Source"
    ],
    challenges: [
      "Audio stream URLs from external providers expire frequently, causing playback failures.",
      "Built a backend stream resolution layer using yt-dlp to generate fresh playable URLs on demand.",
      "Optimized playback reliability while maintaining low latency and a seamless listening experience."
    ],
    impact: [
      "Eliminated dependency on paid music APIs through dynamic stream resolution.",
      "Improved playback reliability with automatic URL regeneration.",
      "Implemented offline caching to reduce repeated network requests.",
      "Delivered a complete end-to-end mobile streaming experience."
    ],
    lessons: [
      "Mobile caching strategies for media-heavy applications",
      "Audio streaming architecture and playback pipelines",
      "Request debouncing and search optimization techniques",
      "Backend performance optimization for stream resolution workloads"
    ],
  },
  {
    slug: "rag-chatbot",
    name: "RAG Chatbot",
    year: "2025",
    status: "Completed",
    tag: "AI / Retrieval",
    type: "Open Source Project",
    role: "AI Engineer",
    duration: "2 Months",
    blurb:
      "Document intelligence system supporting PDF ingestion, semantic search, summarization, and context-aware question answering with local LLMs.",
    description:
      "A local document intelligence system for ingestion, semantic retrieval, summarization, and grounded answers.",
    highlights: ["Multi-document support", "Streaming responses", "Source citations"],
    stack: ["FastAPI", "LangChain", "ChromaDB", "Ollama", "Embeddings"],
    featured: true,
    caseStudy: true,
    github: "https://github.com/Mythripaluri/rag-chatbot",
    imageLabel: "Chat workspace",
    icon: Brain,
    images: [
      "/projects/rag/upload.png",
      "/projects/rag/workspace.png",
      "/projects/rag/citations.png"
    ],
    overview: [
      "RAG Chatbot is an enterprise-ready document intelligence platform that extracts actionable knowledge from complex unstructured PDFs locally.",
      "By keeping model weights and vectors entirely localized, the platform guarantees zero data leakage while offering fast, context-aware information retrieval."
    ],
    techStack: {
      API: ["FastAPI", "Uvicorn"],
      Orchestration: ["LangChain", "Ollama Execution Framework"],
      Embeddings: ["Sentence Transformers (Hugging Face)"],
      Storage: ["ChromaDB Vector Store"],
    },
    features: [
      "Hierarchical PDF parsing and validation",
      "Dense semantic vector search matching",
      "Context-grounded query answering engine",
      "Token-by-token server-sent response streaming",
      "Verifiable multi-document source citation mappings",
      "Isolated offline LLM inference workflows"
    ],
    architecture: [
      "Document Document Ingestion Pipeline",
      "Recursive Text Splitter Strategy",
      "Vector Embedding Engine",
      "ChromaDB Storage Matrix",
      "Context-Aware Document Retriever",
      "Local Ollama Model Runner",
      "Client Output Aggregator"
    ],
    challenges: [
      "Dense, multi-page technical documents produced irrelevant context extractions when using arbitrary fixed chunk sizes.",
      "Systematically re-engineered the parsing chunk strategy to balance semantic token overlap and document structure.",
      "Constructed strict prompting patterns and citation layers to eliminate model hallucination risks."
    ],
    impact: [
      "Established 100% data privacy workflows for sensitive document analysis by utilizing offline local orchestration.",
      "Optimized query retrieval accuracy by implementing tuned recursive chunk segmentation techniques.",
      "Enhanced system reliability and response trust via explicit document-source citation mappings."
    ],
    lessons: [
      "Architectural mechanics of advanced retrieval-augmented generation patterns",
      "Mathematical and structural trade-offs in vector token distribution",
      "Orchestration strategies and resource limits for local LLM runtimes"
    ],
  },
  {
    slug: "fitlens",
    name: "FitLens",
    year: "2025",
    status: "Completed",
    tag: "Computer Vision",
    type: "Personal Project",
    role: "Machine Learning Developer",
    duration: "4 Months",
    blurb:
      "AI-powered fitness assistant that analyzes exercise form in real time using pose estimation and provides interactive voice feedback.",
    description:
      "Real-time fitness form assistant using pose estimation, movement analysis, and voice-guided feedback.",
    highlights: ["Real-time pose estimation", "Voice-guided feedback", "Exercise form analysis"],
    stack: ["MediaPipe", "OpenCV", "Flask", "NumPy", "Computer Vision"],
    caseStudy: true,
    github: "https://github.com/Mythripaluri/Fitness",
    imageLabel: "Pose analysis",
    icon: Eye,
    images: [
      "/projects/fitlens/calibration.png",
      "/projects/fitlens/analysis.png",
      "/projects/fitlens/results.png"
    ],
    overview: [
      "FitLens is an AI fitness companion that acts as a real-time form coach, translating raw spatial tracking points into clear biomechanical feedback.",
      "The system handles sub-second coordinate tracking and instantaneous audio queues to help users execute compound lifts safely and correctly."
    ],
    techStack: {
      Vision: ["MediaPipe Pose Framework", "OpenCV Image Pipelines"],
      Backend: ["Flask Application Framework"],
      Mathematics: ["NumPy Coordinate Trigonometry"],
    },
    features: [
      "Low-latency landmark-based pose estimation",
      "Real-time rule-based exercise angular analysis",
      "Dynamic interactive text-to-speech voice coaching",
      "Continuous vector coordinate movement tracking",
      "Asynchronous feedback evaluation loop"
    ],
    architecture: [
      "Hardware Camera Capture API",
      "MediaPipe Landmark Extractor Engine",
      "Biomechanical Rule Matcher Core",
      "Audio Synthesis Voice Engine",
      "Interactive Client Session"
    ],
    challenges: [
      "Processing high-frequency computer vision streams while generating clear, non-delayed audio queues proved computationally bottlenecked.",
      "Isolated the visual processing step from the voice trigger logic to maximize throughput across hardware threads.",
      "Configured trigonometric tolerance matrices to account for user height and variable camera perspectives."
    ],
    impact: [
      "Achieved stable frame throughput for real-time human skeleton landmark extraction.",
      "Constructed an automated voice-guided feedback trigger with minimal feedback delays.",
      "Built an intuitive, device-agnostic athletic calibration interface without expensive sensor hardware requirements."
    ],
    lessons: [
      "Implementation details of coordinate-based human pose structures",
      "Performance and loop optimization profiles for real-time computer vision",
      "User-experience patterns for real-time voice-activated feedback systems"
    ],
  },
  {
    slug: "marine-species",
    name: "Marine Species Classification",
    year: "2026",
    status: "Manuscript Revision",
    tag: "Research / Deep Learning",
    type: "Academic Research Project",
    role: "Lead Deep Learning Researcher",
    duration: "6 Months",
    blurb:
      "Achieved a Macro F1 score of 0.922 while evaluating CNN and Transformer architectures for endangered marine species classification.",
    description:
      "Research-focused image classification work comparing CNN and Transformer models for endangered marine species.",
    highlights: ["Macro F1 Score: 0.922", "Dataset unification", "Transformer model evaluation"],
    stack: ["Swin Transformer", "ConvNeXt", "ViT", "Computer Vision", "Research"],
    caseStudy: true,
    kaggle: [
      "https://www.kaggle.com/code/mythriprasanna/endangered-marine-species-classification-1",
      "https://www.kaggle.com/code/mythriprasanna/endangered-marine-species-classification-2",
    ],
    imageLabel: "Model comparison",
    icon: Database,
    images: [
      "/projects/marine/tsne-plots.png",
      "/projects/marine/gradcam-maps.png",
      "/projects/marine/confusion-matrices.png"
    ],
    overview: [
      "This research initiative addresses the data scarcity and environmental distortions typical of underwater monitoring environments to identify endangered marine species.",
      "The work benchmarks advanced deep visual backbones—including transformer and convolutional paradigms—against unified datasets to validate their viability for real-world automated oceanic exploration."
    ],
    techStack: {
      Backbones: ["Swin-Tiny Transformer", "ViT-Tiny", "ConvNeXt Model Families"],
      Frameworks: ["PyTorch Lightning", "Hugging Face Hub"],
      Visualizations: ["Grad-CAM Interrogation Maps", "t-SNE Dimensionality Layouts"],
    },
    features: [
      "Multi-repository underwater dataset unification and alignment",
      "Comprehensive benchmark testing for visual backbones",
      "Few-shot capability mapping across highly data-constrained classes",
      "Interpretability analysis via visual attention spatial clustering",
      "Reproducible Kaggle notebook execution architectures"
    ],
    architecture: [
      "Unified Underwater Imagery Repositories",
      "Domain-Specific Augmentation Layers",
      "Deep Learning Training Matrix (Swin/ViT/ConvNeXt)",
      "Interpretability Layers (Grad-CAM/t-SNE)",
      "Macro F1 Cross-Validation Benchmarks"
    ],
    challenges: [
      "Highly imbalanced dataset pools and water-turbidity noise distorted early attention configurations during training iterations.",
      "Configured robust domain-specific transformations and evaluation parameters to force attention onto anatomical boundaries rather than environmental artifacts.",
      "Balanced performance metrics carefully to ensure zero-class overlap artifacts did not inject classification bias."
    ],
    impact: [
      "Attained a high Macro F1 performance benchmark of 0.922, verifying strong classification across extreme few-shot classes.",
      "Constructed a structured dataset unification methodology to merge disparate oceanic imaging collections.",
      "Supplied explainability profiles using Grad-CAM attention maps to confirm botanical and biological landmark classification integrity."
    ],
    lessons: [
      "Scientific validation and rigorous evaluation structures for machine learning systems",
      "Structural trade-offs between global self-attention networks and local convolutional operations",
      "Data handling and mitigation strategies for real-world environmental distortion challenges"
    ],
  },
  {
    slug: "password-vault",
    name: "Password Vault",
    year: "2024",
    status: "Archived",
    tag: "Full Stack",
    type: "Concept App",
    role: "Full Stack Developer",
    blurb:
      "Secure credential management concept with authentication, encrypted storage, and a clean dashboard flow.",
    description:
      "A full-stack credential manager concept focused on encrypted storage and simple vault interactions.",
    highlights: ["Authentication", "Encrypted records", "Dashboard UI"],
    stack: ["React", "Node.js", "Express", "Database"],
    imageLabel: "Vault dashboard",
    icon: Lock,
  },
  {
    slug: "readverse",
    name: "ReadVerse",
    year: "2024",
    status: "Completed",
    tag: "Frontend",
    type: "Personal Build",
    role: "Frontend Developer",
    blurb:
      "Reading-focused frontend experience with browsable content, saved items, and a clean responsive interface.",
    description:
      "A polished frontend reading experience for browsing, saving, and returning to content.",
    highlights: ["Responsive UI", "Saved reads", "Content browsing"],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    imageLabel: "Reading library",
    icon: Library,
    images: [
      "/projects/readverse/1.png",
    ],
  },
  {
    slug: "course-buddy",
    name: "Course Buddy",
    year: "2024",
    status: "Concept",
    tag: "AI / Productivity",
    type: "Hackathon Entry",
    role: "UI & UX Architect",
    blurb:
      "Learning companion concept for organizing course material, study tasks, and AI-assisted summaries.",
    description:
      "A student productivity assistant for organizing study material and turning course content into useful summaries.",
    highlights: ["Study planning", "Summaries", "Course organization"],
    stack: ["React", "AI", "TypeScript"],
    imageLabel: "Study board",
    icon: Brain,
    images: [
      "/projects/coursebuddy/1.png",
      // "/projects/coursebuddy/2.png",
      // "/projects/coursebuddy/3.png",
    ],
  },
];

export const CASE_STUDIES = PROJECTS.filter((project) => project.caseStudy);
export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);