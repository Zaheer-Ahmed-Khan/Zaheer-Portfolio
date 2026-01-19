import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Coffee, GraduationCap, Award } from "lucide-react";

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
              A motivated and detail-oriented Shopify Developer and MERN Stack Developer with hands-on 
              industry experience in Shopify theme development and modern web technologies. I specialize 
              in React, JavaScript, Node.js, and Shopify Liquid to build high-quality, scalable, and 
              performance-driven web solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Passionate about delivering clean code, excellent user experiences, and continuous learning 
              while adding measurable value to forward-thinking organizations. My expertise spans across 
              the MERN stack and I'm particularly skilled in building Shopify stores that drive conversions.
            </p>

            {/* Education & Certification */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4"
              >
                <GraduationCap className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-foreground text-sm">BS Information Technology</h4>
                <p className="text-xs text-muted-foreground">University of Sargodha | 2019 - 2024</p>
                <p className="text-xs text-primary font-mono mt-1">3.29/4 GPA</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-4"
              >
                <Award className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-foreground text-sm">Responsive Web Design</h4>
                <p className="text-xs text-muted-foreground">freeCodeCamp</p>
                <p className="text-xs text-primary font-mono mt-1">Certified</p>
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
