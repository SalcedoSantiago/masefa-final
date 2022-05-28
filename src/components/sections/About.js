import React from "react";
import styled from "styled-components";
// import { css } from "styled-components/macro"; //eslint-disable-line

/**
 * Internal dependencies
 */
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";


const Columns = styled.div`
    ${({ theme }) => theme.mixins.flexStart};
    padding: 0 20px;
    gap: 30px;

    @media (min-width: 1024px) {
        padding: 0 ;
    }
    
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

    .desc{
        margin-top: 20px;
    }

    .heading,
    .desc
    {
        text-align: center;
        margin-right: 20px;
        margin-left:  20px;
        @media (min-width: 1024px) {
            text-align: start;
            margin-right: 0;
            margin-left:  0;
        }
    }

    .experiencie-container{
        ${({ theme }) => theme.mixins.flexStart};
        margin-top: 22px;
        margin-bottom: 40px;


        > div{
            width: 33%;
        }

        .experiencie{
             padding-right: 20px;
             text-align: center;

            @media (min-width: 1024px) {
                text-align: start;
            }

            p,
            h4,
            .counter
            {
                text-align: inherit;
            }

            .counter{
                display: block;
                color: var(--orange);
                font-size: 30px;
                font-weight: 500;
                margin-bottom: 8px;
            }

            h4{
                color: var(--black);
                font-size: 16px;
                text-transform: uppercase;
            }
            p{
                font-size: 14px;
                line-height: 1.3;
                
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

                    <div className="experiencie-container">
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
                        <div className="experiencie">
                            <span className="counter">24</span>
                            <h4>Running Project</h4>
                            <p>
                                Welding is a fabrication process that joins materials, usually metals or thermoplastics,
                            </p>
                        </div>
                    </div>
                    <PrimaryButtonBase href="/#we">
                        Contact Us
                    </PrimaryButtonBase>
                </div>
            </Columns>
        </StyledSection>
    );
};
