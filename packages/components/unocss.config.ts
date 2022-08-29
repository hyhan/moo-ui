import { presetMoo } from '@moo-ui/preset'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons(),
    presetUno(),
    presetMoo(),
  ],
  safelist: [['xs', 'sm', 'md', 'lg'].map(s => [`o-button-${s}`, `o-avatar-${s}`, `o-avatar-group-${s}`, `o-card-${s}`])].flat(2) as string[],
})
