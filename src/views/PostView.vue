<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const post = ref([])
console.log(route.params.postId)
// console.log($route)

fetch(`http://localhost:9696/post/${route.params.postId}`).then(res => res.json()).then(data => {
  console.log(data)
  post.value = data
})
</script>

<template>
<div class="content">
  
    <div class="post">
      <h1 class="post__title">{{post.title}}</h1>
      <span class="post__date">Tác giả: {{post.author}}</span>
      <span class="post__date">Ngày đăng: {{post.datePosted}}</span>
      <span class="post__views">Lượt xem: {{post.viewCounts}}</span>
      <img class="post__img" :src="post.thumbnail" />
      <div class="post__content" v-html="post.content"></div>
      <div class="post__tags">Chủ đề:
        <router-link v-for="tag in post.tags" class="post__tag" :to="`/category/${tag}`">{{tag}},</router-link>
      </div>
    </div>
</div>
</template>


<style scoped>
.post {
  margin-top: 5rem;
  box-shadow: 3px 3px 10px 5px rgb(0 0 0 / 25%);
  padding: 1rem;
  background-color: var(--secondary-color);

}

.post__title {
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
}

.post__views {
  font-size: 1.2rem;
  display: block;
  text-align: right;
}

.post__date {
  font-size: 1.2rem;

  display: block;

  text-align: right;
}

.post__img {
  margin-top: 5rem;
  width: 100%;
}

.post__content {
  margin-top: 5rem;
  word-break: break-word;
  font-size: 1.7rem;
  width: 100%;
}

.post__comment {
  background-color: var(--secondary-color);

}

.comment__list {
  margin-top: 5rem;
  box-shadow: 3px 3px 10px 5px rgb(0 0 0 / 25%);
  padding: 1rem;
}

.comment {
  display: flex;

  flex-direction: row;
}

.comment__item {
  background-color: var(--primary-color);
  padding: 2rem 2rem;
  list-style-type: none;
  font-size: 1.5rem;
}

.comment__avatar img {
  /* width: 100%; */
  width: 50px;
  object-fit: cover;
}

.comment__content {
  margin-left: 1rem;
}

.comment__item:not(:last-child) {
  margin-bottom: 1.5rem;
}

.comment__input {
  background-color: var(--secondary-color);
  width: 80%;
  height: 3rem;
}

.comment__btn {
  height: 3rem;
  background-color: var(--secondary-color);
  color: var(--text-color);
  width: 18%;
}

.comment__form {
  margin-top: 2rem;
  justify-content: space-between;
  display: flex;
  align-items: center;
}

.post__tags {
  font-size: 1.5rem;

  width: 100%;
  text-align: right;
}

.post__tag {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}
</style>