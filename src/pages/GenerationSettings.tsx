import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import GeneratorSteps from '../components/GeneratorSteps';
import { useGenerator, FocusPoint } from '../contexts/GeneratorContext';

const GenerationSettings: React.FC = () => {
  const navigate = useNavigate();
  
  const {
    contentLength, setContentLength,
    focusPoints, setFocusPoints,
    generateIntroduction
  } = useGenerator();
  const [loading, setLoading] = useState(false);

  // Toggle focus point
  const toggleFocusPoint = (point: FocusPoint) => {
    if (focusPoints.includes(point)) {
      // Don't allow removing the last focus point
      if (focusPoints.length > 1) {
        setFocusPoints(focusPoints.filter(p => p !== point));
      }
    } else {
      setFocusPoints([...focusPoints, point]);
    }
  };

  // Check if focus point is active
  const isFocusActive = (point: FocusPoint) => focusPoints.includes(point);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    console.log('--- 開始生成自我介紹內容 ---');
    console.log('內容長度設定:', contentLength);
    console.log('重點強調設定:', focusPoints);
    
    try {
      console.log('正在呼叫生成服務...');
      await generateIntroduction();
      console.log('內容生成成功!');
    } catch (error) {
      console.error('生成過程發生錯誤:', error);
    } finally {
      console.log('--- 生成完成 ---');
      setLoading(false);
      navigate('/result');
    }
  };

  // 再試一次按鈕事件
  const handleRetry = async () => {
    setLoading(true);
    
    console.log('--- 重新生成自我介紹內容 ---');
    console.log('內容長度設定:', contentLength);
    console.log('重點強調設定:', focusPoints);
    
    try {
      console.log('正在呼叫生成服務...');
      await generateIntroduction();
      console.log('內容生成成功!');
    } catch (error) {
      console.error('重新生成過程發生錯誤:', error);
    } finally {
      console.log('--- 重新生成完成 ---');
      setLoading(false);
      navigate('/result');
    }
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <GeneratorSteps currentStep="settings" />

          {/* Generation Settings */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">生成設定</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">生成參數</h3>
                  <div className="space-y-4">
                    {/* Length Adjustment */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">內容長度</label>
                      <div className="flex items-center space-x-4">
                        <button
                          type="button"
                          onClick={() => setContentLength('concise')}
                          className={`px-3 py-1 border ${
                            contentLength === 'concise'
                              ? 'bg-blue-100 border-blue-300 text-blue-700'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          } rounded-md text-sm font-medium`}
                        >
                          精簡
                        </button>
                        <button
                          type="button"
                          onClick={() => setContentLength('medium')}
                          className={`px-3 py-1 border ${
                            contentLength === 'medium'
                              ? 'bg-blue-100 border-blue-300 text-blue-700'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          } rounded-md text-sm font-medium`}
                        >
                          適中
                        </button>
                        <button
                          type="button"
                          onClick={() => setContentLength('detailed')}
                          className={`px-3 py-1 border ${
                            contentLength === 'detailed'
                              ? 'bg-blue-100 border-blue-300 text-blue-700'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          } rounded-md text-sm font-medium`}
                        >
                          詳細
                        </button>
                      </div>
                    </div>

                    {/* Focus Points */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">重點強調</label>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => toggleFocusPoint('work_experience')}
                          className={`px-3 py-1 border ${
                            isFocusActive('work_experience')
                              ? 'bg-blue-100 border-blue-300 text-blue-700'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          } rounded-md text-sm font-medium`}
                        >
                          工作經驗
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleFocusPoint('professional_skills')}
                          className={`px-3 py-1 border ${
                            isFocusActive('professional_skills')
                              ? 'bg-blue-100 border-blue-300 text-blue-700'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          } rounded-md text-sm font-medium`}
                        >
                          專業技能
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleFocusPoint('education')}
                          className={`px-3 py-1 border ${
                            isFocusActive('education')
                              ? 'bg-blue-100 border-blue-300 text-blue-700'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          } rounded-md text-sm font-medium`}
                        >
                          教育背景
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleFocusPoint('personal_traits')}
                          className={`px-3 py-1 border ${
                            isFocusActive('personal_traits')
                              ? 'bg-blue-100 border-blue-300 text-blue-700'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          } rounded-md text-sm font-medium`}
                        >
                          個人特質
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleFocusPoint('achievements')}
                          className={`px-3 py-1 border ${
                            isFocusActive('achievements')
                              ? 'bg-blue-100 border-blue-300 text-blue-700'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          } rounded-md text-sm font-medium`}
                        >
                          成就獎項
                        </button>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-6 flex justify-between">
                      <Link
                        to="/generator"
                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        返回修改
                      </Link>
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 flex items-center min-w-[100px] justify-center"
                          disabled={loading}
                        >
                          {loading ? (
                            <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>
                          ) : null}
                          {loading ? '生成中...' : '生成內容'}
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 border border-blue-600 rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50 flex items-center min-w-[100px] justify-center"
                          onClick={handleRetry}
                          disabled={loading}
                        >
                          {loading ? '生成中...' : '再試一次'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GenerationSettings; 