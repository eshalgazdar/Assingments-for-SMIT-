const RECIPES_URL = 'https://dummyjson.com/recipes';

const recipesGrid = document.getElementById('recipes-grid');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error-message');
const refreshBtn = document.getElementById('refresh-recipes');

const recipeModal = document.getElementById('recipe-modal');
const modalClose = document.getElementById('modal-close');
const modalTitle = document.getElementById('modal-recipe-title');
const modalCuisine = document.getElementById('modal-recipe-cuisine');
const modalPrepTime = document.getElementById('modal-prep-time');
const modalIngredientsList = document.getElementById('modal-ingredients-list');

let allRecipes = [];

async function fetchRecipes() {
    loadingEl.classList.remove('hidden');
    errorEl.classList.add('hidden');
    recipesGrid.innerHTML = '';

    try {
        const response = await fetch(RECIPES_URL);
        console.log(`GET Recipes Response Status: ${response.status}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch recipes. Server returned status: ${response.status} (${response.statusText})`);
        }

        const data = await response.json();
        allRecipes = data.recipes;

        const displayRecipes = allRecipes.slice(0, 6);
        renderRecipes(displayRecipes);
    } catch (error) {
        console.error('Error fetching recipes:', error);
        errorEl.textContent = `Error loading recipes: ${error.message}. Please check your connection or try again later.`;
        errorEl.classList.remove('hidden');
    } finally {
        loadingEl.classList.add('hidden');
    }
}

function renderRecipes(recipes) {
    recipesGrid.innerHTML = '';
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${escapeHtml(recipe.name)}" class="recipe-image" onerror="this.src='https://via.placeholder.com/300?text=Recipe'">
            </div>
            <div class="recipe-info">
                <div>
                    <div class="recipe-cuisine">${escapeHtml(recipe.cuisine)} &middot; ${escapeHtml(recipe.difficulty || '')}</div>
                    <h3 class="recipe-title">${escapeHtml(recipe.name)}</h3>
                </div>
                <div class="recipe-footer">
                    <span>Prep: ${recipe.prepTimeMinutes || 15} mins</span>
                    <span>Cook: ${recipe.cookTimeMinutes || 15} mins</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            showRecipeDetails(recipe);
        });

        recipesGrid.appendChild(card);
    });
}

function showRecipeDetails(recipe) {
    modalTitle.textContent = recipe.name;
    modalCuisine.textContent = `${recipe.cuisine} Cuisine &bull; Servings: ${recipe.servings || 4}`;
    modalPrepTime.textContent = `Preparation: ${recipe.prepTimeMinutes} mins | Cooking: ${recipe.cookTimeMinutes} mins`;
    
    modalIngredientsList.innerHTML = '';
    if (recipe.ingredients && recipe.ingredients.length > 0) {
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            modalIngredientsList.appendChild(li);
        });
    }

    recipeModal.classList.remove('hidden');
}

modalClose.addEventListener('click', () => {
    recipeModal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        recipeModal.classList.add('hidden');
    }
});

function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

refreshBtn.addEventListener('click', fetchRecipes);

document.addEventListener('DOMContentLoaded', fetchRecipes);