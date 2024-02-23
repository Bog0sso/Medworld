<!-- Sidebar.svelte -->
<script lang="ts">

	import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	import { MailBoxSolid } from 'flowbite-svelte-icons';

	// Add any logic or props needed for the sidebar here

	let spanClass = 'flex-1 ms-3 whitespace-nowrap';

	let site = {
		name: 'MEDSTYLE',
		href: '/admin/orders'
	};
</script>
<div class="flex">
<aside class="sidebar">
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<!-- <SidebarBrand {site} /> -->

				<SidebarItem label="Blouses" {spanClass}>
					<svelte:fragment slot="icon">
						<MailBoxSolid
							class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
						>
							3
						</span>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Tenues de bloc" {spanClass}>
					<svelte:fragment slot="icon">
						<MailBoxSolid
							class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
						>
							3
						</span>
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</aside>
<slot />
</div>

<style>
	.sidebar {
		width: fit-content; /* Adjust the width as needed */
		/* background-color: blue; */
		padding: 8px;
	}
	.flex {
		display: flex;
		height: 100vh;
	}
</style>
