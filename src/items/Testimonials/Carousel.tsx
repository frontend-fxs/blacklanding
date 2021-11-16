import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { TestimonialData } from './data';
import Stars from './Stars';
import {
  TestimonialCarouselIndicator,
  TestimonialCarouselIndicatorWrapper,
  TestimonialCarouselItem,
  TestimonialCarouselWrapper,
  TestimonialComment,
  TestimonialDate,
  TestimonialDescription,
  TestimonialName,
} from './styles';

const Carousel = () => {
  const [isForward, setIsForward] = useState(true);
  const [current, setCurrent] = useState(1);
  const length = TestimonialData.length;

  const hasNext = () => {
    if (current < length) {
      setCurrent(current + 1);
      setIsForward(true);
    }
  };
  const hasPrev = () => {
    if (current > 1) {
      setCurrent(current - 1);
      setIsForward(false);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => hasNext(),
    onSwipedRight: () => hasPrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <TestimonialCarouselWrapper>
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={hasPrev}
          className={`${current > 1 ? 'active' : ''}`}
          data-gtmid="landing-testimonials-scroll"
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={hasNext}
          className={`${current < length ? 'active' : ''}`}
          data-gtmid="landing-testimonials-scroll"
        />
        {TestimonialData.map(
          (testimonial) =>
            testimonial.id === current && (
              <TestimonialCarouselItem key={testimonial.id} isForward={isForward}>
                <TestimonialName className="fxs_headline_small fxs_txt_dark_1_clr">
                  {testimonial.name}
                </TestimonialName>
                <TestimonialDate className="fxs_txt_size_small">{testimonial.date}</TestimonialDate>
                <Stars />
                <TestimonialComment className="fxs_txt_dark_1_clr">
                  {testimonial.comment}
                </TestimonialComment>
                <TestimonialDescription className="fxs_entryPlain_txt_small">
                  {testimonial.description}
                </TestimonialDescription>
              </TestimonialCarouselItem>
            ),
        )}
      </TestimonialCarouselWrapper>
      <TestimonialCarouselIndicatorWrapper>
        {TestimonialData.map((testimonial) => (
          <TestimonialCarouselIndicator
            key={testimonial.id}
            isActive={testimonial.id === current}
            onClick={() => setCurrent(testimonial.id)}
            data-gtmid="landing-testimonials-selector"
          />
        ))}
      </TestimonialCarouselIndicatorWrapper>
    </div>
  );
};

export default Carousel;
