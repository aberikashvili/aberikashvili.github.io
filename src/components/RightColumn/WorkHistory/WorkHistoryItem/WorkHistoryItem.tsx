import WorkHistoryItemEntry from '../../../../models/WorkHistoryItemEntry';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

const WorkHistoryItem = ({ work }: { work: WorkHistoryItemEntry }) => {
  return (
    <>
      <table>
        <tbody>
          {work.projects.map((project, i) => (
            <tr key={project.titles.join('')}>
              <td valign="top" className="no-wrap">
                {i === 0 && (
                  <>
                    <b>
                      {work.fromMonth} {work.fromYear} -{' '}
                      {!work.toMonth && !work.toYear ? 'Present' : `${work.toMonth} ${work.toYear}`}
                    </b>
                    {/* <div
                      style={{
                        paddingTop: '8px',
                        textAlign: 'center'
                      }}>
                      <b>{work.period()}</b>
                    </div> */}
                  </>
                )}
              </td>
              <ProjectInfo
                company={work.company}
                companyWebsite={work.companyWebsite}
                position={work.position}
                routine={work.routine}
                workType={work.workType}
                project={project}
                hideCompanytitle={i > 0}
              />
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
    </>
  );
};

export default WorkHistoryItem;
