import { Situation } from '../types';

export const situations: Situation[] = [
  {
    id: 'idioms',
    icon: 'MessageSquare',
    title: 'Common Idioms',
    description: 'Learn popular English idioms and their meanings with examples and cultural context.',
    phrases: [
      {
        english: "It's raining cats and dogs",
        spanish: "Está lloviendo a cántaros",
        pronunciation: "its réining kats and dogs",
        context: "When it's raining very heavily"
      },
      {
        english: "Break a leg",
        spanish: "Buena suerte (literalmente: rómpete una pierna)",
        pronunciation: "breik a leg",
        context: "Used to wish someone good luck, especially in performing arts"
      },
      {
        english: "Piece of cake",
        spanish: "Pan comido / Muy fácil",
        pronunciation: "pis of keik",
        context: "Something that is very easy to do"
      },
      {
        english: "Hit the nail on the head",
        spanish: "Dar en el clavo",
        pronunciation: "jit da neil on da jed",
        context: "To describe exactly what is causing a situation or problem"
      },
      {
        english: "Once in a blue moon",
        spanish: "De vez en cuando / Muy raramente",
        pronunciation: "wans in a blu mun",
        context: "Very rarely, almost never"
      },
      {
        english: "Cost an arm and a leg",
        spanish: "Costar un ojo de la cara",
        pronunciation: "kost an arm and a leg",
        context: "Something that is very expensive"
      },
      {
        english: "Bite off more than you can chew",
        spanish: "Abarcar más de lo que puedes",
        pronunciation: "bait of mor dan yu kan chu",
        context: "Take on more responsibility than you can handle"
      },
      {
        english: "Kill two birds with one stone",
        spanish: "Matar dos pájaros de un tiro",
        pronunciation: "kil tu berds wiz wan stoun",
        context: "Solve two problems with one action"
      },
      {
        english: "The ball is in your court",
        spanish: "La pelota está en tu tejado",
        pronunciation: "da bol is in yor kort",
        context: "It's your turn to take action or make a decision"
      },
      {
        english: "Speak of the devil",
        spanish: "Hablando del rey de Roma",
        pronunciation: "spik of da devil",
        context: "Said when someone appears right when you're talking about them"
      }
    ],
    dialogues: [
      {
        title: "Using Idioms in Conversation",
        exchanges: [
          {
            speaker: "A",
            english: "How was the exam?",
            spanish: "¿Qué tal el examen?",
            pronunciation: "jau wos di egzám?"
          },
          {
            speaker: "B",
            english: "It was a piece of cake!",
            spanish: "¡Fue pan comido!",
            pronunciation: "it wos a pis of keik!"
          },
          {
            speaker: "A",
            english: "Break a leg in your presentation tomorrow!",
            spanish: "¡Buena suerte en tu presentación mañana!",
            pronunciation: "breik a leg in yor presentéishon tumórou!"
          }
        ]
      },
      {
        title: "Weather and Costs",
        exchanges: [
          {
            speaker: "A",
            english: "I wanted to go shopping but it's raining cats and dogs",
            spanish: "Quería ir de compras pero está lloviendo a cántaros",
            pronunciation: "ai wónted tu gou shóping bat its réining kats and dogs"
          },
          {
            speaker: "B",
            english: "Well, that new store costs an arm and a leg anyway",
            spanish: "Bueno, esa tienda nueva cuesta un ojo de la cara de todos modos",
            pronunciation: "wel, dat niu stor kosts an arm and a leg éniwei"
          }
        ]
      }
    ],
    exercises: [
      {
        id: "idiom1",
        type: "multiple-choice",
        question: "What does 'it's raining cats and dogs' mean?",
        options: [
          "It's raining very heavily",
          "Pets are falling from the sky",
          "It's drizzling",
          "The weather is nice"
        ],
        correctAnswer: "It's raining very heavily",
        explanation: "This idiom means it's raining very heavily, not literally that cats and dogs are falling from the sky!",
        category: "idioms"
      },
      {
        id: "idiom2",
        type: "multiple-choice",
        question: "If something is 'a piece of cake', it is...",
        options: [
          "Very easy",
          "Very difficult",
          "Very sweet",
          "Very expensive"
        ],
        correctAnswer: "Very easy",
        explanation: "'A piece of cake' means something is very easy to do.",
        category: "idioms"
      }
    ]
  },
  {
    id: 'restaurant',
    icon: 'Utensils',
    title: 'At a Restaurant',
    description: 'Learn how to order food, ask for recommendations, and handle common restaurant situations.',
    phrases: [
      {
        english: "I'd like to make a reservation for tonight",
        spanish: "Me gustaría hacer una reserva para esta noche",
        pronunciation: "Aid laik tu meik a réservéishon for tunáit",
        context: "Making a reservation"
      },
      {
        english: "Do you have any vegetarian options?",
        spanish: "¿Tienen opciones vegetarianas?",
        pronunciation: "Du yu jav eni véyetérian ópshons?",
        context: "Asking about dietary options"
      },
      {
        english: "Could I see the menu, please?",
        spanish: "¿Podría ver el menú, por favor?",
        pronunciation: "Kud ai si da méniu, plis?",
        context: "Requesting the menu"
      },
      {
        english: "I'll have the chicken with rice",
        spanish: "Tomaré el pollo con arroz",
        pronunciation: "Ail jav da chíken wiz rais",
        context: "Ordering food"
      },
      {
        english: "Could we get the bill, please?",
        spanish: "¿Nos podría traer la cuenta, por favor?",
        pronunciation: "Kud wi get da bil, plis?",
        context: "Asking for the bill"
      },
      {
        english: "Could we split the bill?",
        spanish: "¿Podríamos dividir la cuenta?",
        pronunciation: "Kud wi split da bil?",
        context: "Splitting the bill"
      }
    ],
    dialogues: [
      {
        title: "Making a Reservation",
        exchanges: [
          {
            speaker: "A",
            english: "Hi, I'd like to make a reservation for tonight",
            spanish: "Hola, me gustaría hacer una reserva para esta noche",
            pronunciation: "Jai, aid laik tu meik a réservéishon for tunáit"
          },
          {
            speaker: "B",
            english: "Sure, for how many people?",
            spanish: "Claro, ¿para cuántas personas?",
            pronunciation: "Shur, for jau meni pípl?"
          },
          {
            speaker: "A",
            english: "For four people at 8 PM",
            spanish: "Para cuatro personas a las 8 PM",
            pronunciation: "For for pípl at éit pi em"
          }
        ]
      },
      {
        title: "Ordering Food",
        exchanges: [
          {
            speaker: "A",
            english: "Are you ready to order?",
            spanish: "¿Están listos para ordenar?",
            pronunciation: "Ar yu rédi tu órder?"
          },
          {
            speaker: "B",
            english: "Yes, what's today's special?",
            spanish: "Sí, ¿cuál es el especial de hoy?",
            pronunciation: "Yes, wots tudéis spéshal?"
          },
          {
            speaker: "A",
            english: "Today we have grilled salmon with vegetables",
            spanish: "Hoy tenemos salmón a la parrilla con verduras",
            pronunciation: "Tudéi wi jav grild sámon wiz véyetabls"
          }
        ]
      }
    ],
    exercises: [
      {
        id: "rest1",
        type: "multiple-choice",
        question: "How would you ask for the bill in a restaurant?",
        options: [
          "Could we get the bill, please?",
          "Where is the bill?",
          "I want the bill now",
          "Give me the bill"
        ],
        correctAnswer: "Could we get the bill, please?",
        explanation: "The most polite way to ask for the bill is 'Could we get the bill, please?'",
        category: "restaurant"
      },
      {
        id: "rest2",
        type: "fill-blank",
        question: "Complete the sentence: 'I'd like to make a _____ for tonight'",
        correctAnswer: "reservation",
        explanation: "When you want to book a table at a restaurant, you make a 'reservation'",
        category: "restaurant"
      }
    ]
  },
  {
    id: 'bar',
    icon: 'Beer',
    title: 'At a Bar',
    description: 'Learn how to order drinks, start casual conversations, and socialize at a bar.',
    phrases: [
      {
        english: "What's on tap?",
        spanish: "¿Qué cervezas de barril tienen?",
        pronunciation: "Wots on tap?",
        context: "Asking about draft beers"
      },
      {
        english: "I'll have a pint of lager",
        spanish: "Tomaré una pinta de cerveza rubia",
        pronunciation: "Ail jav a paint of láger",
        context: "Ordering a beer"
      },
      {
        english: "Do you serve food here?",
        spanish: "¿Sirven comida aquí?",
        pronunciation: "Du yu serv fud jir?",
        context: "Asking about food"
      },
      {
        english: "What time is last call?",
        spanish: "¿A qué hora es la última ronda?",
        pronunciation: "Wot taim is last kol?",
        context: "Asking about closing time"
      }
    ],
    dialogues: [
      {
        title: "Ordering Drinks",
        exchanges: [
          {
            speaker: "A",
            english: "What can I get you?",
            spanish: "¿Qué te sirvo?",
            pronunciation: "Wot kan ai get yu?"
          },
          {
            speaker: "B",
            english: "What beers do you recommend?",
            spanish: "¿Qué cervezas recomiendas?",
            pronunciation: "Wot birs du yu rekómend?"
          },
          {
            speaker: "A",
            english: "Our local IPA is very popular",
            spanish: "Nuestra IPA local es muy popular",
            pronunciation: "Aur lókal ai pi ei is véri pópular"
          }
        ]
      }
    ],
    exercises: [
      {
        id: "bar1",
        type: "multiple-choice",
        question: "How would you ask about available draft beers?",
        options: [
          "What's on tap?",
          "Where are the beers?",
          "Give me a beer",
          "I need beer"
        ],
        correctAnswer: "What's on tap?",
        explanation: "'What's on tap?' is the common way to ask about draft beers",
        category: "bar"
      }
    ]
  },
  {
    id: 'work-meeting',
    icon: 'Briefcase',
    title: 'At a Work Meeting',
    description: 'Learn how to participate in work meetings, discuss projects, and use technical terms.',
    phrases: [
      {
        english: "Could you explain the code structure?",
        spanish: "¿Podrías explicar la estructura del código?",
        pronunciation: "Kud yu ekspléin da koud strákcher?",
        context: "Discussing code"
      },
      {
        english: "I've found a bug in the main branch",
        spanish: "He encontrado un error en la rama principal",
        pronunciation: "Aiv faund a bag in da mein branch",
        context: "Reporting issues"
      },
      {
        english: "Let me share my screen",
        spanish: "Déjame compartir mi pantalla",
        pronunciation: "Let mi shér mai skrin",
        context: "Screen sharing"
      },
      {
        english: "What's the status of the project?",
        spanish: "¿Cuál es el estado del proyecto?",
        pronunciation: "Wots da stéitas of da próyect?",
        context: "Project updates"
      },
      {
        english: "I suggest we refactor this component",
        spanish: "Sugiero que refactoricemos este componente",
        pronunciation: "Ai sáyest wi rifáctor dis kompónent",
        context: "Making suggestions"
      }
    ],
    dialogues: [
      {
        title: "Code Review",
        exchanges: [
          {
            speaker: "A",
            english: "I've reviewed your pull request",
            spanish: "He revisado tu pull request",
            pronunciation: "Aiv rivíud yor pul rikuést"
          },
          {
            speaker: "B",
            english: "Did you find any issues?",
            spanish: "¿Encontraste algún problema?",
            pronunciation: "Did yu faind eni íshus?"
          },
          {
            speaker: "A",
            english: "Yes, there's a memory leak in the main function",
            spanish: "Sí, hay una fuga de memoria en la función principal",
            pronunciation: "Yes, ders a mémori lik in da mein fánkshon"
          }
        ]
      },
      {
        title: "Sprint Planning",
        exchanges: [
          {
            speaker: "A",
            english: "What's your estimate for this task?",
            spanish: "¿Cuál es tu estimación para esta tarea?",
            pronunciation: "Wots yor éstimit for dis task?"
          },
          {
            speaker: "B",
            english: "I think it will take about three story points",
            spanish: "Creo que tomará unos tres puntos de historia",
            pronunciation: "Ai zink it wil teik abáut zri stóri points"
          }
        ]
      }
    ],
    exercises: [
      {
        id: "work1",
        type: "multiple-choice",
        question: "How would you ask about project progress?",
        options: [
          "What's the status of the project?",
          "Where is the project?",
          "When is the project?",
          "Who is the project?"
        ],
        correctAnswer: "What's the status of the project?",
        explanation: "To ask about progress, use 'What's the status of the project?'",
        category: "work-meeting"
      }
    ]
  },
  {
    id: 'supermarket',
    icon: 'ShoppingCart',
    title: 'At the Supermarket',
    description: 'Learn how to ask for products, read labels, and interact with staff at a supermarket.',
    phrases: [
      {
        english: "Where can I find the dairy products?",
        spanish: "¿Dónde puedo encontrar los lácteos?",
        pronunciation: "Wer kan ai faind da déri pródakts?",
        context: "Finding products"
      },
      {
        english: "Is this product gluten-free?",
        spanish: "¿Este producto es libre de gluten?",
        pronunciation: "Is dis próduct glúten-fri?",
        context: "Reading labels"
      },
      {
        english: "Do you have any organic vegetables?",
        spanish: "¿Tienen verduras orgánicas?",
        pronunciation: "Du yu jav eni orgánik véyetabls?",
        context: "Asking about organic products"
      },
      {
        english: "What's on sale this week?",
        spanish: "¿Qué está en oferta esta semana?",
        pronunciation: "Wots on seil dis wik?",
        context: "Asking about promotions"
      }
    ],
    dialogues: [
      {
        title: "Asking for Help",
        exchanges: [
          {
            speaker: "A",
            english: "Excuse me, I can't find the olive oil",
            spanish: "Disculpe, no encuentro el aceite de oliva",
            pronunciation: "Ekskíus mi, ai kant faind di óliv oil"
          },
          {
            speaker: "B",
            english: "It's in aisle 5, next to the vinegar",
            spanish: "Está en el pasillo 5, junto al vinagre",
            pronunciation: "Its in áil faiv, nekst tu da vínegar"
          }
        ]
      }
    ],
    exercises: [
      {
        id: "super1",
        type: "multiple-choice",
        question: "How would you ask about product location?",
        options: [
          "Where can I find...?",
          "Give me...",
          "I want...",
          "You have..."
        ],
        correctAnswer: "Where can I find...?",
        explanation: "'Where can I find...?' is the most polite way to ask for product location",
        category: "supermarket"
      }
    ]
  },
  {
    id: 'doctor',
    icon: 'Stethoscope',
    title: 'At the Doctor',
    description: 'Learn how to describe symptoms, understand medical instructions, and communicate with healthcare providers.',
    phrases: [
      {
        english: "I have a sore throat",
        spanish: "Me duele la garganta",
        pronunciation: "Ai jav a sor zrot",
        context: "Describing symptoms"
      },
      {
        english: "How often should I take this medicine?",
        spanish: "¿Cada cuánto debo tomar esta medicina?",
        pronunciation: "Jau óften shud ai teik dis médisin?",
        context: "Understanding medication"
      },
      {
        english: "I'm allergic to penicillin",
        spanish: "Soy alérgico a la penicilina",
        pronunciation: "Aim aléryik tu penisílin",
        context: "Medical history"
      }
    ],
    dialogues: [
      {
        title: "Describing Symptoms",
        exchanges: [
          {
            speaker: "A",
            english: "What brings you in today?",
            spanish: "¿Qué le trae por aquí hoy?",
            pronunciation: "Wot brings yu in tudéi?"
          },
          {
            speaker: "B",
            english: "I've had a fever and headache for two days",
            spanish: "He tenido fiebre y dolor de cabeza por dos días",
            pronunciation: "Aiv jad a fíver and jédek for tu deis"
          }
        ]
      }
    ],
    exercises: [
      {
        id: "doc1",
        type: "multiple-choice",
        question: "How would you tell the doctor about pain?",
        options: [
          "I have a pain in my...",
          "Pain here",
          "It hurts",
          "Bad feeling"
        ],
        correctAnswer: "I have a pain in my...",
        explanation: "'I have a pain in my...' is the clearest way to describe pain location",
        category: "doctor"
      }
    ]
  },
  {
    id: 'love',
    icon: 'Heart',
    title: 'Talking About Love',
    description: 'Learn how to express feelings, talk about relationships, and have romantic conversations.',
    phrases: [
      {
        english: "I really like you",
        spanish: "Me gustas mucho",
        pronunciation: "Ai ríli laik yu",
        context: "Expressing feelings"
      },
      {
        english: "Would you like to go out with me?",
        spanish: "¿Te gustaría salir conmigo?",
        pronunciation: "Wud yu laik tu gou áut wiz mi?",
        context: "Asking someone out"
      },
      {
        english: "I've been thinking about you",
        spanish: "He estado pensando en ti",
        pronunciation: "Aiv bin zínking abáut yu",
        context: "Expressing interest"
      },
      {
        english: "Let's talk about our future together",
        spanish: "Hablemos sobre nuestro futuro juntos",
        pronunciation: "Lets tok abáut aur fíucher tugéder",
        context: "Discussing future plans"
      }
    ],
    dialogues: [
      {
        title: "First Date",
        exchanges: [
          {
            speaker: "A",
            english: "I had a really great time tonight",
            spanish: "La pasé muy bien esta noche",
            pronunciation: "Ai jad a ríli greit taim tunáit"
          },
          {
            speaker: "B",
            english: "Me too, we should do this again",
            spanish: "Yo también, deberíamos repetirlo",
            pronunciation: "Mi tu, wi shud du dis agén"
          }
        ]
      }
    ],
    exercises: [
      {
        id: "love1",
        type: "multiple-choice",
        question: "How would you ask someone out on a date?",
        options: [
          "Would you like to go out with me?",
          "You must go out with me",
          "Let's go out now",
          "We should go out"
        ],
        correctAnswer: "Would you like to go out with me?",
        explanation: "'Would you like to...' is a polite way to ask someone out",
        category: "love"
      }
    ]
  },
  {
    id: 'travel',
    icon: 'Plane',
    title: 'Traveling',
    description: 'Learn essential phrases for traveling, booking accommodations, and getting around.',
    phrases: [
      {
        english: "I'd like to book a flight to...",
        spanish: "Me gustaría reservar un vuelo a...",
        pronunciation: "Aid laik tu buk a flait tu...",
        context: "Booking flights"
      },
      {
        english: "Is there a shuttle to the hotel?",
        spanish: "¿Hay un transporte al hotel?",
        pronunciation: "Is der a shátl tu da jótel?",
        context: "Transportation"
      },
      {
        english: "Could you recommend some local attractions?",
        spanish: "¿Podría recomendarme algunas atracciones locales?",
        pronunciation: "Kud yu rekómmend sam lókal atrákshons?",
        context: "Tourism"
      }
    ],
    dialogues: [
      {
        title: "At the Airport",
        exchanges: [
          {
            speaker: "A",
            english: "Which gate is my flight departing from?",
            spanish: "¿De qué puerta sale mi vuelo?",
            pronunciation: "Wich geit is mai flait dipárting from?"
          },
          {
            speaker: "B",
            english: "Your flight departs from Gate B12",
            spanish: "Su vuelo sale de la Puerta B12",
            pronunciation: "Yor flait dipárts from geit bi tuélv"
          }
        ]
      }
    ],
    exercises: [
      {
        id: "travel1",
        type: "fill-blank",
        question: "Complete: 'I'd like to _____ a flight to London'",
        correctAnswer: "book",
        explanation: "We use 'book' when making travel arrangements",
        category: "travel"
      }
    ]
  },
  {
    id: 'hardware-store',
    icon: 'Wrench',
    title: 'At the Hardware Store',
    description: 'Learn how to ask for tools and materials, and explain home repair needs.',
    phrases: [
      {
        english: "I need a hammer and some nails",
        spanish: "Necesito un martillo y algunos clavos",
        pronunciation: "Ai nid a jámer and sam neils",
        context: "Buying tools"
      },
      {
        english: "Where can I find the power tools?",
        spanish: "¿Dónde puedo encontrar las herramientas eléctricas?",
        pronunciation: "Wer kan ai faind da páuer tuls?",
        context: "Finding items"
      },
      {
        english: "What size screwdriver do I need for this?",
        spanish: "¿Qué tamaño de destornillador necesito para esto?",
        pronunciation: "Wot saiz skrúdraiver du ai nid for dis?",
        context: "Tool specifications"
      }
    ],
    dialogues: [
      {
        title: "Getting Help",
        exchanges: [
          {
            speaker: "A",
            english: "I'm looking for materials to fix a leaky pipe",
            spanish: "Busco materiales para arreglar una tubería con fuga",
            pronunciation: "Aim lúking for matírials tu fiks a líki paip"
          },
          {
            speaker: "B",
            english: "What type of pipe is it? PVC or metal?",
            spanish: "¿Qué tipo de tubería es? ¿PVC o metal?",
            pronunciation: "Wot taip of paip is it? Pi vi si or métal?"
          }
        ]
      }
    ],
    exercises: [
      {
        id: "hardware1",
        type: "multiple-choice",
        question: "What would you ask to find specific tools?",
        options: [
          "Where can I find...?",
          "Give me...",
          "I want...",
          "You have..."
        ],
        correctAnswer: "Where can I find...?",
        explanation: "'Where can I find...?' is the most polite way to ask for item locations",
        category: "hardware-store"
      }
    ]
  },
  {
    id: 'bank',
    icon: 'Building2',
    title: 'At the Bank',
    description: 'Learn how to handle banking transactions, open accounts, and discuss financial matters.',
    phrases: [
      {
        english: "I'd like to open a checking account",
        spanish: "Me gustaría abrir una cuenta corriente",
        pronunciation: "Aid laik tu óupen a chéking akáunt",
        context: "Opening accounts"
      },
      {
        english: "What's the exchange rate for euros?",
        spanish: "¿Cuál es el tipo de cambio para euros?",
        pronunciation: "Wots di ekschéinch reit for íuros?",
        context: "Currency exchange"
      },
      {
        english: "I've lost my credit card",
        spanish: "He perdido mi tarjeta de crédito",
        pronunciation: "Aiv lost mai krédit kard",
        context: "Card issues"
      }
    ],
    dialogues: [
      {
        title: "Opening an Account",
        exchanges: [
          {
            speaker: "A",
            english: "What documents do I need to open an account?",
            spanish: "¿Qué documentos necesito para abrir una cuenta?",
            pronunciation: "Wot dókiuments du ai nid tu óupen an akáunt?"
          },
          {
            speaker: "B",
            english: "You'll need your ID and proof of address",
            spanish: "Necesitará su identificación y comprobante de domicilio",
            pronunciation: "Yul nid yor ai di and pruf of adrés"
          }
        ]
      }
    ],
    exercises: [
      {
        id: "bank1",
        type: "multiple-choice",
        question: "How would you report a lost card?",
        options: [
          "I've lost my credit card",
          "My card is gone",
          "No card",
          "Card lost"
        ],
        correctAnswer: "I've lost my credit card",
        explanation: "'I've lost my credit card' is the clearest way to report a lost card",
        category: "bank"
      }
    ]
  }
];