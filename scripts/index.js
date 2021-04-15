for(var i=1; i<=12; i++) {
    var result = i*7;
    console.log(`${result} is 7 x ${i}`);
}
let myFavoriteFoods = [
    'Pizza',
    'Steak',
    'Chicken',
    'Burger',
    'Kebab'
]
//console.log(myFavoriteFoods[2]);
//console.log(myFavoriteFoods[4]);
for (i=0; i<myFavoriteFoods.length; i++) {
    console.log(myFavoriteFoods[i]);
}
 var myRecipe = {
     recipeTitle : 'Baked cheese chicken breast fillets',
     servings : 4,
     ingredients : [
         'Chicken breast fillets',
         'Cheese',
         'Onions',
         'Garlic',
         'Paprika',
         'Salt',
         'Pepper',
         'Olive oil'
     ],
     directions : [
         'Prepare the chicken breast',
         'Put pepper, salt, paprika, garlic, onions and cheese on the chicken breast',
         'Close the chicken breast and wet the them with the olive oil'
        
     ],
     letsCook: function(){
         document.write(`I'm hungry! Let's cook ${this.recipeTitle}`)
     }
    }
    document.write(`${myRecipe.recipeTitle} <br><br>`);
    document.write(`Serves: ${myRecipe['servings']} <br><br>`);
    document.write(myRecipe['${myRecipe.Ingredients}<br>'] + '<br>')
    var totalIngreddients = myRecipe.ingredients
    for (i=0; i< totalIngreddients.length; i++){
        document.write(`-${totalIngreddients[i]} <br>`);
    }
    document.write(`<br> Directions: <br>`)
    for (i=0; i< myRecipe.directions.length; i++){
        document.write(`${i + 1}. ${myRecipe.directions[i]} <br>`)
    }

    myRecipe.letsCook();



     

 

