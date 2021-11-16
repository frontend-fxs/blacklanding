import React from 'react';
import { FooterSection, FooterTxt } from './styles';

const Footer = () => {
  return (
    <FooterSection className="fxs_bg_lightest_clr">
      <FooterTxt className="fxs_txt_weight_400">
        We hope you found the answers you were looking for. You can read more about Signals Term &
        Conditions{' '}
        <a
          href="https://www.fxstreet.com/signals/signals-terms-conditions"
          target="_blank"
          rel="noopener noreferrer"
          data-gtmid="landing-qa-moreinfo"
        >
          here
        </a>
        . Please{' '}
        <a
          href="https://www.fxstreet.com/info/contact-us"
          target="_blank"
          rel="noopener noreferrer"
          data-gtmid="landing-qa-contactus"
        >
          Contact Us
        </a>{' '}
        for further information.
      </FooterTxt>
    </FooterSection>
  );
};

export default Footer;
