<script lang="ts">
</script>

<form class="m-[1%] h-[100%] bg-[#FEEEEE] p-[1rem]" method="post">
	<h1 class="w-full font-bold uppercase text-3xl text-center">
		Commande d'une tenue de bloc
	</h1>
	<div class="form-content gap-[1rem] w-[90%] flex flex-wrap my-[4rem] mx-auto justify-center">
	<fieldset class="max-w-[800px] fieldset-standard flex-col w-[100%] mx-auto p-[1%]">
		<h2 class="fieldset-title"> Informations personnelles </h2>
		<div class="downward-input">
			<label class="block" for="prenom">Prénom</label>
			<input type="text" name="prenom" id="prenom" required/>
		</div>

		<div class="downward-input">
			<label class="block" for="nom">Nom</label>
			<input type="text" name="nom" id="nom" required />
		</div>

		<div class="downward-input">
			<label class="block" for="telephone">Téléphone</label>
			<input type="text" name="telephone" id="telephone" required />
		</div>

		<div class="downward-input">
			<label class="block" for="institution">Institution <br> <small> <sup>1</sup> si vous souhaitez mettre un logo</small><br><small> <sup>2</sup> Supplément de 1500XOF à prévoir</small></label>
			<input type="text" name="institution" id="institution" required />
		</div>
	</fieldset>

	<fieldset class="max-w-[800px] fieldset-standard flex-col w-[100%] mx-auto p-[1%]">
		<h2 class="fieldset-title"> Informations tenue </h2>

		<div class="input-group flex justify-between gap-[1rem] w-[100%]">
			<div class="downward-input w-[50%] ">
				<label class="block  w-full " for="epaule">Epaule</label><input
					class="w-[100%] p-0"
					id="epaule"
					name="epaule"

					inputmode="numeric"
					pattern="\d*"
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
					required
				/>
			</div>
		</div>

		<div class="input-group flex justify-between gap-[1rem] w-[100%]">
			<div class="downward-input w-[50%] m-0">
				<label class="block  w-full" for="epaule">Manche</label><input
					class="w-[100%] p-0"
					id="epaule"
					name="epaule"

					inputmode="numeric"
					pattern="\d*"
					required
				/>
			</div>

			<div id="group-poitrine" class="downward-input w-[50%] m-0">
				<label class="block" for="poitrine">Tour de manche</label><input
					class="w-[100%]"
					id="poitrine"
					name="poitrine"

					inputmode="numeric"
					pattern="\d*"
					required
				/>
			</div>
		</div>

		<div class="downward-input">
			<label class="block" for="taille">Taille</label><input
				name="taille"
				id="taille"
				inputmode="numeric"
				pattern="\d*"
				required
			/>
		</div>
		<div class="downward-input">
			<label class="block" for="longueur-habit">Longueur habit</label><input
				id="longueur-habit"
				name="longueur-habit"
				inputmode="numeric"
				pattern="\d*"
				required
			/>
		</div>
		<div class="downward-input">
			<label class="block" for="tour-fesses">Tour des fesses</label><input
				id="tour-fesses"
				name="ttour-fesses"
				inputmode="numeric"
				pattern="\d*"
				required
			/>
		</div>
		<div class="downward-input">
			<label class="block" for="ceinture">Ceinture</label><input
				id="ceinture"
				name="ceinture"
				inputmode="numeric"
				pattern="\d*"
				required
			/>
		</div>
		<div class="input-group flex justify-between gap-[1rem] w-[100%]">
			<div id="group-epaule" class="downward-input w-[50%] m-0">
				<label class="block  w-full" for="cuisse">Cuisse</label><input
					class="w-[100%] p-0"
					id="cuisse"
					name="cuisse"

					inputmode="numeric"
					pattern="\d*"
					required
				/>
			</div>

			<div class="downward-input w-[50%] m-0">
				<label class="block" for="pantalon">Longueur pantalon</label><input
					class="w-[100%]"
					id="pantalon"
					name="pantalon"

					inputmode="numeric"
					pattern="\d*"
					required
				/>
			</div>

		</div>
		<div class="downward-input">
			<label for="couleur">Couleur</label>
			<!-- <input class="block" for="couleur"/> -->
			<!-- <input type="select" name="couleur" id="couleur" /> -->
			<select class="w-[100%] h-[3rem] rounded-[8px] bg-[#FFFFFF]" name="couleur" id="couleur">
				<option class="" value="rouge">Rouge</option>
				<option class="" value="bleu">Bleu</option>
			</select>
		</div>
	</fieldset>
	</div>
	<fieldset class="max-w-[800px] w-[100%] mx-auto px-[1rem]">
		<button class=" text-[#FFFFFF] bg-[#222222] h-[3rem] w-[100%] rounded-[.5rem]" >Commander</button>
	</fieldset>
</form>

<style>
	@tailwind components;
	input {
		padding: 12px;
		background-color: #FFFFFF;
		border: 1px solid;
		border-color: #CCCCCC;
		border-radius: 8px;
		height: 3rem;
        width:100%
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
