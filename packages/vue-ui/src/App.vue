<template>
  <main>
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
  </main>
</template>

<script setup>
import SkipToContent from './components/SkipToContent.vue';
import MainNavigation from './components/main-navigation/MainNavigation.vue';
import iconSprite from '@private/design-system/icons.svg?raw';
</script>
