<script lang="ts">
    import type { LayoutData } from './$types';
    import { user, userData } from '$lib/firebase';
    console.log(userData)
    import NavBar from '$lib/components/NavBar.svelte';
    export let data: LayoutData;
</script>

<main>
    
    <NavBar />
    <slot />
</main>