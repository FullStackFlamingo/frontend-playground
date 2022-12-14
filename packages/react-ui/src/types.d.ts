export declare global {
  interface Window {
    [index: string]: any;
    __REACTUI_STATE__: string;
  }
  namespace IPlayer {
    interface BundleTitle {
      default: string;
      small: string;
    }
    interface EpisodeTitle {
      default: string;
      editorial: string;
      live: string;
    }
    interface EpisodeImage {
      default: string;
      portrait: string;
      promotional: string;
    }
    interface EpisodeSynopsis {
      small: string;
      editorial: string;
      programmeSmall: string;
      live: string;
    }
    interface Episode {
      id: string;
      title: EpisodeTitle;
      subtitle: EpisodeTitle;
      image: EpisodeImage;
      synopsis: EpisodeSynopsis;
      live: string;
      previewId: string;
    }
    interface BundleEntity {
      episode: Episode;
    }
    interface Bundle {
      id: string;
      type: string;
      title: BundleTitle;
      entities: [BundleEntity];
    }
    namespace MainNav {
      interface SubNavItem {
        id: string;
        title: string;
        active: boolean;
        ariaLabel: string;
        href: string;
        liveHref: string;
        icon: string;
        kind: string;
      }

      interface TopNavItem {
        id: string;
        title: string;
        active: boolean;
        ariaLabel: string;
        href: string;
        subItems: Array<SubNavItem>;
      }
    }
  }
}
