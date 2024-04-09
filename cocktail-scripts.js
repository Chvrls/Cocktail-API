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
        <p>Category: Coffee / Tea</p>
        <p>Alcohol: Non-Alcoholic</p>
        <p>Glass: Coffee mug</p>
      </div>
    </div>

    <div class="drink-middle-grid">
      <h4>Instructions</h4>
      <p>Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream.</p>

      <h4>InstructionsDE</h4>
      <p>Espresso zubereiten. In eine Kaffeetasse 1 Teelöffel ungesüßten, pulverisierten Kakao geben, dann einen Teelöffel Honig in die Tasse träufeln. Rühren Sie um, während der Kaffee brüht, das ist der lustige Teil. Der Kakao scheint den Honig ohne Mischen zu überziehen, so dass Sie eine dichte, klebrige Masse erhalten, die aussieht, als würde sie sich nie vermischen. Dann auf einmal, presto! Es sieht aus wie dunkle Schokoladensoße. Heißen Espresso über den Honig gießen und unter Rühren auflösen. Mit Sahne servieren."</p>

      <h4>InstructionsIT</h4>
      <p>Prepara l'espresso.\r\nIn una tazza da caffè, mettete 1 cucchiaino di cacao amaro in polvere, quindi coprite un cucchiaino con del miele e versatelo nella tazza.\r\nMescola mentre il caffè si prepara, questa è la parte divertente.\r\nIl cacao sembra ricoprire il miele senza mescolarsi, quindi si ottiene una massa polverosa e appiccicosa che sembra non si mescolerà mai.\r\nVersare l'espresso caldo sul miele, mescolando per scioglierlo.\r\nServire con la panna.</p>
    </div>

    <div class="drink-right-grid">
      <h4>Ingredients:</h4>
      <p>Espresso</p>
      <p>Honey</p>
      <p>Cocoa powder</p>
      <h4>Measures:</h4>
      <p>Unsweetened</p>
      <h4>Creative Commons: No</h4>
      <h4>Date Modified:</h4>
      <p>2015-09-03 03:32:59</p>
    </div>
  </div>`
    })
    console.log(drinkHTML)
    document.querySelector('.drink-grid').innerHTML = drinkHTML;
   })
  .catch(error => console.log(error));
  