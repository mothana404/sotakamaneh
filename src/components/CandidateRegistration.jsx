import React, { useEffect, useState } from 'react';
import { Plus, X } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect as useEffect2, useState as useState2 } from 'react';

const CandidateRegistration = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, []);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    constituency_id: '',
    party_bloc_name: '',
    phone: '',
    biography: '',
    list_number: '',
    current_position: '',
    achievements: '',
    additional_info: '',
    experience: '',
    skills: '',
    campaign_slogan: '',
    voter_promises: '',
    facebook_link: '',
    linkedin_link: '',
    instagram_link: '',
    twitter_link: '',
    youtube_link: '',
    tiktok_link: '',
    website_link: '',
  });
  const [education, setEducation] = useState([
    { degree: '', institution: '', field_of_study: '', start_year: '', end_year: '', description: '' }
  ]);
  const [profileImage, setProfileImage] = useState(null);
  const [profileBannerImage, setProfileBannerImage] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [popup, setPopup] = useState({ show: false, success: false, message: '' });
  const [errors, setErrors] = useState({});

  const [qualifications, setQualifications] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  const [showQualificationInput, setShowQualificationInput] = useState(false);
  const [showExperienceInput, setShowExperienceInput] = useState(false);
  const [showSkillsInput, setShowSkillsInput] = useState(false);

  const [currentQualification, setCurrentQualification] = useState('');
  const [currentExperience, setCurrentExperience] = useState('');
  const [currentSkill, setCurrentSkill] = useState('');

  // For list_number dropdown
  const [listOptions, setListOptions] = useState2([]);
  const [listLoading, setListLoading] = useState2(false);
  const [listError, setListError] = useState2(null);

  useEffect2(() => {
    setListLoading(true);
    setListError(null);
    fetch('https://skyblue-cormorant-755447.hostingersite.com/api/constituencies')
      .then(res => res.json())
      .then(data => {
        if (data && data.success && Array.isArray(data.data)) {
          setListOptions(data.data);
        } else {
          setListError('تعذر تحميل القوائم');
        }
        setListLoading(false);
      })
      .catch(() => {
        setListError('تعذر تحميل القوائم');
        setListLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    setEducation(prev => prev.map((ed, i) => i === index ? { ...ed, [name]: value } : ed));
  };

  const addEducation = () => {
    setEducation([...education, { degree: '', institution: '', field_of_study: '', start_year: '', end_year: '', description: '' }]);
  };
  const removeEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const handleFileChange = (e, type) => {
    if (type === 'profile') setProfileImage(e.target.files[0]);
    if (type === 'banner') setProfileBannerImage(e.target.files[0]);
  };

  const addQualification = () => {
    if (currentQualification.trim()) {
      setQualifications([...qualifications, currentQualification]);
      setCurrentQualification('');
      setShowQualificationInput(false);
    }
  };

  const addExperience = () => {
    if (currentExperience.trim()) {
      setExperiences([...experiences, currentExperience]);
      setCurrentExperience('');
      setShowExperienceInput(false);
    }
  };

  const addSkill = () => {
    if (currentSkill.trim()) {
      setSkills([...skills, currentSkill]);
      setCurrentSkill('');
      setShowSkillsInput(false);
    }
  };

  const removeItem = (index, type) => {
    if (type === 'qualification') {
      setQualifications(qualifications.filter((_, i) => i !== index));
    } else if (type === 'experience') {
      setExperiences(experiences.filter((_, i) => i !== index));
    } else if (type === 'skill') {
      setSkills(skills.filter((_, i) => i !== index));
    }
  };

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.first_name.trim()) newErrors.first_name = 'الأسم الكامل  مطلوب';
    if (!formData.last_name.trim()) newErrors.last_name = 'اللقب  ';
    if (!formData.email.trim()) newErrors.email = 'البريد الإلكتروني مطلوب';
    if (!formData.constituency_id.trim()) newErrors.constituency_id = 'معرف الدائرة الانتخابية مطلوب';
    if (!formData.party_bloc_name.trim()) newErrors.party_bloc_name = 'اسم الحزب أو الكتلة مطلوب';
    if (!formData.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
    if (!formData.biography.trim()) newErrors.biography = 'السيرة الذاتية مطلوبة';
    // Max length checks for textareas
    if (formData.achievements && formData.achievements.length > 1000) newErrors.achievements = 'الحد الأقصى 1000 حرف';
    if (formData.additional_info && formData.additional_info.length > 1000) newErrors.additional_info = 'الحد الأقصى 1000 حرف';
    if (formData.experience && formData.experience.length > 1000) newErrors.experience = 'الحد الأقصى 1000 حرف';
    if (formData.skills && formData.skills.length > 1000) newErrors.skills = 'الحد الأقصى 1000 حرف';
    if (formData.voter_promises && formData.voter_promises.length > 1000) newErrors.voter_promises = 'الحد الأقصى 1000 حرف';
    if (formData.biography && formData.biography.length > 1000) newErrors.biography = 'الحد الأقصى 1000 حرف';
    // Education validation
    education.forEach((ed, idx) => {
      if ((ed.degree && !ed.institution) || (!ed.degree && ed.institution)) {
        newErrors[`education_${idx}`] = 'يجب إدخال الدرجة والمؤسسة معاً';
      }
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setSubmitting(false);
      return;
    }
    setSubmitting(true);
    setPopup({ show: false, success: false, message: '' });
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) form.append(key, value);
      });
      if (profileImage) form.append('profile_image', profileImage);
      if (profileBannerImage) form.append('profile_banner_image', profileBannerImage);
      education.forEach((ed, idx) => {
        Object.entries(ed).forEach(([key, value]) => {
          if (value) form.append(`education[${idx}][${key}]`, value);
        });
      });
      const response = await axios.post(
        'https://skyblue-cormorant-755447.hostingersite.com/api/candidates',
        form,
        { headers: { 'Accept': 'application/json', 'Content-Type': 'multipart/form-data' } }
      );
      setPopup({ show: true, success: true, message: 'تم إرسال البيانات بنجاح!' });
      setFormData({
        first_name: '', last_name: '', email: '', constituency_id: '', party_bloc_name: '', phone: '', biography: '', list_number: '', current_position: '', achievements: '', additional_info: '', experience: '', skills: '', campaign_slogan: '', voter_promises: '', facebook_link: '', linkedin_link: '', instagram_link: '', twitter_link: '', youtube_link: '', tiktok_link: '', website_link: '',
      });
      setEducation([{ degree: '', institution: '', field_of_study: '', start_year: '', end_year: '', description: '' }]);
      setProfileImage(null);
      setProfileBannerImage(null);
    } catch (err) {
      let msg = 'حدث خطأ أثناء إرسال البيانات.';
      if (err.response && err.response.data && err.response.data.message) {
        msg = err.response.data.message;
      }
      setPopup({ show: true, success: false, message: msg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen relative overflow-hidden pt-20 bg-white" dir="rtl">
      {/* Creative Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-100/20 via-transparent to-transparent"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 left-20 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
        
        {/* Geometric Patterns */}
        <svg className="absolute top-10 left-1/4 w-24 h-24 text-blue-100 opacity-30" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
        </svg>
        
        <svg className="absolute bottom-32 right-1/4 w-32 h-32 text-sky-100 opacity-30" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
          <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
        </svg>
        
        {/* Dots Pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/90 backdrop-blur-lg shadow-xl rounded-3xl border border-blue-100 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12 text-white text-center">
              <h1 className="text-2xl md:text-3xl font-bold mb-3">
                التسجيل المسبق للمرشحين
              </h1>
              <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                سجل بياناتك الآن ليكون حسابك جاهزاً في التطبيق المخصص للانتخابات البرلمانية العراقية
                الذي سيتم إطلاقه قريباً. املأ النموذج أدناه لحجز مكانك وضمان وصولك السريع لناخبيك.
              </p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6" encType="multipart/form-data">
              {/* Personal Information Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">1</span>
                  المعلومات الشخصية
                </h2>
                
                {/* First Name & Last Name in same row */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">الأسم الكامل *</label>
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="أدخل الاسم الكامل" />
                    {errors.first_name && <div className="text-red-500 text-xs mt-1">{errors.first_name}</div>}
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">اللقب *</label>
                    <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="أدخل اللقب" />
                    {errors.last_name && <div className="text-red-500 text-xs mt-1">{errors.last_name}</div>}
                  </div>
                </div>

                {/* Email & Phone in same row */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="أدخل البريد الإلكتروني" />
                    {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف *</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="أدخل رقم الهاتف" />
                    {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
                  </div>
                </div>

                {/* Biography */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">السيرة الذاتية *</label>
                  <textarea name="biography" value={formData.biography} onChange={handleInputChange} required rows={4} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="أدخل السيرة الذاتية" maxLength={1000} />
                  {errors.biography && <div className="text-red-500 text-xs mt-1">{errors.biography}</div>}
                  <div className="text-xs text-gray-500 mt-1 text-left">{formData.biography.length}/1000</div>
                </div>
              </div>

              {/* Political Information Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">2</span>
                  المعلومات السياسية
                </h2>

                {/* Constituency ID & Party in same row */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">التسلسل *</label>
                    <input type="number" name="constituency_id" value={formData.constituency_id} onChange={handleInputChange} required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="أدخل الرقم" />
                    {errors.constituency_id && <div className="text-red-500 text-xs mt-1">{errors.constituency_id}</div>}
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">اسم الحزب أو الكتلة *</label>
                    <input type="text" name="party_bloc_name" value={formData.party_bloc_name} onChange={handleInputChange} required className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="أدخل اسم الحزب أو الكتلة" />
                    {errors.party_bloc_name && <div className="text-red-500 text-xs mt-1">{errors.party_bloc_name}</div>}
                  </div>
                </div>

                {/* List Number & Current Position in same row */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">المحافظة</label>
                    {listLoading ? (
                      <div className="text-blue-600 text-sm">جاري تحميل القوائم...</div>
                    ) : listError ? (
                      <>
                        <input type="text" name="list_number" value={formData.list_number} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="اختر المحافظة" />
                        <div className="text-red-500 text-xs mt-1">{listError}</div>
                      </>
                    ) : listOptions.length > 0 ? (
                      <div className="relative">
                        <select
                          name="list_number"
                          value={formData.list_number}
                          onChange={handleInputChange}
                          className="w-full appearance-none px-4 py-2.5 pr-10 border border-gray-200 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          required
                        >
                          <option value="">اختر المحافظة</option>
                          {listOptions.map(option => (
                            <option key={option.id} value={option.list_number || option.id} className="text-gray-900">
                              {option.list_number ? `قائمة ${option.list_number} - ${option.name}` : option.name}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-gray-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <input type="text" name="list_number" value={formData.list_number} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="أدخل رقم القائمة أو الكتلة" />
                    )}
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">المنصب الحالي أو السابق (اختياري)</label>
                    <input type="text" name="current_position" value={formData.current_position} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="أدخل المنصب" />
                  </div>
                </div>

                {/* Campaign Slogan */}
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">شعار الحملة الانتخابية (اختياري)</label>
                  <input type="text" name="campaign_slogan" value={formData.campaign_slogan} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="أدخل شعار الحملة" />
                </div>
              </div>

              {/* Experience & Achievements Section */}
              <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">3</span>
                  الخبرات والإنجازات
                </h2>

                {/* Achievements */}
                <div className="group mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">إنجازات المرشح (اختياري)</label>
                  <textarea name="achievements" value={formData.achievements} onChange={handleInputChange} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="اذكر أهم إنجازاتك السابقة" maxLength={1000} />
                  {errors.achievements && <div className="text-red-500 text-xs mt-1">{errors.achievements}</div>}
                  <div className="text-xs text-gray-500 mt-1 text-left">{formData.achievements.length}/1000</div>
                </div>

                {/* Experience & Skills in same row */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">الخبرة العملية (اختياري)</label>
                    <textarea name="experience" value={formData.experience} onChange={handleInputChange} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="أدخل خبراتك العملية" maxLength={1000} />
                    {errors.experience && <div className="text-red-500 text-xs mt-1">{errors.experience}</div>}
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">المهارات (اختياري)</label>
                    <textarea name="skills" value={formData.skills} onChange={handleInputChange} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="أدخل مهاراتك" maxLength={1000} />
                    {errors.skills && <div className="text-red-500 text-xs mt-1">{errors.skills}</div>}
                  </div>
                </div>

                {/* Voter Promises & Additional Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">ماذا ستقدم للناخبين (اختياري)</label>
                    <textarea name="voter_promises" value={formData.voter_promises} onChange={handleInputChange} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="اذكر وعودك للناخبين" maxLength={1000} />
                    {errors.voter_promises && <div className="text-red-500 text-xs mt-1">{errors.voter_promises}</div>}
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">معلومات إضافية (اختياري)</label>
                    <textarea name="additional_info" value={formData.additional_info} onChange={handleInputChange} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="أدخل أي معلومات إضافية" maxLength={1000} />
                    {errors.additional_info && <div className="text-red-500 text-xs mt-1">{errors.additional_info}</div>}
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">4</span>
                  المؤهلات العلمية
                </h2>
                
                {education.map((ed, idx) => (
                  <div key={idx} className="mb-4 bg-white border border-gray-200 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-3 mb-3">
                      <input type="text" name="degree" value={ed.degree} onChange={e => handleEducationChange(idx, e)} className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" placeholder="الدرجة العلمية" required={idx === 0} />
                      <input type="text" name="institution" value={ed.institution} onChange={e => handleEducationChange(idx, e)} className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" placeholder="المؤسسة التعليمية" required={idx === 0} />
                      <input type="text" name="field_of_study" value={ed.field_of_study} onChange={e => handleEducationChange(idx, e)} className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" placeholder="مجال الدراسة (اختياري)" />
                      <div className="grid grid-cols-2 gap-2">
                        <input type="number" name="start_year" value={ed.start_year} onChange={e => handleEducationChange(idx, e)} className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" placeholder="سنة البدء" />
                        <input type="number" name="end_year" value={ed.end_year} onChange={e => handleEducationChange(idx, e)} className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" placeholder="سنة التخرج" />
                      </div>
                    </div>
                    <input type="text" name="description" value={ed.description} onChange={e => handleEducationChange(idx, e)} className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" placeholder="وصف إضافي (اختياري)" />
                    {errors[`education_${idx}`] && <div className="text-red-500 text-xs mt-1">{errors[`education_${idx}`]}</div>}
                    {education.length > 1 && (
                      <button type="button" onClick={() => removeEducation(idx)} className="mt-2 text-red-600 hover:text-red-700 text-sm font-medium">حذف المؤهل</button>
                    )}
                  </div>
                ))}
                <button type="button" onClick={addEducation} className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                  + إضافة مؤهل علمي آخر
                </button>
              </div>

              {/* Media Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">5</span>
                  الوسائط والروابط
                </h2>

                {/* Profile Images */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">صورة الملف الشخصي (اختياري)</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={e => handleFileChange(e, 'profile')} 
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2">صورة الغلاف (اختياري)</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={e => handleFileChange(e, 'banner')} 
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-700 mb-3">روابط التواصل الاجتماعي (اختياري)</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <input type="text" name="facebook_link" value={formData.facebook_link} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" placeholder="رابط فيسبوك" />
                    <input type="text" name="twitter_link" value={formData.twitter_link} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" placeholder="رابط تويتر" />
                    <input type="text" name="instagram_link" value={formData.instagram_link} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" placeholder="رابط إنستغرام" />
                    <input type="text" name="linkedin_link" value={formData.linkedin_link} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" placeholder="رابط لينكدإن" />
                    <input type="text" name="youtube_link" value={formData.youtube_link} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" placeholder="رابط يوتيوب" />
                    <input type="text" name="tiktok_link" value={formData.tiktok_link} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" placeholder="رابط تيك توك" />
                    <input type="text" name="website_link" value={formData.website_link} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm col-span-2" placeholder="رابط الموقع الإلكتروني" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button 
                  type="submit" 
                  disabled={submitting} 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg text-base font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                      </svg>
                      جاري الإرسال...
                    </span>
                  ) : 'اضغط هنا لحفظ البيانات'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Popup for response */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-4"> 
          <div className={`bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform transition-all ${popup.success ? 'border-t-4 border-green-500' : 'border-t-4 border-red-500'}`}>
            <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${popup.success ? 'bg-green-100' : 'bg-red-100'}`}>
              {popup.success ? (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              ) : (
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </div>
            <h2 className={`text-xl font-bold mb-2 ${popup.success ? 'text-green-700' : 'text-red-700'}`}>
              {popup.success ? 'نجاح!' : 'خطأ!'}
            </h2>
            <p className="mb-6 text-gray-600 text-sm">{popup.message}</p>
            <button 
              onClick={() => {
                setPopup({ ...popup, show: false });
                if (popup.success) {
                  navigate('/');
                }
              }} 
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {submitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="text-blue-600 font-semibold text-base mt-4">جاري إرسال البيانات...</div>
            <div className="text-gray-500 text-sm mt-1">يرجى الانتظار</div>
          </div>
        </div>
      )}
    </div>
    
    {/* Custom CSS for animations */}
    <style jsx>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `}</style>
    
    <Footer />
    </>
  );
};

export default CandidateRegistration;