import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'نظام رقمي متكامل',
    subtitle: 'براءة اختراع',
    description: 'أول نظام رقمي انتخابي متكامل مسجل ببراءة اختراع، يضمن الشفافية والسرعة في العملية الانتخابية.',
    badge: 'جديد',
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'شفافية تامة',
    subtitle: 'مراقبة فورية',
    description: 'تواصل مباشر مع المرشحين، تقارير فورية، ومراقبة دولية لضمان نزاهة الانتخابات.',
    badge: 'مميز',
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'تصويت افتراضي إلكتروني آمن',
    subtitle: 'سهولة وسرعة',
    description: 'تصويت افتراضي إلكتروني سهل وسريع يضمن أمان صوتك وسرعة ظهور النتائج، مع دعم فني متواصل.',
    badge: 'آمن',
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'نتائج فورية وموثوقة',
    subtitle: 'دقة وشفافية',
    description: ' عرض النتائج بشكل فوري وموثوق، مع تقارير تفصيلية لكل دائرة انتخابية والى كل مرشح. ',
    badge: 'فوري',
  },
];

const FeaturesSection = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects for different elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const leftElementsX = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rightElementsX = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  return (
    <section className="py-10 md:py-20 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white" dir="rtl">
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(90deg, #3b82f6 1px, transparent 1px),
              linear-gradient(#3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      {/* Animated Gradient Orbs - Hidden on mobile */}
      <motion.div 
        className="hidden md:block absolute top-20 right-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-blue-200/20 rounded-full blur-3xl"
        style={{ x: rightElementsX }}
      />
      <motion.div 
        className="hidden md:block absolute bottom-20 left-0 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-blue-300/20 rounded-full blur-3xl"
        style={{ x: leftElementsX }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header with Scroll Animation */}
        <motion.div 
          className="text-center mb-16 md:mb-28"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8"
            style={{ scale: scaleProgress }}
          >
            <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-blue-600"></div>
            <span className="text-blue-700 font-light tracking-widest text-xs md:text-sm uppercase">
              منصة انتخابية متقدمة
            </span>
            <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-blue-600"></div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
            ميزات 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700"> استثنائية</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 font-light max-w-3xl mx-auto px-4">
          صوتك امانة هو تجربة رقمية متقدمة تهدف  إلى تعزيز المشاركة والتواصل بكل شفافية ونزاهة وحيادية في الانتخابات البرلمانية العراقية . مع واجهة استخدام عصرية تدعم جميع الأجهزة. التطبيق يوفر تقارير فورية ونتائج لحظية، ويتيح التواصل المباشر بين الناخبين والمرشحين. المنصة تركز على الشفافية، وسرعة الوصول للمعلومات، مع ضمان حماية خصوصية المستخدمين وسهولة الوصول للجميع.          
          </p>
        </motion.div>

        {/* Features Timeline Layout - Mobile Optimized */}
        <div className="relative">
          {/* Central Timeline Line - Hidden on mobile */}
          <motion.div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          {/* Features - Mobile Stack Layout */}
          <div className="space-y-12 md:space-y-14">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <motion.div
                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                          {feature.badge}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-blue-600 font-semibold text-base mb-2">
                      {feature.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description.replace('تشفير', '').replace('تصويت افتراضي إلكتروني مشفر يضمن أمان صوتك وسرعة النتائج، مع دعم فني متواصل.', 'تصويت إلكتروني سهل وسريع يضمن أمان صوتك وسرعة ظهور النتائج، مع دعم فني متواصل.')} 
                    </p>
                  </motion.div>
                </div>

                {/* Desktop Layout */}
                <div className={`hidden md:flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Side */}
                  <motion.div 
                    className="w-1/2 px-12"
                    initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                  >
                    <div className={idx % 2 === 0 ? 'text-right' : 'text-left'}>
                      <motion.span 
                        className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold px-4 py-2 rounded-full mb-6"
                        whileHover={{ scale: 1.05 }}
                      >
                        {feature.badge}
                      </motion.span>
                      
                      <h3 className="text-4xl font-bold text-slate-900 mb-3">
                        {feature.title}
                      </h3>
                      
                      <p className="text-blue-600 font-semibold text-xl mb-4">
                        {feature.subtitle}
                      </p>
                      
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {feature.description.replace('تشفير', '').replace('تصويت افتراضي إلكتروني مشفر يضمن أمان صوتك وسرعة النتائج، مع دعم فني متواصل.', 'تصويت إلكتروني سهل وسريع يضمن أمان صوتك وسرعة ظهور النتائج، مع دعم فني متواصل.')} 
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Icon */}
                  <motion.div 
                    className="relative z-20"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                                        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                      {feature.icon}
                    </div>
                    
                    {/* Animated Ring */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-blue-400"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Empty Side with Decorative Element */}
                  <div className="w-1/2 px-12">
                    <motion.div 
                      className={`h-px bg-gradient-to-${idx % 2 === 0 ? 'l' : 'r'} from-blue-300 to-transparent`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section - Mobile Optimized */}
        <motion.div 
          className="mt-8 md:mt-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl md:rounded-3xl p-5 md:p-8 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <motion.div 
              className="absolute inset-0 opacity-10"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 70%)`,
              }}
            />

            <div className="relative z-10">
              <div className="text-center mb-6 md:mb-10">
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                  لماذا منصة 
                  <span className="text-blue-200"> صوتك أمانة؟</span>
                </h3>
                <p className="text-sm md:text-lg text-blue-100 font-light max-w-3xl mx-auto px-4">
                  نضع بين يديك منصة متكاملة تجمع بين الأمان والشفافية والسهولة، لتضمن لك تجربة انتخابية موثوقة وفعالة.
                </p>
              </div>

              {/* Benefits Grid - Mobile Optimized */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-10">
                {[
                  'حماية خصوصيتك وبياناتك بأحدث معايير الأمان الرقمي',
                  'واجهة سهلة الاستخدام متاحة بجميع اللغات',
                  'دعم فني على مدار الساعة طوال أيام الأسبوع',
                  'تقارير شفافة ونتائج فورية موثقة لجميع الدوائر الانتخابية',
                  'إمكانية المشاركة من أي مكان داخل العراق أو خارجه',
                  'إحصائيات ذكية وتقارير تحليلية تساعد الناخبين والمرشحين وصناع القرار على فهم العملية الانتخابية بشكل أفضل'
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-start gap-2 md:gap-3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-xs md:text-base leading-relaxed">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats Row - Mobile Optimized */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {[
                  { number: '100%', label: 'آمن' },
                  { number: '24/7', label: 'دعم فني' },
                  { number: '100+', label: 'ميزة رقمية' },
                  { number: '∞', label: 'موثوقية' }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-lg md:text-2xl font-bold text-white mb-0.5 md:mb-1">{stat.number}</div>
                    <div className="text-blue-200 text-[10px] md:text-xs uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action - Mobile Optimized */}
        <motion.div 
          className="mt-16 md:mt-20 text-center relative px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Decorative Lines - Hidden on mobile */}
          <motion.div 
            className="hidden md:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 items-center justify-between -z-10"
            style={{ opacity: 0.1 }}
          >
            <motion.div 
              className="w-1/3 h-px bg-gradient-to-r from-transparent to-blue-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div 
              className="w-1/3 h-px bg-gradient-to-l from-transparent to-blue-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <motion.div 
            className="inline-block mb-8 md:mb-12"
            whileInView={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center justify-center gap-2 md:gap-4">
              <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-blue-600"></div>
              <span className="text-blue-700 font-light tracking-widest text-xs md:text-sm uppercase">
                ابدأ رحلتك الانتخابية
              </span>
              <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-blue-600"></div>
            </div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
            جاهز للخطوة 
            <span className="text-blue-600"> التالية؟</span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-xl mb-8 md:mb-16 font-light">
            حمل التطبيق وكن جزءاً من التغيير
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <motion.button 
              className="relative group w-full sm:w-auto px-8 md:px-16 py-4 md:py-4 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowComingSoon(true)}
            >
              {/* Button Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl md:rounded-2xl" />
              
              {/* Hover Effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl md:rounded-2xl"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Button Content */}
              <span className="relative flex items-center justify-center gap-2 md:gap-3 text-white font-bold text-base md:text-lg">
                تحميل التطبيق
                <motion.svg 
                  className="w-5 h-5 md:w-6 md:h-6"
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </motion.svg>
              </span>
            </motion.button>
          </div>
          
          <motion.p 
            className="text-gray-500 text-xs md:text-sm mt-8 md:mt-12 font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            انضم إلى آلاف العراقيين الذين يثقون بمنصتنا
          </motion.p>
        </motion.div>

        {/* Coming Soon Modal - Mobile Optimized */}
        {showComingSoon && (
          <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowComingSoon(false)}
        >
          <motion.div 
            className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 max-w-sm w-full relative"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-3 left-3 md:top-4 md:left-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              onClick={() => setShowComingSoon(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </motion.button>

            <div className="text-center">
              <motion.div 
                className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-6 md:mb-8"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">قريباً</h3>
              <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-lg">
                تطبيق صوتك أمانة سيكون متاحاً قريباً على جميع المتاجر الإلكترونية
              </p>
              
              <motion.button
                onClick={() => setShowComingSoon(false)}
                className="w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                حسناً
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>

    {/* Animated Floating Elements - Smaller on mobile */}
    <motion.div 
      className="absolute top-1/4 left-2 md:left-10 w-16 h-16 md:w-24 md:h-24 bg-blue-100 rounded-full opacity-20 md:opacity-30 blur-xl"
      animate={{
        y: [0, 50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div 
      className="absolute bottom-1/4 right-2 md:right-10 w-20 h-20 md:w-32 md:h-32 bg-blue-200 rounded-full opacity-20 md:opacity-25 blur-xl"
      animate={{
        y: [0, -60, 0],
        scale: [1, 0.8, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div 
      className="hidden md:block absolute top-3/4 right-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-20 blur-lg"
      animate={{
        x: [0, 30, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </section>
);
};

export default FeaturesSection;