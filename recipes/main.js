import recipes from './recipes.mjs'; // Import recipes from the recipes.mjs file

// Function to generate a random number between 0 (inclusive) and num (exclusive)
function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random recipe from the array of recipes
function getRandomListEntry(list) {
    const randomIndex = getRandomNumber(list.length);
    return list[randomIndex];
}

// Function to generate HTML for recipe tags
function tagsTemplate(tags) {
    return tags
        .map(tag => `<li>${tag}</li>`) // Convert each tag into a list item
        .join(''); // Join them into a single string
}

// Function to generate HTML for the rating stars
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    
    // Loop from 1 to 5 and add filled or empty stars depending on the rating
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`; // Filled star
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`; // Empty star
        }
    }

    html += `</span>`;
    return html;
}

// Function to generate the recipe template
function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">${recipe.description}</p>
        </figcaption>
    </figure>`;
}

// Function to render the recipes on the page
function renderRecipes(recipeList) {
    const recipeSection = document.querySelector('.recipes'); // Get the recipe section element
    recipeSection.innerHTML = ''; // Clear existing content
    
    // Use the recipeTemplate function to generate the HTML for each recipe
    recipeList.forEach(recipe => {
        recipeSection.innerHTML += recipeTemplate(recipe);
    });
}

// Function to initialize and load a random recipe when the page loads
function init() {
    const randomRecipe = getRandomListEntry(recipes); // Get a random recipe
    renderRecipes([randomRecipe]); // Render the random recipe
}

// Function to filter recipes based on the search query
function filterRecipes(query) {
    return recipes.filter(recipe => {
        // Convert query to lowercase and check for matches in name, description, or tags
        const lowerQuery = query.toLowerCase();
        return recipe.name.toLowerCase().includes(lowerQuery) ||
               recipe.description.toLowerCase().includes(lowerQuery) ||
               recipe.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    }).sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically by name
}

// Event handler for the search functionality
function searchHandler(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    const query = document.querySelector('#search-input').value; // Get the search query
    const filteredRecipes = filterRecipes(query); // Filter the recipes
    renderRecipes(filteredRecipes); // Render the filtered recipes
}

// Add event listener for the search button
document.querySelector('button[type="submit"]').addEventListener('click', searchHandler);

// Initialize the page with a random recipe when it loads
window.addEventListener('DOMContentLoaded', init);
