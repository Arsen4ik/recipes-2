<template>
  <div class="favorite" v-if="item.isFavorite">
    <img :src="item.image" alt="" />
    <div>
      <h3>{{ item.name }}</h3>
      <p>Difficulty: {{ item.difficulty }}</p>
      <p>Cuisine: {{ item.cuisine }}</p>
      <button
        :class="item.isWatched ? 'watched' : 'unwatched'"
        @click="recipesStore.changeFavoriteIsWatched(item.id)"
      >
        {{ item.isWatched ? "watched" : "unwatched" }}
      </button>
      <button @click="recipesStore.removeFavorite(item.id)">Remove</button>
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

// const isWatched = () => {
//   for (let favorite in recipesStore.favorite) {
//     if (favorite.id === item.id) return "watched";
//   }
//   return "unwatched";
// };
</script>
<style lang="scss" scoped>
.favorite {
  width: 100%;
  height: 285px;
  display: flex;
  flex-direction: row;
  border-radius: 25px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  img {
    width: 253px;
    border-radius: 25px 0 0 25px;
    object-fit: cover;
  }

  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 20px 10px;
    border-radius: 0 25px 25px 0;
    gap: 5px;

    h3 {
      font-size: 16px;
      font-weight: 700;
    }

    button {
      width: fit-content;
      padding: 10px 25px;
      border-radius: 25px;
      margin: 0 auto;
      border: none;
      font-weight: 700;
      font-size: 16px;

      &:hover {
        color: white;
      }
    }

    button:first-of-type {
      margin-top: auto;
      margin-bottom: 15px;
      transition: all ease-in-out 0.25s;
    }

    button:last-of-type {
      background-color: #ff0404;
    }
  }
}

.watched {
  background-color: #6fff8f;
}

.unwatched {
  background-color: #85d3ff;
}
</style>
