<script lang="ts">
  import UserLink from "$lib/components/UserLink.svelte";
    import type { PageData } from "./$types";
    
    export let data: PageData;
  </script>
  
  <svelte:head>
    <title>@{data.username} Links</title>
    <meta name="description" content={data.bio} />
  </svelte:head>
  
  
  <div class="content-center space-x-6 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

    <h1 class="mb-3 flex-1 text-3xl text-purple-300">
      @{data.username}
    </h1>
  
    <img
      src={data.photoURL ?? "/user.png"}
      alt="photoURL"
      width="256"
      class=" flex-1 mx-auto"
    />
    <div class="flex-1">
      <p class="text-xl my-8">{data.bio ?? "no bio yet..."}</p>
    </div>
    <ul class="list-none">
      {#each data.links as item}
      <li class="my-2">
        <UserLink {...item} />
      </li>
      {/each}
      <h1>Characters:</h1>
      {#each data.characters as character}
      <li class="my-2">
        <p>Character : {character}</p>
      </li>
      {/each}
    </ul>
  
  </div>
  