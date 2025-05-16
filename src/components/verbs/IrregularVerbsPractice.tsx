import React, { useState, useEffect } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';

interface IrregularVerb {
  infinitive: string;
  past: string;
  participle: string;
  spanish?: string;
  pronunciation: {
    infinitive: string;
    past: string;
    participle: string;
  };
}

// Lista de verbos irregulares (la misma que usamos en IrregularVerbsPage)
const irregularVerbs: IrregularVerb[] = [
  { 
    infinitive: "be", past: "was/were", participle: "been", spanish: "ser/estar",
    pronunciation: { infinitive: "bi", past: "wos/wer", participle: "bin" }
  },
  { 
    infinitive: "begin", past: "began", participle: "begun", spanish: "empezar",
    pronunciation: { infinitive: "bigín", past: "bigán", participle: "bigán" }
  },
  { 
    infinitive: "break", past: "broke", participle: "broken", spanish: "romper",
    pronunciation: { infinitive: "breik", past: "brouk", participle: "bróuken" }
  },
  { 
    infinitive: "bring", past: "brought", participle: "brought", spanish: "traer",
    pronunciation: { infinitive: "bring", past: "brot", participle: "brot" }
  },
  { 
    infinitive: "build", past: "built", participle: "built", spanish: "construir",
    pronunciation: { infinitive: "bild", past: "bilt", participle: "bilt" }
  },
  { 
    infinitive: "buy", past: "bought", participle: "bought", spanish: "comprar",
    pronunciation: { infinitive: "bai", past: "bot", participle: "bot" }
  },
  { 
    infinitive: "catch", past: "caught", participle: "caught", spanish: "atrapar",
    pronunciation: { infinitive: "kach", past: "kot", participle: "kot" }
  },
  { 
    infinitive: "choose", past: "chose", participle: "chosen", spanish: "elegir",
    pronunciation: { infinitive: "chus", past: "chous", participle: "chóusen" }
  },
  { 
    infinitive: "come", past: "came", participle: "come", spanish: "venir",
    pronunciation: { infinitive: "kam", past: "keim", participle: "kam" }
  },
  { 
    infinitive: "do", past: "did", participle: "done", spanish: "hacer",
    pronunciation: { infinitive: "du", past: "did", participle: "dan" }
  },
  { 
    infinitive: "eat", past: "ate", participle: "eaten", spanish: "comer",
    pronunciation: { infinitive: "it", past: "eit", participle: "íten" }
  },
  { 
    infinitive: "fall", past: "fell", participle: "fallen", spanish: "caer",
    pronunciation: { infinitive: "fol", past: "fel", participle: "fólen" }
  },
  { 
    infinitive: "find", past: "found", participle: "found", spanish: "encontrar",
    pronunciation: { infinitive: "faind", past: "faund", participle: "faund" }
  },
  { 
    infinitive: "get", past: "got", participle: "got/gotten", spanish: "obtener",
    pronunciation: { infinitive: "guet", past: "got", participle: "got/góten" }
  },
  { 
    infinitive: "give", past: "gave", participle: "given", spanish: "dar",
    pronunciation: { infinitive: "guiv", past: "gueiv", participle: "guíven" }
  },
  { 
    infinitive: "go", past: "went", participle: "gone", spanish: "ir",
    pronunciation: { infinitive: "gou", past: "went", participle: "gon" }
  },
  { 
    infinitive: "have", past: "had", participle: "had", spanish: "tener",
    pronunciation: { infinitive: "jav", past: "jad", participle: "jad" }
  },
  { 
    infinitive: "know", past: "knew", participle: "known", spanish: "saber",
    pronunciation: { infinitive: "nou", past: "niu", participle: "noun" }
  },
  { 
    infinitive: "make", past: "made", participle: "made", spanish: "hacer",
    pronunciation: { infinitive: "meik", past: "meid", participle: "meid" }
  },
  { 
    infinitive: "put", past: "put", participle: "put", spanish: "poner",
    pronunciation: { infinitive: "put", past: "put", participle: "put" }
  },
  { 
    infinitive: "read", past: "read", participle: "read", spanish: "leer",
    pronunciation: { infinitive: "rid", past: "red", participle: "red" }
  },
  { 
    infinitive: "run", past: "ran", participle: "run", spanish: "correr",
    pronunciation: { infinitive: "ran", past: "ran", participle: "ran" }
  },
  { 
    infinitive: "say", past: "said", participle: "said", spanish: "decir",
    pronunciation: { infinitive: "sei", past: "sed", participle: "sed" }
  },
  { 
    infinitive: "see", past: "saw", participle: "seen", spanish: "ver",
    pronunciation: { infinitive: "si", past: "so", participle: "sin" }
  },
  { 
    infinitive: "speak", past: "spoke", participle: "spoken", spanish: "hablar",
    pronunciation: { infinitive: "spik", past: "spouk", participle: "spóuken" }
  },
  { 
    infinitive: "take", past: "took", participle: "taken", spanish: "tomar",
    pronunciation: { infinitive: "teik", past: "tuk", participle: "téiken" }
  },
  { 
    infinitive: "tell", past: "told", participle: "told", spanish: "decir/contar",
    pronunciation: { infinitive: "tel", past: "tould", participle: "tould" }
  },
  { 
    infinitive: "think", past: "thought", participle: "thought", spanish: "pensar",
    pronunciation: { infinitive: "zink", past: "zot", participle: "zot" }
  },
  { 
    infinitive: "write", past: "wrote", participle: "written", spanish: "escribir",
    pronunciation: { infinitive: "rait", past: "rout", participle: "ríten" }
  }
];

