<template>
  <div class="recipe">
    <img :src="item.image" alt="" />
    <div>
      <h3>{{ item.name }}</h3>
      <p>Difficulty: {{ item.difficulty }}</p>
      <p>Cuisine: {{ item.cuisine }}</p>
      <button @click="recipesStore.addFavorite(item.id)">
        Add to favorite
      </button>
    </div>
  </div>
</template>
<script setup>
const { item } = defineProps({
  item: Object,
});
// console.log(item);
import { useRecipesStore } from "@/stores/recipesStore.js";
// import router from "vue-router";

const recipesStore = useRecipesStore();

// console.log(router);
// console.log(window.location.pathname);
</script>
<style lang="scss" scoped>
.recipe {
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  border-radius: 25px;

  img {
    width: 100%;
    height: 176px;
    object-fit: cover;
    border-radius: 25px 25px 0 0;
  }

  div {
    height: calc(100% - 176px);
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3,
    h4 {
      font-weight: 700;
    }

    h3 {
      font-size: 16px;
    }

    h4 {
      font-size: 13px;
    }

    ul {
      padding: 0 18px;
    }

    p,
    li {
      font-size: 12px;
    }
  }

  button {
    border-radius: 25px;
    padding: 10px;
    font-weight: 700;
    width: 80%;
    margin: 15px auto 0;
    /*
    background-color: #ff4f04;
    color: white;
    */
    border: 3px solid white;
    background-color: inherit;
    color: #ff4f04;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 0.15s;
    margin-top: auto;

    &:hover {
      cursor: pointer;
      border: 3px solid #ff4f04;
    }
    &:active {
      color: #ffa032;
      border: 3px solid #ffa032;
    }
  }

  div:last-of-type {
    gap: 3px;
  }
}
</style>
