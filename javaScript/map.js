// Interactive Map
function initMap() {
    const mapElement = document.getElementById('monastery-map');
    
    if (mapElement) {
        // Initialize the map
        const map = L.map('monastery-map').setView([27.5330, 88.5122], 9); // Centered on Sikkim
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // Sample monastery data (in a real app, this would come from an API)
        const monasteries = [
            { name: "Rumtek Monastery", lat: 27.2918, lng: 88.5788, type: "kagyu" },
            { name: "Pemayangtse Monastery", lat: 27.3072, lng: 88.2387, type: "nyingma" },
            { name: "Tashiding Monastery", lat: 27.3167, lng: 88.2833, type: "nyingma" },
            { name: "Enchey Monastery", lat: 27.3389, lng: 88.6215, type: "nyingma" },
            { name: "Phensang Monastery", lat: 27.3833, lng: 88.5833, type: "kagyu" }
        ];
        
        // Add markers for each monastery
        monasteries.forEach(monastery => {
            const marker = L.marker([monastery.lat, monastery.lng]).addTo(map);
            marker.bindPopup(`
                <div class="map-popup">
                    <h3>${monastery.name}</h3>
                    <p>Type: ${monastery.type}</p>
                    <button class="btn btn-primary" onclick="viewMonastery('${monastery.name}')">View Details</button>
                </div>
            `);
        });
        
        // Filter functionality
        const regionFilter = document.getElementById('region-filter');
        const typeFilter = document.getElementById('type-filter');
        
        if (regionFilter && typeFilter) {
            regionFilter.addEventListener('change', applyFilters);
            typeFilter.addEventListener('change', applyFilters);
            
            // Also add event listeners for amenity checkboxes
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', applyFilters);
            });
        }
    }
}

// Apply map filters
function applyFilters() {
    // In a real implementation, this would filter the markers on the map
    const region = document.getElementById('region-filter').value;
    const type = document.getElementById('type-filter').value;
    
    // Get selected amenities
    const amenities = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        amenities.push(checkbox.value);
    });
    
    console.log(`Filters applied - Region: ${region}, Type: ${type}, Amenities: ${amenities.join(', ')}`);
}

// View monastery details
function viewMonastery(name) {
    alert(`Viewing details for: ${name}`);
    // In a real implementation, this would show a modal or navigate to a details page
}