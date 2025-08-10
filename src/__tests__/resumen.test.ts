import { describe, it, expect } from 'vitest';
import { selectBook } from '@/lib/quiz/scoring';
import { defaultCatalog } from '@/lib/results/catalog';

describe('defaultCatalog text', () => {
  it('uses catalog text with title substituted', () => {
    const result = selectBook(defaultCatalog, 'ENTJ', 'R', 'EI');
    const template = defaultCatalog.ENTJ.EI.texto;
    expect(result.texto).toBe(
      template.replace('{titulo}', result.selected.titulo)
    );
  });
});
