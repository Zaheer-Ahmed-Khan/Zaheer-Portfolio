import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Shopify Theme Developer",
    company: "Conversions King",
    period: "Aug 2025 - Jan 2026",
    description: "Developed, customized, and optimized Shopify themes using Liquid, JavaScript, HTML, and CSS. Built custom sections and dynamic storefront components to meet client requirements. Improved UI/UX and responsiveness using Tailwind CSS and Bootstrap.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Tailwind CSS"],
    type: "Contract",
  },
  {
    title: "MERN Stack Developer",
    company: "Infinity Creatives",
    period: "May 2025 - July 2025",
    description: "Developed full-stack web applications using the MERN stack. Built reusable and scalable React components. Implemented responsive UI and interactive features using modern JavaScript. Collaborated with senior developers and followed clean code and version control practices.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    type: "Internship",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono mb-2">Where I've Worked</p>
          <h2 className="section-heading">Experience</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6"
                  >
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-primary font-mono text-sm">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
