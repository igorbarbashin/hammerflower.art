import { Flower } from '../types/Flower';
import get from './get';

export default function normalizeFlowers(pageData): Flower {
  const data = get(['properties'], pageData);

  const salePrice = get(['Sale price', 'number'], data);
  const season = get(['Season', 'select', 'name'], data, '');
  const title = get(['Title', 'title', 0, 'text', 'content'], data, '');

  if (title) {
    console.log(JSON.stringify(data));
  }

  const normalizedData = {
    image: get(['Photo', 'files', 0, 'file', 'url'], data, ''),
    title,
    // Probably needs a markdown plugin
    description: get(['Complete Description', 'formula', 'string'], data, ''),
    rarity: get(['Rarity', 'select', 'name'], data, ''),
    status: salePrice ? 'Sold' : 'On Sale',
    video: get(['TikTok video', 'rich_text', 0, 'text', 'content'], data, ''),
    serial: get(['Serial', 'number'], data, ''),
    date: get(['Date', 'date', 'start'], data, ''),
    opensea: get(['OpenSea Link', 'rich_text', 0, 'text', 'content'], data, ''),
    season,
    type: get(['Type', 'select', 'name'], data, ''),
    composition: get(['Composition', 'select', 'name'], data, ''),
    basePrice: get(['Base price', 'formula', 'number'], data),
    salePrice,
  };
  return normalizedData;
}
