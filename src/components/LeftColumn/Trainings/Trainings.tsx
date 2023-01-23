import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

const Trainings = ({ trainings }: { trainings: string[] }) => (
  <Row>
    <Fieldset legend="Trainings & Certificates">
      {trainings.map((training) => (
        <span key={training} className="tag">
          {training}
        </span>
      ))}
    </Fieldset>
  </Row>
);

export default Trainings;
