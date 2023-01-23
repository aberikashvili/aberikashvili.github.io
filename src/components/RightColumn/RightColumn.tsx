import Column from '../Column/Column';

import './RightCOlumn.css';
import Summary from './Summary/Summary';
import WorkHistory from './WorkHistory/WorkHistory';

const RightColumn = () => {
  return (
    <Column classNames="Column-Right">
      <Summary />
      <WorkHistory />
    </Column>
  );
};

export default RightColumn;
