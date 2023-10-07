<script>
  import Stack from '$lib/stack.svelte';
</script>

<svelte:head>
  <title>nogazaki</title>
</svelte:head>

<main class="flex flex-col h-screen w-screen items-center justify-center text-center">
  <content>
    <p class="font-bold text-5xl text-blue">welcome to the page, i guess...</p>
    <p class="text-3xl pt-5">why are you here anyway 🤨</p>

    <p class="text-2xl text-subtext1 pt-20">
      well, if you are here for my CS50 final project, then click <a
        href="/tic-tac-toe"
        class="text-mauve">here</a
      >
    </p>
  </content>

  <Stack />
</main>
