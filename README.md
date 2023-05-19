Device Shop
This is a Single Page Application that allows users to browse and purchase devices. It fetches device data from an API and dynamically renders the devices on the page. Users can view device details, add them to a cart, and proceed to checkout.

Features
Fetches device data from an API and renders the devices on the page.
Displays device image, name, description, and price.
Allows users to show/hide the device description by clicking a button.
Allows users to add devices to a cart.
Calculates and displays the total price of the items in the cart.
Allows users to checkout and displays a summary of the items and total price.
Technologies Used
HTML
CSS
JavaScript
Fetch API
Setup and Usage
Clone the repository or download the code.
Open the index.html file in a web browser.
The page will load with the available devices.
Click the "Show description" button to reveal the device description.
Click the "Buy it now" button to add the device to the cart.
The cart will display the added items and the total price.
Click the "Checkout" button to proceed with the checkout process.
After checkout, the cart will be cleared, and a summary will be displayed.
Folder Structure
index.html: The main HTML file that displays the page structure.
style.css: The CSS file that contains styles for the page and cards.
index.js: The JavaScript file that handles the data fetching, rendering of devices, cart functionality, and checkout process.
devices.json: A sample JSON file containing device data.
API
The application fetches device data from the following API endpoint:

API Endpoint: http://localhost:3000/devices
Please ensure that the API is running and the devices are available at the specified endpoint for the application to function properly.