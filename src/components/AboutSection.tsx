import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <AnimatedSection className="section-spacing">
    <div className="container mx-auto px-6">
      <div id="about" className="scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="h-1 w-12 rounded-full bg-primary mb-8" />

        <div className="glass rounded-2xl p-8 md:p-10 card-hover max-w-3xl">
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
            I am a Computer Science (AI & ML) graduate from the University of Mumbai with hands-on
            experience in building AI-powered web applications and scalable backend systems. My work
            focuses on LLM integration, machine learning model deployment, and full-stack development
            using modern technologies. I am actively seeking opportunities in AI/ML, Backend
            Development, Python, and other technical roles where I can contribute to building
            intelligent and data-driven systems.
          </p>
        </div>

        {/* Education */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            🎓 Education
          </h3>
          <div className="glass rounded-2xl p-6 md:p-8 card-hover max-w-xl">
            <h4 className="font-semibold text-foreground">B.E. in Computer Science (AI & ML)</h4>
            <p className="text-sm text-muted-foreground mt-1">Lokmanya Tilak College of Engineering</p>
            <p className="text-sm text-muted-foreground">University of Mumbai</p>
            <div className="flex items-center gap-4 mt-3 text-xs">
              <span className="skill-chip">Graduation: 2025</span>
              <span className="skill-chip">CGPA: 7.33</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;
