import { useContext } from 'react';
import WorkHistoryItemEntry from '../../../models/WorkHistoryItemEntry';
import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

import './WorkHistory.css';
import WorkHistoryItem from './WorkHistoryItem/WorkHistoryItem';
import ConfigurationContext from '../../../store/ConfigurationContext';

const WorkHistory = ({ workHistory }: { workHistory: WorkHistoryItemEntry[] }) => {
  const configCtx = useContext(ConfigurationContext);

  return (
    <Row>
      <Fieldset legend="Work History" isRight={true}>
        {workHistory.map(
          (work) =>
            (configCtx.mode !== 'custom' ||
              (configCtx.mode === 'custom' &&
                configCtx.visibleWorkHistory.some(
                  (visibleItem) => visibleItem.value === work.id
                ))) && <WorkHistoryItem key={work.company} work={work} />
        )}
      </Fieldset>
    </Row>
  );
};

export default WorkHistory;
