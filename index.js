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
            description.style.display = "block"
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

    const button = document.querySelectorAll('#headButton')
    button.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            console.log('hello', e);
        })
    })

// document.addEventListener('DOMContentLoaded', function () {
//     const checkPrice = document.querySelectorAll('.card-price')
//     checkPrice.forEach(element => {
//         element.addEventListener('click', function () {
//             console.log(`$$$`);
//         })
//     });
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