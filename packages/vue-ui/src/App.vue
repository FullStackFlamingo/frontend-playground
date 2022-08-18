<template>
  <div>
    <RouterView v-slot="{ Component }">
      <Suspense>
        <div>
          <component :is="Component" />
        </div>
      </Suspense>
    </RouterView>
  </div>
</template>
