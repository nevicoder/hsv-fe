

<script setup>
import { ref } from 'vue'

import Logo from "./Header-Logo.vue"

const open = ref(false)
const isLogin = ref(true)

</script>

<style scoped>
nav {
    margin: 0 auto;
    width: 80%;
    margin-top: 4rem;
}

ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

li {
    color: var(--light-color);
    font-size: 1.3rem;
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(35, 43, 58, 0.98);
}

form {
    padding: 2rem;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--medium-color);
    border-radius: var(--border-radius);
}

button {
    width: 100%;
    font-size: 1.5rem;
}

span {
    margin: 2rem 0;
}

label {
    font-size: 1.5rem;
}

a {
    margin: 1rem 0;
    font-size: 1.5rem;
}

.field {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}
</style>

<template>
    <nav>
        <ul>
            <li><routerLink to="/">Trang chủ</routerLink></li>

            <li><routerLink to="/posts/1">Tất cả bài viết</routerLink></li>
            <li><routerLink to="/most-viewed">Bài viết được xem nhiều nhất</routerLink></li>
            <li><routerLink to="/categories">Bài viết theo chủ đề</routerLink></li>
            <li @click="open = true"><routerLink to="">Đăng kí / Đăng nhập</routerLink></li>

            <Teleport to="body">
                <div v-if="open" class="modal" @click.stop="open = false">
                    <form @click.stop="" v-if="isLogin" action="POST">
                        <Logo />
                        <span>ĐĂNG NHẬP</span>
                        <div class="field">
                            <label for="username">Tài khoản</label>
                            <input type="text" placeholder="Tài khoản">
                        </div>
                        <div class="field">
                            <label for="username">Mật khẩu</label>
                            <input type="password" placeholder="Mật khẩu">
                        </div>
                        <button @click.stop="login">Đăng nhập</button>
                        <a href="#" @click.stop="isLogin=!isLogin">Chưa có tài khoản? Đăng kí</a>
                    </form>
                    <form @click.stop="" v-if="!isLogin" action="POST">
                        <Logo />
                        <span>ĐĂNG KÍ</span>
                        <div class="field">
                            <label for="username">Tài khoản</label>
                            <input type="text" placeholder="Tài khoản">
                        </div>
                        <div class="field">
                            <label for="password">Mật khẩu</label>
                            <input type="password" placeholder="Mật khẩu">
                        </div>
                        <div class="field">
                            <label for="password2">Nhập lại mật khẩu</label>
                            <input type="password" placeholder="Nhập lại mật khẩu">
                        </div>
                        <button @click.stop="login">Đăng nhập</button>
                        <a href="#" @click.stop="isLogin=!isLogin">Đã có tài khoản? Đăng nhập</a>
                    </form>
                </div>
            </Teleport>

        </ul>
    </nav>
</template>