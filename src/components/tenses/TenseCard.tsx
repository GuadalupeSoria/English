import React, { useState } from 'react';
import { VerbTense } from '../../types';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TenseCardProps {
  tense: VerbTense;
}

const TenseCard: React.FC<TenseCardProps> = ({ tense }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="mb-6 transition-all duration-300">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleExpanded}
      >
        <div>
          <h3 className="text-xl font-bold text-gray-800">{tense.name}</h3>
          <p className="text-gray-600 text-sm">{tense.spanishDescription}</p>
        </div>
        <div className="bg-primary bg-opacity-10 text-primary p-2 rounded-full">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-4 animate-fadeIn">
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2 text-primary-dark">Description</h4>
            <p className="text-gray-700">{tense.description}</p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-3 text-primary-dark">Formula</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-green-50 p-3 rounded-lg">
                <Badge variant="success" className="mb-2">Affirmative (+)</Badge>
                <p className="text-sm">{tense.formula.affirmative}</p>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <Badge variant="error" className="mb-2">Negative (-)</Badge>
                <p className="text-sm">{tense.formula.negative}</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <Badge variant="primary" className="mb-2">Interrogative (?)</Badge>
                <p className="text-sm">{tense.formula.interrogative}</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3 text-primary-dark">Examples</h4>
            <div className="space-y-4">
              {tense.examples.map((example, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <p className="text-green-700 font-medium text-sm mb-1">Affirmative (+)</p>
                      <p className="text-gray-800">{example.affirmative}</p>
                      {example.pronunciation && (
                        <p className="text-gray-500 text-xs italic mt-1">{example.pronunciation}</p>
                      )}
                    </div>
                    <div>
                      <p className="text-red-700 font-medium text-sm mb-1">Negative (-)</p>
                      <p className="text-gray-800">{example.negative}</p>
                    </div>
                    <div>
                      <p className="text-blue-700 font-medium text-sm mb-1">Interrogative (?)</p>
                      <p className="text-gray-800">{example.interrogative}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default TenseCard;