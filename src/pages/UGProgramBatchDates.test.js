import { expect, test } from 'bun:test';

const ugHeroSections = [
  'interior-design',
  'interior-spatial',
  'graphic-design',
  'animation-game',
  'fashion-design',
  'bsc-cs',
  'bca',
];

for (const program of ugHeroSections) {
  test(`${program} hero shows the June 2027 batch`, async () => {
    const source = await Bun.file(
      new URL(`../components/program/${program}/HeroSection.tsx`, import.meta.url),
    ).text();
    expect(source).toContain('Next Batch: June 2027');
    expect(source).not.toContain('Next Batch: July 2025');
    expect(source).not.toContain('Next Batch: June 2025');
  });
}
