//Initial fetch to API
fetch("http://localhost:3000/devices")
    .then(response => response.json())
    //Uses returned data from JSON Object to be rendered through renderDevice
    .then(data => {
        data.forEach(device => renderDevice(device));
        renderCart(); // Render the cart form once after all the devices are rendered
    });

//Renders all devices into cards
function renderDevice(data) {
    const deviceContainer = document.getElementById('device-container');
    //Card builder; appends image, name and description which includes price and capacity.
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

  
    price.addEventListener('click', function () {
        price.textContent = `${title.textContent} added!`;
        addToCart(data);
        calculateTotalPrice();
    });//Adds functionality to ATC button

    showHide.addEventListener('click', function () {
        if (description.style.display === "none") {
            description.style.display = "block";
            showHide.textContent = `Hide description`;
        } else {
            description.style.display = "none";
            showHide.textContent = `Show description`;
        }
    });//Adds functionality to descripton button

    deviceContainer.appendChild(card);
}

//Renders the cart once item is added
function renderCart() {
    const deviceContainer = document.getElementById('device-container');

    const cart = document.createElement('form');
    cart.classList.add('device-cart');
    const cartTitle = document.createElement('h2');
    cartTitle.textContent = 'Cart';
    cart.appendChild(cartTitle);
    const cartItems = document.createElement('div');
    cartItems.classList.add('cart-items');
    cart.appendChild(cartItems);
    const totalPrice = document.createElement('div');
    totalPrice.classList.add('total-price');
    cart.appendChild(totalPrice);

    const checkoutButton = document.createElement('button');
    checkoutButton.textContent = 'Checkout';
    cart.appendChild(checkoutButton);

    checkoutButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the form from submitting
        checkout();
    });

    deviceContainer.appendChild(cart);
}

//Function to add items to cart
function addToCart(device) {
    const cartItemsContainer = document.querySelector('.cart-items');

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.textContent = device.name;
    cartItem.dataset.price = device.data.price; // Set the device price as a custom data attribute
    cartItemsContainer.appendChild(cartItem);
}

//Function to add total price of all items added to cart
function calculateTotalPrice() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartItems = cartItemsContainer.children;
    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
        const price = cartItems[i].dataset.price;
        totalPrice += parseFloat(price);
    }

    const totalPriceContainer = document.querySelector('.total-price');
    totalPriceContainer.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

//Mock checkout function 
function checkout() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceContainer = document.querySelector('.total-price');
    
    const cartItems = Array.from(cartItemsContainer.children);
    const totalPrice = parseFloat(totalPriceContainer.textContent.replace('Total Price: $', ''));

    if (cartItems.length === 0) {
        console.log('Cart is empty. Add items before checking out.');
    } else {
        console.log('Checkout successful!');
        console.log('Items:');
        cartItems.forEach(cartItem => {
            const itemName = cartItem.textContent;
            const itemPrice = cartItem.dataset.price;
            console.log(`${itemName} - $${itemPrice}`);
        });
        console.log(`Total Price: $${totalPrice.toFixed(2)}`);

        // Reset the cart
        cartItemsContainer.innerHTML = '';
        totalPriceContainer.textContent = 'Total Price: $0.00';
    }
}
