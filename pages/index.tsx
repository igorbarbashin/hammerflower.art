import styled from '@emotion/styled';

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
`;

function Home() {
  return (
    <Wrap>
      <h1>HammerFlower</h1>
      <Manifest>
        HammerFlower is an underground open community of rebels against all
        bullshit of the world that divides us. It sprung up as a response to
        conflicts among Ukrainian, Russian and Belarusian leadership. We
        celebrate unity of our Slavic roots through art, music and events.
      </Manifest>
    </Wrap>
  );
}

export default Home;
