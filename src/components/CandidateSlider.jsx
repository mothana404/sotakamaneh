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
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white">
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
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white">
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
    <section
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white"
      dir="rtl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #3b82f6 1px, transparent 1px),
              linear-gradient(#3b82f6 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"
        animate={{
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-blue-600"></div>
            <span className="text-blue-700 font-light tracking-widest text-sm uppercase">
              مرشحو الانتخابات البرلمانية
            </span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-blue-600"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            تعرف على
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
              {" "}
              المرشحين
            </span>
          </h2>

          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            استعرض قائمة المرشحين للانتخابات البرلمانية وتعرف على برامجهم
            الانتخابية
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="pb-16"
          >
            {candidates.map((candidate, index) => (
              <SwiperSlide key={candidate.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="h-full w-64"
                >
                  <Link
                    to={`/candidate/${candidate.id}`}
                    className="block h-full"
                  >
                    <motion.div
                      className="relative w-80 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100"
                      whileHover={{ y: -5 }}
                    >
                      {/* Top Border Accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-700"></div>

                      {/* Candidate Image */}
                      <div className="relative h-48 bg-gradient-to-b from-blue-50 to-blue-100 overflow-hidden">
                        <img
                          src={candidate.image}
                          alt={candidate.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src =
                              "https://www.elections.ab.ca/uploads/Candidate.png";
                          }}
                        />

                        {/* Constituency Badge */}
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                          <span className="text-blue-700 font-bold text-sm">
                            {candidate.constituency_id}
                          </span>
                        </div>
                      </div>

                      {/* Candidate Info */}
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 text-center line-clamp-1">
                          {candidate.name}
                        </h3>

                        {/* Info Grid */}
                        <div className="space-y-2">
                          {/* List/Party */}
                          <div className="flex items-center gap-2 bg-blue-50 p-2 rounded-lg">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg
                                className="w-4 h-4 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700 text-sm font-medium line-clamp-1 flex-1">
                              {candidate.list}
                            </span>
                          </div>

                          {/* Province */}
                          <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg">
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg
                                className="w-4 h-4 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            </div>
                            <span className="text-gray-700 text-sm font-medium line-clamp-1 flex-1">
                              {candidate.province}
                            </span>
                          </div>
                        </div>

                        {/* View Details Button */}
                        <motion.div
                          className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-2 rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-shadow duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          عرض التفاصيل
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all group flex items-center justify-center -mr-6">
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-blue-600"
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
          <button className="swiper-button-next-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all group flex items-center justify-center -ml-6">
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/candidates">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              عرض جميع المرشحين
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper {
          padding: 20px 0 60px 0;
        }

        .swiper-slide {
          height: auto;
        }

        .swiper-pagination {
          bottom: 0 !important;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 32px;
          height: 8px;
          border-radius: 4px;
          background: linear-gradient(to right, #2563eb, #1d4ed8);
        }

        .swiper-button-next-custom:after,
        .swiper-button-prev-custom:after {
          display: none;
        }

        @media (max-width: 640px) {
          .swiper-button-next-custom,
          .swiper-button-prev-custom {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default CandidateSlider;
