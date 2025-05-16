import { DivideIcon as LucideIcon } from 'lucide-react';

export interface VerbTense {
  id: string;
  name: string;
  description: string;
  spanishDescription: string;
  examples: {
    affirmative: string;
    negative: string;
    interrogative: string;
    pronunciation?: string;
  }[];
  formula: {
    affirmative: string;
    negative: string;
    interrogative: string;
  };
}

export interface IrregularVerb {
  infinitive: string;
  past: string;
  participle: string;
  pronunciation: {
    infinitive: string;
    past: string;
    participle: string;
  };
}

export interface VocabularyItem {
  english: string;
  spanish: string;
  pronunciation: string;
  example?: string;
  category: string;
}

export interface VocabularyCategory {
  id: string;
  name: string;
  icon: string;
  items: VocabularyItem[];
}

export interface PersonalVocabularyItem extends VocabularyItem {
  id: string;
  dateAdded: string;
  notes?: string;
  mastered: boolean;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'reorder' | 'true-false';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  category: string;
}

export interface UserProgress {
  completedLessons: string[];
  masteredVocabulary: string[];
  quizScores: Record<string, number>;
  lastActivity: string;
}

export interface Situation {
  id: string;
  icon: string;
  title: string;
  description: string;
  phrases: {
    english: string;
    spanish: string;
    pronunciation: string;
    context?: string;
  }[];
  dialogues: {
    title: string;
    exchanges: {
      speaker: 'A' | 'B';
      english: string;
      spanish: string;
      pronunciation: string;
    }[];
  }[];
  exercises: QuizQuestion[];
}