import { gql } from 'apollo-server-hapi';

export const typeDefs = gql`
  type Identity {
    userId: String!
    signedIn: Boolean!
    privacySettingsUrl: String
    personalisationEnabled: Boolean
    ageBracket: String
    findOutMoreUrl: String
  }
  type Query {
    getIdentity(userId: ID!): Identity
  }
`;
export default typeDefs;

export const resolvers = {
  Query: {
    getIdentity(_parent: any, { userId }: { userId: string }) {
      return { userId, ...scrapedData };
    },
  },
};

const scrapedData = {
  signedIn: false,
  privacySettingsUrl: null,
  personalisationEnabled: false,
  ageBracket: null,
  findOutMoreUrl: null,
};
