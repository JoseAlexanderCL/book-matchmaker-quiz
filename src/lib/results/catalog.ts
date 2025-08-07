import type { Catalog, DichotomyMBTI, MBTIType, BookEntry } from "../quiz/scoring";

export const MBTI_TYPES: MBTIType[] = [
  "ISTJ","ISFJ","INFJ","INTJ",
  "ISTP","ISFP","INFP","INTP",
  "ESTP","ESFP","ENFP","ENTP",
  "ESTJ","ESFJ","ENFJ","ENTJ",
];

const baseLibros: Record<DichotomyMBTI, BookEntry[]> = {
  EI: [
    { titulo: "El nombre del viento", anio: 2007, sinopsis: "La voz de Kvothe te atrapará mientras compartes historias en tabernas llenas de vida." },
    { titulo: "La sombra del viento", anio: 2001, sinopsis: "Un homenaje a los libros que se descubre mejor en buena compañía." },
  ],
  SN: [
    { titulo: "La historia interminable", anio: 1979, sinopsis: "Fantasía que enciende la imaginación y borra la línea entre lector y aventura." },
    { titulo: "Fundación", anio: 1951, sinopsis: "Ciencia ficción clásica que juega con ideas grandes y futuros posibles." },
  ],
  TF: [
    { titulo: "Crimen y castigo", anio: 1866, sinopsis: "Un torbellino de razón y culpa que obliga a pensar y sentir a partes iguales." },
    { titulo: "El problema de los tres cuerpos", anio: 2006, sinopsis: "Intriga científica, decisiones difíciles y asombro cósmico." },
  ],
  JP: [
    { titulo: "Orgullo y prejuicio", anio: 1813, sinopsis: "Ritmo impecable, ironía deliciosa y estructura satisfactoria." },
    { titulo: "El ojo del mundo (La Rueda del Tiempo)", anio: 1990, sinopsis: "Aventura que se despliega sin mapa fijo, perfecta para perderse." },
  ],
};

function texto(type: MBTIType, pair: DichotomyMBTI) {
  const etiquetas: Record<DichotomyMBTI, string> = {
    EI: "sociable vs. introspectivo",
    SN: "realista vs. imaginativo",
    TF: "lógico vs. emocional",
    JP: "planificador vs. flexible",
  };
  const estilos: Record<DichotomyMBTI, string> = {
    EI: "compartir lecturas y crear conversación",
    SN: "explorar mundos (reales o imposibles)",
    TF: "pensar fuerte sin perder la sensibilidad",
    JP: "organizar tu estantería… o dejarte llevar",
  };
  return `Eres ${type} y tu preferencia dominante (${etiquetas[pair]}) guía tus pases de página: te encanta ${estilos[pair]}. Tu match del club es {titulo}.`;
}

export const defaultCatalog: Catalog = MBTI_TYPES.reduce((acc, t) => {
  acc[t] = {
    EI: { libros: baseLibros.EI, texto: texto(t, "EI") },
    SN: { libros: baseLibros.SN, texto: texto(t, "SN") },
    TF: { libros: baseLibros.TF, texto: texto(t, "TF") },
    JP: { libros: baseLibros.JP, texto: texto(t, "JP") },
  };
  return acc;
}, {} as Catalog);
