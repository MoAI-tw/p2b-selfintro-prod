import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mt-4">頁面不存在</h2>
            <p className="text-lg text-gray-600 mt-4">
              您所尋找的頁面不存在或已被移除。
            </p>
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
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

export default NotFound; 