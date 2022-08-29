import { resolve } from 'path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

const r = (p: string) => resolve(__dirname, p)
export default defineConfig({
  plugins: [Vue()],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
  resolve: {
    alias: {
      '@moo-ui/components': r('./packages/components'),
      '@moo-ui/preset': r('./packages/preset'),
      '@moo-ui/utils': r('./packages/utils'),
      'moo-ui': r('./packages/moo-ui'),
    },
  },
})
