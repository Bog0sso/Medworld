<!-- <h1 class="text-3xl font-bold bg-white ">Hello world!</h1> -->

<script lang="ts">
    import Outfit from "../lib/outfit/outfit.svelte";
</script>

<main>
    <h1 class="font-['Open_Sans'] font-bold	uppercase text-3xl text-center">Quelle tenue souhaiteriez-vous commander ?</h1>
    <Outfit outfitLabel="Blouse" imageURL="/ressources/blouse.png"/>
    <Outfit outfitLabel="Tenue de bloc" imageURL="/ressources/tenue-de-bloc.png"/>
</main>