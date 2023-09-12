import service from "@/utils/request";

const prefix = import.meta.env.VITE_API_PREFIX;

/**
 * 登陆
 * @params params 请求参数
 * @returns 请求对象
 */
export function tUserLogin(params: any) {
  return service({
    url: `${prefix}/tUser/login`,
    method: "POST",
    data: params,
  });
}

/**
 * 查询列表
 * @params params 请求参数
 * @returns 请求对象
 */
export function tUserList(params: any) {
  return service({
    url: `${prefix}/tUser/list`,
    method: "POST",
    data: params,
  });
}

/**
 * 注册
 * @params params 请求参数
 * @returns 请求对象
 */
export function tUserRegister(params: any) {
  return service({
    url: `${prefix}/tUser/register`,
    method: "POST",
    data: params,
  });
}

/**
 * 删除
 * @params params 请求参数
 * @returns 请求对象
 */
export function tUserDelete(params: any) {
  return service({
    url: `${prefix}/tUser/delete`,
    method: "GET",
    data: params,
  });
}

/**
 * 用户信息
 * @params params 请求参数
 * @returns 请求对象
 */
export function tUserInfo(params: any) {
  return service({
    url: `${prefix}/tUser/info`,
    method: "POST",
    data: params,
  });
}
