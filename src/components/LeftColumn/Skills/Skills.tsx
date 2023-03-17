import SkillItemEntry from '../../../models/SkillItemEntry';
import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';
import Tag from '../../shared/Tag/Tag';

const Skills = ({ title, skills }: { title: string; skills: SkillItemEntry[] }) => {
  return (
    <Row>
      <Fieldset legend={title}>
        {skills.map((skill) => (
          <Tag key={skill.title} icon={skill.icon} title={skill.title} />
        ))}
      </Fieldset>
    </Row>
  );
};

export default Skills;
