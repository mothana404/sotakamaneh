import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import newlogo from "../assets/newlogo.jpg"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className="relative overflow-hidden" dir="rtl">
      {/* Static Background with Full Opacity */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-800 to-indigo-800"></div>
        
        {/* Interactive mesh gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
          }}
        ></div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" viewBox="0 0 400 400">
            <defs>
              <pattern id="footer-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="1"/>
                <circle cx="0" cy="0" r="2" fill="#ffffff"/>
                <circle cx="60" cy="60" r="2" fill="#ffffff"/>
              </pattern>
              <pattern id="footer-dots" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1.5" fill="#ffffff" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
            <rect width="100%" height="100%" fill="url(#footer-dots)" />
          </svg>
        </div>

        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-16 right-20 w-24 h-24 border border-white/10 rounded-full"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-16 left-32 w-20 h-20 border border-blue-300/20 rotate-45"
          animate={{ rotate: [45, 225, 45], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-12 h-12"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <polygon points="32,4 56,20 56,44 32,60 8,44 8,20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
          </svg>
        </motion.div>
      </div>

      {/* Elegant top border with animation */}
      <div className="relative h-2 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-400 to-blue-600 bg-size-200 animate-gradient-x"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main content with reduced padding */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        
        {/* Compact Logo Section */}
        <motion.div 
          className="text-center mb-10"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              {/* <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <img
                  src={newlogo}
                  alt="شعار الانتخابات"
                  className="h-16 w-auto rounded-lg shadow-2xl"
                />
              </div> */}
            </motion.div>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                صوتك أمانة
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-3"></div>
              <p className="text-blue-200 font-medium">
                منصة الانتخابات البرلمانية العراقية الرسمية
              </p>
            </div>
          </div>
        </motion.div>

        {/* Compact grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          {/* About Section - Compact */}
          <motion.div 
            variants={itemVariants}
            className="group"
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white">من نحن</h4>
                </div>
                <p className="text-blue-100 leading-relaxed text-sm">
                  نحن ملتزمون بضمان انتخابات حرة ونزيهة وشفافة لمستقبل أفضل للعراق. نسعى لتكون منصة موثوقة تربط بين المواطنين والعملية الديمقراطية.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Links - Compact */}
          <motion.div 
            variants={itemVariants}
            className="group"
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white">روابط سريعة</h4>
                </div>
                <ul className="space-y-2">
                  {[
                    { text: 'الصفحة الرئيسية', link: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                    { text: 'من نحن', link: '/about', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                    { text: 'حلول المرشحين', link: '/candidate-solutions', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                    { text: 'حلول الناخبين', link: '/voter-solutions', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' }
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ x: -6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Link
                        to={item.link}
                        className="group/link flex items-center gap-2 text-blue-100 hover:text-white transition-all duration-300"
                      >
                        <div className="w-5 h-5 bg-white/10 rounded-md flex items-center justify-center group-hover/link:bg-blue-500 transition-colors">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                        </div>
                        <span className="text-sm font-medium">{item.text}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Information - Compact */}
          <motion.div 
            variants={itemVariants}
            className="group"
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white">تواصل معنا</h4>
                </div>
                <div className="space-y-3">
                  {[
                    { 
                      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
                      title: 'العنوان',
                      value: 'بغداد، العراق',
                      color: 'from-blue-400 to-cyan-500'
                    },
                    { 
                      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                      title: 'الواتساب',
                      value: '+964 787 380 5425',
                      color: 'from-green-400 to-emerald-500'
                    },
                    { 
                      icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                      title: 'البريد الإلكتروني',
                      value: 'info@sawtakamana.com',
                      color: 'from-purple-400 to-indigo-500'
                    }
                  ].map((contact, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-2 group/contact"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`w-6 h-6 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contact.icon} />
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold text-xs">{contact.title}</h5>
                        <p className="text-blue-200 text-xs" dir={contact.title === 'البريد الإلكتروني' || contact.title === 'الواتساب' ? 'ltr' : 'rtl'}>
                          {contact.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

                    {/* Vision & Mission - Compact */}
                    <motion.div 
            variants={itemVariants}
            className="group"
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white">رؤيتنا</h4>
                </div>
                
                <div className="space-y-3">
                  <motion.div 
                    className="relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-3 border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-amber-400/10 rounded-full -translate-y-8 translate-x-8"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 bg-orange-400/10 rounded-full translate-y-6 -translate-x-6"></div>
                    <p className="relative text-blue-100 text-sm leading-relaxed">
                      معاً نحو عراق ديمقراطي شفاف، حيث يكون صوت كل مواطن مسموعاً وفاعلاً في بناء المستقبل.
                    </p>
                  </motion.div>
                  
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <span className="text-white font-bold text-sm">صوتك أمانة، مستقبلك بيدك</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Media & Copyright - Compact */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-white/10 pt-6"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://wa.me/9647873805425"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white p-2.5 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://www.facebook.com/people/%D9%86%D8%AE%D8%A8%D8%A9-%D9%85%D8%B1%D8%B4%D8%AD%D9%8A%D9%86-%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82-%D9%84%D9%84%D8%A8%D8%B1%D9%84%D9%85%D8%A7%D9%86-2025/61569945720669/?mibextid=wwXIfr&rdid=pEsX0MwM7djPYrK7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GDuGFPCm5%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                </svg>
              </motion.a>

              <motion.a
                href="mailto:info@sawtakamana.com"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2.5 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </div>

            {/* Copyright and Legal */}
            <div className="text-center lg:text-right">
              <div className="flex flex-col lg:flex-row items-center gap-3 text-blue-200 text-sm">
                <span>© {currentYear} صوتك أمانة. جميع الحقوق محفوظة.</span>
                <div className="flex items-center gap-3">
                  <Link to="/privacy" className="hover:text-white transition-colors text-xs">سياسة الخصوصية</Link>
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  <Link to="/terms" className="hover:text-white transition-colors text-xs">الشروط والأحكام</Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll to top button */}

      </motion.div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        
        .bg-size-200 {
          background-size: 200% 200%;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563eb, #7c3aed);
        }
      `}</style>
    </footer>
  );
};

export default Footer;