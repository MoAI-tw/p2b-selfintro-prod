import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout/Layout';
import GeneratorSteps from '../components/GeneratorSteps';
import { useGenerator, WorkExperience } from '../contexts/GeneratorContext';

// 導入實際資料
import { companies } from '../data/companies';
import { jobPositions } from '../data/jobPositions';
import { schools } from '../data/schools';
import { departments } from '../data/departments';
import { industries, jobCategories } from '../data/jobCategories';

// 技能等級選項
const SKILL_LEVELS = ['入門', '基礎', '中等', '精通', '專家'];
const DEGREE_OPTIONS = ['學士', '碩士', '博士', '專科', '高中職'];
const SKILL_OPTIONS = [
  'JavaScript/TypeScript', 'React.js', 'Vue.js', 'Angular', 'HTML5/CSS3', 'TailwindCSS', 'Node.js', 'Python',
  'Java', 'C#', 'PHP', 'SQL', 'MongoDB', 'RESTful API', 'GraphQL', 'Git', 'Docker', 'Kubernetes', 'AWS', 'Azure',
  '專案管理', '系統分析', '資料分析', 'UI/UX設計', '溝通協調', '團隊合作', '問題解決', '使用者研究'
];

export interface Education {
  school: string;
  degree: string;
  major: string;
  year: string;
}

export interface Skill {
  name: string;
  level: string;
}

