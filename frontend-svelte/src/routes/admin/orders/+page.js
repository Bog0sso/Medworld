/** @type {import('./$types').PageLoad} */ export async function load({fetch}) {
    const blouses = await (await fetch('http://localhost:3000/blouses')).json()
    console.log(blouses)
	return {
        blouses
	};
}