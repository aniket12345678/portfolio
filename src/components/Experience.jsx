import React from 'react'
import { ExperienceTags } from '../styledComponents/styleTags'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesArr } from '../data/constants';
import ExperienceCard from './cards/ExperienceCard';

const { Container, Wrapper, Title, Desc } = ExperienceTags;

const Experience = () => {
    return (
        <Container id='Experience'>
            <Wrapper>
                <Title>Experience</Title>
                <Desc
                    style={{
                        marginBottom: "40px",
                    }}
                >
                    My work experience as a software engineer and working on different
                    companies and projects.
                </Desc>
                <VerticalTimeline>
                    {
                        experiencesArr.map((element, index) => (
                            <ExperienceCard data={element} key={index+'exp'} />
                        ))
                    }
                </VerticalTimeline>
            </Wrapper>
        </Container>
    )
}

export default Experience
