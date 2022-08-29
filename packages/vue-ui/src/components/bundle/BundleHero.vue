<template>
  <section class="bundle-hero">
    <MainWrapper>
      <div class="bundle-hero__aspect">
        <div class="bundle-hero__image">
          <ResponsiveImage type="hero" :recipe="episode.image.default" />
          <div class="bundle-hero__image__overlay" />
          <div class="bundle-hero__image__gradient" />
        </div>

        <div class="bundle-hero__header">
          <h2 class="bundle-hero__heading font--bold font--size-4">{{ episode.title.default }}</h2>
          <a class="bundle-hero__cta" :href="href" :aria-label="ariaLabel">
            <span class="bundle-hero__cta__play">
              <SvgUse href="#gel-icon-play" />
            </span>
            <span class="bundle-hero__cta__text">
              <span class="bundle-hero__cta__heading font--bold font--size--1">Start Watching</span>
              <span class="font--bold">{{ subtitle }}</span>
            </span>
          </a>
          <p v-if="synopsis" class="bundle-hero__cta__synposis">{{ synopsis }}</p>
        </div>
      </div>
    </MainWrapper>
  </section>
</template>

<script setup>
import slugify from 'slugify';
import { computed } from 'vue';
const props = defineProps({
  bundle: {
    type: Object,
    required: true,
  },
});
const episode = computed(() => props.bundle.entities[0].episode);
const slug = slugify(episode.value.title.default);
const href = computed(() => `/iplayer/episode/${episode.value.previewId}/${slug}`);
const subtitle = computed(() => episode.value.subtitle.editorial);
const synopsis = computed(() => episode.value.synopsis.small);
const ariaLabel = computed(() => episode.value.title.default + 'Description: ' + synopsis.value);
</script>

<style scoped lang="scss">
.bundle-hero {
  position: relative;
}
.bundle-hero__aspect {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: calc(9vw / 16 * 100 + 60px);
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
  padding-left: calc(var(--size-base-unit) * 2);
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
</style>
