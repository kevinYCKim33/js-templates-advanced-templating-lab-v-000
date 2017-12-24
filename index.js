//soln

function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe) //wipe out the form field with this move.
}

function updateRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  debugger;
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
  // magically seed the form with edited form this way.
}

function getRecipeVals() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  //{name: "a", ingredients: Array(5), description: "b"}
  return(recipe)
}

function handlebarsSetup() {
  //put any handlebars registrations here.
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

// function init() {
//   //put any page initialization/handlebars initialization here
//   Handlebars.registerHelper('displayIngredient', function() {
//     return new Handlebars.SafeString(this.value);
//   });
//   Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
//   Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML);
// }

// function createRecipe() {
//   let recipeName = document.getElementById("name").value;
//   let recipeDescription = document.getElementById("description").value;
//   let ingredients = document.getElementsByName("ingredients");
//   let recipeTemplate = document.getElementById("recipe-template").innerHTML;
//   let template = Handlebars.compile(recipeTemplate);
//   let html = template({name: recipeName, description: recipeDescription, ingredients: ingredients});
//   document.getElementById("main").innerHTML += html;
// }

// function displayEditForm() {
//   let recipeName = document.getElementById("name").value;
//   let recipeDescription = document.getElementById("description").value;
//   let ingredients = document.getElementsByName("ingredients");
//   let form = document.getElementById("recipe-form-template").innerHTML;
//   var template = Handlebars.compile(form);
//   document.getElementById("thing").innerHTML = template({name: recipeName, description: recipeDescription, ingredients: ingredients});
//
//   document.getElementById("thing").innerHTML += form;
// }

// function updateRecipe() {
//
// }
