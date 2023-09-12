import { useUserStore } from "@/stores/user";
import router from "@/router/index";

/**
 * 获取最大分页数
 * @param total 总条数
 * @param page 当前页码
 * @param pageSize 每页显示条数
 * @returns 最大页码
 */
export const maxPage = (total: number, page: number, pageSize: number) => {
  return Math.ceil(total / (page * pageSize));
};

/**
 * Event: 退出登录
 */
export const exitLogin = () => {
  const userStore = useUserStore();

  localStorage.clear();

  userStore.removeToken();

  router.replace({ path: "/login" });
};
