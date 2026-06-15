import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "ProLon Life",
    description: "Custom Shopify sections, refined PDP, sticky add-to-cart, and conversion-driven storefront work for a leading fasting-mimicking diet brand.",
    tech: ["Shopify", "Liquid", "JavaScript", "Tailwind"],
    github: null,
    live: "https://prolonlife.com/",
    image: "/prolon.png",
    featured: true,
  },
  {
    title: "L-Nutra Health",
    description: "Dynamic Shopify storefront and responsive UI for a clinical longevity nutrition platform built to engage customers and drive repeat purchases.",
    tech: ["Shopify", "Liquid", "JavaScript", "Tailwind"],
    github: null,
    live: "https://l-nutrahealth.com/",
    image: "/lnutra.png",
    featured: true,
  },
  {
    title: "MoxieLash",
    description: "Liquid-powered custom sections, performance tuning, and pixel-perfect responsive UI for a premium magnetic lash brand.",
    tech: ["Shopify", "Liquid", "Bootstrap", "Performance"],
    github: null,
    live: "http://moxielash.com/",
    image: "/moxielash.png",
    featured: true,
  },
  {
    title: "StayVista",
    description: "End-to-end stay booking platform with auth, listings, bookings, and payments built using React, Node.js, Express and MongoDB.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Zaheer-Ahmed-Khan",
    live: "#",
    image: "/placeholder.svg",
    featured: false,
  },
  {
    title: "Moody Foody Recipes",
    description: "Mood-based recipe explorer with a clean React UI, search and category filters powered by a public food API.",
    tech: ["React", "JavaScript", "CSS", "API"],
    github: "https://github.com/Zaheer-Ahmed-Khan",
    live: "#",
    image: "/placeholder.svg",
    featured: false,
  },
  {
    title: "Socio",
    description: "Social media app UI featuring feeds, profiles, and interactions built with a modern React stack and polished frontend design.",
    tech: ["React", "JS", "Tailwind"],
    github: "https://github.com/Zaheer-Ahmed-Khan",
    live: "#",
    image: "/placeholder.svg",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono mb-2">My Recent Work</p>
          <h2 className="section-heading">Featured Projects</h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`glass-card aspect-video rounded-xl overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className={index % 2 === 1 ? "lg:order-1 lg:text-right" : ""}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <div className="glass-card p-6 mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm font-mono text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.1 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-8"
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-6 group"
            >
              <div className="flex justify-between items-start mb-6">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
