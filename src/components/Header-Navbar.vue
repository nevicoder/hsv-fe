<script setup>
import { ref } from 'vue'
import { useUserStore } from "../store/userStore"
import router from "../router"
import axios from "axios"
import Logo from "./Header-Logo.vue"
import spinner from "./App-spinner.vue"

const store = useUserStore()
const isLoading = ref(false)
const open = ref(false)
const isLogin = ref(true)
const username = ref()
const password = ref()
const password2 = ref()
const login = () => {
    isLoading.value = true
    axios.post('https://highsocietyvn.herokuapp.com/auth/login', {
        username: username.value, password: password.value
    })
        .then((response) => {
            console.log(response);
            if (response.data.user) {
                localStorage.setItem("userInfo", JSON.stringify(response.data.user))
                store.setUserInfo(response.data.user);
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                open.value = false
                isLoading.value = false
                store.setLoggedIn()
            }


        }, (error) => {
            console.log(error);
        });
}
const signup = () => {
    if (password.value != password2.value) { console.log("Mat khau khong giong nhau") } else {
        axios.post('https://highsocietyvn.herokuapp.com/auth/register', {
            username: username.value, password: password.value
        })
        .then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        })
    }
}

const signOut = () => {
    store.setLoggedOut();
    router.go()



}
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

button:hover {

    box-shadow: 0px 0px 10px var(--text-color);

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

a:hover {
    text-shadow: 0px 0px 10px var(--text-color);
}

.field {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}

p {
    font-size: 1.5rem;
    text-align: center;
}

p a {
    text-decoration: underline !important;

}
</style>

<template>
    <nav>
        <ul>
            <li>
                <routerLink to="/">Trang chủ</routerLink>
            </li>

            <li>
                <routerLink to="/posts/1">Tất cả bài viết</routerLink>
            </li>
            <li>
                <routerLink to="/most-viewed">Bài viết được xem nhiều nhất</routerLink>
            </li>
            <li>
                <routerLink to="/categories">Bài viết theo chủ đề</routerLink>
            </li>
            <li v-if="!store.isLoggedIn" @click="open = true">
                <routerLink to="">Đăng kí / Đăng nhập</routerLink>
            </li>
            <li v-if="store.isLoggedIn" @click="signOut">
                <routerLink to="">Đăng xuất</routerLink>
            </li>

            <Teleport to="body">
                <div v-if="open" class="modal" @click.stop="open = false">
                    <form @submit.prevent="" @click.stop="" v-if="isLogin">
                        <Logo />
                        <span>ĐĂNG NHẬP</span>
                        <spinner v-if="isLoading" />
                        <div class="field">
                            <label for="username">Tài khoản</label>
                            <input name="loginusername" type="text" placeholder="Tài khoản" v-model="username">
                        </div>
                        <div class="field">
                            <label for="password">Mật khẩu</label>
                            <input name="loginpassword" type="password" placeholder="Mật khẩu" v-model="password">
                        </div>
                        <button @click.stop="login">Đăng nhập</button>
                        <a href="#" @click.stop="isLogin=false">Chưa có tài khoản? Đăng kí</a>
                    </form>
                    <form @submit.prevent="" @click.stop="" v-if="!isLogin">
                        <Logo />
                        <span>ĐĂNG KÍ</span>
                        <div class="field">
                            <label for="username">Tài khoản</label>
                            <input name="signupusername" v-model="username" type="text" placeholder="Tài khoản">
                        </div>
                        <div class="field">
                            <label for="password">Mật khẩu</label>
                            <input name="signuppassword" type="password" placeholder="Mật khẩu" v-model="password">
                        </div>
                        <div class="field">
                            <label for="password2">Nhập lại mật khẩu</label>
                            <input type="password" v-model="password2" placeholder="Nhập lại mật khẩu">
                        </div>
                        <button @click.stop="signup">Đăng nhập</button>
                        <a href="#" @click.stop="isLogin=true">Đã có tài khoản? Đăng nhập</a>
                    </form>
                </div>

            </Teleport>

        </ul>
    </nav>
    <p v-if="store.userInfo.username">Xin chào <a href="/me">{{store.userInfo.username}}</a>!</p>
</template>