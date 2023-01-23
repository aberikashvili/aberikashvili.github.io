import SkillItemEntry from '../../../models/SkillItemEntry';
import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

const OperationSystems = ({ opSystems }: { opSystems: SkillItemEntry[] }) => {
  return (
    <Row>
      <Fieldset legend="OS">
        {opSystems.map((os) => (
          <span key={os.title} className="tag">
            <i className={os.icon}></i> {os.title}
          </span>
        ))}
      </Fieldset>
    </Row>
  );
};

export default OperationSystems;
