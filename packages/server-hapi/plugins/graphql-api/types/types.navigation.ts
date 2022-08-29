import { gql } from 'apollo-server-hapi';

export const typeDefs = gql`
  interface NavigationItem {
    id: ID!
    title: String!
    active: Boolean!
    ariaLabel: String
  }

  type NavigationItemChannel implements NavigationItem {
    id: ID!
    title: String!
    active: Boolean!
    ariaLabel: String
    href: String!
    liveHref: String
    icon: String
  }
  type NavigationItemCategory implements NavigationItem {
    id: ID!
    title: String!
    active: Boolean!
    ariaLabel: String
    href: String!
    kind: String
  }

  union NavigationSubItem = NavigationItemChannel | NavigationItemCategory

  type NavigationItemRoot implements NavigationItem {
    id: ID!
    title: String!
    active: Boolean!
    ariaLabel: String
    href: String
    subItems: [NavigationSubItem]
  }

  type NavigationItemsResult {
    items: [NavigationItemRoot]
    renderOpen: Boolean
    accessibilityHelpHref: String
    useLiveHrefs: Boolean
  }

  type Query {
    getNavigationItems: NavigationItemsResult
  }
`;
export default typeDefs;

export const resolvers = {
  NavigationSubItem: {
    __resolveType(obj: { liveHref: any; kind: any }) {
      if (obj.liveHref) {
        return 'NavigationItemChannel';
      }
      if (obj.kind) {
        return 'NavigationItemCategory';
      }
      return null;
    },
  },
  Query: {
    getNavigationItems(/* parent, args, context */) {
      return scrapedData;
      // return users.find(user => user.id === args.id);
    },
  },
};

import json from '../state/homepage.js';
const scrapedData = json.navigation;
