import React from "react";
import styled from "styled-components";
// import tw from "twin.macro";

/**
 * Internal dependencies
 */
import { Container, ContentWithPaddingLg, ThreeColumnContainer } from '../misc/Layouts';
import { cards } from './helpers'
import { SectionHeading as Heading } from "../misc/Headings";
import { SectionDescription } from "../misc/Typography.js";


const Description = styled(SectionDescription)`
  text-align: center;
  margin: 0 auto;
`;

const Column = styled.div`
  width: 50%;
  padding: 2.5rem 2.5rem 3rem 2.5rem;
  box-shadow: 0px 10px 50px 0px rgb(167 167 167 / 50%);
  border-style: solid;
  border-bottom-width: 3px;
  border-color: #00235a;

  @media (min-width: 1024px) {
      width: calc(33% - 1.5rem);
    }
`;

const CardTitle = styled.span`
   font-weight: bold;
    font-size: 1.25rem;
`
const CardDesc = styled.p`
  margin-top: 1rem;
  font-size: medium;
  color: #506582;
`
const Features = () => {
  return (
    <Container>
      <ContentWithPaddingLg>
        <Heading>Welding Solutions</Heading>
        <Description>Our strengths in welding are focused around 3 core functions: Resistance Welding (spot welding, seam welding)</Description>
        <ThreeColumnContainer>
          {cards.map(({ title, description }, i) => (
            <Column key={i}>
              <CardTitle>{title}</CardTitle>
              <CardDesc>{description}</CardDesc>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingLg>
      {/*    <DecoratorBlob /> */}
    </Container>
  )
}

export default Features