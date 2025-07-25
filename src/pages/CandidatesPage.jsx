import React, { useState, useEffect, useCallback } from "react";
import {
  Search,
  ChevronDown,
  User,
  MapPin,
  Phone,
  Award,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const CandidatesPage = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    constituency_id: "",
    party_bloc_name: "",
    has_education: "",
    has_social_links: "",
    sort_by: "created_at",
    sort_order: "desc",
    per_page: 12,
    page: 1,
  });
  const [pagination, setPagination] = useState(null);
  const [constituencies, setConstituencies] = useState([]);
  const [parties, setParties] = useState([]);
  const navigate = useNavigate();

  const governorates = [
        {
            "id": 1,
            "name": "بغداد",
            "description": "محافظة بغداد",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 2,
            "name": "البصرة",
            "description": "محافظة البصرة",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 3,
            "name": "نينوى",
            "description": "محافظة نينوى",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 4,
            "name": "أربيل",
            "description": "محافظة أربيل",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 5,
            "name": "السليمانية",
            "description": "محافظة السليمانية",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 6,
            "name": "النجف",
            "description": "محافظة النجف",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 7,
            "name": "كربلاء",
            "description": "محافظة كربلاء",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 8,
            "name": "الأنبار",
            "description": "محافظة الأنبار",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 9,
            "name": "ديالى",
            "description": "محافظة ديالى",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 10,
            "name": "صلاح الدين",
            "description": "محافظة صلاح الدين",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 11,
            "name": "بابل",
            "description": "محافظة بابل",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 12,
            "name": "واسط",
            "description": "محافظة واسط",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 13,
            "name": "ميسان",
            "description": "محافظة ميسان",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 14,
            "name": "ذي قار",
            "description": "محافظة ذي قار",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 15,
            "name": "المثنى",
            "description": "محافظة المثنى",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 16,
            "name": "القادسية",
            "description": "محافظة القادسية",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 17,
            "name": "دهوك",
            "description": "محافظة دهوك",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        },
        {
            "id": 18,
            "name": "كركوك",
            "description": "محافظة كركوك",
            "created_at": "2025-07-15T12:12:52.000000Z",
            "updated_at": "2025-07-15T12:12:52.000000Z"
        }
    ]

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // Fetch candidates
  const fetchCandidates = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();

      // Add search parameter
      if (searchTerm) params.append("search", searchTerm);

      // Add filters
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });

      const response = await fetch(
        `https://skyblue-cormorant-755447.hostingersite.com/api/candidates?${params}`
      );
      const data = await response.json();

      if (data.success) {
        setCandidates(data.data);
        setPagination(data.meta.pagination);

        // Extract unique constituencies and parties for filters
        const uniqueConstituencies = [
          ...new Set(data.data.map((c) => c.constituency)),
        ];
        const uniqueParties = [
          ...new Set(data.data.map((c) => c.party_bloc_name).filter(Boolean)),
        ];

        setConstituencies(uniqueConstituencies);
        setParties(uniqueParties);
      }
    } catch (error) {
      console.error("Error fetching candidates:", error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm, filters]);

  useEffect(() => {
    fetchCandidates();
  }, [fetchCandidates]);

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      page: 1, // Reset to first page when filter changes
    }));
  };

  // Handle page change
  const handlePageChange = (page) => {
    setFilters((prev) => ({ ...prev, page }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white relative pt-20">
        {/* Creative Background Pattern */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-90"></div>
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066cc' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-xl">
          <div className="container mx-auto px-4 py-20">
            <h1 className="text-4xl md:text-4xl font-bold text-center mb-6 animate-fade-in">
              المرشحون للانتخابات
            </h1>
            <p className="text-xl md:text-xl text-center text-blue-100 max-w-3xl mx-auto">
              تعرف على المرشحين واطلع على برامجهم الانتخابية واختر من يمثل
              طموحاتك
            </p>
          </div>
        </div>

        {/* Search and Filters Section */}
        <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100">
          <div className="container mx-auto px-2 py-2">
            {/* Search Bar */}
            <div className="mb-2">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="ابحث عن مرشح بالاسم..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-12 pl-6 py-4 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 text-right text-lg transition-all duration-300"
                  dir="rtl"
                />
              </div>
            </div>

            {/* Filters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {/* Constituency Filter */}
              <div className="relative group">
                <select
                  value={filters.constituency_id}
                  onChange={(e) =>
                    handleFilterChange("constituency_id", e.target.value)
                  }
                  className="w-full px-4 py-3.5 pr-12 bg-transparent border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-blue-50/50 text-right appearance-none transition-all duration-300 hover:border-gray-400 text-gray-700 font-medium"
                  dir="rtl"
                >
                  <option value="">المحافظة</option>
                  {governorates.map((governorate) => (
                    <option key={governorate.id} value={governorate.id}>
                      {governorate.name}
                    </option>
                  ))}
                </select>
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300 group-hover:left-2">
                  <ChevronDown className="w-5 h-5 text-gray-500 transition-colors duration-300 group-hover:text-blue-500" />
                </div>
              </div>

              {/* Party Filter */}
              {/* <div className="relative">
              <select
                value={filters.party_bloc_name}
                onChange={(e) => handleFilterChange('party_bloc_name', e.target.value)}
                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none bg-white transition-all duration-300 hover:border-gray-300"
                dir="rtl"
              >
                <option value="">جميع الأحزاب</option>
                {parties.map((party, index) => (
                  <option key={index} value={party}>
                    {party}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div> */}

              {/* Education Filter */}
              {/* <div className="relative">
              <select
                value={filters.has_education}
                onChange={(e) => handleFilterChange('has_education', e.target.value)}
                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none bg-white transition-all duration-300 hover:border-gray-300"
                dir="rtl"
              >
                <option value="">التعليم</option>
                <option value="true">لديه تعليم</option>
                <option value="false">بدون تعليم</option>
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div> */}

              {/* Sort By */}
              <div className="relative">
              <select
                value={filters.sort_by}
                onChange={(e) => handleFilterChange('sort_by', e.target.value)}
                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none bg-white transition-all duration-300 hover:border-gray-300"
                dir="rtl"
              >
                <option value="created_at">الأحدث</option>
                <option value="first_name">الاسم</option>
                <option value="list_number">رقم القائمة</option>
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

              {/* Sort Order */}
              {/* <div className="relative">
              <select
                value={filters.sort_order}
                onChange={(e) => handleFilterChange('sort_order', e.target.value)}
                className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right appearance-none bg-white transition-all duration-300 hover:border-gray-300"
                dir="rtl"
              >
                <option value="desc">تنازلي</option>
                <option value="asc">تصاعدي</option>
              </select>
              <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div> */}
            </div>
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="container mx-auto px-4 py-12">
          {loading ? (
            <div className="flex flex-col justify-center items-center h-96">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200"></div>
                <div className="absolute top-0 animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
              </div>
              <p className="mt-4 text-gray-500 text-lg">
                جاري تحميل المرشحين...
              </p>
            </div>
          ) : candidates.length === 0 ? (
            <div className="text-center py-20">
              <User className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <p className="text-2xl text-gray-500 mb-2">
                لا توجد نتائج مطابقة للبحث
              </p>
              <p className="text-gray-400">
                حاول تغيير معايير البحث أو الفلاتر
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  onClick={() => navigate(`/candidate/${candidate.id}`)}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group transform hover:-translate-y-2"
                >
                  {/* Candidate Image Section */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                    {candidate.profile_image ? (
                      <img
                        src={candidate.profile_image}
                        alt={`${candidate.user.first_name} ${candidate.user.last_name}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRTVFN0VCIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iNjAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTEyMCAzMDBDMTIwIDI1NS44MTcgMTU1LjgxNyAyMjAgMjAwIDIyMEMyNDQuMTgzIDIyMCAyODAgMjU1LjgxNyAyODAgMzAwVjQwMEgxMjBWMzAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4=";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-300">
                        <User className="w-24 h-24 text-blue-600 opacity-50" />
                      </div>
                    )}

                    {/* List Number Badge */}
                    {candidate.serial_number && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                         {candidate.serial_number}
                      </div>
                    )}

                    {/* Party Badge */}
                    {candidate.party_bloc_name && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white text-sm font-medium text-right truncate">
                          {candidate.party_bloc_name}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Candidate Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-right group-hover:text-blue-600 transition-colors duration-300">
                      {candidate.user.first_name} {candidate.user.last_name}
                    </h3>

                    {/* Constituency */}
                    <div className="flex items-center justify-end gap-2 text-gray-600 mb-2">
                      <span className="text-sm">
                        {candidate.constituency.name}
                      </span>
                      <MapPin className="w-4 h-4" />
                    </div>

                    {/* Current Position */}
                    {candidate.current_position && (
                      <div className="flex items-center justify-end gap-2 text-gray-600 mb-3">
                        <span className="text-sm line-clamp-2 text-right">
                          {candidate.current_position}
                        </span>
                        <Briefcase className="w-4 h-4 flex-shrink-0" />
                      </div>
                    )}

                    {/* Education Indicator */}
                    {candidate.education && candidate.education.length > 0 && (
                      <div className="flex items-center justify-end gap-2 text-gray-600 mb-3">
                        <span className="text-sm">
                          {candidate.education[0].degree}
                        </span>
                        <GraduationCap className="w-4 h-4" />
                      </div>
                    )}

                    {/* Campaign Slogan */}
                    {candidate.campaign_slogan && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-blue-600 font-medium text-center italic">
                          "{candidate.campaign_slogan}"
                        </p>
                      </div>
                    )}

                    {/* View Details Button */}
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-700">
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {pagination && pagination.last_page > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <button
                onClick={() => handlePageChange(pagination.current_page - 1)}
                disabled={pagination.current_page === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="flex gap-1">
                {/* First Page */}
                {pagination.current_page > 3 && (
                  <>
                    <button
                      onClick={() => handlePageChange(1)}
                      className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-50 transition-all duration-300"
                    >
                      1
                    </button>
                    {pagination.current_page > 4 && (
                      <span className="px-2 py-2 text-gray-400">...</span>
                    )}
                  </>
                )}

                {/* Page Numbers */}
                {Array.from({ length: pagination.last_page }, (_, i) => i + 1)
                  .filter((page) => {
                    return (
                      page === pagination.current_page ||
                      page === pagination.current_page - 1 ||
                      page === pagination.current_page - 2 ||
                      page === pagination.current_page + 1 ||
                      page === pagination.current_page + 2
                    );
                  })
                  .map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                        page === pagination.current_page
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 hover:bg-blue-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                {/* Last Page */}
                {pagination.current_page < pagination.last_page - 2 && (
                  <>
                    {pagination.current_page < pagination.last_page - 3 && (
                      <span className="px-2 py-2 text-gray-400">...</span>
                    )}
                    <button
                      onClick={() => handlePageChange(pagination.last_page)}
                      className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-50 transition-all duration-300"
                    >
                      {pagination.last_page}
                    </button>
                  </>
                )}
              </div>

              <button
                onClick={() => handlePageChange(pagination.current_page + 1)}
                disabled={pagination.current_page === pagination.last_page}
                className="p-2 rounded-lg border border-gray-300 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Results Summary */}
          {pagination && (
            <div className="mt-6 text-center text-gray-600">
              <p>
                عرض {pagination.from} إلى {pagination.to} من أصل{" "}
                {pagination.total} مرشح
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

// Add CSS animations
const style = document.createElement("style");
style.textContent = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out;
  }

  .line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
document.head.appendChild(style);

export default CandidatesPage;
