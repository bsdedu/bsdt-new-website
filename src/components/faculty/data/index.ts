
import { designFaculty } from './designFaculty';
import { technologyFaculty } from './technologyFaculty';
import { internationalFaculty } from './internationalFaculty';
import { guestFaculty } from './guestFaculty';
import { FacultyMember } from '../types';

export const facultyMembers: FacultyMember[] = [
  ...designFaculty,
  ...technologyFaculty,
  ...internationalFaculty,
  ...guestFaculty
];
