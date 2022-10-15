<script setup>
import { useUserStore } from "./store/userStore"
import { onBeforeMount } from "vue"
import Header from "./components/App-Header.vue"
import Navbar from "./components/Header-Navbar.vue"
import Footer from "./components/App-Footer.vue"

const store = useUserStore();
onBeforeMount(() => {
  const userInfo = localStorage.getItem("userInfo");
  console.log(userInfo)
  if (userInfo) store.setUserInfo(JSON.parse(userInfo))
})
</script>
  
<template>
  <div id="wrapper">
    <Header />
    <Navbar />
    <router-view>
    </router-view>
    <Footer />
  </div>

</template>
  
<style>
/* scroll bar */
::-webkit-scrollbar {
  width: 15px;
  background-color: var(--light-color);
}

::-webkit-scrollbar-thumb {
  background: var(--dark-color);
}

:root {
  font-family: 'Poppins', sans-serif;
  /* font-family: 'Rubik Maze', cursive; */
  /* --dark-color: rgb(35, 43, 58); */
  --dark-color: rgb(22, 28, 42);
  --medium-color: rgb(40, 50, 66);
  --light-color: rgb(74, 85, 104);
  /* --text-color: rgb(174, 213, 224); */
  --text-color: rgb(137, 157, 186);
  --border-radius: 6px;
  /* 
      --primary-color: hsl(219, 24%, 22%);
      --secondary-color: #161c2a;
      --text-color: #a0aec0;
      /* --text-color: #9dc7e0; */
}

::placeholder {
  font-size: 1.5rem;
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--text-color);
  opacity: 0.3;
  /* Firefox */
}

:-ms-input-placeholder {
  font-size: 1.5rem;
  color: var(--text-color);
  opacity: 0.3;
}

::-ms-input-placeholder {
  font-size: 1.5rem;
  color: var(--text-color);
  opacity: 0.3;
}

* {
  font-size: 20px;
  color: var(--text-color);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  /* height: -webkit-fill-available; */
  font-size: 62.5%;
  background: linear-gradient(to bottom right,
      var(--medium-color),
      var(--dark-color));
  font-family: "Roboto", sans-serif;
}

body {
  color: var(--text-color);
  /* background-color: #fff; */
  min-height: 100vh;
}

#wrapper {
  margin: 0 auto;
  width: 1000px;
}

input {
  padding: 0.5rem 1rem;
}

input,
textarea {
  color: var(--text-color);
  font-size: 1.5rem;
  outline: none;
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--light-color);
}

button {
  padding: 1rem;
  border-radius: var(--border-radius);
  background-color: var(--dark-color);
  border: 0.5px solid rgba(174, 213, 224, 0.5)
}

a {
  color: var(--text-color);
  text-decoration: none;
}

li {
  list-style-type: none;
}

.content {
  min-height: 1000px;
}
</style>
  