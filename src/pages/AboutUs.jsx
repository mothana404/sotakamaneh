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
      date: "بعد شهرين",
      description: "إطلاق تطبيق الهاتف الذكي الكامل",
      status: "upcoming"
    },
    {
      phase: "المرحلة الثالثة",
      date: "قبل الانتخابات",
      description: "تفعيل جميع المميزات والخدمات",
      status: "future"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/40 py-24 pt-36" dir="rtl">
        {/* Background decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8">
              <span className="bg-gradient-to-l from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                من نحن
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
            className="mb-24"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 md:p-16 border border-gray-100">
              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-blue-900 mb-6">رؤيتنا</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    نسعى لإحداث نقلة نوعية في العملية الانتخابية من خلال تطبيق "صوتك أمانة" 
                    الذي سيكون متاحاً خلال شهرين. نؤمن بأن التحول الرقمي ليس مجرد رفاهية، 
                    بل ضرورة لبناء ديمقراطية حقيقية وفعالة.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    هدفنا هو التخفيف من الأعباء الكثيرة التي تواجه المرشحين والناخبين على حد سواء، 
                    وخلق بيئة انتخابية أكثر شفافية ومصداقية.
                  </p>
                </div>
                <div className="relative">
                  <motion.div 
                    className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-6xl mb-4">📱</div>
                    <h3 className="text-xl font-bold mb-4">تطبيق صوتك أمانة</h3>
                    <p className="text-blue-100">
                      قريباً على متاجر التطبيقات
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                        <span className="text-sm">iOS</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                        <span className="text-sm">Android</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* How it Changes Elections */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-blue-900 text-center mb-16"
            >
              كيف يغير "صوتك أمانة" مبدأ الانتخابات؟
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -8 }}
                >
                  <div className="text-5xl mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-blue-900 mb-6">{benefit.title}</h3>
                  <ul className="space-y-4">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Our Values */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-blue-900 text-center mb-16"
            >
              قيمنا الأساسية
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-5xl shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Timeline */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-blue-900 text-center mb-16"
            >
              خارطة الطريق
            </motion.h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pl-8' : 'text-left pr-8'}`}>
                      <div className={`bg-white rounded-2xl shadow-xl p-6 ${item.status === 'active' ? 'border-2 border-blue-500' : ''}`}>
                        <h3 className="text-xl font-bold text-blue-900">{item.phase}</h3>
                        <p className="text-blue-600 font-semibold mb-2">{item.date}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      {item.status === 'active' && (
                        <motion.div
                          className="w-3 h-3 bg-white rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Additional Benefits */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-12 md:p-16 text-white overflow-hidden relative"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative">
              <h2 className="text-3xl font-bold mb-12 text-center">فوائد إضافية لتطبيق صوتك أمانة</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">الوصول الشامل</h3>
                      <p className="text-blue-100">يمكن للجميع المشاركة بغض النظر عن موقعهم الجغرافي</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">بيانات دقيقة</h3>
                      <p className="text-blue-100">إحصائيات فورية ودقيقة تساعد في فهم التوجهات</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">صديق للبيئة</h3>
                      <p className="text-blue-100">تقليل استخدام الورق والمواد الدعائية التقليدية</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">سرعة الأداء</h3>
                      <p className="text-blue-100">نتائج فورية وتحديثات لحظية</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">توفير التكاليف</h3>
                      <p className="text-blue-100">خفض تكاليف الحملات الانتخابية بنسبة تصل إلى 80%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">تعزيز المشاركة</h3>
                      <p className="text-blue-100">زيادة نسبة المشاركة الشبابية في العملية الانتخابية</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-blue-900 text-center mb-16"
            >
              فريقنا
            </motion.h2>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center border border-gray-100"
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                نحن فريق من المطورين والمصممين وخبراء الانتخابات الذين يعملون بشغف لتحقيق رؤيتنا. 
                نؤمن بأن التغيير يبدأ من هنا، ونعمل على مدار الساعة لضمان إطلاق التطبيق في موعده المحدد.
              </p>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <p className="text-gray-600">عضو فريق</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5</div>
                  <p className="text-gray-600">سنوات خبرة</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <p className="text-gray-600">دعم متواصل</p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* CTA Section */}

        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;