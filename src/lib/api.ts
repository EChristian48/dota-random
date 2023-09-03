export const BASE_API_URL = `https://www.dota2.com/datafeed/`;

export interface URLBuilderOptions {
	params?: URLSearchParams;
}

export const urlBuilder = (endpoint: string, options: URLBuilderOptions = {}) => {
	return `${BASE_API_URL}${endpoint}?${options.params?.toString() ?? ''}`;
};
