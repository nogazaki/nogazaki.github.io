<script>
  import svelteLogo from '../assets/svelte.svg';
  import viteLogo from '../assets/vite.svg';
</script>

<main class="flex flex-col h-screen w-screen items-center justify-center text-center">
  <p class="font-bold text-5xl text-blue">welcome to the page, i guess...</p>
  <p class="text-3xl pt-5">why are you here anyway 🤨</p>

  <p class="text-subtext0 pt-20">powered by</p>
  <div class="flex pt-15">
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo vite" alt="Vite" />
    </a>

    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte" />
    </a>
  </div>
</main>

<style>
  .logo {
    height: 5em;
    padding: 1em;
    will-change: filter;
    transition: filter 250ms;
  }
  .logo.vite:hover {
    filter: drop-shadow(0 0 1em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 1em #ff3e00aa);
  }
</style>
