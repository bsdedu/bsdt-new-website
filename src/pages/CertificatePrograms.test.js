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

test('Software Testing & QE shows four course photos', () => {
  const course = source.split('const testing: CertificateProgram = {')[1]?.split('};')[0];
  expect((course.match(/\{ asset: /g) || []).length).toBe(4);
  for (const pointer of [
    'ai-code-assistant.png.asset.json',
    'python-desk-learning.png.asset.json',
    'developer-desk-code.png.asset.json',
    'humanoid-robot.png.asset.json',
  ]) {
    expect(source).toContain(pointer);
  }
});

test('Software Testing & QE has its own programme schedule', () => {
  const course = source.split('const testing: CertificateProgram = {')[1]?.split('};')[0];
  expect(course).toContain("title: '12-Week Duration'");
  expect(course).toContain("title: 'Six Learning Modules'");
  expect(course).toContain("title: 'Online Learning'");
});

test('Software Testing & QE has six programme highlights', () => {
  const course = source.split('const testing: CertificateProgram = {')[1]?.split('};')[0];
  const highlights = course?.split('highlights: [')[1]?.split(']')[0];
  expect((highlights.match(/title: '/g) || []).length).toBe(6);
});

test('Programme schedule and highlights render for both courses', () => {
  expect(source).toContain('program.schedule.map');
  expect(source).toContain('program.highlights.map');
  expect(source).not.toContain('{isFullStack && (');
});
