/** @type {import('./$types').PageLoad} */ export async function load({fetch}) {
    const URL="http://localhost:3000/bloc-tenues"
    const tenuesbloc = await (await fetch(URL)).json()
    console.log(tenuesbloc)
	return {
        tenuesbloc
	};
}