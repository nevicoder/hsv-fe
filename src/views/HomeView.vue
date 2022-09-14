<script setup>
import { ref,onMounted, } from 'vue'
import router from "../router"
import Post from "../components/App-Post.vue"
import Pagination from "../components/AppPagination"
const props = ref([])
    fetch(`http://localhost:9696/most-viewed/`).then(res => res.json()).then(data => {
        props.value = data
        console.log(data)
    })

// const getPosts = ($event) => {
//     router.push({ path: `/posts/${$event}` })
//     fetch(`http://localhost:9696/posts/${$event}`).then(res => res.json()).then(data => {
//         props.value = data
//     })

// }
</script>

<template>
    <div class="content">
        <div class="posts" @changePage="changePage">
            <h4>Bài viết được xem nhiều nhất</h4>
            <ul>
                <li v-for="post in props.posts" :key="post.id">
                    <Post :post="post" />
                </li>
            </ul>
        </div>
    </div>
    <!-- <Pagination :props="props" :getPosts="getPosts" /> -->
</template>

<style scoped>
.posts {
    margin-top: 5rem;
}
</style>