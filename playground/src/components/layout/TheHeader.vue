<script lang='ts' setup>
import { version } from '../../../package.json'
</script>

<template>
  <header h-16 fbc px-4 b="b dashed gray3">
    <div fsc gap-4>
      <img w-8 h-8 src="/logo.png" alt="Moo Logo">
      <h1 text="white op-60">
        Playground
        <sub bottom-0>v{{ version }}</sub>
      </h1>
    </div>
    <m-button text o="info" target="_blank" rounded-full to="https://github.com/moo-ui/moo-ui">
      <template #icon>
        <div i-carbon-logo-github />
      </template>
      <!-- Github -->
    </m-button>
  </header>
</template>
