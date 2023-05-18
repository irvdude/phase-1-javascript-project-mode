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
    description.textContent = `This device contains ${data.data.capacity}GB of storage and features a nice ${data.data.color} color.`;
    description.style.display = "block";
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
        console.log(price.textContent);
    })

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

const hiButton = document.querySelector('#headButton')
hiButton.addEventListener('click', function () {
    console.log('hello');
})

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