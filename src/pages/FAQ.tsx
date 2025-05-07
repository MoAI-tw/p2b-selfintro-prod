import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout/Layout';

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

const FAQ: React.FC = () => {
  const [faqItems, setFaqItems] = useState<FAQItem[]>([
    {
      question: '如何使用這個自我介紹生成工具？',
      answer: '使用非常簡單！首先，填寫您的基本資料，例如姓名、年齡、職業等。接著，提供您的工作經歷、教育背景和專業技能。然後，選擇您想要的自我介紹風格和長度，系統會根據您的資料生成符合您需求的自我介紹內容。最後，您可以根據需要對生成的內容進行微調。',
      isOpen: true
    },
    {
      question: '生成的內容是否可以編輯？',
      answer: '是的，生成的自我介紹內容完全可以編輯。系統會根據您提供的資料生成初步內容，您可以根據實際需要進行修改、增減內容，或調整語氣和風格。',
      isOpen: false
    },
    {
      question: '需要付費才能使用這個工具嗎？',
      answer: '我們提供免費和付費兩種方案。免費方案允許用戶每月生成有限數量的自我介紹內容，而付費方案則提供更多的生成次數、更豐富的模板選擇，以及更多自定義選項。您可以先使用免費方案體驗服務，滿意後再升級到付費方案。',
      isOpen: false
    },
    {
      question: '如何確保生成的內容符合專業標準？',
      answer: '我們的系統由經驗豐富的專業文案團隊和人工智能專家共同開發，內置多種專業場景模板，並經過大量真實用例的訓練。系統會根據不同場景的需求生成符合專業標準的內容。此外，您還可以根據特定需求調整生成的內容。',
      isOpen: false
    },
    {
      question: '我可以為不同場合生成不同的自我介紹嗎？',
      answer: '當然可以！我們提供多種場景模板，包括求職面試、社交場合、學術報告、商務會議等。您只需選擇相應的場景，系統會自動調整內容風格和重點，為您生成最適合該場合的自我介紹。',
      isOpen: false
    },
    {
      question: '如何保存我生成的自我介紹？',
      answer: '生成的自我介紹會自動保存在您的帳戶中。此外，您還可以將內容複製到剪貼板，或導出為Word/PDF文件，方便您隨時使用。如果您使用的是免費方案，建議您及時保存生成的內容，以免超出免費使用額度後無法訪問。',
      isOpen: false
    }
  ]);

  const toggleFAQ = (index: number) => {
    const updatedFaqItems = [...faqItems];
    updatedFaqItems[index].isOpen = !updatedFaqItems[index].isOpen;
    setFaqItems(updatedFaqItems);
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              常見問題
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              關於自我介紹生成器的常見問題解答
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900">{item.question}</span>
                  <FontAwesomeIcon 
                    icon={item.isOpen ? faChevronUp : faChevronDown} 
                    className="h-5 w-5 text-gray-500"
                  />
                </button>
                {item.isOpen && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4 text-gray-600">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg px-6 py-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              還有其他問題？
            </h2>
            <p className="text-gray-600 mb-4">
              如果您有任何其他問題，請隨時聯繫我們的客服團隊，我們將盡快回覆您的疑問。
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              onClick={() => alert('聯絡我們功能未實現')}
            >
              聯絡我們
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ; 