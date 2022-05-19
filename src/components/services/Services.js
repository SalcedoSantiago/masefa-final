import React from "react";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import { SectionHeading, Subheading } from "../misc/Headings.js";
import { Container, ThreeColumnContainer, GridTwoColumns } from "../misc/Layouts";
import { SectionDescription } from "../misc/Typography.js";
import { cardServices } from '../../helpers/Data';


const Columns = styled(ThreeColumnContainer)`
  gap:  .5rem;
  padding: 6rem 0;
  max-width: 1024px;
`
const Heading = styled(SectionHeading)` width: 100%; line-height:1; margin-bottom:2rem;`
const Description = styled(SectionDescription)`
    width:100%;
    text-align: center;
`;

const VerticalSpacer = styled.div`
margin-top: 2.5rem;
width:100%;`

const CardColumns = styled(GridTwoColumns)`
  align-items: start;
`

const Column = styled.div`
  width: 50%;
  @media (min-width: 1024px) {
      width: calc(33% - 1.5rem);
    }
`;

const ColumnImage = styled.div`
  padding: 1.25rem;
  flex-shrink: 0;
  margin: 0 auto;
  img{
    width: 2rem;
    height: 2rem;

  }
`
const TextContainer = styled.div`
  margin-left: 1rem;
  margin-top: 0.50rem;
  text-align: center;
  @media (min-width: 768px) {
  margin-top: 1rem;
  margin-left: 0;
  text-align: start;
   
  }
  .title{
    margin-top: 1rem;
    letter-spacing: 0.025em;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1;
  }
  .description{
    margin-top: 1rem;
    font-weight: 500;
    line-height: 1.5;
  }
`

export default () => {

  return (
    <Container>
      <Columns>
        <Subheading>Features</Subheading>
        <Heading>Amazing Features</Heading>
        {/* <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Description> */}
        {/* <VerticalSpacer /> */}
        {cardServices.map(({ imageSrc, title, description }, i) => (
          <Column key={i}>
            <CardColumns>
              <ColumnImage>
                <img src={imageSrc} alt="" />
              </ColumnImage>
              <TextContainer>
                <span className="title">{title}</span>
                <p className="description">
                  {description}
                </p>
              </TextContainer>
            </CardColumns>
          </Column>
        ))}
      </Columns>
      {/* <DecoratorBlob /> */}
    </Container>
  );
};
