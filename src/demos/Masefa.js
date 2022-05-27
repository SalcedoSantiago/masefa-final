import { Hero, Services, GetStarted, Works, WhyWe, Footer } from "../components";
import About from "../components/about/About";
import Features from "../components/features/Features";
import styled from "styled-components";


const StyledMainContainer = styled.main`
  counter-reset: section;
`;


const Masefa = () => {
    return (
        <>
            <StyledMainContainer>
                {/* <AnimationRevealPage> */}
                <Hero />
                <Features />
                <Services />
                <About />
                <WhyWe />
                <GetStarted />
                <Works />
                {/* <TabCardThreeCol /> */}
                <Footer />
                {/* </AnimationRevealPage> */}
            </StyledMainContainer>
        </>
    )
}

export default Masefa