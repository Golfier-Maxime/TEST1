<script setup>
import MyTitle from '../components/elements/MyTitle.vue'
import MyIcon from '../components/elements/MyIcon.vue'

defineProps({
  imageSrc: String,
  imageAlt: String,
  title: String,
  prix: String,
  desc: String
})
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img class="card__image--size" :src="imageSrc" :alt="imageAlt" />
    </div>
    <div class="card__c1">
      <MyTitle size="weight" :content="title" class="card__c1--title"></MyTitle>
      <p class="card__c1--desc">{{ desc }}</p>
      <p class="card__c1--prix">
        {{ prix }}
      </p>
    </div>
    <div class="card__arrow">
      <MyIcon name="rightarrow" color="black"></MyIcon>
      <MyIcon name="leftarrow"></MyIcon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  font-family: Arial, Helvetica, sans-serif;
  max-width: 278px;
  max-height: 390px;

  .card__image--size {
    width: 238px;
    height: 206px;
    margin-left: 20px;
  }
  .card__arrow {
    margin-top: -25px;
    margin-bottom: -100px;
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  .card__c1 {
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    margin-top: -100px;
    padding-top: 100px;
    border-radius: rem(20);
    box-shadow:
      -2px 0px 10px 1px rgb(200, 200, 200),
      2px 0px 10px 1px rgb(200, 200, 200);
  }
  .card__c1--title {
    margin-left: 20px;
    margin-top: rem(32);
    display: flex;
    justify-content: center;
  }
  .card__c1--desc {
    margin-left: 20px;
    margin-top: rem(32);
    display: flex;
    justify-content: center;
  }
  .card__c1--prix {
    padding-bottom: rem(32);
    margin-left: 20px;
    margin-top: rem(16);
    display: flex;
    justify-content: center;

    &::before {
      content: '$ ';
      color: red;
    }
  }
}
</style>
