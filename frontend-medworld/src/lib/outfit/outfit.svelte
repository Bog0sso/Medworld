<script lang="ts">
    export let imageURL:string;
    export let outfitLabel:string;
</script>

<div class="border-2 md:w-8/12 w- h-1/10 flex-col items-center">
    <h3 class="underline">{outfitLabel}</h3>
    <img src="{imageURL}" alt="{outfitLabel}">
</div>