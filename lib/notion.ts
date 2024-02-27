import { Client } from "@notionhq/client";
import normalizeFlowers from "./normalizeFlowers";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const databaseId = process.env.DATABASE_ID;

export const getDatabase = async () => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getSeason = async (season: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      or: [
        {
          property: "Season",
          select: {
            equals: season,
          },
        },
      ],
    },
  });
  return response.results
    .map(normalizeFlowers)
    .sort((a, b) => a.serial - b.serial);
};

export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};
