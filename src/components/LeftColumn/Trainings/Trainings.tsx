import React, { useContext } from 'react';
import TrainCertEntry from '../../../models/TrainCertEntry';
import Fieldset from '../../Fieldset/Fieldset';
import Row from '../../Row/Row';

import './Trainings.css';
import ConfigurationContext from '../../../store/ConfigurationContext';
import Card from '../../shared/Card/Card';

const Trainings = ({ trainings }: { trainings: TrainCertEntry[] }) => {
  const configCtx = useContext(ConfigurationContext);
  const showCertificateImages = configCtx.mode === 'custom' && configCtx.certificateImages;

  return (
    <Row>
      <Fieldset legend="Trainings & Certifications">
        {trainings.map(({ state, title, location, icon, certificate }) => {
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
            <Card
              key={`cert-${title}`}
              meta={{ left: state, right: locationFragment }}
              title={title}
              icon={icon || undefined}
              {...(showCertificateImages && { image: certificate })}
            />
          );
        })}
      </Fieldset>
    </Row>
  );
};

export default Trainings;
