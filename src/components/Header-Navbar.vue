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
                <routerLink to="/">Trang chu??</routerLink>
            </li>

            <li>
                <routerLink to="/posts/1">T????t ca?? ba??i vi????t</routerLink>
            </li>
            <li>
                <routerLink to="/most-viewed">Ba??i vi????t ????????c xem nhi????u nh????t</routerLink>
            </li>
            <li>
                <routerLink to="/categories">Ba??i vi????t theo chu?? ??????</routerLink>
            </li>
            <li v-if="!store.isLoggedIn" @click="open = true">
                <routerLink to="">????ng ki?? / ????ng nh????p</routerLink>
            </li>
            <li v-if="store.isLoggedIn" @click="signOut">
                <routerLink to="">????ng xu????t</routerLink>
            </li>

            <Teleport to="body">
                <div v-if="open" class="modal" @click.stop="open = false">
                    <form @submit.prevent="" @click.stop="" v-if="isLogin">
                        <Logo />
                        <span>????NG NH????P</span>
                        <spinner v-if="isLoading" />
                        <div class="field">
                            <label for="username">Ta??i khoa??n</label>
                            <input name="loginusername" type="text" placeholder="Ta??i khoa??n" v-model="username">
                        </div>
                        <div class="field">
                            <label for="password">M????t kh????u</label>
                            <input name="loginpassword" type="password" placeholder="M????t kh????u" v-model="password">
                        </div>
                        <button @click.stop="login">????ng nh????p</button>
                        <a href="#" @click.stop="isLogin=false">Ch??a co?? ta??i khoa??n? ????ng ki??</a>
                    </form>
                    <form @submit.prevent="" @click.stop="" v-if="!isLogin">
                        <Logo />
                        <span>????NG KI??</span>
                        <div class="field">
                            <label for="username">Ta??i khoa??n</label>
                            <input name="signupusername" v-model="username" type="text" placeholder="Ta??i khoa??n">
                        </div>
                        <div class="field">
                            <label for="password">M????t kh????u</label>
                            <input name="signuppassword" type="password" placeholder="M????t kh????u" v-model="password">
                        </div>
                        <div class="field">
                            <label for="password2">Nh????p la??i m????t kh????u</label>
                            <input type="password" v-model="password2" placeholder="Nh????p la??i m????t kh????u">
                        </div>
                        <button @click.stop="signup">????ng nh????p</button>
                        <a href="#" @click.stop="isLogin=true">??a?? co?? ta??i khoa??n? ????ng nh????p</a>
                    </form>
                </div>

            </Teleport>

        </ul>
    </nav>
    <p v-if="store.userInfo.username">Xin cha??o <a href="/me">{{store.userInfo.username}}</a>!</p>
</template>