import styled from 'styled-components';


export const Header = styled.header`
    width: 100%;
    min-height: 10rem;
`

export const ContainerMxlarge = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 0;
`

export const NavLinksContainer = styled.div`
margin-top: auto;
background-color:#00235a;
padding: 1.5rem 0;
width: 100%;
`;

export const NavLinks = styled.div`
    margin: 0 auto;
    max-width: 1280px;
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 75%;
`

export const Action = styled.div`
    color :black;
    display: inline-block;
    text-align: left;
    position: relative;
    padding-left: 36px;
    margin-left: 50px;

    h2{
        font-weight: 700;
        font-size: 20px;

        &::before{
            content: "";
            position: absolute;
            width: 1.5rem;
            height: 2px;
            background-color: #ff6c00;
            left: -10px;
            top: 15px;
        }

    }
    span{
        color: #7777;
        font-size: 16px;
    }
`


