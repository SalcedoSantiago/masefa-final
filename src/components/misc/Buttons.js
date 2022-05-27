import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

export const PrimaryButton = styled.button`
    color: var(--white);
    background: var(--orange);
    display: block;
    @media (min-width: 768px) {
        margin-left: 0;
        margin-right: 0;
    }
`



export const PrimaryButtonCenter = styled(PrimaryButton)`
    display: block;
    margin: 0 auto;
`