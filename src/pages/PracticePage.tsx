import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../data/quizQuestions';
import QuizCard from '../components/practice/QuizCard';
import { verbTenses } from '../data/verbTenses';
import { Award, BookOpen, CheckCircle, Repeat } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import Layout from '../components/layout/Layout';

const PracticePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null | undefined>(undefined);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState(quizQuestions);
  
  useEffect(() => {
    if (selectedCategory) {
      let filtered;
      if (selectedCategory === 'vocabulary') {
        // Include all questions with ID starting with 'voc'
        filtered = quizQuestions.filter(q => q.id.startsWith('voc'));
      } else {
        filtered = quizQuestions.filter(q => q.category === selectedCategory);
      }
      const shuffled = [...filtered].sort(() => Math.random() - 0.5);
      setCurrentQuestions(shuffled);
    } else {
      setCurrentQuestions([...quizQuestions].sort(() => Math.random() - 0.5));
    }
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setTotalAnswered(0);
    setQuizComplete(false);
  }, [selectedCategory]);
  
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
    setTotalAnswered(prev => prev + 1);
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizComplete(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setTotalAnswered(0);
    setQuizComplete(false);
    setCurrentQuestions([...currentQuestions].sort(() => Math.random() - 0.5));
  };
  
  const calculateScore = () => {
    return Math.round((correctAnswers / totalAnswered) * 100);
  };
  
  const categories = [
    { id: null, name: 'Mixed Practice', icon: <Repeat size={24} /> },
    ...verbTenses.map(tense => ({
      id: tense.id,
      name: tense.name,
      icon: <BookOpen size={24} />
    })),
    { id: 'vocabulary', name: 'Vocabulary', icon: <BookOpen size={24} /> }
  ];
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Practice</h1>
        
        {selectedCategory === undefined ? (
          <div>
            <p className="text-gray-700 mb-8">
              Select a category to practice your English skills with interactive exercises.
              Choose "Mixed Practice" to test your knowledge across all categories!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {categories.map((category) => (
                <Card 
                  key={category.id || 'mixed'}
                  className="flex items-center justify-center p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="flex justify-center text-pink-700 bg-opacity-10 p-3 rounded-full mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
                </Card>
              ))}
            </div>
          </div>
        ) : quizComplete ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="bg-primary bg-opacity-10 p-4 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-6">
              <Award size={40} className="text-primary" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Practice Complete!</h2>
            <p className="text-gray-600 mb-4">
              You scored {correctAnswers} out of {totalAnswered} ({calculateScore()}%)
            </p>
            
            <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
              <div 
                className="bg-primary h-4 rounded-full" 
                style={{ width: `${calculateScore()}%` }}
              ></div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={resetQuiz}>
                Practice Again
              </Button>
              <Button 
                variant="outline"
                onClick={() => setSelectedCategory(null)}
              >
                Choose Different Category
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {categories.find(c => c.id === selectedCategory)?.name || 'Mixed Practice'}
                </h2>
                {selectedCategory === null && currentQuestions.length > 0 && (
                  <p className="text-sm text-gray-600 mt-1">
                    Category: {categories.find(c => c.id === currentQuestions[currentQuestionIndex].category)?.name}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 mr-2">
                  Question {currentQuestionIndex + 1} of {currentQuestions.length}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                >
                  Change
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setSelectedCategory(undefined)}
                >
                  Menu
                </Button>
              </div>
            </div>
            
            {currentQuestions.length > 0 ? (
              <QuizCard 
                question={currentQuestions[currentQuestionIndex]}
                onAnswer={handleAnswer}
                onNext={handleNext}
              />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-500 mb-4">
                  No practice questions available for this category yet.
                </p>
                <Button 
                  variant="outline"
                  onClick={() => setSelectedCategory(null)}
                >
                  Choose Different Category
                </Button>
              </div>
            )}
            
            {totalAnswered > 0 && !quizComplete && (
              <div className="mt-6 flex items-center">
                <CheckCircle size={20} className="text-green-600 mr-2" />
                <span className="text-gray-600">
                  {correctAnswers} correct out of {totalAnswered} ({Math.round((correctAnswers / totalAnswered) * 100)}%)
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PracticePage;