<script lang="ts">
    import { userData } from "$lib/firebase";

</script>

<div class="navbar bg-base-300">
    <div class="flex-1">
      <a href="/app" class="btn btn-ghost normal-case text-xl">DungeonDriver</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/app/admin">Admin</a></li>
        <li><a href="/app/character">Characters</a></li>
        <li>           
          <a href="/app/{$userData.username}/edit" class="btn btn-primary">Edit Profile</a></li>
        <li>
          <details>
            <summary>
              Parent
            </summary>
            <ul class="p-2 bg-base-100">
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>