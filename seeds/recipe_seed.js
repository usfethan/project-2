const { Recipe } = require('../models');

const recipedata = [
    {
        title: 'Tomato Soup',
        ingredients: '1 kg of tomatoes (about 7-8 medium sized of tomatoes, 1 onion, 3 cloves of garlic, 2 tbsp of olive oil - plus extra to server, 1 tbsp of flour, 3 cups of water (or chicken or vegetable stock), fresh ground black pepper and salt to season, fresh basil leaves, shereded kashar cheese (mozzarella cheese)',
        preperation: 'Before you starting cooking Turkish tomato soup preheat oven to 200 degrees, Cut the tomatoes and onion in half, put the tomatoes and onions on a tray with the garlic and drizzle with 1 tbsp of olive oil. Season with salt and pepper, and top with 2 sprigs of fresh basil.Bake for 20-225 minutes. Once cooled slightly, peel and chop the tomatoes, onions, andgarlic. Heat a saucepan with the other tbsp of olive oil and add the chopped onions,tomatoes and garlic. Saute the vegetables for 3 minutes over a medium heat. Add the flour to the vegetables in the pan and stir in. Add 4 cups of hot water(or stock) and bring the boil. Simmer uncovered for 10 minutes. Blend all ingredients until the desired consistency of Turkish tomato soup is achieved (add more boiling water if you find it too thick). Serve topped with freshly ground black pepper and salt,and a few basil or shereded cheese.',
        category: 'Soups',
        user_id: '1',
    },
    {
        title: 'Spicy Vegetables (Acili Ezme)',
        ingredients: '3 medium tomatoes, 1 medium onion, 2 large green pepper/chillies(depending how hot you like it), 1 handful of fresh mint, 2 handfuls of fresh flat leaf parsley, 1 tbsp of red pepper flakes, 1 tbsp of sumac, olive oil, juice from half a lemon, salt.',
        preperation: 'Peel the tomatoes and remove thee seeds.Dice very finely using a sharp knife.Peel and chop the onion very finely. Split the pepers/chills lengthways, remove the seeds and chop finely. If needed, re-chop all ingredients again. The dish shoul be chopped very, very finely. Strain all the juices away and place the tomatoes onion and chillies together in a bowl. Add the spices and mix through. Finally add the lemon juice and olive oil.Mix through and serve with a little extra parsley on top.',
        category: 'Appetizer',
        user_id: '2'
    },
    {
        title: ''
    }
];

const seedRecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipe;