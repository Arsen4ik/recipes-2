<template>
  <section>
    <h1>
      Favorite (<span>{{ recipesStore.getFavoriteLength }}</span
      >)
    </h1>
    <div class="filter" v-if="recipesStore.getFavoriteLength">
      <p>Difficulty</p>
      <select name="" id="" v-model="selectOrder">
        <option value="All" selected>All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
      </select>
    </div>
    <div class="cards">
      <p v-if="!recipesStore.getFavoriteLength" class="empty">
        🫥 - а здесь пока пусто...
      </p>
      <favorite-list
        :list="
          selectOrder === 'All'
            ? recipesStore.recipes
            : selectOrder === 'Easy'
            ? // [...recipesStore.recipes].sort(
              // (recipeA, recipeB) =>
              //    (recipeB.difficulty === 'Easy') -
              //  (recipeA.difficulty === 'Easy')
              //)
              recipesStore.recipes.filter(
                (recipe) => recipe.difficulty === 'Easy'
              )
            : //[...recipesStore.recipes].sort(
              //   (recipeA, recipeB) =>
              //   (recipeB.difficulty === 'Medium') -
              //  (recipeA.difficulty === 'Medium')
              // )
              recipesStore.recipes.filter(
                (recipe) => recipe.difficulty === 'Medium'
              )
        "
        v-else
      ></favorite-list>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import FavoriteList from "../components/FavoriteList.vue";
import { useRecipesStore } from "@/stores/recipesStore.js";
const recipesStore = useRecipesStore();
let selectOrder = ref("All");
</script>
<style lang="scss" scoped>
h1 {
  font-size: 48px;
  padding: 40px 0;
  text-align: center;

  span {
    font-size: 48px;
    color: #ff4f04;
  }
}
.cards {
  margin-top: 50px;
}
.empty {
  text-align: center;
  font-size: 30px;
  padding: 50px;
}
.filter {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 162px;
  gap: 10px;

  p {
    font-weight: 700;
  }

  select {
    border: 2px solid black;
    border-radius: 25px;
    font-weight: 700;
    padding: 15px;
    outline: none;

    option {
      transition: all ease-in-out 0.25s;
      color: gray;
    }
    &:focus {
      &::placeholder {
        color: rgb(169, 169, 169);
      }
    }
  }
}
</style>
