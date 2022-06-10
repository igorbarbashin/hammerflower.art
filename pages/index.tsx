import styled from '@emotion/styled';
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

function Home() {
  return (
    <Wrap>
      <Logo />

      <h2>
        <a href="https://www.google.ca/maps/place/49%C2%B004'33.5%22N+121%C2%B048'55.7%22W/@49.0757355,-121.8159795,333m/data=!3m1!1e3!4m14!1m7!3m6!1s0x548467bf1af30fa3:0x7a26e1f8fb9df0ec!2sSlesse+Crk!3b1!8m2!3d49.038746!4d-121.6615145!3m5!1s0x0:0x8745062192215fb4!7e2!8m2!3d49.0759722!4d-121.8154722">
          Camping Location
        </a>
      </h2>
    </Wrap>
  );
}

export default Home;
