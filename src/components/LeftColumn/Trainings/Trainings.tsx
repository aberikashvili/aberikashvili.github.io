import TrainCertEntry from '../../../models/TrainCertEntry';
import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

import './Trainings.css';

const Trainings = ({ trainings }: { trainings: TrainCertEntry[] }) => {
  let result = (
    <Row>
      <Fieldset legend="Trainings & Certifications">
        {trainings.map(({ state, title, location, icon }) => {
          let locationFragment = (
            <>
              <i className="fa fa-globe"></i> Online
            </>
          );

          if (location !== 'Online') {
            locationFragment = (
              <>
                <i className="fa fa-map-marker-alt"></i> {location.city}, {location.country}
              </>
            );
          }

          return (
            <>
              <div className="training">
                <div className="training__title--outer">
                  <div className="training__icon">
                    <i className={icon}></i>
                  </div>
                  <div className="training__title">{title}</div>
                </div>
                <div className="training__details">
                  <div>{state}</div>
                  <div>{locationFragment}</div>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </Fieldset>
    </Row>
  );

  return result;
};

export default Trainings;
