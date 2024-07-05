import React from 'react'
import { skillsArr } from '../data/constants';
import { Tilt } from 'react-tilt';
import { SkillTags } from '../styledComponents/styleTags';

const {
    Container, Wrapper, Skill,
    SkillImage, SkillItem, SkillList,
    SkillTitle, SkillsContainer, Title, Desc
} = SkillTags;

const Skills = () => {
    return (
        <Container id='Skills'>
            <Wrapper>
                <Title>Skills</Title>
                <Desc
                    style={{
                        marginBottom: "40px",
                    }}
                >
                    Here are some of my skills on which I have been working on for the
                    past 3 years.
                </Desc>
            </Wrapper>
            <SkillsContainer>
                {
                    skillsArr.map(({ title, skills }, index) => {
                        return (
                            <Tilt>
                                <Skill key={`skill-${index + title}`}>
                                    <SkillTitle>{title}</SkillTitle>
                                    <SkillList>
                                        {skills.map((item, index_x) => (
                                            <SkillItem key={`skill-x-${index_x}`}>
                                                <SkillImage src={item.image} />
                                                {item.name}
                                            </SkillItem>
                                        ))}
                                    </SkillList>
                                </Skill>
                            </Tilt>
                        )
                    })
                }
            </SkillsContainer>
        </Container>
    )
}

export default Skills
