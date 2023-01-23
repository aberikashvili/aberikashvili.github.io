import Column from '../Column/Column';
import FullNameRow from './FullNameRow/FullNameRow';
import ImageRow from './ImageRow/ImageRow';
import RoleRow from './RoleRow/RoleRow';

import './LeftColumn.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import PrimarySkills from './PrimarySkills/PrimarySkills';
import SecondarySkills from './SecondarySkills/SecondarySkills';
import OperationSystems from './OperationSystems/OperationSystems';
import Languages from './Languages/Languages';
import Trainings from './Trainings/Trainings';

const LeftColumn = () => {
  return (
    <Column classNames="Column-Left">
      <ImageRow />
      <FullNameRow />
      <RoleRow />
      <PersonalInfo />
      <PrimarySkills />
      <SecondarySkills />
      <OperationSystems />
      <Languages />
      <Trainings />
    </Column>
  );
};

export default LeftColumn;
