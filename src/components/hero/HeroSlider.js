import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./image-data";
import styled from "styled-components";

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};


const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};


const StyledSection = styled.div`
    min-height: 60vh;
    background-color: var(--black);
    overflow: hidden;
    overflow: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: start;
    align-items: start;
    position: relative;

    img{
        width: 100%;
        height: 60vh;
        position: absolute;
        background-size: cover;
    }
    .next,
    .prev {
        top: calc(50% - 20px);
        position: absolute;
        background: white;
        border-radius: 30px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: pointer;
        font-weight: bold;
        font-size: 18px;
        z-index: 2;
    }
    .next {
        right: 10px;
    }
    .prev {
        left: 10px;
        transform: scale(-1);
    }
`

const Overlay = styled.div`
    z-index: 2;
    max-width: 1280px;
    width: 100%;
    height: 60vh;
    margin: 0 auto;

    > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        width: 50%;
        height: 60vh;
    }

    .container{
        background-color: #1E1D24E6;
        padding: 40px 48px;

        .heading,
        .subheading
        {
            color: #FFFFFF;
            font-size: 38px;
            font-weight: 600;
            line-height: 1em;
            a{
                text-decoration: none;
                &:hover{
                    cursor: pointer;
                    color: var(--orange);
                }
            }
        }
        .smart-text{
            margin: 10px 0;
            color: #FFFFFF;
            font-family: "Montserrat", Sans-serif;
            font-size: 18px;
            font-weight: 500;
            text-transform: uppercase;
            line-height: 1.2222em;
        }

        span{
            display: block;
            color: #FFFFFF;
            font-family: "Roboto", Sans-serif;
            font-size: 12px;
            font-weight: 400;
            line-height: 1.83em;
        }

        .flex{
            ${({ theme }) => theme.mixins.flexStart};
            gap: 20px;
            margin-top: 20px;

            button{
            ${({ theme }) => theme.mixins.button};
            }
        }

    }

`



export const Example = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    setTimeout(() => {
        paginate(1);
    }, 2000)

    return (
        <StyledSection>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    alt="tes"
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 50 },
                        opacity: { duration: 0.4 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>
            <Overlay>
                <div>
                    <div className="container">
                        <h2 className="heading">MONTAJES INDUSTRIALES</h2>
                        <h3 className="subheading">
                            TEL: <a>(011) 342535542</a>
                        </h3>
                        <p className="smart-text">
                            The smartest working shop in the steel business
                        </p>
                        <span>
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>
                        <div className="flex">
                            <button>
                                Contact us
                            </button>
                            <button>
                                About us
                            </button>
                        </div>
                    </div>
                </div>
            </Overlay>
            <div className="next" onClick={() => paginate(1)}>
                {"‣"}
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
                {"‣"}
            </div>
        </StyledSection>
    );
};
