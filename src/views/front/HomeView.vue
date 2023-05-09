<template>
  <RouterView></RouterView>
  <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  data() {
    return {};
  },
  components: { FooterComponent }
};
</script>
