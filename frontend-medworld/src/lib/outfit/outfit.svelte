<script lang="ts">
    export let imageURL:string;
    export let outfitLabel:string;
</script>

<div class=" m-[15px] w-fit bg-white border-4 flex-col text-center rounded-3xl">
    <h3 class="inline mx-auto my-1.5 text-2xl font-semibold uppercase">{outfitLabel}</h3>
    <img src="{imageURL}" alt="{outfitLabel}">
</div>