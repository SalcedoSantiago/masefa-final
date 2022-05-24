/**
 * External dependencies
 */
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
/**
 * Internal dependencies
 */
import { Container as ContainerSection, ThreeColumnContainer as Columns } from '../misc/Layouts';
import { SectionHeading } from '../misc/Headings'
import { SectionDescription } from '../misc/Typography'


// Main Container

export const Container = styled(ContainerSection)`
    max-width: 1080px;
    margin-left:  auto;
    margin-right:  auto;
    position: relative;
    padding: 6rem 0;
`

export const SubTitle = styled(SectionDescription)`
    text-align: center;
`


export const ThreeColumnContainer = styled(Columns)`
gap: 1rem;
`

export const OverlayImage = styled.div`
    width: 50%;
    height: 18rem;

    ${props => css`
        background-image: url("${props.imageSrc}");
        background-size: cover;
    `}

    @media (min-width: 1024px) {
        width: calc(33% - 1.5rem);
    }

`


export const CartContent = styled(motion.div)`
    /* padding: 2.5rem 2.5rem 3rem 2.5rem; */
    height: 100%;
    display: flex;
    padding: 2.5rem 2.5rem 3rem 2.5rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    background-image: linear-gradient(90deg, #1E1D24 0%, #EF0B0B00 100%);
    opacity: 1;
    transition: 'background' 0s, border-radius 0.3s, opacity 0s;

    &:hover{
        background-color: transparent;
        background-image: linear-gradient(90deg, #FC5A0A 0%, #100E0F00 100%);
        opacity: 1;
    }
`

export const CardTitle = styled(SectionHeading)`
    font-weight: bold;
    font-size: 1.5rem;
    color:#FFFFFF;
    font-weight: 600;
    
`
export const CardDesc = styled.p`
    margin-top: 1rem;
    font-size: medium;  
    color: #FFFFFF;
`





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