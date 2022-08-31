<script lang="ts" setup>
const value = ref('')
</script>

<template>
  <div o-white title="Icon">
    <div grid="~ cols-7 gap-4" un-children="text-6">
      value: {{ value }}
      <MInput v-model:value="value" />
    </div>
  </div>
</template>
