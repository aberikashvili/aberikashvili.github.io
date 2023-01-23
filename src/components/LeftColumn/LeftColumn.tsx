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
        linkedin={ctx.personalInfo.linkedin}
        website={ctx.personalInfo.website}
      />
      <Skills title="Primary Skills" skills={ctx.primarySkills} />
      <Skills title="Secondary Skills" skills={ctx.secondarySkills} />
      <OperationSystems opSystems={ctx.operationSystems} />
      <Languages languages={ctx.languages} />
      <Trainings trainings={ctx.trainings} />
    </Column>
  );
};

export default LeftColumn;
