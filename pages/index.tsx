import styled from '@emotion/styled';
import IconInstagram from '../images/IconInstagram';
import IconTiktok from '../images/IconTiktok';
import IconYoutube from '../images/IconYoutube';
import Logo from '../images/Logo';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
`;

const Manifest = styled.p`
  max-width: 50em;
  margin-bottom: 5em;
`;

const Content = styled.div`
  margin: 4em 0;
`;

const Link = styled.a`
  color: red;
  font-size: 2em;
  font-style: italic;
`;

const Section = styled.div`
  margin-bottom: 5em;
`;

const SignupForm = styled.iframe`
  width: 560px;
  height: 400px;
  border: none;
`;

const Button = styled.button`
  padding: 15px 25px;
  font-size: 20px;
  background: pink;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-family: inherit;
`;

const SocialLinks = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  opacity: 0.5;
  padding: 10px;
  :hover {
    opacity: 1;
  }
  svg {
    max-width: 50px;
  }
`;

function Home() {
  return (
    <Wrap>
      <Logo />

      <Content>
        <Button
          onClick={() => {
            window.location.href =
              'https://drive.google.com/file/d/1Tlp-Laf8J5moCP3sgvoiMOfrBiDXJD-l/view?usp=share_link';
          }}
        >
          Download Free Guide
        </Button>
      </Content>

      <SocialLinks>
        <SocialLink target="_blank" href="https://www.tiktok.com/@hammerflower">
          <IconTiktok />
        </SocialLink>
        <SocialLink
          target="_blank"
          href="https://www.instagram.com/hammerflower"
        >
          <IconInstagram />
        </SocialLink>
        <SocialLink
          target="_blank"
          href="https://www.youtube.com/channel/UCb--RJt6k6upXJ3XV6syqtw"
        >
          <IconYoutube />
        </SocialLink>
      </SocialLinks>
    </Wrap>
  );
}

export default Home;
