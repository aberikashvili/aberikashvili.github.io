import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

const PersonalInfo = () => {
  return (
    <Row>
      <Fieldset legend="Personal Info">
        <div className="wrapper">
          <i className="fa fa-map-marker-alt"></i> Tbilisi, Georgia
        </div>
        <div className="wrapper">
          <i className="fa fa-home"></i> Didi Digomi, Giorgi Brtskinvale Street #48
        </div>
        <div className="wrapper">
          <i className="fa fa-baby"></i> 4 November, 1990
        </div>
        <div className="wrapper">
          <i className="fab fa-skype"></i> <a href="skype:superhornet111?call">superhornet111</a>
        </div>
        <div className="wrapper">
          <i className="fa fa-mobile"></i> + 995 598 677 567
        </div>
        <div className="wrapper">
          <i className="fa fa-envelope"></i>{' '}
          <a href="mailto:arkadi.berikashvili90@gmail.com">arkadi.berikashvili90@gmail.com</a>
        </div>
        <div className="wrapper">
          <i className="fab fa-linkedin"></i>{' '}
          <a href="https://www.linkedin.com/in/arkadi-berikashvili-7496516b/" target="top">
            https://www.linkedin.com/in/arkadi-berikashvili-7496516b/
          </a>
        </div>
        <div className="wrapper">
          <i className="fa fa-globe"></i>{' '}
          <a href="http://arca-d.pro/" target="top">
            Personal website
          </a>
        </div>
      </Fieldset>
    </Row>
  );
};

export default PersonalInfo;
