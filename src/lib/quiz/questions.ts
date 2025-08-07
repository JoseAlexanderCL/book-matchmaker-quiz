export type Dichotomy = "EI" | "SN" | "TF" | "JP" | "RA";

export type OptionKey = "A" | "B" | "C" | "D";

export interface QuestionOption {
  key: OptionKey;
  label: string;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
  pair: Dichotomy;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "¿Dónde te resulta más agradable leer?",
    pair: "EI",
    options: [
      { key: "A", label: "En un café lleno de gente." },
      { key: "B", label: "En un parque conversando con otros lectores." },
      { key: "C", label: "En mi rincón tranquilo con poca gente." },
      { key: "D", label: "Bajo las sábanas en silencio absoluto." },
    ],
  },
  {
    id: 2,
    text: "Al terminar un libro que te encantó, sueles…",
    pair: "EI",
    options: [
      { key: "A", label: "Contarlo al instante en redes sociales." },
      { key: "B", label: "Organizar un encuentro para comentarlo." },
      { key: "C", label: "Recomendarlo a pocas personas cercanas." },
      { key: "D", label: "Guardártelo y seguir reflexionando en privado." },
    ],
  },
  {
    id: 3,
    text: "Si participas en un club de lectura, ¿cómo actúas?",
    pair: "EI",
    options: [
      { key: "A", label: "Lideras la conversación y propones temas." },
      { key: "B", label: "Disfrutas los debates e intervienes mucho." },
      { key: "C", label: "Escuchas y sólo comentas cuando te interesa." },
      { key: "D", label: "Lees los libros sugeridos pero no asistes a reuniones." },
    ],
  },
  {
    id: 4,
    text: "En tu biblioteca imaginaria, la sección “favoritos” es…",
    pair: "EI",
    options: [
      { key: "A", label: "Abierta a cualquiera que quiera verlos." },
      { key: "B", label: "Con una lista de recomendaciones visible." },
      { key: "C", label: "Un rincón especial sólo para ti." },
      { key: "D", label: "Un diario secreto que nadie más conoce." },
    ],
  },
  {
    id: 5,
    text: "¿Qué te atrae más de una historia?",
    pair: "SN",
    options: [
      { key: "A", label: "Hechos reales y contextos históricos." },
      { key: "B", label: "Misterios policiales bien construidos." },
      { key: "C", label: "Aventuras épicas y magia." },
      { key: "D", label: "Universos que desafían las leyes de la realidad." },
    ],
  },
  {
    id: 6,
    text: "Al escoger un nuevo libro buscas…",
    pair: "SN",
    options: [
      { key: "A", label: "Autores reconocidos y temas actuales." },
      { key: "B", label: "Tramas concretas con pistas y soluciones." },
      { key: "C", label: "Sinopsis que hablen de mundos fantásticos." },
      { key: "D", label: "Que el autor cuestione las reglas del mundo." },
    ],
  },
  {
    id: 7,
    text: "Si pudieras vivir en un libro, escogerías…",
    pair: "SN",
    options: [
      { key: "A", label: "Una novela histórica realista." },
      { key: "B", label: "Un crimen de Agatha Christie para resolver." },
      { key: "C", label: "La Tierra Media o Terramar." },
      { key: "D", label: "Un universo alternativo o distópico." },
    ],
  },
  {
    id: 8,
    text: "¿Cómo describirías tu imaginación?",
    pair: "SN",
    options: [
      { key: "A", label: "Visualiza situaciones tangibles y realistas." },
      { key: "B", label: "Disfruta descifrar detalles y pistas." },
      { key: "C", label: "Se pierde en fantasías y criaturas inventadas." },
      { key: "D", label: "Se dispara hacia lugares extraños y futuristas." },
    ],
  },
  {
    id: 9,
    text: "Prefieres que un libro te provoque…",
    pair: "TF",
    options: [
      { key: "A", label: "Reflexión y cuestionamientos sociales." },
      { key: "B", label: "Desafíos lógicos y estructurales." },
      { key: "C", label: "Sensaciones románticas o tiernas." },
      { key: "D", label: "Llantos y risas intensas." },
    ],
  },
  {
    id: 10,
    text: "Ante una escena fuerte sueles…",
    pair: "TF",
    options: [
      { key: "A", label: "Analizar por qué el autor lo escribió así." },
      { key: "B", label: "Buscar la lógica detrás de la escena." },
      { key: "C", label: "Pensar en lo que sienten los personajes." },
      { key: "D", label: "Emocionarte como si te ocurriera a ti." },
    ],
  },
  {
    id: 11,
    text: "El final ideal es…",
    pair: "TF",
    options: [
      { key: "A", label: "Abierto e invita a reflexionar." },
      { key: "B", label: "Coherente y resuelve el conflicto." },
      { key: "C", label: "Emocionalmente satisfactorio." },
      { key: "D", label: "Feliz o tremendamente dramático." },
    ],
  },
  {
    id: 12,
    text: "Tus personajes favoritos son…",
    pair: "TF",
    options: [
      { key: "A", label: "Inteligentes y estrategas." },
      { key: "B", label: "Detectives o científicos." },
      { key: "C", label: "Soñadores y sensibles." },
      { key: "D", label: "Heroínas/héroes apasionados." },
    ],
  },
  {
    id: 13,
    text: "¿Cómo organizas tus lecturas?",
    pair: "JP",
    options: [
      { key: "A", label: "Con un plan anual detallado." },
      { key: "B", label: "Con un orden según géneros o series." },
      { key: "C", label: "Según lo que sientes en cada momento." },
      { key: "D", label: "Dejo todo por leer lo que me llame la atención." },
    ],
  },
  {
    id: 14,
    text: "Cuando descubres una nueva saga…",
    pair: "JP",
    options: [
      { key: "A", label: "Investigas y la lees en orden." },
      { key: "B", label: "Lees sinopsis y reseñas antes de decidir." },
      { key: "C", label: "Te dejas llevar por la emoción del primer libro." },
      { key: "D", label: "Saltas entre libros según tu curiosidad." },
    ],
  },
  {
    id: 15,
    text: "¿Cómo te relacionas con los “spoilers”?",
    pair: "JP",
    options: [
      { key: "A", label: "No me molestan, a veces ayudan a entender mejor." },
      { key: "B", label: "Prefiero saber algo para comprender la estructura." },
      { key: "C", label: "Trato de evitarlos para disfrutar la sorpresa." },
      { key: "D", label: "Odio los spoilers; quiero la máxima incertidumbre." },
    ],
  },
  {
    id: 16,
    text: "Cuando tienes que elegir entre un clásico y un lanzamiento reciente…",
    pair: "RA",
    options: [
      { key: "A", label: "Siempre prefiero las novedades; me gusta lo nuevo." },
      { key: "B", label: "Me inclino hacia libros recientes, pero los clásicos también me atraen." },
      { key: "C", label: "Me suelen llamar más los clásicos que los libros de moda." },
      { key: "D", label: "Definitivamente prefiero clásicos que han resistido el tiempo." },
    ],
  },
];
