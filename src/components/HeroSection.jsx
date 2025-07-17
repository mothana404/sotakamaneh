import React from 'react';
import heroImage from '../assets/Picture1.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="pt-40 relative py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden"
      dir="rtl"
    >
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-20 h-20 border-2 border-blue-200/30 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-lg"
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            className="flex-1 w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative mb-8"
            >
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-30 w-60"></span>
              <span className="relative inline-flex items-center gap-2 bg-gradient-to-l from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
                {/* <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg> */}
                الانتخابات البرلمانية العراقية 2025
              </span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-8 text-right"
            >
              <span className="relative">
                <span className="absolute -inset-1 bg-gradient-to-l from-blue-600/20 to-indigo-600/20 blur-lg"></span>
                <span className="relative bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  صوتك أمانة
                </span>
              </span>
              <br />
              <span className="text-gray-800">مستقبلك بيدك</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl leading-relaxed mb-8 text-right"
            >
              منصتنا الانتخابية الرقمية تتيح لك المشاركة الفعالة في رسم مستقبل العراق من خلال التصويت الإلكتروني الآمن والشفاف. نحن نضمن لك تجربة سهلة وسريعة،  ونتائج فورية وموثوقة لكل دائرة انتخابية. صوتك أمانة ومسؤولية، ومن خلال منصتنا يمكنك التأكد أن صوتك سيصل ويُحتسب بأمان وعدالة، لتكون جزءاً من التغيير الحقيقي نحو عراق أفضل.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 mb-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-l from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl overflow-hidden"
                onClick={() => navigate('/register')}
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative flex items-center gap-2">
                  سجل كمرشح 
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>

              {/* <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white text-blue-600 px-10 py-4 rounded-2xl border-2 border-blue-600 font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-l from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></span>
                <span className="relative">تحقق من أهليتك للتصويت</span>
              </motion.button> */}
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              className="flex gap-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">+25M</div>
                <div className="text-sm text-gray-600">ناخب مؤهل</div>
              </div>
              <div className="text-center border-x-2 border-gray-200 px-8">
                <div className="text-3xl font-bold text-indigo-600">329</div>
                <div className="text-sm text-gray-600">مقعد برلماني</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">18</div>
                <div className="text-sm text-gray-600">محافظة</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="flex-1 flex flex-col items-center relative"
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div className="relative w-full max-w-lg">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative">
                <img
                  src={heroImage}
                  alt="الانتخابات البرلمانية العراقية 2025"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
                  loading="lazy"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"></div>
                
                {/* Badge */}
                <motion.div
                  className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm text-blue-600 px-8 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-blue-100"
                  initial={{ scale: 0, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.8 }}
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-bold text-lg">انتخابات 2025</span>
                </motion.div>

                {/* Floating Card */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, type: "spring", stiffness: 100 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">تصويت آمن</div>
                      <div className="text-sm text-gray-600">100% محمي</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;