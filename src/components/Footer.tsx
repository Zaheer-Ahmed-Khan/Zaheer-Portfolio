import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <a href="#" className="text-xl font-bold gradient-text">
            {"<ZAK />"}
          </a>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Zaheer Ahmed Khan
          </p>

          <p className="text-muted-foreground text-sm">
            © 2024 All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
