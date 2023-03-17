import SkillItemEntry from '../../../models/SkillItemEntry';
import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';
import Tag from '../../shared/Tag/Tag';

const Languages = ({ languages }: { languages: string[] }) => (
  <Row>
    <Fieldset legend="Languages">
      {languages.map((lang) => (
        <Tag key={lang} title={lang} />
      ))}
    </Fieldset>
  </Row>
);

export default Languages;
