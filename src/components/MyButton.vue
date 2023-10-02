<template>
  <div>
    <button v-bind:class="className">Order Now</button>
  </div>
</template>
<script>
export default {
  props: {
    content: String,
    href: String,
    size: String,
    variant: String,
  },
  data() {
    return {
      className: `buttonOrder ${this.variant === "rounded" ? "-rounded" : ""} ${
        this.size === "small" ? "-small" : ""
      }`,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/_variables.scss";

.buttonOrder {
  border-radius: 15px;
  background-color: $primary-color;
  border: none;
  color: white;
  font-size: $reg-font-size;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 33px;
  padding-bottom: 33px;
  padding-right: 67px;
  padding-left: 67px;
}
</style>
