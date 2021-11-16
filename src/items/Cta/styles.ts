import styled from '@emotion/styled';

export const CtaSection = styled.section`
  max-width: 1040px;
  margin: 0 auto;
  padding: 1.875rem 1rem 0;
  background-color: rgba(224, 232, 242, 0.3);
  @media screen and (min-width: 998px) {
    display: flex;
    justify-content: space-evenly;
  }
`;
export const CtaTopLine = styled.p`
  font-size: 400;
  line-height: 1.25rem;
  color: #1b1c23;
  margin: 0;
  margin-bottom: 0.625rem;
  @media screen and (min-width: 998px) {
    margin-bottom: 0.9375rem;
  }
`;
export const CtaHeadLine = styled.h2`
  margin: 0;
  margin-bottom: 0.625rem;
  width: 80%;
  @media screen and (min-width: 998px) {
    width: 420px;
    margin-bottom: 0.9375rem;
  }
`;
export const CtaBottomLine = styled.p`
  font-weight: 300;
  font-size: 0.91875rem;
  line-height: 1.25rem;
  margin: 0;
  width: 80%;
  @media screen and (min-width: 998px) {
    width: 305px;
  }
`;
export const CtaDownloadHeading = styled.h5`
  font-style: italic;
  font-size: 1rem;
  line-height: 1.375rem;
  margin: 0;
`;
export const CtaDownloadWrapper = styled.div`
  margin-bottom: 2.5rem;
`;
export const CtaDownloadBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  padding-bottom: 2.5rem;
  @media screen and (min-width: 414px) {
    flex-direction: row;
    justify-content: flex-start;
  }
  & a {
    width: 100%;
    max-width: 180px;
    @media screen and (min-width: 414px) {
      &:first-of-type {
        margin-right: 2rem;
      }
    }
    @media screen and (min-width: 998px) {
      max-width: 137px;
      &:first-of-type {
        margin-right: 1rem;
      }
    }
  }
`;
export const CtaImg = styled.img`
  @media screen and (min-width: 998) {
    margin-left: 0;
    margin-top: 7px;
    height: 480px;
    width: 513px;
  }
`;

export const CtaLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 5rem;
`;
