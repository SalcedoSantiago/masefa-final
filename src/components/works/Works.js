/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import { SectionHeading } from "../misc/Headings.js";
import { Works } from '../../helpers/Data'

/**
 * Styled elements
 */

import {
    SectionDescription,
    Columns,
    CardContainer,
    Card,
    CardImageContainer,
    CardHoverOverlay,
    Paragraph,
    Heading,
    ButtonShowMore,
} from './WorksElements';


const StyledSection = styled.section`
    padding-top: 40px;

`



export default () => {
    return (
        <StyledSection>
            <SectionHeading>
                Obras
            </SectionHeading>
            <SectionDescription>
                The smartest working shop in the steel business
            </SectionDescription>
            <Columns>
                {Works.map((card, index) => (
                    <CardContainer key={index}>
                        <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                            <CardImageContainer imageSrc={card.imageSrc}>
                                <CardHoverOverlay
                                    variants={{
                                        hover: {
                                            opacity: 1,
                                        },
                                        rest: {
                                            opacity: 0,
                                        }
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Heading>
                                        Lorem Ipsum
                                    </Heading>
                                    <Paragraph>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo i ncidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                                    </Paragraph>
                                    {/* <CardButton>Lear More</CardButton> */}
                                </CardHoverOverlay>
                            </CardImageContainer>
                        </Card>
                    </CardContainer>
                ))}
            </Columns>
            <ButtonShowMore>Show more</ButtonShowMore>
        </StyledSection>
    );
};
