<template>
  <svg role="presentation" focusable="false">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="href" :href="href" role="presentation"></use>
  </svg>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>
