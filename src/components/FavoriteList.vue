<template>
  <div class="favorite-list" v-if="list.length">
    <favorite-item
      v-for="item in list"
      :key="item.id"
      :item="item"
    ></favorite-item>
  </div>
</template>
<script setup>
import FavoriteItem from "./FavoriteItem.vue";
const { list } = defineProps({
  list: Array,
});

// import { useRecipesStore } from "@/stores/recipesStore.js";

// const recipesStore = useRecipesStore();

// const findFavorites = () => {
//   // Object.keys(recipesStore.favorite).includes(recipe.id)
//   const favorite = recipesStore.favorite.map((favorite) => favorite.id);
//   console.log(favorite);
//   return recipesStore.recipes.filter((recipe) => favorite.includes(recipe.id));
// };
</script>
<style lang="scss" scoped>
.favorite-list {
  display: flex;
  flex-direction: column;
  width: 474px;
  margin: 0 auto 50px;
  gap: 30px;
  padding: 40px 0;
}
</style>
