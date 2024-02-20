import { useContext } from 'react';
import ProjectItemEntry from '../../../../models/ProjectItemEntry';
import Tag from '../../../shared/Tag/Tag';
import ConfigurationContext from '../../../../store/ConfigurationContext';

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
  const configCtx = useContext(ConfigurationContext);

  const showToolsAndTech =
    configCtx.mode === 'full' || (configCtx.mode === 'custom' && configCtx.toolsAndTech);
  const showProjectDescription =
    configCtx.mode === 'full' || (configCtx.mode === 'custom' && configCtx.projectDescription);
  const showProjectImages =
    configCtx.mode === 'full' || (configCtx.mode === 'custom' && configCtx.projectImages);

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
        {project.description && showProjectDescription && (
          <div>
            <div className="roles-and-responsibilities-title">Project description:</div>
            <p
              style={{
                borderLeft: '2px solid #eae4e4',
                paddingLeft: '10px'
              }}>
              {project.description}
            </p>
            {!!project.images.length && showProjectImages && (
              <p>
                {project.images.map((url: string) => (
                  <img
                    key={url}
                    src={url}
                    style={{
                      width: '100px',
                      border: '1px solid rgb(234, 228, 228)',
                      borderRadius: '5px',
                      marginRight: '5px',
                      marginBottom: '5px'
                    }}
                  />
                ))}
              </p>
            )}
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
        {!!project.stack?.length && showToolsAndTech && (
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
