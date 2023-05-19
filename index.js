//Initial fetch to API
fetch("http://localhost:3000/devices")
    .then(response => response.json())
    //Uses returned data from JSON Object to be rendered through renderDevice
    .then(data => data.forEach(device => renderDevice(device)));

function renderDevice(data) {
    const deviceContainer = document.getElementById('device-container');
    //Card builder;  appends image, name and description which includes price and capacity.
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.classList.add('card-image');
    image.src = data.image;
    card.appendChild(image);

    const title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = data.name;
    card.appendChild(title);

    const description = document.createElement('p');
    description.classList.add('card-description');
    description.textContent = `This device contains ${data.data.capacity}GB of storage and features a ${data.data.color} color.`;
    description.style.display = "none";
    card.appendChild(description);

    const showHide = document.createElement('button')
    showHide.classList.add('card-showhide')
    showHide.textContent = `Show description`
    card.appendChild(showHide)

    const price = document.createElement('button');
    price.classList.add('card-price');
    price.textContent = `Buy it now at $${data.data.price}`;
    card.appendChild(price);

    const cart = document.createElement('form');
    cart.classList.add('device-cart');
    const cartTitle = document.createElement('h2');
    cartTitle.textContent = 'Cart';
    cart.appendChild(cartTitle);
    const cartItems = document.createElement('div');
    cartItems.classList.add('cart-items');
    cart.appendChild(cartItems);

    price.addEventListener('click', function () {
        price.textContent = `${title.textContent} added!`;
        console.log(price.textContent);
        addToCart(data);
        totalCost(data)
    });

    showHide.addEventListener('click', function () {
        if (description.style.display === "none") {
            description.style.display = "block";
            showHide.textContent = `Hide description`;
        } else {
            description.style.display = "none";
            showHide.textContent = `Show description`;
        }
    });

    function addToCart(device) {
        const cartItemsContainer = document.querySelector('.cart-items');

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.textContent = device.name;
        cartItemsContainer.appendChild(cartItem);
    }

    function totalCost(device) {
      const cartItemsContainer = document.querySelector('.cart-items');

      const priceTotal = device.data.price;
      const priceTotalDiv = document.createElement('div');
      priceTotalDiv.classList.add('cart-cost');
      priceTotalDiv.textContent = priceTotal;
      cartItemsContainer.appendChild(priceTotalDiv);
  }

    deviceContainer.appendChild(cart);
    deviceContainer.appendChild(card);
}


// const card = document.querySelectorAll('.card')
// document.addEventListener('DOMContentLoaded', function () {
//     const checkPrice = card.querySelectorAll('.card-price')
//     checkPrice.forEach(function (price) {
//         price.addEventListener('click', function () {
//             console.log('hello');
//         })
//     })
// })

// const hiButton = document.querySelector('#headButton')
// hiButton.addEventListener('click', function () {
//     console.log('hello');
// })

// document.addEventListener("DOMContentLoaded", function () {
//     const showHide = document.querySelectorAll('.card-showhide');
    
//     showHide.forEach(function (showhide) {
//       const descriptions = document.querySelectorAll('.card-description');
      
//       showhide.addEventListener('click', function () {
//         console.log('Button clicked:');
//         descriptions.forEach(function (description) {
//           if (description.style.display !== "none") {
//             description.style.display = "none";
//           } else {
//             description.style.display = "block";
//           }
//         });
//       });
//     });
//   });