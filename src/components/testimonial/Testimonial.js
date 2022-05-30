import React from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";

/**
 * Internal dependencies
 */
import { SectionHeading } from "../misc/Headings.js";

import { cardServices } from '../../helpers/Data';

const Columns = styled.div`
  margin-top: 80px;
  ${({ theme }) => theme.mixins.flexCenter};
`

const StyledSection = styled.section`
  margin-top: 120px;
  .header{
    text-align: center;
    padding: 60px 0px 25px 0px;

  }
`

const FeatureCotainer = styled.div`
  border: none;
  width: 100%;
  box-shadow: 0 0 35px 0 rgb(93 114 128 / 15%);
    transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
    margin: -20px 20px 40px;
    padding: 30px;

    &.featured{
      margin: 20px;
    }

  @media (min-width: 768px) {
      width: calc(50% - 2rem);
  }

  @media (min-width: 1024px) {
      width: calc(30% - 2rem);
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
      /* margin-right: 20px; */
    }
    svg{
      margin-right: auto;
      margin-bottom: 10px;
      width: 50px;
      height: 50px;
      color: var(--blue);
    }
  }

  p{
    font-size: var(--fz-sm);
    line-height: 1.643em;
    text-align: start;
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
    text-align: start;
    margin-top: 1rem;
    color: rgba(26,32,44,1);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 0.025em;
  }

  .company{
    font-size: 14px;
  }
`




export default () => {
  return (
    <StyledSection>
      <div className="header">
        <h3>Testimonials</h3>
        <SectionHeading>Que dicen los clientes?</SectionHeading>
      </div>
      <Columns>
        {cardServices.map(({ imageSrc, title, description }, i) => (
          <FeatureCotainer key={i} className={i == 1 || i == 4 ? 'featured' : ''}>
            <div className="columns">
              <div className="card">
                <FaQuoteLeft />
                <div className="content">
                  <p>"{description}"</p>
                  <span className="name">-Lorem ipsum</span>
                  <span className="company">google company</span>
                </div>
              </div>
            </div>
          </FeatureCotainer>
        ))}
      </Columns>
    </StyledSection>
  );
};
