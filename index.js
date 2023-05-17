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
            description.style.display = "none"
            card.appendChild(description);

            const showHide = document.createElement('button')
            showHide.classList.add('card-showhide')
            showHide.textContent = `Show description`
            card.appendChild(showHide)

            const price = document.createElement('button');
            price.classList.add('card-price');
            price.textContent = `Buy it now at $${element.data.price}`;
            card.appendChild(price);

            deviceContainer.appendChild(card);


        });
    })

// let showDescription = false

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    const descriptions = document.querySelectorAll('.card-description');
  
    cards.forEach(function (card) {
      card.addEventListener('mouseover', function () {
        descriptions.forEach(function (description) {
          if (description.style.display !== "block") {
            description.style.display = "block";
          }
        });
      });
    });
  });