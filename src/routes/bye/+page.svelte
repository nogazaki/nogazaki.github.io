<script>
  let state = 0;

  setTimeout(() => (state = 1), 1000);
  setTimeout(() => (state = 2), 2500);
  setTimeout(() => (state = 3), 6000);
</script>

<svelte:head>
  <title>Thank you</title>
</svelte:head>

<main class="flex flex-col h-screen w-screen items-center justify-center text-center">
  <div class="text-4xl {state < 3 ? '' : 'hidden'}">
    <p class=" {state > 0 ? '' : 'invisible'}">a small project</p>
    <p class=" {state > 1 ? '' : 'invisible'}">by Vu Le Khoi Nguyen</p>
  </div>
  <p class="text-9xl bold {state < 3 ? 'hidden' : ''}">this was CS50</p>
</main>
