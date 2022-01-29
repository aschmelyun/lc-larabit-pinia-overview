<template>
  <div class="wrapper">
    <h1>All Plants</h1>
    <div class="row">
      <div class="plant" v-for="(plant, index) in plants" :key="index">
        <img :src="plant.image">
        <h2>{{ plant.name }}</h2>
        <p>{{ plant.description }}</p>
        <button @click="collectionStore.addPlantToCollection(plant)">Add To Collection</button>
      </div>
    </div>
    <div class="collection">
      <h1>My Collection</h1>
      <div class="row">
        <div class="item" v-for="(item, index) in collectionStore.collection" :key="index">
          <h3>{{ item.name }}</h3>
          <p><strong>Quantity: {{ item.quantity }}</strong></p>
          <button @click="collectionStore.removePlantFromCollection(index)">Remove One</button>
        </div>
      </div>
    </div>
    <div class="user">
      <h1>{{ collectionStore.userFullName }}</h1>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useCollectionStore } from './stores/collection';

const plants = [
  {
    name: 'Monstera',
    image: 'https://unsplash.com/photos/70l1tDAI6rM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8bW9uc3RlcmF8fDB8fHx8MTY0MzMyMDAwNg&force=true&w=640',
    description: 'A species of evergreen tropical vines and shrubs that are native to Central America.'
  },
  {
    name: 'Pothos',
    image: 'https://unsplash.com/photos/S_J4FRUo5ZQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8cG90aG9zfHwwfHx8fDE2NDMzMjA1ODQ&force=true&w=640',
    description: 'A species in the arum family Araceae, native to Mo\'orea in French Polynesia.'
  },
  {
    name: 'Dracaena',
    image: 'https://unsplash.com/photos/rGpZ6RKefXU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8c25ha2UlMjBwbGFudHx8MHx8fHwxNjQzMzIwNzEw&force=true&w=640',
    description: 'Flowering plants in Asparagaceae, native to tropical West Africa.'
  }
];

const collectionStore = useCollectionStore();
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  max-width: 90%;
  margin: 2rem auto;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.plant {
  width: 28%;
  border: 1px solid #dcdcdc;
  padding: 1.5rem 1rem;
}
.plant > h2 {
  margin-bottom: 0;
}
.plant > p {
  margin-top: 0.5rem;
}
.plant > img {
  width: 128px;
  height: 128px;
  object-fit: cover;
  border-radius: 50%;
}
.collection {
  margin: 3rem auto 0;
  max-width: 50%;
}
.collection .row {
  justify-content: center;
}
.collection .item {
  border: 1px solid #dcdcdc;
  padding: 0 1rem 1rem;
  margin: 0 1rem;
}
</style>
