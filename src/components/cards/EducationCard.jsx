import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import styled from 'styled-components';

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const School = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Degree = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const EducationCard = ({data}) => {
    return (
        <VerticalTimelineElement
            icon={
                <img
                    width="100%"
                    height="100%"
                    alt={data.school}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                    src={data.img}
                />
            }
            contentStyle={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "#1d1836",
                color: "#fff",
                boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
                backgroundColor: "rgba(17, 25, 40, 0.83)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                borderRadius: "6px",
            }}
            contentArrowStyle={{
                borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
            }}
            date={data.date}
        >
            <Top>
                <Image src={data.img} />
                <Body>
                    <School>{data.school}</School>
                    <Degree>{data.degree}</Degree>
                    <Date>{data.date}</Date>
                </Body>
            </Top>
            <Grade>
                <b>Grade : </b>
                {data.grade}
            </Grade>
            {/* <Description>
                {data.desc && <Span>{data.desc}</Span>}
            </Description> */}
        </VerticalTimelineElement>
    )
}

export default EducationCard
