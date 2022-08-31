<script lang="ts" setup>
const githubUrl = 'https://github.com/moo-ui/moo-ui'

const loading = ref(false)
const startLoading = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <div m="white" title="Button">
    <div space-y-2>
      <div fsc gap-2>
        <MButton class="m-primary">
          Primary
        </MButton>
        <MButton m="secondary">
          Secondary
        </MButton>
        <MButton m="success">
          Success
        </MButton>
        <MButton m="warning" rounded="full">
          Warning
        </MButton>
        <MButton m="error" rounded="full">
          Danger
        </MButton>
        <MButton m="info" rounded="full">
          Info
        </MButton>
      </div>
      <div fsc gap-2>
        <MButton light m="primary">
          Primary
        </MButton>
        <MButton light m="secondary">
          Secondary
        </MButton>
        <MButton m="success light">
          Success
        </MButton>
        <MButton light m="warning dashed" rounded="full">
          Warning
        </MButton>
        <MButton light m="error dashed" rounded="full">
          Danger
        </MButton>
        <MButton light m="info dashed" rounded="full">
          Info
        </MButton>
      </div>
      <div fsc gap-2>
        <MButton text m="primary">
          Primary
        </MButton>
        <MButton text m="secondary">
          Secondary
        </MButton>
        <MButton m="success text">
          Success
        </MButton>
        <MButton text m="warning" rounded="full">
          Warning
        </MButton>
        <MButton text m="error" rounded="full">
          Danger
        </MButton>
        <MButton text m="info" rounded="full">
          Info
        </MButton>
      </div>

      <div fsc gap-2>
        <MButton size="xs" m="primary">
          Mini
        </MButton>
        <MButton size="sm" m="secondary">
          Small
        </MButton>
        <MButton size="md" m="success">
          Medium
        </MButton>
        <MButton size="lg" m="warning">
          Large
        </MButton>
        <MButton :tm="githubUrl" m="primary">
          <template #icon>
            <div i-carbon-logo-github />
          </template>
        </MButton>
        <MButton m="secondary">
          <template #icon>
            <div i-carbon-share />
          </template>
        </MButton>
        <MButton m="success" rounded-full>
          <template #icon>
            <div i-carbon-logo-wechat />
          </template>
        </MButton>
        <MButton m="error" rounded-full>
          <template #icon>
            <div i-carbon-music />
          </template>
        </MButton>
        <MButton m="info" :loading="loading" @click="startLoading">
          {{ loading ? 'Loading~~' : 'Start Load' }}
        </MButton>
      </div>
      <div fsc gap-2>
        <MButton :tm="githubUrl" m="primary">
          <template #icon>
            <div i-carbon-logo-github />
          </template>
          Github
        </MButton>
        <MButton m="secondary">
          <template #icon>
            <div i-carbon-share />
          </template>
          Share
        </MButton>
        <MButton m="success" icon="i-carbon-logo-wechat">
          WeChat
        </MButton>
        <MButton m="error">
          <template #icon>
            <div i-carbon-music />
          </template>
          Music
        </MButton>
      </div>
      <div fsc gap-2>
        <MButton disabled m="primary">
          Disabled
        </MButton>
        <MButton disabled m="secondary">
          Disabled
        </MButton>
        <MButton disabled m="success">
          Disabled
        </MButton>
        <MButton disabled m="warning">
          Disabled
        </MButton>
        <MButton disabled m="error">
          Disabled
        </MButton>
      </div>
    </div>
  </div>
</template>
