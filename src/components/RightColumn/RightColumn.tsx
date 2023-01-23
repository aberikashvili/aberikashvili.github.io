import Column from '../Column/Column';
import Education from './Education/Education';

import './RightCOlumn.css';
import Summary from './Summary/Summary';
import WorkHistory from './WorkHistory/WorkHistory';

const RightColumn = () => {
  return (
    <Column classNames="Column-Right">
      <Summary />
      <WorkHistory />
      <Education />
    </Column>
  );
};

export default RightColumn;
