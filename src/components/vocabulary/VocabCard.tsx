import React from 'react';
import { VocabularyItem } from '../../types';
import { Volume2 } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

interface VocabCardProps {
  item: VocabularyItem;
  onSave?: () => void;
}

const VocabCard: React.FC<VocabCardProps> = ({ item, onSave }) => {
  const playPronunciation = () => {
    // Using built-in speech synthesis
    const utterance = new SpeechSynthesisUtterance(item.english);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Card className="h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{item.english}</h3>
          <button
            onClick={playPronunciation}
            className="text-primary bg-primary-100 p-2 rounded-full hover:bg-primary-200 transition-colors"
            aria-label="Listen to pronunciation"
          >
            <Volume2 size={16} />
          </button>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-600">{item.spanish}</p>
          <p className="text-gray-500 text-sm mt-1 italic">/{item.pronunciation}/</p>
        </div>
        
        {item.example && (
          <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 mb-4">
            <span className="font-medium">Example:</span> {item.example}
          </div>
        )}
      </div>
      
      {onSave && (
        <Button 
          variant="outline" 
          onClick={onSave} 
          className="mt-2"
          size="sm"
          fullWidth
        >
          Add to my notebook
        </Button>
      )}
    </Card>
  );
};

export default VocabCard;