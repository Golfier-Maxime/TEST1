<script setup>
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import MyCard2 from '@/components/MyCard2.vue'
import MyTitle from '@/components/elements/MyTitle.vue'
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import { client } from '@/utils/axios'

// Modifier les deux fonctions pour executer 2 requêtes dans chacune, l'une après l'autre.
// Récupérer toutes les recettes
// Récupérer toutes les recettes de la cuisine 1 -> /recipes/cuisine/:cuisineId

const getRecipesThen = () => {
  // 1er appel
  fetch(import.meta.env.VITE_API_URL + '/recipes')
    .then((response) => response.json())
    .then((recipes) => {
      // Puis le 2ème lorsque le 1er est terminé
      fetch(import.meta.env.VITE_API_URL + '/recipes/cuisine/1')
        .then((response) => response.json())
        .then((cuisineRecipies) => console.log({ recipes, cuisineRecipies }))
    })
}

const recipes = ref([])

const getRecipes = async () => {
  const response = await client.get('/recipes')
  return response.data
}

// Retourner un tableau des noms des recettes en utilisant recipes.map
// ["Spaghetti Bolognese", "Vegan Stir-Fry", "Updated Spaghetti name", "Riz cantonais", ...]
// Retourner un tableau des recettes dont le titre contient « Spaghetti » en utilisant recipes.filter
// ["Spaghetti Bolognese", "Updated Spaghetti name"]
// Retourner un boolean qui dit si une de vos recettes est du goal_id 1 en utilisant recipes.some
// true
const recipesNames = computed(() => {
  return recipes.value.map((item) => item.recipe_name)
})

const spaghettiRecipes = computed(() => {
  return recipes.value.filter((item) => item.recipe_name.includes('Spaghetti'))
})

const hasGoalId1Long = computed(() => {
  return recipes.value.some((item) => {
    if (item.goal_id === 1) {
      return true
    } else {
      return false
    }
  })
})

const hasGoalId1 = computed(() => {
  return recipes.value.some((item) => item.goal_id === 1)
})

onMounted(async () => {
  recipes.value = await getRecipes()
})
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
      <!-- <ul>
        <li v-for="(recipe, index) in recipes" :k>{{ recipe.recipe_name }}</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <p>{{ recipes }}</p>
      <p>{{ recipesNames }}</p>
      <p>{{ spaghettiRecipes }}</p>
      <p>{{ hasGoalId1 }}</p>
      <p>{{ hasGoalId1Long }}</p> -->
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
          <div class="card__c1" v-for="recipe in recipes">
            <MyCard2
              :title="recipe.recipe_name"
              :desc="recipe.recipe_description"
              prix="5.15"
              :imageSrc="recipe.image_url"
            ></MyCard2>
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
  margin-top: rem(16);
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
