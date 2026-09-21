import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";
import profileImage from "@/assets/profile-image.png";

const HeroSection = () => {
  const roles = ["Shopify Frontend Developer", "Shopify Theme Developer", "E-Commerce Frontend Developer", "Conversion-Focused Builder", "Liquid Specialist", "MERN Stack Engineer"];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-3 sm:px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 items-center relative z-10">
        {/* Left Content */}
       
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 w-full max-w-xl mx-auto lg:order-1 lg:mx-0"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-lg mb-4"
          >
            👋 Hello World,
          </motion.p>
 
 <span className="text-primary">&lt;h1&gt;</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
             I'm <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground">
            <TypewriterEffect words={roles} typingSpeed={100} deletingSpeed={60} pauseDuration={2000} />
          </span> 
          </h1>
          <span className="text-primary flex flex-row-reverse mb-4"> &lt;/h1&gt;</span>
          

          

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-lg"
          >
            Hi, I'm Zaheer Ahmed Khan. With 1+ year of professional experience, I build high-converting Shopify storefronts and MERN applications. Worked across 3+ Shopify stores, delivering 30+ responsive landing pages and 50+ custom Liquid sections for ProLon Life, L-Nutra Health, and MoxieLash.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto justify-center sm:justify-start px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center gap-2 glow-button"
            >
              <Mail className="w-5 h-5" />
              Hire Me
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto justify-center sm:justify-start px-6 py-3 sm:px-8 sm:py-4 border border-primary text-primary rounded-xl font-semibold flex items-center gap-2 hover:bg-primary/10 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 w-full lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              style={{ width: "calc(100% + 40px)", height: "calc(100% + 40px)", top: "-20px", left: "-20px" }}
            />
            
            {/* Image container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl"
            >
              <img
                src={profileImage}
                alt="Zaheer Ahmed Khan"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </motion.div>

            {/* Floating badges orbiting anticlockwise */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="absolute inset-0 hidden items-center justify-center pointer-events-none sm:flex"
            >
              <motion.div
                aria-hidden
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]"
              >
                {/* Top-right badge (will orbit) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute right-0 top-0 glass-card px-4 py-2 rounded-full"
                  style={{ transformOrigin: "center" }}
                >
                  <span className="text-sm font-mono text-primary">Shopify Expert</span>
                </motion.div>

                {/* Bottom-left badge (will orbit) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 bottom-0 glass-card px-4 py-2 rounded-full"
                  style={{ transformOrigin: "center" }}
                >
                  <span className="text-sm font-mono text-primary">MERN Stack</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

     
    </section>
  );
};

export default HeroSection;
