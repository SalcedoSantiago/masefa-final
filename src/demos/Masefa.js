import { Hero, Services, GetStarted, TabCardGrid, TabCardThreeCol, Footer } from "../components";
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
            <Services />
            <GetStarted />
            <TabCardGrid heading={
                <>
                    Checkout our menu.
                </>
            } />
            <TabCardThreeCol />
            <Footer />
            {/* </AnimationRevealPage> */}
        </>
    )
}

export default Masefa