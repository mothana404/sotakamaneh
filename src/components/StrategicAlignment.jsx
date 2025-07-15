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
      animate="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-20 md:py-32 overflow-hidden"
      dir="rtl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-20"
        >
          <h2 className="p-4 text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-indigo-900 mb-8">
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
            className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
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
                    <span className="mt-1.5 w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Implementation Card */}
          <motion.div
            variants={itemVariants}
            className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 lg:p-10 border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
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
                    <span className="mt-1.5 w-2 h-2 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StrategicAlignment;