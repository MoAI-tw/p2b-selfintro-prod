import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface WorkExperience {
  company: string;
  position: string;
  description: string;
}

// 職業相關資訊
export interface JobDetail {
  industry: string;        // 行業類別
  jobCategory: string;     // 職務類別
  jobSubcategory: string;  // 職務子類別
  specificPosition: string; // 特定職位
}

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

export type ContentLength = 'concise' | 'medium' | 'detailed';
export type FocusPoint = 'work_experience' | 'professional_skills' | 'education' | 'personal_traits' | 'achievements';

interface GeneratorContextType {
  // User data
  name: string;
  setName: (name: string) => void;
  age: string;
  setAge: (age: string) => void;
  occupation: string;
  setOccupation: (occupation: string) => void;
  // 增加職業詳細資訊
  jobDetail: JobDetail;
  setJobDetail: (detail: JobDetail) => void;
  workExperiences: WorkExperience[];
  setWorkExperiences: (experiences: WorkExperience[]) => void;
  educations: Education[];
  setEducations: (educations: Education[]) => void;
  skillList: Skill[];
  setSkillList: (skills: Skill[]) => void;
  skills: string;
  setSkills: (skills: string) => void;
  achievements: string;
  setAchievements: (achievements: string) => void;
  
  // Generation settings
  contentLength: ContentLength;
  setContentLength: (length: ContentLength) => void;
  focusPoints: FocusPoint[];
  setFocusPoints: (points: FocusPoint[]) => void;
  
  // Generated content
  generatedContent: string;
  setGeneratedContent: (content: string) => void;
  
  // Helper methods
  generateIntroduction: () => Promise<string>;
  resetData: () => void;
}

const defaultGeneratorContext: GeneratorContextType = {
  name: '',
  setName: () => {},
  age: '',
  setAge: () => {},
  occupation: '',
  setOccupation: () => {},
  jobDetail: { industry: '', jobCategory: '', jobSubcategory: '', specificPosition: '' },
  setJobDetail: () => {},
  workExperiences: [{ company: '', position: '', description: '' }],
  setWorkExperiences: () => {},
  educations: [{ school: '', degree: '學士', major: '', year: '' }],
  setEducations: () => {},
  skillList: [{ name: '', level: '中等' }],
  setSkillList: () => {},
  skills: '',
  setSkills: () => {},
  achievements: '',
  setAchievements: () => {},
  
  contentLength: 'medium',
  setContentLength: () => {},
  focusPoints: ['work_experience'],
  setFocusPoints: () => {},
  
  generatedContent: '',
  setGeneratedContent: () => {},
  
  generateIntroduction: async () => '',
  resetData: () => {},
};

export const GeneratorContext = createContext<GeneratorContextType>(defaultGeneratorContext);

export const useGenerator = () => useContext(GeneratorContext);

