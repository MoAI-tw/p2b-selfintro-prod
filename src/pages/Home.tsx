import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic, faEdit, faClock, faArrowRight, faRocket, faUserFriends, faChartLine } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="pt-24 pb-20 bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              打造專屬的自我介紹
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              使用AI技術，快速生成專業的自我介紹內容，讓您在求職、社交場合更加出色。
            </p>
            <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
              <div className="rounded-md shadow">
                <Link
                  to="/input-data"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105"
                >
                  <span>快速開始</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-800 rounded-full mb-4">為什麼選擇我們</span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">從此不再為自我介紹困擾</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">專業級AI自動生成，幫助您在任何場合都能完美展示自我</p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600 mb-5">
                  <FontAwesomeIcon icon={faMagic} size="lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI智能生成</h3>
                <p className="text-gray-600">
                  運用先進的AI技術，快速生成符合場景的自我介紹內容，精準把握關鍵亮點，打造完美表達
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-600 mb-5">
                  <FontAwesomeIcon icon={faEdit} size="lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">個性化定制</h3>
                <p className="text-gray-600">
                  根據不同場景和需求，自由調整內容風格和重點，完全掌控介紹內容的呈現方式
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-purple-100 text-purple-600 mb-5">
                  <FontAwesomeIcon icon={faClock} size="lg" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">快速高效</h3>
                <p className="text-gray-600">
                  幾分鐘內完成專業的自我介紹，節省寶貴時間，並獲得遠超預期的出色成果
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-14 text-center">
            <Link
              to="/input-data"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              快速開始
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section (New) */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">好處</span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">自我介紹的專業提升</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">幫助您在面試、社交、業務場合中脫穎而出</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <FontAwesomeIcon icon={faRocket} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">提升求職競爭力</h4>
                    <p className="mt-2 text-base text-gray-500">精準的自我介紹能讓面試官更快了解您的優勢，增加錄取機會</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <FontAwesomeIcon icon={faUserFriends} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">增強社交自信</h4>
                    <p className="mt-2 text-base text-gray-500">準備充分的自我介紹能讓您在社交場合更加自信，給人留下深刻印象</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <FontAwesomeIcon icon={faChartLine} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">提升專業形象</h4>
                    <p className="mt-2 text-base text-gray-500">專業的自我介紹能迅速建立您的專業形象，贏得他人信任</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="p-4 border border-gray-200 rounded-lg mb-6 bg-blue-50 relative">
                <span className="absolute -top-3 left-4 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">一般自我介紹</span>
                <p className="text-gray-600 text-sm italic">我叫王小明，今年25歲，畢業於某大學資訊系，有三年前端開發經驗...</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg bg-green-50 relative">
                <span className="absolute -top-3 left-4 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">AI生成自我介紹</span>
                <p className="text-gray-700 text-sm">您好，我是王小明，擁有某大學資訊科學學士學位，專注於前端開發領域已有三年。我熟練掌握React框架與現代CSS技術，曾帶領團隊重構企業級應用介面，將頁面載入速度提升40%，用戶停留時間增加25%...</p>
              </div>
              
              <div className="mt-8 text-center">
                <Link
                  to="/input-data"
                  className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  快速開始
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">準備好開始了嗎？</span>
              <span className="block text-blue-200">立即體驗，提升您的自我介紹</span>
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-md">
              不再為自我介紹煩惱，讓AI助您一臂之力，展現最佳的專業形象。
            </p>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/input-data"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                快速開始
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home; 