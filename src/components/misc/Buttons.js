import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

export const PrimaryButton = styled.button`
    ${({ theme }) => theme.mixins.button};
`


export const PrimaryButtonCenter = styled(PrimaryButton)`
    display: block;
    margin: 0 auto;
`