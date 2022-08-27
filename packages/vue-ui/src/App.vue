<template>
  <div>
    <SkipToContent />
    <Suspense>
      <RouterView v-slot="{ Component }">
        <div>
          <MainNavigation />
          <div id="main-content">
            <component :is="Component" />
          </div>
        </div>
      </RouterView>
    </Suspense>
    <div class="hidden" v-html="iconSprite" />
  </div>
</template>

<script setup>
import SkipToContent from './components/SkipToContent.vue';
import MainNavigation from './components/MainNavigation.vue';
import iconSprite from '@private/design-system/icons.svg?raw';
</script>

<style>
body {
  background-color: var(--color-bg-main);
  color: vaR(--color-bg-text);
}
*:focus {
  outline: 2px solid var(--color-accent-1);
}
</style>

<style scoped>
.hidden {
  display: none;
}
</style>
