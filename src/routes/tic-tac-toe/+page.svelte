<script lang="ts">
  import { Move, State, init_board, check_winner, get_state } from '$lib/tic-tac-toe/util';

  import Stack from '$lib/stack.svelte';
  import Icon from '$lib/tic-tac-toe/icon.svelte';
  import Empty from '$lib/tic-tac-toe/empty.svelte';
  import { tick } from 'svelte';

  let board = init_board();
  let turn = Move.o;
  let state = State.Playing;
  let boardE1: HTMLElement, statusE1: HTMLElement;

  $: winner = check_winner(board);
  $: state = get_state(winner, board);

  function place(row: number, col: number) {
    board[row][col] = turn;
    turn = turn === Move.o ? Move.x : Move.o;
    tick().then(focus_tile);
  }
  function focus_tile() {
    const next_tile = boardE1.querySelector('button:not(:disabled)');
    if (next_tile) {
      (next_tile as HTMLElement).focus();
    } else {
      statusE1.focus();
    }
  }
  function reset() {
    board = init_board();
    tick().then(focus_tile);
  }
</script>

<svelte:head>
  <title>Tic-Tac-Toe</title>
</svelte:head>

<main class="flex flex-col h-screen w-screen items-center justify-center text-center">
  <div bind:this={boardE1} class="board">
    {#each board as row, r}
      {#each row as col, c}
        <div class="flex flex-col aspect-square bg-surface0 items-center justify-center text-3xl">
          {#if col !== Move.Empty}
            <Icon move={col} />
          {:else}
            <Empty on:click={() => place(r, c)} disabled={state !== State.Playing} />
          {/if}
        </div>
      {/each}
    {/each}
  </div>

  <div class="text-3xl pt-5" bind:this={statusE1}>
    {#if state === State.Won}
      {winner} won.
    {:else if state === State.Draw}
      It's a draw!
    {:else}
      It's {turn}'s turn
    {/if}

    <button on:click={reset} class="text-blue bold italic {state !== State.Playing ? '' : 'hidden'}"
      >Play again?</button
    >
  </div>

  <a href="../bye" class="text-1xl text-subtext1 pt-5">Go back</a>

  <Stack />
</main>

<style>
  .board {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 100px));
    grid-template-rows: repeat(3, auto);
    gap: 0.25rem;
  }
</style>
