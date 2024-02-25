<script>
	import {
		Table,
		TableHead,
		TableHeadCell,
		TableBody,
		TableBodyRow,
		TableBodyCell,
		Label,
		Select
	} from 'flowbite-svelte';
	
	export let data;
	let blouses = data.blouses;
</script>
<div class="main">
<h1>Blouses</h1>
<Table>
	<TableHead>
		<!-- <TableHeadCell>{data.post.title}</TableHeadCell> -->
		<TableHeadCell>Identifiant</TableHeadCell>
		<TableHeadCell>Client</TableHeadCell>
		<TableHeadCell>Sexe</TableHeadCell>
		<TableHeadCell>Téléphone</TableHeadCell>
		<TableHeadCell>Couleur</TableHeadCell>
		<TableHeadCell>Modèle</TableHeadCell>
		<TableHeadCell>Statut commande</TableHeadCell>
	</TableHead>
	<TableBody>
			{#each blouses as blouse(blouse.identifiantBlouse)}
				<TableBodyRow key={data.blouses.identifiantBlouse}>
					<TableBodyCell>{blouse.identifiantBlouse}</TableBodyCell>
					<TableBodyCell>{blouse.prenom} {blouse.nom}</TableBodyCell>
					<TableBodyCell>{blouse.sexe == true ?'Homme':'Femme'}</TableBodyCell>
					<TableBodyCell>{blouse.telephone}</TableBodyCell>
					<TableBodyCell>{blouse.couleur}</TableBodyCell>
					<TableBodyCell>{blouse.modele}</TableBodyCell>
					<TableBodyCell>
						<Label>
							<Select class="mt-2" bind:value={blouse.statutCommande} />
						</Label>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
</Table>
</div>
<style>
	.main {
		flex: 1;
		padding: 20px;
	}
</style>
