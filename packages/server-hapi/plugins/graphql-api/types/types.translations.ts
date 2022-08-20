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

const scrapedData: { [language: string]: Object } = {
  en: {
    homepage_title: 'Home',
    homepage_screen_reader_title: 'BBC iPlayer Homepage',
    homepage_meta_description:
      'Watch live BBC TV channels, enjoy TV programmes you missed and view exclusive content on BBC iPlayer.',
    homepage_search_hint: 'Search iPlayer',
    homepage_search_button_title: 'Find',
    resume: 'Resume',
    next: 'My Next Episode',
    next_episode: 'Next Episode',
    watch_now: 'Watch now',
    start_watching: 'Start Watching',
    remaining_one: '1 min left',
    remaining_other: '{{count}} mins left',
    watching_list: 'Watching list',
    manage_full_list: 'Manage full list',
    manage_full_added_list_aria_label: 'Manage your full Added list',
    manage_full_watching_list_aria_label: 'Manage your full Watching list',
    recommendations_view_all_aria_label: 'View all programmes that are recommended for you',
    view_all: 'View all',
    view_all_of: 'View all of {{items}}',
    categories_view_all_aria_label: 'View all programmes from the {{category}} category',
    group_view_all_aria_label: 'View all programmes from the {{group}} group',
    programme_view_all_aria_label: 'View all of {{programme}}',
    personalisation_off_message: 'See more of the programmes you love by turning on personalisation.',
    personalisation_off_find_out_more_link: 'Find out more',
    personalisation_off_cta: 'Turn on personalisation',
    categories_sort_label: 'Sort by',
    categories_featured: 'Featured',
    categories_featured_page_title: '{{category}} - Featured',
    'categories_a-z': 'A-Z',
    'categories_most-recent': 'Most recent',
    categories_description: 'Browse the {{category}} category for available TV programmes to watch on BBC iPlayer.',
    'categories_view_all_a-z': 'View all {{category}} A-Z',
  },
};
