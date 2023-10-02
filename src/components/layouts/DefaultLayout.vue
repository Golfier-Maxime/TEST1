<template>
  <div class="layout">
    <header class="layout__header">
      <slot name="header"></slot>
    </header>

    <aside class="layout__aside">
      <slot name="aside"></slot>
    </aside>
    <article class="layout__article">
      <slot name="article"></slot>
    </article>

    <footer class="layout__footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script></script>

<style lang="scss" scoped>
.layout {
  min-height: 120px;
  display: grid;
  grid-template:
    "header"
    "aside"
    "article"
    "footer";
  @include medium-up {
    grid-template:
      "header header header"
      "aside article article"
      "footer footer footer";
  }
  > * {
    padding: rem(16);
  }
  &__header {
    background-color: $primary-color;
    grid-area: header;
  }
  &__aside {
    grid-area: aside;
  }
  &__article {
    grid-area: article;
  }
  &__footer {
    background-color: $primary-color;
    grid-area: footer;
  }
}
</style>
