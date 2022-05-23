/**
 * Internal dependencies
 */
import { cards } from './helpers'
import {
  Container,
  ThreeColumnContainer,
  FlipBoxCard,
  CartContent,
  CardTitle,
  CardDesc,
  CardHoverOverlay,
} from './FeatureElements';



const Features = () => {
  return (
    <Container>
      <ThreeColumnContainer>
        {cards.map(({ title, description, imageSrc }, i) => (
          <FlipBoxCard key={i} className="group" initial="rest" whileHover="hover" animate="rest">
            <CartContent variants={{
              hover: {
                opacity: 0,
                marginTop: '-18rem'
              },
              rest: {
                opacity: 1,
              }
            }}
              transition={{ duration: 0.3 }}
            >
              <img src={imageSrc} />
              <CardTitle>{title}</CardTitle>
            </CartContent>
            <CardHoverOverlay
              variants={{
                hover: {
                  opacity: 1,
                  marginTop: '120px'
                },
                rest: {
                  opacity: 0,
                }
              }}
              transition={{ duration: 0.3}}
            >
              <CardTitle>{title}</CardTitle>
              <CardDesc>{description}</CardDesc>
            </CardHoverOverlay>
          </FlipBoxCard>
        ))}
      </ThreeColumnContainer>
    </Container >
  )
}

export default Features