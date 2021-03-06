import React from "react";
import styled from "styled-components";
import { FaClock } from "react-icons/fa";

/**
 * Internal dependencies
 */
import { SectionHeading } from "../misc/Headings.js";
import { Header } from "../misc/Layouts";

import { cardServices } from '../../helpers/Data';



const StyledSection = styled.section`
    padding: 120px 0  100px;

    .header{
      text-align: center;
      margin-bottom: 60px;
    }
`


const Columns = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
`

const FeatureCotainer = styled.div`
  /* padding: 40px 20px 40px 20px; */
  padding: 25px 25px 55px;
  border: none;
  width: 100%;
  transition: background .3s,border .3s,border-radius .3s,box-shadow .3s,-webkit-box-shadow .3s;
  box-shadow: 0 0 45px -10px rgb(93 114 128 / 15%);
    transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
    margin: 20px;

  @media (min-width: 768px) {
      width: calc(50% - 3rem);
  }

  @media (min-width: 1024px) {
      width: calc(33% - 3rem);
  }

  /* .columns{
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  } */

  div{
    margin: 0;
    @media (min-width: 768px) {
      /* margin-right: 20px; */
    }
    svg{
      margin: 0 auto;
      margin-bottom: 30px;
      margin-top: 20px;
      width: 50px;
      height: 50px;
      color:#ff6c00;
    }
  }

  h3{
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.44em;
    text-align: center;
    font-size: 1.3333333333333rem;
    text-transform: capitalize;
  }

  p{
    font-size: var(--fz-sm);
    line-height: 1.643em;
    text-align: center;
    margin: 0 20px;

    @media (min-width: 768px) {
      margin: 0;
    }
  }
`




export default () => {
  return (
    <StyledSection>
      <div className="header">
        <h3>Por que nosotros?</h3>
        <SectionHeading>Nuestros Servicios</SectionHeading>
      </div>
      <Columns>
        {cardServices.map(({ imageSrc, title, description }, i) => (
          <FeatureCotainer key={i}>
            <div className="columns">
              <div>
                <FaClock className="icon" />
              </div>
              <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </FeatureCotainer>
        ))}
      </Columns>
    </StyledSection>
  );
};
