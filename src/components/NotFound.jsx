import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* 404 Number */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-8xl md:text-9xl font-extrabold text-gray-300">
                404
              </h1>
            </motion.div>

            {/* Error Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                الصفحة غير موجودة
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                العودة للصفحة الرئيسية
              </Link>
              <button
                onClick={() => window.history.back()}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                العودة للصفحة السابقة
              </button>
            </motion.div>

            {/* Helpful Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-6">
                صفحات مفيدة
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <Link
                  to="/about"
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100"
                >
                  <div className="text-2xl mb-2">ℹ️</div>
                  <h4 className="font-semibold text-blue-900">من نحن</h4>
                  <p className="text-sm text-gray-600">تعرف على فريقنا ورؤيتنا</p>
                </Link>
                <Link
                  to="/candidate-solutions"
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100"
                >
                  <div className="text-2xl mb-2">👔</div>
                  <h4 className="font-semibold text-blue-900">حلول المرشحين</h4>
                  <p className="text-sm text-gray-600">خدمات خاصة بالمرشحين</p>
                </Link>
                <Link
                  to="/voter-solutions"
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg border border-gray-100"
                >
                  <div className="text-2xl mb-2">🗳️</div>
                  <h4 className="font-semibold text-blue-900">حلول الناخبين</h4>
                  <p className="text-sm text-gray-600">خدمات خاصة بالناخبين</p>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound; 