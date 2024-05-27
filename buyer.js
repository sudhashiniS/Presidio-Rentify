// Buyer Dashboard JavaScript
let properties = [
    { area: 'Downtown', bedrooms: 2, bathrooms: 1, hospitals: 'Central Hospital', colleges: 'City College' },
    { area: 'Uptown', bedrooms: 3, bathrooms: 2, hospitals: 'Uptown Hospital', colleges: 'Uptown College' }
];

function filterProperties() {
    const area = document.getElementById('filterArea').value;
    const bedrooms = document.getElementById('filterBedrooms').value;
    const bathrooms = document.getElementById('filterBathrooms').value;

    const filtered = properties.filter(property => {
        return (!area || property.area.includes(area)) &&
               (!bedrooms || property.bedrooms == bedrooms) &&
               (!bathrooms || property.bathrooms == bathrooms);
    });

    displayFilteredProperties(filtered);
}

function displayFilteredProperties(filtered) {
    const filteredProperties = document.getElementById('filteredProperties');
    filteredProperties.innerHTML = '';
    filtered.forEach((property, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            Area: ${property.area}, Bedrooms: ${property.bedrooms}, Bathrooms: ${property.bathrooms}, 
            Hospitals: ${property.hospitals}, Colleges: ${property.colleges}
            <button onclick="interested(${index})">I'm Interested</button>
        `;
        filteredProperties.appendChild(li);
    });
}

function interested(index) {
    alert(`Seller contact details will be shared for property index: ${index}`);
}
