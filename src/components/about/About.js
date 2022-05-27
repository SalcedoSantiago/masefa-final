import React from "react";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

/**
 * Internal dependencies
 */
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import { GridColums, Column } from "../misc/Layouts";


const StyledSection = styled.section`
    padding-top: 80px;
    /* margin-bottom: 150px; */

    img{
        flex-shrink: 0;
    }
    .heading{
        text-align: center;
        @media (min-width: 768px) {
            text-align: start;
        }
    }
    .experiencie-container{
        margin-top: 22px;
        margin-bottom: 40px;
        justify-content: start;

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
            <GridColums>
                <Column>
                    <img alt="TEst" src="https://treact.owaiskhan.me/static/media/hero-screenshot-1.40a097b5.png" />
                </Column>
                <Column cols="2">
                    <SectionHeading className="heading">
                        Designed & Developed by <span tw="text-secondary-500">Professionals</span>
                    </SectionHeading>
                    <p>
                        Welding is a fabrication process that joins materials, usually metals or thermoplastics, by using high heat to melt the parts together and allowing them to cool, causing fusion
                    </p>

                    <GridColums className="experiencie-container">
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
                    </GridColums>
                    <PrimaryButtonBase href="/#we">
                        Contact Us
                    </PrimaryButtonBase>
                </Column>
            </GridColums>
        </StyledSection>
    );
};
