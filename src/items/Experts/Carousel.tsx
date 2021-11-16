import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSwipeable } from 'react-swipeable';
import { ExpertsData } from './data';
import {
  ExpertDescription,
  ExpertName,
  ExpertRole,
  ExpertsCarousel,
  ExpertsCarouselImg,
  ExpertsCarouselIndicator,
  ExpertsCarouselIndicatorWrapper,
  ExpertsCarouselItem,
  ExpertsCarouselWrapper,
} from './styles';
import useCarousel from './useCarousel';

const Carousel = () => {
  const {
    handlePrev,
    handleNext,
    setDistance,
    setSlideDot,
    setViewed,
    carouselElement,
    containerWidth,
    slideProps,
    containerRef,
    hasNext,
    hasPrev,
    slideDot,
  } = useCarousel(ExpertsData.length);

  const slides = [];
  const dots = Math.ceil(ExpertsData.length / carouselElement);
  if (dots !== Infinity) {
    for (let i = 0; i < dots; i++) {
      slides.push(
        <ExpertsCarouselIndicator
          key={i}
          isActive={i === slideDot}
          onClick={() => {
            containerWidth && setDistance(-(containerWidth * i));
            setViewed(carouselElement * i);
            setSlideDot(i);
          }}
          data-gtmid="landing-experts-selector"
        />,
      );
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <ExpertsCarousel>
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={handlePrev}
          className={`${hasPrev ? 'active' : 'disabled'}`}
          data-gtmid="landing-experts-scroll"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={handleNext}
          className={`${hasNext ? 'active' : 'disabled'}`}
          data-gtmid="landing-experts-scroll"
        />
        <ExpertsCarouselWrapper ref={containerRef} {...slideProps}>
          {ExpertsData.map((expert) => (
            <ExpertsCarouselItem key={expert.id}>
              <ExpertsCarouselImg src={expert.imageUrl} alt={expert.name} />
              <ExpertName
                className="fxs_headline_small"
                href={expert.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {expert.name}
              </ExpertName>
              <ExpertRole className="fxs_txt_small">{expert.role}</ExpertRole>
              <ExpertDescription className="fxs_entryPlain_txt_small">
                {expert.description}
              </ExpertDescription>
            </ExpertsCarouselItem>
          ))}
        </ExpertsCarouselWrapper>
      </ExpertsCarousel>
      <ExpertsCarouselIndicatorWrapper>{slides}</ExpertsCarouselIndicatorWrapper>
    </div>
  );
};

export default Carousel;
