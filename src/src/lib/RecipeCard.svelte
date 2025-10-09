<script>
	let { Recipes } = $props();
</script>

<article class="card">
	<h2>{Recipes.name}</h2>
	<p><strong>Servings:</strong> {Recipes.servings}</p>
	<p><strong>Time:</strong> {Recipes.time} minutes</p>
	<p><strong>Nutrition:</strong> {Recipes.nutrition}</p>

	<h3>Ingredients</h3>
	<ul>
		{#each Recipes.ingredients as ingredient}
			<li>{ingredient}</li>
		{/each}
	</ul>

	<h3>Instructions</h3>
	<ol>
		{#each Recipes.instructions as step}
			<li>{step}</li>
		{/each}
	</ol>

	{#if Recipes.tags?.length}
		<h3>Tags</h3>
		<ul class="tags">
			{#each Recipes.tags as tag}
				<li>{tag}</li>
			{/each}
		</ul>
	{/if}
</article>

<style>
	.card {
		background: #222;
		color: #fff;
		padding: 1.5rem;
		border-radius: 1rem;
		border: var(--bord);
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
		margin: 1rem auto;
		width: fit-content;
		max-width: 100%;
	}

	h2,
	h3,
	p {
		margin: 0;
		padding: 0;
	}

	ol {
		li {
			margin: 0 1.25rem;
			padding: 0;
		}
	}

	h2 {
		margin-bottom: 0.25rem;
	}

	h3 {
		margin-top: 1rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		padding-bottom: 0;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
		padding: 0;
	}

	.tags li {
		background: #444;
		margin-top: 0.25rem;
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
	}
</style>
