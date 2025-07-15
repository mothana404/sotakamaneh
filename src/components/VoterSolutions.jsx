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
        staggerChildren: 0.15,
        delayChildren: 0.1 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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
        className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/40 min-h-screen py-24 pt-36 overflow-hidden"
        dir="rtl"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-extrabold mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-l from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                صوتك يستحق أن يُسمع
              </span>
            </motion.h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
               منصة موثوقة تجمع كل ما تحتاجه كناخب في مكان واحد
            </p>
          </motion.div>

          {/* Pain Points Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12">
               تحديات الناخب اليوم
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <motion.div 
                      className="text-3xl mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {point.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">{point.description}</p>
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
            className="mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
                 الحل مع صوتك أمانة
              </h2>
              <div className="flex items-center justify-center gap-3">
                <motion.div 
                  className="h-1.5 w-16 bg-blue-300 rounded-full"
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="h-1.5 w-32 bg-blue-500 rounded-full"
                  animate={{ scaleX: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="h-1.5 w-16 bg-blue-300 rounded-full"
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/40 rounded-2xl shadow-lg p-8 md:p-10 hover:shadow-xl transition-all duration-300 border border-blue-100/60 group overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-start gap-8">
                    <motion.div 
                      className="text-3xl md:text-4xl flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4">
                        {feature.title}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {feature.benefits.map((benefit, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center gap-3"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <motion.svg
                              className="w-5 h-5 text-green-500 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                              <motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 13l4 4L19 7"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                              />
                            </motion.svg>
                            <span className="text-gray-700 text-base font-medium">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* GPS Features Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white rounded-2xl p-10 mb-20 overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative">
              <div className="text-center mb-12">
                <h2 className="text-xl md:text-2xl font-bold mb-6">خدمات موقعية ذكية</h2>
                <p className="text-blue-100 text-base">
                   اكتشف المرشحين ومراكز الاقتراع القريبة منك
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
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
                    className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-blue-700/50 transition-all duration-300 border border-blue-600/30"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <motion.div 
                      className="text-3xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-blue-100 text-base leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative text-center overflow-hidden mt-16"
          >
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-gray-100">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl"></div>
              
              <motion.div 
                className="relative z-10"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-l from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-6">
                  كن جزءاً من التغيير الحقيقي في الانتخابات العراقية
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium max-w-2xl mx-auto">
                  انضم إلى منصة "صوتك أمانة" وكن من أوائل من يساهمون في بناء مستقبل ديمقراطي أكثر شفافية وعدالة. استمتع بسهولة الوصول إلى جميع المرشحين، تواصل مباشرة مع من يمثل تطلعاتك، وشارك في عملية تصويت إلكترونية آمنة وموثوقة. منصتنا تضمن لك تجربة انتخابية حديثة، نتائج فورية، ومعلومات دقيقة عن كل دائرة انتخابية. صوتك يصنع الفرق – لا تتردد في أن تكون جزءاً من التغيير!
                </p>
                <motion.button
                  className="group bg-gradient-to-l from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-bold 
                           hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-2 
                           shadow-lg hover:shadow-xl inline-flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowComingSoon(true)}
                >
                  ابدأ الآن
                  <motion.svg 
                    className="w-6 h-6"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.button>
                
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-10 -right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl"
                  animate={{ 
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 blur-xl"
                  animate={{ 
                    y: [0, 20, 0],
                    x: [0, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Popup: Coming Soon */}
        {showComingSoon && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full text-center flex flex-col items-center"
              dir="rtl"
            >
              <button
                className="absolute top-3 left-3 text-gray-400 hover:text-gray-700 focus:outline-none text-2xl"
                aria-label="إغلاق"
                onClick={() => setShowComingSoon(false)}
              >
                &times;
              </button>
              <motion.div
                className="mb-4 text-5xl"
                initial={{ scale: 0.7, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                🚧
              </motion.div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">قريباً</h3>
              <p className="text-gray-600 text-base mb-4">هذه الميزة ستتوفر قريباً على منصة صوتك أمانة.<br/>تابعنا للمزيد من التحديثات!</p>
              <button
                className="mt-2 px-6 py-2 bg-gradient-to-l from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow hover:from-blue-700 hover:to-indigo-700 transition-all"
                onClick={() => setShowComingSoon(false)}
              >
                حسنًا
              </button>
            </motion.div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
export default VoterSolutions;