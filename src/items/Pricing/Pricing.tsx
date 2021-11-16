import React from 'react';
import {
  BlackFridayDisclaimer,
  BlackFridayImg,
  BlackFridayTitleWrapper,
  BlackFridayWrapper,
  LineThrough,
  Off20,
  Off50,
  PricibgTriangleTxt,
  PricingBtn,
  PricingBtnLabel,
  PricingCard,
  PricingCardDescription,
  PricingCardDuration,
  PricingCardPrice,
  PricingCardSavings,
  PricingCardSecondWrap,
  PricingSection,
  PricingSubTitle,
  PricingTitle,
  PricingTrinagle,
  PricingWrapper,
} from './styles';

export interface SignalLandingProduct {
  Id: string;
  Name: string;
  Price: string;
  Saved: number;
  Saving: string;
  Description: string;
  IsFxsChoice: boolean;
  DataGtmId: string;
  ButtonUrl: string;
  MonthlyPrice: string;
  IsBig: boolean;
}
export interface SignalLandingProps {
  Products: SignalLandingProduct[];
}

const Pricing = ({ Products }: SignalLandingProps) => {
  const hasPromotion = true;
  const isBlackFriday = false;
  const isCyber = false;
  return (
    <PricingSection id="pricing" className="fxs_txt_center fxs_bg_lightest_clr" hasPromotion>
      <BlackFridayWrapper hasPromotion>
        {hasPromotion && (
          <BlackFridayImg
            src="https://staticconent.blob.core.windows.net/website/img/blackfriday/blackfridayicon.svg"
            alt="black friday"
            hasPromotion
          />
        )}
        <BlackFridayTitleWrapper hasPromotion>
          <PricingTitle
            className={`fxs_headline_from_medium_to_large ${
              hasPromotion ? 'fxs_txt_lightest_clr' : 'fxs_txt_dark_1_clr'
            }`}
            hasPromotion
          >
            Subscribe to become a confident trader
          </PricingTitle>
          <PricingSubTitle
            className={`fxs_entryPlain_txt fxs_marginAuto ${
              hasPromotion ? 'fxs_txt_lightest_clr' : 'fxs_txt_dark_1_clr'
            }`}
            hasPromotion
          >
            We will help you to catch the best market opportunities and the proper knowledge about
            markets
          </PricingSubTitle>
        </BlackFridayTitleWrapper>
      </BlackFridayWrapper>
      <PricingWrapper hasPromotion>
        {Products.map((price, index) => (
          <PricingCard
            isBig={price.Saved > 0}
            isFXSChoice={price.IsFxsChoice}
            hadSaving={price.Saved > 0}
            className="fxs_bg_lightest_clr"
            key={price.Id}
          >
            {price.IsFxsChoice && !hasPromotion && (
              <PricingTrinagle>
                <PricibgTriangleTxt>FXS CHOICE</PricibgTriangleTxt>
              </PricingTrinagle>
            )}
            {hasPromotion && index === 1 && (
              <Off20 src="https://staticconent.blob.core.windows.net/website/img/blackfriday/20off.svg" />
            )}
            {hasPromotion && index === 2 && (
              <Off50 src="https://staticconent.blob.core.windows.net/website/img/blackfriday/50off.svg" />
            )}
            <div>
              <PricingCardDuration className="fxs_headline_small">{price.Name}</PricingCardDuration>
              {hasPromotion && index === 1 && <p><LineThrough>$119.85</LineThrough></p>}
              {hasPromotion && index === 2 && <p><LineThrough>$479.40</LineThrough></p>}
              <PricingCardPrice
                hadSaving={price.Saved > 0}
                className="fxs_headline_large fxs_txt_brand_highlight_clr"
              >
                {price.MonthlyPrice}
              </PricingCardPrice>
              <PricingCardSavings className="fxs_headline_small">{price.Saving}</PricingCardSavings>
            </div>
            <PricingCardSecondWrap>
              <PricingCardDescription
                hadSaving={price.Saved > 0}
                isFXSChoice={price.IsFxsChoice}
                className="fxs_txt_light_1_clr"
              >
                {price.Description}
              </PricingCardDescription>
              <PricingBtn
                primary={price.IsFxsChoice}
                className={price.IsFxsChoice ? 'fxs_btn fxs_btn_cta' : ''}
                data-gtmid={price.DataGtmId}
                href={price.ButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PricingBtnLabel>Subscribe</PricingBtnLabel>
              </PricingBtn>
            </PricingCardSecondWrap>
          </PricingCard>
        ))}
      </PricingWrapper>
      <BlackFridayDisclaimer className="fxs_entryPlain_txt_small fxs_txt_center " hasPromotion>
        *Black Friday pricing will not continue after the campaign. Subscription will be renewed
        with original pricing.
      </BlackFridayDisclaimer>
    </PricingSection>
  );
};

export default Pricing;
