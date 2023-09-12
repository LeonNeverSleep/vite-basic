// 权限信息处理文件
import router from "@/router/index";
import { useUserStore } from "@/stores/user";

// 获取token
export const getToken = () => {
  const userStore = useUserStore();
  return userStore.token;
};

//删除token
export function removeToken() {
  // return Cookies.remove(ACCESS_TOKEN);
}

//判断是否登录，并跳转到登录页
export function isLogin() {
  const istoken = getToken();
  if (istoken === "") {
    router.replace("/");
  }
}
