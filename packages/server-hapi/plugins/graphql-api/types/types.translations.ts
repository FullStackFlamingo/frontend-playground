import { gql } from 'apollo-server-hapi';

export const typeDefs = gql`
  scalar JSON

  type Query {
    getTranslations(path: String, language: String!): JSON
  }
`;
export default typeDefs;

export const resolvers = {
  Query: {
    getTranslations(_parent: any, { path, language }: { path: string; language: string }) {
      if (path === '/') {
        return scrapedData[language] ?? {};
      }
      return scrapedData[language] ?? {};
    },
  },
};

import json from '../state/homepage.js';
const en = json.translations;

const scrapedData: { [language: string]: Object } = {
  en,
};
