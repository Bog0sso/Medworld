<script lang="ts">
</script>

<form class="mx-auto my-[2rem] h-[100%] bg-[#FEEEEE] w-[80%]" method="post">
	<h1 class="w-full pt-[2rem] font-bold uppercase text-3xl text-center">
		Commande d'une blouse médicale
	</h1>
	<fieldset class="flex-col w-[100%] mx-auto p-[10%]">
		<h2 class="fieldset-title">Informations personnelles</h2>
		<div class="downward-input">
			<label class="block" for="prenom">Prénom</label>
			<input class="input-standard input-standard" type="text" name="prenom" id="prenom" />
		</div>

		<div class="downward-input">
			<label class="block" for="nom">Nom</label>
			<input class="input-standard" type="text" name="nom" id="nom" />
		</div>

		<div class="downward-input">
			<label for="couleur">Couleur</label>
			<!-- <input class="input-standard" class="block" for="couleur"/> -->
			<!-- <input class="input-standard" type="select" name="couleur" id="couleur" /> -->
			<select class="w-[100%] h-[3rem] rounded-[8px] bg-[#FFFFFF]" name="couleur" id="couleur">
				<option class="h-[3rem] bg-[#FF2222]" value="rouge">Rouge</option>
				<option class="h-[3rem] bg-[#2222FF]" value="bleu">Bleu</option>
			</select>
		</div>

		<div class="downward-input">
			<label class="block" for="institution">Institution <small>(pour le logo)</small></label>
			<input class="input-standard" type="text" name="institution" id="institution" />
		</div>
	</fieldset>

	<fieldset class="flex-col w-[100%] mx-auto p-[10%]">
		<h2 class="fieldset-title">Mesures</h2>

		<div class="input-group">
			<div id="group-epaule" class="downward-input w-[70%] m-0">
				<label class="block  w-full " for="epaule">Epaule</label><input
					class="input-standard w-[100%] p-0"
					id="epaule"
					name="epaule"
					type="text"
				/>
			</div>
			<div id="group-poitrine" class="downward-input w-[30%] m-0">
				<label class="block" for="poitrine">Poitrine</label><input
					class="input-standard w-[100%]"
					id="poitrine"
					name="poitrine"
					type="text"
				/>
			</div>
		</div>

		<!-- Place form radio button inputs -->
		<div class="">
			<h3 class="w-full pt-[2rem] font-bold uppercase text-1xl text-left">Manches</h3>
			<div class="downward-input">
				<label for="contactChoice1">Manches longues</label>
				<input
					class="h-[1rem]"
					type="radio"
					id="contactChoice1"
					name="contact"
					value="email"
					checked
				/>
			</div>
			<div class="downward-input">
				<label for="contactChoice1">Manches courtes</label>
				<input
					class="h-[1rem]"
					type="radio"
					id="contactChoice1"
					name="contact"
					value="email"
					checked
				/>
			</div>
		</div>

		<div class="input-group">
			<div id="group-epaule" class="downward-input w-[70%] m-0">
				<label class="block  w-full" for="tour-manche">Tour de manche</label><input
					class="input-standard w-[100%] p-0"
					id="tour-manche"
					name="tour-manche"
					type="text"
				/>
			</div>

			<div class="downward-input w-[30%] m-0">
				<label class="block" for="longueur-habit">Longueur habit</label><input
					class="input-standard w-[100%]"
					id="longueur-habit"
					name="longueur-habit"
					type="text"
				/>
			</div>
		</div>
	</fieldset>

	<fieldset class=" w-[100%] mx-auto px-[10%]">
		<button class=" text-[#FFFFFF] bg-[#222222] h-[3rem] w-[100%] rounded-[.5rem]">Commander</button
		>
	</fieldset>
</form>

<style>
	@tailwind components;
	.input-standard {
		background-color: #ffffff;
		border: 1px solid;
		border-color: #cccccc;
		border-radius: 8px;
		height: 2.8rem;
		width: 100%;
		/* width:auto; */
		/* margin:0; */
		/* width: fill; */
	}
	@layer components {
		.downward-input {
			@apply flex-col justify-items-center;
		}
		.input-group {
			@apply flex;
		}
		.fieldset-title {
			@apply text-xl font-semibold;
		}
	}
</style>