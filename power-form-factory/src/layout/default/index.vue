<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="left"></div>
        <div class="main">
          <template v-for="(item, idx) in menus" :key="idx">
            <RouterLink v-if="item.path" :to="item.path">{{
              item.title
            }}</RouterLink>
            <span v-else>{{ item.title }}</span>
          </template>
        </div>
        <div class="right">
          <RouterLink to="/design">
            <el-icon><Plus /></el-icon>设计表单
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
import type { Menus } from '@/types'
import { RouterLink } from 'vue-router'

import getDefaultMenus from './default-menus'

interface Props {
  menus?: Menus[]
}

withDefaults(defineProps<Props>(), {
  menus: () => getDefaultMenus(),
})
</script>

<style lang="scss" scoped>
header {
  height: 50px;

  .wrapper {
    width: 100%;
    height: 100%;
  }
}

nav {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > .left,
  & > .right {
    flex-grow: 0;
    flex-shrink: 0;
    width: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  & > .right {
    justify-content: flex-end;
  }

  & > .main {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
