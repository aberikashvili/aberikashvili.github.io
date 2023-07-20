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
import ConfigurationContext from '../../store/ConfigurationContext';
import Publications from './Publications/Publications';

const LeftColumn = () => {
  const configCtx = useContext(ConfigurationContext);
  const ctx = useContext(ResumeContext);

  const showSoftSkills = configCtx.mode !== 'custom' || configCtx.softSkills;
  const showCloudSkills = configCtx.mode !== 'custom' || configCtx.cloudSkills;
  const showFrontEndSkills = configCtx.mode !== 'custom' || configCtx.frontEndSkills;
  const showBackEndSkills = configCtx.mode !== 'custom' || configCtx.backEndSkills;
  const showDevOpsSkills = configCtx.mode !== 'custom' || configCtx.devOpsSkills;
  const showToolsSkills = configCtx.mode !== 'custom' || configCtx.toolsSkills;
  const showOsSkills = configCtx.mode !== 'custom' || configCtx.osSkills;
  const showCertification = configCtx.mode !== 'custom' || configCtx.certification;
  const showPublications = configCtx.mode !== 'custom' || configCtx.publications;

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
      {showSoftSkills && <Skills title="Soft Skills" skills={ctx.softSkills} />}
      {showCloudSkills && <Skills title="Cloud Skills" skills={ctx.hardSkills.cloud} />}
      {showFrontEndSkills && (
        <Skills title="Front-End / Mobile Skills" skills={ctx.hardSkills.frontEnd} />
      )}
      {showBackEndSkills && <Skills title="Back-End Skills" skills={ctx.hardSkills.backEnd} />}
      {showDevOpsSkills && <Skills title="DevOps Skills" skills={ctx.hardSkills.devOps} />}
      {showToolsSkills && <Skills title="Tools" skills={ctx.hardSkills.tools} />}
      {showOsSkills && <OperationSystems opSystems={ctx.operationSystems} />}
      <Languages languages={ctx.languages} />
      {showPublications && <Publications publications={ctx.publications} />}
      {showCertification && <Trainings trainings={ctx.trainings} />}
    </Column>
  );
};

export default LeftColumn;
