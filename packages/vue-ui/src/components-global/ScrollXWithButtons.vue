<template>
  <component :is="is" class="scroller">
    <button
      v-if="canScroll"
      class="scroller__button"
      @click="scrollX(-1)"
      :disabled="arrivedState.left"
      :aria-label="leftAriaLabel"
    >
      <SvgUse href="#gel-icon-previous" />
    </button>
    <div class="scroller__area" ref="scrollerArea">
      <slot />
    </div>
    <button
      v-if="canScroll"
      class="scroller__button"
      @click="scrollX(1)"
      :disabled="arrivedState.right"
      :aria-label="rightAriaLabel"
    >
      <SvgUse href="#gel-icon-next" />
    </button>
  </component>
</template>

<script setup>
import { useScroll, useResizeObserver } from '@vueuse/core';
import { computed, ref } from 'vue';

defineProps({
  is: {
    type: String,
    default: 'div',
  },
  leftAriaLabel: {
    type: String,
    default: 'scroll left',
  },
  rightAriaLabel: {
    type: String,
    default: 'scroll right',
  },
});

const scrollerArea = ref(null);
const { arrivedState } = useScroll(scrollerArea);

const canScroll = ref(true);

useResizeObserver(scrollerArea, (entries) => {
  canScroll.value = scrollerArea.value.scrollWidth > scrollerArea.value.clientWidth;
});

const scrollX = (dir) => {
  const width = scrollerArea.value.offsetWidth * dir;
  scrollerArea.value.scrollLeft += width;
};
</script>

<style scoped lang="scss">
.scroller {
  position: relative;
  display: flex;
}
.scroller__area {
  flex: 1;
  overflow: hidden;
  overflow-x: auto;
}
.scroller__button {
  width: 48px;
  position: relative;
  fill: currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    opacity: 0.4;
  }
  svg {
    width: 12px;
    height: 12px;
  }
}
</style>
