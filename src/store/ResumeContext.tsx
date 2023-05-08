import { createContext } from 'react';
import EducationItemEntry from '../models/EducationItemEntry';
import PersonalInfoEntry from '../models/PersonalInfoEntry';
import ProfileEntry from '../models/ProfileEntry';
import SkillItemEntry from '../models/SkillItemEntry';
import WorkHistoryItemEntry from '../models/WorkHistoryItemEntry';

import DUMMY_DATA from './dummy-data';
import TrainCertEntry from '../models/TrainCertEntry';
import HardSkillsEntry from '../models/HardSkillsEntry';

const ResumeContext = createContext({
  profile: {} as ProfileEntry,
  personalInfo: {} as PersonalInfoEntry,
  primarySkills: [] as SkillItemEntry[],
  secondarySkills: [] as SkillItemEntry[],
  // new style
  softSkills: [] as SkillItemEntry[],
  hardSkills: {} as HardSkillsEntry,
  // new style
  operationSystems: [] as SkillItemEntry[],
  languages: [] as string[],
  trainings: [] as TrainCertEntry[],
  summary: [] as string[],
  workHistory: [] as WorkHistoryItemEntry[],
  education: [] as EducationItemEntry[]
});

export const ResumeContextProvider = ({ children }: { children: any }) => {
  const context = {
    profile: DUMMY_DATA.profile,
    personalInfo: DUMMY_DATA.personalInfo,
    primarySkills: DUMMY_DATA.skills.primary,
    secondarySkills: DUMMY_DATA.skills.secondary,
    softSkills: DUMMY_DATA.skills.softSkills,
    hardSkills: DUMMY_DATA.skills.hardSkills,
    operationSystems: DUMMY_DATA.skills.os,
    languages: DUMMY_DATA.skills.languages,
    trainings: DUMMY_DATA.skills.trainings,
    summary: DUMMY_DATA.summary,
    workHistory: DUMMY_DATA.workHistory,
    education: DUMMY_DATA.education
  };

  return <ResumeContext.Provider value={context}>{children}</ResumeContext.Provider>;
};

export default ResumeContext;
