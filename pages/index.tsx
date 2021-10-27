import Layout from '../components/Layout';
import { getDatabase } from '../lib/notion';

const databaseId = process.env.DATABASE_ID;

// Tooltip? Maybe not

// image
// title
// description
// rarity "Rare"
// status "On Sale" "Sold"
// video
// opensea
// date

function Home({ flowers }) {
  if (!flowers) {
    return 'loading';
  }
  return (
    <Layout>
      <ul>
        {flowers.map((flower) => (
          <li>
            <pre>{JSON.stringify(flower.properties, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  const flowers = database
    .filter((f: any) => !!f?.properties?.OpenSea?.checkbox)
    .sort(
      (a: any, b: any) =>
        b.properties.Serial.number - a.properties.Serial.number
    );

  return {
    props: {
      flowers,
    },
    revalidate: 1,
  };
};

export default Home;
