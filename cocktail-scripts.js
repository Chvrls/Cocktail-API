fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m')
  .then(response => response.json())
  .then(res => {
    const data = res.drinks;
    let drinkHTML = '';
    data.forEach(drink => {
      drinkHTML += `
      <div class="container">
      <div class="drink-left-grid">

      <div class="drink-image-container">
        <img class="drink-img" src=${drink.strDrinkThumb} alt="">
      </div>

      <div class="drink-info">
        <h4>Name: ${drink.strDrink} </h4>
        <p>Drink Alternate: ${drink.strDrinkAlternate} </p>
        <p>Tags: ${drink.strTags}</p>
        <p>Video: <a href=${drink.strVideo}>Link</a> </p>
        <p>Category: ${drink.strCategory}</p>
        <p>IBA: ${drink.strIBA}</p>
        <p>Alcohol: ${drink.strAlcoholic}</p>
        <p>Glass: ${drink.strGlass}</p>
      </div>
    </div>

    <div class="drink-middle-grid">
      <h4>Instructions</h4>
      <p>${drink.strInstructions}</p>

      <h4>InstructionsES</h4>
      <p>${drink.strInstructionsES}</p>

      <h4>InstructionsDE</h4>
      <p>${drink.strInstructionsDE}</p>

      <h4>InstructionsFR</h4>
      <p>${drink.strInstructionsFR}</p>

      <h4>InstructionsIT</h4>
      <p>${drink.strInstructionsIT}</p>
    </div>

    <div class="drink-right-grid">
      <h4>Ingredients:</h4>
      <p>${drink.strIngredient1}</p>
      <p>${drink.strIngredient2}</p>
      <p>${drink.strIngredient3}</p>
      <p>${drink.strIngredient4}</p>
      <p>${drink.strIngredient5}</p>
      <p>${drink.strIngredient6}</p>
      <p>${drink.strIngredient7}</p>
      <p>${drink.strIngredient8}</p>
      <p>${drink.strIngredient9}</p>
      <p>${drink.strIngredient10}</p>
      <p>${drink.strIngredient11}</p>
      <p>${drink.strIngredient12}</p>
      <p>${drink.strIngredient13}</p>
      <p>${drink.strIngredient14}</p>
      <p>${drink.strIngredient15}</p>
      <h4>Measures:</h4>
      <p>${drink.strMeasure1}</p>
      <p>${drink.strMeasure2}</p>
      <p>${drink.strMeasure3}</p>
      <p>${drink.strMeasure4}</p>
      <p>${drink.strMeasure5}</p>
      <p>${drink.strMeasure6}</p>
      <p>${drink.strMeasure7}</p>
      <p>${drink.strMeasure8}</p>
      <p>${drink.strMeasure9}</p>
      <p>${drink.strMeasure10}</p>
      <p>${drink.strMeasure11}</p>
      <p>${drink.strMeasure12}</p>
      <p>${drink.strMeasure13}</p>
      <p>${drink.strMeasure14}</p>
      <p>${drink.strMeasure15}</p>

      <h4>Image Source: <a href=${drink.strImageSource}>Link</a> </h4>
      <h4>Image Attribution: <a href=${drink.strImageAttribution}>Link</a> </h4>
      <h4>Creative Commons: ${drink.strCreativeCommonsConfirmed}</h4>
      <h4>Date Modified:</h4>
      <p>${drink.dateModified}</p>
    </div>
  </div>`
    })
    console.log(drinkHTML)
    document.querySelector('.drink-grid').innerHTML = drinkHTML;
   })
  .catch(error => console.log(error));
  