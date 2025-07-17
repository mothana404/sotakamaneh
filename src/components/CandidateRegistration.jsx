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
    <div className="min-h-screen relative overflow-hidden pt-20" dir="rtl">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-white/60"></div>
        
        {/* Animated shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-200 rotate-45 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-20 h-20 border-2 border-purple-200 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-indigo-100 rotate-12 animate-float animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto" style={{overflowWrap: 'break-word', wordBreak: 'break-word'}}>
          <div className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-white/50">
            {/* Header Section */}
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                التسجيل المسبق للمرشحين
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                سجل بياناتك الآن لتكون حسابك جاهزاً في التطبيق المخصص للانتخابات البرلمانية العراقية
                الذي سيتم إطلاقه قريباً. املأ النموذج أدناه لحجز مكانك وضمان وصولك السريع لناخبيك.
              </p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
              {/* First Name */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">الأسم الكامل *</label>
                <input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="أدخل الاسم الكامل" />
                {errors.first_name && <div className="text-red-500 text-sm mt-1 break-words">{errors.first_name}</div>}
              </div>
              {/* Last Name */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2"> اللقب *</label>
                <input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="أدخل اللقب " />
                {errors.last_name && <div className="text-red-500 text-sm mt-1 break-words">{errors.last_name}</div>}
              </div>
              {/* Email */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="أدخل البريد الإلكتروني" />
                {errors.email && <div className="text-red-500 text-sm mt-1 break-words">{errors.email}</div>}
              </div>

              {/* Constituency ID */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2"> التسلسل*</label>
                <input type="number" name="constituency_id" value={formData.constituency_id} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="أدخل الرقم" />
                {errors.constituency_id && <div className="text-red-500 text-sm mt-1 break-words">{errors.constituency_id}</div>}
              </div>
              {/* Party Bloc Name */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">اسم الحزب أو الكتلة *</label>
                <input type="text" name="party_bloc_name" value={formData.party_bloc_name} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="أدخل اسم الحزب أو الكتلة" />
                {errors.party_bloc_name && <div className="text-red-500 text-sm mt-1 break-words">{errors.party_bloc_name}</div>}
              </div>
              {/* Phone */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف *</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="أدخل رقم الهاتف" />
                {errors.phone && <div className="text-red-500 text-sm mt-1 break-words">{errors.phone}</div>}
              </div>
              {/* Biography */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">السيرة الذاتية *</label>
                <textarea name="biography" value={formData.biography} onChange={handleInputChange} required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg break-words" placeholder="أدخل السيرة الذاتية" maxLength={1000} />
                {errors.biography && <div className="text-red-500 text-sm mt-1 break-words">{errors.biography}</div>}
              </div>
              {/* List Number (اختياري) */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">المحافظة</label>
                {listLoading ? (
                  <div className="text-blue-600 text-sm">جاري تحميل القوائم...</div>
                ) : listError ? (
                  <>
                    <input type="text" name="list_number" value={formData.list_number} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="اختر المحافظة" />
                    <div className="text-red-500 text-xs mt-1">{listError}</div>
                  </>
                ) : listOptions.length > 0 ? (
                  <div className="relative">
                    <select
                      name="list_number"
                      value={formData.list_number}
                      onChange={handleInputChange}
                      className="w-full appearance-none px-5 py-3 pr-12 border border-indigo-300 rounded-xl shadow-sm bg-white text-gray-900 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition-all duration-150 hover:border-indigo-400 cursor-pointer"
                      required
                    >
                      <option value="">اختر  المحافظة </option>
                      {listOptions.map(option => (
                        <option key={option.id} value={option.list_number || option.id} className="text-gray-900">
                          {option.list_number ? `قائمة ${option.list_number} - ${option.name}` : option.name}
                        </option>
                      ))}
                    </select>
                    {/* Chevron Icon */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-3 text-indigo-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <input type="text" name="list_number" value={formData.list_number} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="أدخل رقم القائمة أو الكتلة" />
                )}
              </div>
              {/* Current Position (اختياري) */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">المنصب الحالي أو السابق أو العشائري (اختياري)</label>
                <input type="text" name="current_position" value={formData.current_position} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="أدخل المنصب الحالي أو السابق أو العشائري" />
              </div>
              {/* Achievements (اختياري) */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">إنجازات المرشح (اختياري)</label>
                <textarea name="achievements" value={formData.achievements} onChange={handleInputChange} rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg break-words" placeholder="اذكر أهم إنجازاتك السابقة" maxLength={1000} />
                {errors.achievements && <div className="text-red-500 text-sm mt-1 break-words">{errors.achievements}</div>}
              </div>
              {/* Additional Info (اختياري) */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">معلومات إضافية (اختياري)</label>
                <textarea name="additional_info" value={formData.additional_info} onChange={handleInputChange} rows={2} className="w-full px-4 py-2 border border-gray-300 rounded-lg break-words" placeholder="أدخل أي معلومات إضافية" maxLength={1000} />
                {errors.additional_info && <div className="text-red-500 text-sm mt-1 break-words">{errors.additional_info}</div>}
              </div>
              {/* Experience (اختياري) */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">الخبرة العملية (اختياري)</label>
                <textarea name="experience" value={formData.experience} onChange={handleInputChange} rows={2} className="w-full px-4 py-2 border border-gray-300 rounded-lg break-words" placeholder="أدخل خبراتك العملية" maxLength={1000} />
                {errors.experience && <div className="text-red-500 text-sm mt-1 break-words">{errors.experience}</div>}
                </div>
              {/* Skills (اختياري) */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">المهارات (اختياري)</label>
                <textarea name="skills" value={formData.skills} onChange={handleInputChange} rows={2} className="w-full px-4 py-2 border border-gray-300 rounded-lg break-words" placeholder="أدخل مهاراتك" maxLength={1000} />
                {errors.skills && <div className="text-red-500 text-sm mt-1 break-words">{errors.skills}</div>}
                  </div>
              {/* Campaign Slogan (اختياري) */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">شعار الحملة الانتخابية (اختياري)</label>
                <input type="text" name="campaign_slogan" value={formData.campaign_slogan} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="أدخل شعار الحملة الانتخابية" />
                    </div>
              {/* Voter Promises (اختياري) */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">ماذا ستقدم للناخبين (اختياري)</label>
                <textarea name="voter_promises" value={formData.voter_promises} onChange={handleInputChange} rows={2} className="w-full px-4 py-2 border border-gray-300 rounded-lg break-words" placeholder="اذكر وعودك للناخبين" maxLength={1000} />
                {errors.voter_promises && <div className="text-red-500 text-sm mt-1 break-words">{errors.voter_promises}</div>}
                      </div>
              {/* Profile Image */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">صورة الملف الشخصي (اختياري)</label>
                <input type="file" accept="image/*" onChange={e => handleFileChange(e, 'profile')} required />
                  </div>
              {/* Profile Banner Image */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">صورة الغلاف (اختياري)</label>
                <input type="file" accept="image/*" onChange={e => handleFileChange(e, 'banner')}  />
                </div>
              {/* Social Media Links (Optional) */}
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="facebook_link" value={formData.facebook_link} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="رابط فيسبوك (اختياري)" />
                <input type="text" name="linkedin_link" value={formData.linkedin_link} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="رابط لينكدإن (اختياري)" />
                <input type="text" name="instagram_link" value={formData.instagram_link} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="رابط إنستغرام (اختياري)" />
                <input type="text" name="twitter_link" value={formData.twitter_link} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="رابط تويتر (اختياري)" />
                <input type="text" name="youtube_link" value={formData.youtube_link} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="رابط يوتيوب (اختياري)" />
                <input type="text" name="tiktok_link" value={formData.tiktok_link} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="رابط تيك توك (اختياري)" />
                <input type="text" name="website_link" value={formData.website_link} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="رابط الموقع الإلكتروني (اختياري)" />
                  </div>
              {/* Education Array */}
              <div className="mt-6">
                <label className="block text-lg font-bold text-gray-700 mb-2">المؤهلات العلمية</label>
                {education.map((ed, idx) => (
                  <div key={idx} className="mb-4 border p-4 rounded-lg bg-gray-50">
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <input type="text" name="degree" value={ed.degree} onChange={e => handleEducationChange(idx, e)} className="px-2 py-1 border rounded" placeholder="الدرجة العلمية" required={idx === 0} />
                      <input type="text" name="institution" value={ed.institution} onChange={e => handleEducationChange(idx, e)} className="px-2 py-1 border rounded" placeholder="المؤسسة التعليمية" required={idx === 0} />
                      <input type="text" name="field_of_study" value={ed.field_of_study} onChange={e => handleEducationChange(idx, e)} className="px-2 py-1 border rounded" placeholder="مجال الدراسة (اختياري)" />
                      <input type="number" name="start_year" value={ed.start_year} onChange={e => handleEducationChange(idx, e)} className="px-2 py-1 border rounded" placeholder="سنة البدء (اختياري)" />
                      <input type="number" name="end_year" value={ed.end_year} onChange={e => handleEducationChange(idx, e)} className="px-2 py-1 border rounded" placeholder="سنة التخرج (اختياري)" />
                      <input type="text" name="description" value={ed.description} onChange={e => handleEducationChange(idx, e)} className="px-2 py-1 border rounded" placeholder="وصف إضافي (اختياري)" />
                    </div>
                    {errors[`education_${idx}`] && <div className="text-red-500 text-sm mt-1 break-words">{errors[`education_${idx}`]}</div>}
                    {education.length > 1 && (
                      <button type="button" onClick={() => removeEducation(idx)} className="text-red-500 hover:text-red-700">حذف المؤهل</button>
                    )}
                  </div>
                ))}
                <button type="button" onClick={addEducation} className="px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">إضافة مؤهل علمي آخر</button>
              </div>
              {/* Submit Button */}
              <div className="pt-6">
                <button type="submit" disabled={submitting} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  {submitting ? 'جاري الإرسال...' : 'اضغط هنا لحفظ البيانات '}
                </button>
              </div>
            </form>
            {/* Popup for response */}
            {popup.show && (
              <div className={`fixed inset-0 flex items-center justify-center z-50 bg-black/40`}> 
                <div className={`bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center ${popup.success ? 'border-green-400' : 'border-red-400'} border-2`}>
                  <h2 className={`text-2xl font-bold mb-4 ${popup.success ? 'text-green-600' : 'text-red-600'}`}>{popup.success ? 'نجاح' : 'خطأ'}</h2>
                  <p className="mb-6 text-gray-700">{popup.message}</p>
                  <button onClick={() => {
                    setPopup({ ...popup, show: false });
                    if (popup.success) {
                      navigate('/');
                    }
                  }} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">إغلاق</button>
                </div>
              </div>
            )}
            {/* Loading Overlay */}
            {submitting && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                <div className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center">
                  <svg className="animate-spin h-10 w-10 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  <div className="text-blue-600 font-bold text-lg">جاري إرسال البيانات...</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CandidateRegistration;