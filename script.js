
let menu=[
{name:"Espresso",price:120,ingredient:"Coffee Beans",img:"src/espreso.png"},
{name:"Cappuccino",price:150,ingredient:"Milk, Coffee",img:"src/capacino.png"},
{name:"Latte",price:160,ingredient:"Milk, Espresso",img:"src/latte.png"},
{name:"Mocha",price:170,ingredient:"Chocolate, Coffee",img:"src/mocha.png"},
{name:"Americano",price:130,ingredient:"Espresso, Water",img:"src/americano1.png"},
{name:"Flat White",price:150,ingredient:"Milk, Espresso",img:"src/flatwhite.png"},
{name:"Cold Coffee",price:180,ingredient:"Milk, Ice",img:"src/coldcoffee.png"},
{name:"Caramel Coffee",price:200,ingredient:"Caramel, Milk",img:"src/caramelcoffee.png"},
{name:"Irish Coffee",price:210,ingredient:"Coffee, Cream",img:"src/irishcaffee.png"},

{name:"Chocolate Cake",price:220,ingredient:"Cocoa, All purpose flour",img:"src/chocolatecake.png"},
{name:"Cheesecake",price:250,ingredient:"Cheese, Cream",img:"src/cheesecake.png"},
{name:"Brownie",price:180,ingredient:"Chocolate",img:"src/brownie.png"},
{name:"Cupcake",price:120,ingredient:"Sugar, Flour",img:"src/cupcake.png"},
{name:"Donut",price:90,ingredient:"Flour, Sugar",img:"src/donut.png"},
{name:"Ice Cream",price:150,ingredient:"Milk, Sugar",img:"src/icecreame.png"},
{name:"Macaron",price:200,ingredient:"Almond Flour",img:"src/macaron.png"},
{name:"Tiramisu",price:260,ingredient:"Coffee, Cream",img:"src/tiramisu.png"},
{name:"Pudding",price:140,ingredient:"Milk, Sugar",img:"src/pudding.png"},
{name:"Waffle",price:210,ingredient:"Flour, Syrup",img:"src/waffle.png"},

{name:"Lemon Juice",price:80,ingredient:"Lemon",img:"src/lemon.png"},
{name:"Mango Shake",price:120,ingredient:"Mango, Milk",img:"src/mangoshake.png"},
{name:"Strawberry Shake",price:130,ingredient:"Strawberry",img:"src/strawberryshake.png"},
{name:"Chocolate Shake",price:140,ingredient:"Chocolate",img:"src/chocoshake.png"},
{name:"Oreo Shake",price:150,ingredient:"Oreo, Milk",img:"src/oreoshake.png"}
];

let cart=[];

function displayMenu(){

let container=document.getElementById("menu-container");

menu.forEach((item,index)=>{

container.innerHTML+=`

<div class="card">

<img src="${item.img}">

<h3>${item.name}</h3>

<p>Price: Rupees ${item.price}</p>

<p>Ingredients: ${item.ingredient}</p>

<button onclick="addToCart(${index})">Add to Cart</button>

</div>

`;

});

}

displayMenu();


function addToCart(index){

cart.push(menu[index]);

updateCart();

}


function updateCart(){

let cartDiv=document.getElementById("cart-items");

cartDiv.innerHTML="";

cart.forEach(item=>{

cartDiv.innerHTML+=`

<p>${item.name} - Rupees ${item.price}</p>

`;

});

}


function confirmOrder(){

let address=document.getElementById("address").value;

if(address===""){

alert("Enter Address");

return;

}

document.getElementById("order-msg").innerText="Order Placed Successfully!";

cart=[];
updateCart();

}