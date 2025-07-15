import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import newlogo from "../assets/newlogo.jpg"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-white via-blue-50/50 to-blue-100 overflow-hidden" dir="rtl">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [180, 360, 180]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      {/* Decorative Top Border */}
      <div className="relative h-1 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & About Section */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img
                  src={newlogo}
                  alt="شعار الانتخابات"
                  className="relative h-16 w-auto rounded-xl border-2 border-white bg-white shadow-lg"
                />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
                  صوتك أمانة
                </h3>
                <span className="text-xs text-blue-700 font-medium mt-1 block">منصة الانتخابات البرلمانية العراقية</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              نحن ملتزمون بضمان انتخابات حرة ونزيهة وشفافة لمستقبل أفضل للعراق. <span className="text-blue-700 font-semibold">صوتك أمانة</span> هو جسر بين المواطن وصندوق الاقتراع.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-blue-900 relative inline-block">
              <span className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
              <span className="pr-4">روابط سريعة</span>
            </h4>
            <ul className="space-y-3">
              {[
                { text: 'الصفحة الرئيسية', link: '/' },
                { text: 'من نحن', link: '/about' },
                { text: 'حلول المرشحين', link: '/candidate-solutions' },
                { text: 'حلول الناخبين', link: '/voter-solutions' },
                { text: 'تسجيل مسبق', link: '/register' },
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={item.link}
                    className="group flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-300"
                  >
                    <span className="p-1 bg-gray-100 rounded-full group-hover:bg-blue-100 transition-colors">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </span>
                    <span className="relative">
                      {item.text}
                      <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-blue-900 relative inline-block">
              <span className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
              <span className="pr-4">معلومات التواصل</span>
            </h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start gap-3 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">العنوان الرئيسي</h5>
                  <p className="text-gray-600">بغداد، العراق</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start gap-3 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">الخط الساخن</h5>
                  <p className="text-gray-600" dir="ltr">+964 787 380 5425</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-start gap-3 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">البريد الإلكتروني</h5>
                  <p className="text-gray-600" dir="ltr">info@sotakamanah.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Mission Statement / Slogan */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-blue-900 relative inline-block">
              <span className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></span>
              <span className="pr-4">رؤيتنا</span>
            </h4>
            <motion.div 
              className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 border border-blue-100"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/20 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-200/20 rounded-full translate-y-8 -translate-x-8"></div>
              <p className="relative text-blue-900 font-semibold">
                معاً نحو عراق ديمقراطي شفاف، حيث يكون صوت كل مواطن مسموعاً وفاعلاً في بناء المستقبل.
              </p>
            </motion.div>
            <div className="flex items-center gap-3 mt-4">
              <motion.div 
                className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <span className="text-blue-700 font-bold">صوتك أمانة، مستقبلك بيدك</span>
            </div>
          </motion.div>
        </div>

        {/* Social Media & Store Links */}
        <motion.div 
          className="mt-16 pt-8 border-t border-blue-200/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Social Media Links */}
              <motion.a
                href="https://wa.me/9647873805425"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                تواصل معنا
              </motion.a>
            </div>

            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-gray-600 text-sm">
                © {currentYear} صوتك أمانة. جميع الحقوق محفوظة.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                منصة الانتخابات البرلمانية العراقية
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;