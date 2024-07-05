import styled from 'styled-components'

export const HeroTags = {
  HeroContainer: styled.div`
      display:flex;
      justify-content:center;
      position:relative;
      padding: 80px 30px;
      z-index:1;
      @media(max-width:960px){
          padding: 66px 16px;
      }
      @media(max-width:640px){
          padding: 32px 16px;
      }
      clip-path:polygon(0 0,100% 0, 100% 100%, 70% 95%,0 100%);
  `,
  HeroInnerContainer: styled.div`
      display:flex;
      justify-content:space-between;
      position:relative;
      align-items:center;
      width:100%;
      max-width: 1100px;
      @media (max-width: 960px) {
          flex-direction:column;
      }
  `,
  HeroLeftContainer: styled.div`
      width: 100%;
      order: 1;
      @media (max-width: 960px) {
          order: 2;
          margin-bottom: 30px;
          display: flex;
          gap: 6px;
          flex-direction: column;
          align-items: center;
      }
  `,
  HeroRightContainer: styled.div`
      width: 100%;
      order: 2;
      display: flex;
      justify-content: end;
      @media (max-width: 960px) {
          order: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-contents: center;
          margin-bottom: 80px;
      }
  
      @media (max-width: 640px) {
          margin-bottom: 30px;
      }
  `,
  Title: styled.div`
    font-weight: 700;
    font-size: 50px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
  
    @media (max-width: 960px) {
      text-align: center;
    }
  
    @media (max-width: 960px) {
      font-size: 40px;
      line-height: 48px;
      margin-bottom: 8px;
    }
  `,
  TextLoop: styled.div`
    font-weight: 600;
    font-size: 32px;
    display: flex;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
  
    @media (max-width: 960px) {
      text-align: center;
    }
  
    @media (max-width: 960px) {
      font-size: 22px;
      line-height: 48px;
      margin-bottom: 16px;
    }
  `,
  Span: styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
  `,
  SubTitle: styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({ theme }) => theme.text_primary + 95};
  
    @media (max-width: 960px) {
      text-align: center;
    }
  
    @media (max-width: 960px) {
      font-size: 16px;
      line-height: 32px;
    }
  `,
  ResumeButton: styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
  
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
  
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(
      225deg,
      hsla(271, 100%, 50%, 1) 0%,
      hsla(294, 100%, 50%, 1) 100%
    );
    background: -moz-linear-gradient(
      225deg,
      hsla(271, 100%, 50%, 1) 0%,
      hsla(294, 100%, 50%, 1) 100%
    );
    background: -webkit-linear-gradient(
      225deg,
      hsla(271, 100%, 50%, 1) 0%,
      hsla(294, 100%, 50%, 1) 100%
    );
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 50px;
    font-weight: 600;
    font-size: 20px;
  
       &:hover {
          transform: scale(1.05);
      transition: all 0.4s ease-in-out;
      box-shadow:  20px 20px 60px #1F2634,
      filter: brightness(1);
      }    
      
      
      @media (max-width: 640px) {
          padding: 12px 0;
          font-size: 18px;
      } 
      color: white;
  `,
  Img: styled.img`
    border-radius: 50%;
    width: 800px;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border: 2px solid ${({ theme }) => theme.primary};
  
    @media (max-width: 640px) {
      max-width: 280px;
      max-height: 280px;
    }
  `,
  HeroBg: styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    overflow: hidden;
    padding: 0 30px;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  
    @media (max-width: 960px) {
      justify-content: center;
      padding: 0 0px;
    }
  `,
}

export const AppTags = {
  Body: styled.div`
    background-color: ${({ theme }) => theme.bg};
    width:100%;
    // height: 90vh;
    overflow-x: hidden;
    position: relative;
  `,
  Wrapper: styled.div`
    padding-bottom: 100px;
    background: linear-gradient(
        38.73deg,
        rgba(204, 0, 187, 0.15) 0%,
        rgba(201, 32, 184, 0) 50%
      ),
    linear-gradient(
        141.27deg,
        rgba(0, 70, 209, 0) 50%,
        rgba(0, 70, 209, 0.15) 100%
      );
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  `
}

