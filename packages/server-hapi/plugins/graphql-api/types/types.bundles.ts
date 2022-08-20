import { gql } from 'apollo-server-hapi';

export const typeDefs = gql`
  enum BundleType {
    default
    hero
    portrait
    event
  }
  type BundleTitle {
    default: String!
    small: String
  }
  type BundleImage {
    default: String!
  }
  type BundleJourney {
    id: ID!
    sliceId: ID
    type: String
  }
  enum BundlePreference {
    live
    promotionalWithLogo
    default
    editorial
    programmeSmall
    small
  }
  type BundlePreferences {
    episodeImage: [BundlePreference]
    episodeTitle: [BundlePreference]
    episodeSubtitle: [BundlePreference]
    episodeSynopsis: [BundlePreference]
  }

  type EpisodeTitle {
    default: String!
    editorial: String
    live: Boolean
  }
  type EpisodeSynopsis {
    synopsis: String!
    small: String
    editorial: String
    programmeSmall: String
    live: Boolean
  }

  type EpisodeImage {
    default: String
    promotional: String
    promotionalWithLogo: String
    live: Boolean
    character: String
    portrait: String
  }
  type EpisodeDuration {
    text: String
  }
  type EpisodeAvailability {
    remaining: String
  }
  type EpisodeVersion {
    kind: String
    duration: EpisodeDuration
    availability: EpisodeAvailability
  }
  type EpisodeLabels {
    category: String
    editorial: String
    time: String
  }
  type Episode {
    id: ID!
    title: EpisodeTitle!
    subtitle: EpisodeTitle
    live: Boolean
    previewId: ID
    synopsis: EpisodeSynopsis
    image: EpisodeImage
    versions: [EpisodeVersion]
    labels: EpisodeLabels
    promoted: Boolean
  }

  type BundleEntity {
    episode: Episode
    journey: BundleJourney
  }

  type Bundle {
    id: ID!
    type: BundleType
    title: BundleTitle!
    image: BundleImage
    journey: BundleJourney
    message: String
    preferences: BundlePreferences
    entities: [BundleEntity]
  }
  type Query {
    getBundlesForPath(path: String): [Bundle]
  }
`;

export default typeDefs;

export const resolvers = {
  Query: {
    getBundlesForPath(_parent: any, { path }: { path: string }) {
      if (path === '/') {
        return scrapedData;
      }
      return scrapedData;
    },
  },
};