export const GeneratorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [jobDetail, setJobDetail] = useState<JobDetail>({ 
    industry: '', 
    jobCategory: '', 
    jobSubcategory: '', 
    specificPosition: '' 
  });
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([
    { company: '', position: '', description: '' }
  ]);
  const [educations, setEducations] = useState<Education[]>([
    { school: '', degree: '學士', major: '', year: '' }
  ]);
  const [skillList, setSkillList] = useState<Skill[]>([
    { name: 'JavaScript/TypeScript', level: '中等' }
  ]);
  const [skills, setSkills] = useState('');
  const [achievements, setAchievements] = useState('');
  
  const [contentLength, setContentLength] = useState<ContentLength>('medium');
  const [focusPoints, setFocusPoints] = useState<FocusPoint[]>(['work_experience']);
  
  const [generatedContent, setGeneratedContent] = useState('');
  
  // 將表單資料與設定組合成 prompt
  const buildPrompt = () => {
    let prompt = `請根據以下資訊，生成一篇適合求職或自我介紹的中文自傳：\n`;
    prompt += `姓名：${name}\n`;
    if (age) prompt += `年齡：${age}\n`;
    prompt += `職業：${occupation}\n`;
    
    // 添加詳細職業資訊
    if (jobDetail.industry || jobDetail.jobCategory || jobDetail.jobSubcategory || jobDetail.specificPosition) {
      prompt += `職業詳細資訊：\n`;
      if (jobDetail.industry) prompt += `- 行業類別：${jobDetail.industry}\n`;
      if (jobDetail.jobCategory) prompt += `- 職務類別：${jobDetail.jobCategory}\n`;
      if (jobDetail.jobSubcategory) prompt += `- 職務子類別：${jobDetail.jobSubcategory}\n`;
      if (jobDetail.specificPosition) prompt += `- 特定職位：${jobDetail.specificPosition}\n`;
    }
    
    // 教育背景
    if (educations.length > 0) {
      prompt += `教育背景：`;
      educations.forEach((edu) => {
        if (edu.school || edu.major) {
          prompt += `\n- 學校：${edu.school}，學位：${edu.degree}，專業：${edu.major}，畢業年份：${edu.year}`;
        }
      });
      prompt += `\n`;
    }
    
    // 工作經歷
    if (workExperiences.length > 0) {
      prompt += `工作經歷：`;
      workExperiences.forEach((exp) => {
        if (exp.company || exp.position || exp.description) {
          prompt += `\n- 公司：${exp.company}，職位：${exp.position}，內容：${exp.description}`;
        }
      });
      prompt += `\n`;
    }
    
    // 專業技能
    if (skillList.length > 0) {
      prompt += `專業技能：`;
      skillList.forEach((skill, idx) => {
        if (skill.name) {
          if (idx > 0) prompt += '、';
          prompt += `${skill.name} (${skill.level})`;
        }
      });
      prompt += `\n`;
    }
    
    if (achievements) prompt += `成就與獎項：${achievements}\n`;
    prompt += `\n重點強調：${focusPoints.map(f => {
      switch(f) {
        case 'work_experience': return '工作經驗';
        case 'professional_skills': return '專業技能';
        case 'education': return '教育背景';
        case 'personal_traits': return '個人特質';
        case 'achievements': return '成就獎項';
        default: return '';
      }
    }).join('、')}\n`;
    prompt += `內容長度：${contentLength === 'concise' ? '精簡' : contentLength === 'detailed' ? '詳細' : '適中'}\n`;
    prompt += `請以第一人稱、自然且具體的語氣撰寫。`;
    return prompt;
  };

  // 呼叫 OpenAI API 生成內容
  const generateIntroduction = async (): Promise<string> => {
    // 讀取 localStorage 的預設模板
    const defaultTemplateRaw = localStorage.getItem('default_prompt_template');
    let systemPrompt = '你是一位專業的中文自傳撰寫助手。';
    let userPrompt = '';
    if (defaultTemplateRaw) {
      try {
        const template = JSON.parse(defaultTemplateRaw);
        if (template.systemPrompt) systemPrompt = template.systemPrompt;
        if (template.userPrompt) userPrompt = template.userPrompt;
      } catch {}
    }
    // 組裝 userPrompt 並做變數替換
    let prompt = '';
    if (userPrompt) {
      prompt = userPrompt;
      const replaceMap = {
        name,
        age,
        occupation,
        industry: jobDetail.industry,
        job_category: jobDetail.jobCategory,
        job_subcategory: jobDetail.jobSubcategory,
        specific_position: jobDetail.specificPosition,
        skills,
        achievements,
        work_experiences: workExperiences.map(e => `${e.company} ${e.position} ${e.description}`).join('；'),
        educations: educations.map(e => `${e.school} ${e.degree} ${e.major} ${e.year}`).join('；'),
        skills_list: skillList.map(s => `${s.name} (${s.level})`).join('；'),
        content_length: contentLength,
        focus_points: focusPoints.join('、'),
      };
      Object.entries(replaceMap).forEach(([key, val]) => {
        prompt = prompt.replace(new RegExp(`{${key}}`, 'g'), val);
        prompt = prompt.replace(new RegExp(`{{${key}}}}`, 'g'), val);
      });
    } else {
      prompt = buildPrompt();
    }
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: prompt }
          ],
          max_tokens: 2048,
          temperature: 0.7
        })
      });
      const data = await response.json();
      const content = data.choices?.[0]?.message?.content?.trim() || '';
      setGeneratedContent(content);
      return content;
    } catch (err) {
      setGeneratedContent('⚠️ 產生內容時發生錯誤，請稍後再試。');
      return '⚠️ 產生內容時發生錯誤，請稍後再試。';
    }
  };

  const resetData = () => {
    setName('');
    setAge('');
    setOccupation('');
    setJobDetail({
      industry: '',
      jobCategory: '',
      jobSubcategory: '',
      specificPosition: ''
    });
    setWorkExperiences([{ company: '', position: '', description: '' }]);
    setEducations([{ school: '', degree: '學士', major: '', year: '' }]);
    setSkillList([{ name: 'JavaScript/TypeScript', level: '中等' }]);
    setSkills('');
    setAchievements('');
    setContentLength('medium');
    setFocusPoints(['work_experience']);
    setGeneratedContent('');
  };
  
  return (
    <GeneratorContext.Provider
      value={{
        name,
        setName,
        age,
        setAge,
        occupation,
        setOccupation,
        jobDetail,
        setJobDetail,
        workExperiences,
        setWorkExperiences,
        educations,
        setEducations,
        skillList,
        setSkillList,
        skills,
        setSkills,
        achievements,
        setAchievements,
        
        contentLength,
        setContentLength,
        focusPoints,
        setFocusPoints,
        
        generatedContent,
        setGeneratedContent,
        
        generateIntroduction,
        resetData,
      }}
    >
      {children}
    </GeneratorContext.Provider>
  );
}; 