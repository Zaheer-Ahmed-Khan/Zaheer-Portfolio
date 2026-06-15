import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Coffee, GraduationCap, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Code2, title: "Shopify Liquid", desc: "Custom storefronts built for conversion" },
    { icon: Palette, title: "UI/UX Focused", desc: "Pixel-perfect, merchandiser-friendly design" },
    { icon: Rocket, title: "Performance First", desc: "Lighthouse-grade speed and Core Web Vitals" },
    { icon: Coffee, title: "Deployment Ready", desc: "Production-ready handoff and clean architecture" },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono mb-2">Get To Know</p>
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 text-center group cursor-pointer"
              >
                <item.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm Zaheer Ahmed Khan, a Chakwal-based Shopify & Full-Stack developer. I help DTC brands turn ideas into pixel-perfect storefronts that load fast, convert better, and feel premium on every device.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From custom Liquid sections to MERN dashboards, I've shipped production work for brands like ProLon Life, L-Nutra Health and MoxieLash — obsessing over performance, accessibility and the small details that move metrics.
            </p>

            {/* Education & Certification */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4"
              >
                <GraduationCap className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-foreground text-sm">BS Information Technology</h4>
                <p className="text-xs text-muted-foreground">University of Sargodha · 2019 - 2024</p>
                <p className="text-xs text-primary font-mono mt-1">GPA 3.29 / 4.0</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4"
              >
                <Award className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-foreground text-sm">Shopify & MERN</h4>
                <p className="text-xs text-muted-foreground">Custom storefronts, reusable components, and optimized handoff.</p>
                <p className="text-xs text-primary font-mono mt-1">Conversion-focused delivery</p>
              </motion.div>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold glow-button"
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
