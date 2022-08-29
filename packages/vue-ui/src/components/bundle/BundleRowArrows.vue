<template>
  <div class="bundle-row-arrows">
    <button class="bundle-row-arrows__button" disabled>
      <span class="sr-only">Scroll carousel left</span>
      <SvgUse href="#gel-icon-previous" class="bundle-row-arrows__button__icon" />
    </button>
    <button class="bundle-row-arrows__button">
      <span class="sr-only">Scroll carousel right</span>
      <SvgUse href="#gel-icon-next" class="bundle-row-arrows__button__icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.bundle-row-arrows {
  display: flex;
}
.bundle-row-arrows__button {
  width: 42px;
  height: 42px;
  background: var(--color-bg-bundle-arrow);
  fill: var(--color-bundle-arrow);
  cursor: pointer;
  line-height: 1;
  &:hover,
  &:focus {
    background: var(--color-bg-bundle-arrow--active);
    fill: var(--color-bundle-arrow--active);
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
