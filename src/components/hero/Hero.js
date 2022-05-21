import React from 'react'
import Header from '../header/Header';
import styled from "styled-components";
import {
  Heading,
  ContentCenter,
  BackgroundImage,
  TwoColumns
} from './HeroElements'
import { PrimaryButton } from '../misc/Buttons';

const Hero = () => {
  return (
    <>
      <Header />
      <BackgroundImage>
        <ContentCenter>
          <Heading>
            Masefa <br/>
            Montajes Industriales
          </Heading>
          <TwoColumns>
            <PrimaryButton>Services</PrimaryButton>
            <PrimaryButton>Contact Us</PrimaryButton>
          </TwoColumns>
        </ContentCenter>
      </BackgroundImage>
    </>
  )

}
export default Hero;