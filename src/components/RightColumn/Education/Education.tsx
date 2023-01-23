import React from 'react';
import EducationItemEntry from '../../../models/EducationItemEntry';
import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

const Education = ({ education }: { education: EducationItemEntry[] }) => {
  return (
    <Row>
      <Fieldset legend="Education" isRight={true}>
        {education.map((edu) => (
          <React.Fragment key={edu.school}>
            <table>
              <tbody>
                <tr>
                  <td valign="top" className="no-wrap">
                    <b>
                      {edu.fromYear} - {edu.toYar}
                    </b>
                  </td>
                  <td valign="top">
                    <div className="position-title">{edu.faculty}</div>
                    <div className="company-title">{edu.school}</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
          </React.Fragment>
        ))}
      </Fieldset>
    </Row>
  );
};

export default Education;
