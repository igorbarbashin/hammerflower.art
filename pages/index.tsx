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
      <Manifest>The Anti-Bullshit Movement</Manifest>
    </Wrap>
  );
}

export default Home;
