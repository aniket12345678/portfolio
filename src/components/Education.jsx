import React from 'react'
import { EducationTags } from '../styledComponents/styleTags'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { educationArr } from '../data/constants';
import EducationCard from './cards/EducationCard';

const { Container, Wrapper, Title, Desc } = EducationTags;

const Education = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Education</Title>
                <Desc
                    style={{
                        marginBottom: "40px",
                    }}
                >
                    My educational details are as follows.
                </Desc>
                <VerticalTimeline>
                    {
                        educationArr.map((element, index) => (
                            <EducationCard data={element} key={index + 'exp'} />
                        ))
                    }
                </VerticalTimeline>
            </Wrapper>
        </Container>
    )
}

export default Education
