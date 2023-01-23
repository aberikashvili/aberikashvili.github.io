import WorkHistoryItemEntry from '../../../models/WorkHistoryItemEntry';
import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

import './WorkHistory.css';
import WorkHistoryItem from './WorkHistoryItem/WorkHistoryItem';

const WorkHistory = ({ workHistory }: { workHistory: WorkHistoryItemEntry[] }) => {
  return (
    <Row>
      <Fieldset legend="Work History" isRight={true}>
        {workHistory.map((work) => (
          <WorkHistoryItem key={work.company} work={work} />
        ))}
      </Fieldset>
    </Row>
  );
};

export default WorkHistory;
