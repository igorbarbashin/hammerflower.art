import styled from '@emotion/styled';
import React from 'react';
import FeaturedFlower from '../components/FeaturedFlower';
import Layout from '../components/Layout';
import SeasonProgress from '../components/SeasonProgress';
import normalizeFlowers from '../lib/normalizeFlowers';
import { getDatabase, getSeason } from '../lib/notion';

const H1 = styled.h1``;
const Heading = styled.div`
  margin-bottom: 5em;
`;
const Intro = styled.div``;

// Tooltip? Maybe not

// intro text
// Season progress
// Opensea button
// Value component
// Copy
// Season dates
// Where is the copy? In the notebook
// Can we specify a query?

function Home({ season, todayFlower }) {
  if (!season) {
    return 'loading';
  }
  return (
    <Layout>
      <Intro></Intro>
      <Heading>
        <H1>Season II</H1>
        <div>Oct 26 – Nov 30</div>
      </Heading>
      <FeaturedFlower flower={todayFlower} />

      <SeasonProgress season={season} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const season1 = await getSeason('I');

  // const season2 = allFlowers
  //   .filter((flower) => flower.season === 'II')
  //   .sort((a, b) => a.serial - b.serial);

  // const season1 = allFlowers
  //   .filter((flower) => flower.season === 'I')
  //   .sort((a, b) => a.serial - b.serial);
  const listedFlowers = season1.filter((flower) => !!flower.opensea);
  const todayFlower = listedFlowers[listedFlowers.length - 1] || {};
  // console.log({ todayFlower });

  // console.log({ season1 });

  return {
    props: {
      todayFlower,
      season: season1,
    },
    revalidate: 1,
  };
};

export default Home;
