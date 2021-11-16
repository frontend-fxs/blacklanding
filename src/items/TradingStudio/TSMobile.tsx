import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faChartLine,
  faChessQueen,
  faUserChart,
  faUsersClass,
  faVideo,
} from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  BtnLabel,
  BtnLink,
  BtnVideoLabel,
  BtnVideoWrapper,
  IconItem,
  ItemDescription,
  ItemImg,
  ItemImgWrapper,
  ItemIndicator,
  ItemIndicatorWrapper,
  ItemTitle,
  Navbar,
  NavbarItemWrapper,
  TradingStudioBtnWrapper,
} from './styles';
import TSProps from './types';

const TSMobile = ({ isActive, setIsActive }: TSProps) => {
  return (
    <React.Fragment>
      <Navbar>
        <NavbarItemWrapper
          isActive={isActive.signals}
          onClick={() => {
            setIsActive({
              signals: true,
              strategies: false,
              webinars: false,
              recordings: false,
              experts: false,
            });
          }}
          data-gtmid="landing-insights-signals"
        >
          <IconItem isActive={isActive.signals}>
            <FontAwesomeIcon icon={faChartLine} />
          </IconItem>
        </NavbarItemWrapper>
        <NavbarItemWrapper
          isActive={isActive.strategies}
          onClick={() => {
            setIsActive({
              signals: false,
              strategies: true,
              webinars: false,
              recordings: false,
              experts: false,
            });
          }}
          data-gtmid="landing-insights-strategies"
        >
          <IconItem isActive={isActive.strategies}>
            <FontAwesomeIcon icon={faChessQueen} />
          </IconItem>
        </NavbarItemWrapper>
        <NavbarItemWrapper
          isActive={isActive.webinars}
          onClick={() => {
            setIsActive({
              signals: false,
              strategies: false,
              webinars: true,
              recordings: false,
              experts: false,
            });
          }}
          data-gtmid="landing-insights-webinars"
        >
          <IconItem isActive={isActive.webinars}>
            <FontAwesomeIcon icon={faUsersClass} />
          </IconItem>
        </NavbarItemWrapper>
        <NavbarItemWrapper
          isActive={isActive.recordings}
          onClick={() => {
            setIsActive({
              signals: false,
              strategies: false,
              webinars: false,
              recordings: true,
              experts: false,
            });
          }}
          data-gtmid="landing-insights-recordings"
        >
          <IconItem isActive={isActive.recordings}>
            <FontAwesomeIcon icon={faVideo} />
          </IconItem>
        </NavbarItemWrapper>
        <NavbarItemWrapper
          isActive={isActive.experts}
          onClick={() => {
            setIsActive({
              signals: false,
              strategies: false,
              webinars: false,
              recordings: false,
              experts: true,
            });
          }}
          data-gtmid="landing-insights-experts"
        >
          <IconItem isActive={isActive.experts}>
            <FontAwesomeIcon icon={faUserChart} />
          </IconItem>
        </NavbarItemWrapper>
      </Navbar>
      <ItemTitle className="fxs_headline_small fxs_txt_dark_1_clr">
        {isActive.signals && 'Signals'}
        {isActive.strategies && 'Strategies'}
        {isActive.webinars && 'Webinars'}
        {isActive.recordings && 'Recordings'}
        {isActive.experts && 'Experts'}
      </ItemTitle>
      <ItemDescription className="fxs_txt_size_xsmall">
        {isActive.signals && 'Get daily real-time Signals in FX, Indices, Commodities and Crypto'}
        {isActive.strategies &&
          'Learn and get an analytic criteria to detect trading opportunities'}
        {isActive.webinars && 'Learn from the best analysts with our Weekly Live webinars'}
        {isActive.recordings &&
          'Access our recordings catalog and watch more than 4,000 videos since 2007'}
        {isActive.experts &&
          'Our experts will accompany you on your complete trading process and train you to become a professional trader'}
      </ItemDescription>
      <ItemImgWrapper>
        <ItemImg
          src="https://staticcontent.fxstreet.com/website/img/premiumLanding/signalsMobile.svg"
          alt="trading-studio"
        />
        <BtnVideoWrapper data-gtmid="landing-insights-demo">
          <FontAwesomeIcon icon={faPlayCircle} />
          <BtnVideoLabel>Watch full demo</BtnVideoLabel>
        </BtnVideoWrapper>
      </ItemImgWrapper>
      <ItemIndicatorWrapper>
        <ItemIndicator isActive={isActive.signals} data-gtmid="landing-insights-selector" />
        <ItemIndicator isActive={isActive.strategies} data-gtmid="landing-insights-selector" />
        <ItemIndicator isActive={isActive.webinars} data-gtmid="landing-insights-selector" />
        <ItemIndicator isActive={isActive.recordings} data-gtmid="landing-insights-selector" />
        <ItemIndicator isActive={isActive.experts} data-gtmid="landing-insights-selector" />
      </ItemIndicatorWrapper>
      <TradingStudioBtnWrapper>
        <BtnLink href="#pricing" className="fxs_btn fxs_btn_cta" data-gtmid="landing-insights-cta">
          <BtnLabel>Subscribe today!</BtnLabel>
        </BtnLink>
      </TradingStudioBtnWrapper>
    </React.Fragment>
  );
};

export default TSMobile;
