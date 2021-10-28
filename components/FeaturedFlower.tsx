import styled from '@emotion/styled';
import React from 'react';
import Button from './Button';

const Wrap = styled.div`
  display: inline-flex;
  max-width: 100%;
`;
const ImageWrap = styled.div`
  max-width: 60%;
`;
const Info = styled.div`
  min-width: 300px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: calc(100vh - 50px);
`;

interface FeaturedFlowerProps {
  flower: Flower;
}

function FeaturedFlower({ flower }: FeaturedFlowerProps) {
  if (!flower) {
    return <div>Loading...</div>;
  }
  return (
    <Wrap>
      <ImageWrap>
        <Image src={flower.image} />
      </ImageWrap>
      <Info>
        <div>{flower.title}</div>

        <a href={flower.opensea}>
          <Button>Available on OpenSea</Button>
        </a>
      </Info>
    </Wrap>
  );
}

export default FeaturedFlower;
