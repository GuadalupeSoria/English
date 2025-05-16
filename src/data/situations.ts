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
      },
      {
        english: "It's not rocket science",
        spanish: "No es tan difícil (lit: no es ciencia espacial)",
        pronunciation: "its not róket sáians",
        context: "When something is not as complicated as it seems"
      },
      {
        english: "Beat around the bush",
        spanish: "Irse por las ramas",
        pronunciation: "bit aráund da bush",
        context: "To avoid talking about something directly"
      },
      {
        english: "Pull yourself together",
        spanish: "Recupérate/Contrólate",
        pronunciation: "pul yorself tugéder",
        context: "To calm down and regain composure"
      },
      {
        english: "Under the weather",
        spanish: "Sentirse mal/enfermo",
        pronunciation: "ánder da wéder",
        context: "Feeling sick or unwell"
      },
      {
        english: "Get cold feet",
        spanish: "Acobardarse en el último momento",
        pronunciation: "get kold fit",
        context: "To become nervous about doing something"
      },
      {
        english: "Add fuel to the fire",
        spanish: "Echar leña al fuego",
        pronunciation: "ad fiúel tu da fáier",
        context: "To make a bad situation worse"
      },
      {
        english: "Cut corners",
        spanish: "Tomar atajos/Hacer algo a medias",
        pronunciation: "kat kórners",
        context: "To do something in the easiest or cheapest way"
      },
      {
        english: "Hit the books",
        spanish: "Ponerse a estudiar",
        pronunciation: "jit da buks",
        context: "To study hard"
      },
      {
        english: "Jump on the bandwagon",
        spanish: "Unirse a la moda/tendencia",
        pronunciation: "yamp on da bándwagon",
        context: "To join a popular trend or activity"
      },
      {
        english: "Let the cat out of the bag",
        spanish: "Irse de la lengua/Revelar un secreto",
        pronunciation: "let da kat aut of da bag",
        context: "To reveal a secret accidentally"
      },
      {
        english: "Barking up the wrong tree",
        spanish: "Estar equivocado/Buscar en el lugar equivocado",
        pronunciation: "bárking ap da rong tri",
        context: "To pursue the wrong course of action"
      },
      {
        english: "Take it with a grain of salt",
        spanish: "No tomárselo muy en serio",
        pronunciation: "teik it wiz a grein of solt",
        context: "To not take something too seriously"
      },
      {
        english: "On cloud nine",
        spanish: "Estar en las nubes/Muy feliz",
        pronunciation: "on kláud náin",
        context: "To be extremely happy"
      },
      {
        english: "Steal someone's thunder",
        spanish: "Robar el protagonismo",
        pronunciation: "stil sámwans zánder",
        context: "To take credit for someone else's achievement"
      },
      {
        english: "Put all your eggs in one basket",
        spanish: "Apostarlo todo a una carta",
        pronunciation: "put ol yor egs in wan básket",
        context: "To risk everything on a single venture"
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
      },
      {
        id: "idiom3",
        type: "multiple-choice",
        question: "What does 'under the weather' mean?",
        options: [
          "Feeling sick",
          "Bad weather",
          "Carrying an umbrella",
          "Feeling happy"
        ],
        correctAnswer: "Feeling sick",
        explanation: "'Under the weather' is an idiom meaning to feel ill or unwell",
        category: "idioms"
      },
      {
        id: "idiom4",
        type: "fill-blank",
        question: "Complete: 'Don't _____ around the bush' (avoid the main topic)",
        correctAnswer: "beat",
        explanation: "'Beat around the bush' means to avoid talking about something directly",
        category: "idioms"
      },
      {
        id: "idiom5",
        type: "multiple-choice",
        question: "If something is 'not rocket science', it is...",
        options: [
          "Not complicated",
          "About space",
          "Very difficult",
          "Scientific"
        ],
        correctAnswer: "Not complicated",
        explanation: "'It's not rocket science' means something is not as complicated as it might seem",
        category: "idioms"
      },
      {
        id: "idiom6",
        type: "true-false",
        question: "Being 'on cloud nine' means you are sad.",
        correctAnswer: "false",
        explanation: "Being 'on cloud nine' means you are extremely happy",
        category: "idioms"
      },
      {
        id: "idiom7",
        type: "multiple-choice",
        question: "What does 'hit the books' mean?",
        options: [
          "Study hard",
          "Strike books",
          "Buy books",
          "Read for fun"
        ],
        correctAnswer: "Study hard",
        explanation: "'Hit the books' is an idiom meaning to study intensively",
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
      },
      {
        english: "Is this dish spicy?",
        spanish: "¿Este plato es picante?",
        pronunciation: "Is dis dish spáisi?",
        context: "Asking about food characteristics"
      },
      {
        english: "I'm allergic to nuts",
        spanish: "Soy alérgico a los frutos secos",
        pronunciation: "Aim aléryik tu nats",
        context: "Informing about allergies"
      },
      {
        english: "Could I have this cooked well-done?",
        spanish: "¿Podrían cocinarlo bien hecho?",
        pronunciation: "Kud ai jav dis kukt wel-dan?",
        context: "Specifying cooking preferences"
      },
      {
        english: "What's the soup of the day?",
        spanish: "¿Cuál es la sopa del día?",
        pronunciation: "Wots da sup of da dei?",
        context: "Asking about daily specials"
      },
      {
        english: "Could I get some more water, please?",
        spanish: "¿Podría traerme más agua, por favor?",
        pronunciation: "Kud ai get sam mor wóter, plis?",
        context: "Requesting more drinks"
      },
      {
        english: "Is service included in the bill?",
        spanish: "¿El servicio está incluido en la cuenta?",
        pronunciation: "Is sérvis inklúded in da bil?",
        context: "Asking about service charge"
      },
      {
        english: "Can I get this to go?",
        spanish: "¿Me lo puede poner para llevar?",
        pronunciation: "Kan ai get dis tu gou?",
        context: "Requesting takeaway"
      },
      {
        english: "Does this contain dairy?",
        spanish: "¿Esto contiene lácteos?",
        pronunciation: "Das dis kontéin déri?",
        context: "Asking about ingredients"
      },
      {
        english: "I'd like my steak medium-rare",
        spanish: "Quisiera mi bistec término medio",
        pronunciation: "Aid laik mai steik mídium-rér",
        context: "Specifying meat cooking point"
      },
      {
        english: "Could we get separate checks?",
        spanish: "¿Podrían darnos cuentas separadas?",
        pronunciation: "Kud wi get sépareit checks?",
        context: "Requesting separate bills"
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
      },
      {
        id: "rest3",
        type: "multiple-choice",
        question: "How would you ask if a dish contains dairy?",
        options: [
          "Does this contain dairy?",
          "Is there milk here?",
          "This has dairy?",
          "Tell me about dairy"
        ],
        correctAnswer: "Does this contain dairy?",
        explanation: "The most clear and polite way to ask about dairy content is 'Does this contain dairy?'",
        category: "restaurant"
      },
      {
        id: "rest4",
        type: "true-false",
        question: "This sentence is correct: 'I want separate bills.'",
        correctAnswer: "false",
        explanation: "It's more polite to say 'Could we get separate checks?' or 'Could we have separate bills?'",
        category: "restaurant"
      },
      {
        id: "rest5",
        type: "fill-blank",
        question: "Complete: 'I'd like my steak _____' (cooking point between rare and medium)",
        correctAnswer: "medium-rare",
        explanation: "'Medium-rare' is the cooking point between rare and medium for steaks",
        category: "restaurant"
      },
      {
        id: "rest6",
        type: "multiple-choice",
        question: "How would you ask for more water?",
        options: [
          "Could I get some more water, please?",
          "More water",
          "Water please",
          "I need water now"
        ],
        correctAnswer: "Could I get some more water, please?",
        explanation: "The most polite way to ask for more water is 'Could I get some more water, please?'",
        category: "restaurant"
      },
      {
        id: "rest7",
        type: "multiple-choice",
        question: "What's the polite way to ask for takeaway?",
        options: [
          "Can I get this to go?",
          "Give me this to go",
          "I want takeaway",
          "Pack this"
        ],
        correctAnswer: "Can I get this to go?",
        explanation: "'Can I get this to go?' is the standard polite way to request takeaway food",
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
      },
      {
        english: "What cocktails do you recommend?",
        spanish: "¿Qué cócteles recomiendas?",
        pronunciation: "Wot kóktels du yu rekómend?",
        context: "Asking for cocktail recommendations"
      },
      {
        english: "Make it a double, please",
        spanish: "Póngalo doble, por favor",
        pronunciation: "Meik it a dábl, plis",
        context: "Ordering a double measure"
      },
      {
        english: "Is there a cover charge?",
        spanish: "¿Hay cargo de entrada?",
        pronunciation: "Is der a káver charch?",
        context: "Asking about entry fee"
      },
      {
        english: "Can I start a tab?",
        spanish: "¿Puedo abrir una cuenta?",
        pronunciation: "Kan ai start a tab?",
        context: "Opening a bar tab"
      },
      {
        english: "I'll have what they're having",
        spanish: "Tomaré lo mismo que ellos",
        pronunciation: "Ail jav wot deir jáving",
        context: "Ordering the same drink"
      },
      {
        english: "Could you make it less strong?",
        spanish: "¿Podrías hacerlo menos fuerte?",
        pronunciation: "Kud yu meik it les strong?",
        context: "Adjusting drink strength"
      },
      {
        english: "Do you have any non-alcoholic options?",
        spanish: "¿Tienen opciones sin alcohol?",
        pronunciation: "Du yu jav eni non-alkojólik ópshons?",
        context: "Asking for non-alcoholic drinks"
      },
      {
        english: "What's your signature drink?",
        spanish: "¿Cuál es su bebida especial?",
        pronunciation: "Wots yor sígnacher drink?",
        context: "Asking about specialties"
      },
      {
        english: "Is this seat taken?",
        spanish: "¿Está ocupado este asiento?",
        pronunciation: "Is dis sit téiken?",
        context: "Asking about seating"
      },
      {
        english: "Could I see a drink menu?",
        spanish: "¿Podría ver el menú de bebidas?",
        pronunciation: "Kud ai si a drink méniu?",
        context: "Requesting drink menu"
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
      },
      {
        id: "bar2",
        type: "multiple-choice",
        question: "How would you order a stronger drink?",
        options: [
          "Make it a double, please",
          "I want it stronger",
          "More alcohol",
          "Double it"
        ],
        correctAnswer: "Make it a double, please",
        explanation: "'Make it a double, please' is the standard way to request a double measure",
        category: "bar"
      },
      {
        id: "bar3",
        type: "fill-blank",
        question: "Complete: 'Can I start a _____?' (to open a running bill)",
        correctAnswer: "tab",
        explanation: "A 'tab' is a running bill at a bar that you pay at the end",
        category: "bar"
      },
      {
        id: "bar4",
        type: "multiple-choice",
        question: "How do you ask about the bar's special drink?",
        options: [
          "What's your signature drink?",
          "What's special?",
          "Give me your best",
          "What do you have?"
        ],
        correctAnswer: "What's your signature drink?",
        explanation: "'What's your signature drink?' is the proper way to ask about a bar's specialty",
        category: "bar"
      },
      {
        id: "bar5",
        type: "true-false",
        question: "This is correct: 'I want what they have.'",
        correctAnswer: "false",
        explanation: "The more natural way to say this is 'I'll have what they're having'",
        category: "bar"
      },
      {
        id: "bar6",
        type: "multiple-choice",
        question: "How do you ask about alcohol-free options?",
        options: [
          "Do you have any non-alcoholic options?",
          "No alcohol drinks?",
          "Drinks without alcohol?",
          "Something without alcohol?"
        ],
        correctAnswer: "Do you have any non-alcoholic options?",
        explanation: "'Do you have any non-alcoholic options?' is the most polite and clear way to ask",
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
      },
      {
        english: "Could we schedule a follow-up meeting?",
        spanish: "¿Podríamos programar una reunión de seguimiento?",
        pronunciation: "Kud wi skédiul a fólou-ap míting?",
        context: "Scheduling meetings"
      },
      {
        english: "I'll send you the documentation",
        spanish: "Te enviaré la documentación",
        pronunciation: "Ail send yu da dokiuméntéishon",
        context: "Sharing resources"
      },
      {
        english: "Let's move on to the next point",
        spanish: "Pasemos al siguiente punto",
        pronunciation: "Lets muv on tu da nekst point",
        context: "Managing meeting flow"
      },
      {
        english: "Could you elaborate on that?",
        spanish: "¿Podrías elaborar más sobre eso?",
        pronunciation: "Kud yu iláboreit on dat?",
        context: "Asking for details"
      },
      {
        english: "We need to set a deadline for this",
        spanish: "Necesitamos establecer una fecha límite para esto",
        pronunciation: "Wi nid tu set a dédlain for dis",
        context: "Project planning"
      },
      {
        english: "I'll take care of the testing phase",
        spanish: "Me encargaré de la fase de pruebas",
        pronunciation: "Ail teik ker of da tésting feis",
        context: "Assigning responsibilities"
      },
      {
        english: "Do we have the budget for this?",
        spanish: "¿Tenemos el presupuesto para esto?",
        pronunciation: "Du wi jav da báyet for dis?",
        context: "Budget discussions"
      },
      {
        english: "Let's review the key points",
        spanish: "Repasemos los puntos clave",
        pronunciation: "Lets rivíu da ki points",
        context: "Meeting summary"
      },
      {
        english: "I'd like to raise a concern",
        spanish: "Me gustaría plantear una preocupación",
        pronunciation: "Aid laik tu reis a konsérn",
        context: "Expressing concerns"
      },
      {
        english: "Can you share your screen now?",
        spanish: "¿Puedes compartir tu pantalla ahora?",
        pronunciation: "Kan yu shér yor skrin nau?",
        context: "Technical requests"
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
      },
      {
        id: "work2",
        type: "multiple-choice",
        question: "How would you politely ask for more details?",
        options: [
          "Could you elaborate on that?",
          "Tell me more",
          "I need more information",
          "Explain better"
        ],
        correctAnswer: "Could you elaborate on that?",
        explanation: "'Could you elaborate on that?' is the most professional way to ask for more details",
        category: "work-meeting"
      },
      {
        id: "work3",
        type: "fill-blank",
        question: "Complete: 'We need to set a _____ for this project.'",
        correctAnswer: "deadline",
        explanation: "A 'deadline' is the final date by which something must be completed",
        category: "work-meeting"
      },
      {
        id: "work4",
        type: "true-false",
        question: "This is correct: 'I want to say something about a problem.'",
        correctAnswer: "false",
        explanation: "In a professional context, it's better to say 'I'd like to raise a concern'",
        category: "work-meeting"
      },
      {
        id: "work5",
        type: "multiple-choice",
        question: "How do you suggest moving to the next topic?",
        options: [
          "Let's move on to the next point",
          "Next topic now",
          "We should continue",
          "Go to next"
        ],
        correctAnswer: "Let's move on to the next point",
        explanation: "'Let's move on to the next point' is the professional way to transition topics",
        category: "work-meeting"
      },
      {
        id: "work6",
        type: "multiple-choice",
        question: "How do you volunteer for a task?",
        options: [
          "I'll take care of it",
          "I do it",
          "Give it to me",
          "It's mine"
        ],
        correctAnswer: "I'll take care of it",
        explanation: "'I'll take care of it' is the professional way to volunteer for a task",
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
      },
      {
        english: "Do you have any fresh bread?",
        spanish: "¿Tienen pan fresco?",
        pronunciation: "Du yu jav eni fresh bred?",
        context: "Asking about fresh products"
      },
      {
        english: "Where is the self-checkout?",
        spanish: "¿Dónde está la caja de autoservicio?",
        pronunciation: "Wer is da self-chékaut?",
        context: "Finding checkout"
      },
      {
        english: "Do you accept credit cards?",
        spanish: "¿Aceptan tarjetas de crédito?",
        pronunciation: "Du yu aksépt krédit kards?",
        context: "Payment methods"
      },
      {
        english: "Is this item on sale?",
        spanish: "¿Este artículo está en oferta?",
        pronunciation: "Is dis áitem on seil?",
        context: "Asking about prices"
      },
      {
        english: "Do you have a loyalty card?",
        spanish: "¿Tienen tarjeta de fidelización?",
        pronunciation: "Du yu jav a lóialti kard?",
        context: "Store programs"
      },
      {
        english: "Could I get a rain check?",
        spanish: "¿Me pueden dar un vale para cuando haya stock?",
        pronunciation: "Kud ai get a rein chek?",
        context: "Out of stock items"
      },
      {
        english: "What's the expiration date?",
        spanish: "¿Cuál es la fecha de caducidad?",
        pronunciation: "Wots di ekspairéishon deit?",
        context: "Checking freshness"
      },
      {
        english: "Do you offer home delivery?",
        spanish: "¿Ofrecen entrega a domicilio?",
        pronunciation: "Du yu ófer joum dilíveri?",
        context: "Delivery services"
      },
      {
        english: "Can I return this item?",
        spanish: "¿Puedo devolver este artículo?",
        pronunciation: "Kan ai ritérn dis áitem?",
        context: "Returns policy"
      },
      {
        english: "Where are the shopping baskets?",
        spanish: "¿Dónde están las cestas de la compra?",
        pronunciation: "Wer ar da shóping báskets?",
        context: "Shopping equipment"
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
      },
      {
        id: "super2",
        type: "multiple-choice",
        question: "How do you ask about items on discount?",
        options: [
          "Is this item on sale?",
          "This cheap?",
          "Discount here?",
          "Less money?"
        ],
        correctAnswer: "Is this item on sale?",
        explanation: "'Is this item on sale?' is the proper way to ask if something is discounted",
        category: "supermarket"
      },
      {
        id: "super3",
        type: "fill-blank",
        question: "Complete: 'What's the _____ date?' (asking about when food goes bad)",
        correctAnswer: "expiration",
        explanation: "The 'expiration date' tells you when a product is no longer good to consume",
        category: "supermarket"
      },
      {
        id: "super4",
        type: "multiple-choice",
        question: "How do you ask about delivery service?",
        options: [
          "Do you offer home delivery?",
          "Can you bring to home?",
          "Delivery possible?",
          "You deliver?"
        ],
        correctAnswer: "Do you offer home delivery?",
        explanation: "'Do you offer home delivery?' is the most polite way to ask about delivery services",
        category: "supermarket"
      },
      {
        id: "super5",
        type: "true-false",
        question: "This is correct: 'I want to give back this item.'",
        correctAnswer: "false",
        explanation: "The proper way to ask is 'Can I return this item?'",
        category: "supermarket"
      },
      {
        id: "super6",
        type: "multiple-choice",
        question: "How do you ask for a store discount card?",
        options: [
          "Do you have a loyalty card?",
          "Give me discount card",
          "Where card?",
          "I want card"
        ],
        correctAnswer: "Do you have a loyalty card?",
        explanation: "'Do you have a loyalty card?' is the correct way to ask about store membership programs",
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
      },
      {
        english: "I've been feeling dizzy",
        spanish: "He estado sintiendo mareos",
        pronunciation: "Aiv bin fíling dízi",
        context: "Describing symptoms"
      },
      {
        english: "The pain started two days ago",
        spanish: "El dolor comenzó hace dos días",
        pronunciation: "Da pein stárted tu deis agóu",
        context: "Describing timeline"
      },
      {
        english: "I need to schedule a follow-up appointment",
        spanish: "Necesito programar una cita de seguimiento",
        pronunciation: "Ai nid tu skédiul a fólou-ap apóintment",
        context: "Scheduling appointments"
      },
      {
        english: "Should I avoid any specific foods?",
        spanish: "¿Debo evitar algún alimento específico?",
        pronunciation: "Shud ai avóid eni spesífik fuds?",
        context: "Dietary restrictions"
      },
      {
        english: "Are there any side effects?",
        spanish: "¿Hay algún efecto secundario?",
        pronunciation: "Ar der eni sáid ifécts?",
        context: "Medication information"
      },
      {
        english: "I need to refill my prescription",
        spanish: "Necesito renovar mi receta",
        pronunciation: "Ai nid tu rifíl mai priskrípshon",
        context: "Prescription renewal"
      },
      {
        english: "The pain is getting worse",
        spanish: "El dolor está empeorando",
        pronunciation: "Da pein is géting wors",
        context: "Describing progression"
      },
      {
        english: "I've been having trouble sleeping",
        spanish: "He tenido problemas para dormir",
        pronunciation: "Aiv bin jáving trábol slíping",
        context: "Sleep issues"
      },
      {
        english: "Is this covered by my insurance?",
        spanish: "¿Esto está cubierto por mi seguro?",
        pronunciation: "Is dis káverd bai mai inshúrans?",
        context: "Insurance coverage"
      },
      {
        english: "Do I need any tests?",
        spanish: "¿Necesito algún análisis?",
        pronunciation: "Du ai nid eni tests?",
        context: "Medical tests"
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
      },
      {
        id: "doc2",
        type: "multiple-choice",
        question: "How do you ask about medication side effects?",
        options: [
          "Are there any side effects?",
          "Is medicine bad?",
          "What happens with medicine?",
          "Tell me about problems"
        ],
        correctAnswer: "Are there any side effects?",
        explanation: "'Are there any side effects?' is the proper way to ask about potential medication reactions",
        category: "doctor"
      },
      {
        id: "doc3",
        type: "fill-blank",
        question: "Complete: 'I need to _____ my prescription' (get more medication)",
        correctAnswer: "refill",
        explanation: "'Refill' is the term used when you need to get more of your prescribed medication",
        category: "doctor"
      },
      {
        id: "doc4",
        type: "multiple-choice",
        question: "How do you describe worsening pain?",
        options: [
          "The pain is getting worse",
          "More pain now",
          "Bad pain",
          "Pain increases"
        ],
        correctAnswer: "The pain is getting worse",
        explanation: "'The pain is getting worse' is the clearest way to describe increasing pain",
        category: "doctor"
      },
      {
        id: "doc5",
        type: "true-false",
        question: "This is correct: 'I want another appointment.'",
        correctAnswer: "false",
        explanation: "It's more professional to say 'I need to schedule a follow-up appointment'",
        category: "doctor"
      },
      {
        id: "doc6",
        type: "multiple-choice",
        question: "How do you ask about insurance coverage?",
        options: [
          "Is this covered by my insurance?",
          "Insurance pays?",
          "Do I pay?",
          "Is it free?"
        ],
        correctAnswer: "Is this covered by my insurance?",
        explanation: "'Is this covered by my insurance?' is the professional way to ask about insurance coverage",
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
      },
      {
        english: "You mean the world to me",
        spanish: "Significas todo para mí",
        pronunciation: "Yu min da world tu mi",
        context: "Expressing deep feelings"
      },
      {
        english: "I can't stop thinking about you",
        spanish: "No puedo dejar de pensar en ti",
        pronunciation: "Ai kant stop zínking abáut yu",
        context: "Expressing attraction"
      },
      {
        english: "Would you like to go on a date?",
        spanish: "¿Te gustaría tener una cita?",
        pronunciation: "Wud yu laik tu gou on a deit?",
        context: "Asking someone out"
      },
      {
        english: "I feel butterflies when I'm with you",
        spanish: "Siento mariposas cuando estoy contigo",
        pronunciation: "Ai fil báterflais wen aim wiz yu",
        context: "Describing feelings"
      },
      {
        english: "You make me so happy",
        spanish: "Me haces muy feliz",
        pronunciation: "Yu meik mi sou jápi",
        context: "Expressing happiness"
      },
      {
        english: "I'd love to get to know you better",
        spanish: "Me encantaría conocerte mejor",
        pronunciation: "Aid lav tu get tu nou yu béter",
        context: "Building relationships"
      },
      {
        english: "We have so much in common",
        spanish: "Tenemos tanto en común",
        pronunciation: "Wi jav sou mach in kómon",
        context: "Finding connections"
      },
      {
        english: "I love spending time with you",
        spanish: "Me encanta pasar tiempo contigo",
        pronunciation: "Ai lav spénding taim wiz yu",
        context: "Expressing enjoyment"
      },
      {
        english: "You're very special to me",
        spanish: "Eres muy especial para mí",
        pronunciation: "Yur véri spéshal tu mi",
        context: "Expressing importance"
      },
      {
        english: "I miss you when you're not here",
        spanish: "Te extraño cuando no estás aquí",
        pronunciation: "Ai mis yu wen yur not jir",
        context: "Expressing longing"
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
      },
      {
        id: "love2",
        type: "multiple-choice",
        question: "How do you express deep feelings?",
        options: [
          "You mean the world to me",
          "I like you a lot",
          "You're important",
          "I think of you"
        ],
        correctAnswer: "You mean the world to me",
        explanation: "'You mean the world to me' expresses deep emotional connection",
        category: "love"
      },
      {
        id: "love3",
        type: "fill-blank",
        question: "Complete: 'I feel _____ when I'm with you' (metaphor for excitement)",
        correctAnswer: "butterflies",
        explanation: "'Butterflies' is a common metaphor for feeling nervous excitement around someone you like",
        category: "love"
      },
      {
        id: "love4",
        type: "multiple-choice",
        question: "How do you suggest getting closer?",
        options: [
          "I'd love to get to know you better",
          "Let's be closer",
          "Tell me about you",
          "We should talk more"
        ],
        correctAnswer: "I'd love to get to know you better",
        explanation: "'I'd love to get to know you better' is a polite way to express interest in deepening a relationship",
        category: "love"
      },
      {
        id: "love5",
        type: "true-false",
        question: "This is correct: 'I want to know more about you.'",
        correctAnswer: "false",
        explanation: "A more natural and polite way is 'I'd love to get to know you better'",
        category: "love"
      },
      {
        id: "love6",
        type: "multiple-choice",
        question: "How do you express missing someone?",
        options: [
          "I miss you when you're not here",
          "I want you here",
          "Come back soon",
          "Don't go away"
        ],
        correctAnswer: "I miss you when you're not here",
        explanation: "'I miss you when you're not here' is a sweet way to express longing for someone",
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
      },
      {
        english: "Can I get a window seat?",
        spanish: "¿Puedo tener un asiento de ventana?",
        pronunciation: "Kan ai get a wíndou sit?",
        context: "Seat preferences"
      },
      {
        english: "Where is the baggage claim?",
        spanish: "¿Dónde está la recogida de equipaje?",
        pronunciation: "Wer is da bágich kleim?",
        context: "Airport navigation"
      },
      {
        english: "I'd like to rent a car",
        spanish: "Me gustaría alquilar un coche",
        pronunciation: "Aid laik tu rent a kar",
        context: "Transportation"
      },
      {
        english: "Is breakfast included?",
        spanish: "¿Está incluido el desayuno?",
        pronunciation: "Is brékfast inklúded?",
        context: "Hotel amenities"
      },
      {
        english: "What time is check-out?",
        spanish: "¿A qué hora es el check-out?",
        pronunciation: "Wot taim is chek-aut?",
        context: "Hotel information"
      },
      {
        english: "Do you have a city map?",
        spanish: "¿Tienen un mapa de la ciudad?",
        pronunciation: "Du yu jav a síti map?",
        context: "Tourist information"
      },
      {
        english: "How do I get to the city center?",
        spanish: "¿Cómo llego al centro de la ciudad?",
        pronunciation: "Jau du ai get tu da síti sénter?",
        context: "Directions"
      },
      {
        english: "Is there free Wi-Fi?",
        spanish: "¿Hay Wi-Fi gratis?",
        pronunciation: "Is der fri wái-fái?",
        context: "Connectivity"
      },
      {
        english: "Can I have a late check-out?",
        spanish: "¿Puedo hacer el check-out tarde?",
        pronunciation: "Kan ai jav a leit chek-aut?",
        context: "Hotel requests"
      },
      {
        english: "What's the cancellation policy?",
        spanish: "¿Cuál es la política de cancelación?",
        pronunciation: "Wots da kanseléishon pólisi?",
        context: "Booking terms"
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
      },
      {
        id: "travel2",
        type: "multiple-choice",
        question: "How do you ask about hotel breakfast?",
        options: [
          "Is breakfast included?",
          "You have breakfast?",
          "Where breakfast?",
          "I want breakfast"
        ],
        correctAnswer: "Is breakfast included?",
        explanation: "'Is breakfast included?' is the proper way to ask about meal amenities",
        category: "travel"
      },
      {
        id: "travel3",
        type: "fill-blank",
        question: "Complete: 'What time is _____?' (when asking about leaving the hotel)",
        correctAnswer: "check-out",
        explanation: "'Check-out' is the term used for when you must leave your hotel room",
        category: "travel"
      },
      {
        id: "travel4",
        type: "multiple-choice",
        question: "How do you ask for internet access?",
        options: [
          "Is there free Wi-Fi?",
          "Internet here?",
          "I need internet",
          "Where is internet?"
        ],
        correctAnswer: "Is there free Wi-Fi?",
        explanation: "'Is there free Wi-Fi?' is the common way to ask about internet access",
        category: "travel"
      },
      {
        id: "travel5",
        type: "true-false",
        question: "This is correct: 'I want to stay longer in my room.'",
        correctAnswer: "false",
        explanation: "The proper way to ask is 'Can I have a late check-out?'",
        category: "travel"
      },
      {
        id: "travel6",
        type: "multiple-choice",
        question: "How do you ask about getting to downtown?",
        options: [
          "How do I get to the city center?",
          "Where is center?",
          "I want go downtown",
          "Center direction please"
        ],
        correctAnswer: "How do I get to the city center?",
        explanation: "'How do I get to the city center?' is the clearest way to ask for directions downtown",
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
      },
      {
        english: "Do you sell paint brushes?",
        spanish: "¿Venden brochas?",
        pronunciation: "Du yu sel peint bráshes?",
        context: "Finding tools"
      },
      {
        english: "What size wrench do I need?",
        spanish: "¿Qué tamaño de llave necesito?",
        pronunciation: "Wot saiz rench du ai nid?",
        context: "Tool sizing"
      },
      {
        english: "Do you cut wood to size?",
        spanish: "¿Cortan madera a medida?",
        pronunciation: "Du yu kat wud tu saiz?",
        context: "Services"
      },
      {
        english: "Where are the light bulbs?",
        spanish: "¿Dónde están las bombillas?",
        pronunciation: "Wer ar da láit balbs?",
        context: "Finding items"
      },
      {
        english: "I need some wall anchors",
        spanish: "Necesito algunos tacos de pared",
        pronunciation: "Ai nid sam wol ánkors",
        context: "Hardware items"
      },
      {
        english: "Do you have metric screws?",
        spanish: "¿Tienen tornillos métricos?",
        pronunciation: "Du yu jav métrik skrus?",
        context: "Specific items"
      },
      {
        english: "Can you mix paint colors?",
        spanish: "¿Pueden mezclar colores de pintura?",
        pronunciation: "Kan yu miks peint kálors?",
        context: "Paint services"
      },
      {
        english: "What type of drill bit should I use?",
        spanish: "¿Qué tipo de broca debo usar?",
        pronunciation: "Wot taip of dril bit shud ai yus?",
        context: "Tool advice"
      },
      {
        english: "Do you rent power tools?",
        spanish: "¿Alquilan herramientas eléctricas?",
        pronunciation: "Du yu rent páuer tuls?",
        context: "Tool rental"
      },
      {
        english: "I need some sandpaper",
        spanish: "Necesito papel de lija",
        pronunciation: "Ai nid sam sándpeiper",
        context: "Basic supplies"
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
      },
      {
        id: "hardware2",
        type: "multiple-choice",
        question: "How do you ask about paint mixing services?",
        options: [
          "Can you mix paint colors?",
          "Mix paint?",
          "I want mixed paint",
          "Paint mixing now"
        ],
        correctAnswer: "Can you mix paint colors?",
        explanation: "'Can you mix paint colors?' is the proper way to ask about paint mixing services",
        category: "hardware-store"
      },
      {
        id: "hardware3",
        type: "fill-blank",
        question: "Complete: 'What type of _____ should I use?' (for drilling)",
        correctAnswer: "drill bit",
        explanation: "A 'drill bit' is the tool attachment used for making holes",
        category: "hardware-store"
      },
      {
        id: "hardware4",
        type: "multiple-choice",
        question: "How do you ask about tool rental?",
        options: [
          "Do you rent power tools?",
          "Give me tools",
          "Tools for money?",
          "I want borrow tools"
        ],
        correctAnswer: "Do you rent power tools?",
        explanation: "'Do you rent power tools?' is the correct way to ask about tool rental services",
        category: "hardware-store"
      },
      {
        id: "hardware5",
        type: "true-false",
        question: "This is correct: 'I want wood cut.'",
        correctAnswer: "false",
        explanation: "The proper way to ask is 'Do you cut wood to size?'",
        category: "hardware-store"
      },
      {
        id: "hardware6",
        type: "multiple-choice",
        question: "How do you ask for specific screw types?",
        options: [
          "Do you have metric screws?",
          "Where screws?",
          "I need screws",
          "Metric screws here?"
        ],
        correctAnswer: "Do you have metric screws?",
        explanation: "'Do you have metric screws?' is the clear way to ask for specific screw types",
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
      },
      {
        english: "I'd like to deposit this check",
        spanish: "Me gustaría depositar este cheque",
        pronunciation: "Aid laik tu dipósit dis chek",
        context: "Check transactions"
      },
      {
        english: "How do I set up direct deposit?",
        spanish: "¿Cómo configuro el depósito directo?",
        pronunciation: "Jau du ai set ap dairéct dipósit?",
        context: "Account setup"
      },
      {
        english: "What's my account balance?",
        spanish: "¿Cuál es el saldo de mi cuenta?",
        pronunciation: "Wots mai akáunt bálans?",
        context: "Account information"
      },
      {
        english: "I need to transfer money",
        spanish: "Necesito transferir dinero",
        pronunciation: "Ai nid tu tránsfer máni",
        context: "Money transfers"
      },
      {
        english: "What's the minimum balance required?",
        spanish: "¿Cuál es el saldo mínimo requerido?",
        pronunciation: "Wots da mínimum bálans rikuáired?",
        context: "Account requirements"
      },
      {
        english: "Can I get a bank statement?",
        spanish: "¿Puedo obtener un extracto bancario?",
        pronunciation: "Kan ai get a bank stéitment?",
        context: "Account documents"
      },
      {
        english: "I need to update my information",
        spanish: "Necesito actualizar mi información",
        pronunciation: "Ai nid tu apdéit mai informéishon",
        context: "Account maintenance"
      },
      {
        english: "What are the wire transfer fees?",
        spanish: "¿Cuáles son las comisiones por transferencia bancaria?",
        pronunciation: "Wot ar da wáier tránsfer fis?",
        context: "Banking fees"
      },
      {
        english: "I'd like to apply for a loan",
        spanish: "Me gustaría solicitar un préstamo",
        pronunciation: "Aid laik tu aplái for a loun",
        context: "Loan services"
      },
      {
        english: "How do I reset my online banking password?",
        spanish: "¿Cómo restablezco mi contraseña de banca en línea?",
        pronunciation: "Jau du ai ríset mai onláin bánking páswerd?",
        context: "Online banking"
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
      },
      {
        id: "bank2",
        type: "multiple-choice",
        question: "How do you ask about your money in the bank?",
        options: [
          "What's my account balance?",
          "How much I have?",
          "Money amount?",
          "Tell me my money"
        ],
        correctAnswer: "What's my account balance?",
        explanation: "'What's my account balance?' is the proper way to ask about your account funds",
        category: "bank"
      },
      {
        id: "bank3",
        type: "fill-blank",
        question: "Complete: 'I need to _____ money' (send to another account)",
        correctAnswer: "transfer",
        explanation: "'Transfer' is the term used for moving money between accounts",
        category: "bank"
      },
      {
        id: "bank4",
        type: "multiple-choice",
        question: "How do you request account documentation?",
        options: [
          "Can I get a bank statement?",
          "Give me papers",
          "I want documents",
          "Show my account"
        ],
        correctAnswer: "Can I get a bank statement?",
        explanation: "'Can I get a bank statement?' is the proper way to request account documentation",
        category: "bank"
      },
      {
        id: "bank5",
        type: "true-false",
        question: "This is correct: 'I want money transfer.'",
        correctAnswer: "false",
        explanation: "The proper way to say it is 'I need to transfer money'",
        category: "bank"
      },
      {
        id: "bank6",
        type: "multiple-choice",
        question: "How do you ask about loan services?",
        options: [
          "I'd like to apply for a loan",
          "Give me loan",
          "I need money",
          "Loan possible?"
        ],
        correctAnswer: "I'd like to apply for a loan",
        explanation: "'I'd like to apply for a loan' is the professional way to inquire about loans",
        category: "bank"
      }
    ]
  }
];