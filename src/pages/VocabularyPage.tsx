import React, { useState } from 'react';
import { vocabularyCategories } from '../data/vocabulary';
import Card from '../components/common/Card';
import { Search, BookOpen } from 'lucide-react';
import Layout from '../components/layout/Layout';
import * as LucideIcons from 'lucide-react';
import VocabularyPractice from '../components/vocabulary/VocabularyPractice';
import Button from '../components/common/Button';

const VocabularyPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showPractice, setShowPractice] = useState(false);

  // Dynamically get icon component
  // Using 'any' here is necessary due to the dynamic nature of icon lookup
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Vocabulary</h1>
        <p className="text-gray-700 mb-4">
          Expand your English vocabulary with these essential words organized by categories. Each word includes Spanish translation and pronunciation guide.
        </p>
        
        <div className="flex justify-between items-center mb-8">
          {showPractice ? (
            <Button 
              variant="outline" 
              onClick={() => setShowPractice(false)}
              className="flex items-center"
            >
              ← Back to Vocabulary
            </Button>
          ) : (
            <Button 
              onClick={() => setShowPractice(true)}
              className="flex items-center"
            >
              <BookOpen size={18} className="mr-2" /> Practice Translation
            </Button>
          )}
        </div>

        {showPractice ? (
          <VocabularyPractice />
        ) : !selectedCategory ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {vocabularyCategories.map((category) => (
              <Card 
                key={category.id}
                className="flex flex-col items-center p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="bg-opacity-10 p-4 rounded-full mb-3 flex justify-center">
                  {getIconComponent(category.icon)}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.items.length} words</p>
              </Card>
            ))}
          </div>
        ) : (
          <>
            <div className="mb-8 flex flex-col md:flex-row gap-4">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search in this category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchTerm('');
                }}
                className="px-4 py-2 text-primary hover:text-primary-dark transition-colors"
              >
                ← Back to Categories
              </button>
            </div>

            {vocabularyCategories
              .filter(category => category.id === selectedCategory)
              .map(category => {
                const filteredItems = category.items.filter(item =>
                  searchTerm === '' || 
                  item.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.spanish.toLowerCase().includes(searchTerm.toLowerCase())
                );

                return (
                  <div key={category.id}>
                    <div className="flex items-center mb-6">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                        {getIconComponent(category.icon)}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">{category.name}</h2>
                    </div>

                    {filteredItems.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredItems.map((item, index) => (
                          <Card key={`${category.id}-${index}`} className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-lg font-bold text-gray-800">{item.english}</h3>
                              <button
                                onClick={() => {
                                  const utterance = new SpeechSynthesisUtterance(item.english);
                                  utterance.lang = 'en-US';
                                  window.speechSynthesis.speak(utterance);
                                }}
                                className="text-primary hover:text-primary-dark"
                                aria-label="Listen to pronunciation"
                              >
                                🔊
                              </button>
                            </div>
                            <p className="text-gray-600">{item.spanish}</p>
                            <p className="text-gray-500 text-sm mt-1 italic">/{item.pronunciation}/</p>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-white rounded-lg shadow-md p-8 text-center">
                        <p className="text-gray-500">No words match your search criteria.</p>
                      </div>
                    )}
                  </div>
                );
              })}
          </>
        )}
      </div>
    </Layout>
  );
};

export default VocabularyPage;