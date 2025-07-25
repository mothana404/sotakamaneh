import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CandidateSlider = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
            constituency_id: c.list_number,
            province: c.constituency?.name || "غير محدد",
            serialNumber: c.serial_number,
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
      <section className="py-20 relative overflow-hidden">
        {/* Creative Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
            <svg width="100%" height="100%" viewBox="0 0 400 400">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#1e40af"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-10 blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-200 rounded-full opacity-10 blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 flex justify-center items-center min-h-[400px]">
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
      <section className="py-20 relative overflow-hidden">
        {/* Creative Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
            <svg width="100%" height="100%" viewBox="0 0 400 400">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#1e40af"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <div className="text-red-600 text-xl mb-4">⚠️</div>
            <p className="text-gray-700">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden" dir="rtl">
      {/* Creative Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>

        {/* Geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <svg width="100%" height="100%" viewBox="0 0 400 400">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#1e40af"
                  strokeWidth="1"
                />
              </pattern>
              <pattern
                id="dots"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1" fill="#1e40af" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#dots)" opacity="0.5" />
          </svg>
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-10 blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-15 blur-lg"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-200 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-1/4 right-20 w-20 h-20 bg-blue-300 rounded-full opacity-20 blur-md"></div>

        {/* Hexagonal pattern */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-[0.02]">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <polygon
              points="100,10 173,50 173,130 100,170 27,130 27,50"
              fill="none"
              stroke="#1e40af"
              strokeWidth="2"
            />
            <polygon
              points="100,30 153,60 153,120 100,150 47,120 47,60"
              fill="none"
              stroke="#1e40af"
              strokeWidth="1"
            />
            <polygon
              points="100,50 133,70 133,110 100,130 67,110 67,70"
              fill="none"
              stroke="#1e40af"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]">
          <svg width="100%" height="100%">
            <line
              x1="0"
              y1="20%"
              x2="100%"
              y2="25%"
              stroke="#1e40af"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="40%"
              x2="100%"
              y2="35%"
              stroke="#1e40af"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="60%"
              x2="100%"
              y2="65%"
              stroke="#1e40af"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="80%"
              x2="100%"
              y2="75%"
              stroke="#1e40af"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600">المرشحون</span> للانتخابات
            البرلمانية
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </div>

        {/* Slider Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              968: { slidesPerView: 3 },
              1224: { slidesPerView: 4 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="candidate-slider"
          >
            {candidates.map((candidate, index) => (
              <SwiperSlide key={candidate.id}>
                <Link to={`/candidate/${candidate.id}`}>
                  <motion.div
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <path d="M0,0 L64,0 L64,64 Z" fill="#1e40af" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 opacity-5">
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <path d="M0,48 L48,48 L0,0 Z" fill="#1e40af" />
                      </svg>
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10">
                      {/* Image Section */}
                      <div className="relative h-80 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                        <img
                          src={candidate.image}
                          alt={candidate.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src =
                              "https://www.elections.ab.ca/uploads/Candidate.png";
                          }}
                        />

                        {/* Constituency Badge */}
                        <div className="absolute top-4 right-4 z-20">
                          <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm">
                            {candidate.serialNumber
                              ? candidate.serialNumber
                              : ""}
                          </span>
                        </div>
                      </div>

                      {/* Info Section */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                        <div className="transform group-hover:translate-y-[-10px] transition-transform duration-300">
                          <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                            {candidate.name}
                          </h3>

                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 bg-blue-400 rounded-full shadow-sm"></span>
                            <p className="text-sm text-blue-100 drop-shadow">
                              {candidate.list}
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-300 drop-shadow">
                              {candidate.province}
                            </span>
                            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                  />
                                </svg>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <motion.button
            className="relative group w-full sm:w-auto px-8 md:px-16 py-4 md:py-4 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/candidatesPage")}
          >
            {/* Button Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl md:rounded-2xl" />

            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl md:rounded-2xl"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Button Content */}
            <span className="relative flex items-center justify-center gap-2 md:gap-3 text-white font-bold text-base md:text-lg">
              عرض المرشحين
            </span>
          </motion.button>
        </div>
      </div>

      <style jsx>{`
        .candidate-slider {
          padding: 20px 0 80px;
        }

        .candidate-slider .swiper-pagination {
          bottom: 20px;
        }

        .candidate-slider .swiper-pagination-bullet {
          width: 32px;
          height: 4px;
          border-radius: 2px;
          background: #cbd5e1;
          opacity: 0.5;
          transition: all 0.3s ease;
          margin: 0 4px;
        }

        .candidate-slider .swiper-pagination-bullet-active {
          background: linear-gradient(90deg, #1e40af, #3b82f6);
          opacity: 1;
          width: 48px;
          box-shadow: 0 2px 8px rgba(30, 64, 175, 0.3);
        }

        .candidate-slider .swiper-button-next,
        .candidate-slider .swiper-button-prev {
          color: #1e40af;
          background: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .candidate-slider .swiper-button-next:hover,
        .candidate-slider .swiper-button-prev:hover {
          background: #1e40af;
          color: white;
          transform: scale(1.1);
          box-shadow: 0 12px 20px rgba(30, 64, 175, 0.3);
        }

        .candidate-slider .swiper-button-next:after,
        .candidate-slider .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .candidate-slider .swiper-button-next,
          .candidate-slider .swiper-button-prev {
            display: none;
          }

          .candidate-slider {
            padding: 20px 0 60px;
          }
        }

        /* Custom scrollbar for the section */
        .candidate-slider::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        .candidate-slider::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }

        .candidate-slider::-webkit-scrollbar-thumb {
          background: #1e40af;
          border-radius: 3px;
        }

        .candidate-slider::-webkit-scrollbar-thumb:hover {
          background: #1e3a8a;
        }
      `}</style>
    </section>
  );
};

export default CandidateSlider;
