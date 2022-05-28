import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

/**
 * Internal dependencies
 */
import { SectionHeading } from "../misc/Headings.js";

import { cardServices } from '../../helpers/Data';

const Columns = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
`

const StyledSection = styled.section`
  margin-top: 60px;
  .header{
    padding: 60px 0px 25px 0px;

  }
`

const FeatureCotainer = styled.div`
  padding: 40px 20px 40px 20px;
  border: none;
  width: 100%;

  @media (min-width: 768px) {
      width: calc(50% - 1rem);
  }

  @media (min-width: 1024px) {
      width: calc(33% - 1rem);
  }

  .columns{
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  div{
    margin: 0;
    @media (min-width: 768px) {
      margin-right: 20px;
    }
    svg{
      margin: 0 auto;
      margin-bottom: 10px;
      width: 50px;
      height: 50px;
      color: var(--blue);
    }
  }

  p{
    font-size: var(--fz-sm);
    line-height: 1.643em;
    text-align: center;
    margin: 0 20px;
    margin-top: 1.25rem;
    color: rgba(113,128,150,1);
    font-weight: 500;
    line-height: 2;

    @media (min-width: 768px) {
      margin: 0;
    }
  }

  .name{
    display: block;
    text-align: center;
    margin-top: 1rem;
    color: rgba(26,32,44,1);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 0.025em;
  }
`




export default () => {
  return (
    <StyledSection>
      <div className="header">
        <SectionHeading>Testimonios</SectionHeading>
      </div>
      <Columns>
        {cardServices.map(({ imageSrc, title, description }, i) => (
          <FeatureCotainer key={i}>
            <div className="columns">
              <div>
                <FaWhatsapp className="icon" />
              </div>
              <div className="content">
                <p>"{description}"</p>
                <span className="name">-Lorem ipsum</span>
              </div>
            </div>
          </FeatureCotainer>
        ))}
      </Columns>
    </StyledSection>
  );
};
