import styled from '@emotion/styled';

// Three backgrounds
// Popups? Date, Rarity, Pricing, Sale type

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Item = styled.div`
  margin: 3px;
  width: 50px;
  height: 50px;
`;

interface SeasonProgressProps {
  season: Flower[];
}

function SeasonProgress({ season }: SeasonProgressProps) {
  return (
    <div>
      <h1>Season progress</h1>
      <Wrap>
        {season.map((flower, index) => (
          <Item key={index}>
            {/* {flower.title} */}
            <img src={flower.image} />
          </Item>
        ))}
      </Wrap>
    </div>
  );
}

export default SeasonProgress;
