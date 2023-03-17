import SkillItemEntry from '../../../models/SkillItemEntry';
import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';
import Tag from '../../shared/Tag/Tag';

const OperationSystems = ({ opSystems }: { opSystems: SkillItemEntry[] }) => {
  return (
    <Row>
      <Fieldset legend="OS">
        {opSystems.map((os) => (
          <Tag key={os.title} icon={os.icon} title={os.title} />
        ))}
      </Fieldset>
    </Row>
  );
};

export default OperationSystems;
