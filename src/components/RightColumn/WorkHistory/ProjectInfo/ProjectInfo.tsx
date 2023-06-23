import ProjectItemEntry from '../../../../models/ProjectItemEntry';
import Tag from '../../../shared/Tag/Tag';

const ProjectInfo = ({
  position,
  companyWebsite,
  company,
  routine,
  workType,
  project,
  hideCompanytitle = false
}: {
  position: string;
  companyWebsite: string;
  company: string;
  routine: string;
  workType: string;
  project: ProjectItemEntry;
  hideCompanytitle: boolean;
}) => {
  const borderTop = hideCompanytitle && { borderTop: '1px solid #eae4e4' };

  return (
    <>
      <td valign="top" style={borderTop || undefined}>
        {!hideCompanytitle && (
          <>
            <div className="position-title">{position}</div>
            <div className="company-title">
              At{' '}
              <a href={companyWebsite} target="blank">
                {company}
              </a>{' '}
              ({routine}, {workType})
            </div>
          </>
        )}
        <p className="project-info">
          <b>Project(s): </b>
          {project.titles.map((title) => (
            <Tag key={title} title={title} />
          ))}
        </p>
        {project.description && (
          <div>
            <div className="roles-and-responsibilities-title">Project description:</div>
            <p
              style={{
                borderLeft: '2px solid #eae4e4',
                paddingLeft: '10px'
              }}>
              {project.description}
            </p>
          </div>
        )}
        <div>
          <div className="roles-and-responsibilities-title">Responsibilities:</div>
          <ul className="roles">
            {project.responsibilities.map((resp, i) => (
              <li key={`resp-${i}`}>{resp}</li>
            ))}
          </ul>
        </div>
        {!!project.stack?.length && (
          <div>
            <div className="roles-and-responsibilities-title">Tools &amp; Technologies:</div>
            <p>
              {project.stack.map((stack, i) => (
                <Tag key={`stack-${i}`} icon={stack.icon} title={stack.title} />
              ))}
            </p>
          </div>
        )}
      </td>
    </>
  );
};

export default ProjectInfo;
