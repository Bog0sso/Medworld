<script lang="ts">
import Outfit from "$lib/outfit/outfit.svelte";
</script>

<div class="flex-col text-center justify-items-center font-['Open_Sans'] bg-[#FEEEEE] w-[90%] h-[90vh] mx-auto my-[1rem] h-[100vh]  rounded-3xl">
    <h1 class=" font-bold uppercase text-3xl text-center">Que souhaiteriez-vous commander ?</h1>
    <div class=" flex flex-wrap w-4/5 my-auto mx-auto  rounded-3xl">
        <Outfit outfitLabel="Tenue de bloc" imageURL="/ressources/blouse.png"/>
        <Outfit outfitLabel="Blouse" imageURL="/ressources/blouse.png"/>
    </div>
    <small>Veuillez choisir votre tenue</small>
</div>
