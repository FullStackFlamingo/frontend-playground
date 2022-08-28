<template>
  <ul class="sub-nav-container">
    <li v-for="subItem in subItems" :key="subItem.id">
      <a class="sub-nav__item" :href="subItem.href" :aria-label="subItem.ariaLabel">
        <span>{{ subItem.title }}</span>
      </a>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  subItems: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.sub-nav-container {
  display: flex;
}
.sub-nav__item {
  display: block;
  position: relative;
  padding: 8px 16px;
  overflow: hidden;
  white-space: nowrap;
  &:focus,
  &:hover {
    color: var(--color-accent-1);
  }
}
@media (min-width: $--breakpoint-md) {
  .sub-nav-container {
    white-space: normal;
    display: block;
    columns: 3;
  }
  .sub-nav__item {
    white-space: normal;
    &:focus,
    &:hover {
      background: white;
      color: black;
    }
  }
}
@media (min-width: $--breakpoint-lg) {
  .sub-nav-container {
    columns: 5;
  }
}
</style>
