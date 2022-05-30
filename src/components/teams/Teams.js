import styled from "styled-components"
import { SectionHeading } from "../misc/Headings"

const StyledSection = styled.section`
    margin-top: 30px;

    .header{
        margin-bottom: 60px;
        text-align: center;
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
    ${({ theme }) => theme.mixins.flexStart};
    align-items: center;
    box-shadow: 5px 6px 15px -1px rgba(0,0,0,0.29);
    border-radius: 5px;

    .image{
        /* width: 12rem; */
        border-radius: 0.75rem;
        object-fit: cover;
        aspect-ratio: 1/1;
        width: 40%;
    }

    .content{
        width: 50%;
        flex: 1;
        padding-left: 20px;

        .name{
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 5px;
        }
        .position{
            font-size: 16px;
            font-weight: 500;
            color: var(--blue);
            margin-bottom: 7px;
        }
        .desc{
            padding-top: 10px;
            font-size: 15px;
            line-height:1.5;
        }

    }


`


export default () => {
    return (
        <StyledSection>
            <div className="header">
                <SectionHeading>Nustro Equipo</SectionHeading>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros ut dui bibendum ultricies. Maecenas egestas fringilla semper.
                </p>
            </div>
            <Columns>
                {EQUIPO.map(({ name, description, img, position }, index) =>
                (
                    <div key={index}>
                        <TeamContainer>
                            <img className="image" src={img} />
                            <div className="content">
                                <h3 className="name">{name}</h3>
                                <span className="position">{position}</span>
                                <p className="desc">{description}</p>
                            </div>
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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        position: 'Director',
        img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/06/instructor-1-free-img.jpg',
        redes: {
            linkedin: '',
            facebook: '',
            intagram: ''
        }
    },
    {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        position: 'Director',
        img: 'https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/06/instructor-1-free-img.jpg',
        redes: {
            linkedin: '',
            facebook: '',
            intagram: ''
        }
    }
]

