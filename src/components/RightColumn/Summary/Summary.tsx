import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

import './Summary.css';

const Summary = ({ summary }: { summary: string[] }) => {
  return (
    <Row>
      <Fieldset legend="Summary" isRight={true} titlePosition="center">
        {summary.map((text, i) => (
          <p key={`summary-${i}`} className="text-indent">
            {text}
          </p>
        ))}
      </Fieldset>
    </Row>
  );
};

export default Summary;
