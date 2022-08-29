import type { ComponentResolver } from 'unplugin-vue-components'

export function MooResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^M[A-Z]/))
        return { name, from: 'moo-ui' }
    },
  }
}
