import React from "react";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import { GridColums, Column } from "../misc/Layouts";
import { PrimaryButton } from "../misc/Buttons";

const StyledContainer = styled.div`
  margin: 30px 0;
  background-color: var(--orange); 
  padding: 65px 0px 65px 0px;
  
  .container{
    max-width: var(--desktopL);
    margin: 0 auto;
    justify-content: space-between;

    > div{
      width: auto;

    }
    .short-column{
      width: auto;
    }
  }

  .heading{
    color:var(--white);
    font-size: 40px;
  }

  p{
    color:var(--white);
  }
`

export default () => {

  return (
    <StyledContainer>
      <GridColums className="container" between>
        <Column>
          <h3 className="heading">looking for a reliable & stable partner?</h3>
          <p>Contact us and learn more about us</p>
        </Column>
        <Column className="short-column">
          <PrimaryButton>Contact Us</PrimaryButton>
        </Column>
      </GridColums>
    </StyledContainer>
  );
};
