import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';

const LLM_MODELS = [
  { label: 'gpt-3.5-turbo', value: 'gpt-3.5-turbo' },
  { label: 'gpt-3.5-turbo-16k', value: 'gpt-3.5-turbo-16k' },
  { label: 'gpt-4', value: 'gpt-4' },
  { label: 'gpt-4-32k', value: 'gpt-4-32k' },
  { label: 'gpt-4-turbo', value: 'gpt-4-turbo' },
  { label: 'gpt-4o', value: 'gpt-4o' },
  { label: 'gpt-4o-mini', value: 'gpt-4o-mini' },
  { label: 'gpt-4-turbo-preview', value: 'gpt-4-turbo-preview' },
];

const RANDOM_PROFILES = [
  {
    name: '王小明',
    education: '國立台灣大學 資訊管理學系',
    experience: 'ABC科技公司 資深工程師',
    skills: 'JavaScript, React, Node.js, 系統架構設計',
    industry: '科技業',
    job_position: '前端工程師',
    keywords: '跨部門協作, 敏捷開發, 前端最佳化',
    duration: '60',
  },
  {
    name: '李美麗',
    education: '國立政治大學 企業管理學系',
    experience: 'DEF集團 產品經理',
    skills: '產品規劃, 用戶研究, 數據分析, Scrum',
    industry: '電商',
    job_position: '產品經理',
    keywords: '用戶體驗, 數據驅動, 跨部門溝通',
    duration: '60',
  },
  {
    name: '陳大文',
    education: '國立成功大學 機械工程學系',
    experience: 'GHI製造公司 專案工程師',
    skills: '自動化, CAD, 專案管理, 品質管控',
    industry: '製造業',
    job_position: '專案工程師',
    keywords: '流程優化, 成本控制, 團隊合作',
    duration: '60',
  },
  {
    name: '林小華',
    education: '國立台灣師範大學 數學系',
    experience: 'JKL金融公司 數據分析師',
    skills: 'Python, R, 金融數據分析, 報表自動化',
    industry: '金融業',
    job_position: '數據分析師',
    keywords: '風險評估, 報表設計, 金融科技',
    duration: '60',
  },
  {
    name: '張雅婷',
    education: '國立台灣藝術大學 視覺傳達設計學系',
    experience: 'MNO設計公司 資深設計師',
    skills: 'UI/UX設計, Photoshop, Illustrator, 品牌設計',
    industry: '設計業',
    job_position: 'UI/UX設計師',
    keywords: '品牌識別, 使用者體驗, 創意發想',
    duration: '60',
  },
  {
    name: '黃志強',
    education: '國立中山大學 資訊工程學系',
    experience: 'PQR新創公司 後端工程師',
    skills: 'Python, Django, API設計, 雲端部署',
    industry: '新創',
    job_position: '後端工程師',
    keywords: 'API設計, 雲端架構, 敏捷開發',
    duration: '60',
  },
  {
    name: '吳欣怡',
    education: '國立清華大學 化學工程學系',
    experience: 'STU生技公司 研發工程師',
    skills: '生物技術, 實驗設計, 數據分析',
    industry: '生技業',
    job_position: '研發工程師',
    keywords: '新藥開發, 實驗優化, 團隊合作',
    duration: '60',
  },
  {
    name: '周子瑜',
    education: '國立交通大學 資訊科學與工程學系',
    experience: 'XYZ雲端公司 資安工程師',
    skills: '資安防護, 網路監控, Python, Linux',
    industry: '資安',
    job_position: '資安工程師',
    keywords: '滲透測試, 威脅分析, 自動化腳本',
    duration: '60',
  },
  {
    name: '許文豪',
    education: '國立中興大學 農業經濟學系',
    experience: 'ABC農產公司 行銷專員',
    skills: '市場分析, 社群經營, 活動企劃',
    industry: '農業',
    job_position: '行銷專員',
    keywords: '品牌推廣, 農產行銷, 客戶關係',
    duration: '60',
  },
  {
    name: '林怡君',
    education: '國立陽明大學 護理學系',
    experience: 'DEF醫院 護理師',
    skills: '臨床護理, 病患照護, 團隊協作',
    industry: '醫療',
    job_position: '護理師',
    keywords: '醫病溝通, 緊急應變, 病歷管理',
    duration: '60',
  },
  {
    name: '張書豪',
    education: '國立台灣體育運動大學 運動科學系',
    experience: 'GHI運動中心 健身教練',
    skills: '體能訓練, 客製化課程, 運動傷害預防',
    industry: '運動產業',
    job_position: '健身教練',
    keywords: '健康管理, 客戶服務, 團隊合作',
    duration: '60',
  },
  {
    name: '陳怡安',
    education: '國立台灣師範大學 英語學系',
    experience: 'JKL語言中心 英語講師',
    skills: '英語教學, 課程設計, 學生輔導',
    industry: '教育',
    job_position: '英語講師',
    keywords: '互動教學, 學習成效, 教學創新',
    duration: '60',
  },
  {
    name: '劉家豪',
    education: '國立高雄大學 法律學系',
    experience: 'MNO律師事務所 律師',
    skills: '法律諮詢, 合約審查, 訴訟代理',
    industry: '法律',
    job_position: '律師',
    keywords: '案件分析, 法律研究, 客戶溝通',
    duration: '60',
  },
  {
    name: '王心凌',
    education: '國立台灣科技大學 工業管理學系',
    experience: 'PQR科技公司 專案經理',
    skills: '專案規劃, 團隊管理, 進度控管',
    industry: '科技業',
    job_position: '專案經理',
    keywords: '跨部門協作, 風險管理, 溝通協調',
    duration: '60',
  },
  {
    name: '鄭宇翔',
    education: '國立中央大學 地球科學學系',
    experience: 'STU環境顧問公司 環境工程師',
    skills: '環境監測, 數據分析, 報告撰寫',
    industry: '環保',
    job_position: '環境工程師',
    keywords: '永續發展, 污染防治, 團隊合作',
    duration: '60',
  },
];

