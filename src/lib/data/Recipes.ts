export type Recipe = {
	id: number;
	name: string;
	servings: string;
	ingredients: string[];
	instructions: string[];
	tags: string[];
	nutrition: string;
	time: number;
};

export const Vegetables: Recipe[] = [
	{
		id: 1,
		name: 'Honey Glazed Roasted Carrots',
		servings: '4',
		ingredients: ['carrots', 'olive oil', 'honey', 'butter', 'salt', 'black pepper', 'fresh thyme'],
		instructions: [
			'Preheat the oven to 400°F (200°C). Line a baking sheet with parchment paper.',
			'Peel and trim the carrots, then cut them in half lengthwise if thick.',
			'In a large bowl, toss the carrots with olive oil, melted butter, honey, salt, and black pepper until evenly coated.',
			'Spread the carrots on the prepared baking sheet in a single layer.',
			'Roast for 20–25 minutes, turning once halfway through, until tender and caramelized.',
			'Transfer to a serving dish and sprinkle with fresh thyme leaves before serving.',
			'Enjoy your sweet and savory glazed carrots!'
		],
		tags: ['side', 'carrot', 'glazed', 'roasted', 'easy', 'vegetarian', 'gluten-free'],
		nutrition: '180 calories, 22g carbs, 9g fat, 1g protein',
		time: 30
	},
	{
		id: 2,
		name: 'Carrot Ginger Purée',
		servings: '4',
		ingredients: ['carrots', 'fresh ginger', 'butter', 'heavy cream', 'salt', 'pepper', 'water'],
		instructions: [
			'Peel and chop the carrots into small chunks.',
			'In a medium saucepan, melt butter over medium heat.',
			'Add the carrots and sauté for 3–4 minutes, then add grated ginger and cook for another minute until fragrant.',
			'Pour in enough water to just cover the carrots, then bring to a boil.',
			'Reduce heat and simmer for 15 minutes, or until carrots are tender.',
			'Drain most of the water, then transfer carrots to a blender.',
			'Add cream, salt, and pepper, and blend until smooth and creamy.',
			'Adjust seasoning and serve warm as a silky side dish.'
		],
		tags: ['side', 'carrot', 'ginger', 'puree', 'smooth', 'vegetarian', 'gluten-free'],
		nutrition: '140 calories, 12g carbs, 9g fat, 2g protein',
		time: 25
	},
	{
		id: 3,
		name: 'Spiced Carrot Couscous',
		servings: '4',
		ingredients: [
			'carrots',
			'couscous',
			'olive oil',
			'cumin',
			'coriander',
			'cinnamon',
			'raisins',
			'lemon juice',
			'parsley',
			'salt',
			'pepper'
		],
		instructions: [
			'Grate the carrots finely and set aside.',
			'Bring 1 cup (240 ml) of water to a boil, then remove from heat and stir in couscous, olive oil, salt, and spices.',
			'Cover and let sit for 5 minutes, then fluff with a fork.',
			'Stir in grated carrots, raisins, and lemon juice.',
			'Season with salt and pepper to taste, and fold in chopped parsley before serving.',
			'Serve warm or at room temperature for a fragrant side dish.'
		],
		tags: ['carrot', 'couscous', 'spiced', 'side', 'quick', 'vegetarian', 'gluten-free'],
		nutrition: '230 calories, 38g carbs, 7g fat, 4g protein',
		time: 20
	},
	{
		id: 4,
		name: 'Carrot and Orange Salad with Mint',
		servings: '4',
		ingredients: [
			'carrots',
			'orange juice',
			'olive oil',
			'honey',
			'fresh mint',
			'lemon juice',
			'salt',
			'pepper'
		],
		instructions: [
			'Peel and grate the carrots into a large mixing bowl.',
			'In a small bowl, whisk together orange juice, lemon juice, olive oil, and honey to make a light dressing.',
			'Pour the dressing over the grated carrots and toss until evenly coated.',
			'Season with salt and pepper, then chill for at least 15 minutes.',
			'Just before serving, sprinkle with chopped fresh mint leaves.',
			'Serve cold as a refreshing side salad.'
		],
		tags: ['carrot', 'salad', 'mint', 'orange', 'fresh', 'side', 'vegetarian', 'gluten-free'],
		nutrition: '120 calories, 15g carbs, 6g fat, 1g protein',
		time: 15
	},
	{
		id: 5,
		name: 'Roasted Carrots with Garlic and Herbs',
		servings: '4',
		ingredients: ['carrots', 'olive oil', 'garlic', 'rosemary', 'thyme', 'salt', 'pepper'],
		instructions: [
			'Preheat the oven to 425°F (220°C).',
			'Peel the carrots and cut them into even sticks.',
			'Toss carrots in a large bowl with olive oil, minced garlic, chopped rosemary, thyme, salt, and pepper.',
			'Spread on a baking sheet in a single layer.',
			'Roast for 25 minutes, turning halfway through, until golden and crisp on the edges.',
			'Serve warm as a rustic, aromatic side dish.'
		],
		tags: ['carrot', 'roasted', 'garlic', 'herbs', 'side', 'vegetarian', 'easy'],
		nutrition: '160 calories, 18g carbs, 8g fat, 2g protein',
		time: 30
	},
	{
		id: 6,
		name: 'Garlic Roasted Broccoli',
		servings: '4',
		ingredients: [
			'1 lb broccoli florets',
			'3 tbsp olive oil',
			'3 cloves garlic, minced',
			'½ tsp salt',
			'¼ tsp black pepper',
			'½ lemon, juiced'
		],
		instructions: [
			'Preheat oven to 425°F (220°C).',
			'Toss broccoli with olive oil, garlic, salt, and pepper.',
			'Spread on a baking sheet and roast for 20 minutes, stirring halfway.',
			'Drizzle with lemon juice before serving.'
		],
		tags: ['roasted', 'garlic', 'vegan', 'quick', 'side', 'vegetarian', 'gluten-free'],
		nutrition: '110 calories, 8g fat, 8g carbs, 4g protein',
		time: 25
	},
	{
		id: 7,
		name: 'Broccoli Cheese Bake',
		servings: '6',
		ingredients: [
			'5 cups broccoli florets',
			'1½ cups shredded cheddar cheese',
			'1 cup milk',
			'2 tbsp butter',
			'2 tbsp flour',
			'½ tsp salt',
			'¼ tsp pepper'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Steam broccoli for 3–4 minutes until bright green.',
			'In saucepan, melt butter, whisk in flour, then slowly add milk.',
			'Stir until thick, add cheese, salt, and pepper.',
			'Combine sauce with broccoli and bake for 20 minutes.'
		],
		tags: ['baked', 'cheesy', 'comfort food', 'side', 'vegetarian'],
		nutrition: '210 calories, 12g fat, 10g carbs, 15g protein',
		time: 30
	},
	{
		id: 8,
		name: 'Broccoli Almondine',
		servings: '4',
		ingredients: [
			'1 lb broccoli florets',
			'2 tbsp butter',
			'¼ cup sliced almonds',
			'1 tbsp lemon juice',
			'¼ tsp salt',
			'Black pepper to taste'
		],
		instructions: [
			'Steam broccoli for 4–5 minutes.',
			'In a skillet, melt butter and toast almonds until golden.',
			'Toss broccoli with almonds, lemon juice, salt, and pepper.'
		],
		tags: ['stovetop', 'buttery', 'nutty', 'quick', 'vegetarian', 'gluten-free'],
		nutrition: '130 calories, 9g fat, 8g carbs, 4g protein',
		time: 15
	},
	{
		id: 9,
		name: 'Broccoli with Parmesan and Olive Oil',
		servings: '4',
		ingredients: [
			'1 lb broccoli florets',
			'2 tbsp olive oil',
			'2 tbsp grated Parmesan cheese',
			'½ tsp salt',
			'¼ tsp red pepper flakes'
		],
		instructions: [
			'Steam or microwave broccoli until tender-crisp.',
			'Toss with olive oil, Parmesan, salt, and red pepper flakes.'
		],
		tags: ['quick', 'cheesy', 'vegetarian', 'easy'],
		nutrition: '120 calories, 9g fat, 6g carbs, 4g protein',
		time: 10
	},
	{
		id: 10,
		name: 'Broccoli Salad with Bacon and Cranberries',
		servings: '6',
		ingredients: [
			'5 cups raw broccoli florets',
			'½ cup cooked bacon, crumbled',
			'⅓ cup dried cranberries',
			'¼ cup sunflower seeds',
			'½ cup mayonnaise',
			'1 tbsp apple cider vinegar',
			'1 tbsp honey'
		],
		instructions: [
			'Whisk mayonnaise, vinegar, and honey together.',
			'Toss with broccoli, bacon, cranberries, and sunflower seeds.',
			'Chill 30 minutes before serving.'
		],
		tags: ['cold', 'salad', 'sweet-savory', 'make-ahead'],
		nutrition: '230 calories, 17g fat, 12g carbs, 6g protein',
		time: 35
	},
	{
		id: 11,
		name: 'Creamy Broccoli Soup',
		servings: '4',
		ingredients: [
			'1 lb broccoli, chopped',
			'1 small onion, diced',
			'2 cups vegetable broth',
			'1 cup milk',
			'1 tbsp butter',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sauté onion in butter until soft.',
			'Add broccoli and broth, simmer 10 minutes until tender.',
			'Blend until smooth, stir in milk, and season to taste.'
		],
		tags: ['soup', 'creamy', 'comfort', 'vegetarian', 'gluten-free'],
		nutrition: '160 calories, 8g fat, 15g carbs, 6g protein',
		time: 25
	},
	{
		id: 12,
		name: 'Broccoli and Mushroom Sauté',
		servings: '4',
		ingredients: [
			'1 lb broccoli florets',
			'1 cup sliced mushrooms',
			'2 tbsp olive oil',
			'1 clove garlic, minced',
			'¼ tsp salt',
			'⅛ tsp pepper'
		],
		instructions: [
			'Heat olive oil in a skillet and add garlic.',
			'Add mushrooms and cook until browned.',
			'Add broccoli and sauté until tender-crisp.',
			'Season with salt and pepper before serving.'
		],
		tags: ['stovetop', 'vegan', 'garlic', 'healthy'],
		nutrition: '140 calories, 9g fat, 11g carbs, 5g protein',
		time: 15
	},
	{
		id: 13,
		name: 'Parmesan Asparagus Bundles',
		servings: '4',
		ingredients: [
			'1 lb asparagus, trimmed',
			'4 slices prosciutto',
			'2 tbsp olive oil',
			'¼ cup grated Parmesan',
			'Fresh black pepper to taste'
		],
		instructions: [
			'Preheat oven to 400°F (200°C).',
			'Divide asparagus into 4 bundles and wrap each with prosciutto.',
			'Place on baking sheet, drizzle with olive oil, sprinkle with Parmesan.',
			'Roast 10–12 minutes until crisp-tender and lightly golden.'
		],
		tags: ['asparagus', 'prosciutto', 'baked', 'italian', 'elegant', 'vegetarian', 'gluten-free'],
		nutrition: '210 calories, 4g carbs, 16g fat, 12g protein',
		time: 20
	},
	{
		id: 14,
		name: 'Roasted Cauliflower with Tahini and Pomegranate',
		servings: '4',
		ingredients: [
			'1 head cauliflower, cut into florets',
			'2 tbsp olive oil',
			'2 tbsp tahini',
			'1 tbsp lemon juice',
			'¼ cup pomegranate seeds',
			'Fresh parsley for garnish',
			'Salt and pepper to taste'
		],
		instructions: [
			'Preheat oven to 425°F (220°C).',
			'Toss cauliflower with olive oil, salt, and pepper; roast 25 minutes.',
			'Drizzle with tahini and lemon juice, top with pomegranate seeds and parsley.'
		],
		tags: [
			'cauliflower',
			'roasted',
			'mediterranean',
			'vegan',
			'fancy',
			'vegetarian',
			'gluten-free'
		],
		nutrition: '260 calories, 14g carbs, 20g fat, 5g protein',
		time: 30
	},
	{
		id: 15,
		name: 'Honey-Glazed Baby Carrots with Thyme',
		servings: '4',
		ingredients: [
			'1 lb baby carrots',
			'2 tbsp butter',
			'1½ tbsp honey',
			'1 tsp fresh thyme leaves',
			'¼ tsp salt'
		],
		instructions: [
			'Steam or boil carrots until just tender, about 6–8 minutes.',
			'Melt butter in skillet, stir in honey and thyme.',
			'Toss carrots in glaze until glossy and fragrant.',
			'Serve warm.'
		],
		tags: ['carrots', 'glazed', 'honey', 'refined', 'vegetarian', 'gluten-free'],
		nutrition: '180 calories, 22g carbs, 9g fat, 2g protein',
		time: 20
	},
	{
		id: 16,
		name: 'Creamed Spinach with Garlic and Nutmeg',
		servings: '4',
		ingredients: [
			'1 lb fresh spinach',
			'2 tbsp butter',
			'2 cloves garlic, minced',
			'¾ cup heavy cream',
			'¼ cup grated Parmesan',
			'⅛ tsp nutmeg',
			'Salt and pepper to taste'
		],
		instructions: [
			'Wilt spinach in a skillet, then drain excess water.',
			'Melt butter, add garlic, and sauté 1 minute.',
			'Add cream, Parmesan, and nutmeg, simmer until thickened.',
			'Stir spinach back in and cook 2 minutes more.'
		],
		tags: ['spinach', 'creamy', 'classic', 'steakhouse', 'luxury', 'vegetarian', 'gluten-free'],
		nutrition: '290 calories, 10g carbs, 26g fat, 6g protein',
		time: 25
	},
	{
		id: 17,
		name: 'Grilled Artichokes with Lemon Aioli',
		servings: '4',
		ingredients: [
			'2 large artichokes',
			'2 tbsp olive oil',
			'½ cup mayonnaise',
			'1 tbsp lemon juice',
			'1 clove garlic, minced',
			'Salt and pepper to taste'
		],
		instructions: [
			'Trim and halve artichokes, steam 15 minutes until tender.',
			'Brush with olive oil and grill 3–4 minutes per side for char marks.',
			'Mix mayo, lemon juice, and garlic for aioli.',
			'Serve artichokes with aioli dip.'
		],
		tags: ['artichoke', 'grilled', 'fancy', 'appetizer', 'aioli'],
		nutrition: '240 calories, 10g carbs, 18g fat, 5g protein',
		time: 40
	},
	{
		id: 18,
		name: 'Roasted Beet Salad with Goat Cheese and Pistachios',
		servings: '4',
		ingredients: [
			'3 medium beets, roasted and sliced',
			'2 oz goat cheese, crumbled',
			'2 tbsp pistachios, chopped',
			'2 tbsp olive oil',
			'1 tbsp balsamic vinegar',
			'1 tsp honey',
			'Salt and pepper to taste'
		],
		instructions: [
			'Whisk olive oil, balsamic, honey, salt, and pepper for dressing.',
			'Toss beets in dressing, top with goat cheese and pistachios before serving.'
		],
		tags: ['salad', 'beet', 'goat cheese', 'refined', 'cold', 'vegetarian', 'gluten-free'],
		nutrition: '260 calories, 14g carbs, 20g fat, 7g protein',
		time: 30
	}
];

