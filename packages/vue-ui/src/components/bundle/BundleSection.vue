<template>
  <section class="bundle-section">
    <MainWrapper>
      <div class="bundle-section__header">
        <h2 class="bundle-section__header__heading font--bold font--size-3">{{ bundle.title.default }}</h2>
        <a
          :href="`/iplayer/group/${bundle.id}`"
          :aria-label="`View all programmes from the ${bundle.title.default} group`"
        >
          View all
        </a>
      </div>
    </MainWrapper>
    <slot />
  </section>
</template>

<script setup>
defineProps({
  bundle: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.bundle-section {
  margin-top: calc(var(--size-base-unit) * 6);
  margin-bottom: calc(var(--size-base-unit) * 4);
}
.bundle-section__header {
  display: flex;
  position: relative;
}
.bundle-section__header__heading {
  margin-bottom: calc(var(--size-base-unit) * 4);
  flex: 1;
}
</style>
