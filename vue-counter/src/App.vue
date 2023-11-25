<script setup>
  import { ref } from "vue";
  const count = ref(0);

  const addCount = () => {
    count.value++
  }

  const substractCount = () => {
    count.value--
  }
</script>

<template>
  <div class="container">
    <h4>The current count is...</h4>
    <h1 id="count">{{ count }}</h1>
    <div class="buttons">
      <button id="add" @click="addCount()">+</button>
      <button id="minus" @click="substractCount()">-</button>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: "Helvetica Neue", sans-serif;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

h4 {
  color: black;
  text-align: center;
}

h1 {
  font-size: 5em;
  color: #333;
  margin-bottom: 30px;
  user-select: none;
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: center;
}

.buttons button {
  font-size: 1.2em;
  padding: 15px 30px;
  margin: 0 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
  letter-spacing: 1px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

#add {
  background-color: #4caf50;
}

#add:hover {
  background-color: #43a047;
}

#minus {
  background-color: #f44336;
}

#minus:hover {
  background-color: #d32f2f;
}
</style>
