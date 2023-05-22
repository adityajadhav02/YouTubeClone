import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 300px
  margin-bottom: 45px;
  cursor: pointer;
  display: "flex";
  gap: 10px;
`;

const Image = styled.img`
  width: 230px;
  height: 202px;
  object-fit: contain;
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
  flex: 1;
  ${'' /* color: "black"; */}
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  ${'' /* display: ${(props) => props.type === "sm" && "none"}; */}
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: black;
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: #606060;
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: #606060;
`;

const Card = ({thumbnail, title, channel, channelPic}) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image
          src={thumbnail}
        />
        <Details>
          <ChannelImage
            src={channelPic}
          />
          <Texts>
            <Title>{title}</Title>
            <ChannelName>{channel}</ChannelName>
            <Info>201,438 views • 5 days ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
