import React, { useState } from 'react';
import { QuizQuestion } from '../../types';
import Card from '../common/Card';
import Button from '../common/Button';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, onNext }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | string[]>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState('');
  
  const isCorrect = () => {
    if (question.type === 'multiple-choice' || question.type === 'true-false') {
      return selectedAnswer === question.correctAnswer;
    } else if (question.type === 'fill-blank') {
      if (Array.isArray(question.correctAnswer)) {
        return question.correctAnswer.some(answer => 
          answer.toLowerCase() === inputValue.toLowerCase().trim()
        );
      }
      return inputValue.toLowerCase().trim() === (question.correctAnswer as string).toLowerCase();
    } else if (question.type === 'reorder') {
      return JSON.stringify(selectedAnswer) === JSON.stringify(question.correctAnswer);
    }
    return false;
  };
  
  const handleSubmit = () => {
    setIsSubmitted(true);
    onAnswer(isCorrect());
  };
  
  const handleNext = () => {
    setIsSubmitted(false);
    setSelectedAnswer('');
    setInputValue('');
    onNext();
  };
  
  const renderQuestion = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <div 
                key={index}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedAnswer === option 
                    ? isSubmitted 
                      ? isCorrect() 
                        ? 'bg-green-50 border-green-300' 
                        : 'bg-red-50 border-red-300'
                      : 'bg-primary-50 border-primary-300' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => !isSubmitted && setSelectedAnswer(option)}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 mr-3 rounded-full border flex items-center justify-center ${
                    selectedAnswer === option ? 'border-primary bg-primary text-white' : 'border-gray-300'
                  }`}>
                    {selectedAnswer === option && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-gray-800">{option}</span>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'fill-blank':
        return (
          <div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => !isSubmitted && setInputValue(e.target.value)}
              placeholder="Type your answer..."
              className={`w-full p-3 border rounded-lg ${
                isSubmitted
                  ? isCorrect()
                    ? 'border-green-300 bg-green-50'
                    : 'border-red-300 bg-red-50'
                  : 'border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200'
              }`}
              disabled={isSubmitted}
            />
          </div>
        );
      
      case 'true-false':
        return (
          <div className="flex space-x-4">
            <div 
              className={`flex-1 p-3 border rounded-lg text-center cursor-pointer transition-colors ${
                selectedAnswer === 'true' 
                  ? isSubmitted 
                    ? isCorrect() 
                      ? 'bg-green-50 border-green-300' 
                      : 'bg-red-50 border-red-300'
                    : 'bg-primary-50 border-primary-300' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => !isSubmitted && setSelectedAnswer('true')}
            >
              True
            </div>
            <div 
              className={`flex-1 p-3 border rounded-lg text-center cursor-pointer transition-colors ${
                selectedAnswer === 'false' 
                  ? isSubmitted 
                    ? isCorrect() 
                      ? 'bg-green-50 border-green-300' 
                      : 'bg-red-50 border-red-300'
                    : 'bg-primary-50 border-primary-300' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => !isSubmitted && setSelectedAnswer('false')}
            >
              False
            </div>
          </div>
        );
      
      case 'reorder':
        // Simple version for reordering
        return (
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {question.options?.map((option, index) => (
                <div 
                  key={index}
                  className="p-2 bg-gray-100 border border-gray-300 rounded cursor-pointer"
                  onClick={() => {
                    if (isSubmitted) return;
                    
                    const currentArr = Array.isArray(selectedAnswer) ? [...selectedAnswer] : [];
                    
                    if (currentArr.includes(option)) {
                      setSelectedAnswer(currentArr.filter(item => item !== option));
                    } else {
                      setSelectedAnswer([...currentArr, option]);
                    }
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
            
            <div className="p-3 border border-dashed border-gray-300 rounded-lg min-h-[60px]">
              <div className="flex flex-wrap gap-2">
                {Array.isArray(selectedAnswer) && selectedAnswer.map((item, index) => (
                  <div key={index} className="p-2 bg-primary-100 border border-primary-300 rounded">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <Card className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{question.question}</h3>
        {renderQuestion()}
      </div>
      
      {isSubmitted && (
        <div className={`mb-4 p-4 rounded-lg ${isCorrect() ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="flex items-center">
            {isCorrect() ? (
              <CheckCircle className="text-green-600 mr-2" size={20} />
            ) : (
              <XCircle className="text-red-600 mr-2" size={20} />
            )}
            <span className={`font-medium ${isCorrect() ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect() ? 'Correct!' : 'Incorrect'}
            </span>
          </div>
          
          {question.explanation && (
            <p className="mt-2 text-gray-700 text-sm">{question.explanation}</p>
          )}
          
          {!isCorrect() && (
            <p className="mt-1 text-gray-700 text-sm">
              <span className="font-medium">Correct answer: </span>
              {Array.isArray(question.correctAnswer) 
                ? question.correctAnswer.join(' ')
                : question.correctAnswer}
            </p>
          )}
        </div>
      )}
      
      <div className="flex justify-between">
        {!isSubmitted ? (
          <Button 
            onClick={handleSubmit} 
            disabled={
              (question.type === 'multiple-choice' && !selectedAnswer) ||
              (question.type === 'fill-blank' && !inputValue) ||
              (question.type === 'true-false' && !selectedAnswer) ||
              (question.type === 'reorder' && (!Array.isArray(selectedAnswer) || selectedAnswer.length === 0))
            }
            fullWidth
          >
            Check Answer
          </Button>
        ) : (
          <Button 
            onClick={handleNext}
            variant="accent"
            fullWidth
          >
            Next Question
          </Button>
        )}
      </div>
    </Card>
  );
};

export default QuizCard;