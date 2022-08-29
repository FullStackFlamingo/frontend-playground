<template>
  <section class="bundle-hero">
    <div class="bundle-hero__aspect">
      <div class="bundle-hero__image">
        <ResponsiveImage type="hero" :recipe="episode.image.promotional" />
        <div class="bundle-hero__image__overlay" />
        <div class="bundle-hero__image__gradient" />
      </div>
      <BundleHeroHeader :bundle="bundle" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

import BundleHeroHeader from './BundleHeroHeader.vue';

const props = defineProps({
  bundle: {
    type: Object,
    required: true,
  },
});
const episode = computed(() => props.bundle.entities[0].episode);
</script>

<style scoped lang="scss">
.bundle-hero {
  position: relative;
  margin: 0 auto;
  max-width: var(--size-main-wrapper);
}
.bundle-hero__aspect {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: calc(9vw / 16 * 100 + 80px);
}

.bundle-hero__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.bundle-hero__image__overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}
.bundle-hero__image__gradient {
  position: absolute;
  left: 0;
  right: 0;
  height: 35%;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000);
}

.bundle-hero__header {
  position: relative;
}
.bundle-hero__cta {
  display: flex;
  padding-top: 14px;
  padding-bottom: 20px;
  &:hover,
  &:focus {
    .bundle-hero__cta__play {
      background-color: var(--color-accent-1);
      fill: #fff;
    }
  }
}
.bundle-hero__cta__synposis {
  color: var(--color-subtle-text);
}

.bundle-hero__cta__text {
  display: block;
  padding-left: calc(var(--size-base-unit) * 2);
  margin-bottom: calc(var(--size-base-unit) * 1);
}
.bundle-hero__cta__blip {
  display: block;
  width: calc(var(--size-base-unit) * 4);
  height: 1px;
  background-color: var(--color-accent-1);
  margin-top: calc(var(--size-base-unit) * 2);
}
.bundle-hero__cta__heading {
  color: var(--color-accent-1);
  display: block;
}
.bundle-hero__cta__play {
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  fill: var(--color-accent-1);
  flex: none;
  svg {
    width: 20px;
    height: 20px;
  }
}

@media (min-width: $--breakpoint-md) {
  .bundle-hero__cta__play {
    height: 72px;
    width: 72px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