export const SkillTags = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-contnet: center;
    position: rlative;
    z-index: 1;
    align-items: center;
  `,

  Wrapper: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
      flex-direction: column;
    }
  `,

  Title: styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
    }
  `,

  Desc: styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
      font-size: 16px;
    }
  `,

  SkillsContainer: styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 50px;
    justify-content: center;
  `,

  Skill: styled.div`
    width: 100%;
    max-width: 500px;
    background-color: rgba(17, 25, 40, 0.83);
    border: 1px solid rgba(255, 255, 255, 0.125);
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    padding: 18px 36px;
    @media (max-width: 768px) {
      max-width: 400px;
      padding: 10px 36px;
    }

    @media (max-width: 500px) {
      max-width: 330px;
      padding: 10px 36px;
    }
  `,

  SkillTitle: styled.div`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};
  `,

  SkillList: styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
  `,

  SkillItem: styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 80};
    border: 1px solid ${({ theme }) => theme.text_primary + 80};
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 8px 12px;
    }
    @media (max-width: 500px) {
      font-size: 14px;
      padding: 6px 12px;
    }
  `,

  SkillImage: styled.img`
    width: 24px;
    height: 24px;
  `
}

export const ExperienceTags = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-contnet: center;
    margin-top: 50px;
    position: rlative;
    z-index: 1;
    align-items: center;
  `,

  Wrapper: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
      flex-direction: column;
    }
  `,

  Title: styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
    }
  `,

  Desc: styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
      font-size: 16px;
    }
  `
}

export const EducationTags = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-contnet: center;
    position: rlative;
    z-index: 1;
    align-items: center;
  `,
  Wrapper: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
      flex-direction: column;
    }
  `,
  Title: styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
    }
  `,
  Desc: styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
      font-size: 16px;
    }
  `
}

export const ContactTags = {
  Container: styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`,

  Wrapper: styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`,
  Title: styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`,
  Desc: styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`,

  ContactForm: styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`,
  ContactTitle: styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`,
  ContactInput: styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`,
  ContactInputMessage: styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`,
  ContactButton: styled.button`
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`
}

export const FooterTags = {
  FooterContainer: styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    z-index: 10;
    position: relative;
  `,
  FooterWrapper: styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
    padding: 1rem;
    color: ${({ theme }) => theme.text_primary};
  `,
  Logo: styled.div`
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
  `,
  Nav: styled.ul`
    width: 100%;
    max-width: 800px;
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      text-align: center;
      font-size: 12px;
    }
  `,
  NavLink: styled.a`
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  `,
  SocialMediaIcons: styled.div`
    display: flex;
    margin-top: 1rem;
  `,
  SocialMediaIcon: styled.a`
    display: inline-block;
    margin: 0 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text_primary};
    transition: color 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  `,
  Copyright: styled.p`
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.soft2};
    text-align: center;
  `
}

export const ProjectTags = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-contnet: center;
    margin-top: 50px;
    padding: 0px 16px;
    position: rlative;
    z-index: 1;
    align-items: center;
  `,

  Wrapper: styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    gap: 12px;
    @media (max-width: 960px) {
      flex-direction: column;
    }
  `,
  Title: styled.div`
    font-size: 52px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
    }
  `,
  Desc: styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
      font-size: 16px;
    }
  `,

  ToggleButtonGroup: styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight 500;
    margin: 22px 0;
    @media (max-width: 768px){
      font-size: 12px;
    }
  `,
  ToggleButton: styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.primary + 20};
    }
    @media (max-width: 768px) {
      padding: 6px 8px;
      border-radius: 4px;
    }
    ${({ active, theme }) =>
        active &&
        `
    background:  ${theme.primary + 20};
    `}
  `,
  Divider: styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`,

  CardContainer: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`
}