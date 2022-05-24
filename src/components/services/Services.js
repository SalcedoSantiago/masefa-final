import React from "react";
import styled from "styled-components";
import { FaClock, FaAward, FaPiggyBank, FaRegStar, FaAngleDown } from "react-icons/fa";

/**
 * Internal dependencies
 */
import { SectionHeading } from "../misc/Headings.js";
import { Container, ThreeColumnContainer } from "../misc/Layouts";

import {
  CardContent,
  CartTitle,
  CartDesc,
} from "../misc/Card";

import { cardServices } from '../../helpers/Data';

const Columns = styled(ThreeColumnContainer)`
  gap: .7rem;
  padding: 6rem 0;
  max-width: 1024px;
`


export default () => {
  return (
    <Container>
      <SectionHeading>Nuestros Servicos</SectionHeading>
      <Columns>
        {cardServices.map(({ imageSrc, title, description }, i) => (
          <CardContent key={i}>
            <FaClock className="icon" />
            <CartTitle>{title}</CartTitle>
            <CartDesc>{description}</CartDesc>
          </CardContent>
        ))}
      </Columns>
    </Container>
  );
};
