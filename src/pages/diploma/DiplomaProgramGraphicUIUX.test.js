import { expect, test } from 'bun:test';

const source = await Bun.file(new URL('./DiplomaProgramGraphicUIUX.tsx', import.meta.url)).text();

test('Visual Communication + UI/UX uses the 12-month (8 + 4) pathway wording', () => {
  expect(source).toContain('academicMonths={12}');
  expect(source).toContain('Following the 12-month program (8 + 4), students enter the 3+1 Internship Advantage—One month of structured portfolio and career development, culminating in an industry-ready portfolio, followed by a minimum three-month internship designed to help graduates transition confidently into the professional world.');
  expect(source).not.toContain('Following the 8-month academic program');
});
