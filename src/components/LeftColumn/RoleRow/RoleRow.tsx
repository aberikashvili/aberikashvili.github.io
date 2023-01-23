import Row from '../../Row/Row';
import './RoleRow.css';

const RoleRow = ({ role }: { role: string }) => {
  return (
    <Row idAttr="tech-stack-row">
      <h4 className="role">{role}</h4>
    </Row>
  );
};

export default RoleRow;
