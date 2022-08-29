<template>
  <a class="bundle-entity" :href="href" :aria-label="ariaLabel">
    <ResponsiveImage class="bundle-entity__image" :type="type" :recipe="entity.episode.image.default" />
    <h3 class="bundle-entity_title font--bold font--size-1">{{ entity.episode.title.default }}</h3>
  </a>
</template>

<script setup>
import slugify from 'slugify';
import { computed } from 'vue';

const props = defineProps({
  entity: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    default: 'default',
  },
});
const slug = slugify(props.entity.episode.title.default);
const href = computed(() => `/iplayer/episode/${props.entity.episode.previewId}/${slug}`);
const synopsis = computed(() => props.entity.episode.synopsis.small || props.entity.episode.synopsis.editorial);
const ariaLabel = computed(() => props.entity.episode.title.default + 'Description: ' + synopsis);
</script>

<style lang="scss" scoped>
.bundle-entity {
  &:focus,
  &:hover {
    outline: none;
    .bundle-entity__image {
      outline: 2px solid #fff;
    }
  }
}
.bundle-entity_title {
  margin-top: calc(var(--size-base-unit) * 2);
}
</style>
