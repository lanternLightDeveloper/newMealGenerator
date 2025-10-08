<script lang="ts">
	import RecipeCard from '$lib/RecipeCard.svelte';
	import type { Recipe } from '$lib/data/Recipes';
	import { Vegetables, Starch, Mains, Desserts } from '$lib/data/Recipes';

	// checkbox state
	let includeStarch = $state(true);
	let includeVeg = $state(true);
	let includeMain = $state(true);
	let includeDessert = $state(true);

	// generated meal
	let meal = $state<{ starch?: Recipe; veg?: Recipe; main?: Recipe; dessert?: Recipe }>({});

	function generateMeal() {
		const newMeal: typeof meal = {};

		if (includeStarch && Starch.length) {
			const i = Math.floor(Math.random() * Starch.length);
			newMeal.starch = Starch[i];
		}

		if (includeVeg && Vegetables.length) {
			const i = Math.floor(Math.random() * Vegetables.length);
			newMeal.veg = Vegetables[i];
		}

		if (includeMain && Mains.length) {
			const i = Math.floor(Math.random() * Mains.length);
			newMeal.main = Mains[i];
		}

		if (includeDessert && Desserts.length) {
			const i = Math.floor(Math.random() * Desserts.length);
			newMeal.dessert = Desserts[i];
		}

		meal = newMeal;
	}
</script>

<main>
	<div class="controls">
		<label>
			<input type="checkbox" bind:checked={includeStarch} />
			Starch
		</label>
		<label>
			<input type="checkbox" bind:checked={includeVeg} />
			Vegetable
		</label>
		<label>
			<input type="checkbox" bind:checked={includeMain} />
			Main
		</label>
		<label>
			<input type="checkbox" bind:checked={includeDessert} />
			Dessert
		</label>

		<button onclick={generateMeal}>Generate Meal</button>
	</div>

	<section class="recipeGrid">
		{#if meal.starch}
			<RecipeCard Recipes={meal.starch} />
		{/if}
		{#if meal.veg}
			<RecipeCard Recipes={meal.veg} />
		{/if}
		{#if meal.main}
			<RecipeCard Recipes={meal.main} />
		{/if}
		{#if meal.dessert}
			<RecipeCard Recipes={meal.dessert} />
		{/if}
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
