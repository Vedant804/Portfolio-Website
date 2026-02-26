import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import { Send, Mail, Github, Linkedin } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) return;

    setStatus("loading");
    try {
      // send using EmailJS
      const result = await emailjs.send(
        'service_fzmwtxf',
        'template_2dud92p',
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        '8RhiYCOFKIu153wm0'
      );

      // EmailJS returns a status code in result.status (200 is success)
      if (result.status === 200) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus("error");
    }
  };

  return (
    <AnimatedSection className="section-spacing">
      <div className="container mx-auto px-6">
        <div id="contact" className="scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-12 rounded-full bg-primary mb-10" />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {/* Form */}
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_-5px_hsl(var(--glow-primary)/0.2)] transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_-5px_hsl(var(--glow-primary)/0.2)] transition-all duration-300"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1.5">Subject</label>
                <input
                  type="text"
                  required
                  maxLength={150}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_-5px_hsl(var(--glow-primary)/0.2)] transition-all duration-300"
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground block mb-1.5">Message</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:shadow-[0_0_15px_-5px_hsl(var(--glow-primary)/0.2)] transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--glow-primary)/0.6)] hover:scale-[1.05] active:scale-[0.98] disabled:opacity-50"
              >
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-sm text-emerald-400">Message sent successfully! ✓</p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">Failed to send. Please try again.</p>
              )}
            </form>

            {/* Links */}
            <div className="flex flex-col gap-4 justify-center">
              <a
                href="mailto:joshivedant1503@gmail.com"
                className="glass rounded-xl p-5 card-hover flex items-center gap-4"
              >
                <Mail size={20} className="text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-xs text-muted-foreground">joshivedant1503@gmail.com</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/vedantjoshi45"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 card-hover flex items-center gap-4"
              >
                <Linkedin size={20} className="text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">LinkedIn</p>
                  <p className="text-xs text-muted-foreground">vedantjoshi45</p>
                </div>
              </a>
              <a
                href="https://github.com/Vedant804"
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 card-hover flex items-center gap-4"
              >
                <Github size={20} className="text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">GitHub</p>
                  <p className="text-xs text-muted-foreground">Vedant804</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
