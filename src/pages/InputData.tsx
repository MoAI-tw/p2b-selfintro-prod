import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout/Layout';
import GeneratorSteps from '../components/GeneratorSteps';

const InputData: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <GeneratorSteps currentStep="input" />

          {/* 輸入資料選項 */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">選擇資料輸入方式</h2>
            <p className="mt-4 text-lg text-gray-600">請選擇您希望如何提供您的個人資料</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* 上傳文件選項 */}
              <div className="bg-white shadow-md rounded-lg p-6 border-2 border-transparent hover:border-blue-500 transition-all cursor-pointer">
                <Link to="/upload-files" className="block">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-blue-100 p-3 mb-4">
                      <FontAwesomeIcon icon={faFileUpload} className="text-3xl text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">上傳文件</h3>
                    <p className="text-gray-600 text-center">
                      上傳您的履歷檔案，我們將自動提取資訊
                    </p>
                    <p className="mt-4 text-sm text-gray-500">
                      支援的格式: PDF, DOCX, TXT
                    </p>
                  </div>
                </Link>
              </div>

              {/* 手動輸入選項 */}
              <div className="bg-white shadow-md rounded-lg p-6 border-2 border-transparent hover:border-blue-500 transition-all cursor-pointer">
                <Link to="/generator" className="block">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-green-100 p-3 mb-4">
                      <FontAwesomeIcon icon={faKeyboard} className="text-3xl text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">手動輸入</h3>
                    <p className="text-gray-600 text-center">
                      逐步填寫您的個人資料，可完全自訂內容
                    </p>
                    <p className="mt-4 text-sm text-gray-500">
                      耗時較長，但更靈活精確
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InputData; 