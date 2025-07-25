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
    async function fetchImageAsDataUrl() {
      if (candidate && candidate.profile_image) {
        try {
          const res = await fetch(candidate.profile_image, { mode: "cors" });
          if (!res.ok) throw new Error("CORS error");
          const blob = await res.blob();
          const reader = new FileReader();
          reader.onloadend = () => setProfileImageDataUrl(reader.result);
          reader.readAsDataURL(blob);
        } catch (err) {
          try {
            const corsProxy = "https://corsproxy.io/?";
            const res = await fetch(
              corsProxy + encodeURIComponent(candidate.profile_image)
            );
            const blob = await res.blob();
            const reader = new FileReader();
            reader.onloadend = () => setProfileImageDataUrl(reader.result);
            reader.readAsDataURL(blob);
          } catch (err2) {
            setProfileImageDataUrl(
              "https://www.elections.ab.ca/uploads/Candidate.png"
            );
          }
        }
      } else if (candidate) {
        setProfileImageDataUrl(
          "https://www.elections.ab.ca/uploads/Candidate.png"
        );
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
    const shareText = `تعرف على المرشح ${fullName}\n${
      candidate.party_bloc_name || "مستقل"
    } - ${candidate.constituency?.name}\n${
      candidate.campaign_slogan || ""
    }\n${candidateUrl}`;

    await new Promise((resolve) => setTimeout(resolve, 200));

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
          navigator.canShare({
            files: [
              new File([blob], "candidate-card.png", { type: "image/png" }),
            ],
          })
        ) {
          const file = new File([blob], "candidate-card.png", {
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
            // fallback below
          }
        }
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = `${fullName}-election-card.png`;
        link.href = url;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 100);
        setTimeout(() => {
          const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
            shareText
          )}`;
          window.open(whatsappUrl, "_blank");
          alert(
            "تم تحميل صورة بطاقة المرشح. يمكنك الآن إرسالها مع الرابط عبر واتساب."
          );
        }, 1000);
      }, "image/png");
    } catch (err) {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
        shareText
      )}`;
      window.open(whatsappUrl, "_blank");
      alert("تعذر إنشاء صورة البطاقة تلقائياً. تم إرسال الرابط فقط.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600" />
          </div>
          <p className="text-sm text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (error || !candidate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full mx-4">
          <Icon
            icon="mdi:alert-circle"
            className="text-5xl text-red-500 mx-auto mb-4"
          />
          <p className="text-gray-800 mb-6">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            العودة للرئيسية
          </button>
        </div>
      </div>
    );
  }

  const fullName = `${candidate.user.first_name} ${candidate.user.last_name}`;
  const profileImage =
    candidate.profile_image ||
    "https://www.elections.ab.ca/uploads/Candidate.png";

  return (
    <>
      {/* Hidden Share Card */}
      <div className="fixed -left-[9999px]">
        <div ref={cardRef}>
          {profileImageDataUrl && (
            <ShareCard
              candidate={candidate}
              fullName={fullName}
              profileImage={profileImageDataUrl}
            />
          )}
        </div>
      </div>

      {/* Main Page */}
      <div className="min-h-screen bg-slate-50" dir="rtl">
        {/* Professional Header */}
        <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg px-4 py-2 w-fit">
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  العودة
                </button>
              </div>

              <h1 className="text-white text-sm font-medium">
                الانتخابات البرلمانية 2025
              </h1>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded transition-colors"
              >
                <Icon icon="mdi:share-variant" className="text-lg" />
                <span className="text-sm">مشاركة</span>
              </button>
            </div>
          </div>
        </header>

        {/* Candidate Info Section with Background */}
        <div className="relative bg-white border-b overflow-hidden">
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0">
            <img
              src={
                candidate.profile_banner_image ||
                "https://s.france24.com/media/display/11726090-999d-11ee-ae25-005056bf30b7/w:1280/p:16x9/000_32MA8JL%20%281%29.jpg"
              }
              alt="Background"
              className="w-full h-full object-cover filter backdrop-blur-lg scale-100"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
            {/* Pattern Overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Profile Image */}
              <div className="relative">
                <div className="p-1 bg-white/20 backdrop-blur-sm rounded-full">
                  <img
                    src={profileImage}
                    alt={fullName}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white/50 shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shadow-lg">
                  {candidate.serial_number}
                </div>
              </div>

              {/* Candidate Details */}
              <div className="flex-1 text-center md:text-right">
                <h2 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
                  {fullName}
                </h2>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                  <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-lg font-medium">
                    <Icon icon="mdi:flag" className="text-lg" />
                    {candidate.party_bloc_name || ""}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-lg font-medium">
                    <Icon icon="mdi:map-marker" className="text-lg" />
                    {candidate.constituency?.name}
                  </span>
                  {candidate.list_number && (
                    <span className="inline-flex items-center gap-1 bg-green-500/20 backdrop-blur-sm text-green-100 px-3 py-1.5 rounded-full text-lg font-medium">
                      <Icon
                        icon="mdi:format-list-numbered"
                        className="text-lg"
                      />
                      رقم القائمة: {candidate.list_number}
                    </span>
                  )}
                </div>
                {candidate.campaign_slogan && (
                  <p className="text-white/90 italic text-lg bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                    "{candidate.campaign_slogan}"
                  </p>
                )}
              </div>

              {/* Quick Stats */}
              <div className="hidden lg:flex gap-4">
                <div className="text-center px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
                  <p className="text-2xl font-bold text-white">
                    {candidate.serial_number}
                  </p>
                  <p className="text-xs text-white/80">الرقم التسلسلي</p>
                </div>
                {candidate.list_number && (
                  <div className="text-center px-4 py-3 bg-green-500/20 backdrop-blur-sm rounded-lg border border-green-300/30">
                    <p className="text-2xl font-bold text-green-100">
                      {candidate.list_number}
                    </p>
                    <p className="text-xs text-green-100/80">رقم القائمة</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Overview Section */}
                {candidate.biography && (
                  <Card title="نبذة شخصية" icon="mdi:account">
                    <p className="text-gray-700 leading-relaxed text-base">
                      {candidate.biography}
                    </p>
                  </Card>
                )}

                {candidate.education && candidate.education.length > 0 && (
                  <Card title="التعليم" icon="mdi:school">
                    <div className="space-y-2">
                      {candidate.education.map((edu, idx) => (
                        <div
                          key={idx}
                          className="border-l-2 border-blue-200 pl-4"
                        >
                          <p className="font-medium text-gray-800 text-sm">
                            {edu.degree}
                          </p>
                          {edu.institution && (
                            <p className="text-xs text-gray-600">
                              {edu.institution}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Promises Section */}
                {candidate.voter_promises && (
                  <Card title="الوعود الانتخابية" icon="mdi:target">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                      {candidate.voter_promises}
                    </p>
                  </Card>
                )}

                {candidate.additional_info && (
                  <Card title="رؤية إضافية" icon="mdi:lightbulb">
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {candidate.additional_info}
                    </p>
                  </Card>
                )}

                {/* Background Section */}
                {candidate.current_position && (
                  <Card title="المنصب الحالي" icon="mdi:badge-account">
                    <p className="text-gray-700 text-base">
                      {candidate.current_position}
                    </p>
                  </Card>
                )}

                {candidate.experience && (
                  <Card title="الخبرة المهنية" icon="mdi:briefcase">
                    <p className="text-gray-700 leading-relaxed text-base">
                      {candidate.experience}
                    </p>
                  </Card>
                )}

                {candidate.achievements && (
                  <Card title="الإنجازات" icon="mdi:trophy">
                    <p className="text-gray-700 leading-relaxed text-base">
                      {candidate.achievements}
                    </p>
                  </Card>
                )}

                {candidate.skills && (
                  <Card title="المهارات" icon="mdi:puzzle">
                    <div className="flex flex-wrap gap-2">
                      {candidate.skills.split(",").map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Contact Section */}
                <Card title="معلومات التواصل" icon="mdi:card-account-details">
                  <div className="space-y-3 text-base">
                    {candidate.phone && (
                      <ContactItem
                        className="text-lg"
                        icon="mdi:phone"
                        label="الهاتف"
                        value={candidate.phone.slice(0, 5) + "****"}
                      />
                    )}
                    {candidate.user?.email && (
                      <ContactItem
                        className="text-lg"
                        icon="mdi:email"
                        label="البريد الإلكتروني"
                        value={maskEmail(candidate.user.email)}
                      />
                    )}
                  </div>
                </Card>

                {/* Social Media Section */}
                {(candidate.facebook_link ||
                  candidate.linkedin_link ||
                  candidate.instagram_link ||
                  candidate.twitter_link ||
                  candidate.youtube_link ||
                  candidate.tiktok_link ||
                  candidate.website_link) && (
                  <Card
                    title="وسائل التواصل الاجتماعي"
                    icon="mdi:share-variant"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base">
                      {candidate.facebook_link && (
                        <SocialButton
                          href={candidate.facebook_link}
                          icon="logos:facebook"
                          label="Facebook"
                        />
                      )}
                      {candidate.linkedin_link && (
                        <SocialButton
                          href={candidate.linkedin_link}
                          icon="logos:linkedin-icon"
                          label="LinkedIn"
                        />
                      )}
                      {candidate.instagram_link && (
                        <SocialButton
                          href={candidate.instagram_link}
                          icon="skill-icons:instagram"
                          label="Instagram"
                        />
                      )}
                      {candidate.twitter_link && (
                        <SocialButton
                          href={candidate.twitter_link}
                          icon="ri:twitter-x-fill"
                          label="X"
                        />
                      )}
                      {candidate.youtube_link && (
                        <SocialButton
                          href={candidate.youtube_link}
                          icon="logos:youtube-icon"
                          label="YouTube"
                        />
                      )}
                      {candidate.tiktok_link && (
                        <SocialButton
                          href={candidate.tiktok_link}
                          icon="logos:tiktok-icon"
                          label="TikTok"
                        />
                      )}
                      {candidate.website_link && (
                        <SocialButton
                          href={candidate.website_link}
                          icon="mdi:web"
                          label="الموقع الإلكتروني"
                        />
                      )}
                    </div>
                  </Card>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Summary Card */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  ملخص البيانات
                </h3>
                <div className="space-y-3">
                  <SummaryItem label="الاسم" value={fullName} />
                  <SummaryItem
                    className="text-lg"
                    label="الحزب/الكتلة"
                    value={candidate.party_bloc_name || "مستقل"}
                  />
                  <SummaryItem
                    className="text-lg"
                    label="الدائرة"
                    value={candidate.constituency?.name}
                  />
                  <SummaryItem
                    className="text-lg"
                    label="الرقم التسلسلي"
                    value={candidate.serial_number}
                  />
                  {candidate.list_number && (
                    <SummaryItem
                      className="text-lg"
                      label="رقم القائمة"
                      value={candidate.list_number}
                    />
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  إجراءات سريعة
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={handleShare}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2.5 rounded-lg transition-colors"
                  >
                    <Icon icon="logos:whatsapp-icon" className="text-xl" />
                    <span className="text-sm font-medium">
                      مشاركة عبر واتساب
                    </span>
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-lg transition-colors"
                  >
                    <Icon icon="mdi:printer" className="text-xl" />
                    <span className="text-sm font-medium">طباعة البطاقة</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Helper Components
const Card = ({ title, icon, children }) => (
  <div className="bg-white rounded-lg shadow-sm border p-6">
    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
      <Icon icon={icon} className="text-blue-600 text-xl" />
      {title}
    </h3>
    {children}
  </div>
);

const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
    <Icon icon={icon} className="text-gray-600 text-xl" />
    <div className="flex-1">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-medium text-gray-900">{value}</p>
    </div>
  </div>
);

const SocialButton = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
  >
    <Icon icon={icon} className="text-xl" />
    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
      {label}
    </span>
    <Icon icon="mdi:open-in-new" className="text-gray-400 ml-auto text-sm" />
  </a>
);

const SummaryItem = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="text-sm font-medium text-gray-900">{value}</span>
  </div>
);

const ShareCard = ({ candidate, fullName, profileImage }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true);
    img.src = profileImage;
  }, [profileImage]);

  return (
    <div
      className="w-[400px] h-[500px] relative shadow-lg overflow-hidden"
      dir="rtl"
    >
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src={profileImage}
          alt={fullName}
          className="w-full h-full object-cover"
          crossOrigin="anonymous"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-between">
        {/* Top Header */}
        <div className="bg-gradient-to-b from-black/70 to-transparent p-6">
          <div className="flex justify-between items-start text-white">
            <div>
              <p className="text-xs opacity-90">الانتخابات البرلمانية</p>
              <p className="text-2xl font-bold">2025</p>
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="bg-gradient-to-t from-black via-black/90 to-transparent p-4">
          {/* Candidate Name and Party */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg pb-2">
              {fullName}
            </h2>
            <div className="flex items-center gap-2 mb-3 mt-3">
              <span className="bg-white/10 backdrop-blur-md pb-5 text-white text-sm px-3 py-1 rounded-full border border-white/20">
                {candidate.party_bloc_name || "مستقل"}
              </span>
              {/* {candidate.list_number && (
                <span className="bg-green-600 text-white text-sm px-3 rounded-full pb-5">
                  قائمة رقم {candidate.list_number}
                </span>
              )} */}
            </div>
          </div>

          {/* Campaign Slogan */}
          {candidate.campaign_slogan && (
            <div className="mb-8">
              <p className="text-white/90 text-sm italic border-l-4 border-blue-400 pl-3">
                "{candidate.campaign_slogan}"
              </p>
            </div>
          )}

          {/* Info Pills */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 rounded-lg">
              <Icon icon="mdi:map-marker" className="text-lg" />
              <span className="text-sm font-medium mb-5">
                {candidate.constituency?.name}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Badge for Serial Number Alternative */}
      <div className="absolute top-4 left-4">
        <div className="bg-white/90 backdrop-blur-sm text-blue-900 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
          <div className="text-center">
            <p className="text-3xl font-bold leading-none pb-7">
              {candidate.serial_number}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function
function maskEmail(email) {
  const atIdx = email.indexOf("@");
  if (atIdx === -1) return email;
  return "*".repeat(Math.min(atIdx, 3)) + email.slice(Math.max(3, atIdx - 2));
}

export default CandidateDetailsPage;
