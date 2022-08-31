<script setup lang="ts" name="M-Button">
import type { SizeType } from '../../types'
interface IButtonProps {
  to?: string
  light?: boolean
  text?: boolean
  size?: SizeType
  disabled?: boolean
  loading?: boolean
  icon?: string
}

const props = withDefaults(defineProps<IButtonProps>(), {
  size: 'md',
})
const slots = useSlots()
const isDisabled = computed(() => props.loading || props.disabled)
const onlyIcon = computed(() => (slots.icon || props.icon) && !slots.default)
</script>

<template>
  <component
    :is="to ? 'a' : 'button'"
    v-bind="to && { href: to }"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    class="m-button-base"
    :class="[
      light ? 'm-button-light' : '',
      text ? 'm-button-text' : '',
      `m-button-${size}`,
      isDisabled ? 'm-disabled' : 'm-transition m-button-hover m-button-active',
      onlyIcon && 'aspect-square px-0',
    ]"
  >
    <div v-if="loading" i-carbon-circle-dash animate-spin />
    <MIcon v-else-if="icon" :name="icon" />
    <slot v-else name="icon" />
    <slot />
  </component>
</template>
