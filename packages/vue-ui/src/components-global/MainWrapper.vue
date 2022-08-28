<template>
  <div class="wrapper"><slot /></div>
</template>

<style scoped lang="scss">
.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: var(--size-main-wrapper);
  padding: 0 8px;
}
@media (min-width: $--breakpoint-lg) {
  .wrapper {
    padding: 0 16px;
  }
}
</style>
