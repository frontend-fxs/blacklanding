import styled from '@emotion/styled';

export const FeaturesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 1rem 1.5rem;
  position: relative;
  &:before {
    background-color: rgba(224, 232, 242, 0.4);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 170px;
  }
`;
export const FeaturesCard = styled.div`
  position: relative;
  flex: 1 1 calc(90% - 32px);
  width: 300px;
  height: 157px;
  margin-top: 3.25rem;
  padding: 0 0.3125rem;
  border: 1px solid #dddedf;
  box-sizing: border-box;
  @media screen and (min-width: 414px) {
    flex: 1 1 calc(50% - 32px);
    max-width: 241px;
    &:nth-of-type(odd) {
      margin-right: 0.625rem;
    }
  }
  @media screen and (min-width: 768px) {
    &:nth-of-type(odd) {
      margin-right: 0px;
    }
    height: 177px;
    margin: 3.875rem 0.3125rem 0;
    padding: 0 0.25rem;
  }
  @media screen and (min-width: 998px) {
    flex: 1 1 20%;
    margin-right: 0;
    padding: 0 1.3rem;
  }
`;
export const FeaturesIcon = styled.div`
  position: absolute;
  top: -29px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  .svg-inline--fa {
    height: 1em;
    color: #fff;
    &.fa-w-14 {
      width: 1.75rem;
      height: 2rem;
    }
    &.fa-w-20 {
      width: 2rem;
      height: 1.625rem;
    }
    &.fa-film.fa-w-16 {
      width: 1.6875rem;
      transform: matrix(0.87, 0.54, -0.46, 0.86, 0, 0);
    }
    &.fa-w-16 {
      width: 2rem;
      height: 2rem;
    }
  }
`;
export const FeaturesCardTitle = styled.h3<{ isVideo: boolean }>`
  margin-top: 2.5625rem;
  margin-bottom: 0.6875rem;
  @media screen and (min-width: 414px) {
    margin: ${({ isVideo }) => isVideo && '2.5625rem auto 0.6875rem'};
    width: ${({ isVideo }) => isVideo && '50%'};
  }
  @media screen and (min-width: 998px) {
    margin-top: 2.875rem;
    width: 100%;
  }
`;
export const FeaturesCardDescription = styled.p`
  padding: 0 0.75rem;
  @media screen and (min-width: 478px) {
    padding: 0;
  }
`;
