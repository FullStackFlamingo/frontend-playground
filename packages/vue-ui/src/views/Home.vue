<template>
  <div>
    <h1>{{ t('home.homepage_title') }}</h1>
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
import { useTranslation } from 'i18next-vue';
const { i18next, t } = useTranslation();

const { data, error } = await useQuery({
  query: `
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
          image {
            default
          }
        }
      }
    }
    }
  `,
});
const { getTranslations } = data.value;
i18next.addResourceBundle('en', 'translation', { home: getTranslations }, true, true);
</script>
