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
  ItemImg,
  ItemImgWrapper,
  MainDesktopContainer,
  Sidebar,
  SidebarItem,
  SidebarItemSubtitle,
  SidebarItemtDescription,
  SidebarItemTitle,
  SidebarItemWraper,
  TradingStudioBtnWrapper,
} from './styles';
import TSProps from './types';

const TSDesktop = ({ isActive, setIsActive }: TSProps) => {
  return (
    <React.Fragment>
      <MainDesktopContainer>
        <Sidebar>
          <SidebarItem
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
            <SidebarItemWraper>
              <IconItem isActive={isActive.signals}>
                <FontAwesomeIcon icon={faChartLine} />
              </IconItem>
            </SidebarItemWraper>
            <SidebarItemtDescription>
              <SidebarItemTitle className="fxs_headline_tiny">Signals</SidebarItemTitle>
              <SidebarItemSubtitle className="fxs_txt_size_xsmall">
                Get daily real-time Signals in FX, Indices, Commodities and Crypto
              </SidebarItemSubtitle>
            </SidebarItemtDescription>
          </SidebarItem>
          <SidebarItem
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
            <SidebarItemWraper>
              <IconItem isActive={isActive.strategies}>
                <FontAwesomeIcon icon={faChessQueen} />
              </IconItem>
            </SidebarItemWraper>
            <SidebarItemtDescription>
              <SidebarItemTitle className="fxs_headline_tiny">Strategies</SidebarItemTitle>
              <SidebarItemSubtitle className="fxs_txt_size_xsmall">
                Learn and get an analytic criteria to detect trading opportunities
              </SidebarItemSubtitle>
            </SidebarItemtDescription>
          </SidebarItem>
          <SidebarItem
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
            <SidebarItemWraper>
              <IconItem isActive={isActive.webinars}>
                <FontAwesomeIcon icon={faUsersClass} />
              </IconItem>
            </SidebarItemWraper>
            <SidebarItemtDescription>
              <SidebarItemTitle className="fxs_headline_tiny">Webinars</SidebarItemTitle>
              <SidebarItemSubtitle className="fxs_txt_size_xsmall">
                Learn from the best analysts with our Weekly Live webinars
              </SidebarItemSubtitle>
            </SidebarItemtDescription>
          </SidebarItem>
          <SidebarItem
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
            <SidebarItemWraper>
              <IconItem isActive={isActive.recordings}>
                <FontAwesomeIcon icon={faVideo} />
              </IconItem>
            </SidebarItemWraper>
            <SidebarItemtDescription>
              <SidebarItemTitle className="fxs_headline_tiny">Recordings</SidebarItemTitle>
              <SidebarItemSubtitle className="fxs_txt_size_xsmall">
                Access our recordings catalog and watch more than 4,000 videos since 2007
              </SidebarItemSubtitle>
            </SidebarItemtDescription>
          </SidebarItem>
          <SidebarItem
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
            <SidebarItemWraper>
              <IconItem isActive={isActive.experts}>
                <FontAwesomeIcon icon={faUserChart} />
              </IconItem>
            </SidebarItemWraper>
            <SidebarItemtDescription>
              <SidebarItemTitle className="fxs_headline_tiny">Experts</SidebarItemTitle>
              <SidebarItemSubtitle className="fxs_txt_size_xsmall">
                Our experts will accompany you on your complete trading process and train you to
                become a professional trader
              </SidebarItemSubtitle>
            </SidebarItemtDescription>
          </SidebarItem>
        </Sidebar>
        <div>
          <ItemImgWrapper>
            <ItemImg
              src="https://staticcontent.fxstreet.com/website/img/premiumLanding/signlas.svg"
              alt="trading-studio"
            />
            <BtnVideoWrapper data-gtmid="landing-insights-demo">
              <FontAwesomeIcon icon={faPlayCircle} />
              <BtnVideoLabel>Watch full demo</BtnVideoLabel>
            </BtnVideoWrapper>
          </ItemImgWrapper>
        </div>
      </MainDesktopContainer>
      <TradingStudioBtnWrapper>
        <BtnLink href="#pricing" className="fxs_btn fxs_btn_cta" data-gtmid="landing-insights-cta">
          <BtnLabel>Subscribe today</BtnLabel>
        </BtnLink>
      </TradingStudioBtnWrapper>
    </React.Fragment>
  );
};

export default TSDesktop;
