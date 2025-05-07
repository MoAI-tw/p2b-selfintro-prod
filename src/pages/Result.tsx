import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faFemale, faRedo, faCopy, faUndo, faHistory } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout/Layout';
import GeneratorSteps from '../components/GeneratorSteps';
import { useGenerator } from '../contexts/GeneratorContext';

const Result: React.FC = () => {
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  
  const {
    name,
    occupation,
    generatedContent,
    setGeneratedContent,
    generateIntroduction
  } = useGenerator();
  
  // Content history for undo functionality
  const [contentHistory, setContentHistory] = useState<string[]>([]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState<number>(0);

  // Initialize history with the generated content when component mounts
  useEffect(() => {
    if (generatedContent && contentHistory.length === 0) {
      setContentHistory([generatedContent]);
      setCurrentHistoryIndex(0);
    } else if (!generatedContent) {
      // If there's no generated content (e.g. user directly accessed this page), redirect to generator
      navigate('/generator');
    }
  }, [generatedContent, contentHistory, navigate]);

  // Handling copy functionality
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    alert('已複製到剪貼簿！');
  };

  // Handling regeneration
  const handleRegenerate = async () => {
    const newContent = await generateIntroduction();
    
    // Save to history
    const newHistory = [...contentHistory.slice(0, currentHistoryIndex + 1), newContent];
    setContentHistory(newHistory);
    setCurrentHistoryIndex(newHistory.length - 1);
    setGeneratedContent(newContent);
  };

  // Handling undo
  const handleUndo = () => {
    if (currentHistoryIndex > 0) {
      setCurrentHistoryIndex(currentHistoryIndex - 1);
      setGeneratedContent(contentHistory[currentHistoryIndex - 1]);
    }
  };

  // Handling full undo (reset to original)
  const handleFullUndo = () => {
    if (currentHistoryIndex > 0) {
      setCurrentHistoryIndex(0);
      setGeneratedContent(contentHistory[0]);
    }
  };

  // Handle content edit
  const handleContentChange = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.innerText;
    
    // Only update if content has changed
    if (newContent !== generatedContent) {
      setGeneratedContent(newContent);
      
      // Save to history
      const newHistory = [...contentHistory.slice(0, currentHistoryIndex + 1), newContent];
      setContentHistory(newHistory);
      setCurrentHistoryIndex(newHistory.length - 1);
    }
  };

  if (!generatedContent) {
    return (
      <Layout>
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">尚未生成內容</h2>
            <p className="text-gray-600 mb-8">請先填寫個人資料並設定生成參數</p>
            <Link
              to="/generator"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              開始填寫資料
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <GeneratorSteps currentStep="result" />

          {/* Generated Content */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 whitespace-nowrap">
                  {name}的自我介紹
                </h2>
                <span className="text-sm text-gray-500">{occupation}</span>
              </div>

              {/* Content Preview */}
              <div className="prose max-w-none">
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div
                    ref={contentRef}
                    contentEditable
                    onInput={handleContentChange}
                    className="min-h-[200px] focus:outline-none"
                    dangerouslySetInnerHTML={{ __html: generatedContent.split('\n').map(line => line.trim() ? `<p class="text-lg text-gray-900 leading-relaxed">${line}</p>` : '<br>').join('') }}
                  />
                </div>
              </div>

              {/* Function Buttons */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button 
                  onClick={() => alert('播放功能未實現')}
                  className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded text-sm text-gray-600 bg-white hover:bg-gray-50 whitespace-nowrap"
                >
                  <FontAwesomeIcon icon={faMale} className="mr-1" />
                  播放（男聲）
                </button>
                <button 
                  onClick={() => alert('播放功能未實現')}
                  className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded text-sm text-gray-600 bg-white hover:bg-gray-50 whitespace-nowrap"
                >
                  <FontAwesomeIcon icon={faFemale} className="mr-1" />
                  播放（女聲）
                </button>
                <button 
                  onClick={handleRegenerate}
                  className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded text-sm text-gray-600 bg-white hover:bg-gray-50 whitespace-nowrap"
                >
                  <FontAwesomeIcon icon={faRedo} className="mr-1" />
                  再試一次
                </button>
                <button 
                  onClick={handleCopy}
                  className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded text-sm text-gray-600 bg-white hover:bg-gray-50 whitespace-nowrap"
                >
                  <FontAwesomeIcon icon={faCopy} className="mr-1" />
                  複製文字
                </button>
                <button 
                  onClick={handleUndo}
                  className={`inline-flex items-center px-3 py-1.5 border rounded text-sm whitespace-nowrap ${
                    currentHistoryIndex > 0 
                      ? 'border-gray-200 text-gray-600 bg-white hover:bg-gray-50' 
                      : 'border-gray-100 text-gray-400 bg-gray-50 cursor-not-allowed'
                  }`}
                  disabled={currentHistoryIndex === 0}
                >
                  <FontAwesomeIcon icon={faUndo} className="mr-1" />
                  復原
                </button>
                <button 
                  onClick={handleFullUndo}
                  className={`inline-flex items-center px-3 py-1.5 border rounded text-sm whitespace-nowrap ${
                    currentHistoryIndex > 0 
                      ? 'border-gray-200 text-gray-600 bg-white hover:bg-gray-50' 
                      : 'border-gray-100 text-gray-400 bg-gray-50 cursor-not-allowed'
                  }`}
                  disabled={currentHistoryIndex === 0}
                >
                  <FontAwesomeIcon icon={faHistory} className="mr-1" />
                  完全復原
                </button>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex justify-between">
                <div className="flex items-center space-x-2">
                  <Link
                    to="/generation-settings"
                    className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded text-sm text-gray-600 bg-white hover:bg-gray-50"
                  >
                    返回修改
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => alert('儲存功能未實現')}
                    className="inline-flex items-center px-3 py-1.5 border border-gray-200 rounded text-sm text-gray-600 bg-white hover:bg-gray-50"
                  >
                    儲存
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Result; 