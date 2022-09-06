<script setup>
import { ref } from 'vue'
import Post from "./App-Post.vue"
const posts = ref([])
fetch(`http://localhost:9696/posts`).then(res => res.json()).then(data => {
    posts.value = data.posts
})
</script>
<template >
    <div>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <Post :post="post" />

            </li>
        </ul>
    </div>
</template>
<style scoped>
    div{
        margin-top: 5rem;
    }
ul {
    display: flex;
    flex-direction: column;
}
</style>