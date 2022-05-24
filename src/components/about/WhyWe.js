import React, { useState } from "react";
import styled from "styled-components";
import { FaClock, FaAward, FaPiggyBank, FaRegStar, FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import tw from "twin.macro";
import { cardAbout as CARD, FAQS } from '../../helpers/Data'

/**
 * Internal dependencies
 */
import { Column } from "../misc/Layouts";
import { SectionHeading } from '../misc/Headings';

import {
    Container,
    TwoColumn,
    CardsContainer,
    CardContent,
    QuestionColumn,
    QuestionContainer,
    Answer,
    CartTitle,
    CartDesc,
    Question,
    QuestionTitle
} from './WhyWeElements'


const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);


export default () => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

    const toggleQuestion = questionIndex => {
        if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
        else setActiveQuestionIndex(questionIndex);
    };

    return (
        <Container>
            <SectionHeading>¿Por qué  <span>Masefa</span>?</SectionHeading>
            {/* <Subtitle>Nuestras fortalezas en soldadura se centran en 3 funciones principales: Soldadura por resistencia (soldadura por puntos, soldadura por costura).</Subtitle> */}
            <TwoColumn>
                <QuestionColumn>
                    {FAQS.map((faq, index) => (
                        <QuestionContainer
                            key={index}
                            onClick={() => {
                                toggleQuestion(index);
                            }}
                            className="group"
                        >
                            <Question>
                                <QuestionTitle>{faq.question}</QuestionTitle>
                                <QuestionToggleIcon
                                    variants={{
                                        collapsed: { rotate: 0 },
                                        open: { rotate: -180 }
                                    }}
                                    initial="collapsed"
                                    animate={activeQuestionIndex === index && "open" || "collapsed"}
                                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    <FaAngleDown />
                                </QuestionToggleIcon>
                            </Question>
                            <Answer
                                variants={{
                                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                                }}
                                initial="collapsed"
                                animate={activeQuestionIndex === index && "open" || "collapsed"}
                                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                {faq.answer}
                            </Answer>
                        </QuestionContainer>
                    ))}
                </QuestionColumn>
                <Column>
                    <CardsContainer>
                        {CARD.map(({ title, desc, Icon }, index) => (
                            <CardContent key={index}>
                                <FaClock className="icon" />
                                <CartTitle>{title}</CartTitle>
                                <CartDesc>{desc}</CartDesc>
                            </CardContent>
                        ))}
                    </CardsContainer>
                </Column>
            </TwoColumn>
        </Container>
    );
};