type PracticeMode = 'infinitive-to-past' | 'past-to-infinitive' | 'infinitive-to-participle' | 'participle-to-infinitive';

const IrregularVerbsPractice: React.FC = () => {
  const [allVerbs] = useState<IrregularVerb[]>(irregularVerbs);
  const [currentVerb, setCurrentVerb] = useState<IrregularVerb | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('infinitive-to-past');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [hintLevel, setHintLevel] = useState(0);

  // Inicializar con todos los verbos irregulares
  useEffect(() => {
    pickRandomVerb(irregularVerbs);
  }, []);

  const pickRandomVerb = (verbs: IrregularVerb[] = allVerbs) => {
    if (verbs.length === 0) return;
    const randomIndex = Math.floor(Math.random() * verbs.length);
    setCurrentVerb(verbs[randomIndex]);
    setUserAnswer('');
    setIsSubmitted(false);
    setHintLevel(0);
  };

  const handleSubmit = () => {
    if (!currentVerb || !userAnswer.trim()) return;

    let correct = false;
    const answer = userAnswer.toLowerCase().trim();

    switch (practiceMode) {
      case 'infinitive-to-past':
        // Manejar respuestas que pueden tener múltiples formas como "was/were"
        correct = currentVerb.past.toLowerCase().split('/').some(part => 
          part.trim() === answer
        );
        break;
      case 'past-to-infinitive':
        correct = answer === currentVerb.infinitive.toLowerCase();
        break;
      case 'infinitive-to-participle':
        // Manejar respuestas que pueden tener múltiples formas como "got/gotten"
        correct = currentVerb.participle.toLowerCase().split('/').some(part => 
          part.trim() === answer
        );
        break;
      case 'participle-to-infinitive':
        correct = answer === currentVerb.infinitive.toLowerCase();
        break;
    }

    setIsCorrect(correct);
    setIsSubmitted(true);
    setScore(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const handleNextVerb = () => {
    pickRandomVerb();
  };

  const changePracticeMode = (mode: PracticeMode) => {
    setPracticeMode(mode);
    setUserAnswer('');
    setIsSubmitted(false);
    setHintLevel(0);
  };

  const resetPractice = () => {
    setScore({ correct: 0, total: 0 });
    pickRandomVerb();
  };

  const showHint = () => {
    if (!currentVerb) return;

    let answerToHint = '';
    switch (practiceMode) {
      case 'infinitive-to-past':
        answerToHint = currentVerb.past.split('/')[0];
        break;
      case 'past-to-infinitive':
        answerToHint = currentVerb.infinitive;
        break;
      case 'infinitive-to-participle':
        answerToHint = currentVerb.participle.split('/')[0];
        break;
      case 'participle-to-infinitive':
        answerToHint = currentVerb.infinitive;
        break;
    }

    const newHintLevel = Math.min(hintLevel + 1, Math.ceil(answerToHint.length / 2));
    setHintLevel(newHintLevel);
  };

  const getHint = () => {
    if (!currentVerb || hintLevel === 0) return '';

    let answerToHint = '';
    switch (practiceMode) {
      case 'infinitive-to-past':
        answerToHint = currentVerb.past.split('/')[0];
        break;
      case 'past-to-infinitive':
        answerToHint = currentVerb.infinitive;
        break;
      case 'infinitive-to-participle':
        answerToHint = currentVerb.participle.split('/')[0];
        break;
      case 'participle-to-infinitive':
        answerToHint = currentVerb.infinitive;
        break;
    }

    return answerToHint.substring(0, hintLevel) + '...';
  };

  if (!currentVerb) {
    return <div>Loading...</div>;
  }

  let questionWord = '';
  let correctAnswer = '';
  let pronunciation = '';

  switch (practiceMode) {
    case 'infinitive-to-past':
      questionWord = currentVerb.infinitive;
      correctAnswer = currentVerb.past;
      pronunciation = currentVerb.pronunciation.past;
      break;
    case 'past-to-infinitive':
      questionWord = currentVerb.past;
      correctAnswer = currentVerb.infinitive;
      pronunciation = currentVerb.pronunciation.infinitive;
      break;
    case 'infinitive-to-participle':
      questionWord = currentVerb.infinitive;
      correctAnswer = currentVerb.participle;
      pronunciation = currentVerb.pronunciation.participle;
      break;
    case 'participle-to-infinitive':
      questionWord = currentVerb.participle;
      correctAnswer = currentVerb.infinitive;
      pronunciation = currentVerb.pronunciation.infinitive;
      break;
  }

  const getModeDescription = () => {
    switch (practiceMode) {
      case 'infinitive-to-past':
        return 'Infinitive → Past Simple';
      case 'past-to-infinitive':
        return 'Past Simple → Infinitive';
      case 'infinitive-to-participle':
        return 'Infinitive → Past Participle';
      case 'participle-to-infinitive':
        return 'Past Participle → Infinitive';
    }
  };

  const getPromptText = () => {
    switch (practiceMode) {
      case 'infinitive-to-past':
        return `What is the past simple form of "${questionWord}"?`;
      case 'past-to-infinitive':
        return `What is the infinitive form of "${questionWord}"?`;
      case 'infinitive-to-participle':
        return `What is the past participle form of "${questionWord}"?`;
      case 'participle-to-infinitive':
        return `What is the infinitive form of "${questionWord}"?`;
    }
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Irregular Verbs Practice</h2>
        <div className="text-sm text-gray-600">
          {getModeDescription()}
        </div>
      </div>

      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Practice Mode:</h3>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant={practiceMode === 'infinitive-to-past' ? "accent" : "outline"}
            size="sm"
            onClick={() => changePracticeMode('infinitive-to-past')}
            className="text-sm"
          >
            Infinitive → Past
          </Button>
          <Button
            variant={practiceMode === 'past-to-infinitive' ? "accent" : "outline"}
            size="sm"
            onClick={() => changePracticeMode('past-to-infinitive')}
            className="text-sm"
          >
            Past → Infinitive
          </Button>
          <Button
            variant={practiceMode === 'infinitive-to-participle' ? "accent" : "outline"}
            size="sm"
            onClick={() => changePracticeMode('infinitive-to-participle')}
            className="text-sm"
          >
            Infinitive → Participle
          </Button>
          <Button
            variant={practiceMode === 'participle-to-infinitive' ? "accent" : "outline"}
            size="sm"
            onClick={() => changePracticeMode('participle-to-infinitive')}
            className="text-sm"
          >
            Participle → Infinitive
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-sm text-gray-500 mb-1">
          {currentVerb.spanish && `Spanish: ${currentVerb.spanish}`}
        </div>
        <div className="text-lg font-medium text-center p-4 bg-gray-50 rounded-lg mb-4">
          {questionWord}
          <button
            onClick={() => {
              const utterance = new SpeechSynthesisUtterance(questionWord.split('/')[0]);
              utterance.lang = 'en-US';
              window.speechSynthesis.speak(utterance);
            }}
            className="ml-2 text-primary hover:text-primary-dark"
            aria-label="Listen to pronunciation"
          >
            🔊
          </button>
        </div>
        <div className="mb-2">
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-1">
            {getPromptText()}
          </label>
          <input
            id="answer"
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer here..."
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
                    const utterance = new SpeechSynthesisUtterance(correctAnswer.split('/')[0]);
                    utterance.lang = 'en-US';
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
              Pronunciation: /{pronunciation}/
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
          <Button onClick={handleNextVerb} variant="accent">
            Next Verb
          </Button>
        )}
      </div>
    </Card>
  );
};

export default IrregularVerbsPractice; 