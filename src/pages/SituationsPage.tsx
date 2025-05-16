import React, { useState } from 'react';
import { situations } from '../data/situations';
import Layout from '../components/layout/Layout';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import QuizCard from '../components/practice/QuizCard';
import * as LucideIcons from 'lucide-react';
import { Search, Volume2 } from 'lucide-react';

const SituationsPage: React.FC = () => {
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null);
  const [showingExercises, setShowingExercises] = useState(false);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent size={24} /> : null;
  };

  const playPronunciation = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
    setTotalAnswered(prev => prev + 1);
  };

  const handleNext = () => {
    const situation = situations.find(s => s.id === selectedSituation);
    if (situation && currentExerciseIndex < situation.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    } else {
      setShowingExercises(false);
      setCurrentExerciseIndex(0);
      setCorrectAnswers(0);
      setTotalAnswered(0);
    }
  };

  if (!selectedSituation) {
    return (
      <Layout>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Real-Life Situations</h1>
          <p className="text-gray-700 mb-8">
            Practice English in common real-life scenarios. Each situation includes useful phrases,
            dialogues, and interactive exercises.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {situations.map((situation) => (
              <Card
                key={situation.id}
                className="cursor-pointer hover:shadow-lg transition-all"
                onClick={() => setSelectedSituation(situation.id)}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-3">
                    {getIconComponent(situation.icon)}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{situation.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{situation.description}</p>
                <div className="text-sm text-gray-500">
                  {situation.phrases.length} phrases • {situation.dialogues.length} dialogues • {situation.exercises.length} exercises
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  const situation = situations.find(s => s.id === selectedSituation)!;

  if (showingExercises) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Practice: {situation.title}
            </h2>
            <Button
              variant="outline"
              onClick={() => {
                setShowingExercises(false);
                setCurrentExerciseIndex(0);
                setCorrectAnswers(0);
                setTotalAnswered(0);
              }}
            >
              Back to Situation
            </Button>
          </div>

          <QuizCard
            question={situation.exercises[currentExerciseIndex]}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />

          {totalAnswered > 0 && (
            <div className="mt-4 text-center text-gray-600">
              Score: {correctAnswers} out of {totalAnswered} ({Math.round((correctAnswers / totalAnswered) * 100)}%)
            </div>
          )}
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{situation.title}</h2>
          <div className="space-x-3">
            <Button
              variant="outline"
              onClick={() => setSelectedSituation(null)}
            >
              Back to Situations
            </Button>
            <Button
              onClick={() => setShowingExercises(true)}
            >
              Start Practice
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Useful Phrases</h3>
            <div className="grid gap-4">
              {situation.phrases.map((phrase, index) => (
                <Card key={index} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-lg font-medium text-gray-800">{phrase.english}</p>
                      <p className="text-gray-600">{phrase.spanish}</p>
                      <p className="text-gray-500 text-sm italic">/{phrase.pronunciation}/</p>
                    </div>
                    <button
                      onClick={() => playPronunciation(phrase.english)}
                      className="text-primary hover:text-primary-dark p-2"
                      aria-label="Listen to pronunciation"
                    >
                      <Volume2 size={20} />
                    </button>
                  </div>
                  {phrase.context && (
                    <p className="text-sm text-gray-500 mt-2">Context: {phrase.context}</p>
                  )}
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Practice Dialogues</h3>
            <div className="space-y-6">
              {situation.dialogues.map((dialogue, index) => (
                <Card key={index}>
                  <div className="p-4 bg-gray-50 border-b">
                    <h4 className="font-semibold text-gray-800">{dialogue.title}</h4>
                  </div>
                  <div className="p-4 space-y-4">
                    {dialogue.exchanges.map((exchange, i) => (
                      <div
                        key={i}
                        className={`flex ${
                          exchange.speaker === 'A' ? 'justify-start' : 'justify-end'
                        }`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            exchange.speaker === 'A'
                              ? 'bg-primary-100'
                              : 'bg-secondary-100'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <p className="font-medium text-gray-800">{exchange.english}</p>
                            <button
                              onClick={() => playPronunciation(exchange.english)}
                              className="text-primary hover:text-primary-dark ml-2"
                              aria-label="Listen to pronunciation"
                            >
                              <Volume2 size={16} />
                            </button>
                          </div>
                          <p className="text-gray-600 text-sm">{exchange.spanish}</p>
                          <p className="text-gray-500 text-xs italic">/{exchange.pronunciation}/</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default SituationsPage;