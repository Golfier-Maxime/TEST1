<script setup>
import { computed } from 'vue'
import IconCommunity from '../icons/IconCommunity.vue'
import IconDocumentation from '../icons/IconDocumentation.vue'
import IconEcosystem from '../icons/IconEcosystem.vue'
import IconSupport from '../icons/IconSupport.vue'
import IconTooling from '../icons/IconTooling.vue'
import IconCF from '../icons/IconCF.vue'
import IconFC from '../icons/IconFC.vue'
import IconCamion from '../icons/IconCamion.vue'
import IconLeftArrow from '../icons/IconLeftArrow.vue'
import IconRightArrow from '../icons/IconRightArrow.vue'
import IconArrow from '../icons/IconArrow.vue'

const props = defineProps({
  name: String,
  color: String
})

const className = computed(() => ({
  ' -orange': props.color === 'orange',
  ' -light-orange': props.color === 'light-orange',
  ' -black': props.color === 'black'
}))

const getIcon = computed(() => {
  switch (props.name) {
    case 'community':
      return IconCommunity
    case 'documentation':
      return IconDocumentation
    case 'ecosystem':
      return IconEcosystem
    case 'support':
      return IconSupport
    case 'cf':
      return IconCF
    case 'fc':
      return IconFC
    case 'camion':
      return IconCamion
    case 'leftarrow':
      return IconLeftArrow
    case 'rightarrow':
      return IconRightArrow
    case 'arrow':
      return IconArrow
    default:
      return IconTooling
  }
})
</script>

<template>
  <i class="icon" :class="className">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  background: $white;
  border-radius: 100%;
  box-shadow: 0 0 rem(5) 0 $gray;
  display: inline-flex;
  height: rem(50);
  justify-content: center;
  width: rem(50);
  stroke: black;

  &.-orange {
    background-color: $primary-color;
    fill: white;
    stroke: white;
  }
  &.-light-orange {
    background-color: #f5ddc4;
    fill: $primary-color;
    stroke: $primary-color;
    height: 98px;
    width: 98px;
    svg {
      scale: 2.2;
    }
  }
  &.-black {
    background-color: black;
    fill: white;
    stroke: white;
  }
}
</style>
