import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';
import Tag from '../../shared/Tag/Tag';

const Trainings = ({ trainings }: { trainings: string[] }) => (
  <Row>
    <Fieldset legend="Trainings & Certificates">
      {trainings.map((training) => (
        <Tag key={training} title={training} />
      ))}
    </Fieldset>
  </Row>
);

export default Trainings;
