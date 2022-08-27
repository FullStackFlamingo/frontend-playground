<template>
  <nav>
    <MainWrapper>
      <slot />
      <ul class="sub-nav-container">
        <li v-for="subItem in subItems" :key="subItem.id">
          <a class="sub-nav__item" :href="subItem.href" :aria-label="subItem.ariaLabel">
            <span>{{ subItem.title }}</span>
          </a>
        </li>
      </ul>
    </MainWrapper>
  </nav>
</template>

<script setup>
defineProps({
  subItems: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
.sub-nav-container {
  columns: 4;
}
.sub-nav__item {
  display: block;
  position: relative;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow: hidden;
  &:focus,
  &:hover {
    background: white;
    color: black;
  }
}
</style>
