import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

const OperationSystems = () => {
  return (
    <Row>
      <Fieldset legend="OS">
        <span className="tag">
          <i className="fab fa-apple"></i> MacOS
        </span>
        <span className="tag">
          <i className="fab fa-windows"></i> Windows
        </span>
        <span className="tag">
          <i className="fab fa-linux"></i> Linux
        </span>
      </Fieldset>
    </Row>
  );
};

export default OperationSystems;
