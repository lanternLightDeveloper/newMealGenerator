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
	let glutenFreeOnly = $state(false);
	let vegetarianFriendly = $state(false);
	let economic = $state(false);
	let fastComplete = $state(false);
	let easyComplete = $state(false);

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

		function getRandomRecipe(list) {
			let filtered = list;
			if (glutenFreeOnly) {
				filtered = list.filter((r) => r.tags?.includes('gluten-free'));
			}
			if (vegetarianFriendly) {
				filtered = list.filter((r) => r.tags?.includes('vegetarian'));
			}
			if (economic) {
				filtered = list.filter((r) => r.tags?.includes('economic'));
			}
			if (fastComplete) {
				filtered = list.filter((r) => r.tags?.includes('fast'));
			}
			if (easyComplete) {
				filtered = list.filter((r) => r.tags?.includes('easy'));
			}
			if (!filtered.length) return null; // no matching recipes
			return filtered[Math.floor(Math.random() * filtered.length)];
		}

		if (includeStarch && Starch.length) newMeal.starch = getRandomRecipe(Starch);
		if (includeVeg && Vegetables.length) newMeal.veg = getRandomRecipe(Vegetables);
		if (includeSandwiches && Sandwiches.length) newMeal.sandwiches = getRandomRecipe(Sandwiches);
		if (includeSoup && Soups.length) newMeal.soup = getRandomRecipe(Soups);
		if (includeMain && Mains.length) newMeal.main = getRandomRecipe(Mains);
		if (includeDessert && Desserts.length) newMeal.dessert = getRandomRecipe(Desserts);

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
			let filtered = list;
			if (glutenFreeOnly) {
				filtered = list.filter((r) => r.tags?.includes('gluten-free'));
			}
			if (vegetarianFriendly) {
				filtered = list.filter((r) => r.tags?.includes('vegetarian'));
			}
			if (economic) {
				filtered = list.filter((r) => r.tags?.includes('economic'));
			}
			if (fastComplete) {
				filtered = list.filter((r) => r.tags?.includes('fast'));
			}
			if (easyComplete) {
				filtered = list.filter((r) => r.tags?.includes('easy'));
			}
			if (filtered.length) {
				meal = { ...meal, [category]: filtered[Math.floor(Math.random() * filtered.length)] };
			}
		}
	}

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<main>
	<div class:open={isMenuOpen}>
		{#if isMenuOpen}
			<section class="block-Selection-List">
				<p>Select to include</p>
				<article class="controls">
					<p class="double-Block">Keywords</p>

					<label for="MakeGf">
						<a style="color: var(--txt-1);" href="/MakeGf">Gluten free guide</a>
					</label>
					<label for="MakeVeg">
						<a style="color: var(--txt-1);" href="/MakeVeg">Vegetarian swap guide</a>
					</label>
					<label>
						<input type="checkbox" bind:checked={glutenFreeOnly} /> Gluten-Free Only
					</label>
					<label>
						<input type="checkbox" bind:checked={vegetarianFriendly} /> Vegetarian
					</label>
					<label>
						<input type="checkbox" bind:checked={economic} /> Economic
					</label>
					<label>
						<input type="checkbox" bind:checked={fastComplete} /> Fast
					</label>
					<label>
						<input type="checkbox" bind:checked={easyComplete} /> Easy
					</label>

					<br />
					<p>Meal Options</p>
					<br />
					<label><input type="checkbox" bind:checked={includeStarch} /> Starch</label>
					<label><input type="checkbox" bind:checked={includeVeg} /> Vegetable</label>
					<label><input type="checkbox" bind:checked={includeSandwiches} /> Sandwiches</label>
					<label><input type="checkbox" bind:checked={includeSoup} /> Soup</label>
					<label><input type="checkbox" bind:checked={includeMain} /> Main</label>
					<label><input type="checkbox" bind:checked={includeDessert} /> Dessert</label>
					<div class="double-Block">
						<button class="btn-Fill" onclick={generateMeal}><span> Generate Meal </span></button>
						<button class="btn-Fill" onclick={saveMealAsText} disabled={!Object.keys(meal).length}>
							<span> Save Meal as .TXT </span>
						</button>
					</div>
				</article>
			</section>
		{/if}
	</div>

	<button
		class="btn-Ghost"
		style="margin: 1rem 42%;"
		onclick={toggleMenu}
		onkeydown={() => (isMenuOpen = false)}
	>
		Menu
	</button>
	<section class="grid-Main">
		{#if meal.starch}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('starch')}>Reroll Starch</button>
				<RecipeCard Recipes={meal.starch} />
			</div>
		{/if}

		{#if meal.veg}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('veg')}>Reroll Vegetable</button>
				<RecipeCard Recipes={meal.veg} />
			</div>
		{/if}

		{#if meal.sandwiches}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('sandwiches')}>Reroll Sandwich</button>
				<RecipeCard Recipes={meal.sandwiches} />
			</div>
		{/if}

		{#if meal.soup}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('soup')}>Reroll Soup</button>
				<RecipeCard Recipes={meal.soup} />
			</div>
		{/if}

		{#if meal.main}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('main')}>Reroll Main</button>
				<RecipeCard Recipes={meal.main} />
			</div>
		{/if}

		{#if meal.dessert}
			<div>
				<button class="btn-Ghost" onclick={() => reroll('dessert')}>Reroll Dessert</button>
				<RecipeCard Recipes={meal.dessert} />
			</div>
		{/if}
	</section>
</main>
