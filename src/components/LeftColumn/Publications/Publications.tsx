import { ArticleEntry } from '../../../models/ArticleEntry';
import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';
import Publication from './Publication/Publication';
import './Publications.css';

export type PublicationsProps = {
  publications: ArticleEntry[];
};

const Publications = ({ publications }: PublicationsProps) => {
  return (
    <Row>
      <Fieldset legend="Publications">
        <div className="publications__container">
          {publications.map((publication, i) => (
            <Publication key={`publication-${i}`} {...publication} />
          ))}
        </div>
      </Fieldset>
    </Row>
  );
};

export default Publications;