const defaultSystemPrompt = '你是一位專業的中文自傳撰寫助手。';
const defaultUserPrompt = `### ✨ 請根據產業特性，自動進行創意補足：\n\n#### ✅ 對所有產業共通的創意補足目標：\n\n- 根據使用者提供的職務與產業，**主動補足合理的工作情境、任務背景與成就故事**  \n- 若使用者僅提供模糊資訊（如「做過數據分析」、「提升績效」），請根據產業邏輯補出：\n  - 所處專案或事件（如併購案、季度報告、重要行銷活動、法規變更應對…）\n  - 使用的工具或方法（如 GA、Power BI、Bloomberg、SQL、CRM 系統…）\n  - 遇到的問題與挑戰（如數據異常、客戶流失、風險升高、預測偏差…）\n  - 解決方式與具體貢獻（不只說「分析」，而是「我如何判讀數據／與誰協作／調整了什麼邏輯」）\n  - 成效數據與影響層面（不只數字，而是對團隊／客戶／決策的實際影響）\n\n#### ✅ 特別提醒：\n\n- 對於**金融、法務、工程等較專業產業**，請**避免虛構事實或誇張不合邏輯的情境**，但仍須發揮合理的「專業故事敘事能力」。\n- 若資訊不足，請**主動參考該產業常見情境**進行故事補完（例如財務分析師可補充某一季度盈虧異常、ESG 成本影響分析等）\n\n---\n\n### ✨ 請務必遵守以下語氣與內容設定：\n\n#### ✅ 語氣自然、像聊天\n\n1. 要像在跟面試官輕鬆聊天，不是照稿唸。\n2. 使用台灣人常見的說話方式與詞彙，加入口語連接詞與語助詞，例如：「其實」、「像是」、「這段時間下來」、「我自己覺得」、「真的很有成就感」等。\n3. 開場要自然（如用「我叫…」或「大家好，我是…」），結尾請客氣親切（如：「也很期待有機會更認識貴公司團隊」、「謝謝您今天撥空聽我分享」）。\n4. 請避免書面用語（例如「我熟稔於」），改以平易近人的表達（例如「我蠻常用的」或「我很熟 GA 這套工具」）。\n\n---\n\n#### ✅ 術語簡化與專業呈現\n\n5. 若出現專業工具名稱，請使用台灣在地化常見縮寫與說法（例如 Google Analytics ➜ GA、Facebook ➜ FB、Instagram ➜ IG、Facebook Business ➜ Meta 後台），視情況補一小句白話解釋。\n6. 不要只列工具名稱，請描述「你怎麼用工具、得到了什麼洞察、採取了什麼策略、創造了什麼成果」。\n\n---\n\n#### ✅ 成就表現：請說出故事，不只是數字\n\n7. 成就描述請遵循：「活動背景 ➜ 遇到問題 ➜ 如何分析 ➜ 採取什麼行動 ➜ 數據成果 ➜ 自我回饋」這樣的口語 STAR 架構。\n8. 數據（如轉換率、點擊率、互動率）請結合場景與策略說明，不能單獨列數字。\n9. 請將「模糊的成果」轉化為「具體、有畫面的實戰經驗」。\n\n---\n\n### 🧠 **請主動補充創意細節（若使用者未提供）**\n\n10. 若使用者提供的內容不夠具體（例如只說「提升轉換率」或「做過社群行銷」），請合理補足以下內容：\n   - 一次具體活動主題（如母親節促銷、情人節抽獎、限時組合包等）\n   - 問題與挑戰點（如跳出率過高、轉換不佳）\n   - 你觀察到的數據與洞察\n   - 你做的調整（如素材、投放時間、受眾設定等）\n   - 成效數據與個人感受（例如覺得很有成就感、更了解用戶行為等）\n\n11. **創意補充須合情合理、符合業界邏輯，不可過度誇張或捏造虛假場景。**\n\n---\n\n### 🧭 結構請採用以下三段式：\n\n#### ① 開場介紹（我是誰）\n- 自我介紹＋基本背景＋目前工作概述（限簡述）\n\n#### ② 工作亮點與強項（我擅長什麼）\n- 具體成就故事（含活動主題、數據分析、策略調整與成效）\n- 展現你理解數據的能力、行銷觀察力與實際成果\n- 可補充跨部門協作、危機處理、創意發想等能力\n\n#### ③ 應徵動機與期待（我為什麼來）\n- 說明對這份職缺或產業的興趣\n- 描述你希望帶來的影響與發揮空間\n- 自然收尾，保留人味與禮貌\n\n---\n\n### 📝 使用者資料：\n\n- 姓名：{name}  \n- 學歷：{education}  \n- 現職與職務：{experience}  \n- 專長技能：{skills}  \n- 產業：{industry}  \n- 應徵職位：{job_position}  \n- 強調關鍵字：{keywords}  \n- 自由補充範圍：全部  \n- 語言：繁體中文  \n- 時長：{duration} 秒  \n`;

