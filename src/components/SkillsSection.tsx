import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    title: "Machine Learning & AI",
    skills: ["Supervised Learning", "Classification", "Regression", "Model Training & Evaluation", "EDA", "Pandas", "NumPy", "Accuracy/Precision/Recall/F1"],
  },
  {
    title: "Deep Learning",
    skills: ["ANN", "CNN", "TensorFlow", "PyTorch"],
  },
  {
    title: "NLP & Generative AI",
    skills: ["LLM Integration", "Gemini AI", "OpenAI", "RAG", "Prompt Engineering"],
  },
  {
    title: "MLOps & Deployment",
    skills: ["Docker", "GCP", "AWS (EC2, S3)", "MongoDB Atlas", "Oracle Cloud", "Cloud Functions", "App Engine"],
  },
  {
    title: "Backend & Development",
    skills: ["Python", "Java", "JavaScript", "SQL", "React.js", "Next.js", "Django", "Spring Boot", "PostgreSQL", "MongoDB", "MySQL", "Git"],
  },
];

const SkillsSection = () => (
  <AnimatedSection className="section-spacing">
    <div className="container mx-auto px-6">
      <div id="skills" className="scroll-mt-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Core <span className="gradient-text">Expertise</span>
        </h2>
        <div className="h-1 w-12 rounded-full bg-primary mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.title} delay={i * 0.1} className="glass rounded-2xl p-6 card-hover">
              <h3 className="font-semibold text-foreground mb-4 text-sm">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default SkillsSection;
