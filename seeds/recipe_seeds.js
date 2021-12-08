const { Recipe } = require('../models');

const recipedata = [
    {
        title: 'Tomato Soup',
        ingredients: '1 kg of tomatoes (about 7-8 medium sized of tomatoes, 1 onion, 3 cloves of garlic, 2 tbsp of olive oil - plus extra to server, 1 tbsp of flour, 3 cups of water (or chicken or vegetable stock), fresh ground black pepper and salt to season, fresh basil leaves, shereded kashar cheese (mozzarella cheese)',
        preperations: 'Before you starting cooking Turkish tomato soup preheat oven to 200 degrees, Cut the tomatoes and onion in half, put the tomatoes and onions on a tray with the garlic and drizzle with 1 tbsp of olive oil. Season with salt and pepper, and top with 2 sprigs of fresh basil.Bake for 20-225 minutes. Once cooled slightly, peel and chop the tomatoes, onions, andgarlic. Heat a saucepan with the other tbsp of olive oil and add the chopped onions,tomatoes and garlic. Saute the vegetables for 3 minutes over a medium heat. Add the flour to the vegetables in the pan and stir in. Add 4 cups of hot water(or stock) and bring the boil. Simmer uncovered for 10 minutes. Blend all ingredients until the desired consistency of Turkish tomato soup is achieved (add more boiling water if you find it too thick). Serve topped with freshly ground black pepper and salt,and a few basil or shereded cheese.',
        category: "Soups",
        url: "https://veganhuggs.com/wp-content/uploads/2020/10/Roasted-tomato-soup-square.jpg"
            
    },
    {
        title: 'Spicy Vegetables (Acili Ezme)',
        ingredients: '3 medium tomatoes, 1 medium onion, 2 large green pepper/chillies(depending how hot you like it), 1 handful of fresh mint, 2 handfuls of fresh flat leaf parsley, 1 tbsp of red pepper flakes, 1 tbsp of sumac, olive oil, juice from half a lemon, salt.',
        preperations: 'Peel the tomatoes and remove thee seeds.Dice very finely using a sharp knife.Peel and chop the onion very finely. Split the pepers/chills lengthways, remove the seeds and chop finely. If needed, re-chop all ingredients again. The dish shoul be chopped very, very finely. Strain all the juices away and place the tomatoes onion and chillies together in a bowl. Add the spices and mix through. Finally add the lemon juice and olive oil.Mix through and serve with a little extra parsley on top.',
        category: "Appitizers",
        url: "https://i4.hurimg.com/i/hurriyet/75/750x422/5f0c478467b0a81950d7774b.jpg"
        
    },
    {
        title: 'Apple Cookies ( Elmali Kurabiye )',
        ingredients: 'For dough: 180 gr all-purpose flour + extra, 1 teaspoon baking powder, 1 tsp, 65 gr butter on room temperature, 60ml full fat plain yogurt, 40 gr powdered sugar + extra for dusting, 1 egg yolk. For filling: 3 red apples, 1 tsp ground cinnamon, 2,5 tbspn powdered sugar, handful of hazelnuts',
        preperations: 'Start with the dough, you can use a standmixer or knead the dough by hand. All you have to do is combine all the ingredients listed until you have reached a dough ball. The dough should feel soft, but not sticky. Wrap the dough with cling film and refrigerate for at leat half an hour. Meanwhile create the apple filling. Use a smallblender to finely chop the hazelnuts, but make sure it still has a bit of texture. Peel the apples and remove the core. Use a coarse grater to grate the apples into the small pan. Heat the apples on meadium heat, when they start to lightly buble turn down the heat. Add sugar and cinnamon and let is simmer for a fex minutes, until most of moisture has evaporated. Add the chopped hazelnuts, you will notice they will absorbe most of the leftover moisture. Remove the dough fridge, divide by 5 equal parts and dust your work surface and rolling-pin with flour. Roll out the dough, but not too thin.Slice into 4 equals parts, and make incisions into the dough.Pre-heat the oven 180°C / 350 °F. Divide a spoonful of filling in the middle of the dough and close the packages.Bake them in the oven for about 20 minutes, depending on your oven. Let them cool off slightly, dust with powdered sugar and ENJOY! ',
        category: "Desserts",
        url: "https://cdn.yemek.com/mnresize/1250/833/uploads/2019/05/elmali-kurabiye-yeni-one-cikan.jpg"
        
    },
    {
        title: 'The Sultan’s Delight ( Hunkar Begendi )',
        ingredients: 'For lamb stew: 900 gr leg of lamb(diced), 2tbsp flour, 1 teaspoon mild chill powder, 1/2 tsp salt, freshly ground black pepper, 3 tbsp olive oil, 1 tsp sugar, 2 medium onions (halved then sliced), 1 green green capsicum (halved then sliced), 4 cloves garlic (finely chopped), 4 medium tomatoes (roughly chopped), 2 tbsp sundried tomato paste, 1 tsp dried oregano, 500 ml chicken stock. For begendi (buttom of dish) : 4 medium eggplants, 3 tbsp butter, 3 tbsp flour, 500 ml whole milk, 30 gr parmesan cheese, 30 gr medium cheddar, salt and pepper, 1 large handful fresh parsley (chopped)',
        preperations: 'Place the eggplants over an open flame on a metal trivet and roast for about 15-20 minutes, turning from time to time, until the skin looks burnt and the eggplants are soft to the touch. You could also just place a seet of foil over the gas flame, instead of trivet. Leave to cool. For lamb stew: Coat the lamb pieces with flour, the chilli powder, the salt and a little freshly ground black pepper. Heat the olive oil in a heavy bottomed saucepan over high heat, add the lamb and sugar and brown the lamb pieces for 5 minutes, turning the lamb frequently. Lower the heat down to medium and tip in the onion slices and fry for 2 minutes, again, stirring frequently. Add the garlic and green pepper and cook for a minute , stirring. Now add the tomatoes, tomato paste and aoregano and stir for 30 seconds to mix everything throughly. Add the stock and bring to boil. lower the heat right down, cover and leave to simmer for 1-1 and a half hours, until lamb is cooked right through and beautifully tender. For begendi: The eggplants should be fairly cool now, scrape out the soft pulp and place in a chopper. Throw away the skins. Chop or blend to a smooth puree and set aside. Now, lets make some Bechame sauce. Melt the butter in a medium sized saucepan over medium heat. Add the flour and whisk with a small whisk or wooden spoon for 2 minutes until the roux has thickened, is bubbling and gives off a lovely cooked aroma. Slowly, add the milk, whisking continuously. Be careful, the first drip will splutter. cook the bechame sause for 4-5 minutes until it thickens to the consistency of custard. Take it off the heat and stir in both cheeses until they melt. Shouldnt take more than a minute. Now stir in the eggplants puree, a pinch of salt and some freshly groun black pepper until its all completely mixed in and you have a beutiful eggplant cheese sauce. Check yohe salt and add more if necessary.Stir in half the chopped parsley. To serve: Pour the smoky eggplant sauce onto a plate and top with the lamb stew.',
        category: "Entree",
        url: "https://i.pinimg.com/originals/e7/a9/cd/e7a9cd4cb00f2bef0d886d1334e88dbf.jpg"
        
    }
];

const seedRecipe = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipe;