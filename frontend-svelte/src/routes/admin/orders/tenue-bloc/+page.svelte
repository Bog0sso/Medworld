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
	let tenuesbloc = data.tenuesbloc;
</script>
<div class="main">
<h1>Tenues de bloc</h1>

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
			{#each tenuesbloc as tenuebloc(tenuebloc.identifiantTenueBloc)}
				<TableBodyRow key={data.tenuesbloc.identifianttenuebloc}>
					<TableBodyCell>{tenuebloc.identifiantTenueBloc}</TableBodyCell>
					<TableBodyCell>{tenuebloc.prenom} {tenuebloc.nom}</TableBodyCell>
					<TableBodyCell>{tenuebloc.sexe}</TableBodyCell>
					<TableBodyCell>{tenuebloc.telephone}</TableBodyCell>
					<TableBodyCell>{tenuebloc.couleur}</TableBodyCell>
					<TableBodyCell>{tenuebloc.modele}</TableBodyCell>
					<TableBodyCell>
						<Label>
							<Select class="mt-2" bind:value={tenuebloc.statutCommande} />
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
