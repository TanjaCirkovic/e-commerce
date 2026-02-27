let iznos = 0;
const CURRENCY = "EUR";
const USD_PER_EUR = 1.16;

function dodajNaIznos(PRICE_EUR) {
    const PRICE_USD = PRICE_EUR * USD_PER_EUR;
    iznos += PRICE_USD;
    console.log("$" + iznos.toFixed(2));
}

function openCart() {
    alert("$" + iznos.toFixed(2));
}

let allProducts = [{"name" : "ASOS DESIGN knit skinny scarf", "price" : 29.99, "qty" : 10},
{"name" : "ASOS DESIGN chiffon mini dress", "price" : 49.99, "qty" : 2},
{"name" : "ASOS DESIGN asymmetric braon top", "price" :  17.99, "qty" : 7},
{"name" : "Topshop knitted high back cut out top","price" :  47.99, "qty" : 14},
{"name" : "ASOS DESIGN velvet maxi dress", "price" :  74.99, "qty" : 3},
{"name" : "Miss Selfridge blanket stitch cardigan","price" :  44.99, "qty" : 12},
{"name" : "ASOS DESIGN denim pleated midi skirt","price" :  39.99, "qty" : 5},
{"name" : "ASOS DESIGN modesty diamante detail maxi dress","price" :  52.99, "qty" : 2},
{"name" : "ASOS DESIGN abstract brushed oversized jumper","price" :  44.99, "qty" : 8}];


function totalValueOfProducts(products) {
    let totalValue = 0
    for (const product of products){   
        totalValue += (product.price * product.qty)
    }
    console.log("Ukupna vrednost lagera: " + (totalValue * USD_PER_EUR).toFixed(2) + " USD.")
}
totalValueOfProducts(allProducts)

let lowStock = [];
for (let i = 0; i < allProducts.length; i++) {
  if (allProducts[i].qty < 10) {
    lowStock.push(allProducts[i]);
  }
}
console.log(lowStock);


function findProductByName(list, searchName) { 
const search = searchName.toLowerCase().trim(); 
for (const product of list) { 
if (product.name.toLowerCase() === search) { 
return product}} 
return null;} 

console.log(findProductByName(allProducts, "asos DESIGN velvet maxi dress")); 
console.log(findProductByName(allProducts, "Topshop"));