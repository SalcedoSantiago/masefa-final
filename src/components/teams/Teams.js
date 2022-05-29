import styled from "styled-components"
import { SectionHeading } from "../misc/Headings"


const StyledSection = styled.section`
    margin-top: 30px;

    .header{
        margin-bottom: 40px;
    }
    
`
const Columns = styled.div`
    ${({ theme }) => theme.mixins.flexStart};

    > div{
        max-width: 1024px;
        width: 100%;

        @media (min-width: 768px) {
            width: 50%;
        }
    }
`
const TeamContainer = styled.div`
    padding: 35px 30px 35px 30px;
    margin: 0 20px;
    text-align: center;


`


export default () => {
    return (
        <StyledSection>
            <div className="header">
                <SectionHeading>Nustro Equipo</SectionHeading>
            </div>
            <Columns>
                {EQUIPO.map(({ name, description }, index) =>
                (
                    <div key={index}>
                        <TeamContainer>
                            <h2>{name}</h2>
                            <p>{description}</p>
                        </TeamContainer>
                    </div>
                ))
                }
            </Columns>
        </StyledSection>
    )
}


const EQUIPO = [
    {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: '',
        redes: {
            linkedin: '',
            facebook: '',
            intagram: ''
        }
    },
    {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: '',
        redes: {
            linkedin: '',
            facebook: '',
            intagram: ''
        }
    }
]

