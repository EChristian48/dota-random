<script lang="ts">
  import { getRandomHero } from '$lib/heroes';
  import type { Hero } from '$lib/types';
  import type { PageData } from './$types';

  export let data: PageData;

  let randomHero: Hero;
</script>

<section>
  <h1>
    to your new<br />SvelteKit app
  </h1>

  Your random hero is {randomHero?.name_loc}

  <button on:click={() => (randomHero = getRandomHero(data.heroes))}
    >New Hero</button
  >
</section>
