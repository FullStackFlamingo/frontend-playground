<template>
  <div class="bundle-row-wrapper">
    <BundleRowArrows class="bundle-row__arrows" />
    <MainWrapper tag="ul" class="bundle-row">
      <li class="bundle-row__entity" v-for="entity in bundle.entities" :key="entity.episode.id">
        <BundleEntity :entity="entity" :type="bundle.type" />
      </li>
    </MainWrapper>
  </div>
</template>

<script setup>
import BundleEntity from './BundleEntity.vue';
import BundleRowArrows from './BundleRowArrows.vue';
defineProps({
  bundle: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.bundle-row-wrapper {
  position: relative;
  overflow: hidden;
}
ul.bundle-row {
  display: flex;
  overflow: visible;
  padding-right: calc(var(--size-base-unit) * 12);
}
.bundle-row__arrows {
  position: absolute;
  right: calc(var(--size-base-unit) * 8);
  top: 50%;
  transform: translate(0, -50%);
  z-index: var(--zindex-boost);
}
.bundle-row__entity {
  width: 50%;
  flex-basis: auto;
  flex-shrink: 0;
  flex-grow: 0;
  padding-right: calc(var(--size-base-unit) * 2);
}

@media (min-width: $--breakpoint-md) {
  .bundle-row__entity {
    width: 33.333%;
  }
}
@media (min-width: $--breakpoint-lg) {
  .bundle-row__entity {
    width: 25%;
  }
}
</style>
