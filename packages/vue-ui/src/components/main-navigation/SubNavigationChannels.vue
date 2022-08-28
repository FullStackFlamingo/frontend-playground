<template>
  <ul class="sub-nav-container">
    <li v-for="subItem in subItems" :key="subItem.id">
      <a class="sub-nav__item" :href="subItem.href" :aria-label="subItem.ariaLabel || subItem.title">
        <SvgUse class="sub-nav__item-icon" :href="`#iplayer-nav-icon-${subItem.icon}`" />
        <SvgUse
          class="sub-nav__item-icon sub-nav__item-icon--focused"
          :href="`#iplayer-nav-icon-${subItem.icon}-active`"
        />
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
  justify-content: space-between;
}
.sub-nav__item {
  display: block;
  position: relative;
  margin: 16px 6px;
  overflow: hidden;
  height: 32px;
}
.sub-nav__item-icon {
  width: 76px;
  height: 32px;
}
.sub-nav__item-icon--focused {
  display: none;
}
.sub-nav__item:hover,
.sub-nav__item:focus {
  .sub-nav__item-icon {
    display: none;
  }
}
.sub-nav__item:hover,
.sub-nav__item:focus {
  .sub-nav__item-icon--focused {
    display: block;
  }
}
</style>
