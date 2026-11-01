const PRODUCTS_URL = 'https://dummyjson.com/products';

const productsGrid = document.getElementById('products-grid');
const loadingEl = document.getElementById('loading');
const errorEl = document.getElementById('error-message');
const refreshBtn = document.getElementById('refresh-products');

function fetchProducts() {
    loadingEl.classList.remove('hidden');
    errorEl.classList.add('hidden');
    productsGrid.innerHTML = '';

    fetch(PRODUCTS_URL)
        .then(response => {
            console.log(`GET Products Response Status: ${response.status}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const products = data.products;
            
            if (products && products.length > 0) {
                console.log('Brand of the first product:', products[0].brand || 'No brand specified');
            }

            const displayProducts = products.slice(0, 6);
            renderProducts(displayProducts);
            loadingEl.classList.add('hidden');
        })
        .catch(error => {
            console.error('Failed to fetch products:', error);
            loadingEl.classList.add('hidden');
            errorEl.textContent = `Unable to load products: ${error.message}. Please try again later.`;
            errorEl.classList.remove('hidden');
        });
}

function renderProducts(products) {
    productsGrid.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.thumbnail}" alt="${escapeHtml(product.title)}" class="product-image" onerror="this.src='https://via.placeholder.com/200?text=No+Image'">
            </div>
            <div class="product-info">
                <div>
                    <div class="product-brand">${escapeHtml(product.brand || 'Generic')}</div>
                    <h3 class="product-title">${escapeHtml(product.title)}</h3>
                </div>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <span class="product-category">${escapeHtml(product.category || 'general')}</span>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

refreshBtn.addEventListener('click', fetchProducts);

document.addEventListener('DOMContentLoaded', fetchProducts);