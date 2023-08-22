<script lang="ts">
    import { userData } from "$lib/firebase";
</script>

{#if $userData?.admin}
<p> Hello admin : {$userData.username}</p>
{:else}
<p>Access Denied</p>
{/if}