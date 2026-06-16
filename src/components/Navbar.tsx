import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 rounded-t-none"
    >
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <motion.a
          href="#"
          className="text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          {"<ZAK />"}
        </motion.a>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={link.href} className="nav-link font-medium">
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex px-5 py-2 bg-primary text-primary-foreground rounded-lg font-medium glow-button"
        >
          Let's Talk
        </motion.a>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-white/10 transition"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="w-6 h-6 relative">
            <span
              className={`block absolute left-0 right-0 h-0.5 bg-current transform transition duration-300 ${open ? "rotate-45 top-2.5" : "-translate-y-1.5 top-1"}`}
            />
            <span
              className={`block absolute left-0 right-0 h-0.5 bg-current transform transition duration-300 ${open ? "opacity-0" : "top-2.5"}`}
            />
            <span
              className={`block absolute left-0 right-0 h-0.5 bg-current transform transition duration-300 ${open ? "-rotate-45 top-2.5" : "translate-y-1.5 top-4"}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-sm border-t"
          >
            <div className="container mx-auto px-4 md:px-6 py-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block nav-link font-medium text-lg"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="inline-block px-5 py-2 bg-primary text-primary-foreground rounded-lg font-medium mt-2"
                  >
                    Let's Talk
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
