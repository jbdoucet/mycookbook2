import { Recipe } from '../_models/recipe.model';

export const RECIPES: Recipe[] = [

    {   id: 11,
        name: 'Chinese Chicken',
        description: 'Chinese Chicken with sweet and sour sauce',
        imagePath: 'Path1',
        //[new Ingredient('Chicken Portions', 4), new Ingredient('Chinese spices', 1)]
    },
    {   id: 12,
        name: 'Sausag}e Casserole',
        description: 'Sausage Casserole with onion gravy',
        imagePath: 'Path2',
        //[new Ingredient('Sausages', 6), new Ingredient('onions', 2)]
    }
];