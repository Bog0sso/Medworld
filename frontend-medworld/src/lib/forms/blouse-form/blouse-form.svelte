<script lang="ts">
	const BACKEND_BLOUSE_URL = 'http://localhost:3000/'
	// let prenom: number;
	// let nom: number;
	// let telephone: number;
	// let institution: number;
	// let epaule: number;
	// let longueurHabit: number;
	// let couleur: string;
	let formData = {
		prenom:'',
		nom:'',
		telephone:'',
		institution:'',
		epaule:'',
		longueurHabit:'',
		couleur:''
		};
	function handleOnSubmit(event:Event) {
		fetch(BACKEND_BLOUSE_URL, {
			method:'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify(formData)
		})	
	}
</script>

<form class="m-[2%] h-[100%] bg-[#FEEEEE] p-[1rem]"  on:submit|preventDefault={ handleOnSubmit } method="POST">
	<h1 class="w-full font-bold uppercase text-3xl text-center">Commande d'une blouse médicale</h1>

	<div class="form-content gap-[1rem] w-[90%] flex flex-wrap my-[4%] mx-auto justify-center">
		<fieldset class="flex-col p-[1rem]">
			<h2 class="fieldset-title">Informations personnelles</h2>
			<div class="downward-input">
				<label class="block" for="prenom">Prénom</label>
				<input class="input-standard" type="text" bind:value={formData.prenom} id="prenom" />
			</div>

			<div class="downward-input">
				<label class="block" for="nom">Nom</label>
				<input class="input-standard" type="text" bind:value={formData.nom} id="nom" />
			</div>

			<div class="downward-input">
				<label class="block" for="telephone">Téléphone</label>
				<input
					class="input-standard"
					inputmode="numeric"
					pattern="\d*"
					minlength="9"
					max="9"
					type="tel"
					bind:value={formData.telephone}
					id="telephone"
				/>
			</div>

			<div class="downward-input">
				<label class="block" for="institution">Institution <small>(pour le logo)</small></label>
				<input class="input-standard" type="text" bind:value={formData.institution} id="institution" />
			</div>
		</fieldset>

		<fieldset class="flex-col p-[1rem]">
			<h2 class="fieldset-title">Informations tenue<small>(mesures en cm)</small></h2>

			<div class="downward-input">
				<label class="block" for="prenom">Epaule</label>
				<input
					class="input-standard"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					bind:value={formData.epaule}
					id="epaule"
				/>
			</div>

			<div class="downward-input">
				<label class="block" for="longueur-habit">Longueur habit</label>
				<input
					class="input-standard"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					bind:value={formData.longueurHabit}
					id="longueur-habit"
				/>
			</div>

			<div class="downward-input">
				<label for="couleur">Couleur</label>
				<select class="block input-standard" bind:value={formData.couleur} id="couleur">
					<option class="" value="rouge">Rouge</option>
					<option class="" value="bleu">Bleu</option>
				</select>
			</div>

			<!-- Place form radio button inputs -->
			<!-- <div class="my-[2rem]">
			<h3 class="w-full pt-[2rem] font-bold uppercase text-1xl text-left">Manches</h3>
			<div class="downward-input">
				<label for="contactChoice1">Manches longues</label>
				<input
					class="h-[1rem]"
					type="radio"
					id="contactChoice1"
					bind:value={formData.contact}
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
					bind:value={formData.contact}
					value="email"
				/>
			</div>
		</div> -->
		</fieldset>
	</div>
	<fieldset class="input-standard max-w-[300px] mx-auto">
		<button type="submit" class="text-[#FFFFFF] bg-[#222222] h-[3rem] w-[100%] rounded-[.5rem]"> Commander </button>
	</fieldset>
</form>

<style>
	@tailwind components;
	input {
		padding: 12px;
	}
	.input-standard {
		background-color: #ffffff;
		border: 1px solid;
		border-color: #cccccc;
		border-radius: 8px;
		height: 2.8rem;
		width: 100%;
		/* max-width: 420px; */
		/* min-width: 250px; */
	}
	@layer components {
		.downward-input {
			@apply w-[100%] flex-col justify-items-center;
		}
		/* .input-group {
			@apply flex gap-[2rem];
		} */
		.fieldset-title {
			@apply text-xl font-semibold;
		}

		.input-standard {
			@apply w-[100%] sm:w-[100%] lg:min-w-[300px];
		}
	}
</style>
