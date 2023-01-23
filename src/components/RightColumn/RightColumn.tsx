import { useContext } from 'react';
import ResumeContext from '../../store/ResumeContext';
import Column from '../Column/Column';
import Education from './Education/Education';

import './RightCOlumn.css';
import Summary from './Summary/Summary';
import WorkHistory from './WorkHistory/WorkHistory';

const RightColumn = () => {
  const ctx = useContext(ResumeContext);

  return (
    <Column classNames="Column-Right">
      <Summary summary={ctx.summary} />
      <WorkHistory workHistory={ctx.workHistory} />
      <Education education={ctx.education} />
    </Column>
  );
};

export default RightColumn;
