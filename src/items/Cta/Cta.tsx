import React from 'react';
import useWindowSize from '../../utils/useWindowSize';
import {
  CtaBottomLine,
  CtaDownloadBtnWrapper,
  CtaDownloadHeading,
  CtaDownloadWrapper,
  CtaHeadLine,
  CtaImg,
  CtaLeftWrapper,
  CtaSection,
  CtaTopLine,
} from './styles';

const Cta = () => {
  const currentWidth = useWindowSize();
  return (
    <CtaSection>
      {currentWidth < 998 ? (
        <React.Fragment>
          <CtaTopLine className="fxs_txt_large">Don’t miss anything</CtaTopLine>
          <CtaHeadLine className="fxs_headline_from_medium_to_large fxs_txt_dark_1_clr">
            Get personalize notification in every device
          </CtaHeadLine>
          <CtaBottomLine className="fxs_entryPlain_txt">
            Set your notification in FXS App and never miss an update again
          </CtaBottomLine>
          <CtaImg
            src=" https://staticcontent.fxstreet.com/website/img/premiumLanding/landingapps.svg"
            alt="mobile-app"
          />
          <CtaDownloadHeading className="fxs_headline_highligh">FREE DOWNLOAD:</CtaDownloadHeading>
          <CtaDownloadBtnWrapper>
            <a
              href="https://play.google.com/store/apps/details?id=com.fxstreet.forexnews"
              target="_blank"
              rel="noopener noreferrer"
              data-gtmid="landing-app-googleplay"
            >
              <img
                src=" https://staticcontent.fxstreet.com/website/img/premiumLanding/GooglePlay.svg"
                alt="google-play"
              />
            </a>
            <a
              href="https://apps.apple.com/app/id636453976"
              target="_blank"
              rel="noopener noreferrer"
              data-gtmid="landing-app-applestore"
            >
              <img
                src=" https://staticcontent.fxstreet.com/website/img/premiumLanding/AppStore.svg"
                alt="ios-store"
              />
            </a>
          </CtaDownloadBtnWrapper>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <CtaLeftWrapper>
            <div>
              <CtaTopLine className="fxs_txt_large">Don’t miss anything</CtaTopLine>
              <CtaHeadLine className="fxs_headline_from_medium_to_large fxs_txt_dark_1_clr">
                Get personalize notification in every device
              </CtaHeadLine>
              <CtaBottomLine className="fxs_entryPlain_txt">
                Set your notification in FXS App and never miss an update again
              </CtaBottomLine>
            </div>
            <CtaDownloadWrapper>
              <CtaDownloadHeading className="fxs_headline_highligh">
                FREE DOWNLOAD:
              </CtaDownloadHeading>
              <CtaDownloadBtnWrapper>
                <a
                  href="https://play.google.com/store/apps/details?id=com.fxstreet.forexnews"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-gtmid="landing-app-googleplay"
                >
                  <img
                    src=" https://staticcontent.fxstreet.com/website/img/premiumLanding/GooglePlay.svg"
                    alt="google-play"
                  />
                </a>
                <a
                  href="https://apps.apple.com/app/id636453976"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-gtmid="landing-app-applestore"
                >
                  <img
                    src=" https://staticcontent.fxstreet.com/website/img/premiumLanding/AppStore.svg"
                    alt="ios-store"
                  />
                </a>
              </CtaDownloadBtnWrapper>
            </CtaDownloadWrapper>
          </CtaLeftWrapper>
          <CtaImg
            src=" https://staticcontent.fxstreet.com/website/img/premiumLanding/landingapps.svg"
            alt="mobile-app"
          />
        </React.Fragment>
      )}
    </CtaSection>
  );
};

export default Cta;
