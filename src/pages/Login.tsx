import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/Layout/Layout';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would perform authentication here
    alert('登入功能未實現');
    navigate('/');
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="py-4 px-6">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">登入帳號</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  電子郵件
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  密碼
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="text-right mt-1">
                  <a href="#" className="text-sm text-blue-500 hover:underline">
                    忘記密碼？
                  </a>
                </div>
              </div>
              <div className="mb-6">
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  登入
                </button>
              </div>
              <div className="mb-6 text-center">
                <p>
                  還沒有帳號？{' '}
                  <Link to="/register" className="text-blue-500 hover:underline">
                    立即註冊
                  </Link>
                </p>
              </div>
              <div className="flex items-center mb-6">
                <div className="border-t border-gray-300 flex-grow mr-3"></div>
                <div className="text-gray-500 font-medium">或</div>
                <div className="border-t border-gray-300 flex-grow ml-3"></div>
              </div>
              <div className="flex flex-col space-y-3">
                <button
                  type="button"
                  className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                  onClick={() => alert('Google登入功能未實現')}
                >
                  <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                  使用Google帳號登入
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded"
                  onClick={() => alert('Facebook登入功能未實現')}
                >
                  <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                  使用Facebook帳號登入
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login; 