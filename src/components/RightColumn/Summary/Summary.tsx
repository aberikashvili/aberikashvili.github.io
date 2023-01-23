import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

import './Summary.css';

const Summary = () => {
  return (
    <Row>
      <Fieldset legend="Summary" isRight={true} titlePosition="center">
        <p className="text-indent">
          Software Developer with thorough hands-on experience in web based applications, desktop
          applications, database development and architectural solutions, also experienced in
          building and stabilizing high performance applications.
        </p>
        <p className="text-indent">
          Supportive and enthusiastic team player dedicated streamlining processes and effectively
          resolving project issues. Willing to take ownership of core components
        </p>
      </Fieldset>
    </Row>
  );
};

export default Summary;
