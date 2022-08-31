<script lang="ts" setup name="MInput">
import type { SizeType } from '../../types'

interface InputProps {
  value?: string
  size?: SizeType
}

const props = withDefaults(defineProps<InputProps>(), {
  size: 'md',
})
const emit = defineEmits(['update:value'])

const onInput = (e: Event) => {
  emit('update:value', (e as any).target.value)
}
</script>

<template>
  <div class="m-input-wrap m-input-focus">
    <input class="m-input-base" type="text" @input="onInput">
  </div>
</template>
