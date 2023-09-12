import axios from "axios";
import { getToken, isLogin } from "@/utils/auth";
import { ElMessage } from "element-plus";
import { exitLogin } from "@/utils/ak";

/**
 * @baseURL 基础路劲，根据环境变量切换
 * @timeout 超时阈值
 */
const service = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: 5000, // request timeout
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    if (getToken() !== "") {
      if (config && config.headers) {
        typeof config.headers.set === "function" &&
          config.headers.set("token", getToken());
      }
      if (config.method === "get") {
        // get 请求
        config.params = config.data;
      } else if (config.method === "post") {
        // post 请求
        //  根据真实数据进行调整
        if (config.data instanceof FormData) {
          //instanceof  判断 config.data  是否是构造函数
        } else {
          // 第二次请求 数据会序列号 所以需要判断 解除二次序列化
          if (typeof config.data === "string") {
            config.data = JSON.parse(config.data);
          }
        }
      }
    } else {
      // 未登录返回登录页面
      isLogin();
    }

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      if (res.code === 450) {
        exitLogin();
        return;
      }
      console.log("res :>> ", res);
      ElMessage.error(res.message);

      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("error :>> ", error);
    if (error.response.status == 401) {
      ElMessage.error(error.response.status);

      location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default service;
