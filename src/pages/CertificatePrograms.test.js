import { expect, test } from 'bun:test';

const source = await Bun.file(new URL('./CertificatePrograms.tsx', import.meta.url)).text();

test('Full Stack with Gen AI lasts 16 weeks', () => {
  const course = source.split('const fullStack: CertificateProgram = {')[1]?.split('};')[0];
  expect(course).toContain("duration: '16 weeks'");
});

test('Software Testing & QE lasts 12 weeks', () => {
  const course = source.split('const testing: CertificateProgram = {')[1]?.split('};')[0];
  expect(course).toContain("duration: '12 weeks'");
});