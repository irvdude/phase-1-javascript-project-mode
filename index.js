//Initial fetch to API
fetch("http://localhost:3000/devices")
    .then(response => response.json())
    .then(data => {
        //Device dontainer variable
        const deviceContainer = document.getElementById('device-container');
        //Card builder;  appends image, name and description which includes price and capacity.
        data.forEach(element => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.classList.add('card-image');
            image.src = element.image;
            card.appendChild(image);

            const title = document.createElement('h2');
            title.classList.add('card-title');
            title.textContent = element.name;
            card.appendChild(title);

            const description = document.createElement('p');
            description.classList.add('card-description');
            description.textContent = `This device contians ${element.data.capacity}GB of storage and features a nice ${element.data.color} color.`;
            card.appendChild(description);

            const price = document.createElement('button');
            price.classList.add('card-price');
            price.textContent = `Buy it now at $${element.data.price}`;
            card.appendChild(price);

            deviceContainer.appendChild(card);


        });
    })

//Show/hide 'click' event listener for descripton
let showDescription = false
let description = document.querySelector('.card-description')
document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.createElement('button')
    addButton.textContent = `Show Description`
    description.appendChild(addButton)
    addButton.addEventListener("click", function () {
        showDescription = !showDescription
        if (showDescription) {
            deviceContainer.style.display = "block"
        } else {
            deviceContainer.style.display = "none"
        }
    })
})