import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MissionSection from "../components/MissionSection";
import { useNavigate } from "react-router-dom";

const CandidateSolutions = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const navigate = useNavigate();

  // Animation variants
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const solutions = [
    {
      title: "تصويتات افتراضيه إلكترونية استباقية",
      icon: "📊",
      items: [
        "٤ أسابيع قبل - معرفة الداعمين",
        "٣ أسابيع قبل - قياس التأييد",
        "أسبوع قبل - تقييم الحملة",
        "٣ أيام قبل - الاستعداد النهائي",
        "يوم الانتخابات - متابعة المصوتين",
      ],
    },
    {
      title: "تواصل ذكي مع الناخبين",
      icon: "💬",
      items: [
        "رسائل فورية للمتفاعلين",
        "مجموعات دردشة خاصة",
        "جدولة الرسائل والفيديوهات",
        "متابعة مستمرة للجمهور",
      ],
    },
    {
      title: "تحليلات وتقارير متقدمة",
      icon: "📈",
      items: [
        "خرائط حرارية للانتشار",
        "مقارنة مع المنافسين",
        "تقييم التفاعل والأداء",
        "إحصائيات دقيقة ومباشرة",
      ],
    },
  ];

  const features = [
    {
      icon: "📊",
      title: "تحليلات متقدمة",
      features: [
        "خوارزمية خاصة لتحليل المنافسين",
        "تقارير حية لحظية يومية",
        "تحليلات تصويت افتراضيه استباقية",
      ],
    },
    {
      icon: "📱",
      title: "إدارة محتوى احترافية",
      features: [
        "نشر صور وفيديوهات متعددة",
        "إدارة التعليقات والتفاعلات",
        "تحليل معدل النمو والمشاهدات",
      ],
    },
    {
      icon: "🎯",
      title: "تعبئة انتخابية ذكية",
      features: [
        "دعايات موجهة GPS للناخبين",
        "خطة تعبئة قبل الاقتراع بـ72 ساعة",
        "تقارير مقارنة مع المنافسين",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <MissionSection />
      <div className="min-h-screen bg-white" dir="rtl">
        {/* Creative Background Pattern */}
        <div className="fixed inset-0 z-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#e5e7eb" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
          <div className="absolute top-40 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-20"></div>
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
                حلول المرشح الذكية
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                نقدم لك مكتبك الانتخابي الرقمي المتكامل - كل ما تحتاجه لإدارة
                حملتك بكفاءة وفعالية
              </p>
            </motion.div>

            {/* Solutions Grid */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
            >
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
                الحلول المتكاملة
              </h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white">
                      <div className="text-3xl mb-3">{solution.icon}</div>
                      <h3 className="text-xl font-bold">{solution.title}</h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {solution.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Features Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  مميزات تطبيق صوتك أمانة
                </h2>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-1 w-16 bg-blue-300 rounded-full"></div>
                  <div className="h-1 w-32 bg-blue-600 rounded-full"></div>
                  <div className="h-1 w-16 bg-blue-300 rounded-full"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Process Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20"
            >
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
                كيف تبدأ رحلتك معنا
              </h2>
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block"></div>
                
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { step: "1", title: "التسجيل", desc: "أنشئ حسابك في دقائق" },
                    { step: "2", title: "إعداد الملف", desc: "أضف معلومات حملتك" },
                    { step: "3", title: "البدء بالحملة", desc: "انشر محتواك وتواصل" },
                    { step: "4", title: "تحليل النتائج", desc: "راقب أداء حملتك" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="relative text-center"
                    >
                      <div className="bg-white rounded-full w-24 h-24 mx-auto mb-4 shadow-lg flex items-center justify-center relative z-10">
                        <span className="text-2xl font-bold text-blue-600">{item.step}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-16 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
                  }}></div>
                </div>

                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    ابدأ حملتك الذكية اليوم
                  </h2>
                  <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
                    صوتك أمانة - مكتبك الانتخابي الرقمي المتكامل لحملة انتخابية ناجحة
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/register')}
                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    سجل الآن
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                  <p className="mt-4 text-sm text-blue-200">
                    لا يتطلب بطاقة ائتمان • إلغاء في أي وقت
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CandidateSolutions;