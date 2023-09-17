<script lang="ts">
  import { heroImgLandscape } from '$lib/api';
  import { getRandomHero } from '$lib/heroes';
  import image from '$lib/images/background.jpg';
  import type { Hero } from '$lib/types';
  import type { PageData } from './$types';

  export let data: PageData;

  let randomHero: Hero | undefined;
</script>

<main
  style:background-image="url({image})"
  class="w-screen bg-cover bg-top bg-no-repeat min-h-screen"
>
  <section class="mx-auto max-w-4xl text-white">
    <h1 class="font-serif text-6xl font-bold drop-shadow text-center">
      RANDOMIZE YOUR HERO
    </h1>

    <p class="text-center text-2xl text-gray-300">
      From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero
      pool is massive and limitlessly diverse. Unleash incredible abilities and
      devastating ultimates on your way to victory.
    </p>

    <img src={heroImgLandscape(randomHero?.name ?? '')} alt="" />

    <h2 class="text-center font-sans text-4xl font-bold drop-shadow">
      {JSON.stringify(randomHero, null, 2)}
    </h2>

    <button
      class="bg-gradient-to-b from-hippie-green-500 to-hippie-green-600 px-20 py-3 uppercase font-bold tracking-widest shadow-md shadow-blue-950 hover:brightness-110 transition-all"
      on:click={() => (randomHero = getRandomHero(data.heroes))}
      ><span class="drop-shadow"> New Hero </span></button
    >
  </section>
</main>
