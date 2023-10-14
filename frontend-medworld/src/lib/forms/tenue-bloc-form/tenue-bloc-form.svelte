<script lang="ts">

	const BACKEND_TENUE_BLOC_URL = 'http://localhost:3000/tenueblocs';

	let sexe = new Boolean(false);
	let formData = {
		nom: '',
		prenom: '',
		sexe: false,
		couleur: '',
		logo: false,
		cou: 0,
		epaule: 0,
		poitrine: 0,
		manche: 0,
		tourManche: 0,
		longueurHabit: 0,
		ceinture: 0,
		tourFesse: 0,
		cuisse: 0,
		longueurPantalon: 0,
		bordure: true,
		couleurBordure: ''
	};

	function handleOnSubmit(event:Event) {
		formData.sexe = Boolean(formData.sexe);
		formData.bordure = Boolean(formData.bordure);
		formData.logo = Boolean(formData.logo);
		fetch(BACKEND_TENUE_BLOC_URL, {
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
	class="m-[1%] h-[100%] bg-[#FEEEEE] p-[1rem]"
	on:submit|preventDefault={handleOnSubmit}
	method="POST"
>
	<h1 class="w-full font-bold uppercase text-3xl text-center">Commande d'une tenue de bloc</h1>
	<div class="form-content gap-[1rem] w-[90%] flex flex-wrap my-[4rem] mx-auto justify-center">
		<fieldset class="max-w-[800px] fieldset-standard flex-col w-[100%] mx-auto p-[1%]">
			<h2 class="fieldset-title">Informations personnelles</h2>
			<div class="downward-input">
				<label class="block" for="prenom">Prénom</label>
				<input type="text" name="prenom" id="prenom" bind:value={formData.prenom} required />
			</div>

			<div class="downward-input">
				<label class="block" for="nom">Nom</label>
				<input type="text" name="nom" id="nom" bind:value={formData.nom} required />
			</div>

			<div class="downward-input">
				<label for="sexe">sexe</label>
				<select class="block input-standard" bind:value={formData.sexe} id="sexe">
					<option class="" value=true > Homme </option>
					<option class="" value=false> Femme </option>
				</select>
			</div>


			<div class="downward-input">
				<label for="logo">logo</label>
				<select class="block input-standard" bind:value={formData.logo} id="logo">
					<option class="" value=true > Avec logo </option>
					<option class="" value=false> Sans logo</option>
				</select>
			</div>

			<!-- <div class="downward-input">
				<label class="block" for="telephone">Téléphone</label>
				<input
					type="text"
					name="telephone"
					id="telephone"
					bind:value={formData.telephone}
					required
				/>
			</div> -->

			<!-- <div class="downward-input">
				<label class="block" for="institution"
					>Institution <br /> <small> <sup>1</sup> si vous souhaitez mettre un logo</small><br
					/><small> <sup>2</sup> Supplément de 1500XOF à prévoir</small></label
				>
				<input
					type="text"
					name="institution"
					id="institution"
					bind:value={formData.institution}
					required
				/>
			</div> -->
		</fieldset>

		<fieldset class="max-w-[800px] fieldset-standard flex-col w-[100%] mx-auto p-[1%]">
			<h2 class="fieldset-title">Informations tenue</h2>

			<div class="input-group flex justify-between gap-[1rem] w-[100%]">
				<div class="downward-input w-[50%] ">
					<label class="block  w-full " for="epaule">Epaule</label><input
						class="w-[100%] p-0"
						id="epaule"
						name="epaule"
						inputmode="numeric"
						pattern="\d*"
						type="number"
						bind:value={formData.epaule}
						required
					/>
				</div>
				<div id="group-poitrine" class="downward-input w-[50%] ">
					<label class="block" for="poitrine">Poitrine</label><input
						class="w-[100%]"
						id="poitrine"
						name="poitrine"
						inputmode="numeric"
						pattern="\d*"
						type="number"
						bind:value={formData.poitrine}
						required
					/>
				</div>
			</div>

			<div class="input-group flex justify-between gap-[1rem] w-[100%]">
				<div class="downward-input">
					<label class="block" for="avecBordure">Bordure</label>
					<input class="input-standard" type="checkbox" bind:checked={formData.bordure} id="bordure" />
				</div>
				<div class="downward-input">
					<label for="couleur-bordure">Couleur bordure</label>
					<select class="block input-standard" bind:value={formData.couleurBordure} id="couleur-bordure">
						<option class="" value="Rouge">Rouge</option>
						<option class="" value="Bleu">Bleu</option>
						<option class=""  value="Choisissez pour moi">Choisissez pour moi</option>
					</select>
				</div>

				<div class="downward-input w-[50%] m-0">
					<label class="block  w-full" for="manche">Manche</label><input
						class="w-[100%] p-0"
						id="manche"
						name="manche"
						inputmode="numeric"
						pattern="\d*"
						type="number"
						bind:value={formData.manche}
						required
					/>
				</div>

				<div id="group-tourManche" class="downward-input w-[50%] m-0">
					<label class="block" for="tourManche">Tour de manche</label><input
						class="w-[100%]"
						id="tourManche"
						name="tourManche"
						inputmode="numeric"
						pattern="\d*"
						type="number"
						bind:value={formData.tourManche}
						required
					/>
				</div>
			</div>

			<!-- <div class="downward-input">
				<label class="block" for="taille">Taille</label><input
					name="taille"
					id="taille"
					inputmode="numeric"
					pattern="\d*"
					bind:value={formData.taille}
					required
				/>
			</div> -->
			<div class="downward-input">
				<label class="block" for="longueur-habit">Longueur habit</label><input
					id="longueur-habit"
					name="longueur-habit"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					bind:value={formData.longueurHabit}
					required
				/>
			</div>
			<div class="downward-input">
				<label class="block" for="tour-fesse">Tour des fesses</label><input
					id="tour-fesse"
					name="tour-fesse"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					bind:value={formData.tourFesse}
					required
				/>
			</div>
			<div class="downward-input">
				<label class="block" for="ceinture">Ceinture</label><input
					id="ceinture"
					name="ceinture"
					inputmode="numeric"
					pattern="\d*"
					type="number"
					bind:value={formData.ceinture}
					required
				/>
			</div>
			<div class="input-group flex justify-between gap-[1rem] w-[100%]">
				<div id="group-cuisse" class="downward-input w-[50%] m-0">
					<label class="block  w-full" for="cuisse">Cuisse</label><input
						class="w-[100%] p-0"
						id="cuisse"
						name="cuisse"
						inputmode="numeric"
						pattern="\d*"
						type="number"
						bind:value={formData.cuisse}
						required
					/>
				</div>

				<div class="downward-input w-[50%] m-0">
					<label class="block" for="longueurPantalon">Longueur pantalon</label><input
						class="w-[100%]"
						id="longueurPantalon"
						name="longueurPantalon"
						inputmode="numeric"
						pattern="\d*"
						type="number"
						bind:value={formData.longueurPantalon}
						required
					/>
				</div>
			</div>
			<div class="downward-input">
				<label for="couleur">Couleur</label>
				<select
					class="w-[100%] h-[3rem] rounded-[8px] bg-[#FFFFFF]"
					name="couleur"
					id="couleur"
					bind:value={formData.couleur}
				>
					<option class="" value="rouge">Rouge</option>
					<option class="" value="bleu">Bleu</option>
				</select>
			</div>
		</fieldset>
	</div>
	<fieldset class="max-w-[800px] w-[100%] mx-auto px-[1rem]">
		<button class=" text-[#FFFFFF] bg-[#222222] h-[3rem] w-[100%] rounded-[.5rem]">
			Commander
		</button>
	</fieldset>
</form>

<style>
	@tailwind components;
	input {
		padding: 12px;
		background-color: #ffffff;
		border: 1px solid;
		border-color: #cccccc;
		border-radius: 8px;
		height: 3rem;
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
			@apply flex my-[2%];
		}
		.fieldset-title {
			@apply text-xl font-semibold;
		}
	}
</style>
