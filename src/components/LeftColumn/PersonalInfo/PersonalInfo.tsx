import PersonalInfoItemEntry from '../../../models/PersonalInfoItemEntry';
import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

const PersonalInfo = ({
  location,
  address,
  born,
  skype,
  mobile,
  email,
  github,
  linkedin,
  website
}: {
  location: PersonalInfoItemEntry;
  address: PersonalInfoItemEntry;
  born: PersonalInfoItemEntry;
  skype: PersonalInfoItemEntry;
  mobile: PersonalInfoItemEntry;
  email: PersonalInfoItemEntry;
  github: PersonalInfoItemEntry;
  linkedin: PersonalInfoItemEntry;
  website: PersonalInfoItemEntry;
}) => {
  return (
    <Row>
      <Fieldset legend="Personal Info">
        <div className="wrapper">
          <i className={location.icon}></i> {location.title}
        </div>
        <div className="wrapper">
          <i className={address.icon}></i> {address.title}
        </div>
        <div className="wrapper">
          <i className={born.icon}></i> {born.title}
        </div>
        <div className="wrapper">
          <i className={skype.icon}></i> <a href={skype.uri}>{skype.title}</a>
        </div>
        <div className="wrapper">
          <i className={mobile.icon}></i> {mobile.title}
        </div>
        <div className="wrapper">
          <i className={email.icon}></i> <a href={email.uri}>{email.title}</a>
        </div>
        <div className="wrapper">
          <i className={github.icon}></i>{' '}
          <a href={github.uri} target="top">
            {github.title}
          </a>
        </div>
        <div className="wrapper">
          <i className={website.icon}></i>{' '}
          <a href={website.uri} target="top">
            {website.title}
          </a>
        </div>
        <div className="wrapper">
          <i className={linkedin.icon}></i>{' '}
          <a href={linkedin.uri} target="top">
            {linkedin.title}
          </a>
        </div>
      </Fieldset>
    </Row>
  );
};

export default PersonalInfo;
