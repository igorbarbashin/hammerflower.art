import styled from '@emotion/styled';
import IconInstagram from '../images/IconInstagram';
import IconTiktok from '../images/IconTiktok';
import IconYoutube from '../images/IconYoutube';
import Logo from '../images/Logo';
import * as gtag from '../lib/gtag';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
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
  color: black;
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

const RecommendedProducts = styled.div``;

const Title = styled.h2``;

const Product = styled.a`
  display: flex;
  width: 100%;
  padding: 1em;
  color: inherit;
  text-decoration: none;
  font-size: 1.2em;
  width: 17em;
  align-items: center;
`;

const ProductImage = styled.img`
  display: block;
  margin-right: 1em;
  width: 70px;
  min-height: 70px;
  object-fit: contain;
  background: white;
`;

const ProductInfo = styled.div``;
const AmazonIcon = styled.img`
  display: block;
  width: 22px;
  height: 20px;
  margin-top: 0.5em;
`;

function Home() {
  return (
    <Wrap>
      <Logo />

      <Content>
        <Button
          onClick={() => {
            gtag.event({
              action: 'download',
              category: 'PDF',
              label: 'Free Guide',
              value: 1,
            });

            setTimeout(() => {
              window.location.href =
                'https://drive.google.com/file/d/1Tlp-Laf8J5moCP3sgvoiMOfrBiDXJD-l/view?usp=share_link';
            }, 500);
          }}
        >
          Download Free Guide
        </Button>
      </Content>

      <Title>Recommended products:</Title>
      <RecommendedProducts>
        <Product href="https://amzn.to/40BeKYL">
          <ProductImage src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71-Ub8a-PHL._AC_SY879_.jpg" />
          <ProductInfo>
            Strathmore 140&nbsp;lb Watercolor Paper
            <AmazonIcon src="/amazon-icon.png" />
          </ProductInfo>
        </Product>
        <Product href="https://amzn.to/3lKksZG">
          <ProductImage
            style={{ padding: 10 }}
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61aKrv6NzBL._AC_SX679_.jpg"
          />
          <ProductInfo>
            Craftsman Hammer
            <AmazonIcon src="/amazon-icon.png" />
          </ProductInfo>
        </Product>
      </RecommendedProducts>

      <SocialLinks>
        <SocialLink
          target="_blank"
          onClick={() => {
            gtag.event({
              action: 'click',
              category: 'Social Media',
              label: 'TikTok',
              value: 1,
            });
          }}
          href="https://www.tiktok.com/@hammerflower"
        >
          <IconTiktok />
        </SocialLink>
        <SocialLink
          target="_blank"
          href="https://www.instagram.com/hammerflower"
          onClick={() => {
            gtag.event({
              action: 'click',
              category: 'Social Media',
              label: 'Instagram',
              value: 1,
            });
          }}
        >
          <IconInstagram />
        </SocialLink>
        <SocialLink
          target="_blank"
          href="https://www.youtube.com/channel/UCb--RJt6k6upXJ3XV6syqtw"
          onClick={() => {
            gtag.event({
              action: 'click',
              category: 'Social Media',
              label: 'YouTube',
              value: 1,
            });
          }}
        >
          <IconYoutube />
        </SocialLink>
      </SocialLinks>
    </Wrap>
  );
}

export default Home;
