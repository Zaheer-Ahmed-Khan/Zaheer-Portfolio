import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";
import profileImage from "@/assets/profile-image.jpg";

const HeroSection = () => {
  const roles = ["Web Developer", "Shopify Developer", "MERN Stack Developer"];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-lg mb-4"
          >
            👋 Hello World, I'm
          </motion.p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Hey! I'm{" "}
            <span className="block mt-2">
              <TypewriterEffect words={["Zaheer Ahmed Khan"]} typingSpeed={80} deletingSpeed={0} pauseDuration={99999999} />
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 h-12">
            <TypewriterEffect words={roles} typingSpeed={100} deletingSpeed={60} pauseDuration={2000} />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            Passionate about crafting exceptional digital experiences. I specialize in building 
            modern, scalable web applications using cutting-edge technologies. From stunning 
            e-commerce stores to full-stack MERN applications, I bring ideas to life with clean 
            code and pixel-perfect designs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold glow-button"
            >
              Hire Me
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-8 mt-12"
          >
            {[
              { number: "3+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold gradient-text">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-dashed border-primary/30"
            />
            
            {/* Glowing backdrop */}
            <div className="absolute inset-4 w-64 h-64 md:w-80 md:h-80 bg-primary/20 rounded-full blur-2xl" />
            
            {/* Profile image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/50"
            >
              <img
                src={profileImage}
                alt="Zaheer Ahmed Khan"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -right-4 top-1/4 glass-card px-4 py-2 rounded-lg"
            >
              <span className="text-sm font-mono text-primary">React.js</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -left-4 bottom-1/4 glass-card px-4 py-2 rounded-lg"
            >
              <span className="text-sm font-mono text-primary">Node.js</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
