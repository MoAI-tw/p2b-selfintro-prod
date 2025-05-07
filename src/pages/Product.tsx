import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faWandMagicSparkles, faSliders } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout/Layout';

const Product: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              專業的自我介紹生成工具
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              運用先進的AI技術，為您量身打造完美的自我介紹內容，適用於各種場合。
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              強大的功能特色
            </h2>
          </div>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <FontAwesomeIcon icon={faBrain} className="text-lg" />
                </div>
                <p className="ml-16 text-lg font-medium text-gray-900">AI智能分析</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  智能分析您的背景和目標，生成最適合的自我介紹內容，確保內容的專業性和相關性。
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <FontAwesomeIcon icon={faWandMagicSparkles} className="text-lg" />
                </div>
                <p className="ml-16 text-lg font-medium text-gray-900">場景模板</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  提供多種場景模板，包括求職面試、社交場合、學術報告等，讓您快速生成符合場景的自我介紹。
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <FontAwesomeIcon icon={faSliders} className="text-lg" />
                </div>
                <p className="ml-16 text-lg font-medium text-gray-900">自由調整</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  可以根據需求自由調整內容的長度、風格和重點，打造最適合您的自我介紹。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              如何使用
            </h2>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">選擇場景</h3>
                <p className="mt-2 text-base text-gray-500">
                  選擇您需要的自我介紹場景，如求職、社交等
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">填寫資料</h3>
                <p className="mt-2 text-base text-gray-500">
                  輸入您的基本資料和期望強調的重點
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">生成內容</h3>
                <p className="mt-2 text-base text-gray-500">
                  AI智能分析並生成專業的自我介紹內容
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mx-auto">
                  <span className="text-xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">調整完善</h3>
                <p className="mt-2 text-base text-gray-500">
                  根據需求調整內容，直到滿意為止
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              用戶評價
            </h2>
          </div>
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Sarah Chen</h4>
                    <p className="text-gray-500">求職者</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  "使用這個工具幫我準備了面試的自我介紹，效果非常好！面試官對我的表現很滿意。"
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Michael Wang</h4>
                    <p className="text-gray-500">學生</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  "幫我生成了很專業的自我介紹，用於申請研究所。內容非常有條理，突出了我的優勢。"
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Emily Lin</h4>
                    <p className="text-gray-500">創業者</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  "介面非常直觀，操作簡單。生成的內容品質很高，幫我節省了很多時間。"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">準備好開始了嗎？</span>
            <span className="block text-blue-200">立即註冊，免費試用。</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                開始使用
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product; 