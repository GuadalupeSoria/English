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

  // Future Perfect Questions (10)
  {
    id: 'fp1',
    type: 'multiple-choice',
    question: 'Choose the correct Future Perfect form:',
    options: [
      'I will finished by 5pm.',
      'I will have finish by 5pm.',
      'I will have finished by 5pm.',
      'I have will finished by 5pm.'
    ],
    correctAnswer: 'I will have finished by 5pm.',
    explanation: 'Future Perfect uses "will have + past participle".',
    category: 'future-perfect'
  },
  {
    id: 'fp2',
    type: 'fill-blank',
    question: 'Complete: "By next year, she _____ (graduate) from university."',
    correctAnswer: 'will have graduated',
    explanation: 'Future Perfect uses "will have + past participle" for completed future actions.',
    category: 'future-perfect'
  },
  {
    id: 'fp3',
    type: 'multiple-choice',
    question: 'Select the correct negative form:',
    options: [
      'They will not have arrived.',
      'They won\'t arrived.',
      'They will not arrived.',
      'They won\'t have arrive.'
    ],
    correctAnswer: 'They will not have arrived.',
    explanation: 'Negative in Future Perfect uses "will not have + past participle".',
    category: 'future-perfect'
  },
  {
    id: 'fp4',
    type: 'true-false',
    question: 'This sentence is correct: "Will you have finished by then?"',
    correctAnswer: 'true',
    explanation: 'Questions in Future Perfect start with "Will".',
    category: 'future-perfect'
  },
  {
    id: 'fp5',
    type: 'multiple-choice',
    question: 'Choose the correct form:',
    options: [
      'By 2025, I will worked here for 10 years.',
      'By 2025, I will have worked here for 10 years.',
      'By 2025, I have will worked here for 10 years.',
      'By 2025, I will working here for 10 years.'
    ],
    correctAnswer: 'By 2025, I will have worked here for 10 years.',
    explanation: 'Future Perfect uses "will have + past participle" with a future time reference.',
    category: 'future-perfect'
  },
  {
    id: 'fp6',
    type: 'fill-blank',
    question: 'Complete: "They _____ (complete) the project by next month."',
    correctAnswer: 'will have completed',
    explanation: 'Future Perfect describes actions that will be completed by a future time.',
    category: 'future-perfect'
  },
  {
    id: 'fp7',
    type: 'multiple-choice',
    question: 'Which sentence shows a completed future action?',
    options: [
      'I will study tomorrow.',
      'I will be studying tomorrow.',
      'I will have studied by tomorrow evening.',
      'I have studied by tomorrow.'
    ],
    correctAnswer: 'I will have studied by tomorrow evening.',
    explanation: 'Future Perfect is used for actions that will be completed by a future time.',
    category: 'future-perfect'
  },
  {
    id: 'fp8',
    type: 'true-false',
    question: 'This sentence is correct: "By the time you arrive, we will have eaten dinner."',
    correctAnswer: 'true',
    explanation: 'Future Perfect is used for actions that will be completed before another future action.',
    category: 'future-perfect'
  },
  {
    id: 'fp9',
    type: 'multiple-choice',
    question: 'Choose the correct sentence:',
    options: [
      'He will have write the report.',
      'He will have wrote the report.',
      'He will have written the report.',
      'He will have writing the report.'
    ],
    correctAnswer: 'He will have written the report.',
    explanation: 'Future Perfect uses "will have + past participle".',
    category: 'future-perfect'
  },
  {
    id: 'fp10',
    type: 'fill-blank',
    question: 'Complete: "_____ you _____ (save) enough money by then?"',
    correctAnswer: ['Will', 'have saved'],
    explanation: 'Questions in Future Perfect use "Will + subject + have + past participle".',
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
  }
];