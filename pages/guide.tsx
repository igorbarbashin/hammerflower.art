import styled from '@emotion/styled';

const DecorationWrap = styled.div`
  background: url('/images/guide-top-decoration.jpg') no-repeat top right;
  background-size: 50%;
`;

const Title = styled.h1`
  margin-bottom: 0;
  margin-top: 100px;
  max-width: 50%;
`;

const Wrap = styled.div`
  max-width: 30em;
  margin: 0 auto;
  padding: 10px;
  /* background: white; */
`;

const Section = styled.section`
  margin: 0 0 40px 0;
  background: white;
  padding: 20px;
`;

const Disclaimer = styled.div`
  margin-top: 40px;
  font-size: 0.8em;
  font-style: italic;
`;

const Product = styled.div`
  display: flex;
  margin-bottom: 20px;
  position: relative;
  padding: 20px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 15%;
    width: 70%;
    margin: 0 auto;
    height: 1px;
    background: #ccc;
  }

  &:last-child {
    margin-bottom: 0;
    &::after {
      display: none;
    }
  }
`;

const ProductImage = styled.div`
  margin-right: 20px;

  img {
    min-width: 100px;
    max-width: 100px;

    @media (max-width: 400px) {
      min-width: 60px;
      max-width: 60px;
    }
  }
`;

const ProductDescription = styled.div``;

const Step = styled.div`
  margin-bottom: 40px;
`;

const StepImage = styled.img`
  float: right;
  width: 30%;
  max-width: 300px;
  margin-left: 10px;
`;

function Guide() {
  return (
    <DecorationWrap>
      <Wrap>
        <Title>Hammering flowers on paper</Title>
        <p>A guide by @hammerflower</p>

        <Section>
          <p>
            Hammering flowers is a fascinating and engaging technique that
            sparks creativity in crafters of all ages and skill levels. With
            just a few simple materials, you can transform ordinary flowers and
            leaves into stunning, one-of-a-kind artwork that showcases the
            beauty of nature.
          </p>
          <p>
            When picking plant materials, it's important to protect our natural
            environment. Let wildflowers stay undisturbed in their ecosystems,
            and stay away from poisonous plants for safety reasons. Also, be
            careful with unknown plants, as they could be endangered or toxic.
          </p>
        </Section>

        <Section>
          <h2>All you need is</h2>

          <Product>
            <a href="https://a.co/d/3R8glK6">
              <ProductImage>
                <img src="/images/hammer.jpg" />
              </ProductImage>
            </a>
            <ProductDescription>
              <h3>1. Hammer</h3>
              <p>
                While a standard steel hammer is preferred due to its strength
                and light weight, a rubber mallet could also be used. However,
                it may cause a slight bounce that could potentially affect the
                final result.
              </p>
              <p>
                Need a hammer?{' '}
                <a href="https://a.co/d/3R8glK6">
                  Check out this durable and reliable hammer on Amazon
                </a>
              </p>
            </ProductDescription>
          </Product>

          <Product>
            <ProductImage>
              <img src="/images/cover.jpg" />
            </ProductImage>
            <ProductDescription>
              <h3>2. Cover</h3>
              <p>
                Use a piece of regular print paper or plastic to cover the
                flower while hammering. Check your recycling bin for a suitable
                container, such as a plastic grocery store container with a flat
                part that can be cut out.
              </p>
            </ProductDescription>
          </Product>

          <Product>
            <a href="https://amzn.to/40m7iRQ">
              <ProductImage>
                <img src="/images/paper.jpg" />
              </ProductImage>
            </a>
            <ProductDescription>
              <h3>3. Watercolor paper</h3>
              <p>
                For optimal absorption of the flower's moisture, the recommended
                paper is watercolor paper with a weight of 140 lb or higher.
              </p>
              <p>
                I usually get my favorite{' '}
                <a href="https://amzn.to/40m7iRQ">
                  140lb watercolor paper from Amazon
                </a>
              </p>
            </ProductDescription>
          </Product>

          <Product>
            <ProductImage>
              <img src="/images/flowers.jpg" />
            </ProductImage>
            <ProductDescription>
              <h3>4. Freshly cut flowers or leaves</h3>
              <p>
                It is all about experimenting. Look for flat, brightly colored
                flowers with velvety petals, such as Primula, Pansy, Petunia,
                Chrysanthemum, Osteospermum, Gerbera, or Geranium.
              </p>
            </ProductDescription>
          </Product>
        </Section>

        <Section>
          <h2>How to</h2>

          <Step>
            <StepImage src="/images/step1.jpg" />
            <h3>Lay out the flowers</h3>
            <p>
              Place the flower or leaf on the watercolor paper. Keep in mind
              that most flowers release their pigments from the front side,
              while most leaves release pigments from the back side.
            </p>
          </Step>

          <Step>
            <StepImage src="/images/step2.jpg" />
            <h3>Gently cover with a protective sheet</h3>
            <p>
              The sheet keeps the flowers from moving and helps the paper soak
              up their colors. It also prevents the hammer from getting dirty
            </p>
          </Step>

          <Step>
            <StepImage src="/images/step3.jpg" />
            <h3>Hammer time!</h3>
            <p>
              Begin by making a few light hits in the center of the flower,
              allowing it to spread slightly. Firmly and evenly hit around the
              entire surface, avoiding going back and hammering the same spot
              twice to prevent double printing.
            </p>
          </Step>

          <Step>
            <StepImage src="/images/step4.jpg" />
            <h3>Peel and enjoy!</h3>
            <p>
              Once you've completed hammering the entire area, slowly lift the
              protective sheet to reveal the print. Remove the flower pieces
              from paper and the protective sheet. You can then frame your
              natural print or use it to make a unique card. Keep in mind that
              the natural pigments are sensitive to sunlight and water, so avoid
              exposing them to direct sunlight or getting them wet.
            </p>
          </Step>
        </Section>

        <p>
          If you enjoyed this guide, consider supporting my work by donating or
          leaving a tip. Your contribution helps me create more useful guides
          like this. Thank you for your support!
        </p>

        <a href="https://paypal.me/hammerflower">
          https://paypal.me/hammerflower
        </a>

        <Disclaimer>
          <p>
            Our website participates in the Amazon Services LLC Associates
            Program, an affiliate advertising program designed to provide a
            means for us to earn fees by linking to Amazon.com and affiliated
            sites, at no extra cost to you.
          </p>
        </Disclaimer>
      </Wrap>
    </DecorationWrap>
  );
}

export default Guide;
