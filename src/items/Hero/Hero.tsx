import React from 'react';
import {
  BtnLabel,
  BtnLink,
  HeroImg,
  HeroLogo,
  HeroSection,
  HeroTxtHeading,
  HeroTxtP,
  HeroTxtWrapper,
} from './styles';

const Hero = () => {
  return (
    <HeroSection className="fxs_bg_lightest_clr">
      <HeroTxtWrapper>
        <HeroLogo
          src="https://staticcontent.fxstreet.com/website/img/premiumLanding/landingLogoPremium.svg"
          alt="logo-premium"
        />
        <HeroTxtHeading className="fxs_headline_large fxs_txt_dark_1_clr">
          Trade with confidence
        </HeroTxtHeading>
        <HeroTxtP className="fxs_entryPlain_txt_large">
          Stay focused, be disciplined and trust your method. We will help you identify the best
          market opportunities, execute your own trading plan and train you to be that professional
          trader that you want to become.
        </HeroTxtP>
        <BtnLink
          href="#pricing"
          className="fxs_btn fxs_btn_cta"
          data-gtmid="landing-becomepremium-cta"
        >
          <BtnLabel>Subscribe today!</BtnLabel>
        </BtnLink>
      </HeroTxtWrapper>
      <HeroImg
        src="https://staticcontent.fxstreet.com/website/img/premiumLanding/hero.svg"
        alt="hero"
      />
    </HeroSection>
  );
};

export default Hero;
