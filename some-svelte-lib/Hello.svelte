<script>
 export let onClick;
 export let message;
</script>

<div>
    <button on:click={onClick}>Toggle </button>
    <div>you said: {message}</div>
</div>

<style>
 button {
   background: red;
   color: white;
 }
</style>
