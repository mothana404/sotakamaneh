import React, { useEffect, useState } from 'react';
import { Plus, X, CheckCircle, AlertCircle, User, Briefcase, GraduationCap, Globe, Upload, FileText, Award } from 'lucide-react';
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
    serial_number: '',
    constituency_id: 1,
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

  // For constituency dropdown
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
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
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

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.first_name.trim()) newErrors.first_name = 'الاسم الكامل مطلوب';
    if (!formData.last_name.trim()) newErrors.last_name = 'اللقب مطلوب';
    if (!formData.email.trim()) newErrors.email = 'البريد الإلكتروني مطلوب';
    if (!formData.serial_number.trim()) newErrors.serial_number = 'التسلسل مطلوب';
    if (!formData.party_bloc_name.trim()) newErrors.party_bloc_name = 'اسم الحزب أو الكتلة مطلوب';
    if (!formData.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
    if (!formData.biography.trim()) newErrors.biography = 'السيرة الذاتية مطلوبة';
    // if (!formData.list_number.trim()) newErrors.list_number = 'رقم القائمة مطلوب';
    
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
      // Scroll to first error
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
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
      // Reset form
      setFormData({
        first_name: '', last_name: '', email: '', constituency_id: 1, serial_number: '', 
        party_bloc_name: '', phone: '', biography: '', list_number: '', current_position: '', 
        achievements: '', additional_info: '', experience: '', skills: '', campaign_slogan: '', 
        voter_promises: '', facebook_link: '', linkedin_link: '', instagram_link: '', 
        twitter_link: '', youtube_link: '', tiktok_link: '', website_link: '',
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
      <div className="min-h-screen bg-gray-100 pt-20" dir="rtl">
        {/* Header Section - Full Width */}
        <div className="bg-gradient-to-r from-blue-950 to-blue-600 text-white">
          <div className="px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                نموذج تسجيل المرشحين
              </h1>
              <p className="text-lg text-gray-300">
                الانتخابات البرلمانية العراقية 2025
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>تسجيل آمن</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>معالجة فورية</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>دعم على مدار الساعة</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section - Full Width with sections */}
        <form onSubmit={handleSubmit} className="bg-white">
          {/* Section 1: Personal Information */}
          <div className="border-b border-gray-200">
            <div className="px-4 sm:px-6 lg:px-8 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">البيانات الشخصية</h2>
                    <p className="text-sm text-gray-600 mt-1">يرجى ملء جميع الحقول المطلوبة بدقة</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      الاسم الكامل <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.first_name ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="أدخل الاسم الكامل"
                    />
                    {errors.first_name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.first_name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      اللقب <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.last_name ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="أدخل اللقب"
                    />
                    {errors.last_name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.last_name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      رقم الهاتف <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="07XX XXX XXXX"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2 lg:col-span-3">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      البريد الإلكتروني <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2                       focus:ring-blue-500 ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="example@email.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2 lg:col-span-3">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      السيرة الذاتية <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      name="biography"
                      value={formData.biography}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                        errors.biography ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="اكتب نبذة مختصرة عن نفسك وخبراتك..."
                    />
                    {errors.biography && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.biography}
                      </p>
                    )}
                    <p className="mt-2 text-sm text-gray-500 text-left">
                      {formData.biography.length} حرف
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Political Information */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="px-4 sm:px-6 lg:px-8 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">المعلومات السياسية</h2>
                    <p className="text-sm text-gray-600 mt-1">بيانات الترشح والانتماء السياسي</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      التسلسل <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="number"
                      name="serial_number"
                      value={formData.serial_number}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.serial_number ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="أدخل الرقم التسلسلي"
                    />
                    {errors.serial_number && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.serial_number}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      رقم القائمة <span className="text-red-600"></span>
                    </label>
                    <input
                      type="text"
                      name="list_number"
                      value={formData.list_number}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.list_number ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="أدخل رقم القائمة"
                    />
                    {errors.list_number && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.list_number}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      المحافظة
                    </label>
                    {listLoading ? (
                      <div className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-500">
                        جاري تحميل المحافظات...
                      </div>
                    ) : listError ? (
                      <input
                        type="text"
                        name="constituency"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400"
                        placeholder="أدخل اسم المحافظة"
                      />
                    ) : (
                      <select
                        name="constituency_id"
                        value={formData.constituency_id}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 bg-white"
                      >
                        <option value="">اختر المحافظة</option>
                        {listOptions.map(option => (
                          <option key={option.id} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      اسم الحزب أو الكتلة <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="party_bloc_name"
                      value={formData.party_bloc_name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.party_bloc_name ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'
                      }`}
                      placeholder="أدخل اسم الحزب أو الكتلة السياسية"
                    />
                    {errors.party_bloc_name && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.party_bloc_name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      المنصب الحالي/السابق
                    </label>
                    <input
                      type="text"
                      name="current_position"
                      value={formData.current_position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400"
                      placeholder="مثال: عضو مجلس محافظة"
                    />
                  </div>

                  <div className="md:col-span-2 lg:col-span-3">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      شعار الحملة الانتخابية
                    </label>
                    <input
                      type="text"
                      name="campaign_slogan"
                      value={formData.campaign_slogan}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400"
                      placeholder="أدخل شعار حملتك الانتخابية"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Experience & Achievements */}
          <div className="border-b border-gray-200">
            <div className="px-4 sm:px-6 lg:px-8 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">الخبرات والإنجازات</h2>
                    <p className="text-sm text-gray-600 mt-1">أبرز إنجازاتك وخبراتك المهنية</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      الإنجازات السابقة
                    </label>
                    <textarea
                      name="achievements"
                      value={formData.achievements}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 resize-none"
                      placeholder="اذكر أهم إنجازاتك المهنية والسياسية..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      الخبرة العملية
                    </label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 resize-none"
                      placeholder="صف خبراتك العملية والمهنية..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      المهارات
                    </label>
                    <textarea
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 resize-none"
                      placeholder="أدخل مهاراتك الرئيسية..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      الوعود للناخبين
                    </label>
                    <textarea
                      name="voter_promises"
                      value={formData.voter_promises}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 resize-none"
                      placeholder="ماذا ستقدم للناخبين..."
                    />
                  </div>

                  <div className="lg:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      معلومات إضافية
                    </label>
                    <textarea
                      name="additional_info"
                      value={formData.additional_info}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 resize-none"
                      placeholder="أي معلومات إضافية تود إضافتها..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Education */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="px-4 sm:px-6 lg:px-8 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">المؤهلات العلمية</h2>
                    <p className="text-sm text-gray-600 mt-1">أضف مؤهلاتك التعليمية</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {education.map((ed, idx) => (
                    <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                          المؤهل {idx + 1}
                        </h3>
                        {education.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeEducation(idx)}
                            className="text-red-600 hover:text-red-700 transition-colors"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            الدرجة العلمية
                          </label>
                          <input
                            type="text"
                            name="degree"
                            value={ed.degree}
                            onChange={e => handleEducationChange(idx, e)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="مثال: بكالوريوس"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            المؤسسة التعليمية
                          </label>
                          <input
                            type="text"
                            name="institution"
                            value={ed.institution}
                            onChange={e => handleEducationChange(idx, e)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="اسم الجامعة أو المعهد"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            التخصص
                          </label>
                          <input
                            type="text"
                            name="field_of_study"
                            value={ed.field_of_study}
                            onChange={e => handleEducationChange(idx, e)}
                                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="مجال الدراسة"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              سنة البدء
                            </label>
                            <input
                              type="number"
                              name="start_year"
                              value={ed.start_year}
                              onChange={e => handleEducationChange(idx, e)}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="2010"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              سنة التخرج
                            </label>
                            <input
                              type="number"
                              name="end_year"
                              value={ed.end_year}
                              onChange={e => handleEducationChange(idx, e)}
                              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="2014"
                            />
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            وصف إضافي
                          </label>
                          <input
                            type="text"
                            name="description"
                            value={ed.description}
                            onChange={e => handleEducationChange(idx, e)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="معلومات إضافية عن هذا المؤهل"
                          />
                        </div>
                      </div>
                      {errors[`education_${idx}`] && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors[`education_${idx}`]}
                        </p>
                      )}
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={addEducation}
                    className="w-full md:w-auto px-6 py-3 bg-purple-50 text-purple-600 border-2 border-purple-200 rounded-lg font-medium hover:bg-purple-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    إضافة مؤهل علمي آخر
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Media & Links */}
          <div className="border-b border-gray-200">
            <div className="px-4 sm:px-6 lg:px-8 py-12">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">الوسائط والروابط</h2>
                    <p className="text-sm text-gray-600 mt-1">الصور الشخصية ووسائل التواصل</p>
                  </div>
                </div>

                {/* Profile Images */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">الصور الشخصية</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        صورة الملف الشخصي
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={e => handleFileChange(e, 'profile')}
                          className="hidden"
                          id="profile-image"
                        />
                        <label
                          htmlFor="profile-image"
                          className="w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100"
                        >
                          <Upload className="w-8 h-8 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-600">
                            {profileImage ? profileImage.name : 'اضغط لرفع صورة الملف الشخصي'}
                          </span>
                          <span className="text-xs text-gray-500 mt-1">PNG, JPG حتى 5MB</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        صورة الغلاف
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={e => handleFileChange(e, 'banner')}
                          className="hidden"
                          id="banner-image"
                        />
                        <label
                          htmlFor="banner-image"
                          className="w-full px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100"
                        >
                          <Upload className="w-8 h-8 text-gray-400 mb-2" />
                          <span className="text-sm text-gray-600">
                            {profileBannerImage ? profileBannerImage.name : 'اضغط لرفع صورة الغلاف'}
                          </span>
                          <span className="text-xs text-gray-500 mt-1">PNG, JPG حتى 10MB</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">روابط التواصل الاجتماعي</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        فيسبوك
                      </label>
                      <input
                        type="url"
                        name="facebook_link"
                        value={formData.facebook_link}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://facebook.com/username"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        تويتر
                      </label>
                      <input
                        type="url"
                        name="twitter_link"
                        value={formData.twitter_link}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://twitter.com/username"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        إنستغرام
                      </label>
                      <input
                        type="url"
                        name="instagram_link"
                        value={formData.instagram_link}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://instagram.com/username"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        لينكدإن
                      </label>
                      <input
                        type="url"
                        name="linkedin_link"
                        value={formData.linkedin_link}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        يوتيوب
                      </label>
                      <input
                        type="url"
                        name="youtube_link"
                        value={formData.youtube_link}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://youtube.com/channel"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        تيك توك
                      </label>
                      <input
                        type="url"
                        name="tiktok_link"
                        value={formData.tiktok_link}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://tiktok.com/@username"
                      />
                    </div>

                    <div className="md:col-span-2 lg:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        الموقع الإلكتروني
                      </label>
                      <input
                        type="url"
                        name="website_link"
                        value={formData.website_link}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="bg-gray-50">
            <div className="px-4 sm:px-6 lg:px-8 py-12">
              <div className="max-w-3xl mx-auto text-center">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    تأكيد البيانات
                  </h3>
                  <p className="text-sm text-blue-700">
                    بالضغط على زر الإرسال، أقر بأن جميع المعلومات المقدمة صحيحة ودقيقة وأتحمل مسؤولية أي معلومات خاطئة.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                      </svg>
                      جاري إرسال البيانات...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FileText className="w-5 h-5" />
                      إرسال نموذج التسجيل
                    </span>
                  )}
                </button>

                <p className="mt-4 text-sm text-gray-600">
                  سيتم مراجعة طلبك خلال 24-48 ساعة
                </p>
              </div>
            </div>
          </div>
        </form>

        {/* Success/Error Popup */}
        {popup.show && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm p-4">
            <div className={`bg-white rounded-xl shadow-2xl p-8 max-w-md w-full transform transition-all ${
              popup.success ? 'border-t-4 border-green-500' : 'border-t-4 border-red-500'
            }`}>
              <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
                popup.success ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {popup.success ? (
                  <CheckCircle className="w-10 h-10 text-green-600" />
                ) : (
                  <AlertCircle className="w-10 h-10 text-red-600" />
                )}
              </div>

              <h2 className={`text-2xl font-bold text-center mb-3 ${
                popup.success ? 'text-green-800' : 'text-red-800'
              }`}>
                {popup.success ? 'تم التسجيل بنجاح!' : 'حدث خطأ!'}
              </h2>

              <p className="text-center text-gray-600 mb-6">
                {popup.message}
              </p>

              <button
                onClick={() => {
                  setPopup({ ...popup, show: false });
                  if (popup.success) {
                    navigate('/');
                  }
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
              >
                {popup.success ? 'العودة للصفحة الرئيسية' : 'حاول مرة أخرى'}
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CandidateRegistration;