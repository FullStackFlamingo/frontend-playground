<template>
  <component :is="tag" class="wrapper"><slot /></component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'div',
  },
});
</script>

<style scoped lang="scss">
.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: var(--size-main-wrapper);
  padding: 0 16px;
}
</style>
