<template>
  <main>
    <header>
      <h2>Recipes</h2>
      <ul>
        <router-link to="/"><li>All recipes</li></router-link>
        <router-link to="/favorite"><li>Favorite</li></router-link>
      </ul>
    </header>
    <router-view></router-view>
  </main>
</template>
<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>
<style lang="scss" scoped>
header {
  width: 100vw;
  height: 150px;
  padding: 25px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 5px solid #ffa032;

  h2 {
    height: 100%;
    width: 296px;
    font-size: 48px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 40px;
    list-style-type: none;
    align-items: center;

    a {
      color: #ffa032;
      transition: all ease-in-out 0.15s;

      &:hover {
        color: #ff4f04;
        transform: scale(1.05);
      }
    }
    li {
      width: 150px;
      border-radius: 25px;
      padding: 25px 12.5px;
      font-size: 16px;
      text-align: center;
      font-weight: 700;
    }
  }
}
</style>
<!-- background-color: #ffa032; -->
<!-- background-color: #ff4f04; -->
