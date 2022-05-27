/**
 * Internal dependencies
 */
import styled from "styled-components";
import { cards } from './helpers'
import {
  SubTitle,
  CartContent,
  CardTitle,
  CardDesc,
  OverlayImage

} from './FeatureElements';

import { SectionHeading } from '../misc/Headings'
import { ThreeColumnContainer } from '../misc/Layouts'


const SectionsStyled = styled.section`
  .header{
    padding: 60px 0px 25px 0px;
  }

  .mx-1024{
    max-width: var(--desktopM);
  }
`



const Features = () => {
  return (
    <SectionsStyled>
      <div className="header">
        <SectionHeading>Soluciones que ofrecemos</SectionHeading>
        <SubTitle> Our strengths in welding are focused around 3 core functions: Resistance Welding (spot welding, seam welding.)</SubTitle>
      </div>
      <ThreeColumnContainer className="mx-1024">
        {cards.map(({ title, description, imageSrc }, i) => (
          <OverlayImage key={i} imageSrc={imageSrc}>
            <CartContent >
              <CardTitle>{title}</CardTitle>
              <CardDesc>{description}</CardDesc>
            </CartContent>
          </OverlayImage>
        ))}
      </ThreeColumnContainer>
    </SectionsStyled >
  )
}

export default Features