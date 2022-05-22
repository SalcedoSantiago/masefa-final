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

const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 text-gray-100
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-secondary-500
`;

const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

const LogoLink = styled(NavLink)`
  ${tw`flex items-center text-gray-100 border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`mr-3 h-16`}
  }
`;

const StyledHeader = () => {
    const links = (
        <NavLinksContainer key={1}>
            <NavLinks>
                <NavLink href="/#">Home</NavLink>
                <NavLink href="/#">Sobre Nosotros</NavLink>
                <NavLink href="/#">Servcios</NavLink>
                <NavLink href="/#">Contacto</NavLink>
            </NavLinks>
        </NavLinksContainer>
    )

    const logoLink = (
        <LogoLink href="/">
            <img src="https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/07/logo.png" alt="" />
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
