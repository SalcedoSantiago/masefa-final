import React from 'react'
import Header from '../header/Header';
import tw from "twin.macro";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;
const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;
const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

const Hero = () => {

  return (
    <>
      <Header />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Masefa testing
            </Heading>
            <Paragraph>
              Our templates are easy to setup, understand and customize. Fully modular components with a variety of
              pages and components.
            </Paragraph>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" /* src={DesignIllustration} */ alt="Design Illustration" /> {/* testing poner img */}
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
      </Container>
    </>
  )

}
export default Hero;