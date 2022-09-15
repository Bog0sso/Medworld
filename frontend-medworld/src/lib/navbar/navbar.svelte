<header>
	<ul id="topNavBar">
		<li class="navElement" id="black-button-header">Medstyle</li>
		<li class="navElement">&Agrave; propos</li>
		<li class="navElement" id="red-color-text-header">Nos produits</li>
		<li class="navElement">Contactez-nous</li>
	</ul>
</header>

<style>
	#topNavBar {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: 0;
		font-size: var(--font-size-header);
	}

	#black-button-header {
		color: #ffffff;
		background: #2BDAE5;
		background-size: cover;
		padding: 10px 10px;
		align-self: flex-start;
	}

	#red-color-text-header {
		color: #2BDAE5;
	}

	.navElement {
		margin: 0 0.8rem;
	}

	@media screen and (max-width: 360px) {
		#topNavBar {
			display: none;
		}
	}
</style>