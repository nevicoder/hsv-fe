<script setup>
import { ref, onBeforeMount } from 'vue'
import { useUserStore } from '@/store/userStore';

import Post from "../components/App-Post.vue"
import spinner from "@/components/App-spinner.vue"

const store = useUserStore();
const props = ref([])
onBeforeMount(() => {
    store.setLoading();
    fetch(`https://highsocietyvn.herokuapp.com/most-viewed/`).then(res => res.json()).then(data => {
        props.value = data
        store.setLoading();
    })
})


  // const getPosts = ($event) => {
  //     router.push({ path: `/posts/${$event}` })
  //     fetch(`http://localhost:9696/posts/${$event}`).then(res => res.json()).then(data => {
  //         props.value = data
  //     })
  // }
</script>
  
<template>
    <spinner v-if="store.isLoading" />
    <div class="content" v-if="!store.isLoading">
        <div class="posts" @changePage="changePage">
            <h4>Bài viết được xem nhiều nhất</h4>
            <ul>
                <li v-for="post in props.posts" :key="post.id">
                    <Post :post="post" />
                </li>
            </ul>
        </div>
    </div>
</template>
  
<style scoped>
.posts {
    margin-top: 5rem;
}
</style>