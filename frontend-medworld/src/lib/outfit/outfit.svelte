<script lang="ts">
    export let imageURL:string;
    export let outfitLabel:string;
</script>

<div class="mx-auto my-2 w-fit bg-white border-4 border-[#FFFFFF] flex-col text-center rounded-3xl drop-shadow-xl">
    <h3 class="inline mx-auto my-1.5 text-2xl font-semibold uppercase">{outfitLabel}</h3>
    <img src="{imageURL}" alt="{outfitLabel}">
</div>
