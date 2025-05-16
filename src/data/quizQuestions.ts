import { QuizQuestion } from '../types';

export const quizQuestions: QuizQuestion[] = [
  // Present Simple Questions (10)
  {
    id: 'ps1',
    type: 'multiple-choice',
    question: 'Choose the correct affirmative sentence in Present Simple:',
    options: [
      'She go to work by bus.',
      'She goes to work by bus.',
      'She going to work by bus.',
      'She is go to work by bus.'
    ],
    correctAnswer: 'She goes to work by bus.',
    explanation: 'In Present Simple, we add "s" to the verb with third person singular subjects (he, she, it).',
    category: 'present-simple'
  },
  {
    id: 'ps2',
    type: 'multiple-choice',
    question: 'Select the correct negative form:',
    options: [
      'They not work on Sundays.',
      'They don\'t works on Sundays.',
      'They doesn\'t work on Sundays.',
      'They don\'t work on Sundays.'
    ],
    correctAnswer: 'They don\'t work on Sundays.',
    explanation: 'For negative sentences in Present Simple, we use "don\'t" (do not) with I/you/we/they and "doesn\'t" (does not) with he/she/it.',
    category: 'present-simple'
  },
  {
    id: 'ps3',
    type: 'fill-blank',
    question: 'Complete with the correct form: "He _____ (play) tennis every weekend."',
    correctAnswer: 'plays',
    explanation: 'With "he/she/it" we add -s to the base form of the verb in Present Simple.',
    category: 'present-simple'
  },
  {
    id: 'ps4',
    type: 'multiple-choice',
    question: 'Which sentence is correct?',
    options: [
      'Does they live in Madrid?',
      'Do they lives in Madrid?',
      'Do they live in Madrid?',
      'Are they live in Madrid?'
    ],
    correctAnswer: 'Do they live in Madrid?',
    explanation: 'For questions in Present Simple, we use "do" with I/you/we/they and "does" with he/she/it.',
    category: 'present-simple'
  },
  {
    id: 'ps5',
    type: 'true-false',
    question: 'This sentence is correct: "She don\'t like coffee."',
    correctAnswer: 'false',
    explanation: 'With "she" we must use "doesn\'t". The correct form is "She doesn\'t like coffee."',
    category: 'present-simple'
  },
  {
    id: 'ps6',
    type: 'multiple-choice',
    question: 'Choose the correct form: "_____ your brother speak English?"',
    options: [
      'Do',
      'Does',
      'Is',
      'Are'
    ],
    correctAnswer: 'Does',
    explanation: 'With "he/she/it" we use "does" to form questions in Present Simple.',
    category: 'present-simple'
  },
  {
    id: 'ps7',
    type: 'fill-blank',
    question: 'Complete: "My parents _____ (work) in a hospital."',
    correctAnswer: 'work',
    explanation: 'With plural subjects (parents), we use the base form of the verb without -s.',
    category: 'present-simple'
  },
  {
    id: 'ps8',
    type: 'multiple-choice',
    question: 'Select the correct sentence:',
    options: [
      'I doesn\'t understand.',
      'I don\'t understands.',
      'I don\'t understand.',
      'I not understand.'
    ],
    correctAnswer: 'I don\'t understand.',
    explanation: 'With "I" we use "don\'t" + base form of the verb.',
    category: 'present-simple'
  },
  {
    id: 'ps9',
    type: 'true-false',
    question: 'This sentence is correct: "The sun rises in the east."',
    correctAnswer: 'true',
    explanation: 'This is correct. We use Present Simple for general truths and facts.',
    category: 'present-simple'
  },
  {
    id: 'ps10',
    type: 'multiple-choice',
    question: 'Which sentence expresses a habit?',
    options: [
      'I am drinking coffee now.',
      'I drink coffee every morning.',
      'I have drunk coffee.',
      'I was drinking coffee.'
    ],
    correctAnswer: 'I drink coffee every morning.',
    explanation: 'Present Simple is used for habits and routines.',
    category: 'present-simple'
  },

  {
    id: 'ps11',
    type: 'multiple-choice',
    question: 'Choose the correct Present Simple negative:',
    options: [
      'She not drink coffee.',
      'She doesn\'t drinks coffee.',
      'She doesn\'t drink coffee.',
      'She don\'t drink coffee.'
    ],
    correctAnswer: 'She doesn\'t drink coffee.',
    explanation: 'Para negaciones en Present Simple con he/she/it usamos "doesn\'t + verbo base".',
    category: 'present-simple'
  },
  {
    id: 'ps12',
    type: 'fill-blank',
    question: 'Complete with Present Simple: "My sister _____ (teach) English every day."',
    correctAnswer: 'teaches',
    explanation: 'Con he/she/it agregamos -s/-es al verbo en Present Simple.',
    category: 'present-simple'
  },
  {
    id: 'ps13',
    type: 'multiple-choice',
    question: 'Which sentence expresses a routine?',
    options: [
      'I am eating breakfast now.',
      'I eat breakfast at 8 AM every day.',
      'I eating breakfast every day.',
      'I does eat breakfast every day.'
    ],
    correctAnswer: 'I eat breakfast at 8 AM every day.',
    explanation: 'Present Simple se usa para rutinas y hábitos.',
    category: 'present-simple'
  },
  {
    id: 'ps14',
    type: 'true-false',
    question: 'This sentence is correct: "She don\'t like pizza."',
    correctAnswer: 'false',
    explanation: 'Incorrecto. Con "she" debemos usar "doesn\'t like".',
    category: 'present-simple'
  },
  {
    id: 'ps15',
    type: 'multiple-choice',
    question: 'Select the correct habitual action:',
    options: [
      'He is playing tennis right now.',
      'He plays tennis every weekend.',
      'He playing tennis always.',
      'He do plays tennis.'
    ],
    correctAnswer: 'He plays tennis every weekend.',
    explanation: 'Present Simple se usa para acciones habituales o rutinas.',
    category: 'present-simple'
  },

  // Present Continuous Questions (10)
  {
    id: 'pc1',
    type: 'multiple-choice',
    question: 'Choose the correct Present Continuous sentence:',
    options: [
      'They sleeping now.',
      'They are sleep now.',
      'They are sleeping now.',
      'They sleeps now.'
    ],
    correctAnswer: 'They are sleeping now.',
    explanation: 'Present Continuous uses "am/is/are + verb-ing".',
    category: 'present-continuous'
  },
  {
    id: 'pc2',
    type: 'fill-blank',
    question: 'Complete: "She _____ (study) for her exam right now."',
    correctAnswer: 'is studying',
    explanation: 'With "she" we use "is + verb-ing" in Present Continuous.',
    category: 'present-continuous'
  },
  {
    id: 'pc3',
    type: 'multiple-choice',
    question: 'Select the correct negative form:',
    options: [
      'He not working today.',
      'He isn\'t working today.',
      'He don\'t working today.',
      'He isn\'t work today.'
    ],
    correctAnswer: 'He isn\'t working today.',
    explanation: 'For negative in Present Continuous, use "am not/isn\'t/aren\'t + verb-ing".',
    category: 'present-continuous'
  },
  {
    id: 'pc4',
    type: 'true-false',
    question: 'This sentence is correct: "Are they watching TV?"',
    correctAnswer: 'true',
    explanation: 'This is correct. For questions in Present Continuous, we put am/is/are before the subject.',
    category: 'present-continuous'
  },
  {
    id: 'pc5',
    type: 'multiple-choice',
    question: 'What\'s the correct question form?',
    options: [
      'Is she cooking dinner?',
      'Does she cooking dinner?',
      'Is she cook dinner?',
      'Are she cooking dinner?'
    ],
    correctAnswer: 'Is she cooking dinner?',
    explanation: 'Questions in Present Continuous start with am/is/are.',
    category: 'present-continuous'
  },
  {
    id: 'pc6',
    type: 'fill-blank',
    question: 'Complete: "We _____ (have) lunch at the moment."',
    correctAnswer: 'are having',
    explanation: 'With "we" use "are + verb-ing" in Present Continuous.',
    category: 'present-continuous'
  },
  {
    id: 'pc7',
    type: 'multiple-choice',
    question: 'Choose the correct sentence:',
    options: [
      'I\'m think about it now.',
      'I thinking about it now.',
      'I\'m thinking about it now.',
      'I am think about it now.'
    ],
    correctAnswer: 'I\'m thinking about it now.',
    explanation: 'Present Continuous with "I" uses "am + verb-ing".',
    category: 'present-continuous'
  },
  {
    id: 'pc8',
    type: 'true-false',
    question: 'This sentence is correct: "They\'re not listening to music."',
    correctAnswer: 'true',
    explanation: 'This is correct. "They\'re not" is the contraction of "They are not".',
    category: 'present-continuous'
  },
  {
    id: 'pc9',
    type: 'multiple-choice',
    question: 'Which sentence shows an action happening now?',
    options: [
      'I usually walk to work.',
      'I walked to work yesterday.',
      'I\'m walking to work right now.',
      'I will walk to work tomorrow.'
    ],
    correctAnswer: 'I\'m walking to work right now.',
    explanation: 'Present Continuous is used for actions happening at the moment of speaking.',
    category: 'present-continuous'
  },
  {
    id: 'pc10',
    type: 'fill-blank',
    question: 'Complete: "_____ you _____ (wait) for someone?"',
    correctAnswer: ['Are', 'waiting'],
    explanation: 'Questions in Present Continuous use "Am/Is/Are + subject + verb-ing".',
    category: 'present-continuous'
  },

  // Present Continuous Questions (después de pc10)
  {
    id: 'pc11',
    type: 'multiple-choice',
    question: 'What\'s happening right now?',
    options: [
      'They work in the garden.',
      'They are working in the garden.',
      'They working in the garden.',
      'They do working in the garden.'
    ],
    correctAnswer: 'They are working in the garden.',
    explanation: 'Present Continuous (are + verbo-ing) se usa para acciones que están ocurriendo ahora.',
    category: 'present-continuous'
  },
  {
    id: 'pc12',
    type: 'multiple-choice',
    question: 'Look at the picture! The boy...',
    options: [
      'cry now.',
      'is crying now.',
      'crying now.',
      'does crying now.'
    ],
    correctAnswer: 'is crying now.',
    explanation: 'Para describir una acción en progreso usamos Present Continuous (is + verbo-ing).',
    category: 'present-continuous'
  },
  {
    id: 'pc13',
    type: 'fill-blank',
    question: 'Right now, we _____ (watch) a movie.',
    correctAnswer: 'are watching',
    explanation: 'Para acciones en progreso usamos are + verbo-ing.',
    category: 'present-continuous'
  },
  {
    id: 'pc14',
    type: 'multiple-choice',
    question: 'Choose the correct question form for now:',
    options: [
      'What do you do?',
      'What are you doing?',
      'What you are doing?',
      'What doing you are?'
    ],
    correctAnswer: 'What are you doing?',
    explanation: 'Para preguntar qué está pasando ahora usamos Present Continuous.',
    category: 'present-continuous'
  },
  {
    id: 'pc15',
    type: 'true-false',
    question: 'This sentence is correct for an action happening now: "They working on the project."',
    correctAnswer: 'false',
    explanation: 'Incorrecto. Falta el verbo "are". La forma correcta es "They are working on the project."',
    category: 'present-continuous'
  },

  // Present Perfect Questions (10)
  {
    id: 'pp1',
    type: 'multiple-choice',
    question: 'Choose the correct Present Perfect form:',
    options: [
      'I have live here for 5 years.',
      'I have lived here for 5 years.',
      'I has lived here for 5 years.',
      'I living here for 5 years.'
    ],
    correctAnswer: 'I have lived here for 5 years.',
    explanation: 'Present Perfect uses "have/has + past participle".',
    category: 'present-perfect'
  },
  {
    id: 'pp2',
    type: 'fill-blank',
    question: 'Complete: "She _____ (never/be) to Paris."',
    correctAnswer: 'has never been',
    explanation: 'With "she" we use "has + never + past participle".',
    category: 'present-perfect'
  },
  {
    id: 'pp3',
    type: 'multiple-choice',
    question: 'Select the correct negative form:',
    options: [
      'They haven\'t seen the movie.',
      'They hasn\'t seen the movie.',
      'They don\'t have seen the movie.',
      'They not have seen the movie.'
    ],
    correctAnswer: 'They haven\'t seen the movie.',
    explanation: 'For negative in Present Perfect, use "haven\'t/hasn\'t + past participle".',
    category: 'present-perfect'
  },
  {
    id: 'pp4',
    type: 'true-false',
    question: 'This sentence is correct: "Have you ever visited London?"',
    correctAnswer: 'true',
    explanation: 'This is correct. Questions in Present Perfect start with "Have/Has".',
    category: 'present-perfect'
  },
  {
    id: 'pp5',
    type: 'multiple-choice',
    question: 'Choose the correct form:',
    options: [
      'He has went to the store.',
      'He have gone to the store.',
      'He has gone to the store.',
      'He is gone to the store.'
    ],
    correctAnswer: 'He has gone to the store.',
    explanation: 'With "he" we use "has + past participle".',
    category: 'present-perfect'
  },
  {
    id: 'pp6',
    type: 'fill-blank',
    question: 'Complete: "We _____ (just/arrive)."',
    correctAnswer: 'have just arrived',
    explanation: 'Use "have + just + past participle" for recent actions.',
    category: 'present-perfect'
  },
  {
    id: 'pp7',
    type: 'multiple-choice',
    question: 'Which sentence is correct?',
    options: [
      'I\'ve never see that movie.',
      'I\'ve never saw that movie.',
      'I\'ve never seen that movie.',
      'I never have seen that movie.'
    ],
    correctAnswer: 'I\'ve never seen that movie.',
    explanation: 'Present Perfect with "never" uses "have/has + never + past participle".',
    category: 'present-perfect'
  },
  {
    id: 'pp8',
    type: 'true-false',
    question: 'This sentence is correct: "She has lived here since 2010."',
    correctAnswer: 'true',
    explanation: 'We use Present Perfect with "since" for a point in time when something started.',
    category: 'present-perfect'
  },
  {
    id: 'pp9',
    type: 'multiple-choice',
    question: 'Choose the correct question form:',
    options: [
      'Has they finished the project?',
      'Have they finished the project?',
      'Did they have finished the project?',
      'Do they have finished the project?'
    ],
    correctAnswer: 'Have they finished the project?',
    explanation: 'Questions with "they" use "Have + subject + past participle".',
    category: 'present-perfect'
  },
  {
    id: 'pp10',
    type: 'fill-blank',
    question: 'Complete: "How long _____ you _____ (know) each other?"',
    correctAnswer: ['have', 'known'],
    explanation: 'Questions about duration use "How long + have/has + subject + past participle".',
    category: 'present-perfect'
  },

  // Present Perfect Questions (10 nuevas después de pp10)
  {
    id: 'pp11',
    type: 'multiple-choice',
    question: 'Choose the correct Present Perfect form:',
    options: [
      'I never see that movie.',
      'I have never saw that movie.',
      'I have never seen that movie.',
      'I never have see that movie.'
    ],
    correctAnswer: 'I have never seen that movie.',
    explanation: 'Present Perfect con never usa "have/has + never + participio pasado".',
    category: 'present-perfect'
  },
  {
    id: 'pp12',
    type: 'fill-blank',
    question: 'Complete: "She _____ (live) here since 2020."',
    correctAnswer: 'has lived',
    explanation: 'Con "since" y un punto específico en el pasado, usamos Present Perfect.',
    category: 'present-perfect'
  },
  {
    id: 'pp13',
    type: 'multiple-choice',
    question: 'Select the correct form:',
    options: [
      'Have you ever visit Paris?',
      'Have you ever visited Paris?',
      'Has you ever visited Paris?',
      'Have you ever visiting Paris?'
    ],
    correctAnswer: 'Have you ever visited Paris?',
    explanation: 'Las preguntas con "ever" usan "Have/Has + sujeto + ever + participio pasado".',
    category: 'present-perfect'
  },
  {
    id: 'pp14',
    type: 'true-false',
    question: 'This sentence is correct: "I\'ve known him for 10 years."',
    correctAnswer: 'true',
    explanation: 'Present Perfect con "for" expresa duración hasta el presente.',
    category: 'present-perfect'
  },
  {
    id: 'pp15',
    type: 'multiple-choice',
    question: 'Choose the correct negative form:',
    options: [
      'They not have seen it.',
      'They haven\'t saw it.',
      'They haven\'t seen it.',
      'They haven\'t seeing it.'
    ],
    correctAnswer: 'They haven\'t seen it.',
    explanation: 'La negación usa "haven\'t/hasn\'t + participio pasado".',
    category: 'present-perfect'
  },
  {
    id: 'pp16',
    type: 'fill-blank',
    question: 'Complete: "He _____ (just/arrive) home."',
    correctAnswer: 'has just arrived',
    explanation: 'Con "just" usamos "has/have + just + participio pasado" para acciones recientes.',
    category: 'present-perfect'
  },
  {
    id: 'pp17',
    type: 'multiple-choice',
    question: 'Which sentence is correct?',
    options: [
      'I\'ve been to London last year.',
      'I\'ve been to London.',
      'I\'ve gone to London yesterday.',
      'I\'ve being to London.'
    ],
    correctAnswer: 'I\'ve been to London.',
    explanation: 'Present Perfect NO se usa con expresiones de tiempo pasado específico.',
    category: 'present-perfect'
  },
  {
    id: 'pp18',
    type: 'fill-blank',
    question: 'Complete: "_____ you ever _____ (eat) sushi?"',
    correctAnswer: ['Have', 'eaten'],
    explanation: 'Preguntas con "ever" usan "Have/Has + sujeto + ever + participio pasado".',
    category: 'present-perfect'
  },
  {
    id: 'pp19',
    type: 'multiple-choice',
    question: 'Choose the correct form:',
    options: [
      'She has finish her homework.',
      'She have finished her homework.',
      'She has finished her homework.',
      'She has finishing her homework.'
    ],
    correctAnswer: 'She has finished her homework.',
    explanation: 'Con "she" usamos "has + participio pasado".',
    category: 'present-perfect'
  },
  {
    id: 'pp20',
    type: 'true-false',
    question: 'This sentence is correct: "They\'ve lived here since five years."',
    correctAnswer: 'false',
    explanation: 'Con períodos de tiempo usamos "for", no "since". Debería ser "for five years".',
    category: 'present-perfect'
  },

  // Past Simple Questions (10)
  {
    id: 'pts1',
    type: 'multiple-choice',
    question: 'Choose the correct Past Simple form:',
    options: [
      'I goed to the park yesterday.',
      'I gone to the park yesterday.',
      'I went to the park yesterday.',
      'I have gone to the park yesterday.'
    ],
    correctAnswer: 'I went to the park yesterday.',
    explanation: 'Past Simple uses the past form of the verb (regular or irregular).',
    category: 'past-simple'
  },
  {
    id: 'pts2',
    type: 'fill-blank',
    question: 'Complete: "She _____ (study) English last year."',
    correctAnswer: 'studied',
    explanation: 'Regular verbs add -ed in Past Simple.',
    category: 'past-simple'
  },
  {
    id: 'pts3',
    type: 'multiple-choice',
    question: 'Select the correct negative form:',
    options: [
      'They didn\'t went to the party.',
      'They didn\'t go to the party.',
      'They don\'t went to the party.',
      'They not went to the party.'
    ],
    correctAnswer: 'They didn\'t go to the party.',
    explanation: 'Negative in Past Simple uses "didn\'t + base form".',
    category: 'past-simple'
  },
  {
    id: 'pts4',
    type: 'true-false',
    question: 'This sentence is correct: "Did you see that movie last night?"',
    correctAnswer: 'true',
    explanation: 'Questions in Past Simple start with "Did".',
    category: 'past-simple'
  },
  {
    id: 'pts5',
    type: 'multiple-choice',
    question: 'Choose the correct question form:',
    options: [
      'Did he went home?',
      'Did he go home?',
      'Does he went home?',
      'Was he go home?'
    ],
    correctAnswer: 'Did he go home?',
    explanation: 'Questions in Past Simple use "Did + subject + base form".',
    category: 'past-simple'
  },
  {
    id: 'pts6',
    type: 'fill-blank',
    question: 'Complete: "We _____ (buy) a new car last month."',
    correctAnswer: 'bought',
    explanation: '"Buy" is an irregular verb: buy - bought - bought.',
    category: 'past-simple'
  },
  {
    id: 'pts7',
    type: 'multiple-choice',
    question: 'Which sentence is correct?',
    options: [
      'I not played tennis yesterday.',
      'I didn\'t played tennis yesterday.',
      'I didn\'t play tennis yesterday.',
      'I doesn\'t play tennis yesterday.'
    ],
    correctAnswer: 'I didn\'t play tennis yesterday.',
    explanation: 'Negative form uses "didn\'t + base form of the verb".',
    category: 'past-simple'
  },
  {
    id: 'pts8',
    type: 'true-false',
    question: 'This sentence is correct: "She worked hard last week."',
    correctAnswer: 'true',
    explanation: 'Regular verbs add -ed in Past Simple.',
    category: 'past-simple'
  },
  {
    id: 'pts9',
    type: 'multiple-choice',
    question: 'Choose the correct form:',
    options: [
      'He writed a letter.',
      'He wrote a letter.',
      'He has wrote a letter.',
      'He did write a letter.'
    ],
    correctAnswer: 'He wrote a letter.',
    explanation: '"Write" is irregular: write - wrote - written.',
    category: 'past-simple'
  },
  {
    id: 'pts10',
    type: 'fill-blank',
    question: 'Complete: "_____ you _____ (eat) lunch yet?"',
    correctAnswer: ['Did', 'eat'],
    explanation: 'Questions in Past Simple use "Did + subject + base form".',
    category: 'past-simple'
  },

  // Past Simple Questions (10 nuevas después de pts10)
  {
    id: 'pts11',
    type: 'multiple-choice',
    question: 'Choose the correct Past Simple form:',
    options: [
      'She writed the letter yesterday.',
      'She wrote the letter yesterday.',
      'She has wrote the letter yesterday.',
      'She did wrote the letter yesterday.'
    ],
    correctAnswer: 'She wrote the letter yesterday.',
    explanation: 'Write es un verbo irregular: write-wrote-written.',
    category: 'past-simple'
  },
  {
    id: 'pts12',
    type: 'fill-blank',
    question: 'Complete: "Last summer, I _____ (travel) to Spain."',
    correctAnswer: 'traveled',
    explanation: 'Los verbos regulares agregan -ed en Past Simple.',
    category: 'past-simple'
  },
  {
    id: 'pts13',
    type: 'multiple-choice',
    question: 'Select the correct negative form:',
    options: [
      'I not went.',
      'I didn\'t went.',
      'I didn\'t go.',
      'I no went.'
    ],
    correctAnswer: 'I didn\'t go.',
    explanation: 'La negación en Past Simple usa "didn\'t + verbo base".',
    category: 'past-simple'
  },
  {
    id: 'pts14',
    type: 'fill-blank',
    question: 'Complete: "_____ you _____ (see) the movie last night?"',
    correctAnswer: ['Did', 'see'],
    explanation: 'Preguntas en Past Simple usan "Did + sujeto + verbo base".',
    category: 'past-simple'
  },
  {
    id: 'pts15',
    type: 'multiple-choice',
    question: 'Which is correct?',
    options: [
      'They goed to the party.',
      'They went to the party.',
      'They did went to the party.',
      'They have went to the party.'
    ],
    correctAnswer: 'They went to the party.',
    explanation: 'Go es un verbo irregular: go-went-gone.',
    category: 'past-simple'
  },
  {
    id: 'pts16',
    type: 'true-false',
    question: 'This sentence is correct: "Did you went to the store?"',
    correctAnswer: 'false',
    explanation: 'Después de "did" usamos el verbo base. Debería ser "Did you go".',
    category: 'past-simple'
  },
  {
    id: 'pts17',
    type: 'multiple-choice',
    question: 'Choose the correct form:',
    options: [
      'She didn\'t wanted to go.',
      'She not wanted to go.',
      'She didn\'t want to go.',
      'She didn\'t wants to go.'
    ],
    correctAnswer: 'She didn\'t want to go.',
    explanation: 'En negativas, después de "didn\'t" usamos el verbo base.',
    category: 'past-simple'
  },
  {
    id: 'pts18',
    type: 'fill-blank',
    question: 'Complete: "When _____ (be) the last time you saw her?"',
    correctAnswer: 'was',
    explanation: '"Be" es irregular: am/is/are - was/were.',
    category: 'past-simple'
  },
  {
    id: 'pts19',
    type: 'multiple-choice',
    question: 'Which sentence happened in the past?',
    options: [
      'I am eating dinner.',
      'I have eaten dinner.',
      'I ate dinner last night.',
      'I eat dinner.'
    ],
    correctAnswer: 'I ate dinner last night.',
    explanation: 'Past Simple se usa para acciones completadas en el pasado.',
    category: 'past-simple'
  },
  {
    id: 'pts20',
    type: 'true-false',
    question: 'This sentence is correct: "They was at home yesterday."',
    correctAnswer: 'false',
    explanation: 'Con "they" usamos "were". Debería ser "They were at home yesterday".',
    category: 'past-simple'
  },

  // Past Continuous Questions (10)
  {
    id: 'ptc1',
    type: 'multiple-choice',
    question: 'Choose the correct Past Continuous form:',
    options: [
      'I was sleep when you called.',
      'I were sleeping when you called.',
      'I was sleeping when you called.',
      'I sleeping when you called.'
    ],
    correctAnswer: 'I was sleeping when you called.',
    explanation: 'Past Continuous uses "was/were + verb-ing".',
    category: 'past-continuous'
  },
  {
    id: 'ptc2',
    type: 'fill-blank',
    question: 'Complete: "They _____ (play) football at 3pm yesterday."',
    correctAnswer: 'were playing',
    explanation: 'With "they" we use "were + verb-ing".',
    category: 'past-continuous'
  },
  {
    id: 'ptc3',
    type: 'multiple-choice',
    question: 'Select the correct negative form:',
    options: [
      'He wasn\'t studying when I arrived.',
      'He weren\'t studying when I arrived.',
      'He didn\'t studying when I arrived.',
      'He not was studying when I arrived.'
    ],
    correctAnswer: 'He wasn\'t studying when I arrived.',
    explanation: 'Negative in Past Continuous uses "wasn\'t/weren\'t + verb-ing".',
    category: 'past-continuous'
  },
  {
    id: 'ptc4',
    type: 'true-false',
    question: 'This sentence is correct: "Were you working late last night?"',
    correctAnswer: 'true',
    explanation: 'Questions in Past Continuous start with "Was/Were".',
    category: 'past-continuous'
  },
  {
    id: 'ptc5',
    type: 'multiple-choice',
    question: 'Choose the correct form:',
    options: [
      'What you were doing?',
      'What were you doing?',
      'What did you doing?',
      'What was you doing?'
    ],
    correctAnswer: 'What were you doing?',
    explanation: 'Questions in Past Continuous use "Was/Were + subject + verb-ing".',
    category: 'past-continuous'
  },
  {
    id: 'ptc6',
    type: 'fill-blank',
    question: 'Complete: "She _____ (read) a book while he _____ (cook)."',
    correctAnswer: ['was reading', 'was cooking'],
    explanation: 'Past Continuous can describe two simultaneous actions.',
    category: 'past-continuous'
  },
  {
    id: 'ptc7',
    type: 'multiple-choice',
    question: 'Which sentence shows an interrupted action?',
    options: [
      'I was watching TV when the phone rang.',
      'I watched TV when the phone rang.',
      'I have watched TV when the phone rang.',
      'I am watching TV when the phone rang.'
    ],
    correctAnswer: 'I was watching TV when the phone rang.',
    explanation: 'Past Continuous is used for actions interrupted by another action.',
    category: 'past-continuous'
  },
  {
    id: 'ptc8',
    type: 'true-false',
    question: 'This sentence is correct: "It was raining all day yesterday."',
    correctAnswer: 'true',
    explanation: 'Past Continuous is used for continuous actions in the past.',
    category: 'past-continuous'
  },
  {
    id: 'ptc9',
    type: 'multiple-choice',
    question: 'Choose the correct sentence:',
    options: [
      'We was waiting for the bus.',
      'We were waiting for the bus.',
      'We are waiting for the bus.',
      'We waiting for the bus.'
    ],
    correctAnswer: 'We were waiting for the bus.',
    explanation: 'With "we" use "were + verb-ing".',
    category: 'past-continuous'
  },
  {
    id: 'ptc10',
    type: 'fill-blank',
    question: 'Complete: "_____ it _____ (rain) when you left?"',
    correctAnswer: ['Was', 'raining'],
    explanation: 'Questions in Past Continuous use "Was/Were + subject + verb-ing".',
    category: 'past-continuous'
  },

  // Past Continuous Questions (10 nuevas después de ptc10)
  {
    id: 'ptc11',
    type: 'multiple-choice',
    question: 'What were you doing at 8 PM yesterday?',
    options: [
      'I was study.',
      'I were studying.',
      'I was studying.',
      'I studying.'
    ],
    correctAnswer: 'I was studying.',
    explanation: 'Past Continuous usa "was/were + verbo-ing".',
    category: 'past-continuous'
  },
  {
    id: 'ptc12',
    type: 'fill-blank',
    question: 'While he _____ (sleep), someone broke into the house.',
    correctAnswer: 'was sleeping',
    explanation: 'Past Continuous describe una acción en progreso en el pasado.',
    category: 'past-continuous'
  },
  {
    id: 'ptc13',
    type: 'multiple-choice',
    question: 'Choose the correct negative form:',
    options: [
      'She wasn\'t studying when I called.',
      'She weren\'t studying when I called.',
      'She didn\'t studying when I called.',
      'She not was studying when I called.'
    ],
    correctAnswer: 'She wasn\'t studying when I called.',
    explanation: 'La negación usa "wasn\'t/weren\'t + verbo-ing".',
    category: 'past-continuous'
  },
  {
    id: 'ptc14',
    type: 'true-false',
    question: 'This sentence is correct: "They were watching TV when the phone rang."',
    correctAnswer: 'true',
    explanation: 'Past Continuous (were watching) con Past Simple (rang) describe una interrupción.',
    category: 'past-continuous'
  },
  {
    id: 'ptc15',
    type: 'multiple-choice',
    question: 'Select the correct question form:',
    options: [
      'What you were doing?',
      'What was you doing?',
      'What were you doing?',
      'What did you doing?'
    ],
    correctAnswer: 'What were you doing?',
    explanation: 'Preguntas usan "Was/Were + sujeto + verbo-ing".',
    category: 'past-continuous'
  },
  {
    id: 'ptc16',
    type: 'fill-blank',
    question: 'At 3 PM yesterday, we _____ (have) lunch.',
    correctAnswer: 'were having',
    explanation: 'Para una acción en progreso en un momento específico del pasado.',
    category: 'past-continuous'
  },
  {
    id: 'ptc17',
    type: 'multiple-choice',
    question: 'Which shows two simultaneous past actions?',
    options: [
      'While I cooked, she watched TV.',
      'While I was cooking, she was watching TV.',
      'While I was cook, she was watch TV.',
      'While I cooking, she watching TV.'
    ],
    correctAnswer: 'While I was cooking, she was watching TV.',
    explanation: 'Past Continuous en ambas partes para acciones simultáneas.',
    category: 'past-continuous'
  },
  {
    id: 'ptc18',
    type: 'true-false',
    question: 'This is correct: "I were reading when she called."',
    correctAnswer: 'false',
    explanation: 'Con "I" usamos "was", no "were". Debería ser "I was reading".',
    category: 'past-continuous'
  },
  {
    id: 'ptc19',
    type: 'fill-blank',
    question: 'Complete: "_____ it _____ (rain) when you left?"',
    correctAnswer: ['Was', 'raining'],
    explanation: 'Preguntas usan "Was/Were + sujeto + verbo-ing".',
    category: 'past-continuous'
  },
  {
    id: 'ptc20',
    type: 'multiple-choice',
    question: 'Choose the correct form:',
    options: [
      'The baby slept when we arrived.',
      'The baby was sleeping when we arrived.',
      'The baby were sleeping when we arrived.',
      'The baby sleeping when we arrived.'
    ],
    correctAnswer: 'The baby was sleeping when we arrived.',
    explanation: 'Past Continuous para una acción en progreso interrumpida por otra.',
    category: 'past-continuous'
  },

  // Past Perfect Questions (10)
  {
    id: 'ptp1',
    type: 'multiple-choice',
    question: 'Choose the correct Past Perfect form:',
    options: [
      'I had went to bed before midnight.',
      'I had gone to bed before midnight.',
      'I have gone to bed before midnight.',
      'I was gone to bed before midnight.'
    ],
    correctAnswer: 'I had gone to bed before midnight.',
    explanation: 'Past Perfect uses "had + past participle".',
    category: 'past-perfect'
  },
  {
    id: 'ptp2',
    type: 'fill-blank',
    question: 'Complete: "She _____ (never/see) snow before moving to Canada."',
    correctAnswer: 'had never seen',
    explanation: 'Past Perfect with "never" uses "had + never + past participle".',
    category: 'past-perfect'
  },
  {
    id: 'ptp3',
    type: 'multiple-choice',
    question: 'Select the correct negative form:',
    options: [
      'They hadn\'t eaten when I arrived.',
      'They didn\'t had eaten when I arrived.',
      'They haven\'t eaten when I arrived.',
      'They had not eat when I arrived.'
    ],
    correctAnswer: 'They hadn\'t eaten when I arrived.',
    explanation: 'Negative in Past Perfect uses "hadn\'t + past participle".',
    category: 'past-perfect'
  },
  {
    id: 'ptp4',
    type: 'true-false',
    question: 'This sentence is correct: "Had you finished work before the meeting?"',
    correctAnswer: 'true',
    explanation: 'Questions in Past Perfect start with "Had".',
    category: 'past-perfect'
  },
  {
    id: 'ptp5',
    type: 'multiple-choice',
    question: 'Choose the correct form:',
    options: [
      'After she had finished her homework, she watched TV.',
      'After she has finished her homework, she watched TV.',
      'After she had finish her homework, she watched TV.',
      'After she was finished her homework, she watched TV.'
    ],
    correctAnswer: 'After she had finished her homework, she watched TV.',
    explanation: 'Past Perfect describes an action completed before another past action.',
    category: 'past-perfect'
  },
  {
    id: 'ptp6',
    type: 'fill-blank',
    question: 'Complete: "We _____ (already/leave) when they arrived."',
    correctAnswer: 'had already left',
    explanation: 'Past Perfect with "already" uses "had + already + past participle".',
    category: 'past-perfect'
  },
  {
    id: 'ptp7',
    type: 'multiple-choice',
    question: 'Which sentence shows the correct sequence?',
    options: [
      'When I arrived, they left.',
      'When I arrived, they had left.',
      'When I arrived, they have left.',
      'When I arrived, they were left.'
    ],
    correctAnswer: 'When I arrived, they had left.',
    explanation: 'Past Perfect shows that one action happened before another in the past.',
    category: 'past-perfect'
  },
  {
    id: 'ptp8',
    type: 'true-false',
    question: 'This sentence is correct: "I had studied English before I moved to London."',
    correctAnswer: 'true',
    explanation: 'Past Perfect is used for actions completed before another past action.',
    category: 'past-perfect'
  },
  {
    id: 'ptp9',
    type: 'multiple-choice',
    question: 'Choose the correct question form:',
    options: [
      'Had they gone before you arrived?',
      'Did they had gone before you arrived?',
      'Have they had gone before you arrived?',
      'Were they had gone before you arrived?'
    ],
    correctAnswer: 'Had they gone before you arrived?',
    explanation: 'Questions in Past Perfect start with "Had".',
    category: 'past-perfect'
  },
  {
    id: 'ptp10',
    type: 'fill-blank',
    question: 'Complete: "_____ you _____ (ever/visit) Paris before that trip?"',
    correctAnswer: ['Had', 'ever visited'],
    explanation: 'Questions with "ever" use "Had + subject + ever + past participle".',
    category: 'past-perfect'
  },

  // Past Perfect Questions (10 nuevas después de ptp10)
  {
    id: 'ptp11',
    type: 'multiple-choice',
    question: 'Choose the correct Past Perfect sentence:',
    options: [
      'When I arrived, they left.',
      'When I arrived, they had left.',
      'When I arrived, they have left.',
      'When I arrived, they were left.'
    ],
    correctAnswer: 'When I arrived, they had left.',
    explanation: 'Past Perfect (had left) describe una acción que ocurrió antes de otra acción pasada (arrived).',
    category: 'past-perfect'
  },
  {
    id: 'ptp12',
    type: 'fill-blank',
    question: 'By the time we got to the station, the train _____ (leave).',
    correctAnswer: 'had left',
    explanation: 'Past Perfect indica que una acción ocurrió antes que otra en el pasado.',
    category: 'past-perfect'
  },
  {
    id: 'ptp13',
    type: 'multiple-choice',
    question: 'Select the correct negative form:',
    options: [
      'She not had finished.',
      'She hadn\'t finished.',
      'She didn\'t had finished.',
      'She hadn\'t finish.'
    ],
    correctAnswer: 'She hadn\'t finished.',
    explanation: 'La negación usa "hadn\'t + participio pasado".',
    category: 'past-perfect'
  },
  {
    id: 'ptp14',
    type: 'true-false',
    question: 'This sentence is correct: "They had never saw such a beautiful sunset before."',
    correctAnswer: 'false',
    explanation: 'Debe usar el participio pasado. Correcto: "had never seen".',
    category: 'past-perfect'
  },
  {
    id: 'ptp15',
    type: 'multiple-choice',
    question: 'Choose the correct question form:',
    options: [
      'Had they finished before you arrived?',
      'Did they had finished before you arrived?',
      'Have they had finished before you arrived?',
      'Had they finish before you arrived?'
    ],
    correctAnswer: 'Had they finished before you arrived?',
    explanation: 'Preguntas en Past Perfect comienzan con "Had".',
    category: 'past-perfect'
  },
  {
    id: 'ptp16',
    type: 'fill-blank',
    question: 'She _____ (never/be) to Paris before that trip.',
    correctAnswer: 'had never been',
    explanation: 'Past Perfect con "never" usa "had + never + participio pasado".',
    category: 'past-perfect'
  },
  {
    id: 'ptp17',
    type: 'multiple-choice',
    question: 'Which sentence shows the correct sequence?',
    options: [
      'After she finished her work, she went home.',
      'After she had finished her work, she went home.',
      'After she have finished her work, she went home.',
      'After she was finished her work, she went home.'
    ],
    correctAnswer: 'After she had finished her work, she went home.',
    explanation: 'Past Perfect (had finished) para la acción más antigua, Past Simple (went) para la más reciente.',
    category: 'past-perfect'
  },
  {
    id: 'ptp18',
    type: 'true-false',
    question: 'This is correct: "I had studied English before I moved to London."',
    correctAnswer: 'true',
    explanation: 'Past Perfect correcto para una acción que ocurrió antes de otra en el pasado.',
    category: 'past-perfect'
  },
  {
    id: 'ptp19',
    type: 'fill-blank',
    question: 'Complete: "_____ you _____ (hear) that song before?"',
    correctAnswer: ['Had', 'heard'],
    explanation: 'Preguntas usan "Had + sujeto + participio pasado".',
    category: 'past-perfect'
  },
  {
    id: 'ptp20',
    type: 'multiple-choice',
    question: 'Choose the correct form:',
    options: [
      'He had spoke to her before the meeting.',
      'He had spoken to her before the meeting.',
      'He had speaking to her before the meeting.',
      'He had speaks to her before the meeting.'
    ],
    correctAnswer: 'He had spoken to her before the meeting.',
    explanation: 'Past Perfect requiere el participio pasado (spoken).',
    category: 'past-perfect'
  },

  // Future Simple Questions (10)
  {
    id: 'fs1',
    type: 'multiple-choice',
    question: 'Choose the correct Future Simple form:',
    options: [
      'I will goes to the party tomorrow.',
      'I will going to the party tomorrow.',
      'I will go to the party tomorrow.',
      'I go will to the party tomorrow.'
    ],
    correctAnswer: 'I will go to the party tomorrow.',
    explanation: 'Future Simple uses "will + base form of the verb".',
    category: 'future-simple'
  },
  {
    id: 'fs2',
    type: 'fill-blank',
    question: 'Complete: "She _____ (help) you tomorrow."',
    correctAnswer: 'will help',
    explanation: 'Future Simple uses "will + base form".',
    category: 'future-simple'
  },
  {
    id: 'fs3',
    type: 'multiple-choice',
    question: 'Select the correct negative form:',
    options: [
      'They will not goes.',
      'They won\'t go.',
      'They not will go.',
      'They don\'t will go.'
    ],
    correctAnswer: 'They won\'t go.',
    explanation: 'Negative in Future Simple uses "won\'t" or "will not + base form".',
    category: 'future-simple'
  },
  {
    id: 'fs4',
    type: 'true-false',
    question: 'This sentence is correct: "Will you attend the meeting tomorrow?"',
    correctAnswer: 'true',
    explanation: 'Questions in Future Simple start with "Will".',
    category: 'future-simple'
  },
  {
    id: 'fs5',
    type: 'multiple-choice',
    question: 'Choose the correct question form:',
    options: [
      'Will they coming?',
      'Will they come?',
      'Do they will come?',
      'Are they will come?'
    ],
    correctAnswer: 'Will they come?',
    explanation: 'Questions in Future Simple use "Will + subject + base form".',
    category: 'future-simple'
  },
  {
    id: 'fs6',
    type: 'fill-blank',
    question: 'Complete: "We _____ (move) to a new house next month."',
    correctAnswer: 'will move',
    explanation: 'Future Simple uses "will + base form" for future plans.',
    category: 'future-simple'
  },
  {
    id: 'fs7',
    type: 'multiple-choice',
    question: 'Which sentence is correct?',
    options: [
      'I will to see you tomorrow.',
      'I will seeing you tomorrow.',
      'I will see you tomorrow.',
      'I see will you tomorrow.'
    ],
    correctAnswer: 'I will see you tomorrow.',
    explanation: 'Future Simple uses "will + base form of the verb".',
    category: 'future-simple'
  },
  {
    id: 'fs8',
    type: 'true-false',
    question: 'This sentence is correct: "They won\'t be here next week."',
    correctAnswer: 'true',
    explanation: '"Won\'t" is the contraction of "will not".',
    category: 'future-simple'
  },
  {
    id: 'fs9',
    type: 'multiple-choice',
    question: 'Choose the correct form for a prediction:',
    options: [
      'It will rains tomorrow.',
      'It will rain tomorrow.',
      'It will raining tomorrow.',
      'It will to rain tomorrow.'
    ],
    correctAnswer: 'It will rain tomorrow.',
    explanation: 'Future Simple is used for predictions about the future.',
    category: 'future-simple'
  },
  {
    id: 'fs10',
    type: 'fill-blank',
    question: 'Complete: "_____ you _____ (help) me with this?"',
    correctAnswer: ['Will', 'help'],
    explanation: 'Questions in Future Simple use "Will + subject + base form".',
    category: 'future-simple'
  },

  // Future Simple Questions (10 nuevas después de fs10)
  {
    id: 'fs11',
    type: 'multiple-choice',
    question: 'Choose the correct prediction:',
    options: [
      'It rains tomorrow.',
      'It will rains tomorrow.',
      'It will rain tomorrow.',
      'It is will rain tomorrow.'
    ],
    correctAnswer: 'It will rain tomorrow.',
    explanation: 'Future Simple usa "will + verbo base" para predicciones.',
    category: 'future-simple'
  },
  {
    id: 'fs12',
    type: 'fill-blank',
    question: 'I promise I _____ (help) you tomorrow.',
    correctAnswer: 'will help',
    explanation: 'Future Simple con "will" para promesas.',
    category: 'future-simple'
  },
  {
    id: 'fs13',
    type: 'multiple-choice',
    question: 'Select the correct negative form:',
    options: [
      'She not will come.',
      'She will not comes.',
      'She will not come.',
      'She won\'t coming.'
    ],
    correctAnswer: 'She will not come.',
    explanation: 'La negación usa "will not/won\'t + verbo base".',
    category: 'future-simple'
  },
  {
    id: 'fs14',
    type: 'true-false',
    question: 'This sentence is correct: "Will you helps me?"',
    correctAnswer: 'false',
    explanation: 'Después de "will" usamos el verbo base. Correcto: "Will you help me?"',
    category: 'future-simple'
  },
  {
    id: 'fs15',
    type: 'multiple-choice',
    question: 'Which is a spontaneous decision?',
    options: [
      'I\'m going to answer the phone.',
      'I\'ll answer the phone!',
      'I answer the phone.',
      'I answering the phone.'
    ],
    correctAnswer: 'I\'ll answer the phone!',
    explanation: '"will" se usa para decisiones espontáneas.',
    category: 'future-simple'
  },
  {
    id: 'fs16',
    type: 'fill-blank',
    question: '_____ you _____ (attend) the meeting next week?',
    correctAnswer: ['Will', 'attend'],
    explanation: 'Preguntas usan "Will + sujeto + verbo base".',
    category: 'future-simple'
  },
  {
    id: 'fs17',
    type: 'multiple-choice',
    question: 'Choose the correct offer:',
    options: [
      'I\'ll helping you.',
      'I help you.',
      'I\'ll help you.',
      'I to help you.'
    ],
    correctAnswer: 'I\'ll help you.',
    explanation: '"\'ll" es la contracción de "will", usado para ofrecimientos.',
    category: 'future-simple'
  },
  {
    id: 'fs18',
    type: 'true-false',
    question: 'This is correct: "They will to visit us."',
    correctAnswer: 'false',
    explanation: 'No usamos "to" después de "will". Correcto: "They will visit us."',
    category: 'future-simple'
  },
  {
    id: 'fs19',
    type: 'multiple-choice',
    question: 'Which shows a future promise?',
    options: [
      'I promise I help you.',
      'I promise I helping you.',
      'I promise I will help you.',
      'I promise I am help you.'
    ],
    correctAnswer: 'I promise I will help you.',
    explanation: 'Future Simple con "will" para promesas.',
    category: 'future-simple'
  },
  {
    id: 'fs20',
    type: 'fill-blank',
    question: 'Don\'t worry, everything _____ (be) fine.',
    correctAnswer: 'will be',
    explanation: 'Future Simple para predicciones y asegurar algo.',
    category: 'future-simple'
  },

  // Future Continuous Questions (10)
  {
    id: 'fc1',
    type: 'multiple-choice',
    question: 'Choose the correct Future Continuous form:',
    options: [
      'I will working at 9pm tonight.',
      'I will be working at 9pm tonight.',
      'I will been working at 9pm tonight.',
      'I am will working at 9pm tonight.'
    ],
    correctAnswer: 'I will be working at 9pm tonight.',
    explanation: 'Future Continuous uses "will be + verb-ing".',
    category: 'future-continuous'
  },
  {
    id: 'fc2',
    type: 'fill-blank',
    question: 'Complete: "This time tomorrow,  she _____ (fly) to Paris."',
    correctAnswer: 'will be flying',
    explanation: 'Future Continuous uses "will be + verb-ing" for future actions in progress.',
    category: 'future-continuous'
  },
  {
    id: 'fc3',
    type: 'multiple-choice',
    question: 'Select the correct negative form:',
    options: [
      'They will not studying.',
      'They won\'t be studying.',
      'They will not be study.',
      'They not will be studying.'
    ],
    correctAnswer: 'They won\'t be studying.',
    explanation: 'Negative in Future Continuous uses "won\'t be + verb-ing".',
    category: 'future-continuous'
  },
  {
    id: 'fc4',
    type: 'true-false',
    question: 'This sentence is correct: "Will you be waiting for me?"',
    correctAnswer: 'true',
    explanation: 'Questions in Future Continuous start with "Will".',
    category: 'future-continuous'
  },
  {
    id: 'fc5',
    type: 'multiple-choice',
    question: 'Choose the correct form:',
    options: [
      'What will you doing tomorrow?',
      'What will you be doing tomorrow?',
      'What will you do be tomorrow?',
      'What you will be doing tomorrow?'
    ],
    correctAnswer: 'What will you be doing tomorrow?',
    explanation: 'Questions in Future Continuous use "will + subject + be + verb-ing".',
    category: 'future-continuous'
  },
  {
    id: 'fc6',
    type: 'fill-blank',
    question: 'Complete: "We _____ (have) dinner when you arrive."',
    correctAnswer: 'will be having',
    explanation: 'Future Continuous describes actions that will be in progress.',
    category: 'future-continuous'
  },
  {
    id: 'fc7',
    type: 'multiple-choice',
    question: 'Which sentence shows a future action in progress?',
    options: [
      'I will study tomorrow.',
      'I will be studying all day tomorrow.',
      'I have studied tomorrow.',
      'I am studying tomorrow.'
    ],
    correctAnswer: 'I will be studying all day tomorrow.',
    explanation: 'Future Continuous is used for actions that will be in progress.',
    category: 'future-continuous'
  },
  {
    id: 'fc8',
    type: 'true-false',
    question: 'This sentence is correct: "They will be traveling this time next week."',
    correctAnswer: 'true',
    explanation: 'Future Continuous is used for future actions at a specific time.',
    category: 'future-continuous'
  },
  {
    id: 'fc9',
    type: 'multiple-choice',
    question: 'Choose the correct sentence:',
    options: [
      'He will working on the project.',
      'He will be work on the project.',
      'He will be working on the project.',
      'He be will working on the project.'
    ],
    correctAnswer: 'He will be working on the project.',
    explanation: 'Future Continuous uses "will be + verb-ing".',
    category: 'future-continuous'
  },
  {
    id: 'fc10',
    type: 'fill-blank',
    question: 'Complete: "_____ they _____ (wait) for us?"',
    correctAnswer: ['Will', 'be waiting'],
    explanation: 'Questions in Future Continuous use "Will + subject + be + verb-ing".',
    category: 'future-continuous'
  },

  // Future Continuous Questions (10 nuevas después de fc10)
  {
    id: 'fc11',
    type: 'multiple-choice',
    question: 'Choose the correct Future Continuous form:',
    options: [
      'This time tomorrow, I work.',
      'This time tomorrow, I will working.',
      'This time tomorrow, I will be working.',
      'This time tomorrow, I be working.'
    ],
    correctAnswer: 'This time tomorrow, I will be working.',
    explanation: 'Future Continuous usa "will be + verbo-ing".',
    category: 'future-continuous'
  },
  {
    id: 'fc12',
    type: 'fill-blank',
    question: 'At 9 PM tonight, we _____ (watch) the movie.',
    correctAnswer: 'will be watching',
    explanation: 'Future Continuous para acciones en progreso en un momento futuro.',
    category: 'future-continuous'
  },
  {
    id: 'fc13',
    type: 'multiple-choice',
    question: 'Select the correct negative:',
    options: [
      'I will not working tomorrow.',
      'I won\'t be working tomorrow.',
      'I will not be work tomorrow.',
      'I not will be working tomorrow.'
    ],
    correctAnswer: 'I won\'t be working tomorrow.',
    explanation: 'La negación usa "won\'t be + verbo-ing".',
    category: 'future-continuous'
  },
  {
    id: 'fc14',
    type: 'true-false',
    question: 'This is correct: "Will you be sleeping at midnight?"',
    correctAnswer: 'true',
    explanation: 'Preguntas usan "Will + sujeto + be + verbo-ing".',
    category: 'future-continuous'
  },
  {
    id: 'fc15',
    type: 'multiple-choice',
    question: 'Which shows a future action in progress?',
    options: [
      'I will study tomorrow.',
      'I will be studying all day tomorrow.',
      'I study tomorrow.',
      'I am studying tomorrow.'
    ],
    correctAnswer: 'I will be studying all day tomorrow.',
    explanation: 'Future Continuous para acciones que estarán en progreso.',
    category: 'future-continuous'
  },
  {
    id: 'fc16',
    type: 'fill-blank',
    question: 'This time next week, they _____ (live) in Paris.',
    correctAnswer: 'will be living',
    explanation: 'Future Continuous para situaciones futuras en progreso.',
    category: 'future-continuous'
  },
  {
    id: 'fc17',
    type: 'multiple-choice',
    question: 'Choose the correct question:',
    options: [
      'What will you doing tomorrow?',
      'What will you be doing tomorrow?',
      'What you will be doing tomorrow?',
      'What will be you doing tomorrow?'
    ],
    correctAnswer: 'What will you be doing tomorrow?',
    explanation: 'Preguntas: "will + sujeto + be + verbo-ing".',
    category: 'future-continuous'
  },
  {
    id: 'fc18',
    type: 'true-false',
    question: 'This is correct: "She will working all day."',
    correctAnswer: 'false',
    explanation: 'Falta "be". Correcto: "She will be working all day."',
    category: 'future-continuous'
  },
  {
    id: 'fc19',
    type: 'fill-blank',
    question: '_____ they _____ (wait) for us when we arrive?',
    correctAnswer: ['Will', 'be waiting'],
    explanation: 'Preguntas usan "Will + sujeto + be + verbo-ing".',
    category: 'future-continuous'
  },
  {
    id: 'fc20',
    type: 'multiple-choice',
    question: 'Which is the correct form?',
    options: [
      'Don\'t call at 8, I\'ll sleep.',
      'Don\'t call at 8, I\'ll be sleep.',
      'Don\'t call at 8, I\'ll be sleeping.',
      'Don\'t call at 8, I\'ll sleeping.'
    ],
    correctAnswer: 'Don\'t call at 8, I\'ll be sleeping.',
    explanation: 'Future Continuous para una acción que estará en progreso.',
    category: 'future-continuous'
  },

  // Future Perfect Questions (10)
  {
    id: 'fp1',
    type: 'multiple-choice',
    question: 'Choose the correct Future Perfect form:',
    options: [
      'By next year, I finish the project.',
      'By next year, I will finished the project.',
      'By next year, I will have finished the project.',
      'By next year, I will have finish the project.'
    ],
    correctAnswer: 'By next year, I will have finished the project.',
    explanation: 'Future Perfect usa "will have + participio pasado".',
    category: 'future-perfect'
  },
  {
    id: 'fp2',
    type: 'fill-blank',
    question: 'By 2025, they _____ (complete) the new bridge.',
    correctAnswer: 'will have completed',
    explanation: 'Future Perfect para acciones que estarán completadas en un punto futuro.',
    category: 'future-perfect'
  },
  {
    id: 'fp3',
    type: 'multiple-choice',
    question: 'Select the correct negative:',
    options: [
      'We will not have finish by then.',
      'We won\'t have finished by then.',
      'We will not finished by then.',
      'We won\'t having finished by then.'
    ],
    correctAnswer: 'We won\'t have finished by then.',
    explanation: 'La negación usa "won\'t have + participio pasado".',
    category: 'future-perfect'
  },
  {
    id: 'fp4',
    type: 'true-false',
    question: 'This is correct: "Will you have finished by tomorrow?"',
    correctAnswer: 'true',
    explanation: 'Preguntas usan "Will + sujeto + have + participio pasado".',
    category: 'future-perfect'
  },
  {
    id: 'fp5',
    type: 'multiple-choice',
    question: 'Which shows a completed future action?',
    options: [
      'I will study by tomorrow.',
      'I will have studied by tomorrow.',
      'I will be studying by tomorrow.',
      'I have studied by tomorrow.'
    ],
    correctAnswer: 'I will have studied by tomorrow.',
    explanation: 'Future Perfect para acciones que estarán completadas.',
    category: 'future-perfect'
  },
  {
    id: 'fp6',
    type: 'fill-blank',
    question: 'By the time you arrive, I _____ (leave).',
    correctAnswer: 'will have left',
    explanation: 'Future Perfect para una acción que estará completa antes de otra.',
    category: 'future-perfect'
  },
  {
    id: 'fp7',
    type: 'multiple-choice',
    question: 'Choose the correct form:',
    options: [
      'She will worked for 30 years by then.',
      'She will have work for 30 years by then.',
      'She will have worked for 30 years by then.',
      'She will having worked for 30 years by then.'
    ],
    correctAnswer: 'She will have worked for 30 years by then.',
    explanation: 'Future Perfect para duración hasta un punto futuro.',
    category: 'future-perfect'
  },
  {
    id: 'fp8',
    type: 'true-false',
    question: 'This is correct: "They will had arrived by 6 PM."',
    correctAnswer: 'false',
    explanation: 'Incorrecto. Debe ser "will have arrived".',
    category: 'future-perfect'
  },
  {
    id: 'fp9',
    type: 'fill-blank',
    question: '_____ you _____ (finish) the book by Monday?',
    correctAnswer: ['Will', 'have finished'],
    explanation: 'Preguntas usan "Will + sujeto + have + participio pasado".',
    category: 'future-perfect'
  },
  {
    id: 'fp10',
    type: 'multiple-choice',
    question: 'By next month, how long _____ you _____ (study) English?',
    options: [
      'will / study',
      'will / have studied',
      'will have / study',
      'will have / been studying'
    ],
    correctAnswer: 'will / have studied',
    explanation: 'Future Perfect para duración hasta un punto futuro.',
    category: 'future-perfect'
  },
  {
    id: 'fp11',
    type: 'multiple-choice',
    question: 'Choose the correct Future Perfect form:',
    options: [
      'By next year, I finish the project.',
      'By next year, I will finished the project.',
      'By next year, I will have finished the project.',
      'By next year, I will have finish the project.'
    ],
    correctAnswer: 'By next year, I will have finished the project.',
    explanation: 'Future Perfect usa "will have + participio pasado".',
    category: 'future-perfect'
  },
  {
    id: 'fp12',
    type: 'fill-blank',
    question: 'By 2025, they _____ (complete) the new bridge.',
    correctAnswer: 'will have completed',
    explanation: 'Future Perfect para acciones que estarán completadas en un punto futuro.',
    category: 'future-perfect'
  },
  {
    id: 'fp13',
    type: 'multiple-choice',
    question: 'Select the correct negative:',
    options: [
      'We will not have finish by then.',
      'We won\'t have finished by then.',
      'We will not finished by then.',
      'We won\'t having finished by then.'
    ],
    correctAnswer: 'We won\'t have finished by then.',
    explanation: 'La negación usa "won\'t have + participio pasado".',
    category: 'future-perfect'
  },
  {
    id: 'fp14',
    type: 'true-false',
    question: 'This is correct: "Will you have finished by tomorrow?"',
    correctAnswer: 'true',
    explanation: 'Preguntas usan "Will + sujeto + have + participio pasado".',
    category: 'future-perfect'
  },
  {
    id: 'fp15',
    type: 'multiple-choice',
    question: 'Which shows a completed future action?',
    options: [
      'I will study by tomorrow.',
      'I will have studied by tomorrow.',
      'I will be studying by tomorrow.',
      'I have studied by tomorrow.'
    ],
    correctAnswer: 'I will have studied by tomorrow.',
    explanation: 'Future Perfect para acciones que estarán completadas.',
    category: 'future-perfect'
  },
  {
    id: 'fp16',
    type: 'fill-blank',
    question: 'By the time you arrive, I _____ (leave).',
    correctAnswer: 'will have left',
    explanation: 'Future Perfect para una acción que estará completa antes de otra.',
    category: 'future-perfect'
  },
  {
    id: 'fp17',
    type: 'multiple-choice',
    question: 'Choose the correct form:',
    options: [
      'She will worked for 30 years by then.',
      'She will have work for 30 years by then.',
      'She will have worked for 30 years by then.',
      'She will having worked for 30 years by then.'
    ],
    correctAnswer: 'She will have worked for 30 years by then.',
    explanation: 'Future Perfect para duración hasta un punto futuro.',
    category: 'future-perfect'
  },
  {
    id: 'fp18',
    type: 'true-false',
    question: 'This is correct: "They will had arrived by 6 PM."',
    correctAnswer: 'false',
    explanation: 'Incorrecto. Debe ser "will have arrived".',
    category: 'future-perfect'
  },
  {
    id: 'fp19',
    type: 'fill-blank',
    question: '_____ you _____ (finish) the book by Monday?',
    correctAnswer: ['Will', 'have finished'],
    explanation: 'Preguntas usan "Will + sujeto + have + participio pasado".',
    category: 'future-perfect'
  },
  {
    id: 'fp20',
    type: 'multiple-choice',
    question: 'By next month, how long _____ you _____ (study) English?',
    options: [
      'will / study',
      'will / have studied',
      'will have / study',
      'will have / been studying'
    ],
    correctAnswer: 'will / have studied',
    explanation: 'Future Perfect para duración hasta un punto futuro.',
    category: 'future-perfect'
  },


  // Vocabulary Questions (10)
  {
    id: 'voc1',
    type: 'multiple-choice',
    question: 'Which word is a color?',
    options: ['Apple', 'Purple', 'Monday', 'Kitchen'],
    correctAnswer: 'Purple',
    explanation: 'Purple (morado/púrpura) is a color.',
    category: 'colors'
  },
  {
    id: 'voc2',
    type: 'multiple-choice',
    question: 'Which is a family member?',
    options: ['Brother', 'Table', 'Window', 'Book'],
    correctAnswer: 'Brother',
    explanation: 'Brother (hermano) is a family member.',
    category: 'family'
  },
  {
    id: 'voc3',
    type: 'multiple-choice',
    question: 'Which is a food item?',
    options: ['Chair', 'Banana', 'Clock', 'Shoe'],
    correctAnswer: 'Banana',
    explanation: 'Banana (plátano/banana) is a food item.',
    category: 'food'
  },
  {
    id: 'voc4',
    type: 'fill-blank',
    question: 'The color of the sky is _____.',
    correctAnswer: 'blue',
    explanation: 'Blue (azul) is the color of the sky.',
    category: 'colors'
  },
  {
    id: 'voc5',
    type: 'multiple-choice',
    question: 'Which is a room in a house?',
    options: ['Apple', 'Kitchen', 'Monday', 'Purple'],
    correctAnswer: 'Kitchen',
    explanation: 'Kitchen (cocina) is a room in a house.',
    category: 'rooms'
  },
  {
    id: 'voc6',
    type: 'multiple-choice',
    question: 'Which object can you find in a kitchen?',
    options: ['Bed', 'Refrigerator', 'Sofa', 'Bookshelf'],
    correctAnswer: 'Refrigerator',
    explanation: 'A refrigerator (refrigerador/nevera) is typically found in a kitchen.',
    category: 'objects'
  },
  {
    id: 'voc7',
    type: 'true-false',
    question: 'A "bedroom" is a room where you cook food.',
    correctAnswer: 'false',
    explanation: 'A bedroom (dormitorio/habitación) is a room where you sleep.',
    category: 'rooms'
  },
  {
    id: 'voc8',
    type: 'multiple-choice',
    question: 'Which is a drink?',
    options: ['Bread', 'Coffee', 'Chair', 'Window'],
    correctAnswer: 'Coffee',
    explanation: 'Coffee (café) is a drink.',
    category: 'drinks'
  },
  {
    id: 'voc9',
    type: 'fill-blank',
    question: 'Your mother\'s sister is your _____.',
    correctAnswer: 'aunt',
    explanation: 'Aunt (tía) is your mother\'s or father\'s sister.',
    category: 'family'
  },
  {
    id: 'voc10',
    type: 'multiple-choice',
    question: 'Which word means "very cold"?',
    options: ['Hot', 'Warm', 'Frozen', 'Wet'],
    correctAnswer: 'Frozen',
    explanation: 'Frozen (congelado) means very cold or turned to ice.',
    category: 'objects'
  },

  {
    id: 'voc11',
    type: 'multiple-choice',
    question: 'Which is a day of the week?',
    options: ['January', 'Monday', 'Kitchen', 'Water'],
    correctAnswer: 'Monday',
    explanation: 'Monday (lunes) is a day of the week.',
    category: 'days'
  },
  {
    id: 'voc12',
    type: 'multiple-choice',
    question: 'Which is a month of the year?',
    options: ['Sunday', 'December', 'Morning', 'Night'],
    correctAnswer: 'December',
    explanation: 'December (diciembre) is a month of the year.',
    category: 'months'
  },
  {
    id: 'voc13',
    type: 'fill-blank',
    question: 'The opposite of day is _____.',
    correctAnswer: 'night',
    explanation: 'Night (noche) is the opposite of day.',
    category: 'time'
  },
  {
    id: 'voc14',
    type: 'multiple-choice',
    question: 'Which is a drink?',
    options: ['Apple', 'Bread', 'Wine', 'Chair'],
    correctAnswer: 'Wine',
    explanation: 'Wine (vino) is a drink.',
    category: 'drinks'
  },
  {
    id: 'voc15',
    type: 'true-false',
    question: 'A "microwave" is a room in the house.',
    correctAnswer: 'false',
    explanation: 'A microwave (microondas) is an appliance, not a room.',
    category: 'objects'
  },
  {
    id: 'voc16',
    type: 'multiple-choice',
    question: 'Which number comes after "nineteen"?',
    options: ['Eighteen', 'Twenty', 'Twelve', 'Fifteen'],
    correctAnswer: 'Twenty',
    explanation: 'Twenty (veinte) comes after nineteen.',
    category: 'numbers'
  },
  {
    id: 'voc17',
    type: 'fill-blank',
    question: 'A person who is your mother\'s brother is your _____.',
    correctAnswer: 'uncle',
    explanation: 'Uncle (tío) is your mother\'s or father\'s brother.',
    category: 'family'
  },
  {
    id: 'voc18',
    type: 'multiple-choice',
    question: 'Which is a piece of furniture?',
    options: ['Table', 'Apple', 'Monday', 'Blue'],
    correctAnswer: 'Table',
    explanation: 'Table (mesa) is a piece of furniture.',
    category: 'objects'
  },
  {
    id: 'voc19',
    type: 'multiple-choice',
    question: 'What time expression means "early evening"?',
    options: ['Morning', 'Afternoon', 'Evening', 'Night'],
    correctAnswer: 'Evening',
    explanation: 'Evening (noche temprano) refers to early night time.',
    category: 'time'
  },
  {
    id: 'voc20',
    type: 'fill-blank',
    question: 'The room where you cook food is called the _____.',
    correctAnswer: 'kitchen',
    explanation: 'Kitchen (cocina) is where food is prepared.',
    category: 'rooms'
  },
  {
    id: 'voc21',
    type: 'multiple-choice',
    question: 'Which is a breakfast drink?',
    options: ['Beer', 'Coffee', 'Wine', 'Soap'],
    correctAnswer: 'Coffee',
    explanation: 'Coffee (café) is commonly drunk at breakfast.',
    category: 'drinks'
  },
  {
    id: 'voc22',
    type: 'true-false',
    question: 'A "bedroom" is where you cook food.',
    correctAnswer: 'false',
    explanation: 'A bedroom (dormitorio) is where you sleep, not where you cook.',
    category: 'rooms'
  },
  {
    id: 'voc23',
    type: 'multiple-choice',
    question: 'Which is a fruit?',
    options: ['Carrot', 'Banana', 'Chicken', 'Bread'],
    correctAnswer: 'Banana',
    explanation: 'Banana (plátano/banana) is a fruit.',
    category: 'food'
  },
  {
    id: 'voc24',
    type: 'fill-blank',
    question: 'The day between Tuesday and Thursday is _____.',
    correctAnswer: 'Wednesday',
    explanation: 'Wednesday (miércoles) comes between Tuesday and Thursday.',
    category: 'days'
  },
  {
    id: 'voc25',
    type: 'multiple-choice',
    question: 'Which is a bathroom item?',
    options: ['Toothbrush', 'Fork', 'Pillow', 'Table'],
    correctAnswer: 'Toothbrush',
    explanation: 'A toothbrush (cepillo de dientes) is used in the bathroom.',
    category: 'objects'
  },
  {
    id: 'voc26',
    type: 'multiple-choice',
    question: 'Which is the first month of the year?',
    options: ['December', 'January', 'March', 'August'],
    correctAnswer: 'January',
    explanation: 'January (enero) is the first month of the year.',
    category: 'months'
  },
  {
    id: 'voc27',
    type: 'fill-blank',
    question: 'Your father\'s father is your _____.',
    correctAnswer: 'grandfather',
    explanation: 'Grandfather (abuelo) is your father\'s or mother\'s father.',
    category: 'family'
  },
  {
    id: 'voc28',
    type: 'multiple-choice',
    question: 'Which color is associated with the sky?',
    options: ['Green', 'Red', 'Blue', 'Yellow'],
    correctAnswer: 'Blue',
    explanation: 'Blue (azul) is the color of the sky.',
    category: 'colors'
  },
  {
    id: 'voc29',
    type: 'true-false',
    question: 'A "living room" is where you sleep.',
    correctAnswer: 'false',
    explanation: 'A living room (sala de estar) is where people gather and relax, not primarily for sleeping.',
    category: 'rooms'
  },
  {
    id: 'voc30',
    type: 'multiple-choice',
    question: 'Which is a kitchen appliance?',
    options: ['Bed', 'Refrigerator', 'Curtains', 'Mirror'],
    correctAnswer: 'Refrigerator',
    explanation: 'A refrigerator (refrigerador/nevera) is a kitchen appliance.',
    category: 'objects'
  },

  // Vocabulary Questions (20 nuevas después de voc30)
  {
    id: 'voc31',
    type: 'multiple-choice',
    question: 'Which is a profession?',
    options: ['Teacher', 'Window', 'Apple', 'Monday'],
    correctAnswer: 'Teacher',
    explanation: 'Teacher (profesor/a) es una profesión.',
    category: 'professions'
  },
  {
    id: 'voc32',
    type: 'fill-blank',
    question: 'The person who cuts hair is called a _____.',
    correctAnswer: 'hairdresser',
    explanation: 'Hairdresser (peluquero/a) es quien corta el pelo.',
    category: 'professions'
  },
  {
    id: 'voc33',
    type: 'multiple-choice',
    question: 'Which is a weather condition?',
    options: ['Table', 'Sunny', 'Book', 'Car'],
    correctAnswer: 'Sunny',
    explanation: 'Sunny (soleado) es una condición climática.',
    category: 'weather'
  },
  {
    id: 'voc34',
    type: 'true-false',
    question: 'A "dentist" is someone who fixes cars.',
    correctAnswer: 'false',
    explanation: 'Un dentist (dentista) es quien cuida los dientes, no quien arregla coches.',
    category: 'professions'
  },
  {
    id: 'voc35',
    type: 'multiple-choice',
    question: 'Which is a piece of clothing?',
    options: ['Door', 'Shirt', 'Book', 'Apple'],
    correctAnswer: 'Shirt',
    explanation: 'Shirt (camisa) es una prenda de vestir.',
    category: 'clothing'
  },
  {
    id: 'voc36',
    type: 'fill-blank',
    question: 'You wear a _____ on your feet.',
    correctAnswer: 'shoes',
    explanation: 'Shoes (zapatos) se usan en los pies.',
    category: 'clothing'
  },
  {
    id: 'voc37',
    type: 'multiple-choice',
    question: 'Which animal is a pet?',
    options: ['Lion', 'Dog', 'Elephant', 'Giraffe'],
    correctAnswer: 'Dog',
    explanation: 'Dog (perro) es un animal doméstico común.',
    category: 'animals'
  },
  {
    id: 'voc38',
    type: 'multiple-choice',
    question: 'Which is a means of transportation?',
    options: ['House', 'Train', 'Tree', 'Book'],
    correctAnswer: 'Train',
    explanation: 'Train (tren) es un medio de transporte.',
    category: 'transportation'
  },
  {
    id: 'voc39',
    type: 'true-false',
    question: 'A "chef" works in a hospital.',
    correctAnswer: 'false',
    explanation: 'Un chef trabaja en un restaurante o cocina, no en un hospital.',
    category: 'professions'
  },
  {
    id: 'voc40',
    type: 'multiple-choice',
    question: 'Which is a season of the year?',
    options: ['Monday', 'Summer', 'Dinner', 'Book'],
    correctAnswer: 'Summer',
    explanation: 'Summer (verano) es una estación del año.',
    category: 'seasons'
  },
  {
    id: 'voc41',
    type: 'fill-blank',
    question: 'The opposite of "hot" is _____.',
    correctAnswer: 'cold',
    explanation: 'Cold (frío) es lo opuesto a hot (caliente).',
    category: 'weather'
  },
  {
    id: 'voc42',
    type: 'multiple-choice',
    question: 'Which is a musical instrument?',
    options: ['Chair', 'Piano', 'Window', 'Shoe'],
    correctAnswer: 'Piano',
    explanation: 'Piano (piano) es un instrumento musical.',
    category: 'music'
  },
  {
    id: 'voc43',
    type: 'multiple-choice',
    question: 'Which is a sport?',
    options: ['Kitchen', 'Soccer', 'Table', 'Book'],
    correctAnswer: 'Soccer',
    explanation: 'Soccer (fútbol) es un deporte.',
    category: 'sports'
  },
  {
    id: 'voc44',
    type: 'true-false',
    question: 'A "nurse" works in a restaurant.',
    correctAnswer: 'false',
    explanation: 'Una nurse (enfermera/o) trabaja en un hospital o clínica, no en un restaurante.',
    category: 'professions'
  },
  {
    id: 'voc45',
    type: 'multiple-choice',
    question: 'Which is a body part?',
    options: ['Book', 'Hand', 'Chair', 'House'],
    correctAnswer: 'Hand',
    explanation: 'Hand (mano) es una parte del cuerpo.',
    category: 'body'
  },
  {
    id: 'voc46',
    type: 'fill-blank',
    question: 'You use your _____ to see.',
    correctAnswer: 'eyes',
    explanation: 'Eyes (ojos) son los órganos que usamos para ver.',
    category: 'body'
  },
  {
    id: 'voc47',
    type: 'multiple-choice',
    question: 'Which is a school subject?',
    options: ['Door', 'Mathematics', 'Chair', 'Shoe'],
    correctAnswer: 'Mathematics',
    explanation: 'Mathematics (matemáticas) es una materia escolar.',
    category: 'education'
  },
  {
    id: 'voc48',
    type: 'multiple-choice',
    question: 'Which is an emotion?',
    options: ['Table', 'Happy', 'Book', 'House'],
    correctAnswer: 'Happy',
    explanation: 'Happy (feliz) es una emoción.',
    category: 'emotions'
  },
  {
    id: 'voc49',
    type: 'true-false',
    question: 'A "doctor" teaches in a school.',
    correctAnswer: 'false',
    explanation: 'Un doctor trabaja en un hospital o clínica, no enseña en una escuela.',
    category: 'professions'
  },
  {
    id: 'voc50',
    type: 'multiple-choice',
    question: 'Which is a place in a city?',
    options: ['Dog', 'Park', 'Shirt', 'Apple'],
    correctAnswer: 'Park',
    explanation: 'Park (parque) es un lugar que se encuentra en una ciudad.',
    category: 'places'
  },

  // Agregar después de las preguntas de vocabulario existentes (después de voc50):
  {
    id: 'voc51',
    type: 'multiple-choice',
    question: 'Which is a type of footwear?',
    options: ['T-shirt', 'Boots', 'Pants', 'Hat'],
    correctAnswer: 'Boots',
    explanation: 'Boots (botas) es un tipo de calzado que cubre el pie y parte de la pierna.',
    category: 'clothing'
  },
  {
    id: 'voc52',
    type: 'fill-blank',
    question: 'The room where you take a shower is called the _____.',
    correctAnswer: 'bathroom',
    explanation: 'Bathroom (baño) es donde te duchas o te bañas.',
    category: 'rooms'
  },
  {
    id: 'voc53',
    type: 'multiple-choice',
    question: 'Which profession works with computers and software?',
    options: ['Chef', 'Programmer', 'Dentist', 'Firefighter'],
    correctAnswer: 'Programmer',
    explanation: 'Programmer (programador/a) es quien trabaja con computadoras y software.',
    category: 'professions'
  },
  {
    id: 'voc54',
    type: 'true-false',
    question: 'A "keyboard" is used to type on a computer.',
    correctAnswer: 'true',
    explanation: 'Un keyboard (teclado) se usa para escribir en una computadora.',
    category: 'tech'
  },
  {
    id: 'voc55',
    type: 'multiple-choice',
    question: 'Which animal can fly?',
    options: ['Fish', 'Dog', 'Bird', 'Cat'],
    correctAnswer: 'Bird',
    explanation: 'Bird (pájaro/ave) es un animal que puede volar.',
    category: 'animals'
  },
  {
    id: 'voc56',
    type: 'fill-blank',
    question: 'The season that comes after winter is _____.',
    correctAnswer: 'spring',
    explanation: 'Spring (primavera) es la estación que viene después del invierno.',
    category: 'seasons'
  },
  {
    id: 'voc57',
    type: 'multiple-choice',
    question: 'Which is a type of public transportation?',
    options: ['House', 'Bus', 'Television', 'Chair'],
    correctAnswer: 'Bus',
    explanation: 'Bus (autobús) es un tipo de transporte público.',
    category: 'transportation'
  },
  {
    id: 'voc58',
    type: 'multiple-choice',
    question: 'Which word describes very cold weather with snow?',
    options: ['Rainy', 'Sunny', 'Foggy', 'Snowy'],
    correctAnswer: 'Snowy',
    explanation: 'Snowy (nevado) describe un clima muy frío con nieve.',
    category: 'weather'
  },
  {
    id: 'voc59',
    type: 'true-false',
    question: 'A "smartphone" is a type of musical instrument.',
    correctAnswer: 'false',
    explanation: 'Un smartphone (teléfono inteligente) es un dispositivo electrónico, no un instrumento musical.',
    category: 'tech'
  },
  {
    id: 'voc60',
    type: 'multiple-choice',
    question: 'Which is a typical breakfast food?',
    options: ['Pizza', 'Eggs', 'Cake', 'Steak'],
    correctAnswer: 'Eggs',
    explanation: 'Eggs (huevos) son un alimento típico del desayuno.',
    category: 'food'
  },

  {
    id: 'voc61',
    type: 'multiple-choice',
    question: 'Which word means the early part of the day?',
    options: ['Evening', 'Morning', 'Night', 'Afternoon'],
    correctAnswer: 'Morning',
    explanation: 'Morning (mañana) es la primera parte del día.',
    category: 'time'
  },
  {
    id: 'voc62',
    type: 'fill-blank',
    question: 'A day has 24 _____.',
    correctAnswer: 'hours',
    explanation: 'A day has 24 hours (horas).',
    category: 'time'
  },

  // Categoría: months
  {
    id: 'voc63',
    type: 'multiple-choice',
    question: 'Which is the first month of the year?',
    options: ['December', 'January', 'February', 'March'],
    correctAnswer: 'January',
    explanation: 'January (enero) es el primer mes del año.',
    category: 'months'
  },
  {
    id: 'voc64',
    type: 'true-false',
    question: 'December is the last month of the year.',
    correctAnswer: 'true',
    explanation: 'December (diciembre) es efectivamente el último mes del año.',
    category: 'months'
  },

  // Categoría: family
  {
    id: 'voc65',
    type: 'multiple-choice',
    question: 'Your mother\'s mother is your _____.',
    options: ['Sister', 'Aunt', 'Grandmother', 'Cousin'],
    correctAnswer: 'Grandmother',
    explanation: 'Grandmother (abuela) es la madre de tu madre.',
    category: 'family'
  },
  {
    id: 'voc66',
    type: 'fill-blank',
    question: 'Your father\'s brother is your _____.',
    correctAnswer: 'uncle',
    explanation: 'Uncle (tío) es el hermano de tu padre.',
    category: 'family'
  },

  // Categoría: colors
  {
    id: 'voc67',
    type: 'multiple-choice',
    question: 'Which color is the sky on a clear day?',
    options: ['Green', 'Red', 'Blue', 'Yellow'],
    correctAnswer: 'Blue',
    explanation: 'Blue (azul) es el color del cielo en un día despejado.',
    category: 'colors'
  },
  {
    id: 'voc68',
    type: 'fill-blank',
    question: 'A lemon is usually _____.',
    correctAnswer: 'yellow',
    explanation: 'Yellow (amarillo) es el color típico de un limón.',
    category: 'colors'
  },

  // Categoría: food
  {
    id: 'voc69',
    type: 'multiple-choice',
    question: 'Which of these is a vegetable?',
    options: ['Apple', 'Carrot', 'Chicken', 'Cheese'],
    correctAnswer: 'Carrot',
    explanation: 'Carrot (zanahoria) es una verdura.',
    category: 'food'
  },
  {
    id: 'voc70',
    type: 'true-false',
    question: 'A tomato is a type of fruit.',
    correctAnswer: 'true',
    explanation: 'Aunque se usa como verdura, técnicamente un tomato (tomate) es una fruta.',
    category: 'food'
  },

  // Categoría: drinks
  {
    id: 'voc71',
    type: 'multiple-choice',
    question: 'Which is typically drunk at breakfast?',
    options: ['Wine', 'Coffee', 'Beer', 'Vodka'],
    correctAnswer: 'Coffee',
    explanation: 'Coffee (café) es una bebida típica del desayuno.',
    category: 'drinks'
  },
  {
    id: 'voc72',
    type: 'fill-blank',
    question: 'Orange _____ is made from oranges.',
    correctAnswer: 'juice',
    explanation: 'Orange juice (zumo/jugo de naranja) se hace con naranjas.',
    category: 'drinks'
  },

  // Categoría: days
  {
    id: 'voc73',
    type: 'multiple-choice',
    question: 'Which day comes after Friday?',
    options: ['Thursday', 'Saturday', 'Sunday', 'Monday'],
    correctAnswer: 'Saturday',
    explanation: 'Saturday (sábado) viene después de Friday (viernes).',
    category: 'days'
  },
  {
    id: 'voc74',
    type: 'true-false',
    question: 'Monday is the first day of the work week.',
    correctAnswer: 'true',
    explanation: 'Monday (lunes) es generalmente el primer día de la semana laboral.',
    category: 'days'
  },

  // Categoría: rooms
  {
    id: 'voc75',
    type: 'multiple-choice',
    question: 'Where do you usually cook food?',
    options: ['Bedroom', 'Kitchen', 'Bathroom', 'Living room'],
    correctAnswer: 'Kitchen',
    explanation: 'Kitchen (cocina) es donde normalmente se cocina.',
    category: 'rooms'
  },
  {
    id: 'voc76',
    type: 'fill-blank',
    question: 'You sleep in the _____.',
    correctAnswer: 'bedroom',
    explanation: 'Bedroom (dormitorio) es la habitación donde duermes.',
    category: 'rooms'
  },

  // Categoría: objects
  {
    id: 'voc77',
    type: 'multiple-choice',
    question: 'Which object do you use to write?',
    options: ['Table', 'Book', 'Pen', 'Chair'],
    correctAnswer: 'Pen',
    explanation: 'Pen (bolígrafo) es un objeto para escribir.',
    category: 'objects'
  },
  {
    id: 'voc78',
    type: 'true-false',
    question: 'A "refrigerator" is used to keep food cold.',
    correctAnswer: 'true',
    explanation: 'Refrigerator (refrigerador/nevera) se usa para mantener la comida fría.',
    category: 'objects'
  },

  // Categoría: phrasal-verbs
  {
    id: 'voc79',
    type: 'multiple-choice',
    question: 'What does "give up" mean?',
    options: ['Start something', 'Continue trying', 'Stop trying', 'Lift something'],
    correctAnswer: 'Stop trying',
    explanation: '"Give up" (rendirse) significa dejar de intentar algo.',
    category: 'phrasal-verbs'
  },
  {
    id: 'voc80',
    type: 'fill-blank',
    question: 'When you "look _____ " something, you are searching for it.',
    correctAnswer: 'for',
    explanation: '"Look for" (buscar) significa buscar algo.',
    category: 'phrasal-verbs'
  },

  // Categoría: verb-noun
  {
    id: 'voc81',
    type: 'multiple-choice',
    question: 'Which phrase means to stop and rest briefly?',
    options: ['Take a break', 'Make a mistake', 'Have a conversation', 'Give advice'],
    correctAnswer: 'Take a break',
    explanation: '"Take a break" (tomar un descanso) significa parar y descansar brevemente.',
    category: 'verb-noun'
  },
  {
    id: 'voc82',
    type: 'true-false',
    question: '"Make a decision" means to choose something.',
    correctAnswer: 'true',
    explanation: '"Make a decision" (tomar una decisión) significa elegir algo.',
    category: 'verb-noun'
  },

  // Categoría: medical
  {
    id: 'voc83',
    type: 'multiple-choice',
    question: 'Which symptom involves elevated body temperature?',
    options: ['Cough', 'Fever', 'Sore throat', 'Runny nose'],
    correctAnswer: 'Fever',
    explanation: 'Fever (fiebre) implica una temperatura corporal elevada.',
    category: 'medical'
  },
  {
    id: 'voc84',
    type: 'fill-blank',
    question: 'A _____ is given by a doctor for medicine.',
    correctAnswer: 'prescription',
    explanation: 'Prescription (receta médica) es lo que te da un médico para obtener medicamentos.',
    category: 'medical'
  },

  // Categoría: tech
  {
    id: 'voc85',
    type: 'multiple-choice',
    question: 'What connects you to the internet without cables?',
    options: ['Browser', 'Download', 'Wi-Fi', 'Software'],
    correctAnswer: 'Wi-Fi',
    explanation: 'Wi-Fi te conecta a internet sin cables.',
    category: 'tech'
  },
  {
    id: 'voc86',
    type: 'true-false',
    question: 'A "database" is used to store information.',
    correctAnswer: 'true',
    explanation: 'Database (base de datos) se usa para almacenar información.',
    category: 'tech'
  },

  // Categoría: clothing
  {
    id: 'voc87',
    type: 'multiple-choice',
    question: 'What do you wear on your feet?',
    options: ['Hat', 'Gloves', 'Shoes', 'Tie'],
    correctAnswer: 'Shoes',
    explanation: 'Shoes (zapatos) se usan en los pies.',
    category: 'clothing'
  },
  {
    id: 'voc88',
    type: 'fill-blank',
    question: 'In cold weather, you wear a _____ to keep warm.',
    correctAnswer: 'coat',
    explanation: 'Coat (abrigo) es una prenda para mantener el calor en climas fríos.',
    category: 'clothing'
  },

  // Categoría: animals
  {
    id: 'voc89',
    type: 'multiple-choice',
    question: 'Which animal says "meow"?',
    options: ['Dog', 'Cat', 'Bird', 'Fish'],
    correctAnswer: 'Cat',
    explanation: 'Cat (gato) es el animal que hace "meow" (miau).',
    category: 'animals'
  },
  {
    id: 'voc90',
    type: 'true-false',
    question: 'An "elephant" is smaller than a "mouse".',
    correctAnswer: 'false',
    explanation: 'Elephant (elefante) es mucho más grande que un mouse (ratón).',
    category: 'animals'
  },

  // Categoría: transportation
  {
    id: 'voc91',
    type: 'multiple-choice',
    question: 'Which vehicle flies in the sky?',
    options: ['Car', 'Bus', 'Bicycle', 'Airplane'],
    correctAnswer: 'Airplane',
    explanation: 'Airplane (avión) es el vehículo que vuela en el cielo.',
    category: 'transportation'
  },
  {
    id: 'voc92',
    type: 'fill-blank',
    question: 'A _____ has two wheels and you pedal it.',
    correctAnswer: 'bicycle',
    explanation: 'Bicycle (bicicleta) tiene dos ruedas y se pedalea.',
    category: 'transportation'
  },

  // Categoría: seasons
  {
    id: 'voc93',
    type: 'multiple-choice',
    question: 'In which season do leaves fall from trees?',
    options: ['Spring', 'Summer', 'Fall/Autumn', 'Winter'],
    correctAnswer: 'Fall/Autumn',
    explanation: 'Fall/Autumn (otoño) es cuando las hojas caen de los árboles.',
    category: 'seasons'
  },
  {
    id: 'voc94',
    type: 'true-false',
    question: '"Winter" is usually the coldest season.',
    correctAnswer: 'true',
    explanation: 'Winter (invierno) es generalmente la estación más fría del año.',
    category: 'seasons'
  },

  // Categoría: weather
  {
    id: 'voc95',
    type: 'multiple-choice',
    question: 'What weather condition involves water falling from clouds?',
    options: ['Sunny', 'Rainy', 'Windy', 'Foggy'],
    correctAnswer: 'Rainy',
    explanation: 'Rainy (lluvioso) implica agua cayendo de las nubes.',
    category: 'weather'
  },
  {
    id: 'voc96',
    type: 'fill-blank',
    question: 'When it\'s _____, there is snow falling.',
    correctAnswer: 'snowy',
    explanation: 'Snowy (nevado) es cuando cae nieve.',
    category: 'weather'
  },

  // Categoría: professions
  {
    id: 'voc97',
    type: 'multiple-choice',
    question: 'Who treats sick people?',
    options: ['Teacher', 'Doctor', 'Firefighter', 'Chef'],
    correctAnswer: 'Doctor',
    explanation: 'Doctor (médico) es quien trata a personas enfermas.',
    category: 'professions'
  },
  {
    id: 'voc98',
    type: 'true-false',
    question: 'A "teacher" works in a hospital.',
    correctAnswer: 'false',
    explanation: 'Teacher (profesor/a) trabaja en una escuela, no en un hospital.',
    category: 'professions'
  },

  // Categoría: emotions
  {
    id: 'voc99',
    type: 'multiple-choice',
    question: 'Which emotion describes feeling joyful?',
    options: ['Sad', 'Angry', 'Happy', 'Scared'],
    correctAnswer: 'Happy',
    explanation: 'Happy (feliz) describe sentirse alegre o contento.',
    category: 'emotions'
  },
  {
    id: 'voc100',
    type: 'fill-blank',
    question: 'When you feel _____, you want to cry.',
    correctAnswer: 'sad',
    explanation: 'Sad (triste) es como te sientes cuando quieres llorar.',
    category: 'emotions'
  },

  // Categoría: places
  {
    id: 'voc101',
    type: 'multiple-choice',
    question: 'Where do you go to borrow books?',
    options: ['Hospital', 'Restaurant', 'Library', 'Bank'],
    correctAnswer: 'Library',
    explanation: 'Library (biblioteca) es donde vas a pedir prestados libros.',
    category: 'places'
  },
  {
    id: 'voc102',
    type: 'true-false',
    question: 'A "supermarket" is where you buy food and household items.',
    correctAnswer: 'true',
    explanation: 'Supermarket (supermercado) es donde compras alimentos y artículos para el hogar.',
    category: 'places'
  },

  // Categoría: body
  {
    id: 'voc103',
    type: 'multiple-choice',
    question: 'Which body part do you use to see?',
    options: ['Ears', 'Eyes', 'Nose', 'Mouth'],
    correctAnswer: 'Eyes',
    explanation: 'Eyes (ojos) son las partes del cuerpo que usas para ver.',
    category: 'body'
  },
  {
    id: 'voc104',
    type: 'fill-blank',
    question: 'You hear sounds with your _____.',
    correctAnswer: 'ears',
    explanation: 'Ears (orejas/oídos) son con lo que escuchas sonidos.',
    category: 'body'
  },

  // Categoría: sports
  {
    id: 'voc105',
    type: 'multiple-choice',
    question: 'Which sport involves a ball and a net?',
    options: ['Running', 'Boxing', 'Swimming', 'Tennis'],
    correctAnswer: 'Tennis',
    explanation: 'Tennis (tenis) involucra una pelota y una red.',
    category: 'sports'
  },
  {
    id: 'voc106',
    type: 'true-false',
    question: '"Soccer" and "football" refer to the same sport in most countries.',
    correctAnswer: 'true',
    explanation: 'Soccer y football generalmente se refieren al mismo deporte en la mayoría de los países (excepto en EE.UU.).',
    category: 'sports'
  }
];