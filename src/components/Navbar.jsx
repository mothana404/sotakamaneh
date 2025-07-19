import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import newlogo from "../assets/newlogo.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "حلول المرشحين", path: "/candidate-solutions" },
    { name: "حلول الناخبين", path: "/voter-solutions" },
    { name: "سجل كمرشح", path: "/register" },
  ];

  // Determine navbar style based on scroll and page
  const isTransparent = isHomePage && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <nav className="flex items-center justify-between h-20" dir="rtl">
          {/* Logo and Website Name */}
          <motion.div
            className="flex items-center gap-5"
            whileHover={{ x: 5 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 blur-lg opacity-40 rounded-full"></div>
              <img
                src={newlogo}
                alt="شعار الانتخابات"
                className="h-16 w-auto relative z-10 rounded-full border-4 border-white shadow-xl bg-white"
              />
            </div>
            <div className="flex flex-col">
              <h1 className={`text-3xl font-bold tracking-wide drop-shadow transition-colors duration-300 ${
                isTransparent ? "text-white" : "text-slate-900"
              }`}>
                صوتك أمانة
              </h1>
              <span className={`text-sm font-light tracking-wider mt-1 transition-colors duration-300 ${
                isTransparent ? "text-gray-200" : "text-blue-600"
              }`}>
                منصة الانتخابات البرلمانية العراقية
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                className="relative flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                style={{ minWidth: 0 }}
              >
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 font-medium text-base transition-all duration-300 group flex items-center justify-center rounded-lg min-w-[90px] h-10 ${
                    location.pathname === link.path
                      ? isTransparent 
                        ? "text-white font-bold" 
                        : "text-blue-700 font-bold"
                      : isTransparent
                        ? "text-gray-200 hover:text-white"
                        : "text-gray-600 hover:text-slate-900"
                  }`}
                  style={{ fontSize: '1.05rem', height: '40px', lineHeight: '40px' }}
                >
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeBackground"
                      className={`absolute inset-0 z-0 rounded-lg shadow-md ${
                        isTransparent
                          ? "bg-white/20 backdrop-blur-sm border border-white/30"
                          : "bg-blue-50 border border-blue-200"
                      }`}
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center w-full h-full whitespace-nowrap">
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/9647873805425"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-3 rounded-lg font-bold shadow-xl transition-all duration-300 flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  isTransparent
                    ? "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                    : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600"
                }`}
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                تواصل معنا
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
              isTransparent
                ? "text-white border border-white/30 bg-white/10 hover:bg-white/20"
                : "text-blue-600 border border-blue-200 bg-blue-50 hover:bg-blue-100"
            }`}
            aria-label="Toggle Menu"
          >
            <motion.svg
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <motion.path
                variants={{
                  closed: { d: "M4 6h16M4 12h16M4 18h16" },
                  open: { d: "M6 18L18 6M6 6l12 12" }
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </motion.button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className={`px-4 py-6 backdrop-blur-lg border-t ${
                isTransparent
                  ? "bg-black/70 border-white/20"
                  : "bg-white/95 border-gray-200"
              }`}>
                <div className="flex flex-col gap-3">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-4 px-6 text-lg font-medium rounded-lg transition-all duration-300 text-center ${
                          location.pathname === link.path
                            ? isTransparent
                              ? "bg-white/20 text-white border border-white/30"
                              : "bg-blue-50 text-blue-700 border border-blue-200"
                            : isTransparent
                              ? "text-gray-200 hover:text-white hover:bg-white/10 border border-transparent"
                              : "text-gray-600 hover:text-slate-900 hover:bg-gray-50 border border-transparent"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="mt-4"
                  >
                    <a
                      href="https://wa.me/9647873805425"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block py-4 px-6 rounded-lg font-bold text-center shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                        isTransparent
                          ? "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                          : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      تواصل معنا عبر واتساب
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;