<script lang="ts">
	import RecipeCard from '$lib/RecipeCard.svelte';
	import type { Recipe } from '$lib/data/Recipes';
	import { Vegetables, Starch, Mains, Desserts } from '$lib/data/Recipes';

	let includeStarch = $state(true);
	let includeVeg = $state(true);
	let includeMain = $state(true);
	let includeDessert = $state(true);

	let meal = $state<{ starch?: Recipe; veg?: Recipe; main?: Recipe; dessert?: Recipe }>({});

	function generateMeal() {
		const newMeal: typeof meal = {};

		if (includeStarch && Starch.length)
			newMeal.starch = Starch[Math.floor(Math.random() * Starch.length)];
		if (includeVeg && Vegetables.length)
			newMeal.veg = Vegetables[Math.floor(Math.random() * Vegetables.length)];
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
</script>

<main>
	<div class="controls">
		<label><input type="checkbox" bind:checked={includeStarch} /> Include Starch</label>
		<label><input type="checkbox" bind:checked={includeVeg} /> Include Vegetable</label>
		<label><input type="checkbox" bind:checked={includeMain} /> Include Main</label>
		<label><input type="checkbox" bind:checked={includeDessert} /> Include Dessert</label>

		<button onclick={generateMeal}>Generate Meal</button>
		<button onclick={saveMealAsText} disabled={!Object.keys(meal).length}
			>Save Meal as .TXT to not lose it</button
		>
	</div>

	<section class="recipeGrid">
		{#if meal.starch}<RecipeCard Recipes={meal.starch} />{/if}
		{#if meal.veg}<RecipeCard Recipes={meal.veg} />{/if}
		{#if meal.main}<RecipeCard Recipes={meal.main} />{/if}
		{#if meal.dessert}<RecipeCard Recipes={meal.dessert} />{/if}
	</section>
</main>

<style>
	/* minimal styles */
	main {
		padding: 1rem;
		font-family: system-ui, sans-serif;
	}

	.recipeGrid {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		margin: 0;
		padding: 0;

		@media screen and (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
	}

	.controls {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
		align-items: center;
		margin-bottom: 1rem;
	}
</style>
