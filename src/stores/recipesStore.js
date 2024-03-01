import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipesStore', {
  state: (() => ({
    recipes: [],
    // favorite: []
  })),
  getters: {
    getFavoriteLength() {
      return this.recipes.reduce((acc, recipe) => recipe.isFavorite ? acc + 1 : acc, 0)
    },
  },
  actions: {
    async asyncLoad() {
      const res = await fetch('https://dummyjson.com/recipes')
      const data = await res.json()
      this.recipes = data.recipes
    },
    addFavorite(id) {
      // this.favorite.push({ id, watched: false })
      // console.log(this.favorite);
      const chosenRecipe = this.recipes.find(recipe => recipe.id === id)
      chosenRecipe.isFavorite = true
    },
    removeFavorite(id) {
      // this.favorite.splice()
      const chosenRecipe = this.recipes.find(recipe => recipe.id === id)
      chosenRecipe.isFavorite = false
    },
    changeFavoriteIsWatched(id) {
      // console.log(id);
      const chosenRecipe = this.recipes.find(recipe => recipe.id === id)
      chosenRecipe.isWatched = !chosenRecipe.isWatched
      // const newFavorite = this.favorite.findIndex(favorite => favorite.id === id)
      // this.favorite.splice(newFavorite, 1, { id: this.favorite[newFavorite].id, watched: !this.favorite[newFavorite].watched })
      // console.log(this.favorite);
    }
  }
})
