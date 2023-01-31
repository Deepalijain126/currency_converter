


document.querySelector("#currency-converter").addEventListener("submit",(event)=> {
    event.preventDefault();

    const {target:{from, to, amount}} = event ;

    var myHeaders = new Headers();
myHeaders.append("apikey", "x2b062o8Q9OXwudmrPzzIITrBd9jCsSs");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
}



fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
  .then(response => response.json())
  .then(data => {
    let {info,date,result} = data ;
    document.querySelector(".output").textContent = `As per the Exchange Rate :${info.rate} for the ${date} =>converted value  is ${result}`;
  })
  .catch(error => console.log('error', error))



})
