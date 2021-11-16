import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const slideIn = keyframes`
  0% { 
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;
export const slideOut = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% { 
    transform: translateX(0%);
  }
`;

export const TestimonialSection = styled.section`
  position: relative;
  height: 435px;
  padding: 1.875rem 1rem 0;
  background-color: rgba(224, 232, 242, 0.3);
`;
export const TestimonialTitle = styled.h2`
  margin: 0;
  margin-bottom: 0.5rem;
  @media screen and (min-width: 998px) {
    margin-bottom: 0.3125rem;
  }
`;
export const TestimonialSubTitle = styled.p`
  margin: 0;
`;
export const TestimonialCarouselWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: 2rem auto 0;
  height: 223px;
  overflow: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  .svg-inline--fa.fa-w-10 {
    position: absolute;
    width: 1rem;
    height: 1.5rem;
    top: 40%;
    color: #dddedf;
    z-index: 3;
    cursor: pointer;
    &.active {
      color: #8c8d91;
    }
    @media screen and (min-width: 768px) {
      top: 38%;
    }
  }
  .svg-inline--fa.fa-chevron-right.fa-w-10 {
    right: 0px;
  }
`;
export const TestimonialCarouselItem = styled.div<{ isForward: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 0 1.5rem;
  min-width: 80%;
  overflow: hidden;
  scroll-behavior: smooth;
  animation: ${({ isForward }) =>
    isForward
      ? css`
          ${slideOut} .8s;
        `
      : css`
          ${slideIn} .8s;
        `};
  animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  @media screen and (min-width: 414px) {
    padding: 0 1.875rem;
  }
  @media screen and (min-width: 768px) {
    height: 150px;
  }
`;
export const TestimonialName = styled.h5`
  margin: 0;
  text-align: left;
`;
export const TestimonialDate = styled.p`
  text-align: left;
  font-weight: 300;
  color: #a3a3a8;
  margin: 0;
  margin-bottom: 0.625rem;
  @media screen and (min-width: 768px) {
    font-weight: 400;
  }
`;
export const TestimonialStarWrapper = styled.div`
  display: flex;
  align-items: center;
  .svg-inline--fa.fa-w-18 {
    width: 17.57px;
    height: 17px;
    color: #f5c861;
    margin-right: 0.375rem;
  }
`;
export const TestimonialComment = styled.h6`
  font-weight: 400;
  font-style: italic;
  font-size: 1rem;
  line-height: 1.4375rem;
  text-align: left;
  margin: 0.625rem 0;
  @media screen and (min-width: 998px) {
    font-size: 1.2rem;
    line-height: 1.625rem;
  }
`;
export const TestimonialDescription = styled.p`
  text-align: left;
  margin: 0;
`;
export const TestimonialCarouselIndicatorWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TestimonialCarouselIndicator = styled.div<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  margin: 0 0.3125rem;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#8C8D91' : '#DDDEDF')};
  cursor: pointer;
`;
/**************
 *  DESKTOP
 *************/
export const TestimonialContainer = styled.div`
  display: flex;
  padding-top: 3rem;
`;
export const TestimonialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 33%;
  &:not(:last-child) {
    border-right: 1px solid #dddedf;
  }
  @media screen and (min-width: 998px) {
    padding: 0 3rem;
  }
`;
