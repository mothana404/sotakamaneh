import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const VoterSolutions = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  const painPoints = [
    {
      icon: "📄",
      title: "غرق في الكارتات الورقية",
      description: "آلاف الكارتات العشوائية تضيع وقتك وجهدك",
    },
    {
      icon: "💬",
      title: "تشتت في التواصل",
      description: "ضياع الرسائل بين فيسبوك وواتساب ومنصات متعددة",
    },
    {
      icon: "🤔",
      title: "صعوبة اتخاذ القرار",
      description: "تعدد القوائم والمرشحين يجعل الاختيار معقداً",
    },
    {
      icon: "🔍",
      title: "غياب المصداقية",
      description: "لا توجد منصة موثوقة للتواصل المباشر مع المرشحين",
    },
  ];

  const features = [
    {
      title: "واجهة موحدة ذكية",
      icon: "🎯",
      benefits: [
        "عرض جميع المرشحين في دائرتك",
        "تصفية حسب المحافظة والمنطقة",
        "مقارنة سريعة بين المرشحين",
        "تحديث مستمر للمعلومات",
      ],
    },
    {
      title: "ملف تعريفي متكامل",
      icon: "👤",
      benefits: [
        "السيرة الذاتية الكاملة",
        "الفيديوهات التعريفية",
        "روابط الحسابات الرسمية",
        "البرنامج الانتخابي التفصيلي",
      ],
    },
    {
      title: "تواصل مباشر وفعال",
      icon: "📱",
      benefits: [
        "رسائل مباشرة للمرشح",
        "متابعة حالة الطلبات",
        "تواصل عبر الواتساب",
        "نظام تتبع الاستجابة",
      ],
    },
  ];

  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <>
      <Navbar />
      <div
        className="relative bg-white min-h-screen py-16 pt-28 overflow-hidden"
        dir="rtl"
      >
        {/* Creative White Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle gradient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-sky-50 to-transparent rounded-full blur-3xl opacity-50"></div>
          
          {/* Geometric patterns */}
          <svg className="absolute top-20 left-20 w-40 h-40 text-blue-50 opacity-50" viewBox="0 0 200 200">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#grid)" />
          </svg>
          
          {/* Abstract shapes */}
          <div className="absolute top-1/3 right-10 w-32 h-32 border-2 border-blue-100 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border-2 border-sky-100 rounded-full opacity-30"></div>
          
          {/* Diagonal lines pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                #3b82f6,
                #3b82f6 1px,
                transparent 1px,
                transparent 15px
              )`
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              منصة رقمية متقدمة
            </motion.div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              صوتك يستحق أن يُسمع
            </h1>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              منصة موثوقة تجمع كل ما تحتاجه كناخب في مكان واحد
            </p>
          </motion.div>

          {/* Pain Points Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                تحديات الناخب اليوم
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="h-0.5 w-16 bg-blue-200"></div>
                <div className="h-1 w-8 bg-blue-500 rounded-full"></div>
                <div className="h-0.5 w-16 bg-blue-200"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-sky-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-sky-100 transition-colors">
                      <span className="text-xl">{point.icon}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Solutions Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                الحل مع صوتك أمانة
              </h2>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="h-0.5 w-16 bg-blue-200"></div>
                <div className="h-1 w-8 bg-blue-500 rounded-full"></div>
                <div className="h-0.5 w-16 bg-blue-200"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-sky-500 rounded-lg flex items-center justify-center text-white shadow-md">
                        <span className="text-lg">{feature.icon}</span>
                      </div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start gap-2 text-xs"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                        >
                          <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-600">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Stats Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-8 mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "100%", label: "شفافية" },
                { number: "24/7", label: "متاح دائماً" },
                { number: "10+", label: "احصائية مختلفة" },
                { number: "18", label: "محافظة" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                  >
                    <h3 className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</h3>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
  
            {/* GPS Features Section */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-16 overflow-hidden"
            >
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-lg font-bold mb-2">خدمات موقعية ذكية</h2>
                  <p className="text-blue-100 text-xs">
                    اكتشف المرشحين ومراكز الاقتراع القريبة منك
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      icon: "📍",
                      title: "تحديد الموقع",
                      description: "عرض المرشحين حسب منطقتك",
                    },
                    {
                      icon: "🎯",
                      title: "مراكز الاقتراع",
                      description: "اكتشف أقرب مركز اقتراع إليك",
                    },
                    {
                      icon: "🔔",
                      title: "تنبيهات ذكية",
                      description: "إشعارات بالفعاليات القريبة منك",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white/10 backdrop-blur rounded-lg p-5 hover:bg-white/15 transition-all duration-300 border border-white/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-2xl mb-3">{item.icon}</div>
                      <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                      <p className="text-blue-100 text-xs leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
  
            {/* Process Section */}
            <motion.section
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-16"
            >
              <div className="text-center mb-10">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  كيف تعمل المنصة
                </h2>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="h-0.5 w-16 bg-blue-200"></div>
                  <div className="h-1 w-8 bg-blue-500 rounded-full"></div>
                  <div className="h-0.5 w-16 bg-blue-200"></div>
                </div>
              </div>
  
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-100 -translate-y-1/2 hidden lg:block"></div>
                <div className="grid md:grid-cols-4 gap-6 relative">
                  {[
                    { step: "1", title: "سجل دخولك", desc: "أنشئ حساباً مجانياً" },
                    { step: "2", title: "حدد موقعك", desc: "اختر محافظتك ودائرتك" },
                    { step: "3", title: "استكشف المرشحين", desc: "تصفح وقارن بينهم" },
                    { step: "4", title: "تواصل وصوّت", desc: "تواصل مباشرة وصوّت" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-3 relative z-10">
                        {item.step}
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
  
            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative text-center"
            >
              <div className="relative bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl p-10 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-sky-100 rounded-full translate-y-20 -translate-x-20 opacity-50"></div>
                
                <div className="relative z-10">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    كن جزءاً من التغيير الحقيقي
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                    انضم إلى منصة "صوتك أمانة" وساهم في بناء مستقبل ديمقراطي أكثر شفافية. 
                    استمتع بسهولة الوصول للمرشحين وتواصل مباشرة مع من يمثل تطلعاتك.
                  </p>
                  <motion.button
                    className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg text-sm font-semibold 
                             hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl 
                             inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowComingSoon(true)}
                  >
                    ابدأ رحلتك الآن
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
                  
                  <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      آمن 100%
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      متاح 24/7
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      سهل الاستخدام
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
  
          {/* Coming Soon Modal */}
          {showComingSoon && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
              onClick={() => setShowComingSoon(false)}
            >
              <motion.div
                initial={{ scale: 0.8, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full"
                dir="rtl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowComingSoon(false)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">قريباً جداً!</h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    نعمل بجد لإطلاق منصة "صوتك أمانة" قريباً. 
                    سجل بريدك الإلكتروني لتكون أول من يعرف!
                  </p>
                  <button
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-semibold shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all"
                  onClick={() => setShowComingSoon(false)}
                >
                  حسناً، فهمت
                </button>
                
                <div className="mt-4 flex items-center justify-center gap-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default VoterSolutions;