import React from 'react'
import tw from "twin.macro";
import styled from "styled-components";

import { PrimaryButton } from '../misc/Buttons';
import {
    Header,
    NavLinksContainer,
    NavLinks,
    ContainerMxlarge,
    ActionContainer,
    Action,
} from './HeaderElements'

const DesktopNavLinks = tw.nav`
md:hidden lg:flex flex-1 justify-between items-center flex-wrap
`;

const LogoLink = styled.a`
  ${({ theme }) => theme.mixins.flexCenter};

  img {
    ${tw`mr-3 h-16`}
  }
`;

const StyledHeader = () => {
    const links = (
        <NavLinksContainer key={1}>
            <NavLinks>
                <a href="/#">Home</a>
                <a href="/#">Sobre Nosotros</a>
                <a href="/#">Servcios</a>
                <a href="/#">Contacto</a>
            </NavLinks>
        </NavLinksContainer>
    )

    const logoLink = (
        <LogoLink className='flex' href="/">
            <img id="logo" src="https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/07/logo.png" alt="test" />
        </LogoLink>
    )

    return (
        <Header className="">
            <DesktopNavLinks>
                <ContainerMxlarge>
                    {logoLink}
                    <ActionContainer>
                        <Action>
                            <h2>(+1) 555 234-8765</h2>
                            <span> Call us </span>
                        </Action>
                        <Action>
                            <h2>(+1) 555 234-8765</h2>
                            <span>Mail Us Now </span>
                        </Action>
                        <Action>
                            <PrimaryButton>Contact us</PrimaryButton>
                        </Action>
                    </ActionContainer>
                </ContainerMxlarge>
                {links}
            </DesktopNavLinks>
            {/* mobile here */}
        </Header>
    )
}

export default StyledHeader;
