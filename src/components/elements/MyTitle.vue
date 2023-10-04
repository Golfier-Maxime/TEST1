<script setup>
import { computed } from 'vue'

const props = defineProps({
  content: String,
  size: String
})

const className = computed(() => ({
  ' -weight': props.size === 'weight',
  ' -small': props.size === 'small'
}))
</script>

<template>
  <div>
    <h1 class="title" :class="className">{{ content }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-family: Arial, Helvetica, sans-serif;
  &.-weight {
    font-weight: 700;
    font-size: $medium-font-size;
  }
  &.-small {
    font-weight: 400;
  }
}
</style>
