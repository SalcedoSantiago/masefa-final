import { Hero, Services, GetStarted, Works, WhyWe, Footer } from "../components";
import About from "../components/about/About";
import Features from "../components/features/Features";
// import AnimationRevealPage from "../helpers/AnimationRevealPage";

const Masefa = () => {
    return (
        <>
            {/* <AnimationRevealPage> */}
            <Hero />
            <Features />
            <About />
            <WhyWe />
            <Services />
            <GetStarted />
            <Works />
            {/* <TabCardThreeCol /> */}
            <Footer />
            {/* </AnimationRevealPage> */}
        </>
    )
}

export default Masefa