import styled from '@emotion/styled';
import IconInstagram from '../images/IconInstagram';
import IconTiktok from '../images/IconTiktok';
import IconYoutube from '../images/IconYoutube';
import Logo from '../images/Logo';
import * as gtag from '../lib/gtag';
import EventList from '../components/EventList';

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
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

  &:hover {
    background: #ffcfd7;
  }
`;

const ButtonLink = styled.a`
  padding: 15px 25px;
  font-size: 20px;
  background: pink;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  font-family: inherit;
  color: black;
  text-decoration: none;

  &:hover {
    background: #ffcfd7;
  }
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

const WorkshopsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
`;

const CenterButton = styled.div`
  margin: 1em auto 3em;
  text-align: center;
`;

const FreeGuideButtonWrap = styled.div`
  margin: 2em auto 1em;
  text-align: center;
`;

const Video = styled.div`
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  iframe {
    max-width: 100%;
  }
`;

const TipBlurb = styled.div`
  padding: 20px;
  max-width: 30em;
`;

const Block = styled.div`
  max-width: 30em;
  margin: 0 20px;
  margin-bottom: 2em;
  background: white;
  padding: 2em;
  border-radius: 5px;
`;

const Disclaimer = styled.div`
  margin-top: 40px;
  font-size: 0.8em;
  font-style: italic;
  max-width: 30em;
`;

/* TODO
- Upload to youtube as unlisted
- Add a youtube embed
- Add a tip button
- Add referral links to amazon
- Resubmit referral program to amazon
- Add favicon. Use the profile pic
- Add proper title and description for the page
- Add a page for the guide. Or do it on the same page?
*/

function Home() {
  return (
    <Wrap>
      <Logo />

      <Content>
        <Video>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GVJZADFocbE?si=MVcsjs5Ud5JIoLQ2"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <TipBlurb>
            Enjoy our free basic flower hammering tutorial! If you like it,
            consider a tip to help produce more quality content in the future.
            Click below to support. Thank you!
          </TipBlurb>

          <Button
            onClick={() => {
              gtag.event({
                action: 'click',
                category: 'Link',
                label: 'Tip',
                value: 1,
              });

              setTimeout(() => {
                window.location.href = 'https://paypal.me/hammerflower';
              }, 0);
            }}
          >
            Leave a Tip ❤️
          </Button>
        </Video>

        <Block>
          <h2>Free guide</h2>

          <p>
            Grab your free printable guide to enhance your hammering skills!
            It's a perfect resource for beginners. If you find it helpful, feel
            free to leave a tip to support future content.
          </p>

          <FreeGuideButtonWrap>
            <ButtonLink href="/guide">Free Guide</ButtonLink>
          </FreeGuideButtonWrap>
        </Block>

        {/* <Button
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
            }, 0);
          }}
        >
          Download Free Guide PDF
        </Button> */}

        {/* <WorkshopsWrap>
          <Button
            onClick={() => {
              gtag.event({
                action: 'click',
                category: 'Link',
                label: 'Workshops',
                value: 1,
              });

              setTimeout(() => {
                window.location.href =
                  // 'https://www.eventbrite.com/o/hammerflower-63675539363#events';
                  // Mail list
                  'https://mailchi.mp/401a05c2dd2d/hammerflower-workshop';
              }, 0);
            }}
          >
            Workshops
          </Button>
        </WorkshopsWrap> */}
      </Content>

      <Block>
        <Title>Recommended products:</Title>
        <RecommendedProducts>
          <Product href="https://amzn.to/3tW0Y8n">
            <ProductImage src="/images/paper.jpg" />
            <ProductInfo>
              Strathmore 140&nbsp;lb Watercolor Paper
              <AmazonIcon src="/amazon-icon.png" />
            </ProductInfo>
          </Product>
          <Product href="https://amzn.to/3O0oxE9">
            <ProductImage style={{ padding: 10 }} src="/images/hammer.jpg" />
            <ProductInfo>
              Edward Tools Harden 8oz Hammer
              <AmazonIcon src="/amazon-icon.png" />
            </ProductInfo>
          </Product>
        </RecommendedProducts>
      </Block>

      <Block>
        <h2>Workshops</h2>

        {/* <article>
            <h3>Hammering Flowers on Paper</h3>
            <time dateTime="2024-01-25T11:00">
              February 15, 2024 at 11:00 AM PST
            </time>
            <p>
              Join us for an interactive workshop where you'll learn the art of
              hammering flowers to create beautiful designs. No prior experience
              required!
            </p>

            <CenterButton>
              <ButtonLink
                href="https://www.eventbrite.com/e/hammering-flowers-on-paper-tickets-816057559127"
                onClick={() => {
                  gtag.event({
                    action: 'workshop click',
                    category: 'Link',
                    label: 'Workshops',
                    value: 1,
                  });

                  setTimeout(() => {
                    window.location.href =
                      'https://www.eventbrite.com/e/hammering-flowers-on-paper-tickets-816057559127';
                  }, 0);
                }}
              >
                Register Now
              </ButtonLink>
            </CenterButton>
          </article> */}

        <p>
          <a href="https://mailchi.mp/401a05c2dd2d/hammerflower-workshop">
            Join our mailing list
          </a>{' '}
          to be notified of future workshops and events!
        </p>

        {/* <CenterButton>
            <ButtonLink
              onClick={() => {
                gtag.event({
                  action: 'click',
                  category: 'Link',
                  label: 'Workshops',
                  value: 1,
                });

                setTimeout(() => {
                  window.location.href =
                    // 'https://www.eventbrite.com/o/hammerflower-63675539363#events';
                    // Mail list
                    'https://mailchi.mp/401a05c2dd2d/hammerflower-workshop';
                }, 0);
              }}
              href="https://mailchi.mp/401a05c2dd2d/hammerflower-workshop"
            >
              Subscribe
            </ButtonLink>
          </CenterButton> */}
      </Block>

      {/* <EventList></EventList> */}

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

      <Disclaimer>
        <p>
          Our website participates in the Amazon Services LLC Associates
          Program, an affiliate advertising program designed to provide a means
          for us to earn fees by linking to Amazon.com and affiliated sites, at
          no extra cost to you.
        </p>
      </Disclaimer>
    </Wrap>
  );
}

export default Home;
