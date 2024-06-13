<script lang="ts">
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

	async function updateStatutCommande(identifiantBlouse: string, newStatus: string) {
		console.log(`${newStatus}`);
        const blouseIndex = blouses.findIndex(blouse => blouse.identifiantBlouse === identifiantBlouse);
        if (blouseIndex !== -1) {
			// update the local data
            blouses[blouseIndex].statutCommande = newStatus;
			//then update the backend
			try {
				//TBD : update API route on backend the accept item update
				const BACKEND_URL_BLOUSE = "http://localhost:3000/blouses"
                const response = await fetch(`${BACKEND_URL_BLOUSE}/${identifiantBlouse}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        identifiantBlouse: identifiantBlouse,
                        statutCommande: newStatus
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to update statutCommande on the server');
                }

                const result = await response.json();
                console.log('Update successful', result);
            } catch (error) {
                console.error('Error updating statutCommande:', error);
                // Optionally revert the local change if the server update fails
                blouses[blouseIndex].statutCommande = blouses[blouseIndex].statutCommande;
            }
        }
    }
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
			{#each blouses as blouse (blouse.identifiantBlouse)}
				<TableBodyRow key={data.blouses.identifiantBlouse}>
					<TableBodyCell>{blouse.identifiantBlouse}</TableBodyCell>
					<TableBodyCell>{blouse.prenom} {blouse.nom}</TableBodyCell>
					<TableBodyCell>{blouse.sexe == true ? 'Homme' : 'Femme'}</TableBodyCell>
					<TableBodyCell>{blouse.telephone}</TableBodyCell>
					<TableBodyCell>{blouse.couleur}</TableBodyCell>
					<TableBodyCell>{blouse.modele}</TableBodyCell>
					<TableBodyCell>
						<Label>
							<Select
								class="mt-2"
								items={status}
								value={blouse.statutCommande}
								on:change={(event) =>
									updateStatutCommande(blouse.identifiantBlouse, event.target.value)}
							/>
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
