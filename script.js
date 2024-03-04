// Simulated data for demonstration purposes
const songs = [
    { title: 'Song 1', artist: 'Artist 1', album: 'Album 1', image: 'song1.jpg' },
    { title: 'Song 2', artist: 'Artist 2', album: 'Album 2', image: 'song2.jpg' },
    { title: 'Song 3', artist: 'Artist 3', album: 'Album 3', image: 'song3.jpg' }
];

const songList = document.getElementById('song-list');

// Function to render songs
function renderSongs() {
    songList.innerHTML = '';
    songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');
        songElement.innerHTML = `
            <img src="${song.image}" alt="${song.title}">
            <h3>${song.title}</h3>
            <p>${song.artist} - ${song.album}</p>
        `;
        songList.appendChild(songElement);
    });
}

// Initial render
renderSongs();
