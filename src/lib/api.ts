// Common type
export interface UrlBuilderOptions {
  params?: Record<string, string>;
}
type URLBuilder = (endpoint: string, options: UrlBuilderOptions) => string;

// Valve's dota API URL builder
export const valveApi: URLBuilder = (
  endpoint: string,
  options: UrlBuilderOptions = {
    params: {},
  },
) => {
  const urlParams = new URLSearchParams(options.params);
  return `https://www.dota2.com/datafeed/${endpoint}?${
    urlParams.toString() ?? ''
  }`;
};

// Valve hero image CDN
const cleanHeroName = (name: string) => name.replace('npc_dota_hero_', '');
export const heroImgLandscape = (name: string) =>
  `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${cleanHeroName(
    name,
  )}.png`;
