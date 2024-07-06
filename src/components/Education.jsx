import React from 'react'
import { EducationTags } from '../styledComponents/styleTags'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { educationArr } from '../data/constants';
import EducationCard from './cards/EducationCard';
import EarthCanvas from './canvas/Earth';

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
                <EarthCanvas />
                {/* <div className="sketchfab-embed-wrapper">
                    <iframe title="React Developer Waving || Raihan Sarkar" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/57e7e081226b4572847735e0b5ef45d5/embed">

                    </iframe>
                    <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
                        <a href="https://sketchfab.com/3d-models/react-developer-waving-raihan-sarkar-57e7e081226b4572847735e0b5ef45d5?utm_medium=embed&utm_campaign=share-popup&utm_content=57e7e081226b4572847735e0b5ef45d5" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                            React Developer Waving || Raihan Sarkar
                        </a> by
                        <a href="https://sketchfab.com/bdyoungdeveloper?utm_medium=embed&utm_campaign=share-popup&utm_content=57e7e081226b4572847735e0b5ef45d5" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                            Raihan Sarkar
                        </a> on
                        <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=57e7e081226b4572847735e0b5ef45d5" target="_blank" rel="nofollow" style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
                            Sketchfab
                        </a>
                    </p>
                </div> */}
            </Wrapper>
        </Container>
    )
}

export default Education
