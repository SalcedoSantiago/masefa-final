import React from "react";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/**
 * Internal dependencies
 */
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";


const Columns = styled.div`
    ${({ theme }) => theme.mixins.flexStart};

    padding: 0 20px;

    .two-colunm{
        width: 100%;
        @media (min-width: 1024px) {
             width: calc(50% - 1rem);
        }
    }
`

const StyledSection = styled.section`
    padding-top: 80px;

    img{
        flex-shrink: 0;
        margin-bottom: 30px;
    }

    .heading,
    .desc
    {
        text-align: center;
        margin: 0 20px;
        @media (min-width: 1024px) {
            text-align: start;
            margin: 0;
        }
    }

    .experiencie-container{
        margin-top: 22px;
        margin-bottom: 40px;
        justify-content: start;

        > div{
            width: 50%;
        }

        .experiencie{
             padding-right: 20px;

            .counter{
                display: block;
                color: var(--orange);
                font-size: 36px;
                font-weight: 500;
                margin-bottom: 8px;
            }

            h4{
                color: var(--black);
                font-size: 18px;
                text-transform: uppercase;
            }
        }
    }
`


export default () => {
    return (
        <StyledSection>
            <Columns>
                <div className="two-colunm">
                    <img alt="about-us" src="https://treact.owaiskhan.me/static/media/hero-screenshot-1.40a097b5.png" />
                </div>
                <div className="two-colunm">
                    <SectionHeading className="heading">
                        Designed & Developed by <span tw="text-secondary-500">Professionals</span>
                    </SectionHeading>
                    <p className="desc">
                        Welding is a fabrication process that joins materials, usually metals or thermoplastics, by using high heat to melt the parts together and allowing them to cool, causing fusion
                    </p>

                    <Columns className="experiencie-container">
                        <div className="experiencie">
                            <span className="counter">17 +</span>
                            <h4>Running Project</h4>
                            <p>
                                Welding is a fabrication process that joins materials, usually metals or thermoplastics,
                            </p>
                        </div>
                        <div className="experiencie">
                            <span className="counter">24</span>
                            <h4>Running Project</h4>
                            <p>
                                Welding is a fabrication process that joins materials, usually metals or thermoplastics,
                            </p>
                        </div>
                    </Columns>
                    <PrimaryButtonBase href="/#we">
                        Contact Us
                    </PrimaryButtonBase>
                </div>
            </Columns>
        </StyledSection>
    );
};
