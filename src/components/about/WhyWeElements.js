/**
 * External dependencies
 */
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { motion } from "framer-motion";


/**
 * Internal dependencies
 */

import { SectionDescription } from '../misc/Typography';
import { Container as ContainerSection, Column, GridTwoColumns } from "../misc/Layouts";


export const Subtitle = styled(SectionDescription)`
    margin: 0 30rem;
`

export const Container = styled(ContainerSection)`
    padding: 6rem 0;
`

export const ImageColumn = styled(Column)`
    flex-shrink: 0;
    position: relative;
`;


export const TwoColumn = styled(GridTwoColumns)`
    padding: 5rem 0;
    align-items: initial;
`
/* 
*   Question Element
*/

export const QuestionColumn = styled(Column)`
    border-radius:  2px;
`

export const QuestionContainer = styled.div`
    cursor:pointer;
    transition: all cubic-bezier(0.4, 0, 0.2, 1) 300ms;
    padding: 1rem 2.5rem;
    user-select: none;
    margin-top: 1.25rem;
    border-radius: 0.5rem;
`

export const Question = styled.dt`
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export const QuestionTitle = styled.h3`   
    font-size: 1rem;
    font-weight: 700;
`

export const Answer = styled(motion.p)`
     color: #79787F;
    font-size: 14px;
    line-height: 1.8;
`;


/* 
*   Card
*/

export const CardsContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap:wrap;
`

export const CardContent = styled.div`
        width: 100%;
        background-color: #FFFFFF;
        padding: 39px 35px 20px 35px;
        /* border: 1px solid #E3E2E7;; */
        border-radius:  2px;

        .icon{
            color:#ff6c00;
            font-size: 25px;
            margin-bottom: 0.5rem;
        }

        @media (min-width: 1024px) {
            width: calc(50% - 1rem);
        }
`


export const CartTitle = styled.h2`
color: #00235a;
font-weight: 600;
margin-bottom: 0.5rem;

`

export const CartDesc = styled.p`
    font-size: 0.75rem;
    margin-bottom: 1rem;

`

export const FeatureCotainer = styled.div`
  padding: 0;
  border: none;
  width: 100%;
  
  @media (min-width: 1024px) {
      width: calc(50% - 1rem);
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