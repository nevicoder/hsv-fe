

<script setup>
    import Logo from "./Header-Logo.vue"
</script>

<template>
    <header>
        <div class="social">
            <a href="/">
                <font-awesome-icon class="icon" icon="fa-brands fa-facebook"></font-awesome-icon>
            </a>
            <a href="/">
                <font-awesome-icon class="icon" icon="fa-brands fa-tiktok"></font-awesome-icon>
            </a>
            <a href="/">
                <font-awesome-icon class="icon" icon="fa-brands fa-youtube"></font-awesome-icon>
            </a>
        </div>
        <Logo />
        <div class="search">
            <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass"></font-awesome-icon>
            <input type="text" placeholder="SEARCH" />

        </div>
    </header>

</template>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.social {
    width: 15%;
    height: 100%;

}
.icon {
    font-size: 1.5rem;

}
.social a:not(:first-child) {
    margin-left: 0.5rem;
}
/* Standard syntax */
.search {
    width: 15%;
    height: 100%;

    position: relative;
}
.search input {

    width: 100%;
    height: 100%;
    float: right;
    background-color: transparent;
    text-align: center;
    padding: 5px 30px 5px 5px;
    font-size: 1.2rem;

}

input:hover {
    background-color: var(--medium-color);
}

.search .icon {
    position: absolute;
    right: 0;
    font-size: 1.2rem;
    padding: 5px;
}

::-webkit-input-placeholder {
    text-align: center;
    color: var(--text-color);
    opacity: 0.5;
}

:-moz-placeholder {
    color: var(--text-color);
    opacity: 0.5;

    text-align: center;
}
</style>