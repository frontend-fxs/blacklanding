import React from 'react';
import Carousel from './Carousel';
import {
  BtnLink,
  BtnLabel,
  ExpertsBtnWrapper,
  ExpertsSection,
  ExpertsSubtitle,
  ExpertsTitle,
} from './styles';

const Experts = () => {
  return (
    <ExpertsSection className="fxs_bg_lightest_clr fxs_txt_center">
      <ExpertsTitle className="fxs_headline_from_medium_to_large fxs_txt_dark_1_clr">
        Top experts Team
      </ExpertsTitle>
      <ExpertsSubtitle className="fxs_entryPlain_txt">
        Join our professional traders and ask them all your questions in our Live Webinars
      </ExpertsSubtitle>
      <Carousel />
      <ExpertsBtnWrapper>
        <BtnLink href="#pricing" className="fxs_btn fxs_btn_cta" data-gtmid="landing-experts-cta">
          <BtnLabel>Join our experts</BtnLabel>
        </BtnLink>
      </ExpertsBtnWrapper>
    </ExpertsSection>
  );
};

export default Experts;
