import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

export const PrimaryButton = tw.button`
px-8 
py-3
font-bold  
bg-primary-500 
text-gray-100
hocus:bg-primary-500
hocus:text-gray-200
focus:shadow-outline 
focus:outline-none 
transition 
duration-300`;



export const PrimaryButtonCenter = styled(PrimaryButton)`
    display: block;
    margin: 0 auto;
`