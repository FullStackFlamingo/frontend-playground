<template>
  <nav class="main-nav" aria-labelledby="main-nav-title">
    <h2 id="main-nav-title" class="hidden">BBC I Player Navigation</h2>

    <MainWrapper class="main-nav__wrapper">
      <div class="main-nav__logo-wrapper">
        <a href="/" aria-label="BBC I Player Home"><Logo class="main-nav__logo" /> </a>
      </div>
      <ul class="main-nav__item-container">
        <li v-for="item in items" :key="item.id">
          <button
            class="main-nav__item"
            v-if="item.subItems"
            :aria-label="item.ariaLabel"
            @click="toggleSubNavActive(item.id)"
          >
            {{ item.title }} <SvgUse class="main-nav__item-arrow" href="#tvip-down-triangle" />
          </button>
          <a class="main-nav__item" v-else :href="item.href" :aria-label="item.ariaLabel">{{ item.title }}</a>
        </li>
      </ul>
    </MainWrapper>

    <template v-for="nav in navsWithSubItems" :key="nav.id">
      <SubNavigationWithIcons
        v-if="activeSubNav === nav.id && nav.subItems[0].icon"
        :sub-items="nav.subItems"
        :aria-labelledby="`subnav-${nav.id}`"
      >
        <h2 :id="`subnav-${nav.id}`" class="hidden">Navigation for {{ nav.title }}</h2>
      </SubNavigationWithIcons>
      <SubNavigation
        v-else-if="activeSubNav === nav.id"
        :sub-items="nav.subItems"
        :aria-labelledby="`subnav-${nav.id}`"
      >
        <h2 :id="`subnav-${nav.id}`" class="hidden">Navigation for {{ nav.title }}</h2>
      </SubNavigation>
    </template>
  </nav>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useQuery } from '@urql/vue';

import SubNavigation from './SubNavigation.vue';
import SubNavigationWithIcons from './SubNavigationWithIcons.vue';

const ITEM_ID_CHANNELS = 'channels';

import Logo from '../assets/logo.svg';

const { data, error } = await useQuery({
  query: `
  {
    getNavigationItems {
        renderOpen
        accessibilityHelpHref
        useLiveHrefs
        items {
            id
            title
            active
            ariaLabel
            href
            subItems {
                ... on NavigationItemChannel {
                  id
                  title
                  active
                  ariaLabel
                  href
                  liveHref
                  icon
                }
                ... on NavigationItemCategory {
                  id
                  title
                  active
                  ariaLabel
                  href
                  kind
                }
            }
        }
    }
  }
  `,
});
const activeSubNav = ref(null);

const items = computed(() => data.value?.getNavigationItems?.items ?? []);
const navsWithSubItems = computed(() => items.value?.filter((item) => item.subItems));

const toggleSubNavActive = (itemId) => {
  if (activeSubNav.value === itemId) {
    activeSubNav.value = null;
  } else {
    activeSubNav.value = itemId;
  }
};
</script>

<style scoped lang="scss">
.hidden {
  display: none;
}
.main-nav__wrapper {
  display: flex;
}
.main-nav__logo-wrapper {
  flex: 1;
}
.main-nav__logo {
  fill: var(--color-accent-1);
  width: 150px;
}

.main-nav__item-container {
  display: flex;
}
.main-nav__item {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  &--active,
  &:focus,
  &:hover {
    color: var(--color-accent-1);
  }
}

.main-nav__item-arrow {
  width: 6px;
  height: 6px;
  margin-left: 4px;
  fill: currentColor;
}
</style>
