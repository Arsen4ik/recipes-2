<template>
  <section>
    <h1>All recipes</h1>
    <div class="filter" v-if="recipesStore.recipes.length">
      <p>Search recipes</p>
      <input
        type="text"
        placeholder="enter some recipe"
        v-model="inputRecipe"
        @keydown.enter="filterRecipes"
      />
    </div>
    <div class="cards">
      <p v-if="!recipesStore.recipes.length" class="loader">🌀</p>
      <recipe-list
        :list="recipesStore.recipes"
        v-else-if="!inputedRecipe"
      ></recipe-list>
      <recipe-list
        :list="
          recipesStore.recipes.filter((recipe) =>
            recipe.name.toLocaleLowerCase().includes(inputedRecipe)
          )
        "
        v-else-if="
          inputedRecipe &&
          recipesStore.recipes.filter((recipe) =>
            recipe.name.toLocaleLowerCase().includes(inputedRecipe)
          ).length
        "
      ></recipe-list>
      <div v-else class="error">
        <p>❌</p>
        <p>- ничего не найдено...</p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRecipesStore } from "@/stores/recipesStore.js";
// eslint-disable-next-line no-unused-vars
import RecipeList from "../components/RecipeList.vue";

const recipesStore = useRecipesStore();

let inputRecipe = ref("");
let inputedRecipe = ref("");
// let recipeList = reactive([]);

const filterRecipes = () => {
  // recipeList
  //   console.log(inputRecipe.value);
  inputedRecipe.value = inputRecipe.value.toLocaleLowerCase();
};

onMounted(() => {
  recipesStore.recipes.length || recipesStore.asyncLoad();
  //   recipeList = recipeList.recipes;
});
</script>
<style lang="scss" scoped>
section {
  h1 {
    font-size: 48px;
    padding: 40px 0;
    text-align: center;
  }
  .filter {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 425px;
    gap: 10px;

    p {
      font-weight: 700;
    }

    input {
      border: 2px solid black;
      border-radius: 25px;
      font-weight: 700;
      padding: 15px;
      outline: none;

      &::placeholder {
        transition: all ease-in-out 0.25s;
      }
      &:focus {
        &::placeholder {
          color: rgb(169, 169, 169);
        }
      }
    }
  }
  .cards {
    margin-top: 50px;
  }

  .loader {
    text-align: center;
    font-size: 70px;
    padding: 50px;
    animation: spin 1s linear infinite;
  }

  .error {
    display: flex;
    flex-direction: row;
    width: fit-content;
    gap: 20px;
    margin: 0 auto;

    p {
      text-align: center;
      font-size: 32px;
      font-weight: 700;
    }
    p:first-of-type {
      animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes ping {
    75%,
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
}
</style>
@/stores/recipesStore.js