export const Starch: Recipe[] = [
	{
		id: 1,
		name: 'Garlic Herb Roasted Potatoes',
		servings: '4',
		ingredients: [
			'2 lbs baby potatoes, halved',
			'3 tbsp olive oil',
			'4 cloves garlic, minced',
			'1 tsp salt',
			'½ tsp black pepper',
			'1 tbsp fresh rosemary, chopped',
			'1 tbsp fresh thyme, chopped',
			'2 tbsp fresh parsley, chopped'
		],
		instructions: [
			'Preheat oven to 425°F (220°C).',
			'Toss halved potatoes with olive oil, garlic, salt, pepper, rosemary, and thyme.',
			'Spread evenly on a baking sheet lined with parchment paper.',
			'Roast for 25–30 minutes, stirring halfway, until golden and crisp.',
			'Toss with parsley before serving.',
			'Enjoy!'
		],
		tags: ['side', 'potato', 'garlic', 'roasted', 'herbs', 'vegetarian', 'gluten-free'],
		nutrition: '210 calories, 28g carbs, 9g fat, 3g protein',
		time: 35
	},
	{
		id: 2,
		name: 'Creamy Mashed Potatoes',
		servings: '6',
		ingredients: [
			'3 lbs russet potatoes, peeled and quartered',
			'½ cup unsalted butter',
			'1 cup whole milk',
			'½ cup heavy cream',
			'1½ tsp salt',
			'¼ tsp black pepper'
		],
		instructions: [
			'Boil potatoes in salted water for 15–20 minutes until tender.',
			'Drain and return to the pot.',
			'Mash with butter until smooth.',
			'Add warm milk and cream gradually, stirring to desired consistency.',
			'Season with salt and pepper.',
			'Serve warm.'
		],
		tags: ['side', 'comfort food', 'mashed', 'potato', 'creamy', 'vegetarian', 'gluten-free'],
		nutrition: '290 calories, 34g carbs, 14g fat, 5g protein',
		time: 30
	},
	{
		id: 3,
		name: 'Crispy Parmesan Potato Wedges',
		servings: '4',
		ingredients: [
			'4 large russet potatoes, cut into wedges',
			'3 tbsp olive oil',
			'½ cup grated Parmesan cheese',
			'1 tsp garlic powder',
			'1 tsp paprika',
			'½ tsp salt',
			'¼ tsp black pepper'
		],
		instructions: [
			'Preheat oven to 425°F (220°C).',
			'Toss potato wedges with olive oil, Parmesan, and seasonings.',
			'Arrange in a single layer on a baking sheet.',
			'Bake for 35 minutes, flipping halfway, until golden and crisp.',
			'Serve with your favorite dipping sauce.'
		],
		tags: ['side', 'baked', 'crispy', 'cheese', 'snack', 'vegetarian', 'gluten-free'],
		nutrition: '240 calories, 31g carbs, 10g fat, 6g protein',
		time: 40
	},
	{
		id: 4,
		name: 'Loaded Baked Potato Casserole',
		servings: '8',
		ingredients: [
			'3 lbs potatoes, peeled and cubed',
			'1 cup sour cream',
			'1 cup shredded cheddar cheese',
			'½ cup crumbled bacon',
			'¼ cup green onions, sliced',
			'4 tbsp butter',
			'½ tsp salt',
			'¼ tsp pepper'
		],
		instructions: [
			'Boil potatoes until tender, about 15 minutes. Drain and mash lightly.',
			'Stir in sour cream, butter, salt, and pepper.',
			'Transfer to a greased baking dish and top with cheese and bacon.',
			'Bake at 375°F (190°C) for 20 minutes.',
			'Garnish with green onions before serving.'
		],
		tags: ['side', 'comfort', 'bacon', 'cheese', 'casserole', 'gluten-free'],
		nutrition: '340 calories, 29g carbs, 18g fat, 11g protein',
		time: 45
	},
	{
		id: 5,
		name: 'Dijon Potato Salad',
		servings: '6',
		ingredients: [
			'2 lbs baby potatoes, halved',
			'¼ cup Dijon mustard',
			'3 tbsp olive oil',
			'1 tbsp apple cider vinegar',
			'½ tsp salt',
			'¼ tsp pepper',
			'¼ cup fresh dill, chopped',
			'2 green onions, chopped'
		],
		instructions: [
			'Boil potatoes until tender, about 10–12 minutes. Drain and cool slightly.',
			'Whisk together mustard, olive oil, vinegar, salt, and pepper.',
			'Toss warm potatoes with dressing, dill, and green onions.',
			'Serve warm or chilled.'
		],
		tags: ['salad', 'side', 'potato', 'mustard', 'picnic', 'vegetarian', 'gluten-free'],
		nutrition: '210 calories, 27g carbs, 9g fat, 4g protein',
		time: 25
	},
	{
		id: 6,
		name: 'Garlic Butter Smashed Potatoes',
		servings: '4',
		ingredients: [
			'1½ lbs baby potatoes',
			'3 tbsp butter, melted',
			'2 cloves garlic, minced',
			'1 tsp salt',
			'¼ tsp pepper',
			'2 tbsp parsley, chopped'
		],
		instructions: [
			'Boil potatoes until fork-tender, about 15 minutes.',
			'Preheat oven to 425°F (220°C).',
			'Place potatoes on a baking sheet and gently flatten with a fork.',
			'Brush with melted butter, garlic, salt, and pepper.',
			'Bake for 20 minutes until crispy and golden.',
			'Sprinkle with parsley before serving.'
		],
		tags: ['crispy', 'side', 'butter', 'garlic', 'easy', 'vegetarian', 'gluten-free'],
		nutrition: '190 calories, 25g carbs, 8g fat, 3g protein',
		time: 35
	},
	{
		id: 7,
		name: 'Spicy Paprika Potato Skewers',
		servings: '4',
		ingredients: [
			'1½ lbs baby potatoes',
			'2 tbsp olive oil',
			'1½ tsp smoked paprika',
			'½ tsp cayenne pepper',
			'½ tsp salt',
			'¼ tsp black pepper',
			'1 tbsp lemon juice'
		],
		instructions: [
			'Boil potatoes for 10 minutes until just tender. Drain and cool slightly.',
			'Toss with oil, paprika, cayenne, salt, and pepper.',
			'Thread onto skewers and grill for 10 minutes, turning occasionally.',
			'Drizzle with lemon juice before serving.'
		],
		tags: ['grilled', 'spicy', 'bbq', 'side', 'easy', 'vegetarian', 'gluten-free'],
		nutrition: '175 calories, 24g carbs, 6g fat, 3g protein',
		time: 30
	},
	{
		id: 8,
		name: 'Cheesy Scalloped Potatoes',
		servings: '6',
		ingredients: [
			'3 lbs Yukon gold potatoes, thinly sliced',
			'2 cups milk',
			'1 cup heavy cream',
			'2 cups shredded cheddar cheese',
			'3 tbsp butter',
			'3 tbsp flour',
			'1 tsp salt',
			'¼ tsp pepper'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Melt butter in a saucepan, whisk in flour, then add milk and cream gradually.',
			'Cook until thickened, then stir in cheese until smooth.',
			'Layer potatoes in a greased baking dish and pour sauce over.',
			'Cover and bake for 45 minutes, then uncover and bake 15 minutes more until golden.'
		],
		tags: ['cheese', 'creamy', 'baked', 'comfort', 'side', 'vegetarian', 'gluten-free'],
		nutrition: '360 calories, 33g carbs, 21g fat, 9g protein',
		time: 70
	},
	{
		id: 9,
		name: 'Roasted Lemon Herb Potatoes',
		servings: '4',
		ingredients: [
			'2 lbs red potatoes, quartered',
			'3 tbsp olive oil',
			'1 tbsp lemon juice',
			'1 tsp lemon zest',
			'1 tsp dried oregano',
			'1 tsp garlic powder',
			'½ tsp salt',
			'¼ tsp pepper'
		],
		instructions: [
			'Preheat oven to 425°F (220°C).',
			'Toss potatoes with oil, lemon juice, zest, oregano, garlic powder, salt, and pepper.',
			'Spread on a baking sheet and roast for 30–35 minutes until crisp and golden.'
		],
		tags: ['lemon', 'herb', 'roasted', 'side', 'easy', 'vegetarian', 'gluten-free'],
		nutrition: '200 calories, 27g carbs, 8g fat, 3g protein',
		time: 40
	},
	{
		id: 10,
		name: 'Potato Gratin with Gruyère',
		servings: '6',
		ingredients: [
			'3 lbs Yukon gold potatoes, thinly sliced',
			'1½ cups heavy cream',
			'1 cup grated Gruyère cheese',
			'2 cloves garlic, minced',
			'2 tbsp butter',
			'½ tsp salt',
			'¼ tsp nutmeg'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Rub baking dish with butter and garlic.',
			'Layer potatoes and cheese, seasoning each layer with salt and nutmeg.',
			'Pour cream over top and bake 50–60 minutes until golden and bubbling.',
			'Let rest 10 minutes before serving.'
		],
		tags: ['french', 'baked', 'gratin', 'cheese', 'side', 'vegetarian', 'gluten-free'],
		nutrition: '390 calories, 30g carbs, 23g fat, 9g protein',
		time: 65
	},
	{
		id: 11,
		name: 'Garlic Butter Rice',
		servings: '4',
		ingredients: [
			'2 cups jasmine rice, rinsed',
			'3 cups chicken broth',
			'3 tbsp butter',
			'4 cloves garlic, minced',
			'½ tsp salt',
			'¼ tsp black pepper',
			'2 tbsp chopped parsley'
		],
		instructions: [
			'In a medium pot, melt butter over medium heat.',
			'Add garlic and sauté for 1 minute until fragrant.',
			'Stir in rice and toast for 2 minutes.',
			'Add chicken broth, salt, and pepper, bring to a boil.',
			'Reduce heat to low, cover, and simmer 15 minutes until rice is tender.',
			'Fluff with fork and stir in parsley before serving.'
		],
		tags: ['rice', 'garlic', 'butter', 'easy', 'side', 'gluten-free'],
		nutrition: '310 calories, 52g carbs, 9g fat, 6g protein',
		time: 25
	},
	{
		id: 12,
		name: 'Coconut Jasmine Rice',
		servings: '4',
		ingredients: [
			'1½ cups jasmine rice, rinsed',
			'1 cup coconut milk',
			'1 cup water',
			'½ tsp salt',
			'1 tsp sugar',
			'1 tbsp shredded coconut (optional for garnish)'
		],
		instructions: [
			'Combine rice, coconut milk, water, salt, and sugar in a pot.',
			'Bring to a simmer over medium heat.',
			'Reduce heat to low, cover, and cook for 15 minutes.',
			'Remove from heat and let sit 10 minutes.',
			'Fluff with fork and top with toasted shredded coconut.'
		],
		tags: ['rice', 'coconut', 'asian', 'creamy', 'side', 'vegetarian', 'gluten-free'],
		nutrition: '285 calories, 46g carbs, 8g fat, 4g protein',
		time: 25
	},
	{
		id: 13,
		name: 'Spanish Rice with Tomato and Peppers',
		servings: '4',
		ingredients: [
			'1½ cups long-grain white rice',
			'2 tbsp olive oil',
			'½ onion, finely chopped',
			'1 clove garlic, minced',
			'½ red bell pepper, diced',
			'1½ cups chicken broth',
			'½ cup tomato sauce',
			'½ tsp paprika',
			'¼ tsp cumin',
			'Salt to taste'
		],
		instructions: [
			'Heat olive oil in a skillet over medium heat.',
			'Sauté onion, garlic, and bell pepper until softened.',
			'Add rice and cook for 2 minutes, stirring often.',
			'Pour in chicken broth and tomato sauce, season with spices.',
			'Cover and simmer 18 minutes until liquid is absorbed.',
			'Fluff and serve warm.'
		],
		tags: ['rice', 'spanish', 'tomato', 'pepper', 'side', 'gluten-free'],
		nutrition: '270 calories, 48g carbs, 6g fat, 5g protein',
		time: 30
	},
	{
		id: 14,
		name: 'Lemon Herb Rice Pilaf',
		servings: '4',
		ingredients: [
			'1 cup long-grain white rice',
			'2 tbsp butter',
			'2 cups chicken broth',
			'1 lemon, zested and juiced',
			'2 tbsp chopped parsley',
			'½ tsp salt',
			'¼ tsp black pepper'
		],
		instructions: [
			'Melt butter in a saucepan over medium heat.',
			'Add rice and stir for 2 minutes to lightly toast.',
			'Pour in chicken broth, lemon zest, and salt.',
			'Cover and cook 15 minutes until rice is tender.',
			'Remove from heat, stir in lemon juice, pepper, and parsley.'
		],
		tags: ['rice', 'lemon', 'herb', 'pilaf', 'side', 'gluten-free'],
		nutrition: '250 calories, 45g carbs, 6g fat, 5g protein',
		time: 25
	},
	{
		id: 15,
		name: 'Fried Rice with Egg and Scallion',
		servings: '4',
		ingredients: [
			'3 cups cooked white rice, chilled',
			'2 eggs, lightly beaten',
			'2 tbsp soy sauce',
			'1 tbsp sesame oil',
			'2 green onions, sliced',
			'1 tbsp vegetable oil',
			'Salt to taste'
		],
		instructions: [
			'Heat vegetable oil in a large skillet or wok over medium-high heat.',
			'Scramble eggs until just set, then remove from pan.',
			'Add sesame oil and rice, stir-fry for 3 minutes.',
			'Stir in soy sauce and eggs, toss to combine.',
			'Top with green onions and serve immediately.'
		],
		tags: ['rice', 'fried', 'asian', 'egg', 'quick', 'side', 'gluten-free'],
		nutrition: '330 calories, 52g carbs, 10g fat, 8g protein',
		time: 20
	},
	{
		id: 16,
		name: 'Garlic Cilantro Lime Rice',
		servings: '4',
		ingredients: [
			'1½ cups basmati rice, rinsed',
			'3 cups water',
			'2 tbsp butter',
			'2 cloves garlic, minced',
			'1 lime, zested and juiced',
			'¼ cup chopped cilantro',
			'½ tsp salt'
		],
		instructions: [
			'In a medium pot, melt butter over medium heat and add garlic.',
			'Sauté for 30 seconds, then add rice and stir to coat.',
			'Add water and salt, bring to a boil.',
			'Reduce heat, cover, and simmer for 15 minutes.',
			'Stir in lime zest, juice, and cilantro before serving.'
		],
		tags: ['rice', 'cilantro', 'lime', 'mexican', 'fresh', 'side', 'vegetarian', 'gluten-free'],
		nutrition: '240 calories, 45g carbs, 5g fat, 4g protein',
		time: 25
	},
	{
		id: 17,
		name: 'Mushroom and Onion Rice',
		servings: '4',
		ingredients: [
			'1 cup white rice',
			'1½ cups vegetable broth',
			'1 tbsp butter',
			'1 tbsp olive oil',
			'1 cup sliced mushrooms',
			'½ onion, diced',
			'¼ tsp thyme',
			'Salt and pepper to taste'
		],
		instructions: [
			'Heat butter and olive oil in a skillet over medium heat.',
			'Add onion and mushrooms, cook until softened.',
			'Stir in rice and thyme, sauté 2 minutes.',
			'Pour in broth, season with salt and pepper.',
			'Cover and simmer for 18 minutes until rice is tender.'
		],
		tags: ['rice', 'mushroom', 'onion', 'savory', 'side', 'vegetarian', 'gluten-free'],
		nutrition: '260 calories, 44g carbs, 8g fat, 5g protein',
		time: 30
	},
	{
		id: 18,
		name: 'Cilantro Coconut Rice',
		servings: '4',
		ingredients: [
			'1 cup basmati rice, rinsed',
			'1 cup coconut milk',
			'¾ cup water',
			'¼ tsp salt',
			'2 tbsp chopped cilantro',
			'1 tsp lime juice'
		],
		instructions: [
			'Combine rice, coconut milk, water, and salt in a saucepan.',
			'Bring to a boil, reduce heat, and simmer 15 minutes covered.',
			'Remove from heat and let sit 10 minutes.',
			'Fluff rice and stir in cilantro and lime juice.'
		],
		tags: ['rice', 'coconut', 'cilantro', 'tropical', 'side', 'vegetarian', 'gluten-free'],
		nutrition: '290 calories, 46g carbs, 9g fat, 5g protein',
		time: 25
	},
	{
		id: 19,
		name: 'Parmesan Rice with Herbs',
		servings: '4',
		ingredients: [
			'1½ cups long-grain rice',
			'3 cups chicken broth',
			'2 tbsp butter',
			'½ cup grated Parmesan cheese',
			'1 tsp dried Italian herbs',
			'Salt and pepper to taste'
		],
		instructions: [
			'Bring chicken broth to a boil in a medium pot.',
			'Add rice and butter, reduce heat, and cover for 15 minutes.',
			'Remove from heat and stir in Parmesan cheese and herbs.',
			'Season with salt and pepper and serve warm.'
		],
		tags: ['rice', 'parmesan', 'herb', 'cheese', 'side', 'gluten-free'],
		nutrition: '320 calories, 47g carbs, 9g fat, 8g protein',
		time: 25
	},
	{
		id: 20,
		name: 'Turmeric Rice with Toasted Almonds',
		servings: '4',
		ingredients: [
			'1 cup basmati rice, rinsed',
			'2 cups vegetable broth',
			'1 tbsp olive oil',
			'½ tsp turmeric',
			'¼ cup sliced almonds, toasted',
			'1 tbsp butter',
			'Salt to taste'
		],
		instructions: [
			'Heat olive oil in a pot over medium heat.',
			'Add rice and turmeric, stirring until coated.',
			'Pour in broth and salt, bring to a boil.',
			'Cover and cook 15 minutes until liquid is absorbed.',
			'Stir in butter and toasted almonds before serving.'
		],
		tags: ['rice', 'turmeric', 'almonds', 'golden', 'side', 'vegetarian', 'gluten-free'],
		nutrition: '275 calories, 43g carbs, 9g fat, 5g protein',
		time: 25
	},
	{
		id: 21,
		name: 'Truffle Mashed Potatoes',
		servings: '6',
		ingredients: [
			'3 lbs Yukon gold potatoes, peeled and quartered',
			'½ cup unsalted butter',
			'¾ cup heavy cream',
			'1 tbsp truffle oil',
			'Salt and white pepper to taste',
			'Chives for garnish'
		],
		instructions: [
			'Boil potatoes until tender, about 15–20 minutes.',
			'Drain and mash with butter and warm cream until smooth.',
			'Stir in truffle oil, season with salt and white pepper.',
			'Garnish with chopped chives before serving.'
		],
		tags: ['fancy', 'potato', 'truffle', 'creamy', 'side', 'vegetarian', 'gluten-free'],
		nutrition: '360 calories, 32g carbs, 22g fat, 6g protein',
		time: 35
	},
	{
		id: 23,
		name: 'Wild Mushroom Risotto',
		servings: '4',
		ingredients: [
			'1½ cups Arborio rice',
			'4 cups chicken or vegetable stock, warmed',
			'2 tbsp olive oil',
			'1 shallot, minced',
			'2 cups mixed wild mushrooms, sliced',
			'½ cup dry white wine',
			'½ cup grated Parmesan',
			'2 tbsp butter',
			'Salt and pepper to taste'
		],
		instructions: [
			'Heat oil and sauté shallot and mushrooms until soft.',
			'Add rice and toast 2 minutes, then deglaze with white wine.',
			'Gradually add warm stock, stirring frequently, until rice is creamy.',
			'Stir in butter and Parmesan, season to taste, and serve immediately.'
		],
		tags: ['risotto', 'mushroom', 'italian', 'creamy', 'luxury', 'vegetarian', 'gluten-free'],
		nutrition: '480 calories, 56g carbs, 20g fat, 12g protein',
		time: 45
	},
	{
		id: 24,
		name: 'Duchess Potatoes',
		servings: '6',
		ingredients: [
			'2 lbs russet potatoes, peeled and cubed',
			'4 tbsp butter',
			'3 egg yolks',
			'¼ cup heavy cream',
			'Salt and white pepper to taste'
		],
		instructions: [
			'Boil potatoes until tender, drain and mash with butter and cream.',
			'Stir in egg yolks and seasonings.',
			'Pipe mixture into swirls on a baking sheet.',
			'Bake at 400°F (200°C) for 20 minutes until golden and crisp on edges.'
		],
		tags: ['french', 'potato', 'baked', 'elegant', 'holiday', 'vegetarian', 'gluten-free'],
		nutrition: '280 calories, 28g carbs, 14g fat, 6g protein',
		time: 35
	},
	{
		id: 25,
		name: 'Gruyère and Leek Gratin',
		servings: '6',
		ingredients: [
			'3 large leeks, sliced and cleaned',
			'2 tbsp butter',
			'1 cup heavy cream',
			'1 cup shredded Gruyère cheese',
			'¼ tsp nutmeg',
			'Salt and pepper to taste'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Sauté leeks in butter until tender, about 8 minutes.',
			'Transfer to baking dish, pour over cream, sprinkle with Gruyère, nutmeg, salt, and pepper.',
			'Bake 20–25 minutes until bubbly and golden.'
		],
		tags: ['french', 'leek', 'gratin', 'cheese', 'luxury'],
		nutrition: '380 calories, 14g carbs, 32g fat, 9g protein',
		time: 40
	},
	{
		id: 26,
		name: 'Truffle Risotto with Parmesan',
		servings: '4',
		ingredients: [
			'1½ cups Arborio rice',
			'4 cups chicken stock',
			'½ cup dry white wine',
			'3 tbsp butter',
			'½ cup grated Parmesan',
			'1 tbsp truffle oil',
			'1 tbsp finely shaved black truffle'
		],
		instructions: [
			'Sauté rice in butter for 2 minutes.',
			'Add wine and cook until absorbed.',
			'Add warm stock gradually, stirring until creamy.',
			'Stir in Parmesan and truffle oil, top with shaved truffle.'
		],
		tags: ['italian', 'luxury', 'main', 'vegetarian', 'gluten-free'],
		nutrition: '540 calories, 65g carbs, 20g fat, 12g protein',
		time: 45
	},
	{
		id: 27,
		name: 'Lemon Broccoli Orzo',
		servings: '4',
		ingredients: [
			'1 cup orzo pasta',
			'2 cups broccoli florets',
			'2 tbsp olive oil',
			'1 tbsp lemon juice',
			'½ tsp garlic powder',
			'Salt and pepper to taste'
		],
		instructions: [
			'Cook orzo according to package directions.',
			'Steam broccoli until tender and chop finely.',
			'Toss orzo with broccoli, olive oil, lemon juice, and seasonings.'
		],
		tags: ['pasta', 'lemon', 'light', 'side', 'vegetarian', 'gluten-free'],
		nutrition: '230 calories, 8g fat, 30g carbs, 6g protein',
		time: 20
	}
];

