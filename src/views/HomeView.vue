<script setup>
import MyButton from "@/components/MyButton.vue";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
</script>

<template>
  <div class="marge">
    <MyButton></MyButton>
    <DefaultLayout>
      <template v-slot:header> </template>
      <h1>Hello Word</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quos quis
        beatae dolorum debitis corrupti et sint mollitia inventore similique.
        Alias perspiciatis provident velit optio error necessitatibus numquam
        dolorem expedita.
      </p>
    </DefaultLayout>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.marge {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
