import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import newlogo from "../assets/newlogo.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isTransparent = isHomePage && !isScrolled;

  // Optimized scroll handler
  useEffect(() => {
    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        rafId = null;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const navLinks = useMemo(() => [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "حلول المرشحين", path: "/candidate-solutions" },
    { name: "حلول الناخبين", path: "/voter-solutions" },
    { name: "سجل كمرشح", path: "/register" },
  ], []);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100"
      }`}
    >
      {/* Premium top accent */}
      <div className={`absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent transition-opacity duration-500 ${
        isTransparent ? "opacity-40" : "opacity-100"
      }`} />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <nav className="flex items-center justify-between h-22" dir="rtl">
          
          {/* Enhanced Logo Section */}
          <motion.div
            className="flex items-center gap-5 py-4"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Premium logo container */}
            <div className="relative group">
              {/* Animated glow effect */}
              <motion.div 
                className="absolute inset-0 bg-blue-400 blur-lg opacity-40 rounded-full"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Logo with premium styling */}
              <div className="relative">
                <img
                  src={newlogo}
                  alt="شعار الانتخابات"
                  className="h-16 w-16 relative z-10 rounded-full border-4 border-white shadow-xl bg-white object-cover"
                />
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-pulse" />
                <div className="absolute -inset-1 rounded-full border border-blue-400/10" />
              </div>
            </div>
            
            {/* Text with enhanced typography */}
            <div className="flex flex-col justify-center">
              <motion.h1 
                className={`text-3xl font-bold tracking-tight transition-colors duration-300 ${
                  isTransparent ? "text-white drop-shadow-lg" : "text-slate-900"
                }`}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                صوتك أمانة
              </motion.h1>
              <motion.div 
                className="flex items-center gap-2 mt-1"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className={`h-0.5 w-6 transition-colors duration-300 ${
                  isTransparent ? "bg-gray-200" : "bg-blue-600"
                }`} />
                <span className={`text-sm font-light tracking-wider transition-colors duration-300 ${
                  isTransparent ? "text-gray-200" : "text-blue-600"
                }`}>
                  منصة الانتخابات البرلمانية العراقية
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Premium Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Navigation items with stagger animation */}
            <div className="flex items-center">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className={`relative px-5 py-2.5 mx-1 font-medium text-base transition-all duration-300 group rounded-xl ${
                      location.pathname === link.path
                        ? isTransparent 
                          ? "text-white font-bold" 
                          : "text-blue-700 font-bold"
                        : isTransparent
                          ? "text-gray-200 hover:text-white"
                          : "text-gray-600 hover:text-slate-900"
                    }`}
                  >
                    {/* Active background with smooth animation */}
                    <AnimatePresence mode="wait">
                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="activeBackground"
                          className={`absolute inset-0 rounded-xl ${
                            isTransparent
                              ? "bg-white/20 backdrop-blur-sm border border-white/30"
                              : "bg-blue-50 border border-blue-200"
                          }`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        />
                      )}
                    </AnimatePresence>
                    
                    {/* Hover effect overlay */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                        isTransparent ? "bg-white/10" : "bg-gray-50"
                      }`}
                    />
                    
                    {/* Text content */}
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Active indicator dot */}
                    <AnimatePresence>
                      {location.pathname === link.path && (
                        <motion.div
                          initial={{ scale: 0, y: 10 }}
                          animate={{ scale: 1, y: 0 }}
                          exit={{ scale: 0, y: 10 }}
                          className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full ${
                            isTransparent ? "bg-white" : "bg-blue-600"
                          }`}
                        />
                      )}
                    </AnimatePresence>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Elegant vertical separator */}
            <motion.div 
              className={`w-px h-8 mx-4 transition-colors duration-300 ${
                isTransparent ? "bg-white/30" : "bg-gray-300"
              }`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            
            {/* Premium CTA Button */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="https://wa.me/9647873805425"
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-hidden px-7 py-3 rounded-xl font-bold shadow-lg transition-all duration-300 flex items-center gap-3 group ${
                    isTransparent
                      ? "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                      : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600"
                  }`}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3,
                      ease: "linear",
                      repeatDelay: 1
                    }}
                  />
                  
                  {/* Icon with rotation on hover */}
                  <motion.svg 
                    className="w-5 h-5 relative z-10" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </motion.svg>
                  <span className="relative z-10">تواصل معنا</span>
                </a>
              </motion.div>
            </div>
  
            {/* Enhanced Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className={`lg:hidden relative p-3 rounded-xl transition-all duration-300 overflow-hidden ${
                isTransparent
                  ? "text-white border border-white/30 bg-white/10 hover:bg-white/20"
                  : "text-blue-600 border border-blue-200 bg-blue-50 hover:bg-blue-100"
              }`}
              aria-label="Toggle Menu"
            >
              {/* Background animation on click */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={false}
                animate={isMobileMenuOpen ? { scale: [1, 1.5], opacity: [1, 0] } : {}}
                transition={{ duration: 0.5 }}
              />
              
              {/* Animated menu icon */}
              <div className="relative z-10 w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  className={`block h-0.5 w-6 transition-colors duration-300 ${
                    isTransparent ? "bg-white" : "bg-blue-600"
                  }`}
                  animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`block h-0.5 w-6 my-1.5 transition-colors duration-300 ${
                    isTransparent ? "bg-white" : "bg-blue-600"
                  }`}
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`block h-0.5 w-6 transition-colors duration-300 ${
                    isTransparent ? "bg-white" : "bg-blue-600"
                  }`}
                  animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </nav>
  
          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden"
              >
                <motion.div 
                  className={`px-4 py-6 backdrop-blur-lg border-t ${
                    isTransparent
                      ? "bg-black/70 border-white/20"
                      : "bg-white/95 border-gray-200"
                  }`}
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Mobile navigation links */}
                  <div className="flex flex-col gap-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Link
                          to={link.path}
                          className={`relative block py-4 px-6 text-lg font-medium rounded-xl transition-all duration-300 text-center overflow-hidden ${
                            location.pathname === link.path
                              ? isTransparent
                                ? "bg-white/20 text-white border border-white/30"
                                : "bg-blue-50 text-blue-700 border border-blue-200"
                              : isTransparent
                                ? "text-gray-200 hover:text-white hover:bg-white/10 border border-transparent"
                                : "text-gray-600 hover:text-slate-900 hover:bg-gray-50 border border-transparent"
                          }`}
                          onClick={toggleMenu}
                        >
                          {/* Hover effect background */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                          
                          {/* Link text */}
                          <span className="relative z-10">{link.name}</span>
                          
                          {/* Active indicator */}
                          {location.pathname === link.path && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              className={`absolute bottom-0 left-0 right-0 h-0.5 origin-left ${
                                isTransparent ? "bg-white" : "bg-blue-600"
                              }`}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                    
                    {/* Mobile CTA button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                      className="mt-4"
                    >
                      <a
                        href="https://wa.me/9647873805425"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative block py-4 px-6 rounded-xl font-bold text-center shadow-lg overflow-hidden ${
                          isTransparent
                            ? "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
                            : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600"
                        }`}
                        onClick={toggleMenu}
                      >
                        {/* Animated background effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                          animate={{ x: ["0%", "200%"] }}
                          transition={{ 
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                        />
                        
                        {/* Icon and text */}
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                          تواصل معنا عبر واتساب
                        </span>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Bottom gradient line for non-transparent state */}
        {!isTransparent && (
          <motion.div 
            className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        )}
      </motion.header>
    );
  };
  
  export default Navbar;