import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

const Education = () => {
  return (
    <Row>
      <Fieldset legend="Education" isRight={true}>
        <table>
          <tbody>
            <tr>
              <td valign="top" className="no-wrap">
                <b>2015 - 2017</b>
              </td>
              <td valign="top">
                <div className="position-title">Master of Computer Science</div>
                <div className="company-title">University of Georgia (UG)</div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <table>
          <tbody>
            <tr>
              <td valign="top" className="no-wrap">
                <b>2010 - 2014</b>
              </td>
              <td valign="top">
                <div className="position-title">Bachelor of Computer Science</div>
                <div className="company-title">Georgian Technical University (GTU)</div>
              </td>
            </tr>
          </tbody>
        </table>
      </Fieldset>
    </Row>
  );
};

export default Education;
