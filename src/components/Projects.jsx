import React from 'react'
import { ProjectTags } from '../styledComponents/styleTags';
import { projectsArr } from '../data/constants';
import ProjectCard from './cards/ProjectCard';

const {
    Container, Wrapper, Title,
    Desc, CardContainer
} = ProjectTags;

const Projects = () => {
    return (
        <Container id="Projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc
                    style={{
                        marginBottom: "40px",
                    }}
                >
                    I have worked on a wide range of projects.
                </Desc>

                <CardContainer>
                    {projectsArr.map((project) => (
                        <ProjectCard project={project} />
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects
