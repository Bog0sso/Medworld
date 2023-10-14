<script lang="ts">
	import Navbar from "$lib/navbar/navbar.svelte";

	const BACKEND_BLOUSE_URL = 'http://localhost:3000/blouses'

	let sexe = new Boolean(false);
	let formData = {
		couleur:'',            // done
		avecBordure: false,    // done
		nom: '',               // done
		prenom: '',            // done
		sexe: false,           // done
		couleurBouton: '',     // done
		logo: '',              // done
		cou: 0,                // done
		epaule: 0,             // done
		poitrine: 0,           // done
		manche: 0,             // done
		tourManche: 0,         // done
		longueurBlouse: 0,     // done
		tourFesse: 0           // done
	};
	function handleOnSubmit(event:Event) {
		formData.sexe = Boolean(formData.sexe);
		formData.avecBordure = Boolean(formData.avecBordure);
		fetch(BACKEND_BLOUSE_URL, {
			method:'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify(formData)
		})
		console.log(formData);	
	}
</script>

<form
	class="m-[2%] h-[100%] bg-[#FEEEEE] p-[1rem]"
	on:submit|preventDefault={handleOnSubmit}
	method="POST"
>
	<h1 class="w-full font-bold uppercase text-3xl text-center">Commande d'une blouse médicale</h1>

	<div class="form-content gap-[1rem] w-[90%] flex flex-wrap my-[4%] mx-auto justify-center">
		<fieldset class="flex-col p-[1rem]">
			<h2 class="fieldset-title">Informations personnelles</h2>
			
			<div class="downward-input">
				<label for="sexe">sexe</label>
				<select class="block input-standard" bind:value={formData.sexe} id="sexe">
					<option class="" value=true > Homme </option>
					<option class="" value=false> Femme </option>
				</select>
			</div>

			<div class="downward-input">
				<label class="block" for="prenom">Prénom</label>
				<input class="input-standard" type="text" bind:value={formData.prenom} id="prenom" />
			</div>

			<div class="downward-input">
				<label class="block" for="nom">Nom</label>
				<input class="input-standard" type="text" bind:value={formData.nom} id="nom" />
			</div>

			<!-- <div class="downward-input">
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
			</div> -->

			<div class="downward-input">
				<label class="block" for="logo">Logo</label>
				<input
					class="input-standard"
					type="text"
					bind:value={formData.logo}
					id="logo"
				/>
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
				<label class="block" for="cou">Cou</label>
				<input
					class="input-standard"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					bind:value={formData.cou}
					id="cou"
				/>
			</div>
			<div class="downward-input">
				<label class="block" for="poitrine">Poitrine</label>
				<input
					class="input-standard"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					bind:value={formData.poitrine}
					id="poitrine"
				/>
			</div>
			<div class="downward-input">
				<label class="block" for="manche">manche</label>
				<input
					class="input-standard"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					bind:value={formData.manche}
					id="manche"
				/>
			</div>
			<div class="downward-input">
				<label class="block" for="tourManche">tourManche</label>
				<input
					class="input-standard"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					bind:value={formData.tourManche}
					id="tourManche"
				/>
			</div>
			<div class="downward-input">
				<label class="block" for="tourFesse">tourFesse</label>
				<input
					class="input-standard"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					bind:value={formData.tourFesse}
					id="tourFesse"
				/>
			</div>

			<div class="downward-input">
				<label class="block" for="longueur-blouse">Longueur blouse</label>
				<input
					class="input-standard"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					bind:value={formData.longueurBlouse}
					id="longueur-blouse"
				/>
			</div>

			<div class="downward-input">
				<label for="couleur">Couleur</label>
				<select class="block input-standard" bind:value={formData.couleur} id="couleur">
					<option class="" value="rouge">Rouge</option>
					<option class="" value="bleu">Bleu</option>
				</select>
			</div>

			<div class="downward-input">
				<label for="couleur-bouton">Couleur bouton</label>
				<select class="block input-standard" bind:value={formData.couleurBouton} id="couleur-bouton">
					<option class="" value="rouge">Rouge</option>
					<option class="" value="bleu">Bleu</option>
					<option class=""  value="Choisissez pour moi">Choisissez pour moi</option>
				</select>
			</div>

			<div class="downward-input">
				<label class="block" for="avecBordure">Bordure</label>
				<input class="input-standard" type="checkbox" bind:checked={formData.avecBordure} id="bordure" />
			</div>
			
		</fieldset>
	</div>
	<fieldset class="input-standard max-w-[300px] mx-auto">
		<button type="submit" class="text-[#FFFFFF] bg-[#222222] h-[3rem] w-[100%] rounded-[.5rem]">
			Commander
		</button>
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
