<script lang="ts">
	import Navbar from '$lib/navbar/navbar.svelte';
	import { document } from 'postcss';
	import { writable } from 'svelte/store';

	const BACKEND_BLOUSE_URL = 'http://localhost:3000/blouses';
	const BACKEND_VERIFICATION_URL ='http://localhost:3000/send-verification-code'

	let formData = {
		modele: '', //done
		couleur: '', // done
		nom: '', // done
		prenom: '', // done
		telephone: '',
		sexe: false, // done
		couleurBordure: '', // done
		logo: '', // done
		cou: 0, // done
		epaule: 0, // done
		poitrine: 0, // done
		manche: 0, // done
		tourManche: 0, // done
		longueurBlouse: 0, // done
		tourFesse: 0 // done
	};
	function handleOnSubmit(event: Event) {
		formData.sexe = Boolean(formData.sexe);
		fetch(BACKEND_BLOUSE_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});
		console.log(formData);
		alert("data submitted")
		sendVerificationCode();
	}
	function sendVerificationCode() {
		fetch(BACKEND_VERIFICATION_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData.telephone)
		})
	}
	let visible = false;
	// if(formData.modele == "bordered"){
		// visible.set(false)
	// }
	// 
	function handleModelSelectChange(event: Event) {
    visible = event.target.value=="bordered"?true:false; // Update the selected value
    // Perform actions or updates based on the selected value
    console.log("Selected value:", visible);
    // ... other logic or UI updates based on selectedValue
	}
</script>

<form
	id="blouse-form"
	class="m-[2%] h-[100%] bg-[#FEEEEE] p-[1rem]"
	on:submit|preventDefault={handleOnSubmit}
	method="POST"
>
	<h1 class="w-full font-bold uppercase text-3xl text-center">Commande d'une blouse médicale</h1>

	<div class="form-content gap-[1rem] w-[90%] flex flex-col my-[4rem] mx-auto justify-center">
		<fieldset class="max-w-[800px] fieldset-standard flex-col w-[100%] mx-auto p-[1%]">
			<h2 class="fieldset-title">Informations personnelles</h2>

			<div class="downward-input">
				<label class="block" for="prenom">Prénom</label>
				<input
					class="input-standard"
					type="text"
					bind:value={formData.prenom}
					id="prenom"
					data-test="prenom"
					required
				/>
			</div>

			<div class="downward-input">
				<label class="block" for="nom">Nom</label>
				<input class="input-standard" type="text" bind:value={formData.nom} id="nom" required/>
			</div>

			<div class="downward-input">
				<label for="sexe">Sexe</label>
				<select class="block input-standard" bind:value={formData.sexe} id="sexe" required>
					<option class="" value="true"> Homme </option>
					<option class="" value="false"> Femme </option>
				</select>
			</div>
			<!--  -->
			<div class="downward-input">
				<label class="block" for="telephone">Téléphone</label>
				<input class="input-standard" type="text" bind:value={formData.telephone} id="telephone" required/>
			</div>
			<!--  -->
			<div class="downward-input">
				<label class="block" for="logo">Logo <sup>(1)</sup></label>
				<input class="input-standard" type="text" bind:value={formData.logo} id="logo" />
			</div>
		</fieldset>

		<fieldset class="max-w-[800px] fieldset-standard flex-col w-[100%] mx-auto p-[1%]">
			<h2 class="fieldset-title">Informations blouse</h2>
			<small>Toutes les mesures sont en centimètre</small>
			<div class="downward-input">
				<label for="modele"> Modèle blouse</label>
				<select class="block input-standard" bind:value={formData.modele} id="modele" required on:change={handleModelSelectChange}>
					<option class="" value="Classic">Classic</option>
					<option class="" value="bordered">Borduré</option>
					<option class="" value="DeuxTons">Deux tons</option>
				</select>
			</div>

			<div class="downward-input">
				<label class="block" for="epaule">Epaule</label>
				<input
					class="input-standard"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					min="1"
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
					min="1"
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
					min="1"
					bind:value={formData.poitrine}
					id="poitrine"
				/>
			</div>
			<div class="downward-input">
				<label class="block" for="manche">Manche</label>
				<input
					class="input-standard"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					min="1"
					bind:value={formData.manche}
					id="manche"
				/>
			</div>
			<div class="downward-input">
				<label class="block" for="tourManche">Tour de manche</label>
				<input
					class="input-standard"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					min="1"
					bind:value={formData.tourManche}
					id="tourManche"
				/>
			</div>
			<div class="downward-input">
				<label class="block" for="tourFesse">Tour des fesses</label>
				<input
					class="input-standard"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					min="1"
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
					min="1"
					bind:value={formData.longueurBlouse}
					id="longueur-blouse"
				/>
			</div>

			<div class="downward-input">
				<label for="couleur">Couleur blouse</label>
				<select class="block input-standard" bind:value={formData.couleur} id="couleur">
					<option class="" value="rouge">Rouge</option>
					<option class="" value="bleu">Bleu</option>
				</select>
			</div>
			{#if visible}
			<div class="downward-input">
				<label for="couleur-bordure">Couleur bordure </label><br />
				<small>Remplir seulement si vous avez choisi le <b>modèle borduré</b>.</small>
				<select
					class="block input-standard"
					bind:value={formData.couleurBordure}
					id="couleur-bordure"
				>
					<option class="" value="rouge">Rouge</option>
					<option class="" value="bleu">Bleu</option>
					<option class="" value="Choisissez pour moi">Choisissez pour moi</option>
				</select>
			</div>
			{/if}
		</fieldset>
	</div>
	<fieldset class="input-standard max-w-[300px] mx-auto">
		<button type="submit" class="text-[#FFFFFF] bg-[#222222] h-[3rem] w-[100%] rounded-[.5rem]" id="commander-blouse">
			Commander
		</button>
	</fieldset>
</form>

<style>
	@tailwind components;
	input {
		padding: 1rem;
	}
	.input-standard {
		background-color: #ffffff;
		border: 1px solid;
		border-color: #cccccc;
		border-radius: 8px;
		height: 2.8rem;
		width: 90%;
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
