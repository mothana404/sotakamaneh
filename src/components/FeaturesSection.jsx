import React, { useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    title: 'نظام رقمي متكامل',
    subtitle: 'براءة اختراع',
    description: 'أول نظام رقمي انتخابي متكامل مسجل ببراءة اختراع، يضمن الشفافية والسرعة في العملية الانتخابية.',
    badge: 'جديد',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    title: 'شفافية تامة',
    subtitle: 'مراقبة فورية',
    description: 'تواصل مباشر مع المرشحين، تقارير فورية، ومراقبة دولية لضمان نزاهة الانتخابات.',
    badge: 'مميز',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-100',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    title: 'تصويت إلكتروني آمن',
    subtitle: 'سهولة وسرعة',
    description: 'تصويت إلكتروني مشفر يضمن أمان صوتك وسرعة النتائج، مع دعم فني متواصل.',
    badge: 'آمن',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    title: 'نتائج فورية وموثوقة',
    subtitle: 'دقة وشفافية',
    description: 'عرض النتائج بشكل فوري وموثوق، مع تقارير تفصيلية لكل دائرة انتخابية.',
    badge: 'فوري',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'from-amber-50 to-orange-100',
  },
];

const FeaturesSection = () => {
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

  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50" dir="rtl">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-10 w-20 h-20 border-2 border-blue-200/20 rounded-lg rotate-45"
          animate={{ 
            y: [0, -30, 0],
            rotate: [45, 225, 45]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-6 mb-20"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
        >
          <motion.div variants={itemAnimation}>
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg> */}
              منصة عراقية للانتخابات الشفافة
            </span>
          </motion.div>
          <motion.h2 
            variants={itemAnimation}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900"
          >
            <span className="relative">
              <span className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-lg"></span>
              <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">صوتك أمانة</span>
            </span>
          </motion.h2>
          <motion.p 
            variants={itemAnimation}
            className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto"
          >
            كل ما تحتاجه لانتخابات شفافة، آمنة، وسهلة في منصة واحدة متكاملة
          </motion.p>
        </motion.div>

        {/* Features Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemAnimation}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}></div>
              <div className="relative h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:border-transparent transition-all duration-300">
                {/* Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${feature.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
                  {feature.badge}
                </div>
                
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.bgColor} rounded-bl-[100px] opacity-50`}></div>
                
                <div className="relative p-8 flex flex-col items-center text-center">
                  {/* Icon */}
                  <motion.div 
                    className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <div className="text-gray-600 font-semibold mb-4">{feature.subtitle}</div>
                  <p className="text-gray-500 text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className="relative bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-12 border border-blue-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-transparent rounded-bl-full"></div>
          
          <div className="relative">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              لماذا تختار منصتنا؟
            </h3>
            
            <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-4xl mb-8">
              منصتنا الانتخابية الرقمية تضع بين يديك تجربة سهلة وآمنة وشفافة في كل خطوة من خطوات العملية الانتخابية، وتمنحك الثقة بأن صوتك سيصل ويُحتسب بأمان وعدالة.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'استعراض جميع القوائم الانتخابية والمرشحين بسهولة تامة',
                'إمكانية التواصل المباشر مع المرشحين وطرح الاستفسارات',                'تصويت إلكتروني آمن ونتائج فورية وموثوقة',
                'رقابة دولية ومحلية لضمان النزاهة والشفافية الكاملة'
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-start gap-3 bg-white/50 backdrop-blur-sm p-4 rounded-xl hover:bg-white/80 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="mt-1 p-1.5 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform">
                    {/* <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg> */}
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg> */}
              جاهز للخطوة التالية؟
            </span>
          </motion.div>
          
          {/* جاهز للخطوة التالية؟ */}
          <div className="text-center mt-12 mb-6">
            <h2 className="text-3xl font-bold mb-2 text-indigo-900">جاهز للخطوة التالية؟</h2>
            <p className="text-gray-600 text-lg mb-6">حمل التطبيق وابدأ رحلتك الانتخابية الآن</p>
            <div className="flex justify-center">
              <motion.button 
                className="flex align-middle justify-center content-center group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 px-12 rounded-2xl font-bold text-xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowComingSoon(true)}
              >
                <span className="inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-3">
                  تحميل تطبيق صوتك أمانة
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </span>
              </motion.button>
            </div>
          </div>
          {/* Coming Soon Popup */}
          {showComingSoon && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full text-center relative animate-fadeIn">
                <div className="flex flex-col items-center gap-3 mb-4">
                  <svg className="w-16 h-16 text-indigo-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" className="text-indigo-200" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" />
                  </svg>
                  <h2 className="text-2xl font-bold text-indigo-700">قريباً</h2>
                  <p className="text-gray-600 text-base">تطبيق صوتك أمانة سيكون متاحاً قريباً على المتاجر الإلكترونية.<br/>تابعنا لمزيد من التحديثات!</p>
                </div>
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-all"
                  autoFocus
                >
                  إغلاق
                </button>
              </div>
            </div>
          )}
          
          {/* <motion.div 
            className="mt-8 flex items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          > */}
            {/* <div className="flex items-center gap-2">
              <div className="flex -space-x-2 overflow-hidden">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-br from-blue-400 to-blue-600"></div>
                ))}
              </div>
              <span className="text-gray-600 font-medium">+10,000 مستخدم</span>
            </div> */}
            
            {/* <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-600 font-medium mr-2">4.9/5 تقييم</span>
            </div> */}
          {/* </motion.div> */}
          
          <p className="text-blue-700 text-lg font-semibold mt-6">انضم إلى آلاف العراقيين الذين يثقون بمنصتنا للانتخابات القادمة</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;