export const Mains: Recipe[] = [
	{
		id: 1,
		name: 'Garlic Butter Chicken Thighs',
		servings: '4',
		ingredients: [
			'4 bone-in chicken thighs',
			'2 tbsp butter',
			'3 cloves garlic, minced',
			'½ tsp salt',
			'¼ tsp pepper',
			'1 tsp parsley flakes'
		],
		instructions: [
			'Preheat oven to 400°F (200°C).',
			'Season chicken with salt and pepper.',
			'In an oven-safe skillet, melt butter and sauté garlic until fragrant.',
			'Add chicken, skin-side down, and sear 3–4 minutes per side.',
			'Transfer skillet to oven and bake 20 minutes. Sprinkle with parsley before serving.'
		],
		tags: ['baked', 'buttery', 'savory', 'main', 'gluten-free'],
		nutrition: '310 calories, 24g fat, 0g carbs, 23g protein',
		time: 35
	},
	{
		id: 2,
		name: 'Honey Garlic Chicken Breasts',
		servings: '4',
		ingredients: [
			'4 boneless chicken breasts',
			'¼ cup honey',
			'3 tbsp soy sauce',
			'3 cloves garlic, minced',
			'1 tbsp olive oil',
			'¼ tsp pepper'
		],
		instructions: [
			'Whisk honey, soy sauce, and garlic in a bowl.',
			'Heat olive oil in skillet, add chicken, cook 6 minutes per side.',
			'Pour sauce over chicken and simmer 5 minutes until thickened.'
		],
		tags: ['stovetop', 'sweet-savory', 'quick', 'main', 'gluten-free'],
		nutrition: '290 calories, 8g fat, 18g carbs, 36g protein',
		time: 25
	},
	{
		id: 3,
		name: 'Lemon Herb Roast Chicken',
		servings: '6',
		ingredients: [
			'1 whole chicken (4 lbs)',
			'2 tbsp olive oil',
			'1 lemon, halved',
			'2 sprigs rosemary',
			'1 tsp salt',
			'½ tsp pepper'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Rub chicken with olive oil, salt, and pepper.',
			'Stuff cavity with lemon halves and rosemary.',
			'Roast 1 hour 15 minutes or until juices run clear.'
		],
		tags: ['roasted', 'herbed', 'classic', 'main', 'gluten-free'],
		nutrition: '380 calories, 25g fat, 0g carbs, 38g protein',
		time: 90
	},
	{
		id: 4,
		name: 'Chicken Alfredo Pasta',
		servings: '4',
		ingredients: [
			'2 chicken breasts, sliced',
			'8 oz fettuccine pasta',
			'1 cup heavy cream',
			'¾ cup grated Parmesan',
			'2 tbsp butter',
			'2 cloves garlic, minced'
		],
		instructions: [
			'Cook pasta according to package directions.',
			'Sauté chicken in butter until golden, remove.',
			'Add garlic and cream, simmer 3 minutes.',
			'Stir in Parmesan until smooth, toss with pasta and chicken.'
		],
		tags: ['pasta', 'creamy', 'italian', 'main', 'gluten-free'],
		nutrition: '640 calories, 32g fat, 45g carbs, 42g protein',
		time: 30
	},
	{
		id: 5,
		name: 'Crispy Baked Chicken Tenders',
		servings: '4',
		ingredients: [
			'1 lb chicken tenders',
			'1 cup breadcrumbs',
			'½ cup flour',
			'2 eggs, beaten',
			'½ tsp paprika',
			'½ tsp salt'
		],
		instructions: [
			'Preheat oven to 400°F (200°C).',
			'Dredge chicken in flour, egg, then breadcrumbs mixed with paprika and salt.',
			'Place on baking sheet and bake 18–20 minutes, flipping once.'
		],
		tags: ['baked', 'crispy', 'kid-friendly', 'main'],
		nutrition: '310 calories, 9g fat, 22g carbs, 33g protein',
		time: 25
	},
	{
		id: 6,
		name: 'Spicy Chicken Stir-Fry',
		servings: '4',
		ingredients: [
			'1 lb chicken breast, sliced',
			'2 cups mixed vegetables',
			'2 tbsp soy sauce',
			'1 tbsp sriracha',
			'1 tbsp sesame oil',
			'1 tsp ginger, grated'
		],
		instructions: [
			'Heat sesame oil in wok, add chicken and cook 4 minutes.',
			'Add vegetables and cook 3 more minutes.',
			'Stir in soy sauce, sriracha, and ginger; cook 2 more minutes.'
		],
		tags: ['asian', 'spicy', 'quick', 'main', 'gluten-free'],
		nutrition: '280 calories, 10g fat, 12g carbs, 32g protein',
		time: 20
	},
	{
		id: 7,
		name: 'BBQ Grilled Chicken',
		servings: '4',
		ingredients: [
			'4 chicken thighs or breasts',
			'½ cup barbecue sauce',
			'1 tbsp olive oil',
			'½ tsp garlic powder',
			'¼ tsp pepper'
		],
		instructions: [
			'Preheat grill to medium-high heat.',
			'Brush chicken with oil and seasonings.',
			'Grill 6–7 minutes per side, brushing with BBQ sauce until glazed.'
		],
		tags: ['grilled', 'bbq', 'summer', 'main', 'gluten-free'],
		nutrition: '330 calories, 15g fat, 18g carbs, 34g protein',
		time: 25
	},
	{
		id: 8,
		name: 'Chicken Marsala',
		servings: '4',
		ingredients: [
			'4 chicken cutlets',
			'½ cup flour',
			'1 cup sliced mushrooms',
			'¾ cup Marsala wine',
			'2 tbsp butter',
			'1 tbsp olive oil'
		],
		instructions: [
			'Coat chicken in flour and sauté in butter and oil until golden.',
			'Remove chicken, add mushrooms, and cook 3 minutes.',
			'Pour in Marsala wine, simmer 5 minutes, return chicken to pan, and cook until sauce thickens.'
		],
		tags: ['italian', 'sautéed', 'wine sauce', 'main'],
		nutrition: '420 calories, 22g fat, 14g carbs, 35g protein',
		time: 30
	},
	{
		id: 9,
		name: 'Thai Coconut Chicken Curry',
		servings: '4',
		ingredients: [
			'1 lb chicken breast, cubed',
			'1 can (14 oz) coconut milk',
			'2 tbsp red curry paste',
			'1 tbsp fish sauce',
			'1 cup bell peppers, sliced',
			'1 tbsp oil'
		],
		instructions: [
			'Heat oil in skillet, add curry paste and cook 1 minute.',
			'Add chicken and cook until browned.',
			'Pour in coconut milk and fish sauce, simmer 10 minutes.',
			'Add bell peppers and cook until tender.'
		],
		tags: ['thai', 'curry', 'spicy', 'main', 'gluten-free'],
		nutrition: '460 calories, 29g fat, 10g carbs, 38g protein',
		time: 25
	},
	{
		id: 10,
		name: 'Chicken and Rice Skillet',
		servings: '4',
		ingredients: [
			'1 lb chicken thighs, chopped',
			'1 cup long-grain rice',
			'2 cups chicken broth',
			'1 onion, diced',
			'1 tbsp olive oil',
			'½ tsp paprika'
		],
		instructions: [
			'Sauté onion and chicken in oil until lightly browned.',
			'Add rice, paprika, and broth; bring to a boil.',
			'Reduce heat, cover, and simmer 20 minutes until rice is cooked.'
		],
		tags: ['one-pan', 'hearty', 'comfort', 'main', 'gluten-free'],
		nutrition: '390 calories, 14g fat, 32g carbs, 32g protein',
		time: 30
	},
	{
		id: 11,
		name: 'Buffalo Chicken Wraps',
		servings: '4',
		ingredients: [
			'2 cups cooked shredded chicken',
			'¼ cup buffalo sauce',
			'4 tortillas',
			'½ cup lettuce, shredded',
			'¼ cup ranch dressing'
		],
		instructions: [
			'Toss shredded chicken in buffalo sauce.',
			'Lay out tortillas and layer lettuce, chicken, and ranch.',
			'Roll tightly and serve warm or cold.'
		],
		tags: ['wrap', 'spicy', 'easy', 'main', 'gluten-free'],
		nutrition: '310 calories, 12g fat, 25g carbs, 25g protein',
		time: 10
	},
	{
		id: 12,
		name: 'Creamy Tuscan Chicken',
		servings: '4',
		ingredients: [
			'4 chicken breasts',
			'½ cup sun-dried tomatoes',
			'1 cup heavy cream',
			'½ cup spinach, chopped',
			'2 tbsp olive oil',
			'1 tsp garlic powder'
		],
		instructions: [
			'Cook chicken in olive oil until golden, remove.',
			'Add cream, tomatoes, and garlic powder; simmer 3 minutes.',
			'Add spinach and return chicken to pan, simmer until sauce thickens.'
		],
		tags: ['creamy', 'italian', 'rich', 'main', 'gluten-free'],
		nutrition: '480 calories, 30g fat, 10g carbs, 42g protein',
		time: 30
	},
	{
		id: 13,
		name: 'Chicken Fajitas',
		servings: '4',
		ingredients: [
			'1 lb chicken breast, sliced',
			'1 red bell pepper, sliced',
			'1 onion, sliced',
			'1 tbsp olive oil',
			'1 tsp fajita seasoning'
		],
		instructions: [
			'Heat oil in skillet, add chicken and cook 5 minutes.',
			'Add peppers, onion, and seasoning; cook 5 more minutes until tender.'
		],
		tags: ['mexican', 'quick', 'stovetop', 'main', 'gluten-free'],
		nutrition: '280 calories, 10g fat, 12g carbs, 34g protein',
		time: 15
	},
	{
		id: 14,
		name: 'Chicken Pot Pie',
		servings: '6',
		ingredients: [
			'2 cups cooked chicken, diced',
			'1 cup frozen mixed vegetables',
			'1 cup chicken broth',
			'1 cup milk',
			'¼ cup flour',
			'1 pie crust'
		],
		instructions: [
			'Preheat oven to 400°F (200°C).',
			'In saucepan, whisk flour, broth, and milk to make sauce.',
			'Add chicken and vegetables, pour into crust, top with second crust, and bake 30 minutes.'
		],
		tags: ['baked', 'comfort', 'classic', 'main'],
		nutrition: '430 calories, 22g fat, 34g carbs, 25g protein',
		time: 45
	},
	{
		id: 15,
		name: 'Teriyaki Chicken Bowls',
		servings: '4',
		ingredients: [
			'1 lb chicken thighs, cubed',
			'½ cup teriyaki sauce',
			'2 cups cooked white rice',
			'1 cup steamed broccoli',
			'1 tbsp sesame seeds'
		],
		instructions: [
			'Cook chicken in skillet until browned.',
			'Add teriyaki sauce and simmer 5 minutes.',
			'Serve over rice with broccoli and sprinkle sesame seeds on top.'
		],
		tags: ['asian', 'sweet-savory', 'bowl', 'main', 'gluten-free'],
		nutrition: '480 calories, 15g fat, 52g carbs, 32g protein',
		time: 25
	},
	{
		id: 16,
		name: 'Classic Beef Lasagna',
		servings: '6',
		ingredients: [
			'1 lb ground beef',
			'1 jar (24 oz) marinara sauce',
			'9 lasagna noodles',
			'2 cups ricotta cheese',
			'2 cups shredded mozzarella',
			'½ cup grated Parmesan',
			'1 egg',
			'1 tbsp olive oil',
			'½ tsp salt'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Cook noodles and set aside.',
			'Brown beef in olive oil, drain fat, and mix with marinara sauce.',
			'Combine ricotta, egg, and Parmesan in a bowl.',
			'Layer sauce, noodles, ricotta mix, and mozzarella in baking dish.',
			'Repeat layers and finish with mozzarella on top.',
			'Bake 40 minutes, rest 10 minutes before slicing.'
		],
		tags: ['italian', 'baked', 'pasta', 'comfort', 'main', 'gluten-free'],
		nutrition: '620 calories, 32g fat, 38g carbs, 42g protein',
		time: 60
	},
	{
		id: 17,
		name: 'Beef Stroganoff',
		servings: '4',
		ingredients: [
			'1 lb beef sirloin, sliced thin',
			'1 cup mushrooms, sliced',
			'½ onion, diced',
			'1 cup beef broth',
			'½ cup sour cream',
			'1 tbsp flour',
			'2 tbsp butter',
			'8 oz egg noodles'
		],
		instructions: [
			'Cook noodles according to package directions.',
			'Sauté beef in butter until browned; remove and set aside.',
			'Add onions and mushrooms, cook 5 minutes.',
			'Stir in flour, add broth, and simmer 5 minutes.',
			'Return beef to pan, stir in sour cream, and heat gently.',
			'Serve over noodles.'
		],
		tags: ['russian', 'creamy', 'comfort', 'main', 'gluten-free'],
		nutrition: '540 calories, 27g fat, 36g carbs, 38g protein',
		time: 35
	},
	{
		id: 18,
		name: 'Classic Cheeseburger',
		servings: '4',
		ingredients: [
			'1 lb ground beef (80/20)',
			'4 hamburger buns',
			'4 slices cheddar cheese',
			'1 tomato, sliced',
			'4 lettuce leaves',
			'4 tbsp mayonnaise',
			'Salt and pepper to taste'
		],
		instructions: [
			'Form beef into 4 patties and season with salt and pepper.',
			'Grill or pan-fry 3–4 minutes per side.',
			'Top with cheese during final minute of cooking.',
			'Assemble burgers with lettuce, tomato, and mayonnaise.'
		],
		tags: ['grilled', 'american', 'classic', 'main', 'gluten-free'],
		nutrition: '520 calories, 28g fat, 28g carbs, 34g protein',
		time: 20
	},
	{
		id: 19,
		name: 'Beef Tacos',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'1 packet taco seasoning',
			'8 small corn tortillas',
			'1 cup shredded lettuce',
			'1 cup diced tomatoes',
			'½ cup shredded cheddar',
			'¼ cup sour cream'
		],
		instructions: [
			'Brown ground beef in skillet; drain fat.',
			'Add taco seasoning and ½ cup water; simmer 5 minutes.',
			'Warm tortillas and fill with beef, lettuce, tomato, and cheese.',
			'Top with sour cream and serve.'
		],
		tags: ['mexican', 'quick', 'spicy', 'main', 'gluten-free'],
		nutrition: '410 calories, 22g fat, 25g carbs, 29g protein',
		time: 20
	},
	{
		id: 20,
		name: 'Beef and Broccoli Stir-Fry',
		servings: '4',
		ingredients: [
			'1 lb flank steak, thinly sliced',
			'3 cups broccoli florets',
			'¼ cup soy sauce',
			'2 tbsp brown sugar',
			'2 cloves garlic, minced',
			'1 tbsp cornstarch',
			'1 tbsp sesame oil'
		],
		instructions: [
			'Whisk soy sauce, brown sugar, and cornstarch together.',
			'Sear beef in sesame oil until browned.',
			'Add broccoli and garlic, cook 3 minutes.',
			'Pour sauce over and simmer 3–5 minutes until thickened.'
		],
		tags: ['asian', 'stir-fry', 'quick', 'main', 'gluten-free'],
		nutrition: '360 calories, 18g fat, 18g carbs, 32g protein',
		time: 25
	},
	{
		id: 21,
		name: 'Shepherd’s Pie',
		servings: '6',
		ingredients: [
			'1 lb ground beef',
			'2 cups mashed potatoes',
			'1 cup frozen mixed vegetables',
			'1 tbsp tomato paste',
			'1 cup beef broth',
			'1 tbsp butter'
		],
		instructions: [
			'Preheat oven to 400°F (200°C).',
			'Brown beef, stir in tomato paste and broth, simmer 5 minutes.',
			'Add vegetables and cook until tender.',
			'Spread in baking dish, top with mashed potatoes.',
			'Bake 20 minutes until golden brown.'
		],
		tags: ['baked', 'comfort', 'casserole', 'main', 'gluten-free'],
		nutrition: '430 calories, 23g fat, 28g carbs, 29g protein',
		time: 40
	},
	{
		id: 22,
		name: 'Beef Chili',
		servings: '6',
		ingredients: [
			'1 lb ground beef',
			'1 can (15 oz) kidney beans, drained',
			'1 can (15 oz) diced tomatoes',
			'1 small onion, diced',
			'2 tbsp chili powder',
			'1 tsp cumin',
			'1 cup beef broth'
		],
		instructions: [
			'Brown beef with onion in large pot.',
			'Add tomatoes, beans, broth, and seasonings.',
			'Simmer 30 minutes, stirring occasionally.'
		],
		tags: ['spicy', 'hearty', 'one-pot', 'main', 'gluten-free'],
		nutrition: '390 calories, 15g fat, 26g carbs, 32g protein',
		time: 40
	},
	{
		id: 23,
		name: 'Beef Enchiladas',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'8 corn tortillas',
			'1 cup enchilada sauce',
			'1 cup shredded cheddar',
			'½ onion, diced',
			'1 tbsp olive oil'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Sauté beef and onion until cooked, add ½ cup sauce.',
			'Fill tortillas with beef, roll up, and place seam-side down in dish.',
			'Pour remaining sauce on top, sprinkle with cheese, and bake 20 minutes.'
		],
		tags: ['mexican', 'baked', 'spicy', 'main', 'gluten-free'],
		nutrition: '460 calories, 25g fat, 28g carbs, 32g protein',
		time: 30
	},
	{
		id: 24,
		name: 'Beef Meatballs with Marinara',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'¼ cup breadcrumbs',
			'1 egg',
			'1 clove garlic, minced',
			'2 cups marinara sauce',
			'2 tbsp Parmesan cheese'
		],
		instructions: [
			'Mix beef, breadcrumbs, egg, and garlic; form into 1-inch balls.',
			'Sear in skillet 2 minutes per side, add marinara sauce.',
			'Simmer 20 minutes until cooked through. Sprinkle with Parmesan before serving.'
		],
		tags: ['italian', 'simmered', 'comfort', 'main', 'gluten-free'],
		nutrition: '420 calories, 26g fat, 10g carbs, 34g protein',
		time: 30
	},
	{
		id: 25,
		name: 'Korean Beef Bowls',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'¼ cup soy sauce',
			'2 tbsp brown sugar',
			'1 tbsp sesame oil',
			'2 cloves garlic, minced',
			'2 cups cooked rice'
		],
		instructions: [
			'Sauté beef in sesame oil until browned.',
			'Add garlic, soy sauce, and brown sugar; cook 3 minutes.',
			'Serve over rice and garnish with green onions.'
		],
		tags: ['asian', 'sweet-savory', 'quick', 'main', 'gluten-free'],
		nutrition: '430 calories, 17g fat, 38g carbs, 31g protein',
		time: 20
	},
	{
		id: 26,
		name: 'Beef Burrito Bowls',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'1 packet taco seasoning',
			'2 cups cooked rice',
			'1 cup black beans',
			'1 cup corn',
			'½ cup salsa'
		],
		instructions: [
			'Brown beef and add taco seasoning with ½ cup water.',
			'Layer bowls with rice, beef, beans, corn, and salsa.'
		],
		tags: ['mexican', 'bowl', 'easy', 'main', 'gluten-free'],
		nutrition: '480 calories, 16g fat, 52g carbs, 32g protein',
		time: 20
	},
	{
		id: 27,
		name: 'Beef Stuffed Peppers',
		servings: '4',
		ingredients: [
			'4 bell peppers, tops removed and seeded',
			'1 lb ground beef',
			'1 cup cooked rice',
			'1 cup tomato sauce',
			'½ cup shredded mozzarella',
			'½ tsp oregano'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Cook beef and mix with rice, tomato sauce, and oregano.',
			'Fill peppers, top with cheese, and bake 30 minutes.'
		],
		tags: ['baked', 'low-carb', 'comfort', 'main', 'gluten-free'],
		nutrition: '420 calories, 21g fat, 22g carbs, 33g protein',
		time: 45
	},
	{
		id: 28,
		name: '  Mushroom & Swiss Burgers',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'½ cup finely chopped mushrooms',
			'½ tsp salt',
			'¼ tsp pepper',
			'4 burger buns',
			'4 slices Swiss cheese'
		],
		instructions: [
			'Mix beef, mushrooms, salt, and pepper; form 4 patties.',
			'Grill 4–5 minutes per side, top with cheese during last minute.',
			'Serve on buns with desired toppings.'
		],
		tags: ['burger', 'grilled', 'savory', 'main', 'gluten-free'],
		nutrition: '480 calories, 25g fat, 28g carbs, 34g protein',
		time: 25
	},
	{
		id: 29,
		name: 'Beef Ramen Stir-Fry',
		servings: '4',
		ingredients: [
			'1 lb ground beef',
			'2 packs ramen noodles (no seasoning)',
			'1 cup mixed vegetables',
			'¼ cup soy sauce',
			'1 tbsp sesame oil',
			'1 tsp garlic powder'
		],
		instructions: [
			'Cook ramen noodles and set aside.',
			'Brown beef in sesame oil; add vegetables and soy sauce.',
			'Toss noodles with beef mixture and cook 2 minutes.'
		],
		tags: ['asian', 'noodle', 'quick', 'main', 'gluten-free'],
		nutrition: '460 calories, 20g fat, 38g carbs, 33g protein',
		time: 20
	},
	{
		id: 30,
		name: 'Beef Meatloaf',
		servings: '6',
		ingredients: [
			'1½ lbs ground beef',
			'1 cup breadcrumbs',
			'1 egg',
			'½ cup ketchup',
			'1 onion, minced',
			'1 tsp Worcestershire sauce'
		],
		instructions: [
			'Preheat oven to 375°F (190°C).',
			'Mix all ingredients and form into a loaf shape.',
			'Bake 45–50 minutes, brushing top with extra ketchup halfway through.',
			'Rest 10 minutes before slicing.'
		],
		tags: ['baked', 'classic', 'comfort', 'main', 'gluten-free'],
		nutrition: '480 calories, 27g fat, 22g carbs, 34g protein',
		time: 60
	},
	{
		id: 31,
		name: 'Garlic Butter Shrimp',
		servings: '4',
		ingredients: [
			'1 lb large shrimp, peeled and deveined',
			'4 tbsp butter',
			'4 cloves garlic, minced',
			'1 tbsp lemon juice',
			'¼ tsp red pepper flakes',
			'Salt and black pepper to taste',
			'2 tbsp chopped parsley'
		],
		instructions: [
			'Melt butter in a large skillet over medium heat.',
			'Add garlic and red pepper flakes, sauté 1 minute until fragrant.',
			'Add shrimp and cook 2–3 minutes per side until pink and opaque.',
			'Add lemon juice, season with salt and pepper, and toss with parsley.',
			'Serve immediately with rice or pasta.'
		],
		tags: ['shrimp', 'seafood', 'quick', 'garlic', 'dinner', 'gluten-free'],
		nutrition: '310 calories, 2g carbs, 22g fat, 24g protein',
		time: 20
	},
	{
		id: 32,
		name: 'Lemon Dill Baked Salmon',
		servings: '4',
		ingredients: [
			'4 salmon fillets (6 oz each)',
			'2 tbsp olive oil',
			'1 lemon, sliced',
			'2 tbsp fresh dill, chopped',
			'Salt and black pepper to taste'
		],
		instructions: [
			'Preheat oven to 400°F (200°C).',
			'Place salmon on a lined baking sheet, drizzle with olive oil.',
			'Top each fillet with lemon slices and sprinkle with dill, salt, and pepper.',
			'Bake 12–15 minutes or until flaky and tender.',
			'Serve warm with vegetables or rice.'
		],
		tags: ['salmon', 'healthy', 'baked', 'omega-3', 'quick', 'gluten-free'],
		nutrition: '365 calories, 0g carbs, 23g fat, 34g protein',
		time: 25
	},
	{
		id: 33,
		name: 'Seafood Paella',
		servings: '6',
		ingredients: [
			'2 tbsp olive oil',
			'1 onion, diced',
			'3 cloves garlic, minced',
			'1½ cups Arborio rice',
			'3 cups seafood stock',
			'½ cup white wine',
			'½ lb shrimp',
			'½ lb mussels',
			'½ lb squid rings',
			'1 tsp smoked paprika',
			'¼ tsp saffron threads',
			'Salt to taste',
			'Lemon wedges for serving'
		],
		instructions: [
			'Heat olive oil in a large skillet, add onion and garlic, cook 3 minutes.',
			'Add rice, paprika, and saffron; toast 2 minutes.',
			'Pour in wine and stock; simmer 15 minutes uncovered.',
			'Add seafood on top, cover, and cook another 10–12 minutes until rice and seafood are done.',
			'Serve with lemon wedges.'
		],
		tags: ['spanish', 'rice', 'seafood', 'one-pan', 'saffron', 'gluten-free'],
		nutrition: '540 calories, 58g carbs, 18g fat, 30g protein',
		time: 45
	},
	{
		id: 34,
		name: 'Coconut Curry Shrimp',
		servings: '4',
		ingredients: [
			'1 lb shrimp, peeled and deveined',
			'1 tbsp coconut oil',
			'1 onion, diced',
			'2 cloves garlic, minced',
			'1 tbsp ginger, grated',
			'2 tbsp red curry paste',
			'1 can (13.5 oz) coconut milk',
			'1 tbsp fish sauce',
			'Juice of 1 lime',
			'Cilantro for garnish'
		],
		instructions: [
			'Heat coconut oil in a pan over medium heat.',
			'Sauté onion, garlic, and ginger until fragrant.',
			'Add curry paste and cook 1 minute.',
			'Pour in coconut milk and fish sauce, simmer 5 minutes.',
			'Add shrimp and cook until pink, about 4 minutes.',
			'Stir in lime juice and garnish with cilantro.'
		],
		tags: ['thai', 'shrimp', 'curry', 'spicy', 'coconut', 'gluten-free'],
		nutrition: '420 calories, 10g carbs, 30g fat, 26g protein',
		time: 30
	},
	{
		id: 35,
		name: 'Fish Tacos with Lime Slaw',
		servings: '4',
		ingredients: [
			'1 lb white fish (cod or tilapia)',
			'2 tbsp olive oil',
			'1 tsp chili powder',
			'8 small corn tortillas',
			'2 cups shredded cabbage',
			'¼ cup mayonnaise',
			'2 tbsp lime juice',
			'¼ tsp salt',
			'Cilantro and lime wedges for serving'
		],
		instructions: [
			'Mix olive oil and chili powder, coat fish and cook in skillet 3–4 minutes per side.',
			'In a bowl, mix cabbage, mayo, lime juice, and salt for slaw.',
			'Warm tortillas and assemble tacos with fish, slaw, and cilantro.',
			'Serve with lime wedges.'
		],
		tags: ['mexican', 'tacos', 'fish', 'fresh', 'lime', 'gluten-free'],
		nutrition: '385 calories, 30g carbs, 16g fat, 28g protein',
		time: 25
	},
	{
		id: 36,
		name: 'Baked Cod with Herb Crumbs',
		servings: '4',
		ingredients: [
			'4 cod fillets',
			'1 cup panko breadcrumbs',
			'2 tbsp parsley, chopped',
			'2 tbsp olive oil',
			'1 tsp lemon zest',
			'Salt and pepper to taste'
		],
		instructions: [
			'Preheat oven to 425°F (220°C).',
			'Mix panko, parsley, olive oil, and lemon zest.',
			'Place cod on baking sheet, season, and top with breadcrumb mixture.',
			'Bake 10–12 minutes until flaky and golden.'
		],
		tags: ['cod', 'baked', 'crispy', 'healthy', 'easy', 'gluten-free'],
		nutrition: '290 calories, 10g carbs, 14g fat, 28g protein',
		time: 20
	},
	{
		id: 37,
		name: 'Tuna Steak with Sesame Crust',
		servings: '2',
		ingredients: [
			'2 tuna steaks (6 oz each)',
			'¼ cup sesame seeds',
			'2 tbsp soy sauce',
			'1 tbsp sesame oil',
			'1 tbsp olive oil'
		],
		instructions: [
			'Brush tuna with soy sauce, coat with sesame seeds.',
			'Heat sesame and olive oil in a skillet over high heat.',
			'Sear tuna 1–2 minutes per side for medium-rare.',
			'Serve immediately with rice or salad.'
		],
		tags: ['tuna', 'asian', 'quick', 'low-carb', 'grilled', 'gluten-free'],
		nutrition: '320 calories, 2g carbs, 20g fat, 32g protein',
		time: 15
	},
	{
		id: 38,
		name: 'Shrimp Scampi Pasta',
		servings: '4',
		ingredients: [
			'12 oz spaghetti',
			'1 lb shrimp, peeled and deveined',
			'4 tbsp butter',
			'3 cloves garlic, minced',
			'¼ cup white wine',
			'Juice of 1 lemon',
			'2 tbsp parsley, chopped',
			'Salt and pepper to taste'
		],
		instructions: [
			'Cook pasta according to package instructions.',
			'Melt butter in skillet, add garlic and cook 1 minute.',
			'Add shrimp, cook 3 minutes until pink.',
			'Pour in wine and lemon juice, toss with pasta and parsley.'
		],
		tags: ['italian', 'pasta', 'shrimp', 'garlic', 'quick', 'gluten-free'],
		nutrition: '520 calories, 62g carbs, 16g fat, 28g protein',
		time: 25
	},
	{
		id: 39,
		name: 'Blackened Catfish',
		servings: '4',
		ingredients: [
			'4 catfish fillets',
			'2 tbsp butter, melted',
			'1 tbsp Cajun seasoning',
			'Lemon wedges for serving'
		],
		instructions: [
			'Brush catfish with butter and coat with Cajun seasoning.',
			'Cook in a hot skillet 3–4 minutes per side until blackened and cooked through.',
			'Serve with lemon wedges.'
		],
		tags: ['southern', 'spicy', 'catfish', 'grilled', 'quick'],
		nutrition: '310 calories, 2g carbs, 22g fat, 26g protein',
		time: 20
	},
	{
		id: 40,
		name: 'Crab Cakes with Remoulade Sauce',
		servings: '4',
		ingredients: [
			'1 lb lump crab meat',
			'½ cup breadcrumbs',
			'¼ cup mayonnaise',
			'1 egg, beaten',
			'1 tsp Dijon mustard',
			'2 tbsp parsley, chopped',
			'1 tbsp lemon juice',
			'2 tbsp olive oil'
		],
		instructions: [
			'Mix crab, breadcrumbs, mayo, egg, mustard, parsley, and lemon juice.',
			'Form into patties and chill 15 minutes.',
			'Pan-fry in olive oil 3–4 minutes per side until golden.',
			'Serve with remoulade sauce or lemon wedges.'
		],
		tags: ['crab', 'southern', 'pan-fried', 'crispy', 'appetizer'],
		nutrition: '420 calories, 14g carbs, 28g fat, 26g protein',
		time: 30
	},
	{
		id: 41,
		name: 'Teriyaki Glazed Salmon',
		servings: '4',
		ingredients: [
			'4 salmon fillets',
			'⅓ cup soy sauce',
			'¼ cup honey',
			'1 tbsp rice vinegar',
			'1 tsp grated ginger',
			'1 tsp sesame oil'
		],
		instructions: [
			'Whisk soy sauce, honey, vinegar, ginger, and sesame oil for marinade.',
			'Marinate salmon 20 minutes.',
			'Cook in skillet 4–5 minutes per side, spooning glaze over top.',
			'Serve with rice and vegetables.'
		],
		tags: ['asian', 'salmon', 'glazed', 'sweet-savory', 'healthy'],
		nutrition: '410 calories, 20g carbs, 22g fat, 32g protein',
		time: 30
	},
	{
		id: 42,
		name: 'Lobster Mac and Cheese',
		servings: '6',
		ingredients: [
			'8 oz elbow macaroni',
			'2 tbsp butter',
			'2 tbsp flour',
			'2 cups milk',
			'2 cups shredded cheddar',
			'1 cup cooked lobster meat, chopped',
			'Salt and pepper to taste'
		],
		instructions: [
			'Cook pasta and set aside.',
			'In saucepan, melt butter, whisk in flour, and slowly add milk.',
			'Stir in cheese until smooth, season with salt and pepper.',
			'Fold in lobster and pasta, bake 20 minutes at 375°F (190°C).'
		],
		tags: ['lobster', 'comfort food', 'cheesy', 'baked', 'rich'],
		nutrition: '640 calories, 55g carbs, 32g fat, 35g protein',
		time: 45
	},
	{
		id: 43,
		name: 'Mussels in White Wine Sauce',
		servings: '4',
		ingredients: [
			'2 lbs mussels, cleaned',
			'2 tbsp butter',
			'2 cloves garlic, minced',
			'1 cup white wine',
			'¼ cup parsley, chopped',
			'1 tbsp lemon juice'
		],
		instructions: [
			'Melt butter in large pot, add garlic and sauté 1 minute.',
			'Add wine and mussels, cover and steam 5–7 minutes until shells open.',
			'Discard unopened mussels, stir in lemon juice and parsley.',
			'Serve with crusty bread.'
		],
		tags: ['french', 'mussels', 'wine', 'buttery', 'quick'],
		nutrition: '390 calories, 9g carbs, 23g fat, 30g protein',
		time: 25
	},
	{
		id: 44,
		name: 'Clam Linguine',
		servings: '4',
		ingredients: [
			'12 oz linguine',
			'2 tbsp olive oil',
			'3 cloves garlic, minced',
			'1 can (10 oz) chopped clams with juice',
			'½ cup white wine',
			'2 tbsp parsley, chopped'
		],
		instructions: [
			'Cook linguine and reserve ½ cup pasta water.',
			'Sauté garlic in olive oil, add clams and wine, simmer 5 minutes.',
			'Toss in pasta and parsley, adding pasta water to loosen sauce.',
			'Serve with lemon wedges.'
		],
		tags: ['italian', 'pasta', 'clam', 'seafood', 'garlic'],
		nutrition: '480 calories, 62g carbs, 12g fat, 26g protein',
		time: 30
	},
	{
		id: 45,
		name: 'Seared Scallops with Lemon Butter Sauce',
		servings: '2',
		ingredients: [
			'8 large sea scallops',
			'2 tbsp butter',
			'1 tbsp olive oil',
			'2 tbsp lemon juice',
			'Salt and pepper to taste'
		],
		instructions: [
			'Pat scallops dry and season.',
			'Heat oil and butter in skillet until sizzling.',
			'Sear scallops 2 minutes per side until golden.',
			'Remove scallops, stir lemon juice into pan drippings for sauce.',
			'Drizzle sauce over scallops and serve.'
		],
		tags: ['scallops', 'elegant', 'quick', 'buttery', 'date night'],
		nutrition: '330 calories, 4g carbs, 20g fat, 32g protein',
		time: 20
	},
	{
		id: 46,
		name: 'Fish and Chips',
		servings: '4',
		ingredients: [
			'4 cod fillets',
			'1 cup flour',
			'1 cup beer (or sparkling water)',
			'1 tsp baking powder',
			'Salt and pepper to taste',
			'Vegetable oil for frying',
			'4 cups potato fries'
		],
		instructions: [
			'Whisk flour, beer, baking powder, salt, and pepper for batter.',
			'Dip fish fillets and fry 4–5 minutes until golden and crisp.',
			'Drain on paper towels and serve with fries and tartar sauce.'
		],
		tags: ['british', 'fried', 'classic', 'crispy', 'comfort food'],
		nutrition: '720 calories, 68g carbs, 36g fat, 34g protein',
		time: 40
	},
	{
		id: 47,
		name: 'Beef Wellington with Red Wine Reduction',
		servings: '4',
		ingredients: [
			'2 lbs beef tenderloin',
			'8 oz mushrooms, finely chopped',
			'4 slices prosciutto',
			'1 sheet puff pastry',
			'2 tbsp Dijon mustard',
			'1 egg, beaten',
			'1 cup red wine',
			'2 tbsp butter',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sear beef on all sides and brush with Dijon mustard.',
			'Sauté mushrooms until dry, then cool.',
			'Wrap beef in prosciutto and mushroom duxelles, then puff pastry.',
			'Brush with egg wash and bake at 400°F (200°C) for 35 minutes.',
			'Simmer red wine with butter for sauce. Slice and serve with reduction.'
		],
		tags: ['beef', 'french', 'holiday', 'main', 'luxury'],
		nutrition: '850 calories, 25g carbs, 45g fat, 60g protein',
		time: 90
	},
	{
		id: 48,
		name: 'Lobster Thermidor',
		servings: '2',
		ingredients: [
			'2 lobsters, cooked and halved',
			'2 tbsp butter',
			'2 tbsp flour',
			'½ cup heavy cream',
			'¼ cup dry white wine',
			'1 tsp Dijon mustard',
			'¼ cup grated Gruyère cheese',
			'1 tbsp parsley'
		],
		instructions: [
			'Remove lobster meat, chop, and set aside.',
			'Make roux with butter and flour, whisk in cream and wine.',
			'Add mustard and cheese, then fold in lobster meat.',
			'Spoon mixture into shells, sprinkle cheese, and broil until golden.'
		],
		tags: ['seafood', 'french', 'elegant', 'main'],
		nutrition: '720 calories, 12g carbs, 48g fat, 55g protein',
		time: 60
	},
	{
		id: 49,
		name: 'Duck à l’Orange',
		servings: '4',
		ingredients: [
			'1 whole duck (4–5 lbs)',
			'1 cup orange juice',
			'2 tbsp sugar',
			'¼ cup vinegar',
			'1 cup chicken stock',
			'Zest of 1 orange',
			'2 tbsp Grand Marnier',
			'Salt and pepper'
		],
		instructions: [
			'Roast duck at 375°F (190°C) for 1½ hours until crispy.',
			'Caramelize sugar with vinegar, add orange juice and stock.',
			'Reduce, then add Grand Marnier and zest.',
			'Slice duck and drizzle orange sauce over top.'
		],
		tags: ['duck', 'french', 'classic', 'main', 'holiday'],
		nutrition: '880 calories, 15g carbs, 65g fat, 55g protein',
		time: 120
	},
	{
		id: 50,
		name: 'Seared Scallops with Saffron Cream',
		servings: '4',
		ingredients: [
			'12 sea scallops',
			'2 tbsp olive oil',
			'1 shallot, minced',
			'½ cup white wine',
			'1 cup heavy cream',
			'¼ tsp saffron threads',
			'Salt and pepper to taste'
		],
		instructions: [
			'Sear scallops 2 minutes per side, then set aside.',
			'Sauté shallots, deglaze with wine, and reduce.',
			'Add cream and saffron, simmer until thick.',
			'Plate scallops with saffron cream drizzled on top.'
		],
		tags: ['seafood', 'gourmet', 'fine dining', 'main'],
		nutrition: '600 calories, 10g carbs, 45g fat, 32g protein',
		time: 35
	},
	{
		id: 51,
		name: 'Rack of Lamb with Rosemary Jus',
		servings: '4',
		ingredients: [
			'2 racks of lamb, frenched',
			'2 tbsp olive oil',
			'2 tbsp Dijon mustard',
			'2 tbsp fresh rosemary, chopped',
			'1 cup beef stock',
			'2 tbsp red wine',
			'Salt and pepper'
		],
		instructions: [
			'Season and sear lamb, then roast at 400°F (200°C) for 25 minutes.',
			'Simmer stock, wine, and rosemary for jus.',
			'Slice lamb and drizzle rosemary jus before serving.'
		],
		tags: ['lamb', 'french', 'holiday', 'main'],
		nutrition: '780 calories, 5g carbs, 55g fat, 60g protein',
		time: 60
	},
	{
		id: 52,
		name: 'Broccoli Stir-Fry with Sesame',
		servings: '4',
		ingredients: [
			'1 lb broccoli florets',
			'1 tbsp sesame oil',
			'1 tbsp soy sauce',
			'1 tsp minced ginger',
			'1 tsp sesame seeds'
		],
		instructions: [
			'Heat sesame oil in a pan, add ginger and cook 30 seconds.',
			'Add broccoli and 2 tbsp water, stir-fry 4–5 minutes.',
			'Add soy sauce and sesame seeds, toss and serve.'
		],
		tags: ['asian', 'quick', 'vegan', 'stir-fry', 'vegatarian'],
		nutrition: '100 calories, 6g fat, 8g carbs, 4g protein',
		time: 10
	},
	{
		id: 53,
		name: 'Filet Mignon with mushrooms and Madeira Sauce',
		servings: '2',
		ingredients: [
			'2 filet mignon steaks',
			'1 cup sliced mushrooms(best from the farmers market)',
			'½ cup Madeira wine',
			'½ cup waygu stock',
			'2 tbsp butter',
			'Salt and pepper'
		],
		instructions: [
			'Sear steaks 3 minutes per side, remove.',
			'Saute mushrooms in butter, add salt and pepper. Remove at al dente',
			'Deglaze pan with Madeira, add stock, reduce by half.',
			'Serve steak topped with foie gras and drizzle sauce.'
		],
		tags: ['beef', 'luxury', 'fine dining', 'main'],
		nutrition: '950 calories, 8g carbs, 70g fat, 65g protein',
		time: 40
	},
	{
		id: 54,
		name: 'Lobster Ravioli in Champagne Cream Sauce',
		servings: '4',
		ingredients: [
			'1 lb lobster meat, chopped',
			'1 package fresh pasta sheets',
			'½ cup ricotta cheese',
			'½ cup Champagne',
			'1 cup heavy cream',
			'2 tbsp butter',
			'1 egg'
		],
		instructions: [
			'Combine lobster and ricotta for filling.',
			'Fill ravioli and seal with egg wash.',
			'Sauté in butter, add Champagne and cream to make sauce.',
			'Toss ravioli in sauce and serve.'
		],
		tags: ['pasta', 'seafood', 'italian', 'fine dining'],
		nutrition: '780 calories, 55g carbs, 42g fat, 38g protein',
		time: 60
	},
	{
		id: 55,
		name: 'Wild Mushroom and Waygu Ragù with Pappardelle',
		servings: '4',
		ingredients: [
			'1 lb Waygu shoulder, diced',
			'8 oz wild mushrooms, sliced',
			'1 onion, diced',
			'½ cup red wine',
			'1 cup beef stock',
			'12 oz pappardelle',
			'2 tbsp butter'
		],
		instructions: [
			'Sear Waygu, add onion and mushrooms, cook until browned.',
			'Deglaze with wine, add stock, and simmer 1 hour.',
			'Toss cooked pasta with ragù and butter, then serve.'
		],
		tags: ['italian', 'Waygu', 'pasta', 'fine dining'],
		nutrition: '720 calories, 65g carbs, 28g fat, 40g protein',
		time: 90
	},
	{
		id: 56,
		name: 'Sea Bass en Papillote',
		servings: '2',
		ingredients: [
			'2 sea bass fillets',
			'1 lemon, sliced',
			'1 zucchini, julienned',
			'1 carrot, julienned',
			'2 tbsp olive oil',
			'Salt and pepper',
			'Fresh thyme sprigs'
		],
		instructions: [
			'Place fish and vegetables on parchment paper.',
			'Drizzle with oil, season, and top with lemon and thyme.',
			'Fold packet and bake at 375°F (190°C) for 20 minutes.',
			'Serve in parchment for presentation.'
		],
		tags: ['seafood', 'healthy', 'french', 'fine dining'],
		nutrition: '420 calories, 12g carbs, 24g fat, 35g protein',
		time: 35
	},
	{
		id: 57,
		name: 'Osso Buco alla Milanese',
		servings: '4',
		ingredients: [
			'4 veal shanks',
			'1 onion, diced',
			'2 carrots, diced',
			'1 cup white wine',
			'1½ cups beef broth',
			'1 can diced tomatoes',
			'2 tbsp olive oil',
			'Gremolata (lemon zest, garlic, parsley)'
		],
		instructions: [
			'Brown veal shanks in oil, remove.',
			'Sauté vegetables, deglaze with wine.',
			'Add broth and tomatoes, return veal, and simmer 1½ hours.',
			'Top with gremolata and serve with risotto.'
		],
		tags: ['italian', 'veal', 'stew', 'fine dining'],
		nutrition: '640 calories, 22g carbs, 38g fat, 52g protein',
		time: 120
	},
	{
		id: 58,
		name: 'Black Cod with Miso Glaze',
		servings: '2',
		ingredients: [
			'2 black cod fillets',
			'3 tbsp white miso paste',
			'2 tbsp mirin',
			'2 tbsp sake',
			'1 tbsp sugar'
		],
		instructions: [
			'Mix miso, mirin, sake, and sugar for marinade.',
			'Marinate fish overnight.',
			'Broil or bake at 425°F (220°C) for 10–12 minutes until caramelized.',
			'Serve with steamed vegetables.'
		],
		tags: ['japanese', 'seafood', 'fine dining', 'main'],
		nutrition: '510 calories, 14g carbs, 32g fat, 38g protein',
		time: 45
	},
	{
		id: 59,
		name: 'Herb-Crusted Venison Loin with Blackberry Reduction',
		servings: '4',
		ingredients: [
			'1½ lbs venison loin',
			'2 tbsp Dijon mustard',
			'1 cup breadcrumbs',
			'2 tbsp mixed herbs (rosemary, thyme, parsley)',
			'1 cup blackberries',
			'½ cup red wine',
			'1 tbsp honey'
		],
		instructions: [
			'Coat venison with mustard and herb crumbs, roast at 400°F (200°C) for 25 minutes.',
			'Simmer blackberries with wine and honey until thick.',
			'Slice venison and drizzle reduction over top.'
		],
		tags: ['game', 'fine dining', 'european', 'main'],
		nutrition: '690 calories, 22g carbs, 32g fat, 58g protein',
		time: 60
	},
	{
		id: 60,
		name: 'Chilean Sea Bass with Champagne Beurre Blanc',
		servings: '4',
		ingredients: [
			'4 sea bass fillets',
			'1 cup Champagne',
			'1 shallot, minced',
			'½ cup butter, cold and cubed',
			'Salt and pepper',
			'Lemon wedges for garnish'
		],
		instructions: [
			'Reduce Champagne and shallots in a pan until nearly dry.',
			'Whisk in cold butter to form sauce.',
			'Pan-sear sea bass until golden and flaky.',
			'Serve with Champagne sauce and lemon.'
		],
		tags: ['seafood', 'french', 'luxury', 'fine dining'],
		nutrition: '520 calories, 5g carbs, 34g fat, 45g protein',
		time: 40
	},
	{
		id: 61,
		name: 'Coq au Vin Blanc',
		servings: '4',
		ingredients: [
			'4 chicken thighs and legs',
			'1 cup dry white wine',
			'1 cup chicken broth',
			'1 onion, diced',
			'1 cup mushrooms, sliced',
			'2 tbsp butter',
			'1 tbsp flour'
		],
		instructions: [
			'Brown chicken, then sauté vegetables.',
			'Add flour, then deglaze with wine and broth.',
			'Simmer until chicken is tender and sauce thickens.',
			'Serve with parsley garnish.'
		],
		tags: ['french', 'chicken', 'classic', 'fine dining'],
		nutrition: '630 calories, 14g carbs, 38g fat, 55g protein',
		time: 75
	},
	{
		id: 62,
		name: 'Porcini-Crusted Filet Mignon with Port Reduction',
		servings: '2',
		ingredients: [
			'2 filet mignon steaks',
			'2 tbsp dried porcini powder',
			'½ cup port wine',
			'¼ cup beef stock',
			'2 tbsp butter',
			'Salt and pepper'
		],
		instructions: [
			'Rub steaks with porcini powder and sear to desired doneness.',
			'Deglaze with port and stock, reduce by half.',
			'Add butter to finish sauce and drizzle over steaks.'
		],
		tags: ['beef', 'fine dining', 'luxury', 'main'],
		nutrition: '890 calories, 10g carbs, 62g fat, 70g protein',
		time: 45
	},
	{
		id: 63,
		name: 'Broccoli Rice Casserole',
		servings: '6',
		ingredients: [
			'3 cups cooked rice',
			'3 cups chopped broccoli',
			'1 can (10 oz) cream of mushroom soup',
			'1 cup shredded cheddar cheese',
			'½ cup milk',
			'¼ tsp garlic powder'
		],
		instructions: [
			'Preheat oven to 350°F (175°C).',
			'Mix rice, broccoli, soup, milk, cheese, and garlic powder.',
			'Pour into casserole dish and bake 25 minutes until bubbly.'
		],
		tags: ['baked', 'rice', 'comfort food', 'side', 'vegatarian'],
		nutrition: '280 calories, 15g fat, 25g carbs, 10g protein',
		time: 35
	}
];

