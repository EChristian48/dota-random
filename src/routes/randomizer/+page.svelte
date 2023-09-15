<script lang="ts">
  import { getRandomHero } from '$lib/heroes';
  import image from '$lib/images/background.jpg';
  import type { Hero } from '$lib/types';
  import type { PageData } from './$types';

  export let data: PageData;

  let randomHero: Hero;
</script>

<main
  style:background-image="url({image})"
  class="w-screen min-h-screen bg-top bg-cover bg-no-repeat"
>
  <section class="max-w-4xl mx-auto text-white">
    <h1 class="font-serif font-bold text-6xl text-center drop-shadow">
      RANDOMIZE YOUR HERO
    </h1>

    <p class="text-2xl text-center text-gray-300">
      From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero
      pool is massive and limitlessly diverse. Unleash incredible abilities and
      devastating ultimates on your way to victory.
    </p>

    <img src={randomHero?.name.replace('npc_dota_hero_', '')} alt="" />

    <h2 class="font-sans font-semibold text-4xl text-center drop-shadow">
      {JSON.stringify(randomHero, null, 2)}
    </h2>

    <button on:click={() => (randomHero = getRandomHero(data.heroes))}
      >New Hero</button
    >
  </section>
</main>
