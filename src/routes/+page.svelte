<script>
    import { userData } from "$lib/firebase";

  </script>
  
  <svelte:head>
    <title>Character Builder</title>
    <meta name="description" content="Dungeon Driver Character Creator" />
  </svelte:head>
  
  <main class="flex w-full min-h-screen">
  
    <div class="hero bg-base-200">
      <div class="hero-content text-center">
        <div class="w-full">
          <h1 class="text-7xl font-bold">Character Builder</h1>
          <p class="py-6 text-2xl">Character builder</p>
          {#if $userData?.username}
            <a href="/app/{$userData.username}/edit" class="btn btn-primary">Edit Profile</a>
          {:else}
            <a href="/login" class="btn btn-primary">Get Started</a>
          {/if}
        </div>
      </div>
    </div>
    
  </main>
  
  