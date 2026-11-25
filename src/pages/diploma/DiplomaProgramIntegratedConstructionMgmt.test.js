import { expect, test } from 'bun:test';

const source = await Bun.file(new URL('./DiplomaProgramIntegratedConstructionMgmt.tsx', import.meta.url)).text();

test('Interior Construction & Project Management uses the 16-month (12 + 4) pathway wording', () => {
  expect(source).toContain('Following the 16-month program (12 + 4), students enter the 3+1 Internship Advantage—One month of structured portfolio and career development, culminating in an industry-ready portfolio, followed by a minimum three-month internship designed to help graduates transition confidently into the professional world.');
  expect(source).not.toContain('3 semesters of 4 months each');
  expect(source).not.toContain('Following the 8-month');
});

test('Interior Construction & Project Management uses Post Graduate Diploma naming everywhere', async () => {
  const paths = [
    '../../components/layout/navbar/navData.ts',
    '../../components/admissions/ExplorePrograms.tsx',
    '../../components/home/enquiry/EnquiryForm.tsx',
    '../../components/diploma/IntegratedConstructionMgmt/HeroSection.tsx',
    '../../components/diploma/IntegratedConstructionMgmt/ProgramOverviewSection.tsx',
    '../../components/diploma/IntegratedConstructionMgmt/ProgramFeatures.tsx',
    '../../components/diploma/IntegratedConstructionMgmt/overview-tabs/LearningOutcomesTab.tsx',
  ];
  const sources = await Promise.all(paths.map((path) => Bun.file(new URL(path, import.meta.url)).text()));
  const [navigation, explorePrograms, enquiryForm, hero, overview, features, outcomes] = sources;
  const fullName = 'Post Graduate Diploma in Interior Construction & Project Management';

  expect(navigation).toContain(fullName);
  expect(explorePrograms).toContain(fullName);
  expect(source).toContain(fullName);
  expect(hero).toContain('Post Graduate Diploma in<br />');
  expect(hero).toContain('Post Graduate Diploma Certificate Recognised by BSDT');
  expect(overview).toContain('Post Graduate Diploma in Interior Construction &amp; Project Management (PGD in ICPM)');
  expect(outcomes).toContain('Post Graduate Diploma in Interior Construction &amp; Project Management (PGD in ICPM)');
  expect(features).toContain('PGD in ICPM teaches');
  expect(enquiryForm).toContain('value="PG.Diploma Interior Construction & Project Management"');
  expect(enquiryForm).toContain('>PG.Diploma Interior Construction &amp; Project Management</option>');

  const combined = [source, ...sources].join('\n');
  expect(combined).not.toContain('Professional Diploma in Interior Construction');
  expect(combined).not.toContain('P.Diploma Interior Construction');
  expect(combined).not.toContain('PD in ICPM');
});
