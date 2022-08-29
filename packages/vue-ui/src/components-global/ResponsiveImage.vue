<template>
  <div class="responsive-image" :class="[`responsive-image--${aspectRatioType}`]">
    <div class="responsive-image__inner">
      <picture>
        <source
          v-for="({ media, itemWidth, srcset }, key) in sizes"
          :key="key"
          :media="media"
          :sizes="itemWidth"
          :srcset="recipeToSrcSet(srcset)"
        />

        <img class="rs-image__img" alt="" fetchpriority="auto" />
      </picture>
    </div>
  </div>
</template>

<script setup>
import { useResponsiveImage } from './responsive-image.js';
const props = defineProps({
  recipe: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'default',
  },
});

const { recipeToSrcSet, sizes, aspectRatioType } = useResponsiveImage(props);
</script>

<style lang="scss" scoped>
.responsive-image {
  position: relative;
  padding-bottom: 56.25%;
  padding-bottom: calc(9% / 16 * 100);
}
.responsive-image--portrait {
  padding-bottom: calc(696% / 464 * 100);
}
.responsive-image__inner {
  position: absolute;
  width: 100%;
  height: 100%;
  img {
    object-fit: fill;
    width: 100%;
  }
}
</style>
