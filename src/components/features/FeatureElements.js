/**
 * External dependencies
 */
import styled from "styled-components";
import { motion } from "framer-motion";
/**
 * Internal dependencies
 */
import { Container as ContainerSection, ThreeColumnContainer as Columns } from '../misc/Layouts';



// Main Container

export const Container = styled(ContainerSection)`
    margin-top:-120px;
    max-width: 1024px;
    margin-left:  auto;
    margin-right:  auto;
    position: relative;
    padding-bottom: 6rem;
`


export const ThreeColumnContainer = styled(Columns)`
gap:0;
`


export const CardTitle = styled.span`
    font-weight: bold;
    font-size: 1.25rem;
    color:#00235a;
`
export const CardDesc = styled.p`
    margin-top: 1rem;
    font-size: medium;
    color: #506582;
`

export const FlipBoxCard = styled(motion.a)`
    position: relative;
    height: 18rem;
    overflow-y: hidden;
    width: 50%;
    padding: 2.5rem 2.5rem 3rem 2.5rem;
    border-style: solid;
    /* border-bottom-width: 3px; */
    border-left: 2px solid #E2E8F0;
    background-color: white;
  
  &:first{
    border-left:none;
  }

  &:hover{
      cursor:pointer;
  }

  @media (min-width: 1024px) {
      width: calc(33% - 1.5rem);
    }
`;


export const CartContent = styled(motion.div)`
    /* padding: 2.5rem 2.5rem 3rem 2.5rem; */


    img{
        width:100px;
        height:100px;
    }
 

`
export const CardHoverOverlay = styled(motion.div)`
    /* height: 18rem; */
    padding-top: 1.5rem;
    /* padding: 2rem 1.5rem 3rem 1.5rem; */

`;


/*
*   Delete element
*
*/
/* const Column = styled.div`
  width: 50%;
  padding: 2.5rem 2.5rem 3rem 2.5rem;
  box-shadow: 0px 10px 50px 0px rgb(167 167 167 / 50%); 
  border-style: solid;
  border-bottom-width: 3px;
  border-left: 2px solid #E2E8F0;
  background-color: white;

  &:first{
    border-left:none;
  }

  @media (min-width: 1024px) {
      width: calc(33% - 1.5rem);
    }
`; */