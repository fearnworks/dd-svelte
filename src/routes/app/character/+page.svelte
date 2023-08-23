<script lang="ts">
import type { PageData } from "./$types";

export let data: PageData;
</script>
    
    <!-- <svelte:head>
      <title>@{data.username} Characters</title>
      <meta name="description" content={data.characters} />
    </svelte:head>
    
    
    <main class="prose text-center mx-auto mt-8">
  
      <h1 class="text-7xl text-purple-500">
        @{data.username} Characters
      </h1>

    
      <p class="text-xl my-8">{data.bio ?? "no bio yet..."}</p>
      <ul class="list-none">
        {#each data.characters as character}
        <li class="my-2">
          Character ID : {character}
        </li>
        {/each}
      </ul>
    
    </main>
     -->