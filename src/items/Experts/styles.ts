import styled from '@emotion/styled';

export const ExpertsSection = styled.section`
  max-width: 1040px;
  margin: 0 auto;
  padding: 2.5rem 0 0;
  @media screen and (min-width: 768px) {
    padding: 3.125rem 0 0;
  }
`;
export const ExpertsTitle = styled.h2`
  font-size: 1.55rem;
  line-height: 1.625rem;
  margin: 0;
  margin-bottom: 1rem;
  @media screen and (min-width: 998px) {
    font-size: 2rem;
    line-height: 2.1875rem;
    margin-bottom: 0.375rem;
  }
`;
export const ExpertsSubtitle = styled.p`
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.375rem;
  margin: 0;
  margin: 0 3.125rem 1.875rem;
  @media screen and (min-width: 998px) {
    margin-bottom: 1.25rem;
  }
`;
export const ExpertsCarousel = styled.div`
  position: relative;
  padding: 0 1rem;
  overflow: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  .svg-inline--fa.fa-w-10 {
    position: absolute;
    top: 50%;
    z-index: 3;
    width: 0.75rem;
    height: 1.5rem;
    color: #dddedf;
    cursor: pointer;
    &.active {
      color: #8c8d91;
    }
    &.disabled {
      pointer-events: none;
    }
  }
  .svg-inline--fa.fa-chevron-left.fa-w-10 {
    left: 8px;
  }
  .svg-inline--fa.fa-chevron-right.fa-w-10 {
    right: 8px;
  }
`;
export const ExpertsCarouselWrapper = styled.div`
  display: flex;
  transition: transform 800ms ease-in-out;
`;
export const ExpertsCarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 220px;
  min-width: calc(100% - 32px);
  margin: 0 1rem;
  padding: 0 0.875rem;
  border: 1px solid #dddedf;
  box-sizing: border-box;
  @media screen and (min-width: 414px) {
    min-width: calc(50% - 32px);
  }
  @media screen and (min-width: 768px) {
    min-width: calc(33.33333333333333% - 32px);
  }
  @media screen and (min-width: 998px) {
    height: 265px;
    min-width: calc(25% - 32px);
  }
`;
export const ExpertsCarouselImg = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin: 1.25rem auto 0.5rem;
  object-fit: cover;
  @media screen and (min-width: 998px) {
    width: 125px;
    height: 125px;
  }
`;
export const ExpertName = styled.a`
  font-size: 1rem;
  line-height: 1.25rem;
  color: #e4871b;
  text-decoration: none;
  margin: 0;
  @media screen and (min-width: 998px) {
    font-size: 1.1rem;
    line-height: 1.3125rem;
  }
`;
export const ExpertRole = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.0625rem;
  color: #1b1c23;
  margin: 0;
  margin-bottom: 0.375rem;
  @media screen and (min-width: 998px) {
    font-size: 0.91875rem;
    line-height: 1.25rem;
  }
`;
export const ExpertDescription = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  line-height: 1.0625rem;
  color: #8c8d91;
  margin: 0;
  @media screen and (min-width: 998px) {
    font-size: 0.91875rem;
    line-height: 1.25rem;
  }
`;
export const ExpertsCarouselIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.875rem auto 2.5rem;
`;
export const ExpertsCarouselIndicator = styled.div<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  margin: 0 0.3125rem;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#8C8D91' : '#DDDEDF')};
  cursor: pointer;
`;
export const ExpertsBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0 3.125rem;
`;
export const BtnLink = styled.a`
  display: flex !important;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 156px;
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
