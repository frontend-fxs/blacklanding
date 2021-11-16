import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FeaturesData } from './data';
import { FeaturesCard, FeaturesCardTitle, FeaturesIcon, FeaturesSection } from './styles';

const Feauters = () => {
  return (
    <FeaturesSection>
      {FeaturesData.map((feature) => (
        <FeaturesCard className="fxs_bg_lightest_clr fxs_txt_center" key={feature.id}>
          <FeaturesIcon className="fxs_bg_brand_highlight_light_3_clr">
            <FontAwesomeIcon icon={feature.icon} />
          </FeaturesIcon>
          <FeaturesCardTitle
            className="fxs_headline_from_small_to_medium fxs_txt_dark_1_clr"
            isVideo={feature.isVideo}
          >
            {feature.title}
          </FeaturesCardTitle>
          <p className="fxs_entryPlain_txt fxs_resetMargin">{feature.description}</p>
        </FeaturesCard>
      ))}
    </FeaturesSection>
  );
};

export default Feauters;
