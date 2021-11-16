import React, { useState } from 'react';
import useWindowSize from '../../utils/useWindowSize';
import { TradingStudioSection, TradingStudioSubtitle, TradingStudioTitle } from './styles';
import TSDesktop from './TSDesktop';
import TSMobile from './TSMobile';

const initialState = {
  signals: true,
  strategies: false,
  webinars: false,
  recordings: false,
  experts: false,
};

const TradingStudio = () => {
  const currentWidth = useWindowSize();
  const [isActive, setIsActive] = useState(initialState);

  return (
    <TradingStudioSection className="fxs_bg_lightest_clr  fxs_txt_center">
      <TradingStudioTitle className="fxs_headline_from_medium_to_large fxs_txt_dark_1_clr">
        Become a professional using your personal Trading Studio
      </TradingStudioTitle>
      <TradingStudioSubtitle className="fxs_entryPlain_txt">
        Start achieving your trades with all the necessary learning tools and customizing your
        dashboard as your prefer
      </TradingStudioSubtitle>
      {currentWidth < 998 ? (
        <TSMobile isActive={isActive} setIsActive={setIsActive} />
      ) : (
        <TSDesktop isActive={isActive} setIsActive={setIsActive} />
      )}
    </TradingStudioSection>
  );
};

export default TradingStudio;
