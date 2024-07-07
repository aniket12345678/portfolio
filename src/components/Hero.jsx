import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion"
import TypewriterComponent from 'typewriter-effect';

import { Bio } from '../data/constants';
import HeroImg from './HeroImg/reactlogo.png'
import HeroBgAnimation from './HeroBgAnimation'
import { headContainerAnimation, headContentAnimation, headTextAnimation } from '../utils/motion'
import StarCanvas from './canvas/Stars'
import { HeroTags } from '../styledComponents/styleTags';

const {
    HeroBg, SubTitle, Img,
    HeroContainer, HeroInnerContainer,
    HeroLeftContainer, HeroRightContainer,
    Span, Title, ResumeButton, TextLoop
} = HeroTags;

const Hero = () => {
    return (
        <div id='about'>
            <HeroContainer>
                <HeroBg>
                    <StarCanvas />
                    <HeroBgAnimation />
                </HeroBg>
                <motion.div {...headContainerAnimation}>
                    <HeroInnerContainer>
                        <HeroLeftContainer>
                            <motion.div {...headTextAnimation}>
                                <Title>
                                    Hi, I am <br /> {Bio.name}
                                </Title>
                                <TextLoop>
                                    I am a
                                    <Span>
                                        <TypewriterComponent
                                            options={{
                                                strings: Bio.roles,
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </Span>
                                </TextLoop>

                            </motion.div>

                            <motion.div {...headContentAnimation}>
                                <SubTitle>{Bio.description}</SubTitle>
                            </motion.div>

                            <ResumeButton href={Bio.resume} target='_blank'>Check Resume</ResumeButton>
                        </HeroLeftContainer>
                        <HeroRightContainer>
                            <motion.div {...headContentAnimation}>
                                <Tilt>
                                    <Img src={HeroImg} alt='aniket adak' />
                                </Tilt>
                            </motion.div>
                        </HeroRightContainer>
                    </HeroInnerContainer>
                </motion.div>
            </HeroContainer>
        </div>
    )
}

export default Hero
