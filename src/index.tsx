import {
  FXSBackgrounds,
  FXSButtons,
  FXSGlobals,
  FXSMargins,
  FXSTextAlignments,
  FXSTextColors,
  FXSTextProperties,
  FXSTextSizes,
} from 'fxs-styles';
import React from 'react';
// import Cta from './items/Cta/Cta';
import Experts from './items/Experts/Experts';
import Faq from './items/Faq/Faq';
import Features from './items/Features/Features';
import Footer from './items/Footer/Footer';
import Hero from './items/Hero/Hero';
import Pricing from './items/Pricing/Pricing';
import Testimonials from './items/Testimonials/Testimonial';
import mapToProduct from './mapper/productMapper';
import { SignalLandingProduct, SignalLandingProductResponse } from './models/signalLanding';
// import TradingStudio from './items/TradingStudio/TradingStudio';
import { Container, Divider } from './styles/styles';

export interface SignalLandingProps {
  Products: SignalLandingProductResponse[];
}

const Landing = ({ Products }: SignalLandingProps) => {
  const signalLandingPropsMapped: SignalLandingProduct[] = Products.map((p) => mapToProduct(p));
  [signalLandingPropsMapped[1].IsBig, signalLandingPropsMapped[2].IsBig] = [true, true];

  return (
    <Container className="fxs_bg_lightest_clr">
      <FXSGlobals />
      <FXSBackgrounds />
      <FXSButtons />
      <FXSMargins />
      <FXSTextAlignments />
      <FXSTextColors />
      <FXSTextProperties />
      <FXSTextSizes />
      <Hero />
      <Features />
      <Pricing Products={signalLandingPropsMapped} />
      <Testimonials />
      {/*
        This two components must not be included until the new Trading Studio will be completed
        <TradingStudio />
        <Cta /> 
      */}
      <Experts />
      <Divider />
      <Faq />
      <Footer />
    </Container>
  );
};

export default Landing;
