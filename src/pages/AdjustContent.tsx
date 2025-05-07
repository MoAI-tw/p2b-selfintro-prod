import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const AdjustContent: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">調整內容</h2>
            <p className="text-gray-600 text-center my-8">
              內容調整功能正在開發中，請暫時使用結果頁面。
            </p>
            <div className="flex justify-center">
              <Link
                to="/result"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                返回結果頁面
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdjustContent; 