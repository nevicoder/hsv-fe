
<script setup>
const props = defineProps({
    post: Object,
});
</script>

<template>
    <article>
        <img class="thumbnail" v-bind:src="post.thumbnail" />
        <div>
            <routerLink :to="`/post/${post.postId}`">{{ post.title }}</routerLink>
            <p class="detail" v-html="post.content"></p>
        </div>
    </article>
</template>

<style scoped>
article:hover,
article:focus,
article:active {
    transform: scale(1.05);
}

article {
    display: flex;
    box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.25);
    margin: 3rem 0;
    background-color: var(--dark-color);
    border-radius: var(--border-radius);
    height: 200px;

    /* transform: perspective(1px) translateZ(0); */
    /* box-shadow: 0 0 1px transparent; */
    transition-duration: 0.3s;
    transition-property: box-shadow, transform;
}

article:hover {
    box-shadow: 0px 0px 10px 5px rgba(74, 85, 104, 0.25);
}

a {
    font-size: 2rem;
    font-weight: bold;
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