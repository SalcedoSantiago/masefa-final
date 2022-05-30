import styled from "styled-components"
import { SectionHeading } from "../misc/Headings"


const Columns = styled.div`
    ${({ theme }) => theme.mixins.flexStart};

    > div{
        width: 50%;
    }

`
const StyledSection = styled.section`
    margin-top: 30px;

    .header{
        margin-bottom: 60px;
        text-align: center;
    }
    
    
    .maps{
        height: 100%;
        
    }    
    
`





export default () => {
    return (
        <StyledSection>
            <div className="header">
                <SectionHeading>Contact us</SectionHeading>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac eros ut dui bibendum ultricies. Maecenas egestas fringilla semper.
                </p>
            </div>
            <Columns>
                <div>
                    <iframe width="100%" height="100%" className="maps" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
                </div>
                <div>
                    <form >
                        <div>
                            <label>
                                Name:
                                <input type="text" />
                            </label>
                            <input type="text" value="" />
                        </div>

                        <div>
                            <label>
                                last name:
                                <input type="text" />
                            </label>
                            <input type="text" value="" />
                        </div>
                        <div>
                            <label>
                                tel:
                                <input type="text" />
                            </label>
                            <input type="text" value="" />
                        </div>
                        <div>
                            <label>
                                message:
                                <input type="text" />
                            </label>
                            <textarea value="" />
                        </div>
                        <div>

                            <input type="botton" value="Send" />

                        </div>
                    </form>

                </div>
            </Columns>
        </StyledSection>
    )
}