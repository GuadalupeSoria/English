import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Search, Volume2 } from 'lucide-react';

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
    infinitive: "cost", past: "cost", participle: "cost", spanish: "costar",
    pronunciation: { infinitive: "kost", past: "kost", participle: "kost" }
  },
  { 
    infinitive: "cut", past: "cut", participle: "cut", spanish: "cortar",
    pronunciation: { infinitive: "kat", past: "kat", participle: "kat" }
  },
  { 
    infinitive: "do", past: "did", participle: "done", spanish: "hacer",
    pronunciation: { infinitive: "du", past: "did", participle: "dan" }
  },
  { 
    infinitive: "draw", past: "drew", participle: "drawn", spanish: "dibujar",
    pronunciation: { infinitive: "dro", past: "dru", participle: "dron" }
  },
  { 
    infinitive: "drink", past: "drank", participle: "drunk", spanish: "beber",
    pronunciation: { infinitive: "drink", past: "drank", participle: "drank" }
  },
  { 
    infinitive: "drive", past: "drove", participle: "driven", spanish: "conducir",
    pronunciation: { infinitive: "draiv", past: "drouv", participle: "dríven" }
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
    infinitive: "feel", past: "felt", participle: "felt", spanish: "sentir",
    pronunciation: { infinitive: "fil", past: "felt", participle: "felt" }
  },
  { 
    infinitive: "find", past: "found", participle: "found", spanish: "encontrar",
    pronunciation: { infinitive: "faind", past: "faund", participle: "faund" }
  },
  { 
    infinitive: "fly", past: "flew", participle: "flown", spanish: "volar",
    pronunciation: { infinitive: "flai", past: "flu", participle: "floun" }
  },
  { 
    infinitive: "forget", past: "forgot", participle: "forgotten", spanish: "olvidar",
    pronunciation: { infinitive: "forguét", past: "forgót", participle: "forgóten" }
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
    infinitive: "grow", past: "grew", participle: "grown", spanish: "crecer",
    pronunciation: { infinitive: "grou", past: "gru", participle: "groun" }
  },
  { 
    infinitive: "have", past: "had", participle: "had", spanish: "tener",
    pronunciation: { infinitive: "jav", past: "jad", participle: "jad" }
  },
  { 
    infinitive: "hear", past: "heard", participle: "heard", spanish: "oír",
    pronunciation: { infinitive: "jir", past: "jerd", participle: "jerd" }
  },
  { 
    infinitive: "hide", past: "hid", participle: "hidden", spanish: "esconder",
    pronunciation: { infinitive: "jaid", past: "jid", participle: "jíden" }
  },
  { 
    infinitive: "hit", past: "hit", participle: "hit", spanish: "golpear",
    pronunciation: { infinitive: "jit", past: "jit", participle: "jit" }
  },
  { 
    infinitive: "hold", past: "held", participle: "held", spanish: "sostener",
    pronunciation: { infinitive: "jold", past: "jeld", participle: "jeld" }
  },
  { 
    infinitive: "keep", past: "kept", participle: "kept", spanish: "mantener",
    pronunciation: { infinitive: "kip", past: "kept", participle: "kept" }
  },
  { 
    infinitive: "know", past: "knew", participle: "known", spanish: "saber",
    pronunciation: { infinitive: "nou", past: "niu", participle: "noun" }
  },
  { 
    infinitive: "learn", past: "learned/learnt", participle: "learned/learnt", spanish: "aprender",
    pronunciation: { infinitive: "lern", past: "lernd/lernt", participle: "lernd/lernt" }
  },
  { 
    infinitive: "leave", past: "left", participle: "left", spanish: "dejar/salir",
    pronunciation: { infinitive: "liv", past: "left", participle: "left" }
  },
  { 
    infinitive: "let", past: "let", participle: "let", spanish: "permitir",
    pronunciation: { infinitive: "let", past: "let", participle: "let" }
  },
  { 
    infinitive: "lose", past: "lost", participle: "lost", spanish: "perder",
    pronunciation: { infinitive: "lus", past: "lost", participle: "lost" }
  },
  { 
    infinitive: "make", past: "made", participle: "made", spanish: "hacer",
    pronunciation: { infinitive: "meik", past: "meid", participle: "meid" }
  },
  { 
    infinitive: "mean", past: "meant", participle: "meant", spanish: "significar",
    pronunciation: { infinitive: "min", past: "ment", participle: "ment" }
  },
  { 
    infinitive: "meet", past: "met", participle: "met", spanish: "conocer/encontrar",
    pronunciation: { infinitive: "mit", past: "met", participle: "met" }
  },
  { 
    infinitive: "pay", past: "paid", participle: "paid", spanish: "pagar",
    pronunciation: { infinitive: "pei", past: "peid", participle: "peid" }
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
    infinitive: "ride", past: "rode", participle: "ridden", spanish: "montar",
    pronunciation: { infinitive: "raid", past: "roud", participle: "ríden" }
  },
  { 
    infinitive: "ring", past: "rang", participle: "rung", spanish: "sonar/llamar",
    pronunciation: { infinitive: "ring", past: "rang", participle: "rang" }
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
    infinitive: "sell", past: "sold", participle: "sold", spanish: "vender",
    pronunciation: { infinitive: "sel", past: "sould", participle: "sould" }
  },
  { 
    infinitive: "send", past: "sent", participle: "sent", spanish: "enviar",
    pronunciation: { infinitive: "send", past: "sent", participle: "sent" }
  },
  { 
    infinitive: "show", past: "showed", participle: "shown", spanish: "mostrar",
    pronunciation: { infinitive: "shou", past: "shoud", participle: "shoun" }
  },
  { 
    infinitive: "sing", past: "sang", participle: "sung", spanish: "cantar",
    pronunciation: { infinitive: "sing", past: "sang", participle: "sang" }
  },
  { 
    infinitive: "sit", past: "sat", participle: "sat", spanish: "sentarse",
    pronunciation: { infinitive: "sit", past: "sat", participle: "sat" }
  },
  { 
    infinitive: "sleep", past: "slept", participle: "slept", spanish: "dormir",
    pronunciation: { infinitive: "slip", past: "slept", participle: "slept" }
  },
  { 
    infinitive: "speak", past: "spoke", participle: "spoken", spanish: "hablar",
    pronunciation: { infinitive: "spik", past: "spouk", participle: "spóuken" }
  },
  { 
    infinitive: "spend", past: "spent", participle: "spent", spanish: "gastar/pasar tiempo",
    pronunciation: { infinitive: "spend", past: "spent", participle: "spent" }
  },
  { 
    infinitive: "stand", past: "stood", participle: "stood", spanish: "estar de pie",
    pronunciation: { infinitive: "stand", past: "stud", participle: "stud" }
  },
  { 
    infinitive: "steal", past: "stole", participle: "stolen", spanish: "robar",
    pronunciation: { infinitive: "stil", past: "stoul", participle: "stóulen" }
  },
  { 
    infinitive: "swim", past: "swam", participle: "swum", spanish: "nadar",
    pronunciation: { infinitive: "suim", past: "suam", participle: "suam" }
  },
  { 
    infinitive: "take", past: "took", participle: "taken", spanish: "tomar",
    pronunciation: { infinitive: "teik", past: "tuk", participle: "téiken" }
  },
  { 
    infinitive: "teach", past: "taught", participle: "taught", spanish: "enseñar",
    pronunciation: { infinitive: "tich", past: "tot", participle: "tot" }
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
    infinitive: "throw", past: "threw", participle: "thrown", spanish: "lanzar",
    pronunciation: { infinitive: "zrou", past: "zru", participle: "zroun" }
  },
  { 
    infinitive: "understand", past: "understood", participle: "understood", spanish: "entender",
    pronunciation: { infinitive: "anderstánd", past: "anderstúd", participle: "anderstúd" }
  },
  { 
    infinitive: "wake", past: "woke", participle: "woken", spanish: "despertar",
    pronunciation: { infinitive: "ueik", past: "uouk", participle: "uóuken" }
  },
  { 
    infinitive: "wear", past: "wore", participle: "worn", spanish: "vestir/llevar puesto",
    pronunciation: { infinitive: "uer", past: "uor", participle: "uorn" }
  },
  { 
    infinitive: "win", past: "won", participle: "won", spanish: "ganar",
    pronunciation: { infinitive: "uin", past: "uan", participle: "uan" }
  },
  { 
    infinitive: "write", past: "wrote", participle: "written", spanish: "escribir",
    pronunciation: { infinitive: "rait", past: "rout", participle: "ríten" }
  },
  { 
    infinitive: "spread", past: "spread", participle: "spread", spanish: "esparcir/difundir",
    pronunciation: { infinitive: "spred", past: "spred", participle: "spred" }
  },
  // New verbs added
  { 
    infinitive: "arise", past: "arose", participle: "arisen", spanish: "surgir/levantarse",
    pronunciation: { infinitive: "aráis", past: "aróus", participle: "arisen" }
  },
  { 
    infinitive: "bend", past: "bent", participle: "bent", spanish: "doblar/inclinar",
    pronunciation: { infinitive: "bend", past: "bent", participle: "bent" }
  },
  { 
    infinitive: "bet", past: "bet", participle: "bet", spanish: "apostar",
    pronunciation: { infinitive: "bet", past: "bet", participle: "bet" }
  },
  { 
    infinitive: "bite", past: "bit", participle: "bitten", spanish: "morder",
    pronunciation: { infinitive: "bait", past: "bit", participle: "bíten" }
  },
  { 
    infinitive: "blow", past: "blew", participle: "blown", spanish: "soplar",
    pronunciation: { infinitive: "blou", past: "blu", participle: "bloun" }
  },
  { 
    infinitive: "burst", past: "burst", participle: "burst", spanish: "estallar/reventar",
    pronunciation: { infinitive: "berst", past: "berst", participle: "berst" }
  },
  { 
    infinitive: "deal", past: "dealt", participle: "dealt", spanish: "tratar/negociar",
    pronunciation: { infinitive: "dil", past: "delt", participle: "delt" }
  },
  { 
    infinitive: "dig", past: "dug", participle: "dug", spanish: "cavar/excavar",
    pronunciation: { infinitive: "dig", past: "dag", participle: "dag" }
  },
  { 
    infinitive: "feed", past: "fed", participle: "fed", spanish: "alimentar",
    pronunciation: { infinitive: "fid", past: "fed", participle: "fed" }
  },
  { 
    infinitive: "fight", past: "fought", participle: "fought", spanish: "pelear/luchar",
    pronunciation: { infinitive: "fait", past: "fot", participle: "fot" }
  },
  { 
    infinitive: "forbid", past: "forbade", participle: "forbidden", spanish: "prohibir",
    pronunciation: { infinitive: "forbíd", past: "forbéid", participle: "forbíden" }
  },
  { 
    infinitive: "freeze", past: "froze", participle: "frozen", spanish: "congelar",
    pronunciation: { infinitive: "friz", past: "frouz", participle: "fróuzen" }
  },
  { 
    infinitive: "hurt", past: "hurt", participle: "hurt", spanish: "herir/lastimar",
    pronunciation: { infinitive: "jert", past: "jert", participle: "jert" }
  },
  { 
    infinitive: "lay", past: "laid", participle: "laid", spanish: "poner/colocar",
    pronunciation: { infinitive: "lei", past: "leid", participle: "leid" }
  },
  { 
    infinitive: "lend", past: "lent", participle: "lent", spanish: "prestar",
    pronunciation: { infinitive: "lend", past: "lent", participle: "lent" }
  },
  { 
    infinitive: "light", past: "lit", participle: "lit", spanish: "encender/iluminar",
    pronunciation: { infinitive: "lait", past: "lit", participle: "lit" }
  },
  { 
    infinitive: "seek", past: "sought", participle: "sought", spanish: "buscar",
    pronunciation: { infinitive: "sik", past: "sot", participle: "sot" }
  },
  { 
    infinitive: "shine", past: "shone", participle: "shone", spanish: "brillar",
    pronunciation: { infinitive: "shain", past: "shoun", participle: "shoun" }
  },
  { 
    infinitive: "stick", past: "stuck", participle: "stuck", spanish: "pegar/adherir",
    pronunciation: { infinitive: "stik", past: "stak", participle: "stak" }
  },
  { 
    infinitive: "strike", past: "struck", participle: "struck", spanish: "golpear/atacar",
    pronunciation: { infinitive: "straik", past: "strak", participle: "strak" }
  }
];

const IrregularVerbsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVerbs = irregularVerbs.filter(verb =>
    verb.infinitive.toLowerCase().includes(searchTerm.toLowerCase()) ||
    verb.past.toLowerCase().includes(searchTerm.toLowerCase()) ||
    verb.participle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (verb.spanish && verb.spanish.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const playPronunciation = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Irregular Verbs</h1>
        <p className="text-gray-700 mb-8">
          Most common irregular verbs in English. These verbs don't follow the regular pattern of adding "-ed" for past tense and participle forms.
          Click on the speaker icon to hear the pronunciation.
        </p>

        <div className="mb-6 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search verbs in English or Spanish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Base Form (Infinitive)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Past Simple
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Past Participle
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Spanish
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredVerbs.map((verb, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{verb.infinitive}</div>
                          <div className="text-sm text-gray-500 italic">/{verb.pronunciation.infinitive}/</div>
                        </div>
                        <button
                          onClick={() => playPronunciation(verb.infinitive)}
                          className="ml-2 text-primary hover:text-primary-dark"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{verb.past}</div>
                          <div className="text-sm text-gray-500 italic">/{verb.pronunciation.past}/</div>
                        </div>
                        <button
                          onClick={() => playPronunciation(verb.past.split('/')[0])}
                          className="ml-2 text-primary hover:text-primary-dark"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{verb.participle}</div>
                          <div className="text-sm text-gray-500 italic">/{verb.pronunciation.participle}/</div>
                        </div>
                        <button
                          onClick={() => playPronunciation(verb.participle.split('/')[0])}
                          className="ml-2 text-primary hover:text-primary-dark"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {verb.spanish}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IrregularVerbsPage;