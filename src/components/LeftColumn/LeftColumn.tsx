import { useContext } from 'react';

import Column from '../Column/Column';
import FullNameRow from './FullNameRow/FullNameRow';
import ImageRow from './ImageRow/ImageRow';
import RoleRow from './RoleRow/RoleRow';

import './LeftColumn.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import OperationSystems from './OperationSystems/OperationSystems';
import Languages from './Languages/Languages';
import Trainings from './Trainings/Trainings';
import ResumeContext from '../../store/ResumeContext';
import Skills from './Skills/Skills';

const LeftColumn = () => {
  const ctx = useContext(ResumeContext);

  return (
    <Column classNames="Column-Left">
      <ImageRow imageUri={ctx.profile.imageUri} />
      <FullNameRow fullName={ctx.profile.fullName} />
      <RoleRow role={ctx.profile.role} />
      <PersonalInfo
        location={ctx.personalInfo.location}
        address={ctx.personalInfo.address}
        born={ctx.personalInfo.born}
        skype={ctx.personalInfo.skype}
        mobile={ctx.personalInfo.mobile}
        email={ctx.personalInfo.email}
        github={ctx.personalInfo.github}
        linkedin={ctx.personalInfo.linkedin}
        website={ctx.personalInfo.website}
      />
      <Skills title="Soft Skills" skills={ctx.softSkills} />
      <Skills title="Cloud Skills" skills={ctx.hardSkills.cloud} />
      <Skills title="Front-End / Mobile Skills" skills={ctx.hardSkills.frontEnd} />
      <Skills title="Back-End Skills" skills={ctx.hardSkills.backEnd} />
      <Skills title="DevOps Skills" skills={ctx.hardSkills.devOps} />
      <Skills title="Tools" skills={ctx.hardSkills.tools} />
      {/* <Skills title="Primary Skills" skills={ctx.primarySkills} />
      <Skills title="Background" skills={ctx.secondarySkills} /> */}
      <OperationSystems opSystems={ctx.operationSystems} />
      <Languages languages={ctx.languages} />
      <Trainings trainings={ctx.trainings} />
    </Column>
  );
};

export default LeftColumn;
