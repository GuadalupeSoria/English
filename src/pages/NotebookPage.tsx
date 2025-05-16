import React, { useState, useEffect } from 'react';
import { PersonalVocabularyItem } from '../types';
import Layout from '../components/layout/Layout';
import VocabNotebook from '../components/notebook/VocabNotebook';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { X } from 'lucide-react';

// For PDF export
const generatePdf = (items: PersonalVocabularyItem[]) => {
  // In a real implementation, this would use a PDF library
  // For now, we'll simulate by opening a new window with formatted content
  const content = `
    <html>
      <head>
        <title>My Vocabulary Notebook</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { color: #4F86C6; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th { background-color: #4F86C6; color: white; text-align: left; padding: 8px; }
          td { border: 1px solid #ddd; padding: 8px; }
          tr:nth-child(even) { background-color: #f2f2f2; }
        </style>
      </head>
      <body>
        <h1>My English Vocabulary Notebook</h1>
        <p>Exported on ${new Date().toLocaleDateString()}</p>
        <table>
          <thead>
            <tr>
              <th>English</th>
              <th>Spanish</th>
              <th>Pronunciation</th>
              <th>Notes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${items.map(item => `
              <tr>
                <td>${item.english}</td>
                <td>${item.spanish}</td>
                <td>/${item.pronunciation}/</td>
                <td>${item.notes || '-'}</td>
                <td>${item.mastered ? 'Mastered' : 'Learning'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </body>
    </html>
  `;
  
  const win = window.open('', '_blank');
  if (win) {
    win.document.write(content);
    win.document.close();
    win.print(); // Opens print dialog
  }
};

const NotebookPage: React.FC = () => {
  // In a real app, this would be stored in a database or localStorage
  const [items, setItems] = useState<PersonalVocabularyItem[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newWord, setNewWord] = useState({
    english: '',
    spanish: '',
    pronunciation: '',
    notes: '',
    category: 'custom'
  });
  
  // Load stored items from localStorage on component mount
  useEffect(() => {
    const storedItems = localStorage.getItem('vocabularyNotebook');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);
  
  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('vocabularyNotebook', JSON.stringify(items));
  }, [items]);
  
  const handleAddItem = () => {
    setIsAddModalOpen(true);
  };
  
  const handleSaveNewWord = () => {
    if (newWord.english && newWord.spanish) {
      const newItem: PersonalVocabularyItem = {
        ...newWord,
        id: Date.now().toString(),
        dateAdded: new Date().toISOString(),
        mastered: false
      };
      
      setItems(prev => [...prev, newItem]);
      setNewWord({
        english: '',
        spanish: '',
        pronunciation: '',
        notes: '',
        category: 'custom'
      });
      setIsAddModalOpen(false);
    }
  };
  
  const handleRemoveItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };
  
  const handleToggleMastered = (id: string) => {
    setItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, mastered: !item.mastered } : item
      )
    );
  };
  
  const handleExportPdf = () => {
    generatePdf(items);
  };
  
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Vocabulary Notebook</h1>
        <p className="text-gray-700 mb-8">
          Keep track of the new words you learn. Add words, mark them as mastered, and export your personalized vocabulary list to PDF.
        </p>
        
        <VocabNotebook 
          items={items}
          onAddItem={handleAddItem}
          onRemoveItem={handleRemoveItem}
          onToggleMastered={handleToggleMastered}
          onExportPdf={handleExportPdf}
        />
        
        {/* Add Word Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md relative">
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              
              <h2 className="text-xl font-bold text-gray-800 mb-6">Add New Word</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    English Word*
                  </label>
                  <input
                    type="text"
                    value={newWord.english}
                    onChange={(e) => setNewWord({...newWord, english: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter word in English"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Spanish Translation*
                  </label>
                  <input
                    type="text"
                    value={newWord.spanish}
                    onChange={(e) => setNewWord({...newWord, spanish: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter Spanish translation"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pronunciation (Phonetic)
                  </label>
                  <input
                    type="text"
                    value={newWord.pronunciation}
                    onChange={(e) => setNewWord({...newWord, pronunciation: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How it's pronounced (e.g., 'wóter' for 'water')"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notes
                  </label>
                  <textarea
                    value={newWord.notes}
                    onChange={(e) => setNewWord({...newWord, notes: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Add any notes or context for this word"
                    rows={3}
                  />
                </div>
              </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <Button 
                  variant="outline" 
                  onClick={() => setIsAddModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleSaveNewWord}
                  disabled={!newWord.english || !newWord.spanish}
                >
                  Save Word
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default NotebookPage;