import { VerbTense } from '../types';

export const verbTenses: VerbTense[] = [
  {
    id: 'present-simple',
    name: 'Present Simple',
    description: 'Used for habits, routines, facts and general truths',
    spanishDescription: 'Rutinas, hechos generales, verdades permanentes',
    examples: [
      {
        affirmative: 'I go to the gym every morning',
        negative: 'I don\'t go to the gym on weekends',
        interrogative: 'Do you go to the gym regularly?',
        pronunciation: 'Ai gou tu da yim evri morning'
      },
      {
        affirmative: 'She works in a hospital',
        negative: 'She doesn\'t work on Sundays',
        interrogative: 'Does she work night shifts?',
        pronunciation: 'Shi works in a jóspital'
      }
    ],
    formula: {
      affirmative: 'Subject + Verb + Complement',
      negative: 'Subject + do/does + not + Verb + Complement',
      interrogative: 'Do/Does + Subject + Verb + Complement?'
    }
  },
  {
    id: 'present-continuous',
    name: 'Present Continuous',
    description: 'Used for actions happening now or temporary situations',
    spanishDescription: 'Algo que está pasando ahora o en un periodo temporal',
    examples: [
      {
        affirmative: 'I am going to the gym right now',
        negative: 'I am not going to the gym today',
        interrogative: 'Are you going to the gym now?',
        pronunciation: 'Ai am going tu da yim rait nau'
      },
      {
        affirmative: 'They are studying English this month',
        negative: 'They aren\'t studying French',
        interrogative: 'Are they studying hard?',
        pronunciation: 'Dei ar stádiing Ínglish dis manz'
      }
    ],
    formula: {
      affirmative: 'Subject + am/is/are + Verb-ing + Complement',
      negative: 'Subject + am/is/are + not + Verb-ing + Complement',
      interrogative: 'Am/Is/Are + Subject + Verb-ing + Complement?'
    }
  },
  {
    id: 'present-perfect',
    name: 'Present Perfect',
    description: 'Used for past actions with connection to the present or experiences up to now',
    spanishDescription: 'Acción pasada que tiene que ver con el presente o experiencias hasta ahora',
    examples: [
      {
        affirmative: 'I have gone to the gym today',
        negative: 'I haven\'t gone to the gym this week',
        interrogative: 'Have you gone to the gym recently?',
        pronunciation: 'Ai jav gon tu da yim tudéi'
      },
      {
        affirmative: 'She has lived in London for 3 years',
        negative: 'She hasn\'t visited Paris yet',
        interrogative: 'Has she traveled abroad?',
        pronunciation: 'Shi jas livd in Lóndon for zri yirs'
      }
    ],
    formula: {
      affirmative: 'Subject + have/has + Verb(participle) + Complement',
      negative: 'Subject + have/has + not + Verb(participle) + Complement',
      interrogative: 'Have/Has + Subject + Verb(participle) + Complement?'
    }
  },
  {
    id: 'past-simple',
    name: 'Past Simple',
    description: 'Used for completed actions in the past',
    spanishDescription: 'Acciones completadas en el pasado en un tiempo definido',
    examples: [
      {
        affirmative: 'I went to the gym yesterday',
        negative: 'I didn\'t go to the gym last week',
        interrogative: 'Did you go to the gym last weekend?',
        pronunciation: 'Ai went tu da yim yésterdei'
      },
      {
        affirmative: 'She visited Paris in 2019',
        negative: 'She didn\'t enjoy the weather there',
        interrogative: 'Did she take many photos?',
        pronunciation: 'Shi vísited Páris in tu záusand náintin'
      }
    ],
    formula: {
      affirmative: 'Subject + Verb(past) + Complement',
      negative: 'Subject + did + not + Verb + Complement',
      interrogative: 'Did + Subject + Verb + Complement?'
    }
  },
  {
    id: 'past-continuous',
    name: 'Past Continuous',
    description: 'Used for actions in progress at a specific time in the past',
    spanishDescription: 'Algo que estaba en curso en el pasado',
    examples: [
      {
        affirmative: 'I was going to the gym at 6pm',
        negative: 'I wasn\'t studying at midnight',
        interrogative: 'Were you sleeping when I called?',
        pronunciation: 'Ai was góing tu da yim at siks pí ém'
      },
      {
        affirmative: 'They were watching TV when I arrived',
        negative: 'She wasn\'t cooking dinner at that time',
        interrogative: 'Was it raining when you left?',
        pronunciation: 'Déi wer wóching tí ví wen ai aráivd'
      }
    ],
    formula: {
      affirmative: 'Subject + was/were + Verb-ing + Complement',
      negative: 'Subject + was/were + not + Verb-ing + Complement',
      interrogative: 'Was/Were + Subject + Verb-ing + Complement?'
    }
  },
  {
    id: 'past-perfect',
    name: 'Past Perfect',
    description: 'Used for actions completed before another past action or time',
    spanishDescription: 'Acción completada antes de otra acción en el pasado',
    examples: [
      {
        affirmative: 'I had finished my homework before dinner',
        negative: 'I hadn\'t seen that movie before yesterday',
        interrogative: 'Had you ever visited London before moving there?',
        pronunciation: 'Ai jad fínishd mai jómwork bifór díner'
      },
      {
        affirmative: 'She had studied English before moving to the USA',
        negative: 'He hadn\'t learned to drive before the accident',
        interrogative: 'Had they met before the party?',
        pronunciation: 'Shi jad stádid Ínglish bifór múving tu da yú es éi'
      }
    ],
    formula: {
      affirmative: 'Subject + had + Verb(participle) + Complement',
      negative: 'Subject + had + not + Verb(participle) + Complement',
      interrogative: 'Had + Subject + Verb(participle) + Complement?'
    }
  },
  {
    id: 'future-simple',
    name: 'Future Simple',
    description: 'Used for plans, predictions or spontaneous decisions',
    spanishDescription: 'Planes, promesas, decisiones o predicciones futuras',
    examples: [
      {
        affirmative: 'I will go to the gym tomorrow',
        negative: 'I will not go to the cinema this weekend',
        interrogative: 'Will you join us for dinner?',
        pronunciation: 'Ai wil gou tu da yim tumórou'
      },
      {
        affirmative: 'They will arrive by 8pm',
        negative: 'She won\'t be available next week',
        interrogative: 'Will the meeting start on time?',
        pronunciation: 'Déi wil aráiv bai éit pí ém'
      }
    ],
    formula: {
      affirmative: 'Subject + will + Verb + Complement',
      negative: 'Subject + will + not + Verb + Complement',
      interrogative: 'Will + Subject + Verb + Complement?'
    }
  },
  {
    id: 'future-continuous',
    name: 'Future Continuous',
    description: 'Used for actions that will be in progress at a specific time in the future',
    spanishDescription: 'Algo que estará en progreso en un momento futuro',
    examples: [
      {
        affirmative: 'I will be working tomorrow at 9am',
        negative: 'I won\'t be sleeping at midnight',
        interrogative: 'Will you be traveling next month?',
        pronunciation: 'Ai wil bi wórking tumórou at náin éi ém'
      },
      {
        affirmative: 'They will be studying when you call',
        negative: 'She won\'t be using her computer then',
        interrogative: 'Will he be waiting for us?',
        pronunciation: 'Déi wil bi stádiing wen yu kol'
      }
    ],
    formula: {
      affirmative: 'Subject + will be + Verb-ing + Complement',
      negative: 'Subject + will not be + Verb-ing + Complement',
      interrogative: 'Will + Subject + be + Verb-ing + Complement?'
    }
  },
  {
    id: 'future-perfect',
    name: 'Future Perfect',
    description: 'Used for actions that will be completed before a specific time in the future',
    spanishDescription: 'Acción que estará completada antes de un momento futuro',
    examples: [
      {
        affirmative: 'I will have finished the project by next week',
        negative: 'I won\'t have completed the course by June',
        interrogative: 'Will you have graduated by then?',
        pronunciation: 'Ai wil jav fínishd da próyect bai nekst wik'
      },
      {
        affirmative: 'They will have moved to their new house by Christmas',
        negative: 'She won\'t have learned to drive by summer',
        interrogative: 'Will he have arrived by dinner time?',
        pronunciation: 'Déi wil jav múvd tu der niu jaus bai Krísmas'
      }
    ],
    formula: {
      affirmative: 'Subject + will have + Verb(participle) + Complement',
      negative: 'Subject + will not have + Verb(participle) + Complement',
      interrogative: 'Will + Subject + have + Verb(participle) + Complement?'
    }
  }
];