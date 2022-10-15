<script setup>
import { ref, onBeforeMount } from 'vue'
import { useUserStore } from '@/store/userStore';
import router from "../router"
import spinner from "@/components/App-spinner.vue"


import Post from "../components/App-Post.vue"
import Pagination from "../components/AppPagination"
import { useRoute } from 'vue-router'

const store = useUserStore();
const route = useRoute()
const props = ref([])
onBeforeMount(async () => {
    store.setLoading()
    await fetch(`https://highsocietyvn.herokuapp.com/posts/${route.params.page}`).then(res => res.json()).then(data => {
        props.value = data
        store.setLoading()

    })
})


const getPosts = ($event) => {
    store.setLoading()

    router.push({ path: `/posts/${$event}` })
    fetch(`https://highsocietyvn.herokuapp.com/posts/${$event}`).then(res => res.json()).then(data => {
        props.value = data
        store.setLoading()

    })

}
</script>

<template>
    <spinner v-if="store.isLoading" />

    <div class="content" v-if="!store.isLoading">
        <div class="posts" @changePage="changePage">
            <ul>
                <li v-for="post in props.posts" :key="post.id">
                    <Post :post="post" />
                </li>
            </ul>
        </div>
        <Pagination :props="props" :getPosts="getPosts" />
    </div>
</template>

<style scoped>
.posts {
    margin-top: 5rem;
}
</style>