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
import MainNavigation from './components/main-navigation/MainNavigation.vue';
import iconSprite from '@private/design-system/icons.svg?raw';
</script>

<style>
body {
  background-color: var(--color-bg-main);
  color: var(--color-bg-text);
  font-family: var(--font-family);
}
*:focus {
  outline: 2px solid var(--color-accent-1);
}
</style>
