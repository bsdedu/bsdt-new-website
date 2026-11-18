import { expect, test } from 'bun:test';

const source = await Bun.file(new URL('./DiplomaProgramIntegratedConstructionMgmt.tsx', import.meta.url)).text();

test('Interior Construction & Project Management uses the 16-month (12 + 4) pathway wording', () => {
  expect(source).toContain('Following the 16-month program (12 + 4), students enter the 3+1 Internship Advantage—One month of structured portfolio and career development, culminating in an industry-ready portfolio, followed by a minimum three-month internship designed to help graduates transition confidently into the professional world.');
  expect(source).not.toContain('3 semesters of 4 months each');
  expect(source).not.toContain('Following the 8-month');
});
