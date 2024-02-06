<script>
	/** @type {import('./$types').PageData} */

	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

    export let data;
    // console.log("content of data" + data.blouses)
    const blouses = data.blouses;

    // Fetch data from the server

	// Call fetchData when the component is mounted
</script>
<!-- <h1>{data.post.title}</h1>
<div>{@html data.post.content}</div> -->
<Table>
	<TableHead>
		<!-- <TableHeadCell>{data.post.title}</TableHeadCell> -->
		<TableHeadCell>IdentifiantBlouse</TableHeadCell>
		<TableHeadCell>Téléphone</TableHeadCell>
		<TableHeadCell>Couleur</TableHeadCell>
		<TableHeadCell>Modèle</TableHeadCell>
	</TableHead>
	<TableBody>
        <!-- <TableBodyRow>
            <TableBodyCell>
                hey
            </TableBodyCell>
        </TableBodyRow> -->
		{#each blouses as blouse (blouse.identifiantBlouse)}
			<TableBodyRow key={data.blouses.identifiantBlouse}>
				<TableBodyCell>{blouse.identifiantBlouse}</TableBodyCell>
				<TableBodyCell>{blouse.telephone}</TableBodyCell>
				<TableBodyCell>{blouse.couleur}</TableBodyCell>
				<TableBodyCell>{blouse.modele}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
