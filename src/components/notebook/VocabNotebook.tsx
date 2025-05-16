import React, { useState } from 'react';
import { PersonalVocabularyItem } from '../../types';
import Button from '../common/Button';
import { Download, Plus, Search, X } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface VocabNotebookProps {
  items: PersonalVocabularyItem[];
  onAddItem: () => void;
  onRemoveItem: (id: string) => void;
  onToggleMastered: (id: string) => void;
  onExportPdf: () => void;
}

const VocabNotebook: React.FC<VocabNotebookProps> = ({
  items,
  onAddItem,
  onRemoveItem,
  onToggleMastered,
  onExportPdf
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'mastered' | 'learning'>('all');
  
  const filteredItems = items
    .filter(item => 
      item.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.spanish.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(item => {
      if (filter === 'all') return true;
      if (filter === 'mastered') return item.mastered;
      if (filter === 'learning') return !item.mastered;
      return true;
    });

  const handleExportPdf = () => {
    const doc = new jsPDF();
    
    // Add title
    doc.setFontSize(20);
    doc.setTextColor(79, 134, 198); // Primary color
    doc.text('My English Vocabulary Notebook', 20, 20);
    
    // Add export date
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(`Exported on ${new Date().toLocaleDateString()}`, 20, 30);
    
    // Create table
    (doc as any).autoTable({
      startY: 40,
      head: [['English', 'Spanish', 'Pronunciation', 'Notes', 'Status']],
      body: items.map(item => [
        item.english,
        item.spanish,
        `/${item.pronunciation}/`,
        item.notes || '-',
        item.mastered ? 'Mastered' : 'Learning'
      ]),
      styles: { fontSize: 10 },
      headStyles: { 
        fillColor: [79, 134, 198],
        textColor: 255,
        fontStyle: 'bold'
      },
      alternateRowStyles: { fillColor: [245, 245, 245] }
    });
    
    // Save PDF
    doc.save('vocabulary-notebook.pdf');
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-auto flex-1">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search your vocabulary..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          {searchTerm && (
            <button
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>
        
        <div className="flex space-x-2 w-full md:w-auto">
          <Button 
            variant="outline" 
            size="sm"
            className={filter === 'all' ? 'bg-gray-100' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className={filter === 'mastered' ? 'bg-gray-100' : ''}
            onClick={() => setFilter('mastered')}
          >
            Mastered
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className={filter === 'learning' ? 'bg-gray-100' : ''}
            onClick={() => setFilter('learning')}
          >
            Learning
          </Button>
        </div>
        
        <div className="flex space-x-2 w-full md:w-auto">
          <Button 
            variant="primary" 
            onClick={onAddItem}
            icon={<Plus size={18} />}
          >
            Add Word
          </Button>
          <Button 
            variant="outline" 
            onClick={handleExportPdf}
            icon={<Download size={18} />}
          >
            Export PDF
          </Button>
        </div>
      </div>
      
      {filteredItems.length > 0 ? (
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  English
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Spanish
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pronunciation
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Notes
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Added
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.english}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.spanish}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 italic">
                    /{item.pronunciation}/
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                    {item.notes || '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(item.dateAdded).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span 
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        item.mastered 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {item.mastered ? 'Mastered' : 'Learning'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={() => onToggleMastered(item.id)}
                      className="text-primary-600 hover:text-primary-900 mr-4"
                    >
                      {item.mastered ? 'Mark as Learning' : 'Mark as Mastered'}
                    </button>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500 mb-4">
            {searchTerm 
              ? 'No matching vocabulary found. Try a different search term.' 
              : 'Your vocabulary notebook is empty. Start adding words!'}
          </p>
          {!searchTerm && (
            <Button 
              variant="primary" 
              onClick={onAddItem}
              icon={<Plus size={18} />}
            >
              Add Your First Word
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default VocabNotebook;