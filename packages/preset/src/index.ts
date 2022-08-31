import { parseColor } from '@unocss/preset-mini/utils'
import type { Preset, RuleContext } from 'unocss'
import type { Theme } from '@unocss/preset-uno'
import { commonShortcuts } from './shortcuts'

type SizeType = 'xs' | 'sm' | 'md' | 'lg'

export function presetMoo(): Preset {
  return {
    name: '@moo-ui/preset',
    theme: {
      colors: {
        context: 'rgba(var(--moo-c-context),%alpha)',
        primary: '#F9999A',
        secondary: '#7EAFF8',
        success: '#B2E08C',
        warning: '#F8BF7E',
        error: '#F96262',
        info: '#373e47',
        placeholder: '#dcdcdc',
      },
      fontFamily: {
        sans: 'Avenir, Helvetica, Arial, sans-serif',
      },
      boxShadow: {
        xs: 'var(--un-shadow-inset) 0 1px 1px 0 var(--un-shadow-color, rgba(0,0,0,0.03))',
      },
      animation: {
        keyframes: {
          switching: `{0%{ box-shadow: 0 0 0 2px #1890ff66; }
            60%{ box-shadow: 0 0 0 4px #1890ff33; }
            80%{ box-shadow: 0 0 0 6px #1890ff1a; }
            100%{ box-shadow: 0 0 0 8px #1890ff0d; }}`,
        },
        durations: {
          switching: '0.3s',
        },
      },
    },
    rules: [
      [
        /^m-(.*)$/,
        ([, body]: string[], { theme }: RuleContext<Theme>) => {
          const color = parseColor(body, theme)

          if (color?.cssColor?.type === 'rgb' && color.cssColor.components) {
            return {
              '--moo-c-context': `${color.cssColor.components.join(',')}`,
            }
          }
        },
      ],
      ['m-dashed', { 'border-style': 'dashed' }],
      [
        'm-solid',
        {
          'background-color': 'rgba(var(--moo-c-context), 1) !important',
          'border-color': 'rgba(var(--moo-c-context), 1)',
          'color': 'white !important',
        },
      ],
      [
        'm-disabled',
        {
          opacity: 0.6,
          cursor: 'not-allowed',
        },
      ],
    ],
    variants: [
      (input: string) => {
        const prefix = 'm-disabled:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[disabled] ${input}, ${input}[disabled]`,
          }
        }
      },
      (input: string) => {
        const prefix = 'm-checked:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[checked] ${input}, ${input}[checked]`,
          }
        }
      },
    ],
    shortcuts: [
      {
        ...commonShortcuts,
        // general
        // 'o-bg-base': 'bg-white dark:bg-[#222]',
        'm-border-base': 'border-gray-400/50',
        'm-border-300': 'border-gray-400/40',
        'm-border-200': 'border-gray-400/25',
        'm-transition': 'transition-all duration-200',
        'm-focus-base': 'ring-2 ring-context/50',
        'm-active-base': 'ring-3 ring-context/10',
        'm-borderless': '!border-none !shadow-none',
        'm-solid': 'bg-context border-context c-white',
        'm-light': `!shadow-transparent bg-context:12 hover-bg-context active-bg-context:64
                   !border-context !hover-border-context !active-border-context:64
                   !c-context !hover-c-white !active-c-white`,
        'm-text': `!shadow-transparent !bg-transparent !hover-bg-context:32 !active-bg-context:12
                   !border-transparent
                   !c-context`,

        // button
        'm-button-base':
          'fcc gap-1 inline-flex cursor-pointer rounded shadow-context:50 !outline-none c-context m-solid border',
        'm-button-hover':
          'hover-border-context:64 hover-text-white hover-bg-context:64',
        'm-button-active':
          'active-border-context:32 active-text-white active-bg-context:32',
        'm-button-light': 'm-light',
        'm-button-text': 'm-text',
        'm-button-xs': 'px-2.5 h-6 text-xs shadow-xs',
        'm-button-sm': 'px-3 h-7 text-sm shadow-sm',
        'm-button-md': 'px-4 h-8 text-sm shadow-md',
        'm-button-lg': 'px-4 h-9 text-md shadow-lg',

        // icon
        'm-icon-base': 'c-context text-md',

        // input
        'm-input-wrap': 'pr border c-context px-4 py-1 h-8 box-border text-2 shadow-md bg-white rounded overflow-hidden',
        'm-input-focus': 'focus-border-context:64',
        'm-input-base': 'w-full h-full box-border outline-none bg-white',
      },
      [/^o-avatar-group-(.*)$/, ([,s]) => {
        if (['xs', 'sm', 'md', 'lg'].includes(s)) {
          const size = s as SizeType
          const avatarSizeMap: Record<SizeType, string> = {
            xs: 'h-6 text-xs shadow-xs',
            sm: 'h-8 text-sm shadow-sm',
            md: 'h-10 text-sm shadow-md',
            lg: 'h-15 text-md shadow-md',
          }
          const avatarGroupSpaceMap: Record<SizeType, string> = {
            xs: 'space-x--2',
            sm: 'space-x--3',
            md: 'space-x--4',
            lg: 'space-x--6',
          }
          return `important-${avatarGroupSpaceMap[size]} ${avatarSizeMap[size].split(' ').map(selector => `important-children-${selector}`).join(' ')}`
        }
      }],
    ],
    safelist: [['xs', 'sm', 'md', 'lg'].map(s => [`m-button-${s}`, `m-input-${s}`])].flat(2) as string[],
  }
}
