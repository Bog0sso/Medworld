/** @type {import('./$types').PageLoad} */ export async function load({fetch}) {
    const URL="http://localhost:3000/blouses"
    const blouses = await (await fetch(URL)).json()
    console.log(blouses)
	return {
        blouses
	};
}