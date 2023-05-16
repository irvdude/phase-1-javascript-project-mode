fetch("http://localhost:3000/devices")
    .then(response => response.json())
    .then(data => {
        const deviceContainer = document.getElementById('device-container');
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
            description.textContent = `This device has ${element.data.capacity}GB of storage and features a nice ${element.data.color} color.`;
            card.appendChild(description);

            const price = document.createElement('p');
            price.classList.add('card-price');
            price.textContent = `Buy it now at $${element.data.price}`;
            card.appendChild(price);

            deviceContainer.appendChild(card);


        });
    })