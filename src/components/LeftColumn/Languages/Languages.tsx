import SkillItemEntry from '../../../models/SkillItemEntry';
import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

const Languages = ({ languages }: { languages: string[] }) => (
  <Row>
    <Fieldset legend="Languages">
      {languages.map((lang) => (
        <span key={lang} className="tag">
          {lang}
        </span>
      ))}
    </Fieldset>
  </Row>
);

export default Languages;
