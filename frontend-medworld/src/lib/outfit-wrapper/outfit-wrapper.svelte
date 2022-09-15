<script lang="ts">
import Outfit from "$lib/outfit/outfit.svelte";
</script>

<div class="flex-col text-center justify-items-center font-['Open_Sans'] bg-[#FEEEEE] w-[96%] mx-auto my-[2%] rounded-2xl">
    <h1 class="w-full pt-16 font-bold uppercase text-3xl text-center">
        Quelle tenue souhaiteriez-vous commander ?
    </h1>
    <h2>Veuillez choisir votre tenue</h2>
    <div class="flex flex-wrap justify-center w-4/5 my-auto mx-auto rounded-3xl">
        <Outfit link="/commande-tenue-bloc" outfitLabel="Tenue de bloc" imageURL="/ressources/blouse.png" />
        <Outfit link="/commande-tenue-bloc" outfitLabel="Blouse" imageURL="/ressources/blouse.png"/>
    </div>
</div>

<slot/>