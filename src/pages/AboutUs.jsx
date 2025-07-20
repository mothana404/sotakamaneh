import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const values = [
    {
      icon: "🎯",
      title: "الشفافية",
      description: "نضمن عملية انتخابية شفافة وواضحة للجميع"
    },
    {
      icon: "🤝",
      title: "المصداقية",
      description: "بناء جسور الثقة بين المرشحين والناخبين"
    },
    {
      icon: "💡",
      title: "الابتكار",
      description: "استخدام أحدث التقنيات لتطوير العملية الانتخابية"
    },
    {
      icon: "🛡️",
      title: "الأمان",
      description: "حماية البيانات والخصوصية أولويتنا القصوى"
    }
  ];

  const benefits = [
    {
      title: "للمرشحين",
      icon: "👔",
      items: [
        "إدارة الحملة الانتخابية رقمياً بالكامل",
        "التواصل المباشر مع الناخبين",
        "تحليلات دقيقة للأداء والانتشار",
        "توفير تكاليف الحملات التقليدية"
      ]
    },
    {
      title: "للناخبين",
      icon: "🗳️",
      items: [
        "الوصول السهل لجميع المرشحين",
        "المقارنة الموضوعية بين البرامج",
        "التواصل المباشر مع المرشحين",
        "معرفة مراكز الاقتراع القريبة"
      ]
    },
    {
      title: "للعملية الانتخابية",
      icon: "🏛️",
      items: [
        "زيادة نسبة المشاركة",
        "تقليل الفوضى والعشوائية",
        "توثيق العملية الانتخابية",
        "تعزيز الديمقراطية الرقمية"
      ]
    }
  ];

  const timeline = [
    {
      phase: "المرحلة الأولى",
      date: "متوفر الآن",
      description: "إطلاق الموقع الإلكتروني وبدء التسجيل",
      status: "active"
    },
    {
      phase: "المرحلة الثانية",
      date: "قريباً",
      description: "إطلاق تطبيق الهاتف الذكي الكامل",
      status: "upcoming"
    },
    {
      phase: "المرحلة الثالثة",
      date: "قبل الانتخابات بشهرين",
      description: "تفعيل جميع المميزات والخدمات",
      status: "future"
    }
  ];

  const additionalBenefits = [
    { icon: "🌍", title: "الوصول الشامل", desc: "يمكن للجميع المشاركة بغض النظر عن موقعهم الجغرافي" },
    { icon: "📊", title: "بيانات دقيقة", desc: "إحصائيات فورية ودقيقة تساعد في فهم التوجهات" },
    { icon: "🌱", title: "صديق للبيئة", desc: "تقليل استخدام الورق والمواد الدعائية التقليدية" },
    { icon: "⚡", title: "سرعة الأداء", desc: "نتائج فورية وتحديثات لحظية" },
    { icon: "💰", title: "توفير التكاليف", desc: "خفض تكاليف الحملات الانتخابية بنسبة تصل إلى 80%" },
    { icon: "🤝", title: "تعزيز المشاركة", desc: "زيادة نسبة المشاركة الشبابية في العملية الانتخابية" }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white" dir="rtl">
        {/* Creative Background Pattern */}
        <div className="fixed inset-0 z-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                من نحن
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                نحن فريق يؤمن بأن التكنولوجيا يمكن أن تحدث ثورة حقيقية في العملية الانتخابية، 
                نعمل على تحويل المبدأ الانتخابي إلى عملية أكثر تفاعلية وأكثر مصداقية
              </p>
            </motion.div>

            {/* Vision Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={fadeInUp}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">رؤيتنا</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    نسعى لإحداث نقلة نوعية في العملية الانتخابية من خلال تطبيق "صوتك أمانة" 
                    الذي سيكون متاح قريباً. نؤمن بأن التحول الرقمي ليس مجرد رفاهية، 
                    بل ضرورة لبناء ديمقراطية حقيقية وفعالة.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    هدفنا هو التخفيف من الأعباء الكثيرة التي تواجه المرشحين والناخبين على حد سواء، 
                    وخلق بيئة انتخابية أكثر شفافية ومصداقية.
                  </p>
                </motion.div>
                <motion.div 
                  variants={scaleIn}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                    <div className="relative">
                      <div className="text-4xl mb-4">📱</div>
                      <h3 className="text-xl font-bold mb-2">تطبيق صوتك أمانة</h3>
                      <p className="text-blue-100 mb-4">قريباً على متاجر التطبيقات</p>
                      <div className="flex gap-3">
                        <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">iOS</span>
                        <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">Android</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Values Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-2xl font-bold text-gray-900 text-center mb-12"
              >
                قيمنا الأساسية
              </motion.h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Benefits Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-2xl font-bold text-gray-900 text-center mb-12"
              >
                كيف يغير "صوتك أمانة" مبدأ الانتخابات؟
              </motion.h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
                  >
                    <div className="flex items-center mb-6">
                      <div className="text-3xl ml-3">{benefit.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {benefit.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mt-0.5 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Timeline Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-2xl font-bold text-gray-900 text-center mb-12"
              >
                خارطة الطريق
              </motion.h2>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  <div className="space-y-8">
                    {timeline.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center"
                      >
                        <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center
                          ${item.status === 'active' ? 'bg-blue-600' : item.status === 'upcoming' ? 'bg-blue-400' : 'bg-gray-300'}`}>
                          <span className="text-white font-bold">{index + 1}</span>
                          {item.status === 'active' && (
                            <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-25"></div>
                          )}
                        </div>
                        <div className="mr-6 flex-1">
                          <div className={`bg-white rounded-lg p-6 shadow-md border ${item.status === 'active' ? 'border-blue-200' : 'border-gray-100'}`}>
                            <h3 className="text-lg font-bold text-gray-900">{item.phase}</h3>
                            <p className="text-blue-600 text-sm font-medium mb-2">{item.date}</p>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Additional Benefits Grid */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
                <motion.h2 
                  variants={fadeInUp}
                  className="text-2xl font-bold text-center mb-12"
                >
                  فوائد إضافية لتطبيق صوتك أمانة
                </motion.h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {additionalBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                    >
                      <div className="flex items-start">
                        <div className="text-3xl ml-3">{benefit.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                          <p className="text-sm text-blue-100">{benefit.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Team Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-2xl font-bold text-gray-900 text-center mb-12"
              >
                فريقنا
              </motion.h2>
              
              <motion.div 
                variants={fadeInUp}
                className="bg-gray-50 rounded-2xl p-12 text-center"
              >
                <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                  نحن فريق من المطورين والمصممين وخبراء الانتخابات الذين يعملون بشغف لتحقيق رؤيتنا. 
                  نؤمن بأن التغيير يبدأ من هنا، ونعمل على مدار الساعة لضمان إطلاق التطبيق في موعده المحدد.
                </p>
                <div className="flex justify-center gap-12 flex-wrap">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <p className="text-sm text-gray-600">عضو فريق</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                    <p className="text-sm text-gray-600">سنوات خبرة</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <p className="text-sm text-gray-600">دعم متواصل</p>
                  </div>
                </div>
              </motion.div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  كن جزءاً من التغيير
                </h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  انضم إلينا في رحلتنا لتحويل العملية الانتخابية وجعلها أكثر شفافية وفعالية
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  ابدأ الآن
                </motion.button>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;