const scrapedData = [
  {
    id: 'hero',
    type: 'hero',
    title: {
      default: "Everyone's watching...",
      small: null,
    },
    image: null,
    journey: null,
    message: null,
    preferences: {
      episodeImage: ['promotional', 'default'],
      episodeTitle: ['editorial', 'default'],
      episodeSubtitle: ['editorial', 'default'],
      episodeSynopsis: ['editorial', 'programmeSmall', 'small'],
    },
    entities: [
      {
        episode: {
          id: 'p0cpqn13',
          live: false,
          previewId: null,
          title: {
            default: 'Red Rose',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: "Series 1: 1. It's Grim Up North",
            editorial: 'All episodes available now',
            live: null,
          },
          synopsis: {
            small: 'A group of teenagers from Bolton download a mysterious app called Red Rose.',
            editorial: "It's not just your battery that could die... The Red Rose app could change your life",
            programmeSmall: 'When one of a group of friends downloads the Red Rose app, their lives take a dark turn.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryynv.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crysy8.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryt1k.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryszp.jpg',
          },
          tleo: {
            id: 'p0cpqlr7',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '48 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '48 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '48 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: {
          id: 'p0cpqlr7',
          sliceId: 'p0cpqm2t',
        },
      },
    ],
  },
  {
    id: 'editorial',
    type: null,
    title: {
      default: 'New & Trending',
      small: 'New & Trending',
    },
    image: null,
    journey: {
      id: 'featured',
      type: 'group',
    },
    message: null,
    preferences: {
      episodeImage: ['live', 'promotionalWithLogo', 'default'],
      episodeTitle: ['live', 'editorial', 'default'],
      episodeSubtitle: ['live', 'editorial', 'default'],
      episodeSynopsis: ['live', 'editorial', 'programmeSmall', 'small'],
    },
    entities: [
      {
        episode: {
          id: 'p0cpndzj',
          live: false,
          previewId: 'p0cspr09',
          title: {
            default: 'Marriage',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'All episodes available now',
            live: null,
          },
          synopsis: {
            small: 'Ian and Emma return from holiday and await the visit of their daughter’s boyfriend.',
            editorial: 'Sometimes funny, sometimes moving, always revealing. Sean Bean and Nicola Walker star',
            programmeSmall: 'Married couple Ian and Emma negotiate the insecurities around marriage.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crys5g.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryr2q.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryr6b.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryr4l.jpg',
          },
          tleo: {
            id: 'p0cpnd15',
          },
          versions: [
            {
              kind: 'technical-replacement',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0cpnd15',
          sliceId: 'p0cpnd3r',
        },
      },
      {
        episode: {
          id: 'p0crhwb0',
          live: true,
          previewId: null,
          title: {
            default: 'European Championships',
            editorial: null,
            live: 'Day 8: BBC One coverage',
          },
          subtitle: {
            default: '2022: Day 8: BBC One coverage - Diving finals',
            editorial: null,
            live: null,
          },
          synopsis: {
            small: 'Live coverage of the diving action at the European Aquatics Championships in Rome.',
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ctv0my.jpg',
            promotional: null,
            promotionalWithLogo: null,
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b0bdmc07',
          },
          versions: [
            {
              kind: 'webcast',
              duration: {
                text: '780 mins',
              },
              availability: {
                remaining: null,
              },
            },
          ],
          labels: {
            category: 'Sport',
            editorial: null,
            time: 'Live',
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'p0cjc9wx',
          live: false,
          previewId: null,
          title: {
            default: 'Superman & Lois',
            editorial: 'Superman & Lois: Series 2',
            live: null,
          },
          subtitle: {
            default: 'Series 2: 1. What Lies Beneath',
            editorial: 'All episodes available now',
            live: null,
          },
          synopsis: {
            small: 'Lois and Clark struggle as a couple. Chrissy adjusts to running the Gazette with Lois.',
            editorial: "Something is about to rock Smallville - can Earth's greatest hero save the day?",
            programmeSmall: 'The Man of Steel and the daring reporter face their greatest challenge - parenting.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cldjd3.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0clc7wd.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0clc7yq.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cnft16.jpg',
          },
          tleo: {
            id: 'p09yd3d8',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '40 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '40 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Sci-Fi',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p09yd3d8',
          sliceId: 'p0cjc8mr',
        },
      },
      {
        episode: {
          id: 'm001b1k2',
          live: false,
          previewId: 'p0cspqkt',
          title: {
            default: 'The Rap Game UK',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 4: Episode 1',
            editorial: 'New episodes every Thursday',
            live: null,
          },
          synopsis: {
            small: 'A twist is announced as the search for a new rap star begins. Special guest BackRoad Gee.',
            editorial: 'The hunt for the next rap superstar begins – and it’s going to be tougher than ever',
            programmeSmall: 'DJ Target, Krept and Konan hunt for the next big MC to take over the scene.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crs5yb.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqddx5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqcgdb.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p07jwq62',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '53 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p07jwq62',
          sliceId: 'm001b1k3',
        },
      },
      {
        episode: {
          id: 'm001b10q',
          live: false,
          previewId: null,
          title: {
            default: 'Celebrity MasterChef',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 17: Episode 1',
            editorial: 'Jello from the other side',
            live: null,
          },
          synopsis: {
            small: 'Danny Jones, Faye Winter, Kae Kurd, Nancy Dell’Olio and Paul Chuckle face the first heat.',
            editorial: 'Jello from the other side. Five celebrities swap showbiz for a stint in the kitchen',
            programmeSmall: "Chef John Torode and writer Gregg Wallace search for the country's top celebrity chef.",
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cql7gx.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqmhmq.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqmd2n.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b007mtf0',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Food',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b007mtf0',
          sliceId: 'm001b0yk',
        },
      },
      {
        episode: {
          id: 'p0cp2sfk',
          live: false,
          previewId: null,
          title: {
            default: 'The Secrets She Keeps',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 2: Episode 1',
            editorial: 'All episodes available now',
            live: null,
          },
          synopsis: {
            small: 'Two years after the kidnap of Baby Ben, Agatha is sentenced. But how repentant is she?',
            editorial: 'Some secrets never stay buried. Years after an unspeakable crime, the nightmare continues',
            programmeSmall: 'Some secrets never stay buried.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cry5ym.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crtk0s.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crtld5.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crtkh9.jpg',
          },
          tleo: {
            id: 'p08grsgv',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '45 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '45 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p08grsgv',
          sliceId: 'p0cp2prj',
        },
      },
      {
        episode: {
          id: 'p0crhwjg',
          live: true,
          previewId: null,
          title: {
            default: 'European Aquatics Championships',
            editorial: null,
            live: 'European Aquatics Championships: Diving',
          },
          subtitle: {
            default: "2022 Diving: Women's 3m Synchro & Men's 1m Final",
            editorial: null,
            live: null,
          },
          synopsis: {
            small: 'Coverage of the 2022 European Aquatics Championships from Rome.',
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cttggf.jpg',
            promotional: null,
            promotionalWithLogo: null,
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b00tghzd',
          },
          versions: [
            {
              kind: 'webcast',
              duration: {
                text: '155 mins',
              },
              availability: {
                remaining: null,
              },
            },
          ],
          labels: {
            category: 'Sport',
            editorial: null,
            time: 'Live',
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm001b10x',
          live: false,
          previewId: null,
          title: {
            default: 'Shetland',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 7: Episode 1',
            editorial: 'New episodes every Wednesday',
            live: null,
          },
          synopsis: {
            small: 'DI Perez investigates the mysterious disappearance of a vulnerable young man.',
            editorial: 'A vulnerable young man goes missing. What was he running from?',
            programmeSmall: 'The disappearance of a vulnerable young man draws Perez into the secret past of a family.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cql3fp.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqdzdy.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqdzl7.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqdzjh.jpg',
          },
          tleo: {
            id: 'p01s711r',
          },
          versions: [
            {
              kind: 'technical-replacement',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Crime Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p01s711r',
          sliceId: 'm001b110',
        },
      },
      {
        episode: {
          id: 'm00183kf',
          live: false,
          previewId: null,
          title: {
            default: 'Top Gear',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 32: Episode 1',
            editorial: 'Time to hit the road',
            live: null,
          },
          synopsis: {
            small: 'Freddie, Chris and Paddy take an RV road trip across Florida’s swampy Everglades.',
            editorial: 'Time to hit the road. The lads get fast and furious on the slopes, swamps and scrapyard',
            programmeSmall: 'Motoring magazine, including road tests, news and features.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cbbw55.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cb5lm5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cb5lrt.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b006mj59',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b006mj59',
          sliceId: 'm00183kg',
        },
      },
      {
        episode: {
          id: 'm001b6s1',
          live: false,
          previewId: null,
          title: {
            default: 'Afghanistan: Getting Out',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Finding a way to end a war',
            live: null,
          },
          synopsis: {
            small: 'Political insiders tell the story of the Allies’ long attempts to end war in Afghanistan.',
            editorial: 'Finding a way to end a war. The long and troubled story of an often chaotic conflict',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0csrmsy.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ct49xh.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ct49z1.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm001b6s3',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '60 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Documentary',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'm001b6s3',
          sliceId: null,
        },
      },
      {
        episode: {
          id: 'm001b7b6',
          live: false,
          previewId: null,
          title: {
            default: 'EastEnders',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: '15/08/2022',
            editorial: "All this week's episodes available now",
            live: null,
          },
          synopsis: {
            small: 'It’s an emotional day for the Baker/Taylor clan as Avery’s funeral gets under way.',
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crylrn.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c62p7r.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c6d1xn.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b006m86d',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '29 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '29 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'p0cpplbh',
          live: false,
          previewId: null,
          title: {
            default: 'Sky High Club: Scotland and Beyond',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: null,
            live: null,
          },
          synopsis: {
            small: 'Robbie is the youngest pilot to become a captain in the UK.',
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crtyd4.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs12bd.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs19ys.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p0cppdkb',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Documentary',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0cppdkb',
          sliceId: null,
        },
      },
    ],
  },
  {
    id: 'high-priority',
    type: 'portrait',
    title: {
      default: 'Stream Every Episode',
      small: '',
    },
    image: null,
    journey: {
      id: 'p05pn9jr',
      type: 'group',
    },
    message: null,
    preferences: {
      episodeImage: ['portrait', 'promotionalWithLogo', 'promotional', 'default'],
      episodeTitle: ['live', 'editorial', 'default'],
      episodeSubtitle: ['live', 'editorial', 'default'],
      episodeSynopsis: ['live', 'editorial', 'programmeSmall', 'small'],
    },
    entities: [
      {
        episode: {
          id: 'm00085sv',
          live: false,
          previewId: null,
          title: {
            default: 'The Capture',
            editorial: 'The Capture: Series 1',
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. What Happens in Helmand',
            editorial: 'Can you really believe what you see?',
            live: null,
          },
          synopsis: {
            small: 'Soldier Shaun Emery is accused of a crime he denies.',
            editorial: 'Can you really believe what you see? The truth can sometimes be a matter of perspective',
            programmeSmall: 'A tenacious young detective begins to uncover a multi-layered conspiracy.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07mdjf6.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07m1kph.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07m1krz.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0csdz2w.jpg',
          },
          tleo: {
            id: 'm00085sx',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 3 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 3 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'm00085sx',
          sliceId: 'm00085sw',
        },
      },
      {
        episode: {
          id: 'p01fj94w',
          live: false,
          previewId: null,
          title: {
            default: 'Peaky Blinders',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Every series, only on iPlayer',
            live: null,
          },
          synopsis: {
            small: 'When a crate of guns disappears, Thomas sees an opportunity to move up in the world.',
            editorial: 'On the lawless streets of 1920s Birmingham, the fight is on. Stars Cillian Murphy',
            programmeSmall: 'An epic gangster drama set in the lawless streets of 1920s Birmingham.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07j7rcp.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07j7rgy.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09lnvq2.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0934phd.jpg',
          },
          tleo: {
            id: 'b045fz8r',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '57 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '57 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Crime Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b045fz8r',
          sliceId: 'p01fj945',
        },
      },
      {
        episode: {
          id: 'b0c47sx7',
          live: false,
          previewId: null,
          title: {
            default: 'Baptiste',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Shell',
            editorial: null,
            live: null,
          },
          synopsis: {
            small: "Julien Baptiste hunts for a missing prostitute in Amsterdam's seamy criminal underworld.",
            editorial: null,
            programmeSmall: 'Julien Baptiste delves into the criminal underworld of the red light district.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p087lgqn.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09p7hs4.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p087lg6q.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p093x0s0.jpg',
          },
          tleo: {
            id: 'b0c47t32',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '55 mins',
              },
              availability: {
                remaining: 'Available for 10 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '55 mins',
              },
              availability: {
                remaining: 'Available for 10 months',
              },
            },
          ],
          labels: {
            category: 'Crime Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b0c47t32',
          sliceId: 'b0c47t34',
        },
      },
      {
        episode: {
          id: 'p06kbg8t',
          live: false,
          previewId: null,
          title: {
            default: 'Killing Eve',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Nice Face',
            editorial: 'A deadly, obsessive game of cat and mouse',
            live: null,
          },
          synopsis: {
            small: 'When a politician is murdered, an MI5 security officer must protect the only witness.',
            editorial: 'Eve wants excitement. Villanelle wants to kill. Starring Jodie Comer and Sandra Oh.',
            programmeSmall: 'Thriller series in which two women go head to head in a game of cat and mouse.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07k09pb.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08b5fb2.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07k09q2.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p097cpf3.jpg',
          },
          tleo: {
            id: 'p06jy6bc',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '42 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '42 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p06jy6bc',
          sliceId: 'p06jy6gl',
        },
      },
      {
        episode: {
          id: 'b099161r',
          live: false,
          previewId: null,
          title: {
            default: 'Snowfall',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Pilot',
            editorial: 'A storm is coming and its name is cocaine',
            live: null,
          },
          synopsis: {
            small: 'A young small time dealer takes a leap into the cocaine game in 80s LA.',
            editorial: 'LA, 1983. A storm is coming and its name is cocaine',
            programmeSmall: 'Hard-hitting drama about the beginnings of the crack epidemic in 1980s Los Angeles.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0825tnn.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0825w1f.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0825twb.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p097d8sy.jpg',
          },
          tleo: {
            id: 'b0991bqd',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '55 mins',
              },
              availability: {
                remaining: 'Available for 4 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '55 mins',
              },
              availability: {
                remaining: 'Available for 4 months',
              },
            },
          ],
          labels: {
            category: 'Crime Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b0991bqd',
          sliceId: 'b0991bqh',
        },
      },
      {
        episode: {
          id: 'm0003g1f',
          live: false,
          previewId: null,
          title: {
            default: 'Pose',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Fashion, music, freedom and the fight to be yourself',
            live: null,
          },
          synopsis: {
            small: 'Blanca serves as a member of the House of Abundance but wants to open her own house.',
            editorial: 'Fashion, music, freedom and the fight to be yourself in the late 80s New York queer scene',
            programmeSmall: 'Groundbreaking US series about the underground world of 1980s ball culture.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07k038s.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07k03qb.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07k0411.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09ny5sj.jpg',
          },
          tleo: {
            id: 'm0003g1h',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '74 mins',
              },
              availability: {
                remaining: 'Available for 7 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '74 mins',
              },
              availability: {
                remaining: 'Available for 7 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'm0003g1h',
          sliceId: 'm0003g1g',
        },
      },
      {
        episode: {
          id: 'b01k9pn6',
          live: false,
          previewId: null,
          title: {
            default: 'Line of Duty',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Shocking. Intense. Unmissable.',
            live: null,
          },
          synopsis: {
            small: "Steve Arnott realises the target in his anti-corruption case is the city's top detective.",
            editorial: "On the trail of corrupt coppers -  follow every twist of AC-12's investigations.",
            programmeSmall: "Steve Arnott realises the target in his anti-corruption case is the city's top detective",
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08lypl6.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08mqgj0.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07k2wc9.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0933z35.jpg',
          },
          tleo: {
            id: 'p00yzlr0',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 5 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 5 months',
              },
            },
          ],
          labels: {
            category: 'Crime Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p00yzlr0',
          sliceId: 'b01k9pm3',
        },
      },
      {
        episode: {
          id: 'p08vqpt8',
          live: false,
          previewId: null,
          title: {
            default: 'Pretty Little Liars',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Pilot',
            editorial: 'Pretty people, ugly secrets',
            live: null,
          },
          synopsis: {
            small: 'A year after their friend disappears, four girls receive mysterious messages from "A"',
            editorial: 'Pretty people, ugly secrets. How far will they go to keep them safe?',
            programmeSmall: 'A year after their friend disappears, four girls receive mysterious messages from "A"',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08zhj31.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0915qdv.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0915qgb.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09ny6t3.jpg',
          },
          tleo: {
            id: 'p08v4737',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '43 mins',
              },
              availability: {
                remaining: 'Available for 4 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p08v4737',
          sliceId: 'p08v47h4',
        },
      },
      {
        episode: {
          id: 'p00vrlrk',
          live: false,
          previewId: null,
          title: {
            default: 'Bad Education',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: "Series 1: 1. Parents' Evening",
            editorial: 'Every. Single. Episode.',
            live: null,
          },
          synopsis: {
            small: "It's parents' evening, and Alfie is under pressure to mark his mock exam papers.",
            editorial: "Meet the teacher who's a bigger kid than the kids he teaches. With Jack Whitehall.",
            programmeSmall: 'A comedy series about the worst teacher ever to grace the British education system.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07jhyck.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07jhyck.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07jhysv.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p093zn5b.jpg',
          },
          tleo: {
            id: 'p01djw5m',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '29 mins',
              },
              availability: {
                remaining: 'Available for 9 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '29 mins',
              },
              availability: {
                remaining: 'Available for 9 months',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p01djw5m',
          sliceId: 'p00vrlrh',
        },
      },
      {
        episode: {
          id: 'b0074dlv',
          live: false,
          previewId: null,
          title: {
            default: 'Doctor Who',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Rose',
            editorial: 'All of time and space awaits the Doctor',
            live: null,
          },
          synopsis: {
            small: 'Rose Tyler meets a mysterious stranger called the Doctor, and realises Earth is in danger.',
            editorial: "All of time and space awaits the Doctor. It's the trip of a lifetime",
            programmeSmall: 'Adventures in time and space with the ninth Time Lord and Rose',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07rnbvz.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08hrycq.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08hrydp.jpg',
            live: null,
            character: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p091q1hm.png',
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09ny3ym.jpg',
          },
          tleo: {
            id: 'b006q2x0',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '44 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Sci-Fi',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b006q2x0',
          sliceId: 'b007vvcq',
        },
      },
      {
        episode: {
          id: 'b007lc51',
          live: false,
          previewId: null,
          title: {
            default: 'Gavin & Stacey',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'The whole story',
            live: null,
          },
          synopsis: {
            small: 'After being phone buddies for months, Gavin and Stacey finally arrange a rendezvous.',
            editorial: 'The absolute highs and awkward lows of a long-distance love affair. Plus...Smithy.',
            programmeSmall: 'Comedy about Essex boy Gavin and Welsh girl Stacey who fall in love',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p089sc8j.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p01l3l39.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07k74kl.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09ny484.jpg',
          },
          tleo: {
            id: 'b007nf70',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b007nf70',
          sliceId: 'b007lb93',
        },
      },
      {
        episode: {
          id: 'p0b61zcv',
          live: false,
          previewId: null,
          title: {
            default: 'The Responder',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Damaged. Dangerous. Destructive',
            live: null,
          },
          synopsis: {
            small: 'Police responder Chris nears breaking point as a friend asks him to locate a drug addict.',
            editorial: 'Damaged. Dangerous. Destructive. Martin Freeman is compelling as a burnt-out copper',
            programmeSmall: 'Police response officer Chris is struggling to keep a grip on his mental health.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bj8qyp.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bkc651.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bh7v9r.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bh7v8j.jpg',
          },
          tleo: {
            id: 'p0b61z9j',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 5 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 5 months',
              },
            },
          ],
          labels: {
            category: 'Crime Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0b61z9j',
          sliceId: 'p0b61zc8',
        },
      },
    ],
  },
  {
    id: 'popular',
    type: null,
    title: {
      default: 'Most Popular',
      small: 'Most Popular',
    },
    image: null,
    journey: {
      id: 'popular',
      type: 'group',
    },
    message: null,
    preferences: {
      episodeImage: ['promotionalWithLogo', 'default'],
      episodeTitle: ['editorial', 'default'],
      episodeSubtitle: ['editorial', 'default'],
      episodeSynopsis: ['editorial', 'programmeSmall', 'small'],
    },
    entities: [
      {
        episode: {
          id: 'm001b7tz',
          live: false,
          previewId: null,
          title: {
            default: 'EastEnders',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: '18/08/2022',
            editorial: '18/08/2022: Stuart takes a huge step',
            live: null,
          },
          synopsis: {
            small: 'With Karen by his side, Stuart takes a huge step.',
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crypbn.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c62p7r.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c6d1xn.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b006m86d',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '29 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '29 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: null,
      },
      {
        episode: {
          id: 'p0cpndzj',
          live: false,
          previewId: 'p0cspr09',
          title: {
            default: 'Marriage',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'All episodes available now',
            live: null,
          },
          synopsis: {
            small: 'Ian and Emma return from holiday and await the visit of their daughter’s boyfriend.',
            editorial: 'Sometimes funny, sometimes moving, always revealing. Sean Bean and Nicola Walker star',
            programmeSmall: 'Married couple Ian and Emma negotiate the insecurities around marriage.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crys5g.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryr2q.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryr6b.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryr4l.jpg',
          },
          tleo: {
            id: 'p0cpnd15',
          },
          versions: [
            {
              kind: 'technical-replacement',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: {
          id: 'p0cpnd15',
          sliceId: 'p0cpnd3r',
        },
      },
      {
        episode: {
          id: 'm001b10x',
          live: false,
          previewId: null,
          title: {
            default: 'Shetland',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 7: Episode 1',
            editorial: 'New episodes every Wednesday',
            live: null,
          },
          synopsis: {
            small: 'DI Perez investigates the mysterious disappearance of a vulnerable young man.',
            editorial: 'A vulnerable young man goes missing. What was he running from?',
            programmeSmall: 'The disappearance of a vulnerable young man draws Perez into the secret past of a family.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cql3fp.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqdzdy.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqdzl7.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqdzjh.jpg',
          },
          tleo: {
            id: 'p01s711r',
          },
          versions: [
            {
              kind: 'technical-replacement',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Crime Drama',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: {
          id: 'p01s711r',
          sliceId: 'm001b110',
        },
      },
      {
        episode: {
          id: 'm001b10q',
          live: false,
          previewId: null,
          title: {
            default: 'Celebrity MasterChef',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 17: Episode 1',
            editorial: 'Jello from the other side',
            live: null,
          },
          synopsis: {
            small: 'Danny Jones, Faye Winter, Kae Kurd, Nancy Dell’Olio and Paul Chuckle face the first heat.',
            editorial: 'Jello from the other side. Five celebrities swap showbiz for a stint in the kitchen',
            programmeSmall: "Chef John Torode and writer Gregg Wallace search for the country's top celebrity chef.",
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cql7gx.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqmhmq.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqmd2n.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b007mtf0',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Food',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: {
          id: 'b007mtf0',
          sliceId: 'm001b0yk',
        },
      },
      {
        episode: {
          id: 'p0cp2sfk',
          live: false,
          previewId: null,
          title: {
            default: 'The Secrets She Keeps',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 2: Episode 1',
            editorial: 'All episodes available now',
            live: null,
          },
          synopsis: {
            small: 'Two years after the kidnap of Baby Ben, Agatha is sentenced. But how repentant is she?',
            editorial: 'Some secrets never stay buried. Years after an unspeakable crime, the nightmare continues',
            programmeSmall: 'Some secrets never stay buried.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cry5ym.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crtk0s.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crtld5.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crtkh9.jpg',
          },
          tleo: {
            id: 'p08grsgv',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '45 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '45 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: {
          id: 'p08grsgv',
          sliceId: 'p0cp2prj',
        },
      },
      {
        episode: {
          id: 'm001b7jh',
          live: false,
          previewId: null,
          title: {
            default: 'Panorama',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'The Billion-Pound Savings Scandal',
            editorial: null,
            live: null,
          },
          synopsis: {
            small: 'The story of one of many failed investment schemes that have affected ordinary savers.',
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs6fc5.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs6fc5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs6fgz.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b006t14n',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Current Affairs',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm0019f4p',
          live: false,
          previewId: 'p0cqbrh1',
          title: {
            default: 'The Control Room',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'One call can change everything',
            live: null,
          },
          synopsis: {
            small: 'Call handler Gabe receives a desperate call from a woman who unexpectedly recognises him.',
            editorial: 'One call can change everything. Twist-filled thriller starring Iain De Caestecker',
            programmeSmall: "An emergency call handler's life is turned upside down by a mysterious call.",
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0clmw6k.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cl6j8k.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cl6l3z.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cl6wgz.jpg',
          },
          tleo: {
            id: 'm0019f4r',
          },
          versions: [
            {
              kind: 'technical-replacement',
              duration: {
                text: '57 mins',
              },
              availability: {
                remaining: 'Available for 10 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '57 mins',
              },
              availability: {
                remaining: 'Available for 10 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: {
          id: 'm0019f4r',
          sliceId: 'm0019f4q',
        },
      },
      {
        episode: {
          id: 'm001b0ym',
          live: false,
          previewId: null,
          title: {
            default: 'Ambulance',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 9: Episode 1',
            editorial: '1/6 The North East crew fights to bounce back',
            live: null,
          },
          synopsis: {
            small: 'New series joins ambulance staff caring for the 2.7 million people of the North East.',
            editorial: '1/6 The North East crew fights to bounce back after their toughest years',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cr2mmj.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqlnr0.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqlnsh.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b09393rd',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '57 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Documentary',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: {
          id: 'b09393rd',
          sliceId: 'm001b0yn',
        },
      },
      {
        episode: {
          id: 'm00085sv',
          live: false,
          previewId: null,
          title: {
            default: 'The Capture',
            editorial: 'The Capture: Series 1',
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. What Happens in Helmand',
            editorial: 'Can you really believe what you see?',
            live: null,
          },
          synopsis: {
            small: 'Soldier Shaun Emery is accused of a crime he denies.',
            editorial: 'Can you really believe what you see? The truth can sometimes be a matter of perspective',
            programmeSmall: 'A tenacious young detective begins to uncover a multi-layered conspiracy.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07mdjf6.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07m1kph.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07m1krz.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0csdz2w.jpg',
          },
          tleo: {
            id: 'm00085sx',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 3 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 3 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: {
          id: 'm00085sx',
          sliceId: 'm00085sw',
        },
      },
      {
        episode: {
          id: 'm001b1k2',
          live: false,
          previewId: 'p0cspqkt',
          title: {
            default: 'The Rap Game UK',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 4: Episode 1',
            editorial: 'New episodes every Thursday',
            live: null,
          },
          synopsis: {
            small: 'A twist is announced as the search for a new rap star begins. Special guest BackRoad Gee.',
            editorial: 'The hunt for the next rap superstar begins – and it’s going to be tougher than ever',
            programmeSmall: 'DJ Target, Krept and Konan hunt for the next big MC to take over the scene.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crs5yb.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqddx5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqcgdb.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p07jwq62',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '53 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: {
          id: 'p07jwq62',
          sliceId: 'm001b1k3',
        },
      },
      {
        episode: {
          id: 'p0cpqn13',
          live: false,
          previewId: null,
          title: {
            default: 'Red Rose',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: "Series 1: 1. It's Grim Up North",
            editorial: 'All episodes available now',
            live: null,
          },
          synopsis: {
            small: 'A group of teenagers from Bolton download a mysterious app called Red Rose.',
            editorial: "It's not just your battery that could die... The Red Rose app could change your life",
            programmeSmall: 'When one of a group of friends downloads the Red Rose app, their lives take a dark turn.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryynv.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crysy8.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryt1k.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryszp.jpg',
          },
          tleo: {
            id: 'p0cpqlr7',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '48 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '48 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '48 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: {
          id: 'p0cpqlr7',
          sliceId: 'p0cpqm2t',
        },
      },
      {
        episode: {
          id: 'm001b0yv',
          live: false,
          previewId: null,
          title: {
            default: 'Tom Daley: Illegal to Be Me',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'When being gay is a crime',
            live: null,
          },
          synopsis: {
            small: 'Tom Daley meets athletes facing persecution in homophobic countries in the Commonwealth.',
            editorial: 'When being gay is a crime. The champion diver explores what sport can do to help',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cr2yl5.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cr2yl5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cr2yn5.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm001b0yv',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Sport',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: null,
      },
      {
        episode: {
          id: 'p0cpplbh',
          live: false,
          previewId: null,
          title: {
            default: 'Sky High Club: Scotland and Beyond',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: null,
            live: null,
          },
          synopsis: {
            small: 'Robbie is the youngest pilot to become a captain in the UK.',
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crtyd4.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs12bd.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs19ys.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p0cppdkb',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Documentary',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: {
          id: 'p0cppdkb',
          sliceId: null,
        },
      },
      {
        episode: {
          id: 'm001b745',
          live: false,
          previewId: null,
          title: {
            default: 'Match of the Day',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: '2022/23: 13/08/2022',
            editorial: '13/08/2022: With Brentford v Man Utd',
            live: null,
          },
          synopsis: {
            small: 'Gary Lineker introduces highlights of Man City v Bournemouth and Arsenal v Leicester.',
            editorial: '13/08/2022: With Brentford v Man Utd, Man City v Bournemouth and Villa v Everton',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ctjvs4.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ctjvs4.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ctjvv0.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b007t9y1',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '87 mins',
              },
              availability: {
                remaining: 'Available until Sun 12am',
              },
            },
          ],
          labels: {
            category: 'Sport',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm001b89m',
          live: false,
          previewId: null,
          title: {
            default: "RuPaul's Drag Race Down Under",
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 2: Episode 3',
            editorial: '3/8 Harnessing their hosting skills',
            live: null,
          },
          synopsis: {
            small: 'The queens pair up as they harness their hosting skills in a Drag Brunch style challenge.',
            editorial: '3/8 Harnessing their hosting skills, the queens pair up for a Drag Brunch style challenge',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ct4kwl.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cpyy1p.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cpyx61.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p09f989z',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '60 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm001b77p',
          live: false,
          previewId: null,
          title: {
            default: 'Match of the Day 2',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: '2022/23: 14/08/2022',
            editorial: '14/08/2022: With Chelsea v Spurs',
            live: null,
          },
          synopsis: {
            small: 'Mark Chapman presents highlights of Chelsea v Tottenham and Nottingham Forest v West Ham.',
            editorial: '14/08/2022: With Chelsea v Spurs and new boys Forest’s first home game against West Ham',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ctjxd0.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ctjxd0.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ctjxpr.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b007t9yb',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available until Mon 12am',
              },
            },
          ],
          labels: {
            category: 'Sport',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm00196h7',
          live: false,
          previewId: null,
          title: {
            default: "Canada's Drag Race",
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 3: Episode 1',
            editorial: 'Canada’s finest queens head for the werkroom',
            live: null,
          },
          synopsis: {
            small: 'The queens are challenged to turn a streetwear look into catwalk couture.',
            editorial: 'Canada’s finest queens head for the werkroom. Who will make a fabulous first impression?',
            programmeSmall: 'Canadian drag artists compete for the Drag Race crown.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0clmh10.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ckfh3w.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ckfh88.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p08h1dp1',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: {
          id: 'p08h1dp1',
          sliceId: 'm00196h8',
        },
      },
      {
        episode: {
          id: 'p0cgx8pg',
          live: false,
          previewId: null,
          title: {
            default: 'The Newsreader',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Three Two One',
            editorial: '1986: The big news is behind the camera',
            live: null,
          },
          synopsis: {
            small: 'In 1986, reporter Dale and newsreader Helen cover the Challenger Space Shuttle launch.',
            editorial: '1986: The big news is behind the camera. A star anchor and a rookie reporter join forces',
            programmeSmall: 'Star newsreader Helen and rookie reporter Dale join forces to survive a 1980s newsroom.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmr1jg.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmq7r8.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmqs6v.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmqfys.jpg',
          },
          tleo: {
            id: 'p0cgx4k0',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '55 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '55 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: {
          id: 'p0cgx4k0',
          sliceId: 'p0cgx57w',
        },
      },
      {
        episode: {
          id: 'm001b7nx',
          live: false,
          previewId: null,
          title: {
            default: 'The Repair Shop',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 10: Episode 8',
            editorial: 'With a terribly tuneless barrel organ',
            live: null,
          },
          synopsis: {
            small: 'The team restore a pair of running shoes, a drinks table, a portrait and a barrel organ.',
            editorial: 'With a terribly tuneless barrel organ and a marathon fix for a pair of running shoes',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crsz7r.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c4lrz4.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c6gs3l.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b08l581p',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Lifestyle',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm0019dz7',
          live: false,
          previewId: null,
          title: {
            default: 'Who Stole Tamara Ecclestone’s Diamonds?',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'Britain’s biggest burglary',
            live: null,
          },
          synopsis: {
            small: '£26m in jewellery and cash. A painstaking police investigation. A missing mastermind?',
            editorial: 'Britain’s biggest burglary – as told by the police, the victims and even the suspects',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmr5ft.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmr5ft.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmr7k3.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm0019dz7',
          },
          versions: [
            {
              kind: 'technical-replacement',
              duration: {
                text: '54 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '54 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Documentary',
            editorial: null,
            time: null,
          },
          promoted: false,
        },
        journey: null,
      },
    ],
  },
  {
    id: 'normal-priority',
    type: 'default',
    title: {
      default: 'Family Favourites',
      small: '',
    },
    image: null,
    journey: {
      id: 'p05q2df5',
      type: 'group',
    },
    message: null,
    preferences: {
      episodeImage: ['live', 'promotionalWithLogo', 'default'],
      episodeTitle: ['live', 'editorial', 'default'],
      episodeSubtitle: ['live', 'editorial', 'default'],
      episodeSynopsis: ['live', 'editorial', 'programmeSmall', 'small'],
    },
    entities: [
      {
        episode: {
          id: 'm000zwrn',
          live: false,
          previewId: null,
          title: {
            default: 'Nova Jones',
            editorial: 'Nova Jones',
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Friends of Nova',
            editorial: 'The solar system’s singing sensation',
            live: null,
          },
          synopsis: {
            small: 'Nova prevents environmental disaster when her stuff pollutes a nearby planet.\n\n',
            editorial: 'Touring the universe with a pop megastar',
            programmeSmall: 'Nova Jones travels the universe, dropping stellar hits and playing to hordes of fans.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09zhfx3.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09vjzmr.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c2hpp0.jpg',
            live: null,
            character: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09w0lhy.png',
            portrait: null,
          },
          tleo: {
            id: 'm000zwrq',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '24 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '24 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '24 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'CBBC',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'm000zwrq',
          sliceId: 'm000zwrp',
        },
      },
      {
        episode: {
          id: 'p0cfzzfh',
          live: false,
          previewId: null,
          title: {
            default: 'Pokémon: Sun and Moon',
            editorial: 'Pokémon: Sun and Moon',
            live: null,
          },
          subtitle: {
            default: 'Series 20: 1. Alola to New Adventure!',
            editorial: 'NEW SERIES: Ash and Pikachu arrive in Alola!',
            live: null,
          },
          synopsis: {
            small: 'A holiday on Melemele Island turns into the promise of many exciting adventures to come!',
            editorial: 'Join Ash as he travels to the tropical Alola region for new adventures!',
            programmeSmall: 'Join Ash as he travels to the tropical Alola region for new adventures!',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ckhgv1.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjb6qc.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjb6p4.jpg',
            live: null,
            character: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0chkf4z.png',
            portrait: null,
          },
          tleo: {
            id: 'p0cf0qvn',
          },
          versions: [
            {
              kind: 'iplayer-version',
              duration: {
                text: '21 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'CBBC',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0cf0qvn',
          sliceId: 'p0cf0r1g',
        },
      },
      {
        episode: {
          id: 'p0cf1342',
          live: false,
          previewId: null,
          title: {
            default: 'Oswaldo',
            editorial: 'Oswaldo',
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. All Game and No Play',
            editorial: 'NEW SERIES: Every day is an adventure with Oswaldo',
            live: null,
          },
          synopsis: {
            small: 'Oswaldo goes to a video game rental store for the first time.',
            editorial: 'Excitable penguin Oswaldo and his friends embark on many weird and wonderful adventures.',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjrgpc.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjtg5w.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjtg68.jpg',
            live: null,
            character: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjtdmh.png',
            portrait: null,
          },
          tleo: {
            id: 'p0cf0yj3',
          },
          versions: [
            {
              kind: 'iplayer-version',
              duration: {
                text: '11 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'CBBC',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0cf0yj3',
          sliceId: null,
        },
      },
      {
        episode: {
          id: 'p0chfqdf',
          live: false,
          previewId: null,
          title: {
            default: 'Dragon Ball Super',
            editorial: 'Dragon Ball Super',
            live: null,
          },
          subtitle: {
            default: 'Series 1 - Battle of Gods: 1. A Peacetime Reward Who Gets the 100 Million Zeni?!',
            editorial: 'NEW SERIES: The God of Destruction awakens…',
            live: null,
          },
          synopsis: {
            small: 'Now Earth is peaceful, Goku needs to get a real job. But will a generous gift change that?',
            editorial: 'Will Goku and friends be able to halt Beerus the God of Destruction?',
            programmeSmall: 'Will Goku and friends be able to halt Beerus the God of Destruction?',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0chs475.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0chs3zk.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0chs417.jpg',
            live: null,
            character: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cgck70.png',
            portrait: null,
          },
          tleo: {
            id: 'p0chfndr',
          },
          versions: [
            {
              kind: 'iplayer-version',
              duration: {
                text: '21 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'CBBC',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0chfndr',
          sliceId: 'p0chfp1h',
        },
      },
      {
        episode: {
          id: 'm001967s',
          live: false,
          previewId: null,
          title: {
            default: 'One Zoo Three',
            editorial: 'One Zoo Three',
            live: null,
          },
          subtitle: {
            default: 'Series 2: 1. The Zoosical',
            editorial: 'NEW SERIES: Three brothers go wild in their own zoo!',
            live: null,
          },
          synopsis: {
            small: 'The brothers are on a mission to compose a zoo musical.',
            editorial: 'Three young brothers who run a zoo',
            programmeSmall: 'Three young brothers who own a zoo.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ck6cr6.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjzxd7.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjzx07.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm000n1cw',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '22 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'CBBC',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'm000n1cw',
          sliceId: 'm001967t',
        },
      },
      {
        episode: {
          id: 'p0cf2sn0',
          live: false,
          previewId: null,
          title: {
            default: "Ronja, the Robber's Daughter",
            editorial: "Ronja, the Robber's Daughter",
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Born In The Storm',
            editorial: 'NEW SERIES: Adventures await',
            live: null,
          },
          synopsis: {
            small: 'Lightning strikes the fort, and Ronja is born.',
            editorial: 'The epic 26-part story of a ten-year-old girl born on a stormy night in a mountain fort.',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ck0mx5.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjcc6c.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjcc9s.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p0cf0jt9',
          },
          versions: [
            {
              kind: 'iplayer-version',
              duration: {
                text: '25 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'CBBC',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0cf0jt9',
          sliceId: null,
        },
      },
      {
        episode: {
          id: 'b00jzwsf',
          live: false,
          previewId: null,
          title: {
            default: 'Horrible Histories',
            editorial: 'Horrible Histories',
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'The funniest, yuckiest and most gruesome bits of history',
            live: null,
          },
          synopsis: {
            small: 'A pirate captain worries about an early bedtime and the four King Georges form a boy band.',
            editorial: 'The funniest, yuckiest and most gruesome bits of history',
            programmeSmall: 'Sketches, cartoons and quizzes liberally splattered with blood and gore.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07j4pm4.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09xw4v9.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09y1009.jpg',
            live: null,
            character: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08zb141.png',
            portrait: null,
          },
          tleo: {
            id: 'b00sp0l8',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'CBBC',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b00sp0l8',
          sliceId: 'b00k2xb1',
        },
      },
      {
        episode: {
          id: 'b05qpx8c',
          live: false,
          previewId: null,
          title: {
            default: "Old Jack's Boat",
            editorial: "Old Jack's Boat",
            live: null,
          },
          subtitle: {
            default: 'Storm in a Teacup',
            editorial: 'Remembering one of our greatest storytellers',
            live: null,
          },
          synopsis: {
            small: "Everyone's planning a festival, but when clumsy Ernie tries to help, everything is ruined.",
            editorial: "Everyone's planning a festival, but when clumsy Ernie tries to help, everything is ruined",
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p02nbb35.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07cxj03.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cpmqp4.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b03pd8j8',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '36 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'CBeebies',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm0012j6y',
          live: false,
          previewId: null,
          title: {
            default: 'The Beaker Girls',
            editorial: 'The Beaker Girls',
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. The Ice Cream Thief',
            editorial: 'Tracy & Jess are back for a rollercoaster ride',
            live: null,
          },
          synopsis: {
            small: 'Jess and Tracy love life in Cooksea, but an ice cream thief changes everything.',
            editorial: 'Jess and Tracy love life in Cooksea, but an ice cream thief changes everything.',
            programmeSmall: 'Jess and Tracy Beaker are loving their new life by the seaside.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b74dbf.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b8fjfx.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b8fjkg.jpg',
            live: null,
            character: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b9wvqn.png',
            portrait: null,
          },
          tleo: {
            id: 'm0012j70',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '27 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '27 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'CBBC',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'm0012j70',
          sliceId: 'm0012j6z',
        },
      },
      {
        episode: {
          id: 'b00pk64x',
          live: false,
          previewId: null,
          title: {
            default: 'The Gruffalo',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'A mouse took a stroll through the deep dark wood',
            live: null,
          },
          synopsis: {
            small: 'Animated tale of a mouse who takes a walk through the woods in search of a nut.',
            editorial: 'A mouse took a stroll through the deep dark wood, and his tall tales turn out to be true!',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07y5vvr.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07y5vvr.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07y5vy4.jpg',
            live: null,
            character: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p091q2b7.png',
            portrait: null,
          },
          tleo: {
            id: 'b00pk64x',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '27 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '27 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Film - Family',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'b04w7pgj',
          live: false,
          previewId: null,
          title: {
            default: 'The Boy in the Dress',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'Dennis’ life is dead dull... until he dons a dress',
            live: null,
          },
          synopsis: {
            small: 'One-off family comedy about a boy frustrated by the boring grey world he inhabits.',
            editorial: 'Jennifer Saunders and Kate Moss head an all-star cast in David Walliams’ family fable.',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07x0kw0.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07x0kw0.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07x0ktz.jpg',
            live: null,
            character: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p091q2kw.png',
            portrait: null,
          },
          tleo: {
            id: 'b04w7pgj',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '62 mins',
              },
              availability: {
                remaining: 'Available for 7 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '62 mins',
              },
              availability: {
                remaining: 'Available for 7 months',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'b0074dlv',
          live: false,
          previewId: null,
          title: {
            default: 'Doctor Who',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Rose',
            editorial: 'All of time and space awaits the Doctor',
            live: null,
          },
          synopsis: {
            small: 'Rose Tyler meets a mysterious stranger called the Doctor, and realises Earth is in danger.',
            editorial: "All of time and space awaits the Doctor. It's the trip of a lifetime",
            programmeSmall: 'Adventures in time and space with the ninth Time Lord and Rose',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07rnbvz.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08hrycq.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08hrydp.jpg',
            live: null,
            character: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p091q1hm.png',
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09ny3ym.jpg',
          },
          tleo: {
            id: 'b006q2x0',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '44 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Sci-Fi',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b006q2x0',
          sliceId: 'b007vvcq',
        },
      },
    ],
  },
  {
    id: 'event-01',
    type: 'event',
    title: {
      default: 'Euro Championships',
      small: null,
    },
    image: {
      default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ctv0my.jpg',
    },
    journey: {
      id: 'b0bdmc07',
      type: 'programme',
    },
    message: null,
    preferences: {
      episodeImage: ['live', 'default'],
      episodeTitle: ['live', 'editorial', 'default'],
      episodeSubtitle: ['live', 'editorial', 'default'],
      episodeSynopsis: ['live', 'editorial', 'small'],
    },
    entities: [
      {
        episode: {
          id: 'p0crhwb0',
          live: true,
          previewId: null,
          title: {
            default: 'European Championships',
            editorial: null,
            live: 'Day 8: BBC One coverage',
          },
          subtitle: {
            default: '2022: Day 8: BBC One coverage - Diving finals',
            editorial: null,
            live: null,
          },
          synopsis: {
            small: 'Live coverage of the diving action at the European Aquatics Championships in Rome.',
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ctv0my.jpg',
            promotional: null,
            promotionalWithLogo: null,
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b0bdmc07',
          },
          versions: [
            {
              kind: 'webcast',
              duration: {
                text: '780 mins',
              },
              availability: {
                remaining: null,
              },
            },
          ],
          labels: {
            category: 'Sport',
            editorial: null,
            time: 'Live',
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'p0crhwbj',
          live: true,
          previewId: null,
          title: {
            default: 'European Championships',
            editorial: null,
            live: 'Day 8: Red Button coverage',
          },
          subtitle: {
            default: '2022: Day 8: Red Button - Artistic Gymnastics all-around qualification rounds.',
            editorial: null,
            live: null,
          },
          synopsis: {
            small: "Live coverage from the men's all-around final qualification rounds from Munich.",
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cr40wk.jpg',
            promotional: null,
            promotionalWithLogo: null,
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b0bdmc07',
          },
          versions: [
            {
              kind: 'webcast',
              duration: {
                text: '795 mins',
              },
              availability: {
                remaining: null,
              },
            },
          ],
          labels: {
            category: 'Sport',
            editorial: null,
            time: 'Live',
          },
          promoted: true,
        },
        journey: null,
      },
    ],
  },
  {
    id: 'documentaries-category',
    type: null,
    title: {
      default: 'Documentaries',
      small: 'Documentaries',
    },
    image: null,
    journey: {
      id: 'documentaries',
      type: 'category',
    },
    message: null,
    preferences: {
      episodeImage: ['promotionalWithLogo', 'default'],
      episodeTitle: ['editorial', 'default'],
      episodeSubtitle: ['editorial', 'default'],
      episodeSynopsis: ['editorial', 'programmeSmall', 'small'],
    },
    entities: [
      {
        episode: {
          id: 'm001b0ym',
          live: false,
          previewId: null,
          title: {
            default: 'Ambulance',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 9: Episode 1',
            editorial: '1/6 The North East crew fights to bounce back',
            live: null,
          },
          synopsis: {
            small: 'New series joins ambulance staff caring for the 2.7 million people of the North East.',
            editorial: '1/6 The North East crew fights to bounce back after their toughest years',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cr2mmj.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqlnr0.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqlnsh.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b09393rd',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '57 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Documentary',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b09393rd',
          sliceId: 'm001b0yn',
        },
      },
      {
        episode: {
          id: 'm001b7jh',
          live: false,
          previewId: null,
          title: {
            default: 'Panorama',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'The Billion-Pound Savings Scandal',
            editorial: null,
            live: null,
          },
          synopsis: {
            small: 'The story of one of many failed investment schemes that have affected ordinary savers.',
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs6fc5.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs6fc5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs6fgz.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b006t14n',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Current Affairs',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'p09hbsct',
          live: false,
          previewId: null,
          title: {
            default: 'Scam Land: Money, Mayhem and Maseratis',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Free Cash',
            editorial: 'On the trail of a trader',
            live: null,
          },
          synopsis: {
            small: 'Mobeen Azhar investigates rumours of a scam involving a student who handed out cash.',
            editorial: 'On the trail of Instagram trader and alleged multi-million-pound scammer Gurvin Singh',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09j00q0.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09j3rcw.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqcdrm.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p09hbmxw',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '32 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Documentary',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p09hbmxw',
          sliceId: null,
        },
      },
      {
        episode: {
          id: 'p0c9klgw',
          live: false,
          previewId: null,
          title: {
            default: '1Xtra',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Homegrown: 20 Years Of 1Xtra',
            editorial: null,
            live: null,
          },
          synopsis: {
            small: 'A look at how Radio 1Xtra has helped turn black music culture in to popular culture.',
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ct7f2v.jpg',
            promotional: null,
            promotionalWithLogo: null,
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p07w3gfd',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm001b6s1',
          live: false,
          previewId: null,
          title: {
            default: 'Afghanistan: Getting Out',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Finding a way to end a war',
            live: null,
          },
          synopsis: {
            small: 'Political insiders tell the story of the Allies’ long attempts to end war in Afghanistan.',
            editorial: 'Finding a way to end a war. The long and troubled story of an often chaotic conflict',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0csrmsy.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ct49xh.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ct49z1.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm001b6s3',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '60 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Documentary',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'm001b6s3',
          sliceId: null,
        },
      },
      {
        episode: {
          id: 'm001b0yv',
          live: false,
          previewId: null,
          title: {
            default: 'Tom Daley: Illegal to Be Me',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'When being gay is a crime',
            live: null,
          },
          synopsis: {
            small: 'Tom Daley meets athletes facing persecution in homophobic countries in the Commonwealth.',
            editorial: 'When being gay is a crime. The champion diver explores what sport can do to help',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cr2yl5.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cr2yl5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cr2yn5.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm001b0yv',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Sport',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm001b34z',
          live: false,
          previewId: null,
          title: {
            default: "Russia's Torture Prisons",
            editorial: null,
            live: null,
          },
          subtitle: null,
          synopsis: {
            small: 'BBC Eye investigates the story behind Russia’s secret torture videos.',
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crb65h.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crb65h.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crb66s.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm001b34z',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '46 mins',
              },
              availability: {
                remaining: 'Available for 21 days',
              },
            },
          ],
          labels: {
            category: 'Documentary',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm001b0qc',
          live: false,
          previewId: null,
          title: {
            default: 'Inside the Factory',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 7: Buses',
            editorial: 'Gregg hops on board an icon',
            live: null,
          },
          synopsis: {
            small: 'Gregg Wallace gets exclusive access to a factory that builds red London buses.',
            editorial: 'Gregg hops on board an icon - the red London bus. Can he get behind the wheel?',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqjr1p.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqjr1p.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cr9nhs.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b07mddqk',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Food',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm0019mh9',
          live: false,
          previewId: null,
          title: {
            default: 'My Insta Scammer Friend',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'Do we really know our online friends?',
            live: null,
          },
          synopsis: {
            small: 'The story of infamous American influencer Caroline Calloway.',
            editorial: 'Do we really know our online friends? How some of one influencer’s fans felt duped.',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmss57.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmss57.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmsshy.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm0019mh9',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '44 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '44 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Documentary',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'b04dzswb',
          live: false,
          previewId: null,
          title: {
            default: 'The Kate Bush Story: Running Up That Hill',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'Her influences and her impact',
            live: null,
          },
          synopsis: {
            small: "Exploring Kate Bush's career and music through the testimony of collaborators and fans.",
            editorial: 'Her influences and her impact. Friends and fans celebrate a truly unique artist',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cnb64h.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cnb64h.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cnb8r4.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b04dzswb',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 11 days',
              },
            },
          ],
          labels: {
            category: 'Documentary',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'p0cs677h',
          live: false,
          previewId: null,
          title: {
            default: 'Frontline Frontmen',
            editorial: 'Frontline Frontmen',
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'A day in the life of the rock band who became army medics',
            live: null,
          },
          synopsis: {
            small: 'BBC News reports on the latest developments in the War in Ukraine.',
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs67gl.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs67gl.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs67jq.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p0cs677h',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '24 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'News',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'p0cpplbh',
          live: false,
          previewId: null,
          title: {
            default: 'Sky High Club: Scotland and Beyond',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: null,
            live: null,
          },
          synopsis: {
            small: 'Robbie is the youngest pilot to become a captain in the UK.',
            editorial: null,
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crtyd4.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs12bd.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cs19ys.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p0cppdkb',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Documentary',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0cppdkb',
          sliceId: null,
        },
      },
    ],
  },
  {
    id: 'drama-category',
    type: null,
    title: {
      default: 'Drama',
      small: 'Drama',
    },
    image: null,
    journey: {
      id: 'drama-and-soaps',
      type: 'category',
    },
    message: null,
    preferences: {
      episodeImage: ['promotionalWithLogo', 'default'],
      episodeTitle: ['editorial', 'default'],
      episodeSubtitle: ['editorial', 'default'],
      episodeSynopsis: ['editorial', 'programmeSmall', 'small'],
    },
    entities: [
      {
        episode: {
          id: 'p0cpqn13',
          live: false,
          previewId: null,
          title: {
            default: 'Red Rose',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: "Series 1: 1. It's Grim Up North",
            editorial: 'All episodes available now',
            live: null,
          },
          synopsis: {
            small: 'A group of teenagers from Bolton download a mysterious app called Red Rose.',
            editorial: "It's not just your battery that could die... The Red Rose app could change your life",
            programmeSmall: 'When one of a group of friends downloads the Red Rose app, their lives take a dark turn.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryynv.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crysy8.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryt1k.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryszp.jpg',
          },
          tleo: {
            id: 'p0cpqlr7',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '48 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '48 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '48 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0cpqlr7',
          sliceId: 'p0cpqm2t',
        },
      },
      {
        episode: {
          id: 'p0cpndzj',
          live: false,
          previewId: 'p0cspr09',
          title: {
            default: 'Marriage',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'All episodes available now',
            live: null,
          },
          synopsis: {
            small: 'Ian and Emma return from holiday and await the visit of their daughter’s boyfriend.',
            editorial: 'Sometimes funny, sometimes moving, always revealing. Sean Bean and Nicola Walker star',
            programmeSmall: 'Married couple Ian and Emma negotiate the insecurities around marriage.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crys5g.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryr2q.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryr6b.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cryr4l.jpg',
          },
          tleo: {
            id: 'p0cpnd15',
          },
          versions: [
            {
              kind: 'technical-replacement',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0cpnd15',
          sliceId: 'p0cpnd3r',
        },
      },
      {
        episode: {
          id: 'p0cp2sfk',
          live: false,
          previewId: null,
          title: {
            default: 'The Secrets She Keeps',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 2: Episode 1',
            editorial: 'All episodes available now',
            live: null,
          },
          synopsis: {
            small: 'Two years after the kidnap of Baby Ben, Agatha is sentenced. But how repentant is she?',
            editorial: 'Some secrets never stay buried. Years after an unspeakable crime, the nightmare continues',
            programmeSmall: 'Some secrets never stay buried.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cry5ym.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crtk0s.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crtld5.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crtkh9.jpg',
          },
          tleo: {
            id: 'p08grsgv',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '45 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '45 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p08grsgv',
          sliceId: 'p0cp2prj',
        },
      },
      {
        episode: {
          id: 'm001b10x',
          live: false,
          previewId: null,
          title: {
            default: 'Shetland',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 7: Episode 1',
            editorial: 'New episodes every Wednesday',
            live: null,
          },
          synopsis: {
            small: 'DI Perez investigates the mysterious disappearance of a vulnerable young man.',
            editorial: 'A vulnerable young man goes missing. What was he running from?',
            programmeSmall: 'The disappearance of a vulnerable young man draws Perez into the secret past of a family.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cql3fp.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqdzdy.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqdzl7.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqdzjh.jpg',
          },
          tleo: {
            id: 'p01s711r',
          },
          versions: [
            {
              kind: 'technical-replacement',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Crime Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p01s711r',
          sliceId: 'm001b110',
        },
      },
      {
        episode: {
          id: 'm0019f4p',
          live: false,
          previewId: 'p0cqbrh1',
          title: {
            default: 'The Control Room',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'One call can change everything',
            live: null,
          },
          synopsis: {
            small: 'Call handler Gabe receives a desperate call from a woman who unexpectedly recognises him.',
            editorial: 'One call can change everything. Twist-filled thriller starring Iain De Caestecker',
            programmeSmall: "An emergency call handler's life is turned upside down by a mysterious call.",
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0clmw6k.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cl6j8k.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cl6l3z.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cl6wgz.jpg',
          },
          tleo: {
            id: 'm0019f4r',
          },
          versions: [
            {
              kind: 'technical-replacement',
              duration: {
                text: '57 mins',
              },
              availability: {
                remaining: 'Available for 10 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '57 mins',
              },
              availability: {
                remaining: 'Available for 10 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'm0019f4r',
          sliceId: 'm0019f4q',
        },
      },
      {
        episode: {
          id: 'p0cgyzs2',
          live: false,
          previewId: 'p0cqbr93',
          title: {
            default: 'Snowfall',
            editorial: 'Snowfall: Series 5',
            live: null,
          },
          subtitle: {
            default: 'Series 5: 1. Comets',
            editorial: 'All episodes available now',
            live: null,
          },
          synopsis: {
            small: "It's the summer of 1986, and the Saint family has levelled up.",
            editorial: "LA's streets have never been so dangerous, but nothing tears a family apart like money",
            programmeSmall: 'Hard-hitting drama about the beginnings of the crack epidemic in 1980s Los Angeles.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ckrl67.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjyjx0.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjyk1g.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b0991bqd',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '45 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '46 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Crime Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b0991bqd',
          sliceId: 'p0cgyzh7',
        },
      },
      {
        episode: {
          id: 'p0cgx8pg',
          live: false,
          previewId: null,
          title: {
            default: 'The Newsreader',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Three Two One',
            editorial: '1986: The big news is behind the camera',
            live: null,
          },
          synopsis: {
            small: 'In 1986, reporter Dale and newsreader Helen cover the Challenger Space Shuttle launch.',
            editorial: '1986: The big news is behind the camera. A star anchor and a rookie reporter join forces',
            programmeSmall: 'Star newsreader Helen and rookie reporter Dale join forces to survive a 1980s newsroom.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmr1jg.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmq7r8.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmqs6v.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmqfys.jpg',
          },
          tleo: {
            id: 'p0cgx4k0',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '55 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '55 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0cgx4k0',
          sliceId: 'p0cgx57w',
        },
      },
      {
        episode: {
          id: 'p0c70t0r',
          live: false,
          previewId: null,
          title: {
            default: 'Everything I Know About Love',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Destiny',
            editorial: 'One story of great love',
            live: null,
          },
          synopsis: {
            small: 'Maggie, Birdy, Nell and Amara move into their first London house-share.',
            editorial: 'Four friends. One story of great love. From the heart of Dolly Alderton',
            programmeSmall: "A messy, raucous stumble into bad dates and heartaches, based on Dolly Alderton's memoir.",
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cbc2l4.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c9gbw5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c9gc4f.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c9gbzj.jpg',
          },
          tleo: {
            id: 'p0c70rlw',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '44 mins',
              },
              availability: {
                remaining: 'Available for 9 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '44 mins',
              },
              availability: {
                remaining: 'Available for 9 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0c70rlw',
          sliceId: 'p0c70s9m',
        },
      },
      {
        episode: {
          id: 'p0c725bc',
          live: false,
          previewId: 'p0cm4cqf',
          title: {
            default: 'Sherwood',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Rivalry and suspicion reignites when a killer strikes',
            live: null,
          },
          synopsis: {
            small: 'A tragic murder threatens to inflame historic tensions in a small ex-mining community.',
            editorial: 'Rivalry and suspicion reignites when a killer strikes. Intense drama with Joanne Froggatt',
            programmeSmall: 'Two shocking and unexpected murders shatter an already fractured community.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ccjsf7.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cccww5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cccx7j.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cccx4w.jpg',
          },
          tleo: {
            id: 'p0c724lz',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Crime Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0c724lz',
          sliceId: 'p0c724t1',
        },
      },
      {
        episode: {
          id: 'p0cffgmg',
          live: false,
          previewId: null,
          title: {
            default: 'Trom',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Goodbye and Hello',
            editorial: 'How far will he go for the truth?',
            live: null,
          },
          synopsis: {
            small: 'Journalist Hannis Martinsson returns home to the Faroes after receiving a call for help.',
            editorial: 'How far will he go for the truth? Nordic noir from the rugged, remote Faroe Islands',
            programmeSmall: 'Nordic noir from the rugged, remote Faroe Islands.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjtdxz.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjsr9w.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjsrp3.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cjsrjs.jpg',
          },
          tleo: {
            id: 'p0cffcx0',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '43 mins',
              },
              availability: {
                remaining: 'Available for 10 months',
              },
            },
          ],
          labels: {
            category: 'Crime Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0cffcx0',
          sliceId: 'p0cffdj9',
        },
      },
      {
        episode: {
          id: 'm00085sv',
          live: false,
          previewId: null,
          title: {
            default: 'The Capture',
            editorial: 'The Capture: Series 1',
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. What Happens in Helmand',
            editorial: 'Can you really believe what you see?',
            live: null,
          },
          synopsis: {
            small: 'Soldier Shaun Emery is accused of a crime he denies.',
            editorial: 'Can you really believe what you see? The truth can sometimes be a matter of perspective',
            programmeSmall: 'A tenacious young detective begins to uncover a multi-layered conspiracy.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07mdjf6.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07m1kph.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07m1krz.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0csdz2w.jpg',
          },
          tleo: {
            id: 'm00085sx',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 3 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for 3 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'm00085sx',
          sliceId: 'm00085sw',
        },
      },
      {
        episode: {
          id: 'p0b6k6kx',
          live: false,
          previewId: null,
          title: {
            default: 'This Is Going To Hurt',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Painfully funny, heart-breakingly honest',
            live: null,
          },
          synopsis: {
            small: 'Junior doctor Adam juggles his personal life with his job on a hectic labour ward.',
            editorial: 'Painfully funny, heart-breakingly honest – welcome to the weird world of the NHS',
            programmeSmall: "Ben Whishaw stars in Adam Kay's raw, ridiculous rollercoaster diary of a doctor’s life.",
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0blgd2g.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0blnd91.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0blrny8.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0blrvdp.jpg',
          },
          tleo: {
            id: 'p0b6k5gx',
          },
          versions: [
            {
              kind: 'technical-replacement',
              duration: {
                text: '46 mins',
              },
              availability: {
                remaining: 'Available for 5 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '46 mins',
              },
              availability: {
                remaining: 'Available for 5 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0b6k5gx',
          sliceId: 'p0b6k5qq',
        },
      },
    ],
  },
  {
    id: 'comedy-category',
    type: null,
    title: {
      default: 'Comedy',
      small: 'Comedy',
    },
    image: null,
    journey: {
      id: 'comedy',
      type: 'category',
    },
    message: null,
    preferences: {
      episodeImage: ['promotionalWithLogo', 'default'],
      episodeTitle: ['editorial', 'default'],
      episodeSubtitle: ['editorial', 'default'],
      episodeSynopsis: ['editorial', 'programmeSmall', 'small'],
    },
    entities: [
      {
        episode: {
          id: 'p0cf7yt3',
          live: false,
          previewId: null,
          title: {
            default: 'Better Things',
            editorial: 'Better Things: Series 1-5',
            live: null,
          },
          subtitle: {
            default: "Series 5: 1. F*** Anatoly's Mom",
            editorial: 'All episodes available now',
            live: null,
          },
          synopsis: {
            small: 'Sam helps Max find an apartment and visits a genealogist with her brother Marion.',
            editorial: 'The messiness of midlife. Sam juggles her career, children and growing old disgracefully',
            programmeSmall: 'Comedy drama series following Sam Fox as she tries to raise her three daughters.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0clnq76.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cllgy8.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cllh0q.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cllh44.jpg',
          },
          tleo: {
            id: 'b0by92vf',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '33 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Comedy Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b0by92vf',
          sliceId: 'p0cf7y3k',
        },
      },
      {
        episode: {
          id: 'p0c70xw3',
          live: false,
          previewId: 'p0cm4szg',
          title: {
            default: 'The Outlaws',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 2: Episode 1',
            editorial: 'Still serving time',
            live: null,
          },
          synopsis: {
            small: 'Having outsmarted the police, the outlaws now face a far more dangerous enemy.',
            editorial: 'Still serving time - but the underworld isn’t done with the outlaws just yet',
            programmeSmall: 'The outlaws still have time to serve on their sentences.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cbbvx9.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c9yscx.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c9yt1k.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c9yspz.jpg',
          },
          tleo: {
            id: 'm0010zy5',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for 9 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for 9 months',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'm0010zy5',
          sliceId: 'p0c70x6l',
        },
      },
      {
        episode: {
          id: 'p03k30zr',
          live: false,
          previewId: null,
          title: {
            default: 'Two Doors Down',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Good neighbours?',
            live: null,
          },
          synopsis: {
            small: 'Leaving the freezer door open leads to a huge puddle of chilly recrimination.',
            editorial: 'The residents of Latimer Crescent navigate the trials and tribulations of suburban life.',
            programmeSmall: 'Sitcom about three families who live next door to each other on a suburban Glasgow street',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07j8512.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07j85tz.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07j85y6.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09522xx.jpg',
          },
          tleo: {
            id: 'b072wv8z',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b072wv8z',
          sliceId: 'p03k2w81',
        },
      },
      {
        episode: {
          id: 'p0c713wp',
          live: false,
          previewId: 'p0cm4qjq',
          title: {
            default: 'Avoidance',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Can a slightly useless single dad find a backbone?',
            live: null,
          },
          synopsis: {
            small: 'Jonathan and Claire are splitting up, but he doesn’t want to tell their son Spencer.',
            editorial: 'Can a slightly useless single dad find a backbone? Comedy with Romesh Ranganathan',
            programmeSmall: 'Jonathan is forced out of his comfort zone when he’s left a single dad.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cbc404.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cb4xgc.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cb4xlf.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cb4xk0.jpg',
          },
          tleo: {
            id: 'p0c7135m',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for 9 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for 9 months',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0c7135m',
          sliceId: 'p0c71379',
        },
      },
      {
        episode: {
          id: 'b07bpbqr',
          live: false,
          previewId: null,
          title: {
            default: 'Mum',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. January',
            editorial: 'The award-winning tale of a fragile, funny family',
            live: null,
          },
          synopsis: {
            small: "Cathy prepares herself for a day of great emotion on the morning of her husband's funeral.",
            editorial: 'The award-winning tale of a fragile, funny family. Cathy faces up to the future',
            programmeSmall:
              'Sitcom following a year in the life of Cathy as she moves on from the death of her husband',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07jzx5c.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07jj0cx.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07jj0z3.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmymrh.jpg',
          },
          tleo: {
            id: 'b09sykkn',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '26 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b09sykkn',
          sliceId: 'b07bpbpx',
        },
      },
      {
        episode: {
          id: 'p0chwypm',
          live: false,
          previewId: null,
          title: {
            default: 'Asian Network Comedy',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Birmingham 2022',
            editorial: 'The freshest and funniest talent in Birmingham',
            live: null,
          },
          synopsis: {
            small: 'Asian Network comedy hits Birmingham for all the laughs.',
            editorial: 'The freshest and funniest talent in Birmingham, including Preet Singh and Noreen Khan',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cplc81.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cplc81.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cpw0hd.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm00007qd',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '55 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'b00sz1t0',
          live: false,
          previewId: null,
          title: {
            default: 'Rev.',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Handle with prayer',
            live: null,
          },
          synopsis: {
            small: 'Rev Adam Smallbone is surprised to find that his congregation has quadrupled overnight.',
            editorial: 'Handle with prayer. The tangled life of a sometimes less than virtuous vicar',
            programmeSmall: 'The Reverend Adam Smallbone tries to adjust to life as a modern city vicar',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cnyhs7.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cn9fx5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cn9g1w.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cn9fyg.jpg',
          },
          tleo: {
            id: 'b0178fhq',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '29 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b0178fhq',
          sliceId: 'b00sz26s',
        },
      },
      {
        episode: {
          id: 'b007lc51',
          live: false,
          previewId: null,
          title: {
            default: 'Gavin & Stacey',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'The whole story',
            live: null,
          },
          synopsis: {
            small: 'After being phone buddies for months, Gavin and Stacey finally arrange a rendezvous.',
            editorial: 'The absolute highs and awkward lows of a long-distance love affair. Plus...Smithy.',
            programmeSmall: 'Comedy about Essex boy Gavin and Welsh girl Stacey who fall in love',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p089sc8j.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p01l3l39.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07k74kl.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09ny484.jpg',
          },
          tleo: {
            id: 'b007nf70',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b007nf70',
          sliceId: 'b007lb93',
        },
      },
      {
        episode: {
          id: 'm000d4w2',
          live: false,
          previewId: null,
          title: {
            default: 'The Tuckers',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 2. Up and Down',
            editorial: 'They’re low on cash – but high on spirit',
            live: null,
          },
          synopsis: {
            small: 'Someone’s nicked Glyn’s wing mirrors and he wants revenge. And Peggy gets her leg over.',
            editorial: 'The Tuckers are determined to survive – through any means necessary.',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07yj9g0.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07zc6g9.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07zc6km.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p095dhgl.jpg',
          },
          tleo: {
            id: 'm000d4w4',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'original',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for 5 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '28 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'p0c991f9',
          live: false,
          previewId: null,
          title: {
            default: 'Ellie & Natasia',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Surreal sketches, stellar stars and silly songs',
            live: null,
          },
          synopsis: {
            small: 'Ellie White and Natasia Demetriou sketch show with Jamie Demetriou and David Morrissey.',
            editorial: 'Surreal sketches, stellar stars and silly songs with Ellie White and Natasia Demetriou',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cdtwp4.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cfkp7h.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cfkp8d.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cfkp7w.jpg',
          },
          tleo: {
            id: 'p0c99012',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '15 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0c99012',
          sliceId: null,
        },
      },
      {
        episode: {
          id: 'm00049t7',
          live: false,
          previewId: null,
          title: {
            default: 'Ghosts',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Who Do You Think You Are?',
            editorial: 'A house-share like you’ve never seen...',
            live: null,
          },
          synopsis: {
            small: 'Sitcom about a couple who inherit a haunted country house.',
            editorial: 'A house-share like you’ve never seen... Comedy from the Horrible Histories team',
            programmeSmall: 'Sitcom about a couple who inherit a haunted country house.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07jzt8x.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p075yrr6.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07jztdx.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09ny4ms.jpg',
          },
          tleo: {
            id: 'm00049t9',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '29 mins',
              },
              availability: {
                remaining: 'Available for 5 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '29 mins',
              },
              availability: {
                remaining: 'Available for 5 months',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'm00049t9',
          sliceId: 'm00049t8',
        },
      },
      {
        episode: {
          id: 'b00z02dj',
          live: false,
          previewId: null,
          title: {
            default: "Mrs Brown's Boys",
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. The Mammy',
            editorial: "Mammy's back!",
            live: null,
          },
          synopsis: {
            small: 'Agnes attempts to mend the rift between her son and his long-term girlfriend.',
            editorial: 'Chaos at the Browns with Agnes and her awful offspring.',
            programmeSmall: "Tensions are running high in the Brown household as Dermot and Maria's wedding looms",
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07wr27h.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p01l6dhm.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07wzywy.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p093q25h.jpg',
          },
          tleo: {
            id: 'b00x98tn',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '29 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Comedy',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b00x98tn',
          sliceId: 'b00x17n9',
        },
      },
    ],
  },
  {
    id: 'entertainment-category',
    type: null,
    title: {
      default: 'Entertainment',
      small: 'Entertainment',
    },
    image: null,
    journey: {
      id: 'entertainment',
      type: 'category',
    },
    message: null,
    preferences: {
      episodeImage: ['promotionalWithLogo', 'default'],
      episodeTitle: ['editorial', 'default'],
      episodeSubtitle: ['editorial', 'default'],
      episodeSynopsis: ['editorial', 'programmeSmall', 'small'],
    },
    entities: [
      {
        episode: {
          id: 'm001b1k2',
          live: false,
          previewId: 'p0cspqkt',
          title: {
            default: 'The Rap Game UK',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 4: Episode 1',
            editorial: 'New episodes every Thursday',
            live: null,
          },
          synopsis: {
            small: 'A twist is announced as the search for a new rap star begins. Special guest BackRoad Gee.',
            editorial: 'The hunt for the next rap superstar begins – and it’s going to be tougher than ever',
            programmeSmall: 'DJ Target, Krept and Konan hunt for the next big MC to take over the scene.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0crs5yb.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqddx5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqcgdb.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p07jwq62',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '53 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p07jwq62',
          sliceId: 'm001b1k3',
        },
      },
      {
        episode: {
          id: 'm001b10q',
          live: false,
          previewId: null,
          title: {
            default: 'Celebrity MasterChef',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 17: Episode 1',
            editorial: 'Jello from the other side',
            live: null,
          },
          synopsis: {
            small: 'Danny Jones, Faye Winter, Kae Kurd, Nancy Dell’Olio and Paul Chuckle face the first heat.',
            editorial: 'Jello from the other side. Five celebrities swap showbiz for a stint in the kitchen',
            programmeSmall: "Chef John Torode and writer Gregg Wallace search for the country's top celebrity chef.",
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cql7gx.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqmhmq.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqmd2n.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b007mtf0',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Food',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b007mtf0',
          sliceId: 'm001b0yk',
        },
      },
      {
        episode: {
          id: 'm0019tjy',
          live: false,
          previewId: 'p0cqbr75',
          title: {
            default: "RuPaul's Drag Race Down Under",
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 2: Episode 1',
            editorial: 'New episodes every week',
            live: null,
          },
          synopsis: {
            small: 'The queens are tasked with creating garments out of recyclable and natural materials.',
            editorial: "G’day Shantay! Mama Ru's back Down Under as 10 fierce queens fight it out for the crown",
            programmeSmall: 'Drag queen contestants compete to see who will be the Down Under Drag Queen Superstar.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cqcj8s.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cpyy1p.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cpyx61.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p09f989z',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p09f989z',
          sliceId: 'm0019tjz',
        },
      },
      {
        episode: {
          id: 'p0c722vb',
          live: false,
          previewId: null,
          title: {
            default: 'Hungry for It',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'The next-gen cookery challenge',
            live: null,
          },
          synopsis: {
            small: "The cooks 'level up' party food and serve the public for the very first time.",
            editorial: 'The next-gen cookery challenge. Stacey Dooley, Big Zuu and Chef Kay Kay test rookie cooks',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c9hys4.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c9ggb4.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c9ggfy.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p0c7228n',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Food',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm00196h7',
          live: false,
          previewId: null,
          title: {
            default: "Canada's Drag Race",
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 3: Episode 1',
            editorial: 'Canada’s finest queens head for the werkroom',
            live: null,
          },
          synopsis: {
            small: 'The queens are challenged to turn a streetwear look into catwalk couture.',
            editorial: 'Canada’s finest queens head for the werkroom. Who will make a fabulous first impression?',
            programmeSmall: 'Canadian drag artists compete for the Drag Race crown.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0clmh10.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ckfh3w.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ckfh88.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p08h1dp1',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p08h1dp1',
          sliceId: 'm00196h8',
        },
      },
      {
        episode: {
          id: 'm00177xl',
          live: false,
          previewId: null,
          title: {
            default: 'The Repair Shop',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 10: Episode 1',
            editorial: 'A one-of-a-kind clock gets ticking again',
            live: null,
          },
          synopsis: {
            small: 'The team restores a one-of-a-kind clock, a pedal car, a ceramic canine and a lucky mascot.',
            editorial: 'A one-of-a-kind clock gets ticking again and an iconic pedal car gets a full MOT',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c5138j.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c4lrz4.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c6gs3l.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b08l581p',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Lifestyle',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'b008hrn3',
          live: false,
          previewId: null,
          title: {
            default: 'QI',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series A: 1. Adam',
            editorial: 'A comic compendium from A to (nearly) Z',
            live: null,
          },
          synopsis: {
            small: 'Alan Davies, John Sessions, Hugh Laurie and Danny Baker discuss anteaters and artichokes.',
            editorial: 'A comic compendium from A to (nearly) Z with Stephen, Sandi and umpteen comedy chums',
            programmeSmall: "First series of the quiz show where points are awarded for 'quite interesting' answers.",
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cb4xl3.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c3jz24.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c3jz3f.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b006ml0g',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '29 mins',
              },
              availability: {
                remaining: 'Available for 9 months',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b006ml0g',
          sliceId: 'b008hrmk',
        },
      },
      {
        episode: {
          id: 'p0bv84nd',
          live: false,
          previewId: null,
          title: {
            default: "Idris Elba's Fight School",
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Discipline',
            editorial: 'Can boxing transform lives?',
            live: null,
          },
          synopsis: {
            small: 'Idris and the coaches meet their Fight School intake and conduct a rigorous fitness test.',
            editorial: 'Sometimes the greatest fight is with yourself. Can boxing help transform lives?',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c19805.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c0rv15.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c3vz73.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'p0bv813d',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 7 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 7 months',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 9 months',
              },
            },
          ],
          labels: {
            category: 'Documentary',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0bv813d',
          sliceId: null,
        },
      },
      {
        episode: {
          id: 'm00183kf',
          live: false,
          previewId: null,
          title: {
            default: 'Top Gear',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 32: Episode 1',
            editorial: 'Time to hit the road',
            live: null,
          },
          synopsis: {
            small: 'Freddie, Chris and Paddy take an RV road trip across Florida’s swampy Everglades.',
            editorial: 'Time to hit the road. The lads get fast and furious on the slopes, swamps and scrapyard',
            programmeSmall: 'Motoring magazine, including road tests, news and features.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cbbw55.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cb5lm5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cb5lrt.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b006mj59',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b006mj59',
          sliceId: 'm00183kg',
        },
      },
      {
        episode: {
          id: 'm0019f13',
          live: false,
          previewId: null,
          title: {
            default: 'The Hit List',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 5: Episode 1',
            editorial: 'Three new couples pick the hits',
            live: null,
          },
          synopsis: {
            small: 'Marvin and Rochelle are joined by teams from Belfast, Essex and the West Midlands.',
            editorial: 'Three new couples pick the hits – but which will make it to the final chart rundown?',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0clm21m.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0clfwb7.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0clfw0y.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm0005j3y',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '44 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm0016t5q',
          live: false,
          previewId: null,
          title: {
            default: 'The Great British Sewing Bee',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 8: Episode 1',
            editorial: 'With new host Sara Pascoe',
            live: null,
          },
          synopsis: {
            small: 'Twelve sewers create a capsule wardrobe in their first bid to impress Patrick and Esme.',
            editorial: 'With new host Sara Pascoe and twelve sewers aiming to be the most sensational seamster',
            programmeSmall: 'Sara Pascoe hosts as 12 talented home sewers create beautiful garments.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c264k6.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c2hqs6.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0c2hqtr.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b03myqj2',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for 10 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for 10 months',
              },
            },
            {
              kind: 'signed',
              duration: {
                text: '58 mins',
              },
              availability: {
                remaining: 'Available for 11 months',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'b03myqj2',
          sliceId: 'm0016t5s',
        },
      },
      {
        episode: {
          id: 'm00183th',
          live: false,
          previewId: null,
          title: {
            default: 'This Is MY House',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 2: Episode 1',
            editorial: 'All episodes available now',
            live: null,
          },
          synopsis: {
            small: 'Judi Love, Richard Madeley, Harry Hill and Harriet Kemsley try to guess the homeowner.',
            editorial: 'Fake yourself at home. Does Joey, Joey, Joey or Joey own the house in Conwy?',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cbc4fp.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ccx7c8.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0ccx7jk.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm000tjfz',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '29 mins',
              },
              availability: {
                remaining: 'Available for 10 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '29 mins',
              },
              availability: {
                remaining: 'Available for 10 months',
              },
            },
          ],
          labels: {
            category: 'Entertainment',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
    ],
  },
  {
    id: 'temporary-editorial',
    type: 'default',
    title: {
      default: 'Secrets & Scandal',
      small: '',
    },
    image: null,
    journey: {
      id: 'p09yn7sq',
      type: 'group',
    },
    message: null,
    preferences: {
      episodeImage: ['live', 'promotionalWithLogo', 'default'],
      episodeTitle: ['live', 'editorial', 'default'],
      episodeSubtitle: ['live', 'editorial', 'default'],
      episodeSynopsis: ['live', 'editorial', 'programmeSmall', 'small'],
    },
    entities: [
      {
        episode: {
          id: 'p08grsz4',
          live: false,
          previewId: null,
          title: {
            default: 'The Secrets She Keeps',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'What if the life you wanted belonged to someone else?',
            live: null,
          },
          synopsis: {
            small: 'Meghan is happily pregnant with her third child, but husband Jack is less content.',
            editorial: "Influencer Meghan and struggling Agatha's worlds are about to collide in a shocking act.",
            programmeSmall: 'Two women hide secrets that could destroy everything they hold dear.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08jmxpr.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08jmxpr.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08jmygb.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p093sbk1.jpg',
          },
          tleo: {
            id: 'p08grsgv',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '43 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '43 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p08grsgv',
          sliceId: 'p08grsn7',
        },
      },
      {
        episode: {
          id: 'p09r5sj0',
          live: false,
          previewId: null,
          title: {
            default: 'Gossip Girl (2021)',
            editorial: 'Gossip Girl',
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Just Another Girl on the MTA',
            editorial: 'Relationships, scandals, lies',
            live: null,
          },
          synopsis: {
            small: "A newcomer arrives at Constance St Jude's.",
            editorial: "Relationships, scandals, lies - Gossip Girl's back, and no one's secrets are safe XOXO",
            programmeSmall: 'New York City has changed since we last dished on the Met steps.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09sjt7h.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09sndh5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09sndbt.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09sndb0.jpg',
          },
          tleo: {
            id: 'p09r5p4v',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p09r5p4v',
          sliceId: 'p09r5pd9',
        },
      },
      {
        episode: {
          id: 'p08vqpt8',
          live: false,
          previewId: null,
          title: {
            default: 'Pretty Little Liars',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Pilot',
            editorial: 'Pretty people, ugly secrets',
            live: null,
          },
          synopsis: {
            small: 'A year after their friend disappears, four girls receive mysterious messages from "A"',
            editorial: 'Pretty people, ugly secrets. How far will they go to keep them safe?',
            programmeSmall: 'A year after their friend disappears, four girls receive mysterious messages from "A"',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08zhj31.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0915qdv.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0915qgb.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09ny6t3.jpg',
          },
          tleo: {
            id: 'p08v4737',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '43 mins',
              },
              availability: {
                remaining: 'Available for 4 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p08v4737',
          sliceId: 'p08v47h4',
        },
      },
      {
        episode: {
          id: 'p0b69pn6',
          live: false,
          previewId: 'p0cm48jq',
          title: {
            default: 'Chloe',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Live the lie to find the truth',
            live: null,
          },
          synopsis: {
            small: 'A sudden tragedy pulls Becky into Chloe’s world in a way she never imagined.',
            editorial: 'Live the lie to find the truth. Becky idolises influencer Chloe – before tragedy strikes',
            programmeSmall: 'When Chloe dies suddenly, Becky assumes a new identity to find out why.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0blgfl1.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0blccl2.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0blccq8.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bln7cx.jpg',
          },
          tleo: {
            id: 'p0b69pc5',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0b69pc5',
          sliceId: 'p0b69pj4',
        },
      },
      {
        episode: {
          id: 'p07ptcxc',
          live: false,
          previewId: null,
          title: {
            default: 'Gold Digger',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Her Boy',
            editorial: 'The love of her life... or the ultimate betrayal?',
            live: null,
          },
          synopsis: {
            small: 'When Julia meets a younger man her adult children wonder if his intentions are noble.',
            editorial: 'Julia has a second chance at love, but is her damaged family right to be suspicious?',
            programmeSmall: 'A wealthy woman falls in love with a younger man. Her children worry he’s a gold digger.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07t1fg5.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07tcv1z.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07tcvkr.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b4hp7w.jpg',
          },
          tleo: {
            id: 'p07pshh6',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '55 mins',
              },
              availability: {
                remaining: 'Available for 3 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '55 mins',
              },
              availability: {
                remaining: 'Available for 3 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p07pshh6',
          sliceId: 'p07ptcs1',
        },
      },
      {
        episode: {
          id: 'p08xc504',
          live: false,
          previewId: null,
          title: {
            default: 'A Teacher',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'An abuse of power',
            live: null,
          },
          synopsis: {
            small: 'English teacher Claire Wilson arrives for her first term at Westerbrook High.',
            editorial: 'An abuse of power that will scar their lives forever. Provocative drama with Kate Mara.',
            programmeSmall: 'Drama series telling the story of an affair between a high-school teacher and a student.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09125tk.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09147gt.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09126nn.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09ny3j8.jpg',
          },
          tleo: {
            id: 'p08xc4lf',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '24 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '24 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p08xc4lf',
          sliceId: 'p08xc4t8',
        },
      },
      {
        episode: {
          id: 'p0b8zxn6',
          live: false,
          previewId: null,
          title: {
            default: 'Rules of the Game',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Two deaths. One toxic workplace',
            live: null,
          },
          synopsis: {
            small: 'A death at work leads boss Sam to unpick recent events, starting with the arrival of Maya.',
            editorial: "Two deaths. One toxic workplace. But it's not personal, it's just business - right?",
            programmeSmall: 'Four-part thriller about sexual politics in the modern workplace.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bf8m84.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bk0kmk.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bcb4gm.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bcb48p.jpg',
          },
          tleo: {
            id: 'p0b8zwdm',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '57 mins',
              },
              availability: {
                remaining: 'Available for 4 months',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for 4 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0b8zwdm',
          sliceId: 'p0b8zwrg',
        },
      },
      {
        episode: {
          id: 'm0014j3s',
          live: false,
          previewId: null,
          title: {
            default: 'Rebel Cheer Squad - A Get Even Series',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Get Going',
            editorial: 'Taking matters into their own hands.',
            live: null,
          },
          synopsis: {
            small: 'A shocking accident forces Clara, Grace and Rumi to take matters into their own hands.',
            editorial: null,
            programmeSmall: 'The old DGM might have left Bannerman School, but their spirit remains.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bps3bg.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bnlgp1.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bnlgzx.jpg',
            live: null,
            character: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bp73zy.png',
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bnljhk.jpg',
          },
          tleo: {
            id: 'm0014j3v',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '26 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'm0014j3v',
          sliceId: 'm0014j3t',
        },
      },
      {
        episode: {
          id: 'p065smy4',
          live: false,
          previewId: null,
          title: {
            default: 'A Very English Scandal',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Power, love, lies, and an incredible true story',
            live: null,
          },
          synopsis: {
            small: "Jeremy Thorpe's attempt to keep his affair with Norman Scott secret unravels.",
            editorial: 'Hugh Grant is Jeremy Thorpe, one of British politics’ rising stars... with a dark secret.',
            programmeSmall: 'Fact-based miniseries about the Jeremy Thorpe scandal that engulfed British politics.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07klnv3.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p066rvvw.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p07k5y8m.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p094c8hp.jpg',
          },
          tleo: {
            id: 'p065sk93',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available until Sat 6am',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '56 mins',
              },
              availability: {
                remaining: 'Available until Sat 6am',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p065sk93',
          sliceId: 'm0001jfw',
        },
      },
      {
        episode: {
          id: 'p0b569c3',
          live: false,
          previewId: null,
          title: {
            default: 'A Very British Scandal',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: Episode 1',
            editorial: 'Sex, secrets, suspicion',
            live: null,
          },
          synopsis: {
            small: 'Margaret Sweeny meets the dashing (and married) Ian Campbell, future Duke of Argyll.',
            editorial: 'Sex, secrets, suspicion. Claire Foy in the true story of a Duchess shamed in high society',
            programmeSmall: 'The story behind the divorce of the Duke and Duchess of Argyll in 1963.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b8bw5n.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b8g8p3.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b8g8c5.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bf7lhh.jpg',
          },
          tleo: {
            id: 'p0b568sr',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '59 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Period Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0b568sr',
          sliceId: 'p0b5690b',
        },
      },
      {
        episode: {
          id: 'p0b5vzjk',
          live: false,
          previewId: null,
          title: {
            default: 'Pretty Little Liars: Ravenswood',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Pilot',
            editorial: 'A curse will fall',
            live: null,
          },
          synopsis: {
            small: 'Five strangers suddenly find themselves connected by a fatal curse.',
            editorial: 'A curse will fall. Five teens dig up the past - but will they be buried by their fate?',
            programmeSmall: 'Five strangers whose lives become intertwined by a deadly curse.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b61j27.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bdw4zy.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bbcfcm.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bbcg7z.jpg',
          },
          tleo: {
            id: 'p0b5vt7f',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '41 mins',
              },
              availability: {
                remaining: 'Available for 4 months',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'p0b5vt7f',
          sliceId: 'p0b5vytw',
        },
      },
      {
        episode: {
          id: 'm000pb85',
          live: false,
          previewId: null,
          title: {
            default: 'Industry',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: 'Series 1: 1. Induction',
            editorial: 'Prove your worth',
            live: null,
          },
          synopsis: {
            small: 'Five grads join a pre-eminent financial institution, but can they cope with the pressure?',
            editorial: 'Prove your worth. Colleagues, turned lovers, turned enemies...',
            programmeSmall: 'Five graduates want a job at a bank but the lines between colleague and enemy blur.',
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08xc749.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08xc36q.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08xh82x.jpg',
            live: null,
            character: null,
            portrait: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p093blmj.jpg',
          },
          tleo: {
            id: 'm000pb89',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '48 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '48 mins',
              },
              availability: {
                remaining: 'Available for over a year',
              },
            },
          ],
          labels: {
            category: 'Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: {
          id: 'm000pb89',
          sliceId: 'm000pb87',
        },
      },
    ],
  },
  {
    id: 'event-1-group',
    type: 'default',
    title: {
      default: 'Films',
      small: '',
    },
    image: null,
    journey: {
      id: 'p02q33vd',
      type: 'group',
    },
    message: null,
    preferences: {
      episodeImage: ['live', 'promotionalWithLogo', 'default'],
      episodeTitle: ['live', 'editorial', 'default'],
      episodeSubtitle: ['live', 'editorial', 'default'],
      episodeSynopsis: ['live', 'editorial', 'programmeSmall', 'small'],
    },
    entities: [
      {
        episode: {
          id: 'm0012352',
          live: false,
          previewId: null,
          title: {
            default: 'Greta',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'Everyone needs a friend',
            live: null,
          },
          synopsis: {
            small: 'A young woman befriends a lonely widow who becomes disturbingly obsessed with her. ',
            editorial: 'Everyone needs a friend. A woman befriends a widow who is hiding a dark and deadly agenda',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b4gzq2.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b4gzq2.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b4gzqs.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm0012352',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '92 mins',
              },
              availability: {
                remaining: 'Available for 25 days',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '92 mins',
              },
              availability: {
                remaining: 'Available for 25 days',
              },
            },
          ],
          labels: {
            category: 'Film - Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm0019n5y',
          live: false,
          previewId: null,
          title: {
            default: 'The Mule',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'Nobody runs forever',
            live: null,
          },
          synopsis: {
            small: 'A 90-year-old horticulturist (Clint Eastwood) turns drug mule for a Mexican cartel.',
            editorial: "Nobody runs forever. Clint Eastwood stars in a true story of America's oldest drug mule",
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmtjh8.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmtjh8.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmtpnd.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm0019n5y',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '108 mins',
              },
              availability: {
                remaining: 'Available until Wed 12:20am',
              },
            },
          ],
          labels: {
            category: 'Film - Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'b00zmc8r',
          live: false,
          previewId: null,
          title: {
            default: 'Zodiac',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: "There's more than one way to lose your life to a killer",
            live: null,
          },
          synopsis: {
            small: 'Following the hunt for a serial killer in San Francisco in the 1960s and 1970s.',
            editorial: "There's more than one way to lose your life to a killer. True crime from David Fincher",
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08qjxr2.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08qjxr2.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08qjxs7.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b00zmc8r',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '150 mins',
              },
              availability: {
                remaining: 'Available for 13 days',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '150 mins',
              },
              availability: {
                remaining: 'Available for 13 days',
              },
            },
          ],
          labels: {
            category: 'Film - Thriller',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm0011f71',
          live: false,
          previewId: null,
          title: {
            default: 'The Eiger Sanction',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'A former assassin is lured out of retirement',
            live: null,
          },
          synopsis: {
            small: 'Ex-hitman Jonathan Hemlock accepts one last government-sanctioned mission.',
            editorial: 'A former assassin is lured out of retirement. Classic thriller starring Clint Eastwood',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b1tq0b.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b1tq0b.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0b1tq5w.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm0011f71',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '123 mins',
              },
              availability: {
                remaining: 'Available for 19 days',
              },
            },
          ],
          labels: {
            category: 'Film - Thriller',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm000z2rs',
          live: false,
          previewId: null,
          title: {
            default: 'Only You',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'A chance meeting leads to an intense relationship',
            live: null,
          },
          synopsis: {
            small: "A chance meeting on New Year's Eve results in a passionate relationship.",
            editorial: 'A chance meeting leads to an intense relationship - but passion soon turns to heartache',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09sflq4.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09sflq4.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09sflpp.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm000z2rs',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '112 mins',
              },
              availability: {
                remaining: 'Available for 9 days',
              },
            },
          ],
          labels: {
            category: 'Film - Romance',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm000qqtl',
          live: false,
          previewId: null,
          title: {
            default: 'Dunkirk',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'Survival is Victory',
            live: null,
          },
          synopsis: {
            small: 'Allied soldiers find themselves surrounded by enemy forces in Dunkirk in World War II.',
            editorial: 'Survival is Victory. 300,000 troops trapped, hunted, surrounded - and time is running out',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p091vcdc.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p091vcdc.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p091vch1.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm000qqtl',
          },
          versions: [
            {
              kind: 'editorial',
              duration: {
                text: '97 mins',
              },
              availability: {
                remaining: 'Available for 17 days',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '97 mins',
              },
              availability: {
                remaining: 'Available for 17 days',
              },
            },
          ],
          labels: {
            category: 'Film - War',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'b03n1svn',
          live: false,
          previewId: null,
          title: {
            default: "Midnight's Children",
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'Salman Rushdie’s enchanting epic',
            live: null,
          },
          synopsis: {
            small: "Drama based on Salman Rushdie's novel. Two newborn babies are swapped in a hospital.",
            editorial: 'Salman Rushdie’s enchanting epic. The intertwining story of babies born during Partition',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p085rq0j.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p085rq0j.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p085rrpp.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b03n1svn',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '133 mins',
              },
              availability: {
                remaining: 'Available for 23 days',
              },
            },
          ],
          labels: {
            category: 'Film - Drama',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'b01qdx6t',
          live: false,
          previewId: null,
          title: {
            default: 'Salmon Fishing in the Yemen',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'Ewan McGregor stars',
            live: null,
          },
          synopsis: {
            small: 'A government scientist is asked to introduce salmon in the highlands of Yemen.',
            editorial: 'Ewan McGregor stars. A journey of faith and fish to prove the impossible, possible',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cr8xy3.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cr8xy3.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cr8xzz.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b01qdx6t',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '99 mins',
              },
              availability: {
                remaining: 'Available for 23 days',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '99 mins',
              },
              availability: {
                remaining: 'Available for 23 days',
              },
            },
          ],
          labels: {
            category: 'Film - Rom-Com',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm0019n5k',
          live: false,
          previewId: null,
          title: {
            default: 'Emma',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'Emma knows best, love knows better',
            live: null,
          },
          synopsis: {
            small: 'Emma Woodhouse becomes an incorrigible matchmaker, oblivious to the consequences.',
            editorial: 'Emma knows best, love knows better. Anya Taylor-Joy in a fresh take on an Austen classic',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmq693.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmq693.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0cmr3xd.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm0019n5k',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '115 mins',
              },
              availability: {
                remaining: 'Available until Tue 10pm',
              },
            },
          ],
          labels: {
            category: 'Film - Romance',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'b04kjj99',
          live: false,
          previewId: null,
          title: {
            default: 'Captain America: The Winter Soldier',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'In heroes we trust',
            live: null,
          },
          synopsis: {
            small: 'Captain America teams up with Black Widow to get to the bottom of a conspiracy.',
            editorial: 'In heroes we trust. Captain America and Black Widow uncover a conspiracy within SHIELD',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09sjjsf.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09sjjsf.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p09sjjv3.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'b04kjj99',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '126 mins',
              },
              availability: {
                remaining: 'Available until Sat 1:50am',
              },
            },
            {
              kind: 'audio-described',
              duration: {
                text: '126 mins',
              },
              availability: {
                remaining: 'Available until Sat 1:50am',
              },
            },
          ],
          labels: {
            category: 'Film - Action',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm00135n2',
          live: false,
          previewId: null,
          title: {
            default: 'Mary Queen of Scots',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'In a time of kings, two queens rule',
            live: null,
          },
          synopsis: {
            small: '1561. Young Catholic widow Mary Stuart returns to Scotland from France determined to rule.',
            editorial: 'In a time of kings, two queens rule. Mary Stuart tries to displace her cousin Elizabeth I',
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bb72bc.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bb72bc.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p0bb72yv.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm00135n2',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '115 mins',
              },
              availability: {
                remaining: 'Available for 8 days',
              },
            },
          ],
          labels: {
            category: 'Film - Biopic',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
      {
        episode: {
          id: 'm000lht5',
          live: false,
          previewId: null,
          title: {
            default: 'Apocalypse Now: Final Cut',
            editorial: null,
            live: null,
          },
          subtitle: {
            default: null,
            editorial: 'The epic movie, expanded',
            live: null,
          },
          synopsis: {
            small: 'A US officer (Martin Sheen) in Vietnam is tasked with a secret mission.',
            editorial: "The epic movie, expanded. Francis Ford Coppola's haunting, hallucinatory Vietnam War epic",
            programmeSmall: null,
            live: null,
          },
          image: {
            default: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08mckm5.jpg',
            promotional: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08mckm5.jpg',
            promotionalWithLogo: 'https://ichef.bbci.co.uk/images/ic/{recipe}/p08mcknt.jpg',
            live: null,
            character: null,
            portrait: null,
          },
          tleo: {
            id: 'm000lht5',
          },
          versions: [
            {
              kind: 'original',
              duration: {
                text: '170 mins',
              },
              availability: {
                remaining: 'Available for 13 days',
              },
            },
          ],
          labels: {
            category: 'Film - War',
            editorial: null,
            time: null,
          },
          promoted: true,
        },
        journey: null,
      },
    ],
  },
];
