export const BASE_API_URL = `https://www.dota2.com/datafeed/`;

export interface URLBuilderOptions {
  params: Record<string, string>;
}

export const urlBuilder = (
  endpoint: string,
  options: URLBuilderOptions = {
    params: {},
  }
) => {
  const urlParams = new URLSearchParams(options.params);
  return `${BASE_API_URL}${endpoint}?${urlParams.toString() ?? ''}`;
};
