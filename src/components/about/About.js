import React from "react";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { SectionDescription } from '../misc/Typography';
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import { Container, Column, GridTwoColumns } from "../misc/Layouts";



const ImageColumn = styled(Column)`
    flex-shrink: 0;
    position: relative;
`;

const Image = styled.img`
  box-shadow: 0px 10px 50px 0px rgb(167 167 167 / 50%);
`

const TwoColumn = styled(GridTwoColumns)`
    padding: 5rem 0;
`

const Heading = styled(SectionHeading)`
    font-size: 38px;
    font-weight: 700;
    margin-top: 1rem;
    text-align: center;
    @media (min-width: 768px){
        text-align: start;
    }
`
const Subheading = styled(SubheadingBase)`
    text-align: center;
    @media (min-width: 768px) {
        text-align: start ;
    }
`;

const Description = styled(SectionDescription)`
     text-align: center;
    @media (min-width: 768px) {
        text-align: start ;
    }
`

const PrimaryButton = styled(PrimaryButtonBase)`
    margin: 2rem auto auto;
    display: block;
    @media (min-width: 768px) {
        margin-left: 0;
        margin-right: 0;
    }
`

export default () => {

    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    <Image src="https://treact.owaiskhan.me/static/media/hero-screenshot-1.40a097b5.png" />
                </ImageColumn>
                <Column>
                    <Subheading>Our Expertise</Subheading>
                    <Heading>
                        Designed & Developed by <span tw="text-secondary-500">Professionals</span>
                    </Heading>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Description>
                    <PrimaryButton href="/#we">
                        Contact Us
                    </PrimaryButton>
                </Column>
            </TwoColumn>
        </Container>
    );
};
