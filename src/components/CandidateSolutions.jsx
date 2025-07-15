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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const challenges = [
    "صارف آلاف الدولارات على كارتات تنرمي بالشارع",
    "تشتري لافتات، وتنشك أول مطرة",
    "تدفع للمراقب الانتخابي ١٠٠ دولار",
    "صعوبة التواصل مع الناخبين بشفافية",
    "لا توجد وسيلة لمعرفة من سيصوّت فعلياً",
  ];

  const solutions = [
    {
      title: "تصويتات إلكترونية استباقية",
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
      items: [
        "رسائل فورية للمتفاعلين",
        "مجموعات دردشة خاصة",
        "جدولة الرسائل والفيديوهات",
        "متابعة مستمرة للجمهور",
      ],
    },
    {
      title: "تحليلات وتقارير متقدمة",
      items: [
        "خرائط حرارية للانتشار",
        "مقارنة مع المنافسين",
        "تقييم التفاعل والأداء",
        "إحصائيات دقيقة ومباشرة",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <MissionSection />
      <div
        className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/50 min-h-screen py-24 overflow-hidden"
        dir="rtl"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5">
              <span className="bg-gradient-to-l from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                حلول المرشح الذكية
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
              نقدم لك مكتبك الانتخابي الرقمي المتكامل - كل ما تحتاجه لإدارة
              حملتك بكفاءة وفعالية
            </p>
          </motion.div>

          {/* Challenges Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-8 mb-16 border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 to-orange-50/40 rounded-3xl"></div>
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">
                التحديات التي نحلها
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group relative bg-gradient-to-br from-white to-red-50/70 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-red-100/60 hover:border-red-200"
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.span
                        className="text-red-500 text-2xl font-bold flex-shrink-0"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        ✗
                      </motion.span>
                      <p className="text-gray-700 text-base leading-relaxed font-normal">
                        {challenge}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/40 rounded-2xl shadow-xl p-5 md:p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100/60 group overflow-hidden"
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                    <motion.span
                      className="text-blue-500 text-3xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ●
                    </motion.span>
                    {solution.title}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {solution.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        className="bg-gradient-to-br from-blue-100/80 via-indigo-100/80 to-purple-100/80 p-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center backdrop-blur-sm"
                      >
                        <p className="text-gray-700 font-normal text-base">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-20 mb-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-xl md:text-3xl font-bold text-blue-900 mb-6">
                مميزات تطبيق صوتك أمانة
              </h2>
              <div className="flex items-center justify-center gap-3">
                <motion.div
                  className="h-1 w-16 bg-gradient-to-r from-blue-300 to-blue-400 rounded-full"
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="h-1 w-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                  animate={{ scaleX: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="h-1 w-16 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  icon: "📊",
                  title: "تحليلات متقدمة",
                  features: [
                    "خوارزمية خاصة لتحليل المنافسين",
                    "تقارير حية لحظية يومية",
                    "تحليلات تصويت استباقية",
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
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-transparent hover:border-blue-200 overflow-hidden"
                  whileHover={{ y: -8 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <motion.div
                      className="text-lg mb-4 inline-block"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      {feature.title}
                    </h3>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <motion.svg
                            className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                          >
                            <motion.path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.5, delay: idx * 0.1 }}
                            />
                          </motion.svg>
                          <span className="text-gray-600 text-md leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {/* <motion.div
                      className="mt-4"
                      whileHover={{ x: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <button className="group/btn text-blue-600 font-bold text-base hover:text-blue-700 transition-colors flex items-center gap-2">
                        اكتشف المزيد
                        <svg
                          className="w-4 h-4 transform group-hover/btn:-translate-x-2 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                    </motion.div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative mt-16 text-center overflow-hidden"
          >
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white rounded-3xl p-16 md:p-20">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                ></div>
              </div>

              <motion.div
                className="relative z-10"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  ابدأ حملتك الذكية اليوم
                </h2>
                <p className="text-base md:text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
                  صوتك أمانة - مكتبك الانتخابي الرقمي المتكامل لحملة انتخابية
                  ناجحة
                </p>
                <motion.button
                  className="bg-white text-blue-900 px-8 py-3 rounded-xl text-base font-bold 
                           hover:bg-blue-50 transition-all transform hover:-translate-y-2 hover:shadow-2xl
                           inline-flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/register')}
                >
                  سجل الآن
                  <motion.svg
                    className="w-4 h-4 transform group-hover:-translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CandidateSolutions;
