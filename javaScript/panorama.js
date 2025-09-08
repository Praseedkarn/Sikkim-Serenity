// Panorama Viewer
function initPanorama() {
    // Initialize the panorama viewer
    const panoramaElement = document.getElementById('panorama');
    
    if (panoramaElement) {
        // Default panorama (you would replace with your actual panorama)
        pannellum.viewer('panorama', {
            "type": "equirectangular",
            "panorama": "https://pannellum.org/images/alma.jpg",
            "autoLoad": true,
            "showControls": false,
            "hotSpotDebug": true,
            "hotSpots": [
                {
                    "pitch": -14.1,
                    "yaw": 1.5,
                    "type": "scene",
                    "text": "Main Hall",
                    "sceneId": "main-hall"
                }
            ]
        });
        
        // Fullscreen button
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', function() {
                const viewer = document.querySelector('.pnlm-container');
                if (viewer.requestFullscreen) {
                    viewer.requestFullscreen();
                } else if (viewer.webkitRequestFullscreen) {
                    viewer.webkitRequestFullscreen();
                } else if (viewer.msRequestFullscreen) {
                    viewer.msRequestFullscreen();
                }
            });
        }
        
        // VR button
        const vrBtn = document.getElementById('vr-btn');
        if (vrBtn) {
            vrBtn.addEventListener('click', function() {
                alert('VR mode would be enabled here with proper device support');
            });
        }
    }
}

// Open a specific tour
function openTour(panorama, title) {
    // In a real implementation, this would load the specific panorama
    alert(`Loading tour: ${title} with panorama: ${panorama}`);
    
    // You would update the panorama viewer with the new panorama
    // pannellum.viewer('panorama').loadScene('new-scene', {
    //     "type": "equirectangular",
    //     "panorama": panorama,
    //     "autoLoad": true
    // });
}