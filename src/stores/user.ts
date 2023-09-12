import { tUserInfo, tUserLogin } from "@/api/tUser";
import md5 from "md5-ts";
import router from "@/router/index";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      // 用于初始化空列表
      token: "",

      userInfo: {
        type: null,
      },
    };
  },

  actions: {
    /**
     * 登录
     * @param username 账号
     * @param password 密码
     */
    async login(username: string, password: string) {
      const passwordMd5 = md5(password);

      const params = {
        userName: username,
        password: passwordMd5,
      };

      const res = await tUserLogin(params);

      this.token = res.data;

      await this.getUserInfo();

      console.log("this.userInfo.type :>> ", this.userInfo.type);
      const pathStr =
        this.userInfo.type === 0 ? "/writeOffPanel" : "/superTube";
      router.replace({ path: pathStr });
    },

    /**
     * 移除token
     */
    removeToken() {
      this.token = "";
    },

    /**
     * 获取当前用户信息
     */
    async getUserInfo() {
      const params = {};
      const res = await tUserInfo(params);
      console.log("res :>> ", res);
      this.userInfo = res.data;
    },
  },

  // 开启数据持久化
  persist: true,
});
