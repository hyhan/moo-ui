<script lang='ts' setup name="MIcon">
interface IconProps {
  name: string
}

defineProps<IconProps>()
</script>

<template>
  <div class="o-icon-base" :class="name" />
</template>
