import image from '../../../assets/DSC_4440.jpg';
import Row from '../../Row/Row';

import './ImageRow.css';

const ImageRow = () => {
  return (
    <Row idAttr="image-row">
      <div className="img-outer">
        <img src={image} className="img-circle" />
      </div>
    </Row>
  );
};

export default ImageRow;
