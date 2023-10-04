<script setup>
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import MyCard2 from '@/components/MyCard2.vue'
import MyTitle from '@/components/elements/MyTitle.vue'
</script>

<template>
  <DefaultLayout>
    <template #header>
      <!-- <nav>
        <ul>
          <li><a href="#">Nav link 1</a></li>
          <li><a href="#">Nav link 2</a></li>
          <li><a href="#">Nav link 3</a></li>
        </ul>
      </nav> -->
    </template>
    <template #article>
      <div class="article__title">
        <MyTitle content="The Fastest" size="big"></MyTitle>
        <MyTitle content="Delivery" size="big"></MyTitle>
        <MyTitle content="In Your City" size="big"></MyTitle>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed proin amet a
          vestibulum enim volutpat lacus. Volutpat arcu sit sed tortor etiam volutpat ipsum.
        </p>
      </div>
    </template>

    <template #aside>
      <div class="hero2">
        <img src="public\Abstract.svg" alt="" />
        <div>
          <div class="card__c1">
            <MyCard2
              title="Burger"
              desc="Mushroom Sauce"
              prix="$5.15"
              imageSrc="burger.png"
            ></MyCard2>
            <MyCard2
              title="Food Combo"
              desc="Mushroom Sauce"
              prix="$9.15"
              imageSrc="Combo.png"
            ></MyCard2>
          </div>
          <div class="card__c2">
            <MyCard2
              title="Pizza"
              desc="Mushroom Sauce"
              prix="$9.15"
              imageSrc="pizza.png"
            ></MyCard2>
            <MyCard2 title="Cake" desc="Mushroom Sauce" prix="$5.15" imageSrc="pure.png"></MyCard2>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <!-- <MyButton href="/about" variant="rounded">My link Button</MyButton> -->
    </template>
  </DefaultLayout>

  <!-- <MyButton size="small" href="/about">My Small Button</MyButton>
  <MyButton href="/about">My link Button</MyButton>
  <MyButton variant="rounded" >My rounded Button</MyButton> -->
  <p></p>
</template>

<style lang="scss">
.article__title {
  margin-top: 200px;
  margin-left: rem(100);
}
.text {
  font-size: 18px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
}
.card__c1 {
  display: flex;
  gap: 20px;
}
.card__c2 {
  display: flex;
  gap: 20px;
  margin-top: rem(80);
}
.hero2 {
  display: flex;
}
</style>
