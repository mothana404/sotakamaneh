import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ourmissionimage from "../assets/Picture2.jpg";

const MissionSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/40 pt-32 overflow-hidden" dir="rtl">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-20 space-y-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-l from-blue-600 to-blue-900 bg-clip-text text-transparent leading-tight">
            رسالتنا للمرشحين
          </h2>
          <p className="text-lg text-blue-700 font-bold">
            حلول ذكية لحملتك الانتخابية
          </p>
          <div className="flex justify-center items-center gap-3">
            <motion.div 
              className="h-1.5 w-24 bg-gradient-to-r from-transparent to-blue-400 rounded-full"
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 1 }}
            />
            <motion.div 
              className="h-1.5 w-40 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.div 
              className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-transparent rounded-full"
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
        </motion.div>

        {/* Current Challenges Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-14 items-center mb-20"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
              <motion.svg 
                className="w-6 h-6 text-red-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
              تحديات المرشح التقليدية
            </h3>
            <div className="space-y-4">
              {[
                'صارف آلاف الدولارات على كارتات تنرمي بالشارع أو بالزبل',
                'تشتري لافتات، وتنشك أول مطرة او يشكوها',
                'تدفع للمراقب الانتخابي الواحد ١٠٠ دولار',
                'عندك ناس تخابرك، تراسلك، تتفاعل وياك… وإنت ما تلحك تجاوب!',
                'تظل تسأل نفسك: شكد عندي تأييد؟'
              ].map((challenge, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: -5 }}
                  className="flex items-start gap-4 bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-2xl border-r-4 border-red-300 shadow-md hover:shadow-lg transition-all"
                >
                  <svg className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-gray-700 font-normal text-base leading-relaxed">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="relative flex justify-center items-center"
          >
            <motion.img
              src={ourmissionimage}
              alt="تحديات الحملة الانتخابية"
              className="rounded-3xl shadow-2xl border-4 border-blue-100 max-w-md w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-2xl opacity-60 -z-10"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-2xl opacity-60 -z-10"></div>
          </motion.div>
        </motion.div>

        {/* Digital Solution Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/80 backdrop-blur-sm rounded-3xl p-12 mb-24 shadow-2xl border border-blue-100"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl"></div>
          <div className="relative">
            <h3 className="text-2xl p-2 md:text-2xl font-bold bg-gradient-to-l from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-12 text-center">
              الحل من "صوتك أمانة" – منصة ذكية تصير حملتك كلها بموبايلك
            </h3>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-3 gap-10"
            >
              {[
                {
                  title: 'صفحة رسمية متكاملة',
                  description: 'تربط كل حساباتك، وواجهة محترمة تنشر بكل المنصات دفعة وحدة',
                  icon: '🌐'
                },
                {
                  title: 'تواصل مباشر',
                  description: 'رسائل شخصية، صوتية، ڤيديو، دردشة مباشرة، ومجموعات واتساب',
                  icon: '💬'
                },
                {
                  title: 'تحليلات دقيقة',
                  description: 'معرفة عدد المؤيدين، أماكن تواجدهم، واحتياجاتهم',
                  icon: '📊'
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col items-center text-center border border-gray-100"
                >
                  <motion.div 
                    className="text-3xl mb-6"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold text-blue-900 mb-4">{feature.title}</h4>
                  <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Electronic Voting Timeline - Only 3 Phases, Modern Design */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-16"
        >
          <h3 className="text-2xl md:text-2xl font-bold text-blue-900 text-center mb-14">
            <span className="inline-flex items-center gap-2 text-lg">
              <motion.svg 
                className="w-6 h-6 text-blue-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </motion.svg>
              ٣ تصويتات إلكترونية حقيقية قبل الانتخابات
            </span>
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 rounded-full z-0" style={{transform: 'translateY(-50%)'}}></div>
            {[
              {
                time: '٣ أسابيع قبل الانتخابات',
                description: 'تشوف هل التأييد زاد لو قل',
                icon: '📈'
              },
              {
                time: 'أسبوع قبل الانتخابات',
                description: 'تشوف شصار من حملتك',
                icon: '📣'
              },
              {
                time: 'يوم الانتخابات',
                description: 'تگدر تعرف منو وصل لمركز الاقتراع وانتخبك',
                icon: '✅'
              }
            ].map((phase, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="relative z-10 flex-1 flex flex-col items-center text-center"
              >
                <div className="flex flex-col items-center mb-6">
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-4xl shadow-2xl border-4 border-white mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {phase.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">{phase.time}</h4>
                  <p className="text-gray-600 text-base font-medium">{phase.description}</p>
                </div>
                {/* Connector for mobile */}
                {index < 2 && (
                  <motion.div 
                    className="w-1 h-12 bg-gradient-to-b from-blue-300 to-blue-200 mx-auto md:hidden"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-24 text-center relative overflow-hidden"
        >
          <div className="relative bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/90 backdrop-blur-sm rounded-3xl p-16 shadow-2xl border border-blue-100">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-l from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-8">
                صوتك أمانة - مكتبك الانتخابي الرقمي المتكامل
              </h3>
              <p className="text-gray-600 mb-10 max-w-3xl mx-auto text-base leading-relaxed font-normal">
                مو بس تطبيق…هو عبارة عن مكتبك الانتخابي الرقمي، حملتك، واجهتك، جمهورك، وتحليلاتك – الكل بمكان واحد، تحت سيطرتك، وبدون تعب وباقل تكلفة!
              </p>
              <motion.button 
                className="group bg-gradient-to-l from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-2xl hover:from-blue-700 hover:to-indigo-700 
                         transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl text-lg font-bold inline-flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowComingSoon(true)}
              >
                ابدأ حملتك الذكية الآن
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
            </div>
          </div>
        </motion.div>
        {/* Coming Soon Popup */}
        {showComingSoon && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full text-center relative animate-fadeIn">
              <div className="flex flex-col items-center gap-3 mb-4">
                <svg className="w-16 h-16 text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" className="text-blue-200" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" />
                </svg>
                <h2 className="text-2xl font-bold text-blue-700">قريباً</h2>
                <p className="text-gray-600 text-base">ميزة إطلاق الحملة الذكية ستكون متاحة قريباً.<br/>تابعنا لمزيد من التحديثات!</p>
              </div>
              <button
                onClick={() => setShowComingSoon(false)}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all"
                autoFocus
              >
                إغلاق
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MissionSection;