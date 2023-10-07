<script lang="ts">
  import { Move } from './util';
  export let move: Move;
</script>

{#if move === Move.x}
  X
{:else}
  O
{/if}
