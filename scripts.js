// Data array for live matches
const liveMatchesData = [
    { url: '/willow-cricket.html', imgSrc: '/images/willow-cricket.jpg', altText: 'Willow Cricket', title: 'Willow Cricket' },
    { url: '/a-sports-hd.html', imgSrc: '/images/a-sports-hd.jpg', altText: 'A Sports HD', title: 'A Sports HD' },
    { url: '/willow-cricket.html', imgSrc: '/images/willow-cricket.jpg', altText: 'Willow Cricket', title: 'Willow Cricket' },
    { url: '/a-sports-hd.html', imgSrc: '/images/a-sports-hd.jpg', altText: 'A Sports HD', title: 'A Sports HD' },
    { url: '/willow-cricket.html', imgSrc: '/images/willow-cricket.jpg', altText: 'Willow Cricket', title: 'Willow Cricket' },
    { url: '/a-sports-hd.html', imgSrc: '/images/a-sports-hd.jpg', altText: 'A Sports HD', title: 'A Sports HD' }
];

// Function to render live matches dynamically
function renderLiveMatches() {
    const section = document.getElementById('live-matches-section');
    const containerRow = document.createElement('div');
    containerRow.classList.add('container-row');

    // Loop through the data array to create HTML elements
    liveMatchesData.forEach((match) => {
        const matchContainer = document.createElement('a');
        matchContainer.href = match.url;
        matchContainer.classList.add('container');
        matchContainer.target = "_blank";
        
        const img = document.createElement('img');
        img.src = match.imgSrc;
        img.alt = match.altText;
        
        const h3 = document.createElement('h3');
        h3.textContent = match.title;
        
        matchContainer.appendChild(img);
        matchContainer.appendChild(h3);
        containerRow.appendChild(matchContainer);
    });

    // Append the populated container row to the section
    section.appendChild(containerRow);
}

// Run the function to render the matches on page load
window.onload = renderLiveMatches;

// Fullscreen function
function goFullscreen(iframe) {
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }
}
