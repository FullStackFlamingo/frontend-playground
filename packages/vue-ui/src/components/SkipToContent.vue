<template>
  <a class="skip-to-content-link" href="#main-content">Skip to content</a>
</template>

<style scoped>
.skip-to-content-link {
  background: #fff;
  color: #000;
  top: 40px;
  left: 40px;
  padding: 20px;
  position: fixed;
  transform: translateY(-1000px);
  z-index: var(--zindex-skip-content);
}

.skip-to-content-link:focus {
  transform: translateY(0);
}
</style>
