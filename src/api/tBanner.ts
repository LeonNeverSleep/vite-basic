import service from "@/utils/request";

const prefix = import.meta.env.VITE_API_PREFIX;

/**
 * 获取图片
 * @params params 请求参数
 * @returns 请求对象
 */
export function tBannerGet(params: any) {
  return service({
    url: `${prefix}/tBanner/get`,
    method: "GET",
    data: params,
  });
}

/**
 * 保存
 * @params params 请求参数
 * @returns 请求对象
 */
export function tBannerSave(params: any) {
  return service({
    url: `${prefix}/tBanner/save`,
    method: "POST",
    data: params,
  });
}
