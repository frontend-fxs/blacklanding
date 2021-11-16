import styled from '@emotion/styled';

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1040px;
  margin: 0 auto;
  padding: 1.875rem 1.5rem 2.1875rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
  @media screen and (min-width: 998px) {
    padding: 3.75rem 1rem 2.8125rem;
  }
`;
export const HeroTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.3125rem;
  @media screen and (min-width: 998px) {
    flex-basis: 450px;
    margin-bottom: 0;
    margin-right: 4rem;
    padding: 0;
    padding-left: 2.875rem;
  }
`;
export const HeroLogo = styled.img`
  width: 125px;
  height: 56.25px;
  margin-bottom: 1.875rem;
  @media screen and (min-width: 998px) {
    width: 152px;
    height: 68.4px;
    margin-bottom: 3.8125rem;
  }
`;
export const HeroTxtHeading = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  @media screen and (min-width: 998px) {
    margin-bottom: 12px;
    white-space: nowrap;
  }
`;
export const HeroTxtP = styled.p`
  font-weight: 300;
  width: 98%;
  margin: 0;
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    width: 100%;
    margin-bottom: 12px;
  }
`;
export const BtnLink = styled.a`
  display: flex !important;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 163px;
  @media screen and (min-width: 768px) {
    width: 156px;
  }
`;
export const BtnLabel = styled.span`
  font-size: 0.8rem;
  line-height: 1.375rem;
  @media screen and (min-width: 768px) {
    font-size: 0.91875rem;
  }
`;
export const HeroImg = styled.img`
  width: 382.63px;
  height: 296px;
  @media screen and (min-width: 998px) {
    width: 462px;
    height: 357px;
    position: absolute;
    right: 1rem;
    bottom: 2rem;
  }
`;
