import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Profile: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">個人資料</h2>
            <p className="text-gray-600 text-center my-8">
              個人資料頁面正在開發中，請稍後再訪問。
            </p>
            <div className="flex justify-center">
              <Link
                to="/"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                返回首頁
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile; 