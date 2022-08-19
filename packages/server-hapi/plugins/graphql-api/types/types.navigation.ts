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

const scrapedData = {
  items: [
    {
      id: 'channels',
      title: 'Channels',
      active: false,
      subItems: [
        {
          title: 'BBC One',
          href: '/bbcone',
          liveHref: '/iplayer/live/bbcone',
          active: false,
          icon: 'bbcone',
          id: 'bbc_one',
        },
        {
          title: 'BBC Two',
          href: '/bbctwo',
          liveHref: '/iplayer/live/bbctwo',
          active: false,
          icon: 'bbctwo',
          id: 'bbc_two',
        },
        {
          title: 'BBC Three',
          href: '/tv/bbcthree',
          liveHref: '/iplayer/live/bbcthree',
          active: false,
          icon: 'bbcthree',
          id: 'bbc_three',
        },
        {
          title: 'BBC Four',
          href: '/bbcfour',
          liveHref: '/iplayer/live/bbcfour',
          active: false,
          icon: 'bbcfour',
          id: 'bbc_four',
        },
        {
          title: 'BBC Radio 1',
          href: '/tv/radio1',
          liveHref: '/iplayer/live/radio1',
          active: false,
          icon: 'radio1',
          id: 'bbc_radio_one',
        },
        {
          title: 'CBBC',
          href: '/tv/cbbc',
          liveHref: '/iplayer/live/cbbc',
          active: false,
          icon: 'cbbc',
          id: 'cbbc',
        },
        {
          title: 'CBeebies',
          href: '/tv/cbeebies',
          liveHref: '/iplayer/live/cbeebies',
          active: false,
          icon: 'cbeebies',
          id: 'cbeebies',
        },
        {
          title: 'BBC Scotland',
          href: '/tv/bbcscotland',
          liveHref: '/iplayer/live/bbcscotland',
          active: false,
          icon: 'bbcscotland',
          id: 'bbc_scotland',
        },
        {
          title: 'BBC News',
          href: '/tv/bbcnews',
          liveHref: '/iplayer/live/bbcnews',
          active: false,
          icon: 'bbcnews',
          id: 'bbc_news24',
        },
        {
          title: 'BBC Parliament',
          href: '/tv/bbcparliament',
          liveHref: '/iplayer/live/bbcparliament',
          active: false,
          icon: 'bbcparliament',
          id: 'bbc_parliament',
        },
        {
          title: 'BBC Alba',
          href: '/tv/bbcalba',
          liveHref: '/iplayer/live/bbcalba',
          active: false,
          icon: 'bbcalba',
          id: 'bbc_alba',
        },
        {
          title: 'S4C',
          href: '/tv/s4c',
          liveHref: '/iplayer/live/s4c',
          active: false,
          icon: 's4c',
          id: 's4cpbs',
        },
      ],
    },
    {
      id: 'categories',
      title: 'Categories',
      active: false,
      subItems: [
        {
          title: 'Drama & Soaps',
          href: '/iplayer/categories/drama-and-soaps/featured',
          active: false,
          kind: 'genre',
          id: 'drama-and-soaps',
        },
        {
          title: 'Films',
          href: '/iplayer/categories/films/featured',
          active: false,
          kind: 'genre',
          id: 'films',
        },
        {
          title: 'Comedy',
          href: '/iplayer/categories/comedy/featured',
          active: false,
          kind: 'genre',
          id: 'comedy',
        },
        {
          title: 'Documentaries',
          href: '/iplayer/categories/documentaries/featured',
          active: false,
          kind: 'genre',
          id: 'documentaries',
        },
        {
          title: 'Sport',
          href: '/iplayer/categories/sport/featured',
          active: false,
          kind: 'genre',
          id: 'sport',
        },
        {
          title: 'News',
          href: '/iplayer/categories/news/featured',
          active: false,
          kind: 'genre',
          id: 'news',
        },
        {
          title: 'Entertainment',
          href: '/iplayer/categories/entertainment/featured',
          active: false,
          kind: 'genre',
          id: 'entertainment',
        },
        {
          title: 'Music',
          href: '/iplayer/categories/music/featured',
          active: false,
          kind: 'genre',
          id: 'music',
        },
        {
          title: 'Food',
          href: '/iplayer/categories/food/featured',
          active: false,
          kind: 'genre',
          id: 'food',
        },
        {
          title: 'Lifestyle',
          href: '/iplayer/categories/lifestyle/featured',
          active: false,
          kind: 'genre',
          id: 'lifestyle',
        },
        {
          title: 'History',
          href: '/iplayer/categories/history/featured',
          active: false,
          kind: 'genre',
          id: 'history',
        },
        {
          title: 'Science & Nature',
          href: '/iplayer/categories/science-and-nature/featured',
          active: false,
          kind: 'genre',
          id: 'science-and-nature',
        },
        {
          title: 'Arts',
          href: '/iplayer/categories/arts/featured',
          active: false,
          kind: 'genre',
          id: 'arts',
        },
        {
          title: 'From the Archive',
          href: '/iplayer/categories/archive/featured',
          active: false,
          kind: 'genre',
          id: 'archive',
        },
        {
          title: 'Audio Described',
          href: '/iplayer/categories/audio-described/featured',
          active: false,
          kind: 'accessibility',
          id: 'audio-described',
        },
        {
          title: 'Signed',
          href: '/iplayer/categories/signed/featured',
          active: false,
          kind: 'accessibility',
          id: 'signed',
        },
        {
          title: 'Northern Ireland',
          href: '/iplayer/categories/northern-ireland/featured',
          active: false,
          kind: 'national',
          id: 'northern-ireland',
        },
        {
          title: 'Scotland',
          href: '/iplayer/categories/scotland/featured',
          active: false,
          kind: 'national',
          id: 'scotland',
        },
        {
          title: 'Wales',
          href: '/iplayer/categories/wales/featured',
          active: false,
          kind: 'national',
          id: 'wales',
        },
        {
          title: 'CBeebies',
          href: '/iplayer/categories/cbeebies/featured',
          active: false,
          kind: 'childrens',
          id: 'cbeebies',
        },
        {
          title: 'CBBC',
          href: '/iplayer/categories/cbbc/featured',
          active: false,
          kind: 'childrens',
          id: 'cbbc',
        },
      ],
    },
    {
      title: 'A-Z',
      ariaLabel: 'A to Z',
      href: '/iplayer/a-z/a',
      active: false,
      id: 'a-z',
    },
    {
      title: 'TV Guide',
      href: '/iplayer/guide',
      active: false,
      id: 'tv-guide',
    },
    {
      title: 'My Programmes',
      href: '/iplayer/watching',
      active: false,
      id: 'my-programmes',
    },
  ],
  renderOpen: false,
  variant: 'default',
  accessibilityHelpHref: '/iplayer/features/accessibility',
  useLiveHrefs: false,
};
