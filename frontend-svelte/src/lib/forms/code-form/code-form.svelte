<script>
	import { onMount } from 'svelte';
	import 'flowbite';

	let mfaCode = ['', '', '', '', '', ''];
	let errorMessage = '';

	function validateMfaCode() {
		const code = mfaCode.join('');
		if (code.length !== 6 || isNaN(code)) {
			errorMessage = 'Le code doit être composé de 6 chiffres.';
		} else {
			errorMessage = '';
			submitForm(code);
		}
	}

	function handleInputChange(index, event) {
		mfaCode[index] = event.target.value;
		if (event.target.value && index < 5) {
			document.getElementById(`mfa-input-${index + 1}`).focus();
		}
	}

	function submitForm(code) {
		// Logic to submit the form
		console.log('Code MFA soumis:', code);
		// You can add API call logic or other submission logic here
	}
</script>

<div class="mx-auto mt-10 max-w-sm">
	<form
		on:submit|preventDefault={validateMfaCode}
		class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
	>
		<div class="mb-4">
			<label for="mfa-code" class="mb-2 block text-sm font-bold text-gray-700"
				>Code de confirmation</label
			>
			<div class="flex space-x-2">
				{#each Array(6) as _, i}
					<input
						id={`mfa-input-${i}`}
						type="text"
						bind:value={mfaCode[i]}
						on:input={(event) => handleInputChange(i, event)}
						maxlength="1"
						class="focus:shadow-outline w-10 appearance-none rounded border px-3 py-2 text-center leading-tight text-gray-700 shadow focus:outline-none"
					/>
				{/each}
			</div>
			{#if errorMessage}
				<p class="error text-xs italic text-red-500">{errorMessage}</p>
			{/if}
		</div>
		<div class="flex items-center justify-between">
			<button
				type="submit"
				class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
			>
				Confirmer commande
			</button>
		</div>
	</form>
</div>

<style>
	.error {
		color: red;
	}
</style>
