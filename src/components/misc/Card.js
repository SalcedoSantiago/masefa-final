
import styled from "styled-components"



export const CardContent = styled.div`
width: 100%;
background-color: #FFFFFF;
padding: 39px 35px 20px 35px;
border: 1px solid #E3E2E7;;
border-radius:  2px;

.icon{
    color:#ff6c00;
    font-size: 25px;
    margin-bottom: 0.5rem;
}

@media (min-width: 1024px) {
    width: calc(33% - 1rem);
}
`

export const CartTitle = styled.h2` /* user heading personalizado */
color: #00235a;
font-weight: 600;
margin-bottom: 0.5rem;

`

export const CartDesc = styled.p`
font-size: 0.75rem;
margin-bottom: 1rem;
`