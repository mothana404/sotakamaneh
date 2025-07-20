import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ourmissionimage from "../assets/Picture2.jpg";

const MissionSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <section className="relative py-20 pt-32 bg-white overflow-hidden" dir="rtl">
      {/* Creative Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <polygon points="20,1 38,10 38,30 20,39 2,30 2,10" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            رسالتنا للمرشحين
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-base text-gray-600">
            حلول رقمية متقدمة لدعم حملتك الانتخابية بكفاءة واحترافية
          </p>
        </motion.div>

        {/* Current Challenges Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-red-500">✕</span>
              تحديات المرشح التقليدية
            </h3>
            <div className="space-y-3">
              {[
                'إنفاق آلاف الدولارات على بطاقات انتخابية غالباً ما يتم التخلص منها في الشوارع أو النفايات.',
                'شراء لافتات دعائية تتعرض للتلف مع أول هطول للأمطار أو عند تقديم شكوى ضدها.',
                'دفع مبالغ كبيرة للمراقبين الانتخابيين تصل إلى 100 دولار للفرد الواحد.',
                'تعدد وسائل التواصل مع الناخبين (اتصالات، رسائل، تفاعل مباشر) مع صعوبة الاستجابة لجميع الطلبات في الوقت المناسب.',
                'الاستمرار في التساؤل حول حجم التأييد الفعلي والدعم الجماهيري.'
              ].map((challenge, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border-r-2 border-red-400"
                >
                  <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-sm text-gray-700">{challenge}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              <img
                src={ourmissionimage}
                alt="تحديات الحملة الانتخابية"
                className="rounded-2xl shadow-xl w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Digital Solution Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 mb-20 border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            الحل مع "صوتك أمانة" – منصة رقمية متكاملة تُمكِّنك من إدارة حملتك الانتخابية بالكامل عبر هاتفك الذكي
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'صفحة رسمية متكاملة',
                description: 'ربط جميع حساباتك الانتخابية وتقديم واجهة احترافية للنشر المتزامن عبر مختلف المنصات',
                icon: '🌐'
              },
              {
                title: 'تواصل مباشر',
                description: 'توفير وسائل تواصل مباشرة ومتنوعة تشمل الرسائل النصية والصوتية والفيديو والدردشة الجماعية',
                icon: '💬'
              },
              {
                title: 'تحليلات دقيقة',
                description: 'تحليلات دقيقة لعدد المؤيدين، أماكن تواجدهم، واحتياجاتهم الانتخابية',
                icon: '📊'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Electronic Voting Timeline */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            <span className="inline-flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              ٣ تصويتات افتراضيه إلكترونية حقيقية قبل الانتخابات
            </span>
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200 hidden md:block"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  time: '٣ أسابيع قبل الانتخابات',
                  description: 'تشوف هل التأييد زاد لو قل',
                  icon: '📈',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  time: 'أسبوع قبل الانتخابات',
                  description: 'تشوف شصار من حملتك',
                  icon: '📣',
                  color: 'from-blue-600 to-blue-700'
                },
                {
                  time: 'يوم الانتخابات',
                  description: 'تگدر تعرف منو وصل لمركز الاقتراع وانتخبك',
                  icon: '✅',
                  color: 'from-blue-700 to-blue-800'
                }
              ].map((phase, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="relative text-center"
                >
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center text-white text-3xl shadow-lg relative z-10`}>
                    {phase.icon}
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">{phase.time}</h4>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {[
            { icon: "🎯", title: "استهداف دقيق", desc: "وصول مباشر للناخبين المستهدفين" },
            { icon: "💰", title: "توفير التكاليف", desc: "خفض 80% من تكاليف الحملة" },
            { icon: "📱", title: "إدارة سهلة", desc: "كل شيء من هاتفك الذكي" },
            { icon: "🔒", title: "أمان وخصوصية", desc: "حماية كاملة لبياناتك" }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 text-center"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                "صوتك أمانة" - مكتبك الانتخابي الرقمي المتكامل
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-sm">
                ليست مجرد تطبيق، بل هي منصة رقمية متكاملة تجمع بين إدارة الحملة، التواصل مع الجمهور، وتحليل البيانات في مكان واحد، لتمنحك سيطرة كاملة وفعالية عالية وبتكلفة أقل.
              </p>
              <motion.button 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowComingSoon(true)}
              >
                ابدأ حملتك الذكية الآن
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>


        {/* Coming Soon Popup */}
        {showComingSoon && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setShowComingSoon(false)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">قريباً</h3>
              <p className="text-gray-600 mb-6 text-sm">
                ميزة إطلاق الحملة الذكية ستكون متاحة قريباً.
                <br />تابعنا لمزيد من التحديثات!
              </p>
              <button
                onClick={() => setShowComingSoon(false)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                حسناً
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MissionSection;