<template>
    <div class="example-five">
        <vue-awesome-paginate :total-items="props.noOfPosts" :items-per-page="props.perPage" :on-click="getPosts">

            <template #prev-button>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="8" height="8" viewBox="0 0 24 24">
                        <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                    </svg>
                </span>
            </template>

            <template #next-button>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="8" height="8" viewBox="0 0 24 24">
                        <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                    </svg>
                </span>
            </template>
        </vue-awesome-paginate>
    </div>
</template>
  
<script setup>
const { props, getPosts } = defineProps({
    props: Object,
    getPosts: Function
});

</script>
  
<style>
.example-five .pagination-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: var(--dark-color);
    border-radius: 5px;
    padding: 10px 0px;
}

.example-five .paginate-buttons {
    width: 40px;
    height: 40px;
    margin-inline: 5px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    border-radius: 2px;
}

.example-five .back-button {
    width: 70px;
}

.example-five .next-button {
    width: 70px;
}

.example-five .back-button svg {
    transform: rotate(180deg);
}

.example-five .active-page {
    background-color: var(--medium-color);
    color: #fff;
}

.example-five .paginate-buttons:hover {
    background-color: var(--light-color);
}

.example-five .active-page:hover {
    background-color: #3b8cc3;
    color: #fff;
}

.example-five .back-button:active,
.example-five .next-button:active {
    background-color: #dedede;
}
</style>