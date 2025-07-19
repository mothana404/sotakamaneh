import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CandidateSlider = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get("https://skyblue-cormorant-755447.hostingersite.com/api/candidates")
      .then((res) => {
        if (res.data && res.data.success && Array.isArray(res.data.data)) {
          const mapped = res.data.data.map((c) => ({
            id: c.id,
            name: c.user.first_name + " " + c.user.last_name,
            list: c.party_bloc_name || "مستقل",
            constituency_id: c.constituency_id,
            province: c.constituency?.name || "غير محدد",
            image:
              c.profile_image ||
              "https://www.elections.ab.ca/uploads/Candidate.png",
          }));
          setCandidates(mapped);
        } else {
          setCandidates([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("حدث خطأ أثناء تحميل بيانات المرشحين");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">جاري تحميل بيانات المرشحين...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <div className="text-red-600 text-xl mb-4">⚠️</div>
            <p className="text-gray-700">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden bg-white" dir="rtl">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hexagon Pattern - Top Right */}
        <div className="absolute -top-24 -right-24 opacity-[0.03]">
          <svg width="400" height="400" viewBox="0 0 400 400">
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse">
              <polygon points="24.5,0 49,14.5 49,43.5 24.5,58 0,43.5 0,14.5" fill="none" stroke="#1e40af" strokeWidth="0.5"/>
            </pattern>
            <rect width="400" height="400" fill="url(#hexagons)" />
          </svg>
        </div>

        {/* Abstract Circles - Bottom Left */}
        <motion.div 
          className="absolute -bottom-32 -left-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-64 h-64 rounded-full border border-blue-100 opacity-30"></div>
          <div className="absolute inset-8 rounded-full border border-blue-100 opacity-40"></div>
          <div className="absolute inset-16 rounded-full border border-blue-100 opacity-50"></div>
        </motion.div>

        {/* Floating Dots */}
        <motion.div
          className="absolute top-40 left-1/4 w-2 h-2 bg-blue-200 rounded-full"
          animate={{ y: [-20, 20, -20], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-1/3 w-3 h-3 bg-blue-300 rounded-full"
          animate={{ y: [20, -20, 20], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Gradient Mesh */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-20 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title Decoration */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-blue-600"></div>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-blue-600"></div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">المرشحون</span> للانتخابات البرلمانية
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            تعرف على المرشحين وبرامجهم الانتخابية للدورة البرلمانية القادمة
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} custom-bullet"></span>`;
              },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
              1280: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="candidate-swiper"
          >
            {candidates.map((candidate, index) => (
              <SwiperSlide key={candidate.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/candidate/${candidate.id}`} className="block group">
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 flex flex-col" style={{ minHeight: '340px', height: '340px' }}>
                      {/* Image Container - Top 50% */}
                      <div className="relative" style={{ height: '60%' }}>
                        <img
                          src={candidate.image}
                          alt={candidate.name}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 border-b-2 border-blue-100"
                          onError={(e) => {
                            e.target.src = "https://www.elections.ab.ca/uploads/Candidate.png";
                          }}
                          style={{ height: '100%', minHeight: '100px', maxHeight: '200px', background: '#f4f7fa' }}
                        />
                        {/* Constituency Badge */}
                        <div className="absolute top-3 right-3 bg-blue-700 text-white px-3 py-1.5 rounded-full shadow-md text-xs font-semibold border border-blue-200">
                          دائرة {candidate.constituency_id}
                        </div>
                      </div>

                      {/* Info Section - Bottom 50% */}
                      <div className="flex-1 flex flex-col justify-between p-4 space-y-2 bg-white">
                        {/* Name */}
                        <h3 className="text-lg font-bold text-blue-900 text-center truncate mb-1">
                          {candidate.name}
                        </h3>
                        {/* Party/List - Compact Design */}
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <p className="text-sm text-gray-700 truncate font-medium">{candidate.list}</p>
                        </div>
                        {/* Province - Very Subtle */}
                        <p className="text-xs text-gray-500 text-center truncate mb-2">
                          {candidate.province}
                        </p>
                        {/* Hover Action Bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-3xl border-t border-blue-100">
                          <div className="flex items-center justify-center gap-2 text-white">
                            <span className="text-sm font-medium">عرض التفاصيل</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="custom-prev absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 lg:-mr-6 bg-white w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-blue-600">
            <svg className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className="custom-next absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 lg:-ml-6 bg-white w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-blue-600">
            <svg className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/candidates">
            <motion.button
              className="group relative inline-flex items-center gap-3 px-8 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-blue-700 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              
              <span className="relative z-10">عرض جميع المرشحين</span>
              <svg className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        .candidate-swiper {
          padding: 10px 10px 50px 10px;
        }

        .candidate-swiper .swiper-pagination {
          bottom: 0;
        }

        .candidate-swiper .custom-bullet {
          width: 8px;
          height: 8px;
          background: #e5e7eb;
          opacity: 1;
          margin: 0 4px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .candidate-swiper .custom-bullet.swiper-pagination-bullet-active {
          width: 24px;
          height: 8px;
          border-radius: 4px;
          background: #2563eb;
        }

        @media (max-width: 768px) {
          .custom-prev,
          .custom-next {
            display: none;
          }
          
          .candidate-swiper {
            padding: 10px 0 40px 0;
          }
        }

        /* RTL Support */
        [dir="rtl"] .custom-prev svg,
        [dir="rtl"] .custom-next svg {
          transform: rotate(180deg);
        }

        [dir="rtl"] .group:hover .custom-prev svg,
        [dir="rtl"] .group:hover .custom-next svg {
          transform: rotate(180deg) translateX(-4px);
        }
      `}</style>
    </section>
  );
};

export default CandidateSlider;