import service from "@/utils/request";

const prefix = import.meta.env.VITE_API_PREFIX;

/**
 * 生成卷码
 * @param params 参数对象
 * @returns 接口响应对象
 */
export function tCardCreate(params: any) {
  return service({
    url: `${prefix}/tCard/create`,
    method: "POST",
    data: params,
  });
}

/**
 * 查询列表
 * @param params 参数对象
 * @returns 接口响应对象
 */
export function tCardList(params: any) {
  return service({
    url: `${prefix}/tCard/list`,
    method: "POST",
    data: params,
  });
}

/**
 * 统计
 * @param params 参数对象
 * @returns 接口响应对象
 */
export function tCardCount(params: any) {
  return service({
    url: `${prefix}/tCard/count`,
    method: "POST",
    data: params,
  });
}

/**
 * 核销
 * @param params 参数对象
 * @returns 接口响应对象
 */
export function tCardVerif(params: any) {
  return service({
    url: `${prefix}/tCard/verif`,
    method: "GET",
    data: params,
  });
}

/**
 * 删除
 * @param params 参数对象
 * @returns 接口响应对象
 */
export function tCardDeleteALl(params: any) {
  return service({
    url: `${prefix}/tCard/deleteALl`,
    method: "POST",
    data: params,
  });
}
