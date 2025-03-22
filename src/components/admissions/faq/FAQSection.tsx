
import React, { useState } from 'react';
import { faqData } from './faqData';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { RevealSection } from '@/components/ui-elements/RevealSection';

export const FAQSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null);

  // Filter FAQs based on search term
  const filteredFAQs = faqData.map(category => {
    return {
      ...category,
      questions: category.questions.filter(
        item => 
          item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    };
  }).filter(category => category.questions.length > 0);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
    setActiveFAQ(null); // Reset active FAQ when switching categories
  };

  const handleFAQClick = (id: string) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <div className="mt-8">
      {/* Search bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder="Search for questions..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FAQ categories */}
      <div className="space-y-8">
        {filteredFAQs.map((category) => (
          <RevealSection key={category.category} direction="up">
            <div className="border border-border/40 rounded-lg overflow-hidden">
              <button
                className={`w-full p-4 flex justify-between items-center transition-colors ${
                  activeCategory === category.category 
                    ? 'bg-bsd-orange/10 text-bsd-orange' 
                    : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => handleCategoryClick(category.category)}
              >
                <h3 className="text-lg font-semibold">{category.category}</h3>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    activeCategory === category.category ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Questions in this category */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeCategory === category.category
                    ? 'max-h-[1500px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq, index) => (
                    <div key={index} className="bg-white">
                      <button
                        className={`w-full p-4 text-left hover:bg-gray-50 flex justify-between items-start ${
                          activeFAQ === `${category.category}-${index}` 
                            ? 'text-bsd-gray font-medium' 
                            : 'text-gray-700'
                        }`}
                        onClick={() => handleFAQClick(`${category.category}-${index}`)}
                      >
                        <p className="pr-8">{faq.question}</p>
                        <svg
                          className={`w-5 h-5 flex-shrink-0 transition-transform ${
                            activeFAQ === `${category.category}-${index}` ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                      <div
                        className={`transition-all duration-200 ease-in-out overflow-hidden ${
                          activeFAQ === `${category.category}-${index}`
                            ? 'max-h-[500px] opacity-100'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="p-4 bg-gray-50 text-gray-700">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        ))}

        {/* No results message */}
        {searchTerm && filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No FAQs found matching "{searchTerm}"</p>
            <p className="mt-2 text-gray-500">Try different keywords or ask our AI assistant below</p>
          </div>
        )}
      </div>
    </div>
  );
};
