import styled from '@emotion/styled';

type PricingCardProps = {
  isBig?: boolean;
  isFXSChoice: boolean;
  hadSaving: boolean;
};

export const PricingSection = styled.section<{ hasPromotion: boolean }>`
  height: 100%;
  max-width: ${({ hasPromotion }) => (hasPromotion ? 'unset' : '1040px')};
  margin: ${({ hasPromotion }) => (hasPromotion ? '1rem auto 70px' : '1rem auto 2.8125rem')};
  padding: 1rem;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  ${(props) =>
    props.hasPromotion &&
    "&:before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; height: 100%; background-color: ${({ hasPromotion }) => (hasPromotion ? '#1B1C23' : '#fff')}; z-index: 0; @media (min-width: 768px) { height: 275px; bottom: unset; } }"}
`;
export const BlackFridayWrapper = styled.div<{ hasPromotion: boolean }>`
  display: ${({ hasPromotion }) => (hasPromotion ? 'flex' : 'block')};
  justify-content: ${({ hasPromotion }) => (hasPromotion ? 'space-evenly' : '')};
  padding: 0 0 1rem 0;
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;
export const BlackFridayImg = styled.img<{ hasPromotion: boolean }>`
  z-index: 1;
  width: 120px;
  margin: 0 1rem;
  @media (min-width: 768px) {
    width: 180px;
  }
`;
export const BlackFridayTitleWrapper = styled.div<{ hasPromotion: boolean }>`
  z-index: 1;
`;
export const PricingTitle = styled.h2<{ hasPromotion: boolean }>`
  text-align: ${({ hasPromotion }) => (hasPromotion ? 'left' : 'center')};
  margin: 0 0 0.625rem;
  width: ${({ hasPromotion }) => (hasPromotion ? '' : '80%')};
  @media screen and (min-width: 998px) {
    margin: 0 0 0.8125rem;
  }
`;
export const PricingSubTitle = styled.p<{ hasPromotion: boolean }>`
  width: ${({ hasPromotion }) => (hasPromotion ? '100%' : '96%')};
  text-align: ${({ hasPromotion }) => (hasPromotion ? 'left' : 'center')};
  @media screen and (min-width: 768px) {
    width: ${({ hasPromotion }) => (hasPromotion ? '100%' : '420px')};
  }
`;
export const PricingWrapper = styled.div<{ hasPromotion: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 0 3.125rem;
  }
`;
export const PricingCard = styled.div<PricingCardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: ${({ hadSaving }) => (hadSaving ? '260px' : '220px')};
  margin: ${({ hadSaving }) => !hadSaving && '0'};
  margin: ${({ isFXSChoice }) => isFXSChoice && '1rem 0'};
  padding-top: ${({ isFXSChoice }) => (isFXSChoice ? '1.125rem' : '0')};
  box-shadow: ${({ isFXSChoice }) =>
    isFXSChoice ? '0px 3px 10px rgba(48, 76, 112, 0.25)' : '0px 1px 3px rgba(48, 76, 112, 0.25)'};
  @media screen and (min-width: 375px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: ${({ isBig }) => (isBig ? '128px' : '112px')};
    margin-bottom: ${({ isFXSChoice }) => isFXSChoice && '1rem'};
    padding-top: 14px;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    min-width: 235px;
    width: 292px;
    max-width: 292px;
    height: ${({ isFXSChoice }) => (isFXSChoice ? '305px' : '260px')};
    margin: ${({ hadSaving }) => !hadSaving && '0'};
    margin: ${({ isFXSChoice }) => isFXSChoice && '0 1.5rem'};
    padding-top: ${({ isFXSChoice }) => (isFXSChoice ? '3.3125rem' : '1.125rem')};
  }
`;
export const PricingCardDuration = styled.h3`
  margin: 0;
  margin-bottom: 0.375rem;
  @media screen and (min-width: 768px) {
    margin-bottom: 1.25rem;
  }
