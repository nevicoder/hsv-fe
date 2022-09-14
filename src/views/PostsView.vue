<script setup>
import { ref, onMounted, } from 'vue'
import router from "../router"
import Post from "../components/App-Post.vue"
import Pagination from "../components/AppPagination"
import { useRoute } from 'vue-router'

const route = useRoute()
const props = ref([])
console.log(route.params.page)
fetch(`http://localhost:9696/posts/${route.params.page}`).then(res => res.json()).then(data => {
    props.value = data
    console.log(data)
})

const getPosts = ($event) => {
    router.push({ path: `/posts/${$event}` })
    fetch(`http://localhost:9696/posts/${$event}`).then(res => res.json()).then(data => {
        props.value = data
    })

}
</script>

<template>
    <div class="content">
        <div class="posts" @changePage="changePage">
            <ul>
                <li v-for="post in props.posts" :key="post.id">
                    <Post :post="post" />
                </li>
            </ul>
        </div>
        <Pagination v-if="props.posts.length > 0" :props="props" :getPosts="getPosts" />
    </div>
</template>

<style scoped>
.posts {
    margin-top: 5rem;
}
</style>