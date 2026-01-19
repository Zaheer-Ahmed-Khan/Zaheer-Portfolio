import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactInfo = [
    { icon: Mail, text: "zaheerkhan4726@gmail.com", href: "mailto:zaheerkhan4726@gmail.com" },
    { icon: Phone, text: "0331-4726-925", href: "tel:+923314726925" },
    { icon: MapPin, text: "Pakistan", href: "#" },
  ];

  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/zaheerahmedkhan4726925/", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono mb-2">Get In Touch</p>
          <h2 className="section-heading">Contact Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Let's work together</h3>
            <p className="text-muted-foreground mb-8">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.text}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass-card group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {info.text}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground transition-all resize-none"
                  placeholder="Hello, I'd like to discuss..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 glow-button"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
