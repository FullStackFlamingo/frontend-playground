<template>
  <div>
    <h2>Vue</h2>
    <section v-for="bundle in data.getBundlesForPath" :key="bundle.id">
      <h2>{{ bundle.title.default }}</h2>
      <ul>
        <li v-for="{ episode } in bundle.entities" :key="episode.id">
          <h3>{{ episode.title.default }}</h3>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { useQuery } from '@urql/vue';

const { data, error } = await useQuery({
  query: `
  {
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
          image {
            default
          }
        }
      }
    }
    }
  `,
});
</script>

<script>
export default {
  name: 'Home',
};
</script>
