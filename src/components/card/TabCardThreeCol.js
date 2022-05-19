import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

/**
 * Internal dependencies
 */
import { Container, ContentWithPaddingLg } from '../misc/Layouts';
import { SectionHeading as Heading } from '../misc/Headings';
import { SectionDescription as Description } from '../misc/Typography';
import { cards } from './helpers'
// import { SectionDescription } from "../misc/Typography.js";
// const Description = tw(SectionDescription)`text-center mx-auto`;

const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;


const Features = ({ linkText }) => {

  return (
    <Container>
      <ContentWithPaddingLg>
        <Heading>The Executive Team</Heading>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo i
          ncidunt ex placeat modi magni quia error alias, adipisci rem
          similique, at omnis eligendi optio eos harum.
        </Description>
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card href={card.url}>
                <span className="imageContainer" /* css={imageContainerCss} */>
                  <img src={card.imageSrc} alt="" /* css={imageCss} */ />
                </span>
                <span className="title">{card.title}</span>
                <p className="description">{card.description}</p>
                {linkText && (
                  <span className="link">
                    {/*   <span>{linkText}</span> */}
                    {/* <ArrowRightIcon className="icon" /> */}
                  </span>
                )}
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingLg>
      {/*    <DecoratorBlob /> */}
    </Container>
  )
}

export default Features