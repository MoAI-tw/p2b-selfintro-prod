import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout/Layout';

const Pricing: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              選擇最適合您的方案
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              無論您是個人使用還是企業需求，我們都有適合的方案。
            </p>
          </div>

          <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">免費方案</h2>
                <p className="mt-4 text-sm text-gray-500">適合初次嘗試或偶爾使用的用戶</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">NT$0</span>
                  <span className="text-base font-medium text-gray-500">/月</span>
                </p>
                <Link
                  to="/register"
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  免費註冊
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">包含功能</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <FontAwesomeIcon icon={faCheck} className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">每月生成 3 次自我介紹</span>
                  </li>
                  <li className="flex space-x-3">
                    <FontAwesomeIcon icon={faCheck} className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">基本編輯功能</span>
                  </li>
                  <li className="flex space-x-3">
                    <FontAwesomeIcon icon={faCheck} className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">內容複製功能</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">標準方案</h2>
                <p className="mt-4 text-sm text-gray-500">適合經常需要更新自我介紹的個人用戶</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">NT$299</span>
                  <span className="text-base font-medium text-gray-500">/月</span>
                </p>
                <Link
                  to="/register"
                  className="mt-8 block w-full bg-blue-600 border border-blue-600 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700"
                >
                  開始試用
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">包含功能</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <FontAwesomeIcon icon={faCheck} className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">每月生成 20 次自我介紹</span>
                  </li>
                  <li className="flex space-x-3">
                    <FontAwesomeIcon icon={faCheck} className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">進階編輯功能</span>
                  </li>
                  <li className="flex space-x-3">
                    <FontAwesomeIcon icon={faCheck} className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">10 種專業場景模板</span>
                  </li>
                  <li className="flex space-x-3">
                    <FontAwesomeIcon icon={faCheck} className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">匯出 Word/PDF</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">專業方案</h2>
                <p className="mt-4 text-sm text-gray-500">適合企業用戶或專業人士</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">NT$599</span>
                  <span className="text-base font-medium text-gray-500">/月</span>
                </p>
                <Link
                  to="/register"
                  className="mt-8 block w-full bg-blue-600 border border-blue-600 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700"
                >
                  開始試用
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">包含功能</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <FontAwesomeIcon icon={faCheck} className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">無限次生成自我介紹</span>
                  </li>
                  <li className="flex space-x-3">
                    <FontAwesomeIcon icon={faCheck} className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">全部進階編輯功能</span>
                  </li>
                  <li className="flex space-x-3">
                    <FontAwesomeIcon icon={faCheck} className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">20+ 種專業場景模板</span>
                  </li>
                  <li className="flex space-x-3">
                    <FontAwesomeIcon icon={faCheck} className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">優先客戶支援</span>
                  </li>
                  <li className="flex space-x-3">
                    <FontAwesomeIcon icon={faCheck} className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">團隊協作功能</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing; 