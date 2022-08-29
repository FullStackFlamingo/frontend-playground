<template>
  <a :href="href">
    <ResponsiveImage :type="type" :recipe="entity.episode.image.default" />
    <h3 class="font--bold font--size-1">{{ entity.episode.title.default }}</h3>
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
</script>
