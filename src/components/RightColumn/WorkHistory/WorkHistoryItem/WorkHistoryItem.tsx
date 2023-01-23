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
                  <b>
                    {work.fromMonth} {work.fromYear} - {work.toMonth} {work.toYear}
                  </b>
                )}
              </td>
              <ProjectInfo
                company={work.company}
                companyWebsite={work.companyWebsite}
                position={work.position}
                routine={work.routine}
                project={project}
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
