import React, { useState, useEffect } from 'react';
import { vocabularyCategories } from '../../data/vocabulary';
import { VocabularyItem } from '../../types';
import Card from '../common/Card';
import Button from '../common/Button';
import { CheckCircle, XCircle, RefreshCw, Filter, HelpCircle } from 'lucide-react';

const VocabularyPractice: React.FC = () => {
  const [allWords, setAllWords] = useState<VocabularyItem[]>([]);
  const [currentWord, setCurrentWord] = useState<VocabularyItem | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [direction, setDirection] = useState<'en-to-es' | 'es-to-en'>('es-to-en');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);

  // Initialize with all vocabulary words
  useEffect(() => {
    const words: VocabularyItem[] = [];
    vocabularyCategories.forEach(category => {
      if (!selectedCategory || category.id === selectedCategory) {
        words.push(...category.items);
      }
    });
    setAllWords(words);
    pickRandomWord(words);
  }, [selectedCategory]);

  const pickRandomWord = (words: VocabularyItem[] = allWords) => {
    if (words.length === 0) return;
    const randomIndex = Math.floor(Math.random() * words.length);
    setCurrentWord(words[randomIndex]);
    setUserAnswer('');
    setIsSubmitted(false);
    setHintLevel(0);
  };

  const handleSubmit = () => {
    if (!currentWord || !userAnswer.trim()) return;

    let correct = false;
    if (direction === 'es-to-en') {
      // Case insensitive comparison for English answers
      correct = userAnswer.toLowerCase().trim() === currentWord.english.toLowerCase();
    } else {
      // Case insensitive comparison for Spanish answers
      correct = userAnswer.toLowerCase().trim() === currentWord.spanish.toLowerCase();
    }

    setIsCorrect(correct);
    setIsSubmitted(true);
    setScore(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const handleNextWord = () => {
    pickRandomWord();
  };

  const toggleDirection = () => {
    setDirection(prev => prev === 'es-to-en' ? 'en-to-es' : 'es-to-en');
    setUserAnswer('');
    setIsSubmitted(false);
    setHintLevel(0);
  };

  const resetPractice = () => {
    setScore({ correct: 0, total: 0 });
    pickRandomWord();
  };

  const showHint = () => {
    if (!currentWord) return;

    const answerToHint = direction === 'es-to-en' ? currentWord.english : currentWord.spanish;
    const newHintLevel = Math.min(hintLevel + 1, Math.ceil(answerToHint.length / 2));
    setHintLevel(newHintLevel);
  };

  const getHint = () => {
    if (!currentWord || hintLevel === 0) return '';

    const answerToHint = direction === 'es-to-en' ? currentWord.english : currentWord.spanish;
    return answerToHint.substring(0, hintLevel) + '...';
  };

  if (!currentWord) {
    return <div>Loading...</div>;
  }

  const questionWord = direction === 'es-to-en' ? currentWord.spanish : currentWord.english;
  const correctAnswer = direction === 'es-to-en' ? currentWord.english : currentWord.spanish;
  const category = vocabularyCategories.find(cat => 
    cat.items.some(item => item.english === currentWord.english)
  )?.name || '';

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Vocabulary Practice</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">
            {direction === 'es-to-en' ? 'Spanish → English' : 'English → Spanish'}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleDirection}
            className="flex items-center"
          >
            <RefreshCw size={16} className="mr-1" /> Switch
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCategoryFilter(!showCategoryFilter)}
            className="flex items-center"
          >
            <Filter size={16} className="mr-1" /> Filter
          </Button>
        </div>
      </div>

      {showCategoryFilter && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Filter by Category:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <Button
              variant={selectedCategory === null ? "accent" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="text-sm"
            >
              All Categories
            </Button>
            {vocabularyCategories.map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "accent" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="text-sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      )}

      <div className="mb-6">
        <div className="text-sm text-gray-500 mb-1">
          Category: {category}
        </div>
        <div className="text-lg font-medium text-center p-4 bg-gray-50 rounded-lg mb-4">
          {questionWord}
          {direction === 'es-to-en' && (
            <button
              onClick={() => {
                const utterance = new SpeechSynthesisUtterance(questionWord);
                utterance.lang = 'es-ES';
                window.speechSynthesis.speak(utterance);
              }}
              className="ml-2 text-primary hover:text-primary-dark"
              aria-label="Listen to pronunciation"
            >
              🔊
            </button>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-1">
            {direction === 'es-to-en' 
              ? 'What is this word in English?' 
              : '¿Cómo se dice esta palabra en Español?'}
          </label>
          <input
            id="answer"
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your translation here..."
            className={`w-full p-3 border rounded-lg ${
              isSubmitted
                ? isCorrect
                  ? 'border-green-300 bg-green-50'
                  : 'border-red-300 bg-red-50'
                : 'border-gray-300 focus:border-primary focus:ring focus:ring-primary-200'
            }`}
            disabled={isSubmitted}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !isSubmitted) {
                handleSubmit();
              }
            }}
          />
        </div>

        {hintLevel > 0 && !isSubmitted && (
          <div className="mb-4 p-2 bg-blue-50 border border-blue-200 rounded-md text-blue-800 text-sm">
            <span className="font-medium">Hint: </span>
            {getHint()}
          </div>
        )}

        {!isSubmitted && (
          <div className="flex justify-end mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={showHint}
              className="text-sm text-gray-600 flex items-center"
            >
              <HelpCircle size={16} className="mr-1" /> Need a hint?
            </Button>
          </div>
        )}

        {isSubmitted && (
          <div className={`mb-4 p-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
            <div className="flex items-center">
              {isCorrect ? (
                <CheckCircle className="text-green-600 mr-2" size={20} />
              ) : (
                <XCircle className="text-red-600 mr-2" size={20} />
              )}
              <span className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                {isCorrect ? '¡Correcto!' : 'Incorrecto'}
              </span>
            </div>
            
            {!isCorrect && (
              <p className="mt-2 text-gray-700">
                <span className="font-medium">Correct answer: </span>
                {correctAnswer}
                <button
                  onClick={() => {
                    const utterance = new SpeechSynthesisUtterance(correctAnswer);
                    utterance.lang = direction === 'es-to-en' ? 'en-US' : 'es-ES';
                    window.speechSynthesis.speak(utterance);
                  }}
                  className="ml-2 text-primary hover:text-primary-dark"
                  aria-label="Listen to pronunciation"
                >
                  🔊
                </button>
              </p>
            )}
            
            <p className="mt-2 text-gray-600 text-sm">
              Pronunciation: /{currentWord.pronunciation}/
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            Score: {score.correct}/{score.total} ({score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%)
          </div>
          {score.total > 0 && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={resetPractice}
              className="text-sm"
            >
              Reset Score
            </Button>
          )}
        </div>
        
        {!isSubmitted ? (
          <Button onClick={handleSubmit} disabled={!userAnswer.trim()}>
            Check Answer
          </Button>
        ) : (
          <Button onClick={handleNextWord} variant="accent">
            Next Word
          </Button>
        )}
      </div>
    </Card>
  );
};

export default VocabularyPractice; 