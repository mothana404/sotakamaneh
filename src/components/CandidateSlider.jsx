// components/CandidateSlider.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const CandidateSlider = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get("https://skyblue-cormorant-755447.hostingersite.com/api/candidates")
      .then((res) => {
        if (res.data && res.data.success && Array.isArray(res.data.data)) {
          // Map API data to slider format
          const mapped = res.data.data.map((c) => ({
            id: c.id,
            name: c.user.first_name + " " + c.user.last_name,
            list: c.party_bloc_name || "-",
            province: c.constituency?.name || "-",
            sequence: c.list_number || c.id,
            image: c.profile_image || "https://www.elections.ab.ca/uploads/Candidate.png",
            additionalInfo: {
              age: "-", // Not provided in API
              education: c.education && c.education.length > 0 ? c.education.map(e => e.degree + " - " + e.institution).join(", ") : "-",
              experience: c.current_position || "-",
              goals: c.campaign_slogan || "-",
              contact: {
                phone: c.phone || "-",
                email: c.user.email || "-",
                social: {
                  facebook: c.facebook_link || "",
                  twitter: c.twitter_link || "",
                },
              },
            },
          }));
          setCandidates(mapped);
        } else {
          setCandidates([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("حدث خطأ أثناء تحميل بيانات المرشحين.");
        setLoading(false);
      });
  }, []);

  //   const Popup = ({ candidate, onClose }) => (
  //     <motion.div
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       exit={{ opacity: 0 }}
  //       className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
  //       onClick={onClose}
  //     >
  //       <motion.div
  //         initial={{ scale: 0.7, opacity: 0, y: 20 }}
  //         animate={{ scale: 1, opacity: 1, y: 0 }}
  //         exit={{ scale: 0.7, opacity: 0, y: 20 }}
  //         transition={{ type: "spring", damping: 25 }}
  //         className="bg-white rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
  //         onClick={e => e.stopPropagation()}
  //         dir="rtl"
  //       >
  //         {/* Header */}
  //         <div className="flex justify-between items-start mb-8">
  //           <div className="flex items-center gap-6">
  //             <div className="relative">
  //               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-50"></div>
  //               <img
  //                 src={candidate.image}
  //                 alt={candidate.name}
  //                 className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
  //               />
  //             </div>
  //             <div>
  //               <h3 className="text-3xl font-bold text-gray-900 mb-1">{candidate.name}</h3>
  //               <p className="text-blue-600 font-medium flex items-center gap-2">
  //                 <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
  //                 {candidate.list}
  //               </p>
  //             </div>
  //           </div>
  //           <motion.button
  //             whileHover={{ scale: 1.1, rotate: 90 }}
  //             whileTap={{ scale: 0.9 }}
  //             onClick={onClose}
  //             className="p-2 rounded-full hover:bg-gray-100 transition-colors"
  //           >
  //             <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  //             </svg>
  //           </motion.button>
  //         </div>

  //         {/* Info Grid */}
  //         <div className="grid md:grid-cols-2 gap-8 mb-8">
  //           <motion.div
  //             className="space-y-4"
  //             initial={{ opacity: 0, x: -20 }}
  //             animate={{ opacity: 1, x: 0 }}
  //             transition={{ delay: 0.1 }}
  //           >
  //             <InfoItem
  //               icon="🏛️"
  //               title="المحافظة"
  //               value={candidate.province}
  //               color="from-blue-500 to-blue-600"
  //             />
  //             <InfoItem
  //               icon="🔢"
  //               title="التسلسل"
  //               value={candidate.sequence}
  //               color="from-purple-500 to-purple-600"
  //             />
  //             <InfoItem
  //               icon="📅"
  //               title="العمر"
  //               value={candidate.additionalInfo.age}
  //               color="from-green-500 to-green-600"
  //             />
  //             <InfoItem
  //               icon="🎓"
  //               title="التحصيل الدراسي"
  //               value={candidate.additionalInfo.education}
  //               color="from-amber-500 to-amber-600"
  //             />
  //           </motion.div>
  //           <motion.div
  //             className="space-y-4"
  //             initial={{ opacity: 0, x: 20 }}
  //             animate={{ opacity: 1, x: 0 }}
  //             transition={{ delay: 0.2 }}
  //           >
  //             <InfoItem
  //               icon="💼"
  //               title="الخبرة"
  //               value={candidate.additionalInfo.experience}
  //               color="from-indigo-500 to-indigo-600"
  //             />
  //             <InfoItem
  //               icon="🎯"
  //               title="الأهداف"
  //               value={candidate.additionalInfo.goals}
  //               color="from-rose-500 to-rose-600"
  //             />
  //           </motion.div>
  //         </div>

  //         {/* Contact Section */}
  //         <motion.div
  //           className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6"
  //           initial={{ opacity: 0, y: 20 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ delay: 0.3 }}
  //         >
  //           <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
  //             <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg">
  //               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  //               </svg>
  //             </div>
  //             معلومات التواصل
  //           </h4>
  //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //             <motion.a
  //               href={`tel:${candidate.additionalInfo.contact.phone}`}
  //               className="flex items-center gap-3 bg-white p-4 rounded-xl hover:shadow-md transition-all group"
  //               whileHover={{ x: 5 }}
  //             >
  //               <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
  //                 <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  //                 </svg>
  //               </div>
  //               <span className="text-gray-700 font-medium">{candidate.additionalInfo.contact.phone}</span>
  //             </motion.a>
  //             <motion.a
  //               href={`mailto:${candidate.additionalInfo.contact.email}`}
  //               className="flex items-center gap-3 bg-white p-4 rounded-xl hover:shadow-md transition-all group"
  //               whileHover={{ x: 5 }}
  //             >
  //               <div className="p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
  //                 <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  //                 </svg>
  //               </div>
  //               <span className="text-gray-700 font-medium">{candidate.additionalInfo.contact.email}</span>
  //             </motion.a>
  //           </div>
  //         </motion.div>
  //       </motion.div>
  //     </motion.div>
  //   );

  const InfoItem = ({ icon, title, value, color }) => (
    <div className="relative p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <h5 className="text-sm font-semibold text-gray-500 mb-1">{title}</h5>
          <p className="text-gray-900 font-medium">{value}</p>
        </div>
      </div>
      <div
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity`}
      ></div>
    </div>
  );

  if (loading) {
    return (
      <section className="py-20 flex justify-center items-center min-h-[300px]">
        <div className="text-xl font-bold text-blue-600 animate-pulse">جاري تحميل المرشحين...</div>
      </section>
    );
  }
  if (error) {
    return (
      <section className="py-20 flex justify-center items-center min-h-[300px]">
        <div className="text-xl font-bold text-red-600">{error}</div>
      </section>
    );
  }

  return (
    <section
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
      dir="rtl"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          className="mb-16 text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            تعرف على المرشحين المميزين
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            <span className="relative">
              <span className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-lg"></span>
              <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                المرشحون
              </span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl">
            اكتشف السير الذاتية، الإنجازات، وتواصل مع المرشحين بسهولة عبر منصتنا
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
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
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="relative pb-16"
        >
          {candidates.map((candidate, index) => (
            <SwiperSlide key={`${candidate.id}-${index}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer my-8"
                onClick={() => setSelectedCandidate(candidate)}
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/5 transition-all duration-300"></div>

                {/* Card Content */}
                {/* Card Content */}
                {/* /candidate/${candidate.id} */}
                <div className="relative group">
                  <Link
                    to={`/candidate/${candidate.id}`}
                    className="block h-full"
                  >
                    <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                      {/* Card Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Top Accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                      {/* Content */}
                      <div className="relative p-6 flex flex-col h-full">
                        {/* Profile Image Section */}
                        <div className="relative mx-auto mb-6">
                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 scale-110"></div>

                          {/* Image Container */}
                          <div className="relative">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                              <img
                                src={candidate.image}
                                alt={candidate.name}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>

                            {/* Sequence Badge */}
                            <motion.div
                              className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg"
                              whileHover={{ scale: 1.1 }}
                              initial={{ scale: 0.9 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              #{candidate.sequence}
                            </motion.div>
                          </div>
                        </div>

                        {/* Candidate Info */}
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                            {candidate.name}
                          </h3>

                          {/* Info Items */}
                          <div className="space-y-3 mb-6 flex-1">
                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors duration-300">
                              <div className="p-2 bg-white rounded-lg shadow-sm">
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
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                  />
                                </svg>
                              </div>
                              <span className="text-gray-700 font-medium text-sm">
                                {candidate.list}
                              </span>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg group-hover:bg-indigo-50 transition-colors duration-300">
                              <div className="p-2 bg-white rounded-lg shadow-sm">
                                <svg
                                  className="w-4 h-4 text-indigo-600"
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
                              <span className="text-gray-700 font-medium text-sm">
                                {candidate.province}
                              </span>
                            </div>
                          </div>

                          {/* CTA Section */}
                          <div className="relative mt-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                            <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 group-hover:from-blue-600 group-hover:to-indigo-600 rounded-xl p-3 transition-all duration-300">
                              <div className="flex items-center justify-center gap-2 text-blue-600 group-hover:text-white font-semibold transition-colors duration-300">
                                <span>عرض التفاصيل</span>
                                <motion.svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  animate={{ x: 0 }}
                                  whileHover={{ x: 5 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                  }}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                  />
                                </motion.svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Decorative Corner Elements */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100/50 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-indigo-100/50 to-transparent rounded-tr-full transform -translate-x-6 translate-y-6 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                    </div>
                  </Link>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-600/10 to-transparent rounded-bl-full"></div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all group">
          <svg
            className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transform rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all group">
          <svg
            className="w-6 h-6 text-gray-600 group-hover:text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 4px;
          background: linear-gradient(to right, #2563eb, #4f46e5);
        }
      `}</style>
    </section>
  );
};

const InfoRow = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-gray-600 group-hover:text-gray-700 transition-colors">
    <div className="p-1.5 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
      {icon}
    </div>
    <span className="font-medium">{text}</span>
  </div>
);

export default CandidateSlider;
