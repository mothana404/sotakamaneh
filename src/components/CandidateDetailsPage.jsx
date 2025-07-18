import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Icon } from "@iconify/react";
import html2canvas from "html2canvas";

const CandidateDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cardRef = useRef(null);
  const [profileImageDataUrl, setProfileImageDataUrl] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchCandidate();
  }, [id]);

  useEffect(() => {
    // When candidate is loaded, fetch the image as a data URL
    async function fetchImageAsDataUrl() {
      if (candidate && candidate.profile_image) {
        try {
          // Try direct fetch first
          const res = await fetch(candidate.profile_image, { mode: 'cors' });
          if (!res.ok) throw new Error('CORS error');
          const blob = await res.blob();
          const reader = new FileReader();
          reader.onloadend = () => setProfileImageDataUrl(reader.result);
          reader.readAsDataURL(blob);
        } catch (err) {
          // Fallback: Use a CORS proxy
          try {
            const corsProxy = 'https://corsproxy.io/?';
            const res = await fetch(corsProxy + encodeURIComponent(candidate.profile_image));
            const blob = await res.blob();
            const reader = new FileReader();
            reader.onloadend = () => setProfileImageDataUrl(reader.result);
            reader.readAsDataURL(blob);
          } catch (err2) {
            setProfileImageDataUrl("https://www.elections.ab.ca/uploads/Candidate.png");
          }
        }
      } else if (candidate) {
        setProfileImageDataUrl("https://www.elections.ab.ca/uploads/Candidate.png");
      }
    }
    fetchImageAsDataUrl();
  }, [candidate]);

  const fetchCandidate = () => {
    setLoading(true);
    axios
      .get(
        `https://skyblue-cormorant-755447.hostingersite.com/api/candidates/${id}`
      )
      .then((res) => {
        if (res.data?.success && res.data?.data) {
          setCandidate(res.data.data);
        } else {
          setError("لم يتم العثور على بيانات المرشح");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("حدث خطأ أثناء تحميل البيانات");
        setLoading(false);
      });
  };

  const handleShare = async () => {
    if (!candidate || !cardRef.current) return;
    const fullName = `${candidate.user.first_name} ${candidate.user.last_name}`;
    const candidateUrl = `${window.location.origin}/candidate/${candidate.id}`;
    const shareText = `تعرف على المرشح ${fullName}\n${candidate.party_bloc_name || "مستقل"} - ${candidate.constituency?.name}\n${candidate.campaign_slogan || ""}\n${candidateUrl}`;

    // Small delay to ensure image is rendered
    await new Promise(resolve => setTimeout(resolve, 200));

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: "#fff",
        logging: false,
        useCORS: false,
        allowTaint: true,
        imageTimeout: 15000,
      });
      canvas.toBlob(async (blob) => {
        if (
          navigator.canShare &&
          navigator.canShare({ files: [new File([blob], 'candidate-card.png', { type: 'image/png' })] })
        ) {
          // Use Web Share API to share image + text (works on some mobile browsers)
          const file = new File([blob], 'candidate-card.png', { type: 'image/png' });
          try {
            await navigator.share({
              files: [file],
              title: `بطاقة المرشح: ${fullName}`,
              text: shareText,
              url: candidateUrl,
            });
            return;
          } catch (err) {
            // fallback below
          }
        }
        // Fallback: Download image and open WhatsApp with URL
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = `${fullName}-election-card.png`;
        link.href = url;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 100);
        setTimeout(() => {
          const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
          window.open(whatsappUrl, '_blank');
          alert('تم تحميل صورة بطاقة المرشح. يمكنك الآن إرسالها مع الرابط عبر واتساب.');
        }, 1000);
      }, "image/png");
    } catch (err) {
      // Fallback: Just open WhatsApp with the URL
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
      window.open(whatsappUrl, '_blank');
      alert('تعذر إنشاء صورة البطاقة تلقائياً. تم إرسال الرابط فقط.');
    }
  };

  // Remove the SocialShareButtons component since we're integrating WhatsApp into main share button

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !candidate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <Icon icon="mdi:alert-circle" className="text-5xl text-red-500 mx-auto mb-4" />
          <p className="text-xl text-gray-700 mb-4">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            العودة للرئيسية
          </button>
        </div>
      </div>
    );
  }

  const fullName = `${candidate.user.first_name} ${candidate.user.last_name}`;
  const profileImage = candidate.profile_image || "https://www.elections.ab.ca/uploads/Candidate.png";
  const bannerImage = candidate.profile_banner_image || "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200";

  return (
    <>
      {/* Hidden Share Card */}
      <div className="fixed -left-[9999px]">
        <div ref={cardRef}>
          {profileImageDataUrl && (
            <ShareCard candidate={candidate} fullName={fullName} profileImage={profileImageDataUrl} />
          )}
        </div>
      </div>

      {/* Main Page */}
      <div className="min-h-screen bg-slate-50" dir="rtl">
        {/* Header with Background Image */}
        <div className="relative h-80 md:h-96 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={bannerImage} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-800/90" />
          </div>
          
          {/* Profile Section */}
          <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-8">
            <div className="max-w-6xl mx-auto flex items-end gap-6">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                src={profileImage}
                alt={fullName}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl object-cover bg-white"
              />
              <div className="flex-1 text-white pb-2">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{fullName}</h1>
                <div className="flex flex-wrap gap-3 text-sm md:text-base">
                  <span className="bg-white/20 backdrop-blur px-4 py-1 rounded-full">
                    {candidate.party_bloc_name || "مستقل"}
                  </span>
                  <span className="bg-white/20 backdrop-blur px-4 py-1 rounded-full">
                    {candidate.constituency?.name}
                  </span>
                  <span className="bg-white/20 backdrop-blur px-4 py-1 rounded-full">
                    #{candidate.constituency_id}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 left-4 flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="bg-white/90 backdrop-blur text-blue-700 px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-lg hover:bg-white"
            >
              <Icon icon="mdi:home" />
              الرئيسية
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShare}
              className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 shadow-lg hover:bg-green-600"
            >
              <Icon icon="logos:whatsapp-icon" className="text-xl" />
              مشاركة WhatsApp
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Biography */}
              {candidate.biography && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <Icon icon="mdi:account" className="text-blue-600" />
                    نبذة شخصية
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{candidate.biography}</p>
                </motion.div>
              )}

              {/* Campaign Slogan */}
              {candidate.campaign_slogan && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white text-center"
                >
                  <Icon icon="mdi:format-quote-open" className="text-3xl mb-2" />
                  <p className="text-xl font-medium italic">{candidate.campaign_slogan}</p>
                  <Icon icon="mdi:format-quote-close" className="text-3xl mt-2" />
                </motion.div>
              )}

              {/* Promises */}
              {candidate.voter_promises && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0}}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <Icon icon="mdi:checkbox-marked-circle" className="text-blue-600" />
                    الوعود الانتخابية
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{candidate.voter_promises}</p>
                </motion.div>
              )}

              {/* Experience & Achievements */}
              <div className="grid md:grid-cols-2 gap-6">
                {candidate.experience && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <Icon icon="mdi:briefcase" className="text-blue-600" />
                      الخبرة المهنية
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{candidate.experience}</p>
                  </motion.div>
                )}

                {candidate.achievements && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-xl p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <Icon icon="mdi:trophy" className="text-blue-600" />
                      الإنجازات
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{candidate.achievements}</p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              
              {/* Quick Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-blue-900 mb-4">معلومات سريعة</h3>
                <div className="space-y-3">
                  <InfoItem 
                    icon="mdi:badge-account" 
                    label="المنصب الحالي" 
                    value={candidate.current_position || "غير محدد"} 
                  />
                  <InfoItem 
                    icon="mdi:school" 
                    label="التعليم" 
                    value={candidate.education?.[0]?.degree || "غير محدد"} 
                  />
                  <InfoItem 
                    icon="mdi:phone" 
                    label="الهاتف" 
                    value={candidate.phone?.slice(0, 5) + "**" || "غير متاح"} 
                  />
                  <InfoItem 
                    icon="mdi:email" 
                    label="البريد" 
                    value={candidate.user?.email || "غير متاح"} 
                  />
                </div>
              </motion.div>

              {/* Skills */}
              {candidate.skills && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-blue-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-blue-900 mb-4">المهارات</h3>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.split('،').map((skill, idx) => (
                      <span 
                        key={idx}
                        className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Social Links */}
              {candidate.facebook_link && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-blue-900 mb-4">التواصل الاجتماعي</h3>
                  <a
                    href={candidate.facebook_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Icon icon="logos:facebook" className="text-2xl" />
                    <span className="text-blue-700 font-medium">Facebook</span>
                  </a>
                </motion.div>
              )}
            </div>
          </div>

          {/* Additional Info */}
          {candidate.additional_info && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 bg-blue-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Icon icon="mdi:information" className="text-blue-600" />
                معلومات إضافية
              </h3>
              <p className="text-gray-700 leading-relaxed">{candidate.additional_info}</p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

// Info Item Component
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <Icon icon={icon} className="text-blue-600 text-xl" />
    <div className="flex-1">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-medium text-gray-800">{value}</p>
    </div>
  </div>
);

// Share Card Component - Enhanced for better image loading
const ShareCard = ({ candidate, fullName, profileImage }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Preload image
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true);
    img.src = profileImage;
  }, [profileImage]);
  
  return (
    <div 
      className="w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden"
      dir="rtl"
    >
      {/* Header */}
      <div className="h-40 bg-gradient-to-br from-blue-600 to-blue-800 relative">
        {/* Pattern background - simplified */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }} />
        </div>
        
        {/* Logo/Title */}
        <div className="absolute top-4 right-4 text-white">
          <h3 className="text-lg font-bold">انتخابات 2025</h3>
          <p className="text-sm opacity-90">صوتك أمانة</p>
        </div>
      </div>
  
      {/* Profile Image */}
      <div className="relative -mt-20 flex justify-center align-middle">
        <div className="relative">
          <div className="w-44 h-44 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
            {imageLoaded ? (
              <img
                src={profileImage}
                alt={fullName}
                className="w-full h-full object-fill"
                crossOrigin="anonymous"
              />
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                <Icon icon="mdi:account" className="text-5xl text-gray-400" />
              </div>
            )}
          </div>
          <div className="absolute pb-4 -bottom-2 -right-2 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-base shadow-lg">
            {candidate.constituency_id}
          </div>
        </div>
      </div>
  
      {/* Content */}
      <div className="text-center px-6 py-3">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{fullName}</h2>
        <p className="text-blue-600 font-medium mb-3">{candidate.party_bloc_name || "مستقل"}</p>
        
        <div className="bg-gray-50 rounded-lg p-3 mb-3">
          <p className="text-sm text-gray-600 mb-1">الدائرة الانتخابية</p>
          <p className="font-bold text-gray-800">{candidate.constituency?.name}</p>
        </div>
  
        {candidate.campaign_slogan && (
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-sm text-blue-900 italic">"{candidate.campaign_slogan}"</p>
          </div>
        )}
      </div>
  
      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-600 to-transparent opacity-10" />
    </div>
  );
};

export default CandidateDetailsPage;