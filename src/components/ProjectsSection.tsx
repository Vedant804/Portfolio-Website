import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";
import projectMockInterview from "@/assets/mock-interview.png";
import projectInvoice from "@/assets/invoice-generator.png";
import projectHeart from "@/assets/heart-disease.png";

interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "AI Mock Interview Web Application",
    description:
      "Built an AI-based interview platform that generates job-specific questions and records user responses via webcam and audio.",
    features: [
      "Gemini AI integration for contextual feedback",
      "Progress tracking & analytics",
      "Google Sign-In via Clerk",
    ],
    tech: ["Next.js", "PostgreSQL", "Gemini AI", "Clerk"],
    image: projectMockInterview,
    liveUrl: "https://ai-mock-interview-web-application-8-sand.vercel.app",
    githubUrl: "https://github.com/Vedant804",
    featured: true,
  },
  {
    title: "Invoice Generator Web Application",
    description:
      "Full-stack invoice generator for creating, previewing, and downloading professional invoices with customizable templates.",
    features: [
      "PDF export functionality",
      "Client data management",
      "Secure authentication with Clerk",
    ],
    tech: ["React.js", "Spring Boot", "MongoDB", "Clerk"],
    image: projectInvoice,
    liveUrl: "https://invoice-generator-6vpz.vercel.app",
    githubUrl: "https://github.com/Vedant804",
  },
  {
    title: "Heart Disease Prediction Website",
    description:
      "Python-based Django web app to predict heart disease risk using user-provided health parameters with personalized results.",
    features: [
      "Logistic Regression classification",
      "Server-side validation",
      "Responsive interface",
    ],
    tech: ["Python", "Django", "MySQL", "Scikit-learn"],
    image: projectHeart,
    githubUrl: "https://github.com/Vedant804",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <AnimatedSection delay={index * 0.15}>
    <div
      className={`glass rounded-2xl overflow-hidden card-hover ${
        project.featured ? "md:col-span-2 border border-primary/20" : ""
      }`}
    >
      {project.featured && (
        <div className="flex items-center gap-2 px-6 pt-5">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            ⭐ Featured Project
          </span>
          {project.liveUrl && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              🟢 Live
            </span>
          )}
        </div>
      )}

      <div className={`grid ${project.featured ? "md:grid-cols-2" : "md:grid-cols-2"} gap-0`}>
        {/* Image */}
        <div className="p-5">
          <div className="overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 md:h-56 object-cover rounded-xl transition-transform duration-500 hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 pt-0 md:pt-5 flex flex-col justify-center">
          <h3 className={`font-bold text-foreground mb-2 ${project.featured ? "text-xl" : "text-lg"}`}>
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>

          <ul className="space-y-1 mb-4">
            {project.features.map((f) => (
              <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5">▸</span> {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span key={t} className="skill-chip text-[11px]">{t}</span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium transition-all duration-300 hover:shadow-[0_0_25px_-5px_hsl(var(--glow-primary)/0.5)] hover:scale-[1.05] active:scale-[0.95]"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border text-foreground text-xs font-medium transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_hsl(var(--glow-primary)/0.3)] hover:scale-[1.05] active:scale-[0.95]"
              >
                <Github size={14} /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const ProjectsSection = () => (
  <div className="section-spacing">
    <div className="container mx-auto px-6">
      <div id="projects" className="scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="h-1 w-12 rounded-full bg-primary mb-10" />

        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsSection;
