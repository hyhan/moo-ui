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
  <div o="white" title="Button">
    <div space-y-2>
      <div fsc gap-2>
        <MButton o="primary">
          Primary
        </MButton>
        <MButton o="secondary">
          Secondary
        </MButton>
        <MButton o="success">
          Success
        </MButton>
        <MButton o="warning" rounded="full">
          Warning
        </MButton>
        <MButton o="error" rounded="full">
          Danger
        </MButton>
        <MButton o="info" rounded="full">
          Info
        </MButton>
      </div>
      <div fsc gap-2>
        <MButton light o="primary">
          Primary
        </MButton>
        <MButton light o="secondary">
          Secondary
        </MButton>
        <MButton o="success light">
          Success
        </MButton>
        <MButton light o="warning dashed" rounded="full">
          Warning
        </MButton>
        <MButton light o="error dashed" rounded="full">
          Danger
        </MButton>
        <MButton light o="info dashed" rounded="full">
          Info
        </MButton>
      </div>
      <div fsc gap-2>
        <MButton text o="primary">
          Primary
        </MButton>
        <MButton text o="secondary">
          Secondary
        </MButton>
        <MButton o="success text">
          Success
        </MButton>
        <MButton text o="warning" rounded="full">
          Warning
        </MButton>
        <MButton text o="error" rounded="full">
          Danger
        </MButton>
        <MButton text o="info" rounded="full">
          Info
        </MButton>
      </div>

      <div fsc gap-2>
        <MButton size="xs" o="primary">
          Mini
        </MButton>
        <MButton size="sm" o="secondary">
          Small
        </MButton>
        <MButton size="md" o="success">
          Medium
        </MButton>
        <MButton size="lg" o="warning">
          Large
        </MButton>
        <MButton :to="githubUrl" o="primary">
          <template #icon>
            <div i-carbon-logo-github />
          </template>
        </MButton>
        <MButton o="secondary">
          <template #icon>
            <div i-carbon-share />
          </template>
        </MButton>
        <MButton o="success" rounded-full>
          <template #icon>
            <div i-carbon-logo-wechat />
          </template>
        </MButton>
        <MButton o="error" rounded-full>
          <template #icon>
            <div i-carbon-music />
          </template>
        </MButton>
        <MButton o="info" :loading="loading" @click="startLoading">
          {{ loading ? 'Loading~~' : 'Start Load' }}
        </MButton>
      </div>
      <div fsc gap-2>
        <MButton :to="githubUrl" o="primary">
          <template #icon>
            <div i-carbon-logo-github />
          </template>
          Github
        </MButton>
        <MButton o="secondary">
          <template #icon>
            <div i-carbon-share />
          </template>
          Share
        </MButton>
        <MButton o="success">
          <template #icon>
            <div i-carbon-logo-wechat />
          </template>
          WeChat
        </MButton>
        <MButton o="error">
          <template #icon>
            <div i-carbon-music />
          </template>
          Music
        </MButton>
      </div>
      <div fsc gap-2>
        <MButton disabled o="primary">
          Disabled
        </MButton>
        <MButton disabled o="secondary">
          Disabled
        </MButton>
        <MButton disabled o="success">
          Disabled
        </MButton>
        <MButton disabled o="warning">
          Disabled
        </MButton>
        <MButton disabled o="error">
          Disabled
        </MButton>
      </div>
    </div>
  </div>
</template>
