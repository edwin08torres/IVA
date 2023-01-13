let inputPrice = document.querySelector("#price");
let inputDesc = document.querySelector("#desc");
let btn = document.querySelector("#btn");
let resultDesc = document.querySelector(".result");
let btnIVA =  document.querySelector('#btnIVA');
let resultIva = document.querySelector(".resultIva");

btn.addEventListener("click", calcularDesc);
btnIVA.addEventListener('click', calcularIVA);

function calcularIVA(event){
    console.log(event);
    event.preventDefault();

    let price = inputPrice.value;
    let newPrice = (parseInt(price) * 0.15) + parseInt(price);

    resultIva.innerHTML = 'El precio del articulo con iva queda: $' + newPrice
}

function calcularDesc(event) {
  console.log(event);
  event.preventDefault();

  const price = parseInt(resultIva.value);
  const desc = parseInt(inputDesc.value);
  const newPrice = (price * (100 - desc)) / 100;

  resultDesc.innerHTML = "El descuento del articulo es : $" + newPrice;
}