const Generator: React.FC = () => {
  const navigate = useNavigate();
  
  const {
    name, setName,
    occupation, setOccupation,
    jobDetail, setJobDetail,
    workExperiences, setWorkExperiences,
    educations, setEducations,
    skillList, setSkillList,
    setSkills
  } = useGenerator();

  // 自動提示狀態
  const [companySuggest, setCompanySuggest] = useState<string[]>([]);
  const [positionSuggest, setPositionSuggest] = useState<string[]>([]);
  const [schoolSuggest, setSchoolSuggest] = useState<string[]>([]);
  const [majorSuggest, setMajorSuggest] = useState<string[]>([]);
  const [skillSuggest, setSkillSuggest] = useState<string[]>([]);
  const [currentEditIndex, setCurrentEditIndex] = useState(-1);

  // 職務選擇狀態
  const [currentSubcategories, setCurrentSubcategories] = useState<{name: string, jobs: string[]}[]>([]);
  const [currentJobs, setCurrentJobs] = useState<string[]>([]);

  // 當行業類別變更時更新職務類別選項
  useEffect(() => {
    // 當選擇了職務類別時，設置對應的子類別
    const selectedCategory = jobCategories.find(cat => cat.name === jobDetail.jobCategory);
    if (selectedCategory) {
      setCurrentSubcategories(selectedCategory.subcategories);
      
      // 如果當前選中的子類別不在新的子類別列表中，則清空子類別選擇
      if (!selectedCategory.subcategories.some(sub => sub.name === jobDetail.jobSubcategory)) {
        setJobDetail({...jobDetail, jobSubcategory: '', specificPosition: ''});
      }
    } else {
      setCurrentSubcategories([]);
      if (jobDetail.jobSubcategory || jobDetail.specificPosition) {
        setJobDetail({...jobDetail, jobSubcategory: '', specificPosition: ''});
      }
    }
  }, [jobDetail.jobCategory]);

  // 當職務子類別變更時更新職務選項
  useEffect(() => {
    // 當選擇了子類別時，設置對應的職務列表
    const selectedCategory = jobCategories.find(cat => cat.name === jobDetail.jobCategory);
    if (selectedCategory) {
      const selectedSubcategory = selectedCategory.subcategories.find(sub => sub.name === jobDetail.jobSubcategory);
      if (selectedSubcategory) {
        setCurrentJobs(selectedSubcategory.jobs);
        
        // 如果當前選中的職位不在新的職位列表中，則清空職位選擇
        if (!selectedSubcategory.jobs.includes(jobDetail.specificPosition)) {
          setJobDetail({...jobDetail, specificPosition: ''});
        }
      } else {
        setCurrentJobs([]);
        if (jobDetail.specificPosition) {
          setJobDetail({...jobDetail, specificPosition: ''});
        }
      }
    }
  }, [jobDetail.jobCategory, jobDetail.jobSubcategory]);

  // 當特定職位變更時，更新職業欄位
  useEffect(() => {
    if (jobDetail.specificPosition) {
      setOccupation(jobDetail.specificPosition);
    }
  }, [jobDetail.specificPosition]);

  // 教育背景管理
  const addEducation = () => {
    setEducations([...educations, { school: '', degree: '學士', major: '', year: '' }]);
  };

  const updateEducation = (index: number, field: keyof Education, value: string) => {
    const updatedEducations = [...educations];
    updatedEducations[index][field] = value;
    setEducations(updatedEducations);
  };

  const removeEducation = (index: number) => {
    if (educations.length > 1) {
      setEducations(educations.filter((_, i) => i !== index));
    }
  };

  // 工作經歷管理
  const addWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { company: '', position: '', description: '' }
    ]);
  };

  const updateWorkExperience = (index: number, field: keyof WorkExperience, value: string) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][field] = value;
    setWorkExperiences(updatedExperiences);
  };

  const removeWorkExperience = (index: number) => {
    if (workExperiences.length > 1) {
      setWorkExperiences(workExperiences.filter((_, i) => i !== index));
    }
  };

  // 專業技能管理
  const addSkill = () => {
    setSkillList([...skillList, { name: '', level: '中等' }]);
  };

  const updateSkill = (index: number, field: keyof Skill, value: string) => {
    const updatedSkills = [...skillList];
    updatedSkills[index][field] = value;
    setSkillList(updatedSkills);
  };

  const removeSkill = (index: number) => {
    if (skillList.length > 1) {
      setSkillList(skillList.filter((_, i) => i !== index));
    }
  };

  // 表單提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 驗證必填欄位
    if (!name.trim() || !occupation.trim()) {
      alert('請至少填寫姓名和職業');
      return;
    }
    
    // 更新技能文字
    const skillsText = skillList.map(s => `${s.name} (${s.level})`).join('、');
    setSkills(skillsText);
    
    // 進入下一步
    navigate('/generation-settings');
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <GeneratorSteps currentStep="input" />

          {/* 頁面標題 */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">填寫個人資料</h2>
            <p className="text-sm text-gray-500 mt-1">請填寫以下資料，以便生成更符合您需求的自傳</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* 基本資料卡片 */}
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-indigo-700 mb-4 flex items-center">
                <div className="w-6 h-6 rounded-full bg-indigo-700 text-white flex items-center justify-center text-sm mr-2">1</div>
                基本資料
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">姓名 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">生日</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* 職務選擇卡片 */}
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-indigo-700 mb-4 flex items-center">
                <div className="w-6 h-6 rounded-full bg-indigo-700 text-white flex items-center justify-center text-sm mr-2">2</div>
                選擇職務類別
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">行業類別 <span className="text-red-500">*</span></label>
                  <select
                    value={jobDetail.industry}
                    onChange={(e) => setJobDetail({...jobDetail, industry: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  >
                    <option value="">請選擇行業類別</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">職務類別 <span className="text-red-500">*</span></label>
                  <select
                    value={jobDetail.jobCategory}
                    onChange={(e) => setJobDetail({...jobDetail, jobCategory: e.target.value, jobSubcategory: '', specificPosition: ''})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  >
                    <option value="">請選擇職務類別</option>
                    {jobCategories.map(category => (
                      <option key={category.name} value={category.name}>{category.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">職務子類別 <span className="text-red-500">*</span></label>
                  <select
                    value={jobDetail.jobSubcategory}
                    onChange={(e) => setJobDetail({...jobDetail, jobSubcategory: e.target.value, specificPosition: ''})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled={!jobDetail.jobCategory}
                    required
                  >
                    <option value="">請選擇職務子類別</option>
                    {currentSubcategories.map(sub => (
                      <option key={sub.name} value={sub.name}>{sub.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">特定職位 <span className="text-red-500">*</span></label>
                  <select
                    value={jobDetail.specificPosition}
                    onChange={(e) => setJobDetail({...jobDetail, specificPosition: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled={!jobDetail.jobSubcategory}
                    required
                  >
                    <option value="">請選擇特定職位</option>
                    {currentJobs.map(job => (
                      <option key={job} value={job}>{job}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">職稱 (可自訂) <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">若特定職位已選擇，此欄位會自動填入，您也可以自行修改</p>
                </div>
              </div>
            </div>

            {/* 學歷卡片 */}
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-indigo-700 flex items-center">
                  <div className="w-6 h-6 rounded-full bg-indigo-700 text-white flex items-center justify-center text-sm mr-2">3</div>
                  學歷
                </h3>
                <button
                  type="button"
                  onClick={addEducation}
                  className="text-sm px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 flex items-center"
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-1" />
                  新增學歷
                </button>
              </div>
              
              {educations.map((edu, index) => (
                <div key={index} className={`border rounded-md p-4 mb-3 ${index > 0 ? 'border-red-300 bg-red-50' : ''}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">學校名稱</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={edu.school}
                          onChange={(e) => {
                            updateEducation(index, 'school', e.target.value);
                            const val = e.target.value.trim();
                            if (val.length > 0) {
                              setSchoolSuggest(schools.filter(s => s.includes(val)).slice(0, 6));
                              setCurrentEditIndex(index);
                            } else {
                              setSchoolSuggest([]);
                            }
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {schoolSuggest.length > 0 && currentEditIndex === index && (
                          <ul className="absolute z-10 left-0 right-0 bg-white border border-gray-200 rounded shadow-lg mt-1 max-h-48 overflow-auto">
                            {schoolSuggest.map((school) => (
                              <li
                                key={school}
                                className="px-3 py-2 hover:bg-indigo-50 cursor-pointer"
                                onMouseDown={() => {
                                  updateEducation(index, 'school', school);
                                  setSchoolSuggest([]);
                                }}
                              >
                                {school}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">學位</label>
                      <select
                        value={edu.degree}
                        onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        {DEGREE_OPTIONS.map(degree => (
                          <option key={degree} value={degree}>{degree}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">科系 / 專業</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={edu.major}
                          onChange={(e) => {
                            updateEducation(index, 'major', e.target.value);
                            const val = e.target.value.trim();
                            if (val.length > 0) {
                              const filtered = departments.filter(d => 
                                d.toLowerCase().includes(val.toLowerCase())
                              ).slice(0, 6);
                              setMajorSuggest(filtered);
                              setCurrentEditIndex(index + 300);
                            } else {
                              setMajorSuggest([]);
                            }
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {majorSuggest.length > 0 && currentEditIndex === index + 300 && (
                          <ul className="absolute z-10 left-0 right-0 bg-white border border-gray-200 rounded shadow-lg mt-1 max-h-48 overflow-auto">
                            {majorSuggest.map((major) => (
                              <li
                                key={major}
                                className="px-3 py-2 hover:bg-indigo-50 cursor-pointer"
                                onMouseDown={() => {
                                  updateEducation(index, 'major', major);
                                  setMajorSuggest([]);
                                }}
                              >
                                {major}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">畢業年份</label>
                      <input
                        type="text"
                        value={edu.year}
                        onChange={(e) => updateEducation(index, 'year', e.target.value)}
                        placeholder="例：2020"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  {index > 0 && (
                    <div className="flex justify-end mt-2">
                      <button
                        type="button"
                        onClick={() => removeEducation(index)}
                        className="text-sm px-2 py-1 text-red-600 hover:text-red-800"
                      >
                        <FontAwesomeIcon icon={faTrash} className="mr-1" />
                        刪除此學歷
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 工作經驗卡片 */}
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-indigo-700 flex items-center">
                  <div className="w-6 h-6 rounded-full bg-indigo-700 text-white flex items-center justify-center text-sm mr-2">4</div>
                  工作經驗
                </h3>
                <button
                  type="button"
                  onClick={addWorkExperience}
                  className="text-sm px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 flex items-center"
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-1" />
                  新增工作經驗
                </button>
              </div>
              
              {workExperiences.map((exp, index) => (
                <div key={index} className={`border rounded-md p-4 mb-3 ${index > 0 ? 'border-red-300 bg-red-50' : ''}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">公司名稱</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => {
                            updateWorkExperience(index, 'company', e.target.value);
                            const val = e.target.value.trim();
                            if (val.length > 0) {
                              const filtered = companies.filter(c => 
                                c.toLowerCase().includes(val.toLowerCase())
                              ).slice(0, 6);
                              setCompanySuggest(filtered);
                              setCurrentEditIndex(index);
                            } else {
                              setCompanySuggest([]);
                            }
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {companySuggest.length > 0 && currentEditIndex === index && (
                          <ul className="absolute z-10 left-0 right-0 bg-white border border-gray-200 rounded shadow-lg mt-1 max-h-48 overflow-auto">
                            {companySuggest.map((company) => (
                              <li
                                key={company}
                                className="px-3 py-2 hover:bg-indigo-50 cursor-pointer"
                                onMouseDown={() => {
                                  updateWorkExperience(index, 'company', company);
                                  setCompanySuggest([]);
                                }}
                              >
                                {company}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">職位</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={exp.position}
                          onChange={(e) => {
                            updateWorkExperience(index, 'position', e.target.value);
                            const val = e.target.value.trim();
                            if (val.length > 0) {
                              const filtered = jobPositions.filter(p => 
                                p.toLowerCase().includes(val.toLowerCase())
                              ).slice(0, 6);
                              setPositionSuggest(filtered);
                              setCurrentEditIndex(index + 100); // 避免與學校編輯衝突
                            } else {
                              setPositionSuggest([]);
                            }
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {positionSuggest.length > 0 && currentEditIndex === index + 100 && (
                          <ul className="absolute z-10 left-0 right-0 bg-white border border-gray-200 rounded shadow-lg mt-1 max-h-48 overflow-auto">
                            {positionSuggest.map((position) => (
                              <li
                                key={position}
                                className="px-3 py-2 hover:bg-indigo-50 cursor-pointer"
                                onMouseDown={() => {
                                  updateWorkExperience(index, 'position', position);
                                  setPositionSuggest([]);
                                }}
                              >
                                {position}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">工作描述</label>
                      <textarea
                        rows={3}
                        value={exp.description}
                        onChange={(e) => updateWorkExperience(index, 'description', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  {index > 0 && (
                    <div className="flex justify-end mt-2">
                      <button
                        type="button"
                        onClick={() => removeWorkExperience(index)}
                        className="text-sm px-2 py-1 text-red-600 hover:text-red-800"
                      >
                        <FontAwesomeIcon icon={faTrash} className="mr-1" />
                        刪除此工作經驗
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 專業技能卡片 */}
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-indigo-700 flex items-center">
                  <div className="w-6 h-6 rounded-full bg-indigo-700 text-white flex items-center justify-center text-sm mr-2">5</div>
                  專業技能
                </h3>
                <button
                  type="button"
                  onClick={addSkill}
                  className="text-sm px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 flex items-center"
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-1" />
                  新增技能
                </button>
              </div>
              
              {skillList.map((skill, index) => (
                <div key={index} className={`border rounded-md p-4 mb-3 ${index > 0 ? 'border-red-300 bg-red-50' : ''}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">技能名稱</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) => {
                            updateSkill(index, 'name', e.target.value);
                            const val = e.target.value.trim();
                            if (val.length > 0) {
                              setSkillSuggest(SKILL_OPTIONS.filter(s => s.toLowerCase().includes(val.toLowerCase())).slice(0, 6));
                              setCurrentEditIndex(index + 200); // 避免與其他編輯衝突
                            } else {
                              setSkillSuggest([]);
                            }
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {skillSuggest.length > 0 && currentEditIndex === index + 200 && (
                          <ul className="absolute z-10 left-0 right-0 bg-white border border-gray-200 rounded shadow-lg mt-1 max-h-48 overflow-auto">
                            {skillSuggest.map((s) => (
                              <li
                                key={s}
                                className="px-3 py-2 hover:bg-indigo-50 cursor-pointer"
                                onMouseDown={() => {
                                  updateSkill(index, 'name', s);
                                  setSkillSuggest([]);
                                }}
                              >
                                {s}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">熟練程度</label>
                      <select
                        value={skill.level}
                        onChange={(e) => updateSkill(index, 'level', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        {SKILL_LEVELS.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {index > 0 && (
                    <div className="flex justify-end mt-2">
                      <button
                        type="button"
                        onClick={() => removeSkill(index)}
                        className="text-sm px-2 py-1 text-red-600 hover:text-red-800"
                      >
                        <FontAwesomeIcon icon={faTrash} className="mr-1" />
                        刪除此技能
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 底部按鈕 */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                下一步
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Generator; 