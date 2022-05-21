import styled from "styled-components";
import { GridTwoColumns } from '../misc/Layouts';
import hero from '../../assets/hero.jpg'

export const Heading = styled.h1`
    font-size: 120px;
    font-weight: 700;
    color: #fff;
    line-height: 1;
`;

export const ContentCenter = styled.div`
    min-height: 80vh;
    padding: 200px 0 180px;
    max-width: 1280px;
    margin: 0 auto;
`
export const TwoColumns = styled(GridTwoColumns)`
    justify-content: start;
`

export const BackgroundImage = styled.div`
    position:relative;
    background-image: url(${hero});
    background-size: cover;
`;

