<template>
  <div class="bundle-row-arrows">
    <button class="bundle-row-arrows__button" :disabled="leftDisabled" @click="$emit('left')">
      <span class="sr-only">Scroll carousel left</span>
      <SvgUse href="#gel-icon-previous" class="bundle-row-arrows__button__icon" />
    </button>
    <button class="bundle-row-arrows__button" :disabled="rightDisabled" @click="$emit('right')">
      <span class="sr-only">Scroll carousel right</span>
      <SvgUse href="#gel-icon-next" class="bundle-row-arrows__button__icon" />
    </button>
  </div>
</template>

<script setup>
defineEmits(['left', 'right']);

defineProps({
  leftDisabled: {
    type: Boolean,
    default: false,
  },
  rightDisabled: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.bundle-row-arrows {
  display: flex;
}
.bundle-row-arrows__button {
  width: 42px;
  height: 42px;
  background: var(--color-bg-main-highlight);
  fill: var(--color-icon-button);
  cursor: pointer;
  line-height: 1;
  &:hover,
  &:focus {
    background: var(--color-bg-main-highlight--active);
    fill: var(--color-icon-button--active);
  }
  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
}
.bundle-row-arrows__button__icon {
  width: 16px;
  height: 16px;
  display: inline-block;
}
</style>
