import { useEffect, useRef, useState } from 'react';
import useWindowSize from '../../utils/useWindowSize';

const useCarousel = (countElements: number) => {
  const [carouselElement, setCarouselElement] = useState(0);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(0);
  const [distance, setDistance] = useState(0);
  const [slideDot, setSlideDot] = useState(0);
  const [viewed, setViewed] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentWidth = useWindowSize();

  useEffect(() => {
    currentWidth < 414 ? setCarouselElement(1) : setCarouselElement(2);
    currentWidth >= 768 && setCarouselElement(3);
    currentWidth >= 998 && setCarouselElement(4);
    setContainerWidth(containerRef?.current?.clientWidth);
    setDistance(0);
    setSlideDot(0);
    setViewed(0);
  }, [currentWidth]);

  const handlePrev = () => {
    if (hasPrev) {
      containerWidth && setDistance(distance + containerWidth);
      setSlideDot(slideDot - 1);
      setViewed(viewed - carouselElement);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      containerWidth && setDistance(distance - containerWidth);
      setSlideDot(slideDot + 1);
      setViewed(viewed + carouselElement);
    }
  };

  const slideProps = {
    style: { transform: `translateX(${distance}px)` },
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + carouselElement < countElements;

  return {
    handlePrev,
    handleNext,
    setDistance,
    setSlideDot,
    setViewed,
    carouselElement,
    containerWidth,
    containerRef,
    hasPrev,
    hasNext,
    slideProps,
    slideDot,
  };
};

export default useCarousel;
