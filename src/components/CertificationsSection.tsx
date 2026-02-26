import AnimatedSection from "./AnimatedSection";

const certs = [
  {
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    issuer: "Oracle University, 2025",
    desc: "AI/ML fundamentals, Generative AI, LLMs, and Deep Learning with Oracle Cloud.",
  },
  {
    title: "Google Cloud Skill Badges",
    issuer: "Google Cloud Skills Boost, 2024",
    desc: "14+ hands-on badges covering GenAI, Pub/Sub, Compute Engine, and API-based cloud services.",
  },
  {
    title: "IBM SkillsBuild – Data Analytics Internship",
    issuer: "IBM, June–July 2023",
    desc: "Data visualization, exploratory data analysis, and Python-based insights generation.",
  },
];

const CertificationsSection = () => (
  <AnimatedSection className="section-spacing">
    <div className="container mx-auto px-6">
      <div id="certifications" className="scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          🏆 <span className="gradient-text">Certifications</span>
        </h2>
        <div className="h-1 w-12 rounded-full bg-primary mb-10" />

        <div className="grid md:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <AnimatedSection key={cert.title} delay={i * 0.1} className="glass rounded-2xl p-6 card-hover">
              <h3 className="font-semibold text-foreground text-sm mb-1">{cert.title}</h3>
              <p className="text-xs text-primary mb-3">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{cert.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default CertificationsSection;
