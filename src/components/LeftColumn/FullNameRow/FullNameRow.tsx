import Row from '../../Row/Row';
import './FullNameRow.css';

const FullNameRow = ({ fullName }: { fullName: string }) => {
  return (
    <Row idAttr="full-name-row">
      <h4 className="full-name">{fullName}</h4>
    </Row>
  );
};

export default FullNameRow;
