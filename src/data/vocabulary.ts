import { VocabularyCategory } from '../types';
import { BookText, Clock, Coffee, Utensils, Palette, Users, Calendar, BeerIcon as NumberIcon, Home, Box, Sparkles, Link } from 'lucide-react';

export const vocabularyCategories: VocabularyCategory[] = [
  {
    id: 'numbers',
    name: 'Numbers',
    icon: 'NumberIcon',
    items: [
      { english: '1', spanish: 'uno', pronunciation: 'uan', category: 'numbers' },
      { english: '2', spanish: 'dos', pronunciation: 'tu', category: 'numbers' },
      { english: '3', spanish: 'tres', pronunciation: 'zri', category: 'numbers' },
      { english: '4', spanish: 'cuatro', pronunciation: 'for', category: 'numbers' },
      { english: '5', spanish: 'cinco', pronunciation: 'faiv', category: 'numbers' },
      { english: '10', spanish: 'diez', pronunciation: 'ten', category: 'numbers' },
      { english: '11', spanish: 'once', pronunciation: 'ilevn', category: 'numbers' },
      { english: '12', spanish: 'doce', pronunciation: 'twelv', category: 'numbers' },
      { english: '20', spanish: 'veinte', pronunciation: 'twenti', category: 'numbers' },
      { english: '30', spanish: 'treinta', pronunciation: 'zerti', category: 'numbers' },
      { english: '100', spanish: 'cien', pronunciation: 'uan jandred', category: 'numbers' },
      { english: '1,000', spanish: 'mil', pronunciation: 'uan zausan', category: 'numbers' },
      { english: '1,000,000', spanish: 'un millón', pronunciation: 'uan milion', category: 'numbers' }
    ]
  },
  {
    id: 'time',
    name: 'Time',
    icon: 'Clock',
    items: [
      { english: 'It\'s 1:15', spanish: 'Es la una y cuarto', pronunciation: 'its uan fifteen / uan fifteen', category: 'time' },
      { english: 'It\'s 2:30', spanish: 'Son las dos y media', pronunciation: 'its tu zerti / tu zerti', category: 'time' },
      { english: 'It\'s 3:45', spanish: 'Son las cuatro menos cuarto', pronunciation: 'its zri forti-faiv / zri forti-faiv', category: 'time' },
      { english: 'morning', spanish: 'mañana', pronunciation: 'morning', category: 'time' },
      { english: 'afternoon', spanish: 'tarde', pronunciation: 'áfternun', category: 'time' },
      { english: 'evening', spanish: 'noche (temprano)', pronunciation: 'ívening', category: 'time' },
      { english: 'night', spanish: 'noche', pronunciation: 'nait', category: 'time' },
      { english: 'minute', spanish: 'minuto', pronunciation: 'minit', category: 'time' },
      { english: 'hour', spanish: 'hora', pronunciation: 'auer', category: 'time' }
    ]
  },
  {
    id: 'months',
    name: 'Months',
    icon: 'Calendar',
    items: [
      { english: 'January', spanish: 'enero', pronunciation: 'yánueri', category: 'months' },
      { english: 'February', spanish: 'febrero', pronunciation: 'fébrueri', category: 'months' },
      { english: 'March', spanish: 'marzo', pronunciation: 'march', category: 'months' },
      { english: 'April', spanish: 'abril', pronunciation: 'éipril', category: 'months' },
      { english: 'May', spanish: 'mayo', pronunciation: 'mei', category: 'months' },
      { english: 'June', spanish: 'junio', pronunciation: 'yun', category: 'months' },
      { english: 'July', spanish: 'julio', pronunciation: 'yuláy', category: 'months' },
      { english: 'August', spanish: 'agosto', pronunciation: 'ógast', category: 'months' },
      { english: 'September', spanish: 'septiembre', pronunciation: 'septémber', category: 'months' },
      { english: 'October', spanish: 'octubre', pronunciation: 'octóuber', category: 'months' },
      { english: 'November', spanish: 'noviembre', pronunciation: 'novémber', category: 'months' },
      { english: 'December', spanish: 'diciembre', pronunciation: 'dicémber', category: 'months' }
    ]
  },
  {
    id: 'family',
    name: 'Family',
    icon: 'Users',
    items: [
      { english: 'mother', spanish: 'madre', pronunciation: 'moder', category: 'family' },
      { english: 'father', spanish: 'padre', pronunciation: 'fader', category: 'family' },
      { english: 'sister', spanish: 'hermana', pronunciation: 'sister', category: 'family' },
      { english: 'brother', spanish: 'hermano', pronunciation: 'broder', category: 'family' },
      { english: 'son', spanish: 'hijo', pronunciation: 'san', category: 'family' },
      { english: 'daughter', spanish: 'hija', pronunciation: 'dóter', category: 'family' },
      { english: 'grandfather', spanish: 'abuelo', pronunciation: 'grándfather', category: 'family' },
      { english: 'grandmother', spanish: 'abuela', pronunciation: 'grándmother', category: 'family' },
      { english: 'uncle', spanish: 'tío', pronunciation: 'ankl', category: 'family' },
      { english: 'aunt', spanish: 'tía', pronunciation: 'ant', category: 'family' },
      { english: 'cousin', spanish: 'primo/a', pronunciation: 'kazn', category: 'family' }
    ]
  },
  {
    id: 'colors',
    name: 'Colors',
    icon: 'Palette',
    items: [
      { english: 'red', spanish: 'rojo', pronunciation: 'red', category: 'colors' },
      { english: 'blue', spanish: 'azul', pronunciation: 'blu', category: 'colors' },
      { english: 'green', spanish: 'verde', pronunciation: 'grin', category: 'colors' },
      { english: 'yellow', spanish: 'amarillo', pronunciation: 'yélou', category: 'colors' },
      { english: 'orange', spanish: 'naranja', pronunciation: 'óranch', category: 'colors' },
      { english: 'purple', spanish: 'morado/púrpura', pronunciation: 'pérpl', category: 'colors' },
      { english: 'pink', spanish: 'rosa', pronunciation: 'pink', category: 'colors' },
      { english: 'black', spanish: 'negro', pronunciation: 'blak', category: 'colors' },
      { english: 'white', spanish: 'blanco', pronunciation: 'wait', category: 'colors' },
      { english: 'gray', spanish: 'gris', pronunciation: 'grei', category: 'colors' },
      { english: 'brown', spanish: 'marrón/café', pronunciation: 'braun', category: 'colors' }
    ]
  },
  {
    id: 'food',
    name: 'Food',
    icon: 'Utensils',
    items: [
      { english: 'apple', spanish: 'manzana', pronunciation: 'ápl', category: 'food' },
      { english: 'banana', spanish: 'plátano/banana', pronunciation: 'banána', category: 'food' },
      { english: 'orange', spanish: 'naranja', pronunciation: 'óranch', category: 'food' },
      { english: 'bread', spanish: 'pan', pronunciation: 'bred', category: 'food' },
      { english: 'egg', spanish: 'huevo', pronunciation: 'eg', category: 'food' },
      { english: 'cheese', spanish: 'queso', pronunciation: 'chis', category: 'food' },
      { english: 'meat', spanish: 'carne', pronunciation: 'mit', category: 'food' },
      { english: 'chicken', spanish: 'pollo', pronunciation: 'chíken', category: 'food' },
      { english: 'fish', spanish: 'pescado', pronunciation: 'fish', category: 'food' },
      { english: 'vegetable', spanish: 'verdura', pronunciation: 'védchtabl', category: 'food' },
      { english: 'potato', spanish: 'patata/papa', pronunciation: 'potéito', category: 'food' },
      { english: 'tomato', spanish: 'tomate', pronunciation: 'tomáto', category: 'food' },
      { english: 'carrot', spanish: 'zanahoria', pronunciation: 'károt', category: 'food' },
      { english: 'onion', spanish: 'cebolla', pronunciation: 'ánion', category: 'food' }
    ]
  },
  {
    id: 'drinks',
    name: 'Drinks',
    icon: 'Coffee',
    items: [
      { english: 'water', spanish: 'agua', pronunciation: 'wóter', category: 'drinks' },
      { english: 'coffee', spanish: 'café', pronunciation: 'kófi', category: 'drinks' },
      { english: 'tea', spanish: 'té', pronunciation: 'ti', category: 'drinks' },
      { english: 'milk', spanish: 'leche', pronunciation: 'milk', category: 'drinks' },
      { english: 'juice', spanish: 'zumo/jugo', pronunciation: 'yus', category: 'drinks' },
      { english: 'soda', spanish: 'refresco/gaseosa', pronunciation: 'sóuda', category: 'drinks' },
      { english: 'beer', spanish: 'cerveza', pronunciation: 'bír', category: 'drinks' },
      { english: 'wine', spanish: 'vino', pronunciation: 'wáin', category: 'drinks' }
    ]
  },
  {
    id: 'days',
    name: 'Days',
    icon: 'BookText',
    items: [
      { english: 'Monday', spanish: 'lunes', pronunciation: 'mándei', category: 'days' },
      { english: 'Tuesday', spanish: 'martes', pronunciation: 'túsdei', category: 'days' },
      { english: 'Wednesday', spanish: 'miércoles', pronunciation: 'wénsdei', category: 'days' },
      { english: 'Thursday', spanish: 'jueves', pronunciation: 'zérsdei', category: 'days' },
      { english: 'Friday', spanish: 'viernes', pronunciation: 'fráidei', category: 'days' },
      { english: 'Saturday', spanish: 'sábado', pronunciation: 'sáterdei', category: 'days' },
      { english: 'Sunday', spanish: 'domingo', pronunciation: 'sándei', category: 'days' },
      { english: 'week', spanish: 'semana', pronunciation: 'wik', category: 'days' },
      { english: 'weekend', spanish: 'fin de semana', pronunciation: 'wikénd', category: 'days' }
    ]
  },
  {
    id: 'rooms',
    name: 'Rooms',
    icon: 'Home',
    items: [
      { english: 'living room', spanish: 'sala de estar', pronunciation: 'líving rum', category: 'rooms' },
      { english: 'kitchen', spanish: 'cocina', pronunciation: 'kíchen', category: 'rooms' },
      { english: 'bedroom', spanish: 'dormitorio/habitación', pronunciation: 'bédrum', category: 'rooms' },
      { english: 'bathroom', spanish: 'baño', pronunciation: 'bázrum', category: 'rooms' },
      { english: 'dining room', spanish: 'comedor', pronunciation: 'dáining rum', category: 'rooms' },
      { english: 'garage', spanish: 'garaje', pronunciation: 'garásh', category: 'rooms' },
      { english: 'basement', spanish: 'sótano', pronunciation: 'béisment', category: 'rooms' },
      { english: 'attic', spanish: 'ático', pronunciation: 'átik', category: 'rooms' },
      { english: 'hallway', spanish: 'pasillo', pronunciation: 'jólwei', category: 'rooms' },
      { english: 'laundry room', spanish: 'lavadero/cuarto de lavado', pronunciation: 'lóndri rum', category: 'rooms' },
      { english: 'study', spanish: 'estudio', pronunciation: 'stádi', category: 'rooms' },
      { english: 'closet', spanish: 'armario', pronunciation: 'klózet', category: 'rooms' }
    ]
  },
  {
    id: 'objects',
    name: 'Everyday Objects',
    icon: 'Box',
    items: [
      { english: 'table', spanish: 'mesa', pronunciation: 'téibl', category: 'objects' },
      { english: 'chair', spanish: 'silla', pronunciation: 'cher', category: 'objects' },
      { english: 'bed', spanish: 'cama', pronunciation: 'bed', category: 'objects' },
      { english: 'lamp', spanish: 'lámpara', pronunciation: 'lamp', category: 'objects' },
      { english: 'mirror', spanish: 'espejo', pronunciation: 'míror', category: 'objects' },
      { english: 'clock', spanish: 'reloj', pronunciation: 'klok', category: 'objects' },
      { english: 'phone', spanish: 'teléfono', pronunciation: 'foun', category: 'objects' },
      { english: 'computer', spanish: 'computadora/ordenador', pronunciation: 'kompíuter', category: 'objects' },
      { english: 'television', spanish: 'televisión', pronunciation: 'télevishon', category: 'objects' },
      { english: 'refrigerator', spanish: 'refrigerador/nevera', pronunciation: 'refrídyereitor', category: 'objects' },
      { english: 'stove', spanish: 'estufa/cocina', pronunciation: 'stouv', category: 'objects' },
      { english: 'microwave', spanish: 'microondas', pronunciation: 'máikroweiv', category: 'objects' },
      { english: 'dishwasher', spanish: 'lavavajillas', pronunciation: 'díshwosher', category: 'objects' },
      { english: 'washing machine', spanish: 'lavadora', pronunciation: 'wóshing mashín', category: 'objects' },
      { english: 'dryer', spanish: 'secadora', pronunciation: 'dráier', category: 'objects' },
      { english: 'vacuum cleaner', spanish: 'aspiradora', pronunciation: 'vákium klíner', category: 'objects' },
      { english: 'iron', spanish: 'plancha', pronunciation: 'áiern', category: 'objects' },
      { english: 'toaster', spanish: 'tostadora', pronunciation: 'tóuster', category: 'objects' },
      { english: 'blender', spanish: 'licuadora/batidora', pronunciation: 'blénder', category: 'objects' },
      { english: 'curtains', spanish: 'cortinas', pronunciation: 'kértens', category: 'objects' },
      { english: 'pillow', spanish: 'almohada', pronunciation: 'pílou', category: 'objects' },
      { english: 'blanket', spanish: 'manta/cobija', pronunciation: 'blánket', category: 'objects' },
      { english: 'towel', spanish: 'toalla', pronunciation: 'táuel', category: 'objects' },
      { english: 'soap', spanish: 'jabón', pronunciation: 'soup', category: 'objects' },
      { english: 'toothbrush', spanish: 'cepillo de dientes', pronunciation: 'túzbrash', category: 'objects' }
    ]
  },
  {
    id: 'phrasal-verbs',
    name: 'Phrasal Verbs',
    icon: 'Sparkles',
    items: [
      { english: 'break down', spanish: 'averiarse/desglosar', pronunciation: 'breik daun', category: 'phrasal-verbs', example: 'My car broke down on the highway' },
      { english: 'bring up', spanish: 'mencionar/criar', pronunciation: 'bring ap', category: 'phrasal-verbs', example: 'Don\'t bring up that topic again' },
      { english: 'call off', spanish: 'cancelar', pronunciation: 'kol of', category: 'phrasal-verbs', example: 'They called off the meeting' },
      { english: 'carry out', spanish: 'realizar/llevar a cabo', pronunciation: 'kári aut', category: 'phrasal-verbs', example: 'We need to carry out this plan' },
      { english: 'come across', spanish: 'encontrarse con/dar la impresión', pronunciation: 'kam akrós', category: 'phrasal-verbs', example: 'I came across an old photo' },
      { english: 'figure out', spanish: 'resolver/entender', pronunciation: 'fíguer aut', category: 'phrasal-verbs', example: 'I can\'t figure out this problem' },
      { english: 'get along', spanish: 'llevarse bien', pronunciation: 'guet alóng', category: 'phrasal-verbs', example: 'They get along very well' },
      { english: 'give up', spanish: 'rendirse', pronunciation: 'guiv ap', category: 'phrasal-verbs', example: 'Never give up on your dreams' },
      { english: 'look after', spanish: 'cuidar', pronunciation: 'luk áfter', category: 'phrasal-verbs', example: 'Can you look after my dog?' },
      { english: 'look for', spanish: 'buscar', pronunciation: 'luk for', category: 'phrasal-verbs', example: 'I\'m looking for my keys' },
      { english: 'make up', spanish: 'inventar/reconciliarse', pronunciation: 'meik ap', category: 'phrasal-verbs', example: 'They made up after the fight' },
      { english: 'pick up', spanish: 'recoger', pronunciation: 'pik ap', category: 'phrasal-verbs', example: 'I\'ll pick up the kids from school' },
      { english: 'put off', spanish: 'posponer', pronunciation: 'put of', category: 'phrasal-verbs', example: 'Don\'t put off until tomorrow what you can do today' },
      { english: 'run into', spanish: 'encontrarse con (por casualidad)', pronunciation: 'ran intu', category: 'phrasal-verbs', example: 'I ran into an old friend' },
      { english: 'set up', spanish: 'establecer/instalar', pronunciation: 'set ap', category: 'phrasal-verbs', example: 'Let me help you set up your new phone' },
      { english: 'show up', spanish: 'aparecer', pronunciation: 'shou ap', category: 'phrasal-verbs', example: 'He didn\'t show up for the meeting' },
      { english: 'take off', spanish: 'despegar/quitarse', pronunciation: 'teik of', category: 'phrasal-verbs', example: 'The plane is about to take off' },
      { english: 'turn down', spanish: 'rechazar/bajar (volumen)', pronunciation: 'tern daun', category: 'phrasal-verbs', example: 'She turned down the job offer' },
      { english: 'work out', spanish: 'ejercitarse/resolver', pronunciation: 'werk aut', category: 'phrasal-verbs', example: 'I work out every morning' },
      { english: 'write down', spanish: 'anotar', pronunciation: 'rait daun', category: 'phrasal-verbs', example: 'Write down my phone number' }
    ]
  },
  {
    id: 'verb-noun',
    name: 'Common Verb + Noun',
    icon: 'Link',
    items: [
      { english: 'make a decision', spanish: 'tomar una decisión', pronunciation: 'meik a disíshon', category: 'verb-noun' },
      { english: 'take a break', spanish: 'tomar un descanso', pronunciation: 'teik a breik', category: 'verb-noun' },
      { english: 'have a conversation', spanish: 'tener una conversación', pronunciation: 'jav a konverséishon', category: 'verb-noun' },
      { english: 'give advice', spanish: 'dar consejo', pronunciation: 'guiv adváis', category: 'verb-noun' },
      { english: 'make a mistake', spanish: 'cometer un error', pronunciation: 'meik a mistéik', category: 'verb-noun' },
      { english: 'take responsibility', spanish: 'asumir responsabilidad', pronunciation: 'teik risponsabíliti', category: 'verb-noun' },
      { english: 'pay attention', spanish: 'prestar atención', pronunciation: 'pei aténshon', category: 'verb-noun' },
      { english: 'make progress', spanish: 'hacer progreso', pronunciation: 'meik próugres', category: 'verb-noun' },
      { english: 'take care', spanish: 'tener cuidado', pronunciation: 'teik ker', category: 'verb-noun' },
      { english: 'make an effort', spanish: 'hacer un esfuerzo', pronunciation: 'meik an éfort', category: 'verb-noun' },
      { english: 'have fun', spanish: 'divertirse', pronunciation: 'jav fan', category: 'verb-noun' },
      { english: 'take time', spanish: 'tomar tiempo', pronunciation: 'teik taim', category: 'verb-noun' },
      { english: 'make sense', spanish: 'tener sentido', pronunciation: 'meik sens', category: 'verb-noun' },
      { english: 'take advantage', spanish: 'aprovechar', pronunciation: 'teik advántich', category: 'verb-noun' },
      { english: 'make a difference', spanish: 'hacer una diferencia', pronunciation: 'meik a díferens', category: 'verb-noun' }
    ]
  }
];