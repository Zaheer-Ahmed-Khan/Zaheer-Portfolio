import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured Shopify store with custom theme development, payment integration, and inventory management.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool built with the MERN stack featuring real-time updates and team collaboration.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Portfolio Dashboard",
    description: "A modern analytics dashboard for tracking portfolio performance with interactive charts and data visualization.",
    tech: ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Blog Platform",
    description: "A headless CMS-powered blog with SEO optimization and markdown support.",
    tech: ["React", "GraphQL", "Contentful"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts and beautiful UI.",
    tech: ["React", "OpenWeather API", "Geolocation"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Chat Application",
    description: "Real-time messaging app with WebSocket integration and file sharing.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    live: "#",
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
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <Folder className="w-20 h-20 text-primary/50" />
                </div>
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
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
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
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
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
