import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Coffee } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable code" },
    { icon: Palette, title: "UI/UX Focus", desc: "Creating beautiful interfaces" },
    { icon: Rocket, title: "Performance", desc: "Optimized for speed" },
    { icon: Coffee, title: "Dedicated", desc: "Passionate about my craft" },
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
              I'm a dedicated Full Stack Developer with a passion for creating exceptional web experiences. 
              With over 3 years of experience in the industry, I've had the privilege of working on diverse 
              projects ranging from e-commerce platforms to complex web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My expertise spans across the MERN stack (MongoDB, Express.js, React, Node.js), and I'm 
              particularly skilled in building Shopify stores that drive conversions. I believe in writing 
              clean, efficient code that not only works but is also maintainable and scalable.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge with the developer community.
            </p>

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
