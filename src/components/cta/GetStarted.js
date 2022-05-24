import React from "react";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "../misc/Layouts";
import { SectionDescription } from "../misc/Typography";
import { PrimaryButtonCenter as Button } from "../misc/Buttons";


const Container = styled(ContainerBase)`
background-image: url(http://wp.workertm.com/tractour/wp-content/uploads/2020/10/testimonial-bg.jpg);
background-size: cover;
`

const HeadingContainer = styled.div`
  margin-bottom: 2rem;
  color: white;
`;

const Overlay = styled.div`
  background-color: #00000063;
  padding: 6rem 0;
`

const Heading = styled(SectionHeading)`
  color: #fff;
  font-size: 3rem;
`

const Subheading = styled(SubheadingBase)`
  font-size: 1rem;
  text-align:center;

`;

const Description = styled(SectionDescription)`
  text-align: center;
  margin: 0 auto;
  max-width: 768px;
`


export default () => {

  return (
    <Container>
      <Overlay>
        <ContentWithPaddingXl>
          <HeadingContainer>
            <Subheading>now</Subheading>
            <Heading>looking for a reliable & stable partner?</Heading>
            <Description>CONTACT US & LEARN MORE ABOUT US</Description>
          </HeadingContainer>
          <Button>Contact Us</Button>
        </ContentWithPaddingXl>
      </Overlay>
    </Container>
  );
};
