import ProjectItemEntry from '../../../../models/ProjectItemEntry';

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
  return (
    <>
      <td valign="top">
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
            <span key={title} className="tag">
              {title}
            </span>
          ))}
        </p>
        <div>
          <div className="roles-and-responsibilities-title">Roles &amp; Responsibilities:</div>
          <ul className="roles">
            {project.responsibilities.map((resp, i) => (
              <li key={`resp-${i}`}>{resp}</li>
            ))}
          </ul>
        </div>
        {!!project.stack?.length && (
          <p className="project-info">
            <b>Stack: </b>
            {project.stack.map((stack, i) => (
              <span key={`stack-${i}`} className="tag">
                <i className={stack.icon}></i>
                {stack.title}
              </span>
            ))}
          </p>
        )}
      </td>
    </>
  );
};

export default ProjectInfo;
