import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const cards = [
  {
    title: "من نحن",
    description: "تعرف على فريقنا وقصتنا ورؤيتنا في تطوير العملية الانتخابية",
    path: "/about",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    features: [
      "فريق متخصص في التقنية الانتخابية",
      "خبرة تزيد عن 10 سنوات في المجال",
      "رؤية واضحة لمستقبل الانتخابات الرقمية"
    ]
  },
  {
    title: "ما الذي يبحث عنه المرشح",
    description: "اكتشف كيف نساعد المرشحين في إدارة حملاتهم الانتخابية بكفاءة",
    path: "/candidate-solutions",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    features: [
      "أدوات متقدمة لإدارة الحملات الانتخابية",
      "تواصل مباشر مع الناخبين",
      "تحليلات دقيقة للأداء الانتخابي"
    ]
  },
  {
    title: "ما الذي يبحث عنه الناخب",
    description: "تعرف على كيفية مساعدة الناخبين في اتخاذ قرارهم بشكل مدروس",
    path: "/voter-solutions",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    features: [
      "معلومات شاملة عن جميع المرشحين",
      "مقارنة سهلة بين البرامج الانتخابية",
      "تواصل امن وموثوق"
    ]
  }
];

const NavigationCards = () => {
  const navigate = useNavigate();

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white" dir="rtl">
      {/* Creative Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, #3b82f6 0, transparent 50%),
                radial-gradient(circle at 80% 80%, #60a5fa 0, transparent 50%),
                radial-gradient(circle at 40% 80%, #93c5fd 0, transparent 50%)
              `
            }}
          />
        </div>
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 0%, transparent 49%, #e0e7ff 49%, #e0e7ff 51%, transparent 51%, transparent 100%),
              linear-gradient(0deg, transparent 0%, transparent 49%, #e0e7ff 49%, #e0e7ff 51%, transparent 51%, transparent 100%)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Animated Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-15"
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
        >
          <motion.div variants={itemAnimation}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-600"></div>
              <span className="text-blue-700 font-light tracking-widest text-sm uppercase">
                خدماتنا المتميزة
              </span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-blue-600"></div>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={itemAnimation}
            className="text-xl md:text-2xl lg:text-4xl font-bold text-slate-900"
          >
            استكشف 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700"> خدماتنا</span>
          </motion.h2>
          
          <motion.p 
            variants={itemAnimation}
            className="text-lg text-gray-600 font-light max-w-3xl mx-auto"
          >
            كل ما تحتاجه كناخب أو مرشح في مكان واحد
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="group relative"
            >
              <motion.button
                onClick={() => navigate(card.path)}
                className="relative w-full h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-200"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Card Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-[1px] bg-white rounded-2xl" />
                
                {/* Hover Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/50 transition-all duration-500" />
                
                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div 
                    className="mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-blue-600 rounded-xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white shadow-lg">
                        {card.icon}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {card.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-8 flex-grow">
                    {card.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        viewport={{ once: true }}
                      >
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-200 transition-colors duration-300">
                          <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA Arrow */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      اكتشف المزيد
                    </span>
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg 
                        className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300 transform group-hover:-translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Decorative Corner Element */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl" />
                </div>
              </motion.button>
              
              {/* Shadow Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-105" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-300" />
            <p className="text-gray-500 font-light">
              انضم إلى آلاف المستخدمين الذين يثقون بمنصتنا
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-300" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-px h-96 bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-20" />
      <div className="absolute top-1/2 right-0 w-px h-96 bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-20" />
    </section>
  );
};

export default NavigationCards;