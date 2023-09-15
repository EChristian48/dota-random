<script lang="ts">
  import { getRandomHero } from '$lib/heroes';
  import type { Hero } from '$lib/types';
  import type { PageData } from './$types';
  import image from '$lib/images/background.jpg';
  import { backIn } from 'svelte/easing';

  export let data: PageData;

  let randomHero: Hero;
</script>

<section
  style:background-image="url({image})"
  class="bg-red-500 max-w-4xl mx-auto text-white"
>
  <h1 class="font-serif font-semibold text-4xl text-center">
    RANDOMIZE YOUR HERO
  </h1>

  <p>
    From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero
    pool is massive and limitlessly diverse. Unleash incredible abilities and
    devastating ultimates on your way to victory. {randomHero?.name_loc}
  </p>

  {JSON.stringify(image)}

  <button on:click={() => (randomHero = getRandomHero(data.heroes))}
    >New Hero</button
  >
</section>