const defaultForm = {
  name: '王小明',
  education: '國立台灣大學 資訊管理學系',
  experience: 'ABC科技公司 資深工程師',
  skills: 'JavaScript, React, Node.js, 系統架構設計',
  industry: '科技業',
  job_position: '前端工程師',
  keywords: '跨部門協作, 敏捷開發, 前端最佳化',
  duration: '60',
};

// 多版本提示詞管理
const PROMPT_STORAGE_KEY = 'prompt_versions_v2';

type PromptVersion = {
  id: string;
  name: string;
  systemPrompt: string;
  userPrompt: string;
  model: string;
  formData: {
    name: string;
    education: string;
    experience: string;
    skills: string;
    industry: string;
    job_position: string;
    keywords: string;
    duration: string;
  };
};

function loadPrompts(): PromptVersion[] {
  const raw = localStorage.getItem(PROMPT_STORAGE_KEY);
  if (!raw) return [
    { 
      id: 'default', 
      name: '預設版本', 
      systemPrompt: defaultSystemPrompt, 
      userPrompt: defaultUserPrompt,
      model: LLM_MODELS[0].value,
      formData: { ...defaultForm }
    }
  ];
  try {
    return JSON.parse(raw);
  } catch {
    return [
      { 
        id: 'default', 
        name: '預設版本', 
        systemPrompt: defaultSystemPrompt, 
        userPrompt: defaultUserPrompt,
        model: LLM_MODELS[0].value,
        formData: { ...defaultForm }
      }
    ];
  }
}
function savePrompts(prompts: PromptVersion[]) {
  localStorage.setItem(PROMPT_STORAGE_KEY, JSON.stringify(prompts));
}

