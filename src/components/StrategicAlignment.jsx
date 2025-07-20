// components/StrategicAlignment.jsx
import React from 'react';
import { motion } from 'framer-motion';

const visionPoints = [
  "نعمل على إعادة الثقة بالعملية الانتخابية.",
  "نعزز المشاركة الواعية والفعالة لكل مواطن.",
  "نضمن الشفافية والنزاهة في التواصل.",
  "نمكن المواطنين من اتخاذ قرارات مدروسة."
];

const implementationPoints = [
  "نوفر معلومات دقيقة وموثوقة عن المرشحين.",
  "نربط الناخبين بالمرشحين بشكل مباشر وفعال.",
  "نستخدم تقنيات حديثة لضمان النزاهة والشفافية.",
  "ندعم المشاركة الرقمية الذكية في كل مرحلة."
];

const StrategicAlignment = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const bulletVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-20 md:py-32 overflow-hidden"
      dir="rtl"
    >
      {/* Creative Background - Same as CandidateSlider */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <svg width="100%" height="100%" viewBox="0 0 400 400">
            <defs>
              <pattern id="grid-strategic" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e40af" strokeWidth="1"/>
              </pattern>
              <pattern id="dots-strategic" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="#1e40af"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-strategic)" />
            <rect width="100%" height="100%" fill="url(#dots-strategic)" opacity="0.5" />
          </svg>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-15 blur-lg"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-200 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-20 w-20 h-20 bg-blue-300 rounded-full opacity-20 blur-md"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-indigo-200 rounded-full opacity-10 blur-lg"></div>

        {/* Hexagonal pattern */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-[0.02]">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <polygon points="100,10 173,50 173,130 100,170 27,130 27,50" fill="none" stroke="#1e40af" strokeWidth="2"/>
            <polygon points="100,30 153,60 153,120 100,150 47,120 47,60" fill="none" stroke="#1e40af" strokeWidth="1"/>
            <polygon points="100,50 133,70 133,110 100,130 67,110 67,70" fill="none" stroke="#1e40af" strokeWidth="1"/>
          </svg>
        </div>

        {/* Additional hexagonal pattern */}
        <div className="absolute bottom-32 right-1/4 transform opacity-[0.015]">
          <svg width="150" height="150" viewBox="0 0 150 150">
            <polygon points="75,7.5 129.9,37.5 129.9,97.5 75,127.5 20.1,97.5 20.1,37.5" fill="none" stroke="#1e40af" strokeWidth="1"/>
            <polygon points="75,25 115.4,45 115.4,85 75,105 34.6,85 34.6,45" fill="none" stroke="#1e40af" strokeWidth="1"/>
          </svg>
        </div>

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]">
          <svg width="100%" height="100%">
            <line x1="0" y1="20%" x2="100%" y2="25%" stroke="#1e40af" strokeWidth="1"/>
            <line x1="0" y1="40%" x2="100%" y2="35%" stroke="#1e40af" strokeWidth="1"/>
            <line x1="0" y1="60%" x2="100%" y2="65%" stroke="#1e40af" strokeWidth="1"/>
            <line x1="0" y1="80%" x2="100%" y2="75%" stroke="#1e40af" strokeWidth="1"/>
          </svg>
        </div>

        {/* Additional decorative elements for this section */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 border-2 border-blue-300 rotate-45 opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/5 w-8 h-8 border-2 border-indigo-300 rotate-12 opacity-15"></div>
        <div className="absolute top-2/3 left-1/6 w-4 h-4 bg-blue-200 rounded-full opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-20"
        >
          <h2 className="p-4 text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-indigo-900 mb-8">
            تكامل استراتيجي مع مبادرة شارك
            <span className="relative inline-block mx-3">
              <motion.div 
                className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              ></motion.div>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            نحن جزء من رؤية وطنية شاملة لتعزيز الديمقراطية والمشاركة الفعالة في العملية الانتخابية
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border border-gray-100 hover:bg-white"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <path d="M0,0 L64,0 L64,64 Z" fill="#1e40af"/>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-12 h-12 opacity-3">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <path d="M0,48 L48,48 L0,0 Z" fill="#1e40af"/>
              </svg>
            </div>
            
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mr-4">رؤيتنا المشتركة</h3>
              </div>
              
              <p className="text-gray-700 font-medium leading-relaxed mb-6">
                رؤيتنا تنطلق من إيماننا بأن العملية الانتخابية يجب أن تكون شفافة، عادلة، وتشاركية، حيث يكون لكل مواطن دور فاعل في صناعة القرار الوطني.
              </p>
              
              <div className="space-y-3">
                {visionPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    variants={bulletVariants}
                    custom={idx}
                    className="flex items-start gap-3 group/item"
                  >
                    <motion.span 
                      className="mt-1.5 w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"
                      whileHover={{ scale: 1.5, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    ></motion.span>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Implementation Card */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border border-gray-100 hover:bg-white"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 opacity-5">
              <svg viewBox="0 0 64 64" className="w-full h-full">
                <path d="M64,0 L0,0 L0,64 Z" fill="#6366f1"/>
              </svg>
            </div>
            <div className="absolute bottom-0 right-0 w-12 h-12 opacity-3">
              <svg viewBox="0 0 48 48" className="w-full h-full">
                <path d="M48,48 L0,48 L48,0 Z" fill="#6366f1"/>
              </svg>
            </div>
            
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mr-4">منهجنا في التنفيذ</h3>
              </div>
              
              <p className="text-gray-700 font-medium leading-relaxed mb-6">
                نلتزم بتقديم حلول تقنية متقدمة تدعم العملية الانتخابية وتضمن وصول المعلومات الصحيحة لكل ناخب ومرشح، مع التركيز على النزاهة والابتكار في كل مرحلة.
              </p>
              
              <div className="space-y-3">
                {implementationPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    variants={bulletVariants}
                    custom={idx}
                    className="flex items-start gap-3 group/item"
                  >
                    <motion.span 
                      className="mt-1.5 w-2 h-2 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"
                      whileHover={{ scale: 1.5, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    ></motion.span>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional decorative element at the bottom */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
        >
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full opacity-30"></div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </motion.section>
  );
};

export default StrategicAlignment;