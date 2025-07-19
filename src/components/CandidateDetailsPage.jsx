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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchCandidate();
  }, [id]);

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

  const handlePrint = () => {
    const printContent = document.getElementById("election-card");
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent.innerHTML;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  };

  // Replace handleShare to only share the candidate page link, not an image
  const handleShare = async () => {
    const fullName = candidate.user
      ? `${candidate.user.first_name} ${candidate.user.last_name}`
      : "غير محدد";
    const candidateUrl = `${window.location.origin}/candidate/${candidate.id}`;
    const shareText = `تعرف على المرشح ${fullName} في انتخابات 2025\nالدائرة: ${
      candidate.constituency?.name || "غير محدد"
    }\nالحزب/الكتلة: ${
      candidate.party_bloc_name || "مستقل"
    }\n\nللمزيد من المعلومات: ${candidateUrl}`;

    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          scale: 2,
          backgroundColor: "#fff",
          logging: false,
        });

        canvas.toBlob(async (blob) => {
          if (
            navigator.canShare &&
            navigator.canShare({
              files: [
                new File([blob], "election-card.png", { type: "image/png" }),
              ],
            })
          ) {
            const file = new File([blob], `election-card-${candidate.id}.png`, {
              type: "image/png",
            });
            try {
              await navigator.share({
                files: [file],
                title: `بطاقة المرشح: ${fullName}`,
                text: shareText,
                url: candidateUrl,
              });
              return;
            } catch (err) {
              console.error("Share failed:", err);
            }
          }

          // Fallback: download image and copy link
          const url = canvas.toDataURL("image/png");
          try {
            await navigator.clipboard.writeText(candidateUrl);
            const link = document.createElement("a");
            link.download = `election-card-${fullName}.png`;
            link.href = url;
            link.click();

            // Show success message
            alert(
              `تم تحميل البطاقة الانتخابية وتم نسخ رابط صفحة المرشح:\n${candidateUrl}`
            );
          } catch (err) {
            alert(
              `تم تحميل البطاقة الانتخابية. رابط صفحة المرشح:\n${candidateUrl}`
            );
          }
        });
      } catch (err) {
        // Fallback: just copy link
        try {
          await navigator.clipboard.writeText(candidateUrl);
          alert(`تم نسخ رابط صفحة المرشح:\n${candidateUrl}`);
        } catch (err2) {
          prompt("انسخ رابط صفحة المرشح:", candidateUrl);
        }
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-50">
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20"
          >
            <Icon
              icon="eos-icons:loading"
              className="w-full h-full text-indigo-600"
            />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-indigo-900"
          >
            جاري التحميل...
          </motion.div>
        </div>
      </div>
    );
  }

  if (error || !candidate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-2xl shadow-xl flex items-center gap-4"
        >
          <Icon
            icon="material-symbols:error"
            className="text-4xl text-red-600"
          />
          <div className="text-2xl font-bold text-red-600">{error}</div>
        </motion.div>
      </div>
    );
  }

  const fullName = candidate.user
    ? `${candidate.user.first_name} ${candidate.user.last_name}`
    : "غير محدد";
  const coverImage =
    candidate.profile_banner_image ||
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200";
  const profileImage =
    candidate.profile_image ||
    "https://www.elections.ab.ca/uploads/Candidate.png";
  const socialLinks = [
    {
      platform: "facebook",
      icon: "logos:facebook",
      url: candidate.facebook_link,
    },
    { platform: "twitter", icon: "logos:twitter", url: candidate.twitter_link },
    {
      platform: "instagram",
      icon: "skill-icons:instagram",
      url: candidate.instagram_link,
    },
    {
      platform: "linkedin",
      icon: "logos:linkedin-icon",
      url: candidate.linkedin_link,
    },
    {
      platform: "youtube",
      icon: "logos:youtube-icon",
      url: candidate.youtube_link,
    },
    {
      platform: "tiktok",
      icon: "logos:tiktok-icon",
      url: candidate.tiktok_link,
    },
  ].filter((link) => link.url);

  return (
    <>
      {/* Election Card for Print/Share - Hidden on screen */}
      <div className="hidden print:block" id="election-card">
        <ElectionCard
          candidate={candidate}
          fullName={fullName}
          profileImage={profileImage}
        />
      </div>

      {/* Hidden card for html2canvas */}
      <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
        <div ref={cardRef}>
          <ElectionCard
            candidate={candidate}
            fullName={fullName}
            profileImage={profileImage}
          />
        </div>
      </div>

      {/* Main Content */}
      <div
        className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-amber-50 print:hidden"
        dir="rtl"
      >
        {/* Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-indigo-700">
            <div className="absolute inset-0 opacity-20">
              <img
                src={coverImage}
                alt="Cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-amber-400 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-400 rounded-full opacity-20 blur-3xl" />

          {/* Profile Section */}
          <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", bounce: 0.4 }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-md" />
                  <img
                    src={profileImage}
                    alt={fullName}
                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-2xl object-cover"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-3 -right-3 bg-gradient-to-br from-amber-400 to-amber-600 text-white px-6 py-3 rounded-full font-bold shadow-xl text-xl flex items-center gap-2"
                  >
                    {/* <Icon icon="mdi:numeric" /> */}
                    {candidate.constituency_id}
                  </motion.div>
                </motion.div>

                <div className="text-center md:text-right flex-1 text-white">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-black mb-4"
                    style={{ textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                  >
                    {fullName}
                  </motion.h1>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-4 justify-center md:justify-start"
                  >
                    <Badge icon="mdi:account-group">
                      {candidate.party_bloc_name || "مستقل"}
                    </Badge>
                    <Badge icon="mdi:map-marker">
                      {candidate.constituency?.name || "غير محدد"}
                    </Badge>
                    <Badge icon="mdi:format-list-numbered">
                      قائمة {candidate.list_number || "-"}
                    </Badge>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-4">
              {/* Biography Section */}
              {candidate.biography && (
                <ContentCard title="نبذة عن المرشح" icon="mdi:account-details">
                  <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line break-words">
                    {candidate.biography}
                  </p>
                </ContentCard>
              )}

              {/* Education & Experience Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Education */}
                <ContentCard title="التعليم" icon="mdi:school">
                  {candidate.education?.length > 0 ? (
                    <div className="space-y-6">
                      {candidate.education.map((ed, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="relative pl-8"
                        >
                          <div className="absolute right-0 top-0 w-3 h-3 bg-amber-500 rounded-full " />
                          <div className="absolute right-1.5 top-3 bottom-0 w-px bg-amber-200" />
                          <h4 className="font-bold text-indigo-900 text-lg mb-1 pr-8">
                            {ed.degree}
                          </h4>
                          <p className="text-gray-700 font-medium pr-8">
                            {ed.institution}
                          </p>
                          <p className="text-gray-600 text-sm pr-8">
                            {ed.field_of_study}
                          </p>
                          <p className="text-amber-600 font-medium text-sm mt-1 pr-8">
                            <Icon
                              icon="mdi:calendar-range"
                              className="inline mr-1 pr-8"
                            />
                            {ed.start_year} - {ed.end_year}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">لا توجد معلومات تعليمية</p>
                  )}
                </ContentCard>{" "}
                {/* Experience */}
                <ContentCard title="الخبرة المهنية" icon="mdi:briefcase">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {candidate.experience ||
                      candidate.current_position ||
                      "لا توجد خبرات مسجلة"}
                  </p>
                </ContentCard>
              </div>

              {/* Achievements */}
              {candidate.achievements && (
                <ContentCard title="الإنجازات" icon="mdi:trophy">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {candidate.achievements}
                  </p>
                </ContentCard>
              )}

              {/* Campaign & Promises Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {candidate.campaign_slogan && (
                  <ContentCard title="شعار الحملة" icon="mdi:flag" accent>
                    <div className="text-center py-4">
                      <motion.p
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="text-2xl font-bold text-indigo-900 italic"
                      >
                        "{candidate.campaign_slogan}"
                      </motion.p>
                    </div>
                  </ContentCard>
                )}

                {candidate.voter_promises && (
                  <ContentCard
                    title="الوعود الانتخابية"
                    icon="mdi:checkbox-marked-circle"
                  >
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {candidate.voter_promises}
                    </p>
                  </ContentCard>
                )}
              </div>

              {/* Additional Info */}
              {candidate.additional_info && (
                <ContentCard title="معلومات إضافية" icon="mdi:information">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {candidate.additional_info}
                  </p>
                </ContentCard>
              )}

              {/* Contact Information */}
              <ContentCard title="معلومات التواصل" icon="mdi:contacts">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <ContactItem
                    icon="mdi:phone"
                    label="الهاتف"
                    value={candidate.phone || "غير متاح"}
                  />
                  <ContactItem
                    icon="mdi:email"
                    label="البريد الإلكتروني"
                    value={candidate.user?.email || "غير متاح"}
                  />
                  <ContactItem
                    icon="mdi:web"
                    label="الموقع الإلكتروني"
                    value={candidate.website_link || "غير متاح"}
                    isLink={!!candidate.website_link}
                  />
                </div>

                {socialLinks.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-indigo-900 mb-4">
                      وسائل التواصل الاجتماعي
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((link, idx) => (
                        <motion.a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white px-5 py-3 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
                        >
                          <Icon icon={link.icon} className="text-xl" />
                          <span>{link.platform}</span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                )}
              </ContentCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Quick Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-6 rounded-3xl shadow-xl text-white"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon icon="mdi:information-outline" className="text-2xl" />
                  معلومات سريعة
                </h3>
                <div className="space-y-3">
                  <QuickStat
                    icon=""
                    label="الرقم التسلسلي"
                    value={`#${candidate.constituency_id}`}
                  />
                  <QuickStat
                    icon="mdi:account-group"
                    label="الحزب/الكتلة"
                    value={candidate.party_bloc_name || "مستقل"}
                  />
                  <QuickStat
                    icon="mdi:map-marker"
                    label="الدائرة"
                    value={candidate.constituency?.name || "غير محدد"}
                  />
                  <QuickStat
                    icon="mdi:format-list-numbered"
                    label="رقم القائمة"
                    value={candidate.list_number || "-"}
                  />
                  <QuickStat
                    icon="mdi:briefcase"
                    label="المنصب الحالي"
                    value={candidate.current_position || "غير محدد"}
                  />
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.button
                onClick={handleShare}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="election-share-btn-alt"
              >
                <div className="election-share-btn__content">
                  <div className="election-share-btn__icon-wrapper">
                    <Icon
                      icon="mdi:share-variant"
                      className="election-share-btn__icon"
                    />
                    <div className="election-share-btn__icon-bg"></div>
                  </div>
                  <div className="election-share-btn__text-wrapper">
                    <span className="election-share-btn__title">
                      مشاركة البطاقة الانتخابية
                    </span>
                    <span className="election-share-btn__subtitle">
                      شارك معلومات المرشح مع الآخرين
                    </span>
                  </div>
                  <Icon
                    icon="mdi:chevron-left"
                    className="election-share-btn__arrow"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Election Card Component for Print/Share
const ElectionCard = ({ candidate, fullName, profileImage }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className="w-[400px] h-[600px] bg-white p-0 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl rounded-3xl border-4 border-[#1a237e]"
      dir="rtl"
    >
      {/* Decorative Blue Accents */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#1a237e]/10 rounded-full blur-2xl z-0" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#283593]/20 rounded-full blur-2xl z-0" />
      {/* Profile Image */}
      <div className="relative z-10 mt-12 mb-4 flex items-center justify-center">
        <div className="absolute -inset-2 bg-gradient-to-br from-[#1a237e] to-[#283593] rounded-full blur-md" />
        <img
          src={profileImage}
          alt={fullName}
          className="relative w-40 h-40 rounded-full border-4 border-[#1a237e] shadow-xl object-cover z-10 bg-white"
          style={{ background: "#fff", objectFit: "cover" }}
        />
      </div>
      {/* Name */}
      <h2 className="z-10 text-3xl font-extrabold text-[#1a237e] drop-shadow-lg mb-2 text-center">
        {fullName}
      </h2>
      {/* Party Bloc Name */}
      <div className="z-10 flex flex-wrap gap-2 justify-center mb-2">
        <span className="bg-[#e3eafc] text-[#1a237e] font-bold px-4 py-2 rounded-full shadow text-lg border-2 border-[#1a237e]/20">
          {candidate.party_bloc_name || "مستقل"}
        </span>
      </div>
      {/* Constituency ID */}
      <div className="z-10 flex justify-center mb-6">
        <span className="bg-gradient-to-r from-[#1a237e] to-[#283593] text-white font-bold px-6 py-2 rounded-full shadow-lg text-xl border-2 border-[#1a237e] tracking-widest">
          #{candidate.constituency_id}
        </span>
      </div>
      {/* Year & App Name */}
      <div className="absolute bottom-0 left-0 right-0 pb-6 flex flex-col items-center z-10">
        <span className="text-[#1a237e]/80 font-bold text-lg mb-1">
          انتخابات {currentYear}
        </span>
        <span className="text-[#1a237e] font-extrabold text-2xl tracking-wider drop-shadow">
          صوتك أمانة
        </span>
      </div>
      {/* Subtle overlay for effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a237e]/5 to-transparent z-0" />
    </div>
  );
};

// Helper Components
const Badge = ({ children, icon }) => (
  <span className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-base font-medium border border-white/30 inline-flex items-center gap-2">
    <Icon icon={icon} className="text-lg" />
    {children}
  </span>
);

// ContentCard: reduce padding
const ContentCard = ({ title, children, accent, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`
      ${accent ? "bg-gradient-to-br from-amber-50 to-amber-100" : "bg-white"}
      rounded-2xl shadow-xl overflow-hidden
    `}
  >
    <div className="p-4 md:p-5">
      <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
        <Icon icon={icon} className="text-2xl text-amber-600" />
        {title}
      </h2>
      {children}
    </div>
  </motion.div>
);

// ContactItem: reduce padding
const ContactItem = ({ icon, label, value, isLink }) => {
  let displayValue = value;
  if (label === "الهاتف" && typeof value === "string" && value !== "غير متاح") {
    if (value.length > 5) {
      displayValue = value.slice(0, 5) + "**";
    }
  }
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-50 p-3 rounded-xl border border-gray-200"
    >
      <div className="flex items-center gap-2">
        <Icon icon={icon} className="text-2xl text-indigo-600" />
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1">{label}</p>
          {isLink && value !== "غير متاح" ? (
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 hover:text-indigo-700 break-all flex items-center gap-1"
            >
              {displayValue}
              <Icon icon="mdi:open-in-new" className="text-sm" />
            </a>
          ) : (
            <p className="font-medium text-gray-800 break-all">
              {displayValue}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const QuickStat = ({ icon, label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-white/20 last:border-0">
    <span className="text-white/80 flex items-center gap-2">
      <Icon icon={icon} className="text-lg" />
      {label}
    </span>
    <span className="font-bold">{value}</span>
  </div>
);

export default CandidateDetailsPage;
