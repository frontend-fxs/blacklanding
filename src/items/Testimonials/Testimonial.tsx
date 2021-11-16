import React from 'react';
import useWindowSize from '../../utils/useWindowSize';
import Carousel from './Carousel';
import { TestimonialData } from './data';
import Stars from './Stars';
import {
  TestimonialComment,
  TestimonialContainer,
  TestimonialDate,
  TestimonialDescription,
  TestimonialName,
  TestimonialSection,
  TestimonialSubTitle,
  TestimonialTitle,
  TestimonialWrapper,
} from './styles';

const Testimonials = () => {
  const currentWidth = useWindowSize();
  return (
    <TestimonialSection className="fxs_txt_center">
      <TestimonialTitle className="fxs_headline_from_medium_to_large fxs_txt_dark_1_clr">
        What FXS users say
      </TestimonialTitle>
      <TestimonialSubTitle className="fxs_entryPlain_txt">
        Twenty years of experience in the field back us up
      </TestimonialSubTitle>
      {currentWidth < 998 ? (
        <Carousel />
      ) : (
        <TestimonialContainer>
          {TestimonialData.map((testimonial) => (
            <TestimonialWrapper key={testimonial.id}>
              <TestimonialName className="fxs_txt_dark_1_clr fxs_headline_small">
                {testimonial.name}
              </TestimonialName>
              <TestimonialDate className="fxs_txt_size_small">{testimonial.date}</TestimonialDate>
              <Stars />
              <TestimonialComment>{testimonial.comment}</TestimonialComment>
              <TestimonialDescription className="fxs_entryPlain_txt_small">
                {testimonial.description}
              </TestimonialDescription>
            </TestimonialWrapper>
          ))}
        </TestimonialContainer>
      )}
    </TestimonialSection>
  );
};

export default Testimonials;
