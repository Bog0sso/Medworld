<script lang="ts">
	export let imageURL: string;
	export let outfitLabel: string;
    export let link: string;
</script>

<div class="bg-[#FFFFFF] m-2 flex-col justify-center rounded-3xl drop-shadow-xl">
	<a href={link}>
		<h3 class="p-2 my-1.5 text-2xl font-semibold uppercase">{outfitLabel}</h3>
		<img src={imageURL} alt={outfitLabel} />
	</a>
</div>
