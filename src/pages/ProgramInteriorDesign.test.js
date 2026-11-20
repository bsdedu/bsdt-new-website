import { expect, test } from 'bun:test';

const source = await Bun.file(new URL('../components/program/interior-design/HeroSection.tsx', import.meta.url)).text();

test('B.Sc. Interior Design hero paragraph uses the full program name', () => {
  expect(source).toContain('Our B.Sc. Interior Design &amp; Decoration program develops creative professionals');
  expect(source).not.toContain('Our B.Sc. Interior Design program develops');
});
