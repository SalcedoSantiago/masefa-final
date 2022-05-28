import React from "react";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import { PrimaryButton } from "../misc/Buttons";

const Columns = styled.div`
    ${({ theme }) => theme.mixins.flexStart};
    padding: 0 30px;
    max-width: var(--desktopL);
    margin: 0 auto;
    justify-content: space-between;

    @media (min-width: 1024px) {
        padding: 0;
    }

    .column{
        width: 100%;

        @media (min-width: 1024px) {
            width: calc(50% - 1rem);
        }
    }

    .btn{
      margin-top: 20px;
      background-color: white;
      color: var(--orange);

      @media (min-width: 768px) {
        margin-left: auto;
      }
   
    }
     
`


const StyledContainer = styled.div`
  margin: 30px 0;
  background-color: var(--orange); 
  padding: 65px 0px 65px 0px;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: start;
  }

  .heading,
  p{
    text-align: inherit;
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
      <Columns className="container" between>
        <div className="column">
          <h3 className="heading">looking for a reliable & stable partner?</h3>
          <p>Contact us and learn more about us</p>
        </div>
        <div className="column">
          <PrimaryButton className="btn">Contact Us</PrimaryButton>
        </div>
      </Columns>
    </StyledContainer>
  );
};
