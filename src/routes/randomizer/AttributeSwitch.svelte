<script lang="ts">
  import agi from '$lib/images/filters/agi.webp';
  import int from '$lib/images/filters/int.webp';
  import str from '$lib/images/filters/str.webp';
  import uni from '$lib/images/filters/uni.webp';
  import type { Hero } from '$lib/types';

  export let attribute: Hero['primary_attr'];

  const assets = [str, agi, int, uni];
  $: src = assets[attribute];
  $: id = `attr-switch-${attribute}`;
  $: label = `Attribute ${attribute}`;

  let checked = false;
</script>

<label
  for={id}
  class="cursor-pointer transition-all"
  class:brightness-50={checked}
  class:saturate-0={checked}
>
  <img {src} alt={label} />
  <input
    type="checkbox"
    name="attribute"
    {id}
    aria-label={label}
    value={attribute}
    class="hidden"
    bind:checked
  />
</label>
