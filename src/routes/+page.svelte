<script lang="ts">
	import RecipeCard from '$lib/RecipeCard.svelte';
	import type { Recipe } from '$lib/data/Recipes';
	import { Starch } from '$lib/data/Starch';
	import { Vegetables } from '$lib/data/Vegetables';
	import { Sandwiches } from '$lib/data/Sandwiches';
	import { Soups } from '$lib/data/Soups';
	import { Mains } from '$lib/data/Mains';
	import { Desserts } from '$lib/data/Desserts';

	let includeStarch = $state(true);
	let includeVeg = $state(true);
	let includeSandwiches = $state(true);
	let includeSoup = $state(true);
	let includeMain = $state(true);
	let includeDessert = $state(true);

	let meal = $state<{
		starch?: Recipe;
		veg?: Recipe;
		sandwiches?: Recipe;
		soup?: Recipe;
		main?: Recipe;
		dessert?: Recipe;
	}>({});

	function generateMeal() {
		const newMeal: typeof meal = {};

		if (includeStarch && Starch.length)
			newMeal.starch = Starch[Math.floor(Math.random() * Starch.length)];
		if (includeVeg && Vegetables.length)
			newMeal.veg = Vegetables[Math.floor(Math.random() * Vegetables.length)];
		if (includeSandwiches && Sandwiches.length)
			newMeal.sandwiches = Sandwiches[Math.floor(Math.random() * Sandwiches.length)];
		if (includeSoup && Soups.length) newMeal.soup = Soups[Math.floor(Math.random() * Soups.length)];
		if (includeMain && Mains.length) newMeal.main = Mains[Math.floor(Math.random() * Mains.length)];
		if (includeDessert && Desserts.length)
			newMeal.dessert = Desserts[Math.floor(Math.random() * Desserts.length)];

		meal = newMeal;
	}

	function saveMealAsText() {
		let text = '--- Your Meal ---\n\n';

		for (const [key, recipe] of Object.entries(meal)) {
			if (!recipe) continue;
			text += `${key.toUpperCase()}: ${recipe.name}\n`;
			text += `Servings: ${recipe.servings}\n`;
			text += `Time: ${recipe.time} minutes\n`;
			text += `Nutrition: ${recipe.nutrition}\n\nIngredients:\n`;
			recipe.ingredients.forEach((ing) => (text += `- ${ing}\n`));
			text += '\nInstructions:\n';
			recipe.instructions.forEach((step, i) => (text += `${i + 1}. ${step}\n`));
			text += '\n----------------------\n\n';
		}

		// create a blob and trigger download
		const blob = new Blob([text], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'meal.txt';
		a.click();
		URL.revokeObjectURL(url);
	}

	function reroll(category: keyof typeof meal) {
		const sources = {
			starch: Starch,
			veg: Vegetables,
			sandwiches: Sandwiches,
			soup: Soups,
			main: Mains,
			dessert: Desserts
		};

		const list = sources[category];
		if (list && list.length) {
			meal = { ...meal, [category]: list[Math.floor(Math.random() * list.length)] };
		}
	}
</script>

<main>
	<div class="controls">
		<div class="checkbox-group">
			<label><input type="checkbox" bind:checked={includeStarch} /> Include Starch</label>
			<label><input type="checkbox" bind:checked={includeVeg} /> Include Vegetable</label>
			<label><input type="checkbox" bind:checked={includeSandwiches} /> Include Sandwiches</label>
			<label><input type="checkbox" bind:checked={includeSoup} /> Include Soup</label>
			<label><input type="checkbox" bind:checked={includeMain} /> Include Main</label>
			<label><input type="checkbox" bind:checked={includeDessert} /> Include Dessert</label>
		</div>

		<div class="buttons">
			<button class="generate-btn" onclick={generateMeal}>Generate Meal</button>
			<button class="save-btn" onclick={saveMealAsText} disabled={!Object.keys(meal).length}>
				Save Meal as .TXT
			</button>
		</div>
	</div>

	<section class="recipeGrid">
		{#if meal.starch}
			<div class="recipe-card-container">
				<RecipeCard Recipes={meal.starch} />
				<button class="reroll-btn" onclick={() => reroll('starch')}>Reroll Starch</button>
			</div>
		{/if}

		{#if meal.veg}
			<div class="recipe-card-container">
				<RecipeCard Recipes={meal.veg} />
				<button class="reroll-btn" onclick={() => reroll('veg')}>Reroll Vegetable</button>
			</div>
		{/if}

		{#if meal.sandwiches}
			<div class="recipe-card-container">
				<RecipeCard Recipes={meal.sandwiches} />
				<button class="reroll-btn" onclick={() => reroll('sandwiches')}>Reroll Sandwich</button>
			</div>
		{/if}

		{#if meal.soup}
			<div class="recipe-card-container">
				<RecipeCard Recipes={meal.soup} />
				<button class="reroll-btn" onclick={() => reroll('soup')}>Reroll Soup</button>
			</div>
		{/if}

		{#if meal.main}
			<div class="recipe-card-container">
				<RecipeCard Recipes={meal.main} />
				<button class="reroll-btn" onclick={() => reroll('main')}>Reroll Main</button>
			</div>
		{/if}

		{#if meal.dessert}
			<div class="recipe-card-container">
				<RecipeCard Recipes={meal.dessert} />
				<button class="reroll-btn" onclick={() => reroll('dessert')}>Reroll Dessert</button>
			</div>
		{/if}
	</section>
</main>

<style>
	/* minimal styles */
	main {
		padding: 1rem;
		font-family: system-ui, sans-serif;
	}

	.controls {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;
		border-radius: 12px;
		max-width: 700px;
		margin: 0 auto 2rem auto;
	}

	.checkbox-group {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 0.8rem;
	}

	.checkbox-group label {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.75rem;
		background-color: var(--accent-1);
		border-radius: 8px;
		cursor: pointer;
		transition: background 0.2s;
	}

	.checkbox-group label:hover {
		background-color: var(--hover);
	}

	.buttons {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	button {
		padding: 0.6rem 1.2rem;
		border: none;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition:
			background 0.2s,
			transform 0.1s;
	}

	.generate-btn {
		background-color: var(--accent-2);
		color: white;
	}

	.generate-btn:hover {
		background-color: var(--hover-2);
		transform: scale(1.03);
	}

	.save-btn {
		background-color: var(--accent-2);
		color: var(--txt-1);
		border: var(--bord);
	}

	.save-btn:hover {
		background-color: var(--hover-2);
		transform: scale(1.03);
	}

	button:disabled,
	button:disabled:hover {
		background-color: #cccccc;
		cursor: not-allowed;
		transform: none;
	}
	.recipeGrid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem; /* space between cards */
		width: 100%;
		margin: 0 auto;
		padding: 1rem;

		@media screen and (min-width: 600px) {
			grid-template-columns: 1fr 1fr; /* 2 columns on tablets */
		}

		@media screen and (min-width: 1024px) {
			grid-template-columns: 1fr 1fr 1fr; /* 3 columns on desktops */
		}
	}

	.recipe-card-container {
		position: relative;
		display: flex;
		flex-direction: column;
		border-radius: 12px;
		padding: 1rem;
		transition:
			transform 0.15s,
			box-shadow 0.2s;
	}

	.recipe-card-container:hover {
		transform: translateY(-3px);
	}

	.recipe-card-container .reroll-btn {
		position: absolute;
		align-self: center;
		background-color: var(--accent-2);
		color: white;
		border: none;
		border-radius: 6px;
		padding: 0.3rem 0.6rem;
		cursor: pointer;
		transition:
			background 0.2s,
			transform 0.1s;
	}

	.reroll-btn {
		background-color: #ff9800;
		width: fit-content;
		height: fit-content;
		color: white;
		border: none;
		border-radius: 6px;
		padding: 0.4rem 0.8rem;
		cursor: pointer;
		transition:
			background 0.2s,
			transform 0.1s;
	}

	.reroll-btn:hover {
		background-color: var(--hover-2);
		transform: scale(1.05);
	}
</style>
