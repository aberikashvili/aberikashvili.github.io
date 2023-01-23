import SkillItemEntry from '../../../models/SkillItemEntry';
import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

const Skills = ({ title, skills }: { title: string; skills: SkillItemEntry[] }) => {
  return (
    <Row>
      <Fieldset legend={title}>
        {skills.map((skill) => (
          <span key={skill.title} className="tag">
            <i className={skill.icon}></i> {skill.title}
          </span>
        ))}
      </Fieldset>
    </Row>
  );
};

export default Skills;
