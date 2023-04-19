<script>
import FooterContent from './FooterContent.vue';
import HeaderContent from './HeaderContent.vue';

export default {
  components: {
    HeaderContent,
    FooterContent
  },
}
</script>

<template>
  <HeaderContent />
  <slot></slot>
  <FooterContent />
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
</style>