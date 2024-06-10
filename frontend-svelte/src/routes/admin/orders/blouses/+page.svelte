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
	let status = [
    { value: 'Validée', name: 'Validée' },
    { value: 'En cours', name: 'En cours' },
    { value: 'Prête', name: 'Prête' },
    { value: 'Livrée', name: 'Livrée' },
    { value: 'Retour', name: 'Retour' }
];
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
			{#each blouses as blouse(blouse.identifiantblouse)}
				<TableBodyRow key={data.blouses.identifiantblouse}>
					<TableBodyCell>{blouse.identifiantblouse}</TableBodyCell>
					<TableBodyCell>{blouse.prenom} {blouse.nom}</TableBodyCell>
					<TableBodyCell>{blouse.sexe == true ? 'Homme':'Femme'}</TableBodyCell>
					<TableBodyCell>{blouse.telephone}</TableBodyCell>
					<TableBodyCell>{blouse.couleur}</TableBodyCell>
					<TableBodyCell>{blouse.modele}</TableBodyCell>
					<TableBodyCell>
						<Label>
							<Select class="mt-2" items = {status} value={blouse.statutCommande}/>
						<!-- Validée - En cours - Prête - Livrée - Retour -->
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
