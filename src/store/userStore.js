import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userInfo", () => {
  const userInfo = ref({});
  const isLoggedIn = ref(false);
  const isLoading = ref(false);

  const setUserInfo = (data) => {
    userInfo.value = data;
  };
  const setLoggedIn = () => {
    isLoggedIn.value = true;
  };
  const setLoggedOut = () => {
    localStorage.removeItem("userInfo");
    isLoggedIn.value = false;
  };
  const setLoading = () => {
    isLoading.value = !isLoading.value;
  };
  return {
    userInfo,
    setUserInfo,
    setLoggedIn,
    isLoggedIn,
    setLoggedOut,
    isLoading,
    setLoading,
  };
});
