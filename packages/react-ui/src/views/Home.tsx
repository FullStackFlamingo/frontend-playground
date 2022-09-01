import { useQuery } from 'urql';

const query = `
{
  getTranslations(path:"/", language:"en")
  getBundlesForPath(path:"/") {
    id
    type
    title {
      default
      small
    }
    entities {
      episode {
        id
        title {
          default
          editorial
          live
        }
        subtitle {
          default
          editorial
          live
        }
        image {
          default
          portrait
          promotional
        }
        synopsis {
          small
          editorial
          programmeSmall
          live
        }
        live
        previewId

      }
    }
  }
  }`;

function Home() {
  const [result] = useQuery({ query });
  const { data, fetching, error } = result;
  return (
    <div>
      <h2>Home</h2>
      {JSON.stringify(data)}
    </div>
  );
}

export default Home;
