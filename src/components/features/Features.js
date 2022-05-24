/**
 * Internal dependencies
 */
import { cards } from './helpers'
import {
  Container,
  ThreeColumnContainer,
  SubTitle,
  CartContent,
  CardTitle,
  CardDesc,
  OverlayImage
} from './FeatureElements';
import { SectionHeading } from '../misc/Headings'



const Features = () => {
  return (
    <Container>
      <SectionHeading>Soluciones que ofrecemos</SectionHeading>
      <SubTitle> Our strengths in welding are focused around 3 core functions: Resistance Welding (spot welding, seam welding.)</SubTitle>
      <ThreeColumnContainer>
        {cards.map(({ title, description, imageSrc }, i) => (
          <OverlayImage key={i} imageSrc={imageSrc}>
            <CartContent >
              <CardTitle>{title}</CardTitle>
              <CardDesc>{description}</CardDesc>
            </CartContent>
          </OverlayImage>
        ))}
      </ThreeColumnContainer>
    </Container >
  )
}

export default Features