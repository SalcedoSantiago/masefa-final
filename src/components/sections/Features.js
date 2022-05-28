/**
 * Internal dependencies
 */
import styled from "styled-components";

import { css } from "styled-components/macro"; //eslint-disable-line
import { motion } from "framer-motion";
import { SectionHeading } from '../misc/Headings'

const SectionsStyled = styled.section`
  .header{
    padding: 60px 0px 25px 0px;

    .subtitle{
        text-align: center;
        padding: 0 20px;
    }
  }

  .columns{
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: var(--desktopM);
    flex-wrap: wrap;
    margin: 0 auto;

    > .column {
      margin: 20px;
      width: 100%;
      min-height: 18rem;
      @media (min-width: 768px) {
        width: calc(30% - 20px);
      }
    }
  }
`

const OverlayImage = styled.div`
    width: 100%;
    height: 100%;
    ${props => css`
        background-image: url("${props.imageSrc}");
        background-size: cover;
    `}
  
`

const CartContent = styled(motion.div)`
    height: 100%;
    display: flex;
    padding: 2.5rem 2.5rem 3rem 2.5rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: transparent;
    background-image: linear-gradient(90deg, #1E1D24 0%, #EF0B0B00 100%);
    opacity: 1;
    transition: 'background' 0s, border-radius 0.3s, opacity 0s;

    &:hover{
        background-color: transparent;
        background-image: linear-gradient(90deg, #FC5A0A 0%, #100E0F00 100%);
        opacity: 1;
    }

    .title{
      font-weight: bold;
      font-size: 1.5rem;
      color:#FFFFFF;
      font-weight: 600;
    }

    .desc{
      margin-top: 1rem;
      color: #FFFFFF;
    }
`



const Features = () => {
  return (
    <SectionsStyled>
      <div className="header">
        <SectionHeading>Soluciones que ofrecemos</SectionHeading>
        <p className="subtitle">Our strengths in welding are focused around 3 core functions: Resistance Welding (spot welding, seam welding.)</p>
      </div>
      {/* <div className="colums-wrapper"> */}
      <div className="columns">
        {cards.map(({ title, description, imageSrc }, i) => (
          <div key={i} className="column">
            <OverlayImage imageSrc={imageSrc}>
              <CartContent >
                <h2 className="title">{title}</h2>
                <p className="desc">{description}</p>
              </CartContent>
            </OverlayImage>
          </div>
        ))}
      </div>
      {/* </div> */}
    </SectionsStyled >
  )
}



const cards = [
  {
    imageSrc: 'https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/04/img-3.jpg',
    title: "Secure",
    description: "We strictly only deal with vendors that provide top notch security.",
    url: "#"
  },
  {
    imageSrc: 'https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/04/img-3.jpg',
    title: "24/7 Support",
    description: "Lorem ipsum donor amet siti ceali placeholder text",
    url: "#"
  },
  {
    imageSrc: 'https://ld-wp73.template-help.com/wordpress/prod_11368/v2/wp-content/uploads/2021/04/img-3.jpg',
    title: "Customizable",
    description: "Lorem ipsum donor amet siti ceali placeholder text",
    url: "#"
  }
]

export default Features