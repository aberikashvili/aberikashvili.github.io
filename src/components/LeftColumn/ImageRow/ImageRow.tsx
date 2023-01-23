import Row from '../../Row/Row';

import './ImageRow.css';

const ImageRow = ({ imageUri }: { imageUri: string }) => {
  return (
    <Row idAttr="image-row">
      <div className="img-outer">
        <img src={imageUri} className="img-circle" />
      </div>
    </Row>
  );
};

export default ImageRow;
