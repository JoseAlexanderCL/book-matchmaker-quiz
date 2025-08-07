import type { OptionKey } from "./questions";
import { questions } from "./questions";

export type DichotomyMBTI = "EI" | "SN" | "TF" | "JP";

export type Scores = {
  EI: { E: number; I: number };
  SN: { S: number; N: number };
  TF: { T: number; F: number };
  JP: { J: number; P: number };
  RA: { R: number; A: number };
};

export type MBTIType =
  | "ISTJ" | "ISFJ" | "INFJ" | "INTJ"
  | "ISTP" | "ISFP" | "INFP" | "INTP"
  | "ESTP" | "ESFP" | "ENFP" | "ENTP"
  | "ESTJ" | "ESFJ" | "ENFJ" | "ENTJ";

export interface ComputedResult {
  mbti: MBTIType;
  dominantPair: DichotomyMBTI;
  temporalPreference: "R" | "A"; // Reciente / Antiguo
  scores: Scores;
  diffs: Record<DichotomyMBTI, number>;
}

const optionWeights: Record<OptionKey, { first: number; second: number }> = {
  A: { first: 2, second: 0 },
  B: { first: 1, second: 0 },
  C: { first: 0, second: 1 },
  D: { first: 0, second: 2 },
};

const pairLetters = {
  EI: ["E", "I"] as const,
  SN: ["S", "N"] as const,
  TF: ["T", "F"] as const,
  JP: ["J", "P"] as const,
  RA: ["R", "A"] as const,
};

type AnswerMap = Record<number, OptionKey>;

export function scoreAnswers(answers: AnswerMap) {
  const scores: Scores = {
    EI: { E: 0, I: 0 },
    SN: { S: 0, N: 0 },
    TF: { T: 0, F: 0 },
    JP: { J: 0, P: 0 },
    RA: { R: 0, A: 0 },
  };

  for (const q of questions) {
    const ans = answers[q.id];
    if (!ans) continue;

    const { first, second } = optionWeights[ans];
    const [l1, l2] = pairLetters[q.pair];

    (scores as any)[q.pair][l1] += first;
    (scores as any)[q.pair][l2] += second;
  }

  // Derive MBTI letters
  const E = scores.EI.E >= scores.EI.I ? "E" : "I";
  const S = scores.SN.S >= scores.SN.N ? "S" : "N";
  const T = scores.TF.T >= scores.TF.F ? "T" : "F";
  const J = scores.JP.J >= scores.JP.P ? "J" : "P";
  const mbti = `${E}${S}${T}${J}` as MBTIType;

  // Differences & dominant pair
  const diffs = {
    EI: Math.abs(scores.EI.E - scores.EI.I),
    SN: Math.abs(scores.SN.S - scores.SN.N),
    TF: Math.abs(scores.TF.T - scores.TF.F),
    JP: Math.abs(scores.JP.J - scores.JP.P),
  } as Record<DichotomyMBTI, number>;

  const priority: DichotomyMBTI[] = ["EI", "SN", "TF", "JP"];
  let dominantPair: DichotomyMBTI = "EI";
  let max = -1;
  for (const key of priority) {
    if (diffs[key] > max) {
      max = diffs[key];
      dominantPair = key;
    }
  }

  const temporalPreference = scores.RA.R >= scores.RA.A ? "R" : "A";

  const computed: ComputedResult = {
    mbti,
    dominantPair,
    temporalPreference,
    scores,
    diffs,
  };

  return computed;
}

export interface BookEntry {
  titulo: string;
  anio: number;
  portada?: string;
  sinopsis?: string;
}

export interface CatalogEntry {
  libros: BookEntry[];
  texto: string; // usa {titulo}
}

export type Catalog = Record<MBTIType, Record<DichotomyMBTI, CatalogEntry>>;

export interface FinalSelection {
  selected: BookEntry;
  texto: string;
}

export function selectBook(
  catalog: Catalog,
  mbti: MBTIType,
  pair: DichotomyMBTI,
  temporalPreference: "R" | "A"
): FinalSelection {
  const entry = catalog[mbti]?.[pair];
  if (!entry) {
    // Fallback safe
    return {
      selected: { titulo: "Lectura sorpresa del club", anio: new Date().getFullYear() },
      texto: `Te va la sorpresa: {titulo}`.replace("{titulo}", "Lectura sorpresa del club"),
    };
  }

  const books = [...entry.libros];
  if (books.length <= 1) {
    const only = books[0] ?? { titulo: "Lectura del club", anio: new Date().getFullYear() };
    return { selected: only, texto: entry.texto.replace("{titulo}", only.titulo) };
  }

  books.sort((a, b) => a.anio - b.anio);
  const chosen = temporalPreference === "R" ? books[books.length - 1] : books[0];
  return { selected: chosen, texto: entry.texto.replace("{titulo}", chosen.titulo) };
}

export function computeResult(
  answers: AnswerMap,
  catalog: Catalog
) {
  const computed = scoreAnswers(answers);
  const sel = selectBook(catalog, computed.mbti, computed.dominantPair, computed.temporalPreference);
  return { ...computed, ...sel };
}
