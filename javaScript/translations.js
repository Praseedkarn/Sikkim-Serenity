// Translation System
const translations = {
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.tours": "Virtual Tours",
        "nav.map": "Interactive Map",
        "nav.archives": "Digital Archives",
        "nav.calendar": "Cultural Calendar",
        "nav.audio": "Audio Guide",
        "nav.community": "Community",
        "nav.tourism": "Tourism",
        
        // Hero Section
        "hero.title": "Discover Sikkim's Sacred Heritage",
        "hero.subtitle": "Explore 200+ monasteries through immersive 360° virtual tours and preserve centuries of Buddhist culture",
        "hero.explore": "Explore Virtual Tours",
        "hero.events": "Discover Events",
        "hero.plan": "Plan Your Visit",
        
        // Virtual Tours
        "tours.title": "Immersive Virtual Tours",
        "tours.subtitle": "Experience monasteries in 360° with narrated walkthroughs in multiple languages",
        "tours.rumtek.title": "Rumtek Monastery",
        "tours.rumtek.description": "The largest monastery in Sikkim, home to the Golden Stupa",
        "tours.pemayangtse.title": "Pemayangtse Monastery",
        "tours.pemayangtse.description": "One of the oldest monasteries with stunning mountain views",
        "tours.tashiding.title": "Tashiding Monastery",
        "tours.tashiding.description": "Sacred monastery known for its annual Bumchu festival",
        "tours.start": "Start Tour",
        "tours.viewAll": "View All 200+ Monasteries",
        
        // Interactive Map
        "map.title": "Explore Monastery Locations",
        "map.subtitle": "Discover monasteries across Sikkim with detailed information and travel routes",
        "map.filter.region": "Region:",
        "map.filter.all": "All Regions",
        "map.filter.east": "East Sikkim",
        "map.filter.west": "West Sikkim",
        "map.filter.north": "North Sikkim",
        "map.filter.south": "South Sikkim",
        "map.filter.type": "Monastery Type:",
        "map.filter.allTypes": "All Types",
        "map.filter.nyingma": "Nyingma",
        "map.filter.kagyu": "Kagyu",
        "map.filter.sakya": "Sakya",
        "map.filter.gelug": "Gelug",
        "map.filter.amenities": "Amenities:",
        "map.amenities.parking": "Parking",
        "map.amenities.food": "Food",
        "map.amenities.accommodation": "Accommodation",
        "map.amenities.guided": "Guided Tours",
        
        // Digital Archives
        "archives.title": "Digital Archives",
        "archives.subtitle": "Explore centuries of Buddhist manuscripts, murals, and cultural artifacts",
        "archives.search.placeholder": "Search manuscripts, murals, documents...",
        "archives.filter.all": "All",
        "archives.filter.manuscripts": "Manuscripts",
        "archives.filter.murals": "Murals",
        "archives.filter.documents": "Documents",
        "archives.filter.artifacts": "Artifacts",
        
        // Cultural Calendar
        "calendar.title": "Cultural Calendar",
        "calendar.subtitle": "Discover monastery events, festivals, and rituals throughout the year",
        "calendar.filter.all": "All Events",
        "calendar.filter.festivals": "Festivals",
        "calendar.filter.rituals": "Rituals",
        "calendar.filter.ceremonies": "Ceremonies",
        "calendar.featured": "Featured Events",
        "calendar.bumchu.title": "Bumchu Festival",
        "calendar.bumchu.description": "Sacred water ceremony at Tashiding Monastery",
        "calendar.losar.title": "Losar Festival",
        "calendar.losar.description": "Tibetan New Year celebrations across monasteries",
        "calendar.book": "Book Now",
        
        // Audio Guide
        "audio.title": "Smart Audio Guide",
        "audio.subtitle": "Download offline audio guides with GPS and Bluetooth integration",
        "audio.offline.title": "Offline Access",
        "audio.offline.description": "Download guides for offline use in remote monastery locations",
        "audio.gps.title": "GPS Integration",
        "audio.gps.description": "Automatic audio triggers based on your location",
        "audio.bluetooth.title": "Bluetooth Beacons",
        "audio.bluetooth.description": "Enhanced experience with beacon-triggered content",
        "audio.multilingual.title": "Multilingual",
        "audio.multilingual.description": "Available in English, Hindi, Nepali, and Dzongkha",
        "audio.download.title": "Download Audio Guides",
        "audio.guides.rumtek": "Rumtek Monastery Guide",
        "audio.guides.pemayangtse": "Pemayangtse Monastery Guide",
        "audio.guides.complete": "Complete Sikkim Guide",
        "audio.preview": "Preview",
        "audio.download": "Download",
        
        // Community
        "community.title": "Community Stories",
        "community.subtitle": "Share your monastery experiences and contribute to cultural preservation",
        "community.share.title": "Share Your Story",
        "community.share.titleLabel": "Story Title",
        "community.share.monasteryLabel": "Monastery",
        "community.share.contentLabel": "Your Story",
        "community.share.photosLabel": "Photos (Optional)",
        "community.share.submit": "Submit Story",
        "community.stories.title": "Recent Stories",
        
        // Tourism
        "tourism.title": "Plan Your Visit",
        "tourism.subtitle": "Book transportation, guided tours, and accommodation for your monastery journey",
        "tourism.transport.title": "Transportation",
        "tourism.transport.description": "Book buses, taxis, and private vehicles to monastery locations",
        "tourism.transport.feature1": "Airport transfers",
        "tourism.transport.feature2": "Monastery circuit tours",
        "tourism.transport.feature3": "Private guided transport",
        "tourism.guides.title": "Guided Tours",
        "tourism.guides.description": "Expert local guides for authentic monastery experiences",
        "tourism.guides.feature1": "Certified local guides",
        "tourism.guides.feature2": "Cultural interpretation",
        "tourism.guides.feature3": "Small group tours",
        "tourism.accommodation.title": "Accommodation",
        "tourism.accommodation.description": "Stay near monasteries with local hospitality",
        "tourism.accommodation.feature1": "Monastery guest houses",
        "tourism.accommodation.feature2": "Local homestays",
        "tourism.accommodation.feature3": "Hotels near monasteries",
        "tourism.book": "Book Now",
        
        // Footer
        "footer.about.title": "About Monastery360",
        "footer.about.description": "Preserving Sikkim's Buddhist heritage through digital innovation and cultural tourism.",
        "footer.links.title": "Quick Links",
        "footer.links.tours": "Virtual Tours",
        "footer.links.map": "Interactive Map",
        "footer.links.archives": "Digital Archives",
        "footer.links.calendar": "Cultural Calendar",
        "footer.contact.title": "Contact",
        "footer.social.title": "Follow Us",
        "footer.copyright": "© 2024 Monastery360. All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service"
    },
    hi: {
        // Hindi translations would go here
        "nav.home": "होम",
        "hero.title": "सिक्किम की पवित्र विरासत की खोज करें",
        // ... other Hindi translations
    },
    ne: {
        // Nepali translations would go here
        "nav.home": "गृह",
        "hero.title": "सिक्किमको पवित्र विरासतको अन्वेषण गर्नुहोस्",
        // ... other Nepali translations
    },
    dz: {
        // Dzongkha translations would go here
        "nav.home": "ཁྱིམ།",
        "hero.title": "སྐྱིད་མོའི་གནས་མཆོག་གི་རྒྱུན་རིག་ཅིག་འཚོལ་བ།",
        // ... other Dzongkha translations
    }
};

// Initialize translations
function initTranslations() {
    // Set default language
    changeLanguage('en');
}

// Change language
function changeLanguage(lang) {
    // Get all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.getAttribute('type') === 'text') {
                element.setAttribute('placeholder', translations[lang][key]);
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Store selected language
    localStorage.setItem('selectedLanguage', lang);
}