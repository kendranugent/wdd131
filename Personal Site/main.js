import movies from './movies.mjs'; // Import movies from the movies.mjs file

// Function to generate a random number between 0 (inclusive) and num (exclusive)
function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random movie from the array of movies
function getRandomListEntry(list) {
    const randomIndex = getRandomNumber(list.length);
    return list[randomIndex];
}

// Function to generate HTML for movie tags
function tagsTemplate(tags) {
    return tags
        .map(tag => `<li>${tag}</li>`) // Convert each tag into a list item
        .join(''); // Join them into a single string
}

// Function to generate HTML for the rating stars
function ratingTemplate(rating) {
    if (!rating) return 'N/A'; // Handle cases where there is no rating
    
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating
            ? `<span aria-hidden="true" class="icon-star">⭐</span>` // Filled star
            : `<span aria-hidden="true" class="icon-star-empty">☆</span>`; // Empty star
    }
    html += `</span>`;
    return html;
}

// Function to generate the movie template
function movieTemplate(movie) {
    return `<figure class="movie">
        <img src="${movie.image}" alt="Image of ${movie.name}" />
        <figcaption>
            <ul class="movie__tags">
                ${tagsTemplate(movie.tags)}
            </ul>
            <h2><a href="#">${movie.name}</a></h2>
            <p class="movie__ratings">
                ${ratingTemplate(movie.rating)}
            </p>
            <p class="movie__description">${movie.description}</p>
        </figcaption>
    </figure>`;
}

// Function to render the movies on the page
function renderMovies(movieList) {
    const movieSection = document.querySelector('.movies'); // Get the movie section element
    movieSection.innerHTML = ''; // Clear existing content
    
    // Use the movieTemplate function to generate the HTML for each movie
    movieList.forEach(movie => {
        movieSection.innerHTML += movieTemplate(movie);
    });
}

// Function to initialize and load a random movie when the page loads
function init() {
    if (movies.length === 0) {
        console.error('No movies available to display.');
        return;
    }
    const randomMovie = getRandomListEntry(movies); // Get a random movie
    renderMovies([randomMovie]); // Render the random movie
}

// Function to filter movies based on the search query
function filterMovies(query) {
    if (!query) return movies; // Return all movies if the search query is empty

    const lowerQuery = query.toLowerCase();
    return movies
        .filter(movie => 
            movie.name.toLowerCase().includes(lowerQuery) ||
            movie.description.toLowerCase().includes(lowerQuery) ||
            movie.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        )
        .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name
}

// Event handler for the search functionality
function searchHandler(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    const query = document.querySelector('#search-input').value; // Get the search query
    const filteredMovies = filterMovies(query); // Filter the movies
    renderMovies(filteredMovies); // Render the filtered movies
}

// Add event listener for the search button
document.querySelector('button[type="submit"]').addEventListener('click', searchHandler);

// Initialize the page with a random movie when it loads
window.addEventListener('DOMContentLoaded', init);