export const Desserts: Recipe[] = [
	{
		id: 1,
		name: 'Classic Vanilla Cake',
		servings: '8',
		ingredients: [
			'2½ cups all-purpose flour',
			'2½ tsp baking powder',
			'½ tsp salt',
			'1 cup unsalted butter, softened',
			'2 cups sugar',
			'4 large eggs',
			'1 cup whole milk',
			'2 tsp vanilla extract'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease and flour two 9-inch cake pans.',
			'Mix flour, baking powder, and salt in a bowl.',
			'Cream butter and sugar until light, then add eggs one at a time.',
			'Alternate adding flour mixture and milk, ending with flour.',
			'Stir in vanilla, pour into pans, and bake 25–30 minutes.',
			'Cool completely before frosting.'
		],
		tags: ['vanilla', 'classic', 'dessert', 'cake'],
		nutrition: '320 calories, 45g carbs, 12g fat, 5g protein',
		time: 50
	},
	{
		id: 2,
		name: 'Chocolate Fudge Cake',
		servings: '8',
		ingredients: [
			'2 cups all-purpose flour',
			'2 cups sugar',
			'¾ cup cocoa powder',
			'2 tsp baking powder',
			'1 tsp baking soda',
			'½ tsp salt',
			'1 cup buttermilk',
			'½ cup vegetable oil',
			'2 eggs',
			'1 tsp vanilla extract',
			'1 cup hot water'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease two 9-inch pans.',
			'Mix dry ingredients in a bowl.',
			'Add buttermilk, oil, eggs, and vanilla. Mix until smooth.',
			'Gradually stir in hot water.',
			'Pour into pans and bake 30–35 minutes. Cool completely.'
		],
		tags: ['chocolate', 'fudge', 'dessert', 'cake'],
		nutrition: '400 calories, 60g carbs, 15g fat, 6g protein',
		time: 55
	},
	{
		id: 3,
		name: 'Carrot Cake with Cream Cheese Frosting',
		servings: '8',
		ingredients: [
			'2 cups all-purpose flour',
			'2 tsp baking powder',
			'1½ tsp baking soda',
			'1 tsp cinnamon',
			'½ tsp nutmeg',
			'½ tsp salt',
			'1½ cups sugar',
			'1 cup vegetable oil',
			'4 eggs',
			'2 cups grated carrots',
			'1 cup crushed pineapple, drained',
			'½ cup chopped walnuts'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease two 9-inch pans.',
			'Mix flour, baking powder, baking soda, cinnamon, nutmeg, and salt.',
			'Beat sugar and oil, then add eggs one at a time.',
			'Fold in dry ingredients, carrots, pineapple, and walnuts.',
			'Pour into pans and bake 30–35 minutes. Cool and frost with cream cheese frosting.'
		],
		tags: ['carrot', 'dessert', 'cake', 'classic'],
		nutrition: '420 calories, 60g carbs, 18g fat, 6g protein',
		time: 60
	},
	{
		id: 4,
		name: 'Lemon Drizzle Cake',
		servings: '8',
		ingredients: [
			'1¾ cups all-purpose flour',
			'2 tsp baking powder',
			'¼ tsp salt',
			'¾ cup unsalted butter, softened',
			'1 cup sugar',
			'4 eggs',
			'2 tbsp lemon zest',
			'½ cup lemon juice',
			'½ cup milk'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease and flour a loaf pan.',
			'Mix flour, baking powder, and salt.',
			'Cream butter and sugar, add eggs one at a time, then lemon zest.',
			'Alternate adding flour mixture and milk, ending with flour.',
			'Pour into pan and bake 50–55 minutes. Drizzle with lemon juice while warm.'
		],
		tags: ['lemon', 'dessert', 'cake', 'citrus'],
		nutrition: '300 calories, 42g carbs, 12g fat, 5g protein',
		time: 65
	},
	{
		id: 5,
		name: 'Red Velvet Cake',
		servings: '8',
		ingredients: [
			'2½ cups all-purpose flour',
			'1½ cups sugar',
			'1 tsp baking soda',
			'1 tsp cocoa powder',
			'1 tsp salt',
			'1½ cups vegetable oil',
			'1 cup buttermilk',
			'2 large eggs',
			'2 tbsp red food coloring',
			'1 tsp vanilla extract',
			'1 tsp white vinegar'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease two 9-inch pans.',
			'Mix flour, sugar, baking soda, cocoa, and salt.',
			'Combine oil, buttermilk, eggs, food coloring, vanilla, and vinegar.',
			'Gradually add dry ingredients, mix until smooth.',
			'Pour into pans and bake 25–30 minutes. Cool and frost with cream cheese frosting.'
		],
		tags: ['red velvet', 'dessert', 'cake', 'classic'],
		nutrition: '380 calories, 55g carbs, 15g fat, 6g protein',
		time: 60
	},
	{
		id: 6,
		name: 'Banana Cake with Cream Cheese Frosting',
		servings: '8',
		ingredients: [
			'2 cups all-purpose flour',
			'1 tsp baking soda',
			'½ tsp salt',
			'½ cup butter, softened',
			'1 cup sugar',
			'2 large eggs',
			'1 tsp vanilla extract',
			'1 cup mashed ripe bananas',
			'½ cup buttermilk'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease and flour a 9-inch pan.',
			'Mix flour, baking soda, and salt.',
			'Cream butter and sugar, add eggs and vanilla.',
			'Fold in bananas, then alternate flour and buttermilk.',
			'Pour into pan and bake 30–35 minutes. Cool and frost with cream cheese frosting.'
		],
		tags: ['banana', 'dessert', 'cake', 'moist'],
		nutrition: '360 calories, 52g carbs, 14g fat, 5g protein',
		time: 55
	},
	{
		id: 7,
		name: 'Coffee and Walnut Cake',
		servings: '8',
		ingredients: [
			'2 cups all-purpose flour',
			'2 tsp baking powder',
			'¼ tsp salt',
			'½ cup butter',
			'1¼ cups sugar',
			'2 large eggs',
			'1 tsp vanilla extract',
			'1 cup milk',
			'1 tbsp instant coffee',
			'½ cup chopped walnuts'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease and flour two 9-inch pans.',
			'Mix flour, baking powder, salt, and walnuts.',
			'Cream butter and sugar, add eggs and vanilla.',
			'Stir in flour mixture alternately with milk mixed with coffee.',
			'Pour into pans and bake 30–35 minutes.'
		],
		tags: ['coffee', 'walnut', 'dessert', 'cake'],
		nutrition: '380 calories, 48g carbs, 16g fat, 6g protein',
		time: 55
	},
	{
		id: 8,
		name: 'Coconut Cake',
		servings: '8',
		ingredients: [
			'2½ cups all-purpose flour',
			'2 tsp baking powder',
			'½ tsp salt',
			'1 cup butter',
			'2 cups sugar',
			'4 eggs',
			'1 cup coconut milk',
			'1 tsp vanilla extract',
			'1 cup shredded coconut'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease and flour two 9-inch pans.',
			'Mix flour, baking powder, and salt.',
			'Cream butter and sugar, add eggs and vanilla.',
			'Alternate adding flour mixture and coconut milk.',
			'Fold in shredded coconut, bake 30–35 minutes. Cool before frosting.'
		],
		tags: ['coconut', 'dessert', 'cake', 'tropical'],
		nutrition: '380 calories, 52g carbs, 14g fat, 5g protein',
		time: 60
	},
	{
		id: 9,
		name: 'Pineapple Upside-Down Cake',
		servings: '8',
		ingredients: [
			'¼ cup butter',
			'½ cup brown sugar',
			'1 can pineapple rings, drained',
			'10 maraschino cherries',
			'1¾ cups all-purpose flour',
			'2 tsp baking powder',
			'½ tsp salt',
			'½ cup butter',
			'1 cup sugar',
			'2 eggs',
			'½ cup milk'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Melt ¼ cup butter in pan and sprinkle brown sugar.',
			'Arrange pineapple rings and cherries on top.',
			'Mix flour, baking powder, salt, butter, sugar, eggs, and milk to make batter.',
			'Pour batter over pineapple and bake 35–40 minutes.'
		],
		tags: ['pineapple', 'dessert', 'cake', 'tropical'],
		nutrition: '360 calories, 55g carbs, 12g fat, 4g protein',
		time: 55
	},
	{
		id: 10,
		name: 'Strawberry Shortcake',
		servings: '6',
		ingredients: [
			'1½ cups all-purpose flour',
			'2 tsp baking powder',
			'¼ tsp salt',
			'½ cup butter',
			'½ cup sugar',
			'2/3 cup milk',
			'1 pint fresh strawberries, sliced',
			'1 cup whipped cream'
		],
		instructions: [
			'Preheat oven to 425°F (220°C). Grease baking dish.',
			'Mix flour, baking powder, and salt. Cut in butter.',
			'Add milk and stir until combined, bake 12–15 minutes.',
			'Split shortcake, layer with strawberries and whipped cream.'
		],
		tags: ['strawberry', 'dessert', 'cake', 'shortcake'],
		nutrition: '300 calories, 45g carbs, 12g fat, 5g protein',
		time: 40
	},
	{
		id: 11,
		name: 'Chocolate Lava Cake',
		servings: '4',
		ingredients: [
			'½ cup unsalted butter',
			'4 oz bittersweet chocolate',
			'1 cup powdered sugar',
			'2 eggs',
			'2 egg yolks',
			'6 tbsp all-purpose flour',
			'½ tsp vanilla extract'
		],
		instructions: [
			'Preheat oven to 425°F (220°C). Grease ramekins.',
			'Melt butter and chocolate, whisk in sugar.',
			'Add eggs, yolks, vanilla, and flour until smooth.',
			'Pour into ramekins, bake 12–14 minutes until edges set but center soft.',
			'Invert onto plates and serve immediately.'
		],
		tags: ['chocolate', 'molten', 'dessert', 'cake'],
		nutrition: '410 calories, 40g carbs, 25g fat, 6g protein',
		time: 25
	},
	{
		id: 12,
		name: 'Marble Cake',
		servings: '8',
		ingredients: [
			'2 cups all-purpose flour',
			'2 tsp baking powder',
			'½ tsp salt',
			'1 cup butter',
			'1½ cups sugar',
			'4 eggs',
			'1 cup milk',
			'2 tsp vanilla extract',
			'¼ cup cocoa powder'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease a 9x13-inch pan.',
			'Mix flour, baking powder, salt. Cream butter and sugar, add eggs and vanilla.',
			'Alternate adding flour and milk. Remove ½ cup batter and mix with cocoa.',
			'Layer plain and chocolate batter in pan, swirl with a knife, bake 35–40 minutes.'
		],
		tags: ['marble', 'chocolate', 'vanilla', 'dessert', 'cake'],
		nutrition: '350 calories, 50g carbs, 14g fat, 5g protein',
		time: 50
	},
	{
		id: 13,
		name: 'Pumpkin Spice Cake',
		servings: '8',
		ingredients: [
			'2 cups all-purpose flour',
			'1½ tsp baking powder',
			'½ tsp baking soda',
			'1 tsp cinnamon',
			'½ tsp nutmeg',
			'½ tsp ginger',
			'½ tsp salt',
			'1 cup sugar',
			'½ cup vegetable oil',
			'2 eggs',
			'1 cup pumpkin puree'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease a 9x13-inch pan.',
			'Mix dry ingredients.',
			'Combine sugar, oil, eggs, and pumpkin, then fold into dry ingredients.',
			'Pour batter into pan and bake 30–35 minutes.'
		],
		tags: ['pumpkin', 'spice', 'dessert', 'cake', 'fall'],
		nutrition: '320 calories, 45g carbs, 12g fat, 5g protein',
		time: 50
	},
	{
		id: 14,
		name: 'Almond Cake',
		servings: '8',
		ingredients: [
			'1½ cups almond flour',
			'½ cup all-purpose flour',
			'1 tsp baking powder',
			'¼ tsp salt',
			'½ cup butter',
			'¾ cup sugar',
			'4 eggs',
			'1 tsp almond extract'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease 9-inch pan.',
			'Mix almond flour, all-purpose flour, baking powder, and salt.',
			'Cream butter and sugar, add eggs and almond extract.',
			'Fold in dry ingredients, pour into pan, bake 30–35 minutes.'
		],
		tags: ['almond', 'dessert', 'cake', 'nutty'],
		nutrition: '350 calories, 28g carbs, 20g fat, 10g protein',
		time: 50
	},
	{
		id: 15,
		name: 'Apple Crisp',
		servings: '6',
		ingredients: [
			'6 cups sliced apples',
			'½ cup brown sugar',
			'½ cup oats',
			'¼ cup all-purpose flour',
			'¼ cup butter, melted',
			'1 tsp cinnamon',
			'¼ tsp nutmeg'
		],
		instructions: [
			'Preheat oven to 350°F (175°C).',
			'Place sliced apples in a greased baking dish.',
			'Mix sugar, oats, flour, cinnamon, nutmeg, and butter; sprinkle over apples.',
			'Bake 40–45 minutes until topping is golden and apples are tender.'
		],
		tags: ['apple', 'baked', 'dessert', 'fruit'],
		nutrition: '280 calories, 55g carbs, 10g fat, 2g protein',
		time: 50
	},
	{
		id: 16,
		name: 'Berry Parfait',
		servings: '4',
		ingredients: ['2 cups mixed berries', '1 cup Greek yogurt', '½ cup granola', '2 tbsp honey'],
		instructions: [
			'Layer yogurt, berries, and granola in glasses.',
			'Drizzle with honey and serve immediately.'
		],
		tags: ['berry', 'no-bake', 'dessert', 'fruit'],
		nutrition: '200 calories, 30g carbs, 5g fat, 6g protein',
		time: 10
	},
	{
		id: 17,
		name: 'Peach Cobbler',
		servings: '6',
		ingredients: [
			'4 cups sliced peaches',
			'¾ cup sugar',
			'1 tsp cinnamon',
			'1 tsp vanilla extract',
			'1 cup all-purpose flour',
			'1 cup milk',
			'½ cup butter, melted',
			'2 tsp baking powder',
			'¼ tsp salt'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease a 9x9-inch pan.',
			'Mix peaches, ¼ cup sugar, cinnamon, and vanilla; pour into pan.',
			'Combine flour, baking powder, salt, remaining sugar, milk, and butter; pour over peaches.',
			'Bake 35–40 minutes until golden.'
		],
		tags: ['peach', 'baked', 'dessert', 'fruit'],
		nutrition: '300 calories, 55g carbs, 10g fat, 4g protein',
		time: 50
	},
	{
		id: 18,
		name: 'Mango Pudding',
		servings: '4',
		ingredients: [
			'2 ripe mangoes, peeled and diced',
			'1 cup milk',
			'¼ cup sugar',
			'1 tbsp cornstarch',
			'½ tsp vanilla extract'
		],
		instructions: [
			'Blend mangoes into puree.',
			'Mix milk, sugar, and cornstarch in a saucepan over medium heat until thickened.',
			'Stir in mango puree and vanilla, cook 2–3 minutes more.',
			'Pour into serving cups and chill 2 hours.'
		],
		tags: ['mango', 'no-bake', 'dessert', 'fruit'],
		nutrition: '180 calories, 35g carbs, 2g fat, 4g protein',
		time: 15
	},
	{
		id: 18,
		name: 'Strawberry Shortcake Cups',
		servings: '4',
		ingredients: [
			'1 cup sliced strawberries',
			'2 tbsp sugar',
			'4 mini sponge cakes',
			'½ cup whipped cream'
		],
		instructions: [
			'Toss strawberries with sugar and let sit 10 minutes.',
			'Split sponge cakes in half, layer with strawberries and whipped cream.',
			'Top with more strawberries and cream.'
		],
		tags: ['strawberry', 'quick', 'dessert', 'fruit'],
		nutrition: '220 calories, 30g carbs, 8g fat, 4g protein',
		time: 15
	},
	{
		id: 19,
		name: 'Blueberry Muffins',
		servings: '12',
		ingredients: [
			'2 cups all-purpose flour',
			'1 cup sugar',
			'2 tsp baking powder',
			'½ tsp salt',
			'½ cup butter, melted',
			'1 cup milk',
			'2 eggs',
			'1 tsp vanilla extract',
			'1½ cups blueberries'
		],
		instructions: [
			'Preheat oven to 375°F (190°C). Line muffin tin with paper cups.',
			'Mix flour, sugar, baking powder, and salt.',
			'Combine butter, milk, eggs, and vanilla, then fold into dry ingredients.',
			'Gently fold in blueberries.',
			'Scoop into muffin cups and bake 20–25 minutes.'
		],
		tags: ['blueberry', 'baked', 'dessert', 'fruit'],
		nutrition: '200 calories, 32g carbs, 6g fat, 4g protein',
		time: 35
	},
	{
		id: 20,
		name: 'Pineapple Upside-Down Mini Cakes',
		servings: '4',
		ingredients: [
			'4 tbsp butter',
			'¼ cup brown sugar',
			'4 pineapple rings',
			'4 maraschino cherries',
			'½ cup flour',
			'¼ tsp baking powder',
			'¼ cup sugar',
			'1 egg',
			'2 tbsp milk'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease 4 ramekins.',
			'Melt butter in ramekins, sprinkle brown sugar, top with pineapple ring and cherry.',
			'Mix flour, baking powder, sugar, egg, and milk; pour over pineapple.',
			'Bake 20–25 minutes until set.'
		],
		tags: ['pineapple', 'mini', 'dessert', 'fruit'],
		nutrition: '180 calories, 28g carbs, 7g fat, 2g protein',
		time: 35
	},
	{
		id: 21,
		name: 'Raspberry Tart',
		servings: '6',
		ingredients: [
			'1 pre-made tart shell',
			'1 cup fresh raspberries',
			'½ cup pastry cream',
			'2 tbsp powdered sugar'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Bake tart shell 10 minutes and cool.',
			'Fill shell with pastry cream, top with raspberries.',
			'Sift powdered sugar over top before serving.'
		],
		tags: ['raspberry', 'baked', 'dessert', 'fruit'],
		nutrition: '210 calories, 32g carbs, 8g fat, 4g protein',
		time: 25
	},
	{
		id: 22,
		name: 'Peach Sorbet',
		servings: '4',
		ingredients: [
			'4 ripe peaches, peeled and diced',
			'½ cup sugar',
			'1 tbsp lemon juice',
			'½ cup water'
		],
		instructions: [
			'Blend peaches, sugar, lemon juice, and water until smooth.',
			'Chill mixture 1 hour, then freeze in ice cream maker according to manufacturer.'
		],
		tags: ['peach', 'frozen', 'dessert', 'fruit', 'sorbet'],
		nutrition: '100 calories, 25g carbs, 0g fat, 1g protein',
		time: 70
	},
	{
		id: 23,
		name: 'Mixed Fruit Pavlova',
		servings: '6',
		ingredients: [
			'4 egg whites',
			'1 cup sugar',
			'1 tsp cornstarch',
			'1 tsp vinegar',
			'1 cup whipped cream',
			'2 cups mixed berries'
		],
		instructions: [
			'Preheat oven to 300°F (150°C). Line baking sheet with parchment paper.',
			'Beat egg whites until stiff peaks form, gradually add sugar, then cornstarch and vinegar.',
			'Shape into circle, bake 50 minutes, cool completely.',
			'Top with whipped cream and berries.'
		],
		tags: ['berry', 'baked', 'dessert', 'fruit', 'pavlova'],
		nutrition: '220 calories, 40g carbs, 8g fat, 3g protein',
		time: 70
	},
	{
		id: 24,
		name: 'Banana Pudding',
		servings: '6',
		ingredients: [
			'4 ripe bananas, sliced',
			'1 cup vanilla pudding',
			'1 cup whipped cream',
			'½ cup vanilla wafers'
		],
		instructions: [
			'Layer pudding, bananas, and wafers in serving dish.',
			'Top with whipped cream and chill 2 hours before serving.'
		],
		tags: ['banana', 'no-bake', 'dessert', 'fruit', 'pudding'],
		nutrition: '250 calories, 45g carbs, 8g fat, 4g protein',
		time: 15
	},
	{
		id: 25,
		name: 'Cherry Clafoutis',
		servings: '6',
		ingredients: [
			'2 cups pitted cherries',
			'3 eggs',
			'½ cup sugar',
			'½ cup flour',
			'1 cup milk',
			'1 tsp vanilla extract',
			'Pinch salt'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease a baking dish.',
			'Spread cherries in dish.',
			'Whisk eggs, sugar, flour, milk, vanilla, and salt, pour over cherries.',
			'Bake 35–40 minutes until set and golden.'
		],
		tags: ['cherry', 'baked', 'dessert', 'fruit', 'french'],
		nutrition: '230 calories, 35g carbs, 8g fat, 6g protein',
		time: 50
	},
	{
		id: 26,
		name: 'Mango Sticky Rice',
		servings: '4',
		ingredients: [
			'1 cup glutinous rice',
			'1 cup coconut milk',
			'¼ cup sugar',
			'½ tsp salt',
			'2 ripe mangoes, sliced'
		],
		instructions: [
			'Cook rice according to package instructions.',
			'Simmer coconut milk with sugar and salt, stir into rice.',
			'Serve with sliced mangoes on top.'
		],
		tags: ['mango', 'asian', 'dessert', 'fruit', 'sticky rice'],
		nutrition: '280 calories, 55g carbs, 7g fat, 4g protein',
		time: 40
	},
	{
		id: 27,
		name: 'Fruit Salad with Honey-Lime Dressing',
		servings: '4',
		ingredients: [
			'1 cup strawberries, sliced',
			'1 cup blueberries',
			'1 cup diced pineapple',
			'1 cup diced mango',
			'2 tbsp honey',
			'1 tbsp lime juice'
		],
		instructions: [
			'Mix all fruits in a bowl.',
			'Whisk honey and lime juice, drizzle over fruits, toss gently.'
		],
		tags: ['mixed fruit', 'quick', 'dessert', 'fruit', 'salad'],
		nutrition: '150 calories, 35g carbs, 0g fat, 2g protein',
		time: 10
	},
	{
		id: 28,
		name: 'Orange Almond Cake',
		servings: '8',
		ingredients: [
			'2 cups all-purpose flour',
			'1½ tsp baking powder',
			'½ tsp salt',
			'½ cup butter',
			'1 cup sugar',
			'3 eggs',
			'½ cup orange juice',
			'Zest of 1 orange',
			'½ cup sliced almonds'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Grease 9-inch pan.',
			'Mix flour, baking powder, and salt.',
			'Cream butter and sugar, add eggs, orange juice, and zest.',
			'Fold in flour mixture, pour into pan, sprinkle almonds, bake 35–40 minutes.'
		],
		tags: ['orange', 'almond', 'dessert', 'cake', 'fruit'],
		nutrition: '320 calories, 45g carbs, 12g fat, 6g protein',
		time: 50
	},
	{
		id: 29,
		name: 'Pear and Almond Tart',
		servings: '6',
		ingredients: [
			'1 pre-made tart shell',
			'3 pears, sliced',
			'½ cup almond cream (frangipane)',
			'2 tbsp sliced almonds',
			'1 tbsp powdered sugar'
		],
		instructions: [
			'Preheat oven to 350°F (175°C). Spread almond cream in tart shell.',
			'Arrange pear slices on top, sprinkle almonds.',
			'Bake 30–35 minutes until golden. Dust with powdered sugar.'
		],
		tags: ['pear', 'almond', 'baked', 'dessert', 'fruit'],
		nutrition: '260 calories, 35g carbs, 12g fat, 4g protein',
		time: 50
	}
];