`;
export const PricingCardPrice = styled.h2<{ hadSaving: boolean }>`
  margin: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: ${({ hadSaving }) => (hadSaving ? '0.625rem' : '2.25rem')};
  }
`;
export const PricingCardSavings = styled.h4`
  font-size: 1rem;
  color: #7598c4;
  margin: 0 auto 0.3125rem;
  @media screen and (min-width: 375px) {
    margin-top: 0.875rem;
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.3125rem;
    margin: 0 auto 0.3125rem;
  }
`;
export const PricingCardSecondWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PricingCardDescription = styled.p<PricingCardProps>`
  font-size: 0.8rem;
  line-height: 1.0625rem;
  font-weight: 400;
  width: ${({ hadSaving }) => (hadSaving ? '217px' : '135px')};
  @media screen and (min-width: 375px) {
    width: ${({ hadSaving }) => (hadSaving ? '119px' : '135px')};
    margin: 0 auto 0.9rem;
  }
  @media screen and (min-width: 768px) {
    width: ${({ hadSaving }) => (hadSaving ? '217px' : '135px')};
    margin-bottom: 1.625rem;
    text-align: center;
  }
`;
export const PricingBtn = styled.a<{ primary: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 156px;
  text-decoration: none;
  color: ${({ primary }) => (primary ? '#fff' : '#E4871B')};
  background-color: ${({ primary }) => (primary ? '#E4871B' : '#fff')};
  border: 1px solid #e4871b;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: ${({ primary }) => !primary && '#f3f3f8'};
    text-decoration: none;
  }
`;
export const PricingBtnLabel = styled.span`
  font-size: 0.8rem;
  line-height: 1.375rem;
  font-weight: 700;
  vertical-align: middle;
  @media screen and (min-width: 768px) {
    font-size: 0.91875rem;
  }
`;
export const PricingTrinagle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  right: 0;
  top: 0;
  border-top: 79px solid #338473;
  border-left: 79px solid transparent;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  @media screen and (min-width: 375px) {
    border-top: 68px solid #338473;
    border-left: 68px solid transparent;
  }
  @media screen and (min-width: 768px) {
    border-top: 79px solid #338473;
    border-left: 79px solid transparent;
  }
`;
export const PricibgTriangleTxt = styled.p`
  position: absolute;
  right: -5px;
  bottom: 17px;
  transform: rotate(45deg) translate(-15px, -3px);
  font-weight: bold;
  font-size: 0.6875rem;
  line-height: 0.8125rem;
  color: #fff;
  @media screen and (min-width: 375px) {
    transform: rotate(45deg) translate(-15px, -5px);
    right: -7px;
    bottom: 8px;
  }
  @media screen and (min-width: 768px) {
    right: -5px;
    bottom: 17px;
    transform: rotate(45deg) translate(-15px, -3px);
  }
`;
export const Off20 = styled.img`
  position: absolute;
  top: -30px;
  right: -20px;
`;
export const Off50 = styled.img`
  position: absolute;
  top: -50px;
  right: -30px;
`;
export const LineThrough = styled.span`
  color: #a3a3a8;
  font-size: 18px;
  position: relative;
  margin: auto;
  padding: 0 2px;
  @media (min-width: 768px) {
    font-size: 25px;
  }
  &:before {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    right: 0;
    border-top: 2px solid;
    border-color: inherit;

    -webkit-transform: rotate(-10deg) translateY(-50%);
    -moz-transform: rotate(-10deg) translateY(-50%);
    -ms-transform: rotate(-10deg) translateY(-50%);
    -o-transform: rotate(-10deg) translateY(-50%);
    transform: rotate(-10deg) translateY(-50%);
  }
`;
export const BlackFridayDisclaimer = styled.p<{ hasPromotion: boolean }>`
  display: ${({ hasPromotion }) => (hasPromotion ? 'block' : 'none')};
  position: absolute;
  bottom: -70px;
  left: 0;
  right: 0;
`;
