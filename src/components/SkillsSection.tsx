import { motion } from "framer-motion";

const skills = [
  { name: "Shopify Theme Development", level: 95, category: "E-commerce" },
  { name: "React.js + Redux", level: 90, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 95, category: "Language" },
  { name: "TypeScript", level: 88, category: "Language" },
  { name: "Node.js", level: 88, category: "Backend" },
  { name: "Express.js", level: 85, category: "Backend" },
  { name: "MongoDB", level: 85, category: "Database" },
  { name: "MySQL", level: 80, category: "Database" },
  { name: "Tailwind CSS", level: 92, category: "Styling" },
  { name: "Bootstrap", level: 90, category: "Styling" },
  { name: "jQuery", level: 85, category: "Frontend" },
  { name: "Liquid", level: 92, category: "E-commerce" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono mb-2">What I Know</p>
          <h2 className="section-heading">Technical Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-5 group"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-sm text-muted-foreground font-mono">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                />
              </div>
              <span className="text-xs text-muted-foreground mt-2 block">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