const TestPage: React.FC = () => {
  // 多版本提示詞狀態
  const [prompts, setPrompts] = useState<PromptVersion[]>(() => loadPrompts());
  const [currentPromptId, setCurrentPromptId] = useState<string>(prompts[0].id);

  // 取得目前版本
  const currentPrompt = prompts.find(p => p.id === currentPromptId) || prompts[0];

  // 其他測試狀態
  const [model, setModel] = useState(currentPrompt.model || LLM_MODELS[0].value);
  const [form, setForm] = useState(currentPrompt.formData || defaultForm);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 批次測試次數
  const [batchCount, setBatchCount] = useState(5);
  const [batchResults, setBatchResults] = useState<string[]>([]);
  const [batchTab, setBatchTab] = useState(0); // 批次結果目前顯示的 index
  const [copied, setCopied] = useState(false); // 複製提示
  const [setAsDefault, setSetAsDefault] = useState(false); // 設為預設模板

  // 預設模板存儲
  const DEFAULT_TEMPLATE_KEY = 'default_prompt_template';
  const [defaultTemplate, setDefaultTemplate] = useState<PromptVersion | null>(null);

  // 新增 API Key 輸入
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('test_api_key') || '';
  });
  const [apiKeyVisible, setApiKeyVisible] = useState(false);
  const [apiKeySaved, setApiKeySaved] = useState(false);

  // 儲存 API Key 到 localStorage
  const saveApiKey = () => {
    localStorage.setItem('test_api_key', apiKey);
    setApiKeySaved(true);
    setTimeout(() => setApiKeySaved(false), 2000);
  };

  // 清除 API Key
  const clearApiKey = () => {
    setApiKey('');
    localStorage.removeItem('test_api_key');
  };

  // 預設模板存儲
  useEffect(() => { savePrompts(prompts); }, [prompts]);
  
  // 載入預設模板
  useEffect(() => {
    const savedTemplate = localStorage.getItem(DEFAULT_TEMPLATE_KEY);
    if (savedTemplate) {
      try {
        setDefaultTemplate(JSON.parse(savedTemplate));
      } catch (e) {
        console.error('無法解析預設模板', e);
      }
    }
  }, []);

  // 設置為預設模板
  const handleSetAsDefault = () => {
    const currentTemplate = prompts.find(p => p.id === currentPromptId);
    if (currentTemplate) {
      localStorage.setItem(DEFAULT_TEMPLATE_KEY, JSON.stringify(currentTemplate));
      setDefaultTemplate(currentTemplate);
      setSetAsDefault(true);
      setTimeout(() => setSetAsDefault(false), 1200);
    }
  };

  // 新增版本
  const handleAddPrompt = () => {
    const newId = 'prompt_' + Date.now();
    // 使用預設模板或當前模板
    const templateToUse = defaultTemplate || currentPrompt;
    const newPrompt: PromptVersion = {
      id: newId,
      name: '新版本',
      systemPrompt: templateToUse.systemPrompt,
      userPrompt: templateToUse.userPrompt,
      model: templateToUse.model || model,
      formData: templateToUse.formData || { ...form }
    };
    setPrompts((ps: PromptVersion[]) => [...ps, newPrompt]);
    setCurrentPromptId(newId);
  };
  // 刪除版本
  const handleDeletePrompt = (id: string) => {
    if (prompts.length === 1) return;
    const idx = prompts.findIndex((p: PromptVersion) => p.id === id);
    const newPrompts = prompts.filter((p: PromptVersion) => p.id !== id);
    setPrompts(newPrompts);
    if (currentPromptId === id) {
      setCurrentPromptId(newPrompts[Math.max(0, idx - 1)].id);
    }
  };
  // 編輯狀態
  const [editingPromptId, setEditingPromptId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  // 重新命名
  const handleRenamePrompt = (id: string, name: string) => {
    setPrompts((ps: PromptVersion[]) => ps.map((p: PromptVersion) => p.id === id ? { ...p, name } : p));
  };
  // 編輯內容
  const handleEditPrompt = (field: 'systemPrompt' | 'userPrompt', value: string) => {
    setPrompts((ps: PromptVersion[]) => ps.map((p: PromptVersion) => p.id === currentPromptId ? { ...p, [field]: value } : p));
  };

  // 更新當前版本的模型
  const updateCurrentModel = (value: string) => {
    setModel(value);
    setPrompts(ps => ps.map(p => p.id === currentPromptId
      ? { ...p, model: value }
      : p
    ));
  };

  // 更新當前版本的表單資料
  const updateCurrentFormData = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    setPrompts(ps => ps.map(p => p.id === currentPromptId 
      ? { ...p, formData: { ...p.formData, [key]: value } } 
      : p
    ));
  };

  // 將模板變數替換為表單資料
  const buildPrompt = () => {
    let prompt = currentPrompt.userPrompt;
    Object.entries(form).forEach(([key, val]) => {
      prompt = prompt.replace(new RegExp(`{{${key}}}`, 'g'), val);
      prompt = prompt.replace(new RegExp(`{${key}}`, 'g'), val);
    });
    return prompt;
  };

  // 當切換版本時，更新表單資料和模型
  useEffect(() => {
    const current = prompts.find(p => p.id === currentPromptId);
    if (current) {
      if (current.formData) {
        setForm(current.formData);
      }
      if (current.model) {
        setModel(current.model);
      }
    }
  }, [currentPromptId, prompts]);

  // 一鍵隨機產生表單資料
  const [lastRandomIndex, setLastRandomIndex] = useState<number | null>(null);
  const handleRandom = () => {
    let idx = Math.floor(Math.random() * RANDOM_PROFILES.length);
    if (RANDOM_PROFILES.length > 1 && lastRandomIndex !== null) {
      // 若隨機到跟前一次一樣，則往下取一個（環狀）
      if (idx === lastRandomIndex) {
        idx = (idx + 1) % RANDOM_PROFILES.length;
      }
    }
    const newFormData = { ...RANDOM_PROFILES[idx] };
    setForm(newFormData);
    // 同時更新當前版本的表單資料
    setPrompts(ps => ps.map(p => p.id === currentPromptId 
      ? { ...p, formData: newFormData } 
      : p
    ));
    setLastRandomIndex(idx);
  };

  // 一鍵測試
  const handleTest = async () => {
    setLoading(true);
    setError('');
    setResult('');
    const prompt = buildPrompt();
    
    console.log('--- 一鍵測試開始 ---');
    console.log('使用模型:', model);
    console.log('使用者資料:', form);
    console.log('系統提示詞:', currentPrompt.systemPrompt);
    console.log('模板提示詞:', currentPrompt.userPrompt);
    console.log('最終提示詞:', prompt);
    
    try {
      console.log('發送API請求...');
      
      // Instead of direct API call, use a proxy API endpoint
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemPrompt: currentPrompt.systemPrompt,
          userPrompt: prompt,
          model,
          maxTokens: 2048,
          temperature: 0.7,
          apiKey: apiKey || undefined // 傳入使用者設定的 API Key，如果沒有則使用伺服器的 key
        })
      });
      
      // Fallback for development only
      if (!response.ok && response.status === 404) {
        console.warn('API endpoint not found, falling back to direct API call');
        console.warn('WARNING: This approach exposes API keys and should not be used in production!');
        
        // 優先使用使用者提供的 API Key
        const userKey = apiKey || import.meta.env.VITE_OPENAI_API_KEY;
        
        if (!userKey) {
          throw new Error('未提供 API Key，請在設定中輸入您的 OpenAI API Key');
        }
        
        // This should be removed in production
        const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userKey}`
          },
          body: JSON.stringify({
            model,
            messages: [
              { role: 'system', content: currentPrompt.systemPrompt },
              { role: 'user', content: prompt }
            ],
            max_tokens: 2048,
            temperature: 0.7
          })
        });
        
        if (!openaiResponse.ok) {
          throw new Error('API call failed');
        }
        
        const data = await openaiResponse.json();
        const content = data.choices?.[0]?.message?.content?.trim() || '';
        console.log('API回應成功!');
        setResult(content);
        setLoading(false);
        return;
      }
      
      const data = await response.json();
      const content = data.content || '';
      console.log('API回應成功!');
      setResult(content);
    } catch (err: any) {
      console.error('API錯誤:', err);
      setError('⚠️ 產生內容時發生錯誤，請檢查API金鑰與網路。');
    } finally {
      console.log('--- 一鍵測試結束 ---');
      setLoading(false);
    }
  };

  // 批次測試
  const handleBatchTest = async () => {
    setLoading(true);
    setError('');
    setBatchResults([]);
    setBatchTab(0); // 重置顯示第一筆
    const prompt = buildPrompt();
    const results: string[] = [];
    try {
      for (let i = 0; i < batchCount; i++) {
        // Use secure API endpoint
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            systemPrompt: currentPrompt.systemPrompt,
            userPrompt: prompt,
            model,
            maxTokens: 2048,
            temperature: 0.7,
            apiKey: apiKey || undefined // 傳入使用者設定的 API Key
          })
        });
        
        // Fallback for development
        if (!response.ok && response.status === 404) {
          console.warn('API endpoint not found, falling back to direct API call');
          console.warn('WARNING: This approach exposes API keys and should not be used in production!');
          
          // 優先使用使用者提供的 API Key
          const userKey = apiKey || import.meta.env.VITE_OPENAI_API_KEY;
          
          if (!userKey) {
            throw new Error('未提供 API Key，請在設定中輸入您的 OpenAI API Key');
          }
          
          const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${userKey}`
            },
            body: JSON.stringify({
              model,
              messages: [
                { role: 'system', content: currentPrompt.systemPrompt },
                { role: 'user', content: prompt }
              ],
              max_tokens: 2048,
              temperature: 0.7
            })
          });
          
          if (!openaiResponse.ok) {
            throw new Error('API call failed');
          }
          
          const data = await openaiResponse.json();
          const content = data.choices?.[0]?.message?.content?.trim() || '';
          results.push(content);
          setBatchResults([...results]); // 即時顯示
          continue;
        }
        
        const data = await response.json();
        const content = data.content || '';
        results.push(content);
        setBatchResults([...results]); // 即時顯示
      }
    } catch (err: any) {
      setError('⚠️ 批次測試時發生錯誤，請檢查API金鑰與網路。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 max-w-6xl mx-auto px-4 flex gap-6">
        {/* 左側：多版本管理 */}
        <div className="w-64 bg-white shadow-md rounded-lg p-5 h-fit border border-gray-200 sticky top-24">
          <div className="flex justify-between items-center mb-4">
            <span className="font-extrabold text-gray-800 text-lg">提示詞版本</span>
            <button className="text-xs px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors font-medium" onClick={handleAddPrompt}>新增</button>
          </div>
          <ul className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
            {prompts.map(p => (
              <li key={p.id} className={`flex items-center rounded-md transition-colors ${currentPromptId === p.id ? 'bg-blue-50 border-l-4 border-blue-500' : 'hover:bg-gray-50'}`}>
                {editingPromptId === p.id ? (
                  <input
                    className="flex-1 px-2 py-1.5 rounded border text-sm m-1 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                    value={editingName}
                    autoFocus
                    onChange={e => setEditingName(e.target.value)}
                    onBlur={() => {
                      handleRenamePrompt(p.id, editingName.trim() || p.name);
                      setEditingPromptId(null);
                    }}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        handleRenamePrompt(p.id, editingName.trim() || p.name);
                        setEditingPromptId(null);
                      } else if (e.key === 'Escape') {
                        setEditingPromptId(null);
                      }
                    }}
                  />
                ) : (
                  <>
                    <div className="flex-1 flex items-center">
                      <button
                        className={`text-left px-3 py-2 rounded-md truncate ${currentPromptId === p.id ? 'text-blue-700 font-bold' : 'text-gray-700'}`}
                        onClick={() => setCurrentPromptId(p.id)}
                        title={p.name}
                      >
                        {p.name}
                      </button>
                      {defaultTemplate && p.id === defaultTemplate.id && (
                        <span className="text-xs bg-blue-100 text-blue-700 rounded-full px-1 py-0.5 ml-1" title="預設模板">✓</span>
                      )}
                    </div>
                    <button
                      className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                      onClick={() => {
                        setEditingPromptId(p.id);
                        setEditingName(p.name);
                      }}
                      title="編輯名稱"
                    >
                      <span className="text-sm">✎</span>
                    </button>
                  </>
                )}
                <button 
                  className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors mr-1" 
                  onClick={() => handleDeletePrompt(p.id)} 
                  disabled={prompts.length === 1}
                  title="刪除版本"
                >
                  <span className="text-sm">✕</span>
                </button>
              </li>
            ))}
          </ul>
          
          {/* 額外操作區 */}
          {currentPromptId && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button
                className={`text-xs px-3 py-1.5 rounded-md w-full flex items-center justify-center transition-all ${setAsDefault || (defaultTemplate && currentPromptId === defaultTemplate.id) ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                onClick={handleSetAsDefault}
              >
                {setAsDefault ? '✓ 已設為預設模板' : defaultTemplate && currentPromptId === defaultTemplate.id ? '✓ 目前為預設模板' : '設為預設模板'}
              </button>
            </div>
          )}

          {/* API Key 設定區 */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="font-semibold text-gray-700 text-sm mb-2">OpenAI API Key</div>
            <div className="relative">
              <input 
                type={apiKeyVisible ? "text" : "password"} 
                className="w-full border rounded-md p-2 text-xs focus:ring-2 focus:ring-blue-300 focus:outline-none mb-2"
                placeholder="輸入您的 OpenAI API Key"
                value={apiKey}
                onChange={e => setApiKey(e.target.value)}
              />
              <button 
                className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                onClick={() => setApiKeyVisible(!apiKeyVisible)}
                title={apiKeyVisible ? "隱藏 API Key" : "顯示 API Key"}
              >
                {apiKeyVisible ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
            <div className="flex gap-2">
              <button
                className={`text-xs px-2 py-1.5 rounded-md flex-1 ${apiKeySaved ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'} transition-colors`}
                onClick={saveApiKey}
                disabled={apiKeySaved}
              >
                {apiKeySaved ? '✓ 已儲存' : '儲存 Key'}
              </button>
              <button
                className="text-xs px-2 py-1.5 rounded-md flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                onClick={clearApiKey}
              >
                清除
              </button>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              API Key 僅儲存在您的瀏覽器，不會傳送到伺服器。
            </div>
          </div>
        </div>
        {/* 右側：編輯與測試區 */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-700">No Code Prompt Playground</h1>
          </div>
          <div className="space-y-6">
            {/* 系統提示詞 */}
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <label className="block font-semibold mb-2 text-gray-800">系統提示詞 (System Prompt)</label>
              <textarea
                className="w-full border rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                rows={2}
                value={currentPrompt.systemPrompt}
                onChange={e => handleEditPrompt('systemPrompt', e.target.value)}
              />
            </div>
            
            {/* 模板提示詞 */}
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <label className="block font-semibold mb-2 text-gray-800">模板提示詞 (User Prompt Template)</label>
              <textarea
                className="w-full border rounded-md p-3 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                rows={8}
                value={currentPrompt.userPrompt}
                onChange={e => handleEditPrompt('userPrompt', e.target.value)}
              />
              <div className="text-xs text-gray-500 mt-2">可用變數：{'{name} {education} {experience} {skills} {industry} {job_position} {keywords} {duration}'}</div>
            </div>
            
            {/* LLM模型選擇 */}
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <label className="block font-semibold mb-2 text-gray-800">選擇 LLM 模型</label>
              <select
                className="border rounded-md p-2 text-sm w-64 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                value={model}
                onChange={e => updateCurrentModel(e.target.value)}
              >
                {LLM_MODELS.map(m => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>
            
            {/* 表單資料 */}
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <label className="block font-semibold text-gray-800">表單資料</label>
                <button 
                  type="button" 
                  className="text-xs px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors" 
                  onClick={handleRandom}
                >
                  隨機產生
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <div className="text-xs text-gray-500 mb-1">姓名</div>
                  <input className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none" value={form.name} onChange={e => updateCurrentFormData('name', e.target.value)} placeholder="姓名" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">學歷</div>
                  <input className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none" value={form.education} onChange={e => updateCurrentFormData('education', e.target.value)} placeholder="學歷" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">現職與職務</div>
                  <input className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none" value={form.experience} onChange={e => updateCurrentFormData('experience', e.target.value)} placeholder="現職與職務" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">專長技能</div>
                  <input className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none" value={form.skills} onChange={e => updateCurrentFormData('skills', e.target.value)} placeholder="專長技能" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">產業</div>
                  <input className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none" value={form.industry} onChange={e => updateCurrentFormData('industry', e.target.value)} placeholder="產業" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">應徵職位</div>
                  <input className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none" value={form.job_position} onChange={e => updateCurrentFormData('job_position', e.target.value)} placeholder="應徵職位" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">強調關鍵字</div>
                  <input className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none" value={form.keywords} onChange={e => updateCurrentFormData('keywords', e.target.value)} placeholder="強調關鍵字" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">時長(秒)</div>
                  <input className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none" value={form.duration} onChange={e => updateCurrentFormData('duration', e.target.value)} placeholder="時長(秒)" />
                </div>
              </div>
            </div>
            
            {/* 操作按鈕 */}
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <div className="flex gap-3">
                <button
                  type="button"
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 transition-colors font-medium flex-grow"
                  onClick={handleTest}
                  disabled={loading}
                >
                  {loading ? '生成中...' : '一鍵測試'}
                </button>
                <div className="flex items-center gap-2 flex-grow">
                  <button
                    type="button"
                    className="px-5 py-2.5 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:bg-gray-300 transition-colors font-medium flex-grow"
                    onClick={handleBatchTest}
                    disabled={loading}
                  >
                    {loading ? '批次測試中...' : `批次測試`}
                  </button>
                  <div className="flex items-center">
                    <input
                      type="number"
                      min={1}
                      max={20}
                      value={batchCount}
                      onChange={e => setBatchCount(Math.max(1, Math.min(20, Number(e.target.value))))}
                      className="w-16 border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
                      disabled={loading}
                      title="批次測試次數 (1-20)"
                    />
                    <span className="ml-1 text-xs text-gray-500">次</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 結果區塊 */}
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <label className="block font-semibold mb-3 text-gray-800">LLM 回應結果</label>
              <div className="rounded-md">
                {error ? (
                  <div className="p-4 text-red-500 bg-red-50 rounded-md border border-red-200">{error}</div>
                ) : (
                  <>
                    {result && (
                      <div className="p-5 whitespace-pre-line overflow-auto max-h-[500px] bg-blue-50 rounded-md border border-blue-200">
                        {result}
                      </div>
                    )}
                    {batchResults.length > 0 && (
                      <div className="p-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {batchResults.map((_, i) => (
                            <button
                              key={i}
                              className={`px-3 py-1.5 rounded-md text-sm ${batchTab === i ? 'bg-blue-600 text-white' : 'bg-white text-blue-600 border border-blue-300 hover:bg-blue-50'} transition-colors`}
                              onClick={() => setBatchTab(i)}
                            >
                              回應 {i + 1}
                            </button>
                          ))}
                        </div>
                        <div className="bg-white rounded-md p-5 border border-gray-200 whitespace-pre-line overflow-auto max-h-[400px]">
                          <div className="text-sm text-gray-500 mb-3 pb-2 border-b">#{batchTab + 1}</div>
                          {batchResults[batchTab]}
                        </div>
                        <button
                          className="mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-md text-sm hover:bg-blue-200 border border-blue-200 transition-colors"
                          onClick={async () => {
                            await navigator.clipboard.writeText(batchResults[batchTab] || '');
                            setCopied(true);
                            setTimeout(() => setCopied(false), 1200);
                          }}
                        >
                          {copied ? '已複製！' : '複製內容'}
                        </button>
                      </div>
                    )}
                  </>
                )}
                {!error && !result && batchResults.length === 0 && (
                  <div className="p-10 text-gray-400 text-center bg-gray-50 rounded-md border border-dashed border-gray-200">
                    測試結果將顯示在此區域
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TestPage; 