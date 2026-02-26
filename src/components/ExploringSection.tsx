import AnimatedSection from "./AnimatedSection";
import { Brain, Bot, Server, Activity, MessageSquare } from "lucide-react";

const items = [
  { icon: Brain, label: "Advanced RAG Architectures" },
  { icon: Bot, label: "Multi-agent LLM Workflows" },
  { icon: Server, label: "Scalable AI System Design" },
  { icon: Activity, label: "Efficient ML Deployment & Monitoring" },
  { icon: MessageSquare, label: "Applied NLP in Production" },
];

const ExploringSection = () => (
  <AnimatedSection className="section-spacing">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        🔬 Currently <span className="gradient-text">Exploring</span>
      </h2>
      <div className="h-1 w-12 rounded-full bg-primary mb-10" />

      <div className="flex flex-wrap gap-4">
        {items.map((item, i) => (
          <AnimatedSection key={item.label} delay={i * 0.08}>
            <div className="glass rounded-xl px-5 py-4 card-hover flex items-center gap-3">
              <item.icon size={20} className="text-primary shrink-0" />
              <span className="text-sm text-foreground font-medium">{item.label}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ExploringSection;
