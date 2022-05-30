import React from "react";
import styled from "styled-components";
import { FaClock } from "react-icons/fa";

/**
 * Internal dependencies
 */
import { SectionHeading } from "../misc/Headings.js";
import { Container, Header } from "../misc/Layouts";

import { cardServices } from '../../helpers/Data';

const Columns = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
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
      color:#ff6c00;
    }
  }

  h3{
    font-size: var(--fz-md);
    font-weight: 600;
    text-transform: uppercase;
    line-height: 1.44em;
    text-align: center;

    @media (min-width: 768px) {
      text-align: start;
    }
  }

  p{
    font-size: var(--fz-sm);
    line-height: 1.643em;
    text-align: center;
    margin: 0 20px;

    @media (min-width: 768px) {
      margin: 0;
      text-align: start;
    }
  }
`




export default () => {
  return (
    <Container>
      <Header>
        <SectionHeading>Nuestros Servicios</SectionHeading>
      </Header>
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
    </Container>
  );
};
