/**
 * External dependencies
 */
import styled from "styled-components";

/**
 * Internal dependencies
 */
import { GridTwoColumns } from '../misc/Layouts';
import { SectionDescription } from '../misc/Typography'
import { Subheading as Headingsm } from '../misc/Headings'
import { css } from "styled-components";
// import hero from '../../assets/hero.jpg'


export const ContentCenter = styled.div`
    min-height: 80vh;
    padding: 200px 0 180px;
    max-width: 1280px;
    margin: 0 auto;
`;

export const Heading = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    color: #fff;
    line-height: 1;
    ${props => props.xl && css`
    font-size:1.5rem;
    color: rgba(124, 139, 161, 1);
    padding: 0 0;
    `}
`;

export const TwoColumns = styled(GridTwoColumns)`
    justify-content: start;
    padding: 1rem 0;
`;

export const ShortColumn = styled.div`
`;

export const BackgroundImage = styled.div`
    position:relative;
    background-image: url(http://wp.dreamitsolution.net/dreamit/dreamit-handyman/wp-content/uploads/2021/04/slider1-1.jpg);
    background-size: cover;
`;


export const Subheading = styled(Headingsm)`
margin-bottom: 1rem;
`;

export const Paragraph = styled(SectionDescription)`
    text-align: start;
    margin-left: 0;
`;