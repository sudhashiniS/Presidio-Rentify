// Seller Dashboard JavaScript
let properties = [];

function postProperty() {
    const area = document.getElementById('area').value;
    const bedrooms = document.getElementById('bedrooms').value;
    const bathrooms = document.getElementById('bathrooms').value;
    const hospitals = document.getElementById('hospitals').value;
    const colleges = document.getElementById('colleges').value;

    const property = { area, bedrooms, bathrooms, hospitals, colleges };
    properties.push(property);
    displaySellerProperties();
}

function displaySellerProperties() {
    const propertyList = document.getElementById('propertyList');
    propertyList.innerHTML = '';
    properties.forEach((property, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            Area: ${property.area}, Bedrooms: ${property.bedrooms}, Bathrooms: ${property.bathrooms}, 
            Hospitals: ${property.hospitals}, Colleges: ${property.colleges}
            <button onclick="deleteProperty(${index})">Delete</button>
        `;
        propertyList.appendChild(li);
    });
}

function deleteProperty(index) {
    properties.splice(index, 1);
    displaySellerProperties();
}
