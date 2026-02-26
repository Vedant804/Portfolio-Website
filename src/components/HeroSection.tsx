import { motion } from "framer-motion";
import { Download, ExternalLink, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-[120px]"
          style={{ background: "hsl(var(--glow-primary))" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-[100px]"
          style={{ background: "hsl(var(--glow-accent))" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-mono tracking-widest text-muted-foreground uppercase mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="glow-text">Vedant</span>{" "}
            <span className="gradient-text">Joshi</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6">
            AI/ML Engineer · Backend Developer · Python Developer
          </p>

          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-10 text-sm md:text-base">
            Building intelligent, scalable, and data-driven systems using Machine Learning,
            Generative AI, and modern backend technologies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--glow-primary)/0.6)] hover:scale-[1.05] active:scale-[0.98]"
            >
              View Projects
              <ExternalLink size={16} />
            </a>

            <a
              href="/Vedant_Joshi_Resume.pdf"
              download="Vedant_Joshi_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_hsl(var(--glow-primary)/0.4)] hover:scale-[1.05] active:scale-[0.98]"
            >
              <Download size={16} />
              Download Resume
            </a>

            <a
              href="https://github.com/Vedant804"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-border text-muted-foreground text-sm transition-all duration-300 hover:text-foreground hover:border-primary/50 hover:shadow-[0_0_20px_-5px_hsl(var(--glow-primary)/0.3)] hover:scale-[1.1] active:scale-[0.95]"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com/in/vedantjoshi45"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-border text-muted-foreground text-sm transition-all duration-300 hover:text-foreground hover:border-primary/50 hover:shadow-[0_0_20px_-5px_hsl(var(--glow-primary)/0.3)] hover:scale-[1.1] active:scale-[0.95]"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <p className="text-xs text-muted-foreground mt-4 opacity-60">
            Resume last updated: February 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
