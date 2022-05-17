import React from 'react'
import tw from "twin.macro";
import styled from "styled-components";


const NavLinks = tw.div`inline-block`;

const Header = tw.header`bg-primary-200 lg:py-3`;

const Container = tw.div`
flex justify-between items-center
max-w-screen-xl  container mx-auto`;

const DesktopNavLinks = tw.nav`
md:hidden lg:flex flex-1 justify-between items-center
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
    ${tw`w-10 mr-3`}
  }
`;

const StyledHeader = () => {

    const links = (
        <NavLinks key={1}>
            <NavLink href="/#">About</NavLink>
            <NavLink href="/#">Blog</NavLink>
            <NavLink href="/#">Pricing</NavLink>
            <NavLink href="/#">Contact Us</NavLink>
            <NavLink href="/#" tw="lg:ml-12!">
                Login
            </NavLink>
            <PrimaryLink href="/#">Sign Up</PrimaryLink>
        </NavLinks>
    )

    const logoLink = (
        <LogoLink href="/">
            <img /* src={logo} */ alt="" />
            Treact
        </LogoLink>
    )

    return (
        <Header className="">
            <Container>
                <DesktopNavLinks>
                    {logoLink}
                    {links}
                </DesktopNavLinks>
            </Container>
            {/* mobile here */}
        </Header>
    )
}

export default StyledHeader;

// const collapseBreakPointCssMap = {
//     sm: {
//         mobileNavLinks: tw`sm:hidden`,
//         desktopNavLinks: tw`sm:flex`,
//         mobileNavLinksContainer: tw`sm:hidden`
//     },
//     md: {
//         mobileNavLinks: tw`md:hidden`,
//         desktopNavLinks: tw`md:flex`,
//         mobileNavLinksContainer: tw`md:hidden`
//     },
//     lg: {
//         mobileNavLinks: tw`lg:hidden`,
//         desktopNavLinks: tw`lg:flex`,
//         mobileNavLinksContainer: tw`lg:hidden`
//     },
//     xl: {
//         mobileNavLinks: tw`lg:hidden`,
//         desktopNavLinks: tw`lg:flex`,
//         mobileNavLinksContainer: tw`lg:hidden`
//     }
// };
