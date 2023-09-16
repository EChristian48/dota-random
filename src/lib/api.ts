export interface DotaApiOptions {
  params?: Record<string, string>;
}

export const dotaApi = (
  endpoint: string,
  options: DotaApiOptions = {
    params: {},
  },
) => {
  const urlParams = new URLSearchParams(options.params);
  return `https://www.dota2.com/datafeed/${endpoint}?${
    urlParams.toString() ?? ''
  }`;
};

const cleanHeroName = (name: string) => name.replace('npc_dota_hero_', '');

export const heroImgLandscape = (name: string) =>
  `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${cleanHeroName(
    name,
  )}.png`;
