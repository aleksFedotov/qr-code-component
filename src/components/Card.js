import React from 'react';
import styled from 'styled-components';
import qrCode from '../images/image-qr-code.png';

const Container = styled.section`
  border-radius: 2rem;
  max-width: 32rem;
  text-align: center;
  padding: 1.6rem 1.6rem 2rem 1.6rem;
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0 25px 25px hsla(0, 0%, 0%, 0.05);
`;

const CodeContainer = styled.div`
  width: 100%;
  max-width: 28.8rem;
  min-height: 28.8rem;
  border-radius: 1rem;
  overflow: hidden;
`;

const Code = styled.img`
  width: 100%;
  display: block;
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  margin-top: 1.5rem;
  color: hsl(218, 44%, 22%);
`;

const Text = styled.p`
  margin-top: 1.5rem;
  color: hsl(220, 15%, 55%);
`;

const ContentContainer = styled.div`
  padding: 1.4rem;
`;

const Card = () => {
  return (
    <Container>
      <CodeContainer>
        <Code src={qrCode} alt="code" />
      </CodeContainer>
      <ContentContainer>
        <Heading>Improve your front-end skills by building projects</Heading>
        <Text>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </Text>
      </ContentContainer>
    </Container>
  );
};

export default Card;
