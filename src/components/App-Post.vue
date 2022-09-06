
<script setup>
const props = defineProps({
    post: Object,
});
</script>

<template>
    <a href="/">
        <img class="thumbnail" v-bind:src="post.thumbnail" />
        <div>
            <h2>{{ post.title }}</h2>
            <p class="detail" v-html="post.content"></p>
        </div>
    </a>
</template>

<style scoped>
a {
    display: flex;
    box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.25);
    margin: 1rem 0;
    background-color: var(--dark-color);
    border-radius: var(--border-radius);
}


img {
    width: 30%;
}

div {
    padding: 1rem;
    width: 70%;


}

.detail {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.5rem;
}
</style>