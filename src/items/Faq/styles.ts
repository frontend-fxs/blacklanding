import styled from '@emotion/styled';

type AnswerProps = {
  short?: boolean;
  longest?: boolean;
  longPreviewDesktop?: boolean;
  showFullAnswer?: boolean;
};

export const FaqSection = styled.section`
  max-width: 1040px;
  margin: 0 auto;
  padding-top: 3rem;
  @media screen and (min-width: 768px) {
    padding-top: 2.1875rem;
  }
`;
export const FaqTitle = styled.h2`
  margin: 0;
  margin-bottom: 1.875rem;
  @media screen and (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;
export const FaqWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1.25rem 1rem 0;
  border-bottom: 1px solid #dddedf;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin: 1.25rem auto 0;
    max-width: 837px;
  }
`;
export const FaqQuestion = styled.p`
  width: calc(100% - 2.4rem);
  margin: 0;
  margin-bottom: 0.375rem;
`;
export const FaqBtnIcon = styled.div<{ showFullAnswer: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  .svg-inline--fa.fa-w-10 {
    width: 1rem;
    height: 1.5rem;
    color: #49494f;
    transform: ${({ showFullAnswer }) => (showFullAnswer ? 'rotate(180deg)' : 'rotate(0)')};
    transition: transform 0.5s ease;
  }
`;
export const FaqAnswer = styled.p<AnswerProps>`
  font-weight: 300;
  margin: 0;
  margin-bottom: 0.75rem;
  width: ${({ short }) => (short ? '90%' : '95%')};
  height: ${({ showFullAnswer }) => (showFullAnswer ? '100%' : '3.75rem')};
  transition: all 1s ease-out;
  @media screen and (min-width: 400px) {
    height: ${({ showFullAnswer, longest }) =>
      showFullAnswer ? '100%' : longest ? '3.75rem' : '2.5rem'};
  }
  @media screen and (min-width: 768px) {
    width: calc(100% - 24px);
    max-width: 820px;
    height: ${({ showFullAnswer, longPreviewDesktop }) =>
      showFullAnswer ? '100%' : longPreviewDesktop ? '2.5rem' : '1.25rem'};
  }
  @media screen and (min-width: 970px) {
    height: ${({ showFullAnswer }) => (showFullAnswer ? '100%' : '1.25rem')};
  }
`;

export const FaqFullAnswer = styled.span<AnswerProps>`
  display: ${({ showFullAnswer }) => (showFullAnswer ? 'inline' : 'none')};
  transition: display 0.5s ease;
  & ul,
  ol {
    padding: 0;
  }
`;
