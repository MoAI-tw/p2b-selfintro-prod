import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout/Layout';
import GeneratorSteps from '../components/GeneratorSteps';

const UploadFiles: React.FC = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would upload the file to a server here
    // For now, we'll simply navigate to the next step
    navigate('/generation-settings');
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <GeneratorSteps currentStep="input" />

          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">上傳履歷檔案</h2>
              <p className="text-gray-600 mb-8">
                上傳您的履歷檔案，我們將自動提取資訊以生成自我介紹。支援的格式: PDF, DOCX, TXT
              </p>

              <form onSubmit={handleSubmit}>
                {/* File Upload Area */}
                <div 
                  className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer mb-6 ${
                    isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                  } ${selectedFile ? 'bg-green-50 border-green-400' : ''}`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".pdf,.docx,.txt"
                    onChange={handleFileChange}
                  />
                  
                  {selectedFile ? (
                    <div className="flex flex-col items-center">
                      <FontAwesomeIcon icon={faFileAlt} className="text-5xl text-green-500 mb-4" />
                      <p className="font-medium text-gray-900">{selectedFile.name}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <p className="text-sm text-blue-600 mt-4">點擊重新選擇文件</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <FontAwesomeIcon icon={faCloudUploadAlt} className="text-5xl text-gray-400 mb-4" />
                      <p className="font-medium text-gray-900">拖放文件至此處，或點擊上傳</p>
                      <p className="text-sm text-gray-500 mt-1">支援的格式: PDF, DOCX, TXT</p>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                      selectedFile ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    disabled={!selectedFile}
                  >
                    繼續下一步
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UploadFiles; 