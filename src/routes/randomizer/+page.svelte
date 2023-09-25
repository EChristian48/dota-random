<script lang="ts">
  import { heroImgLandscape } from '$lib/api';
  import { getRandomHero } from '$lib/heroes';
  import image from '$lib/images/background.jpg';
  import type { Hero } from '$lib/types';
  import type { PageData } from './$types';
  import AttributeSwitch from './AttributeSwitch.svelte';

  export let data: PageData;

  let randomHero: Hero | undefined;
</script>

<main
  style:background-image="url({image})"
  class="min-h-screen w-screen bg-cover bg-top bg-no-repeat"
>
  <section class="mx-auto max-w-4xl text-white">
    <h1 class="pt-24 text-center font-serif text-6xl font-bold drop-shadow">
      RANDOMIZE YOUR HERO
    </h1>

    <p class="mt-4 text-center text-2xl text-gray-300">
      From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero
      pool is massive and limitlessly diverse. Unleash incredible abilities and
      devastating ultimates on your way to victory.
    </p>

    <img src={heroImgLandscape(randomHero?.name ?? '')} alt="" />

    <h2 class="text-center font-sans text-4xl font-bold drop-shadow">
      {JSON.stringify(randomHero, null, 2)}
    </h2>

    <form
      on:submit={(e) => {
        console.log(e);
        const formdata = new FormData(e.target);
        const tono = Array.from(formdata.values());

        console.log({ formdata });
        console.log(formdata.get('attribute'));
      }}
    >
      <div class="flex [&>button]:mr-[-12px]">
        <AttributeSwitch attribute={0} />
        <AttributeSwitch attribute={1} />
        <AttributeSwitch attribute={2} />
        <AttributeSwitch attribute={3} />
      </div>

      <button
        class="highlight bg-gradient-to-b from-hippie-green-500 to-hippie-green-600 px-20 py-3 font-bold uppercase tracking-widest shadow-blue-950 transition-all hover:brightness-110 active:brightness-125"
        type="submit"
        on:click={() => (randomHero = getRandomHero(data.heroes))}
        ><span class="drop-shadow">New Hero</span></button
      >
    </form>
  </section>
</main>

<style>
  .highlight {
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
      0 2px 4px -2px var(--tw-shadow-color);
    box-shadow:
      inset 1px 1px 0px 0px rgba(255, 255, 255, 0.4),
      inset -1px -1px 0px 0px rgba(0, 0, 0, 0.4),
      var(--tw-shadow);
  }
</style>
