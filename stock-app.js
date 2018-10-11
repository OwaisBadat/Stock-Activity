let input = document.getElementById('userInput')
let submitButton = document.getElementById('submitButton')
let stockContainer = document.getElementById('stockContainer')

submitButton.addEventListener('click',function() {
  let stockChoice = input.value

  getStockQuote(stockChoice)

  let stockInfo =
  `
    <label>STOCK NAME: ${quotes[stockChoice].name}</label>
    <p>STOCK PRICE: $${quotes[stockChoice].price}</p>
  `
  stockContainer.innerHTML = stockInfo

  setInterval(function() {
    getStockQuote(stockChoice)

    let stockInfo =
    `
      <label>STOCK NAME: ${quotes[stockChoice].name}</label>
      <p>STOCK PRICE: $${quotes[stockChoice].price}</p>
    `
  stockContainer.innerHTML = stockInfo
  },2000)
})
