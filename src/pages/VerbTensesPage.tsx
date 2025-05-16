import React, { useState } from 'react';
import { verbTenses } from '../data/verbTenses';
import TenseCard from '../components/tenses/TenseCard';
import { Search, Filter } from 'lucide-react';
import Layout from '../components/layout/Layout';

const VerbTensesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'present' | 'past' | 'future'>('all');
  
  const filteredTenses = verbTenses.filter(tense => {
    const matchesSearch = tense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          tense.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    return matchesSearch && tense.id.includes(filter);
  });
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Verb Tenses</h1>
        <p className="text-gray-700 mb-8">
          Master all English verb tenses with clear explanations, examples, and practice. Each tense includes affirmative, negative, and interrogative forms with pronunciation guides.
        </p>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search verb tenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">All Tenses</option>
              <option value="present">Present Tenses</option>
              <option value="past">Past Tenses</option>
              <option value="future">Future Tenses</option>
            </select>
          </div>
        </div>
        
        {filteredTenses.length > 0 ? (
          <div>
            {filteredTenses.map((tense) => (
              <TenseCard key={tense.id} tense={tense} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500">No verb tenses match your search criteria.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default VerbTensesPage;