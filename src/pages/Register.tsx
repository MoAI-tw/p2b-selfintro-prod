import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const Register: React.FC = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="py-4 px-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">註冊帳號</h2>
            <p className="text-gray-600 text-center my-8">
              註冊功能正在開發中，請暫時使用登入頁面。
            </p>
            <div className="flex justify-center">
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                前往登入
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register; 