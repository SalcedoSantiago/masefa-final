import { Hero, Services, Testimonial, GetStarted, Works, WhyWe, Footer, Features, About, Teams, Contact } from "../components";
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
                <Testimonial />
                {/* <TabCardThreeCol /> */}
                <Teams />
                <Contact />
                <Footer />

                {/* </AnimationRevealPage> */}
            </StyledMainContainer>
        </>
    )
}

export default Masefa