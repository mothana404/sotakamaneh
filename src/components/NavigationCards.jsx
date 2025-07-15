import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const cards = [
  {
    title: "من نحن",
    description: "تعرف على فريقنا وقصتنا ورؤيتنا في تطوير العملية الانتخابية",
    path: "/about",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    ),
    badge: "جديد",
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    title: "ما الذي يبحث عنه المرشح",
    description: "اكتشف كيف نساعد المرشحين في إدارة حملاتهم الانتخابية بكفاءة",
    path: "/candidate-solutions",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
    ),
    badge: "مميز",
    color: "from-emerald-500 to-green-600",
    bgColor: "from-emerald-50 to-green-50"
  },
  {
    title: "ما الذي يبحث عنه الناخب",
    description: "تعرف على كيفية مساعدة الناخبين في اتخاذ قرارهم بشكل مدروس",
    path: "/voter-solutions",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 12l2 2 4-4" /></svg>
    ),
    badge: "موثوق",
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50"
  }
];

const NavigationCards = () => {
  const navigate = useNavigate();

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white" dir="rtl">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-32 right-20 w-24 h-24 border-2 border-blue-200/20 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-lg rotate-45"
          animate={{ 
            y: [0, 30, 0],
            rotate: [45, 225, 405]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-6 mb-16"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
        >
          <motion.div variants={itemAnimation}>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              خدماتنا الانتخابية
            </span>
          </motion.div>
          <motion.h2 
            variants={itemAnimation}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900"
          >
            <span className="relative">
              <span className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-lg"></span>
              <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">استكشف خدماتنا</span>
            </span>
          </motion.h2>
          <motion.p 
            variants={itemAnimation}
            className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto"
          >
            كل ما تحتاجه كناخب أو مرشح في مكان واحد
          </motion.p>
        </motion.div>

        {/* Cards Container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <button
                onClick={() => navigate(card.path)}
                className="relative w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 group"
                tabIndex={0}
                aria-label={card.title}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Card Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Content Container */}
                <div className="relative p-10 flex flex-col items-center text-center h-full">
                  {/* Badge */}
                  <motion.span 
                    className={`absolute top-4 left-4 bg-gradient-to-r ${card.color} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {card.badge}
                  </motion.span>
                  
                  {/* Icon Container */}
                  <motion.div 
                    className={`mb-8 p-5 rounded-2xl bg-gradient-to-br ${card.color} shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {card.icon}
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                    {card.description}
                  </p>
                  
                  {/* CTA Button */}
                  <motion.div 
                    className={`mt-auto inline-flex items-center gap-3 bg-gradient-to-r ${card.color} text-white px-6 py-3 rounded-2xl font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>المزيد</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                  
                  {/* Decorative Elements */}
                  <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${card.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  <div className={`absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br ${card.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 text-gray-500">
            <div className="w-16 h-px bg-gray-300"></div>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NavigationCards;