import React from 'react'
import { FacebookRounded, LinkedIn } from "@mui/icons-material";

import { FooterTags } from '../styledComponents/styleTags'
import { Bio } from '../data/constants';

const {
    FooterContainer, FooterWrapper, Nav,
    NavLink, Logo, SocialMediaIcon,
    SocialMediaIcons, Copyright
} = FooterTags;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Aniket Adak</Logo>
                <Nav>
                    <NavLink href="#About">About</NavLink>
                    <NavLink href="#Skills">Skills</NavLink>
                    <NavLink href="#Experience">Experience</NavLink>
                    <NavLink href="#Projects">Projects</NavLink>
                    <NavLink href="#Education">Education</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.facebook} target="display">
                        <FacebookRounded />
                    </SocialMediaIcon>
                    <SocialMediaIcon href={Bio.linkedin} target="display">
                        <LinkedIn />
                    </SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>&copy; 2024 Aniket Adak. All rights reserved.</Copyright>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
