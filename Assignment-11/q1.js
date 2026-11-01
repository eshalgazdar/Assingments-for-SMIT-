const API_URL = 'https://jsonplaceholder.typicode.com/posts';
let posts = [];

const addPostForm = document.getElementById('add-post-form');
const reloadBtn = document.getElementById('reload-btn');
const postsContainer = document.getElementById('posts-container');
const loadingSpinner = document.getElementById('loading-spinner');
const statusMessage = document.getElementById('status-message');
const postsCount = document.getElementById('posts-count');

const editModal = document.getElementById('edit-modal');
const editForm = document.getElementById('edit-form');
const editIdInput = document.getElementById('edit-id');
const editTitleInput = document.getElementById('edit-title');
const editBodyInput = document.getElementById('edit-body');
const editBodyGroup = document.getElementById('edit-body-group');
const modalTitle = document.getElementById('modal-title');
const modalSubmitBtn = document.getElementById('modal-submit-btn');
const modalCancelBtn = document.getElementById('modal-cancel-btn');

let currentEditMode = 'PUT';

function showStatus(message, type = 'success') {
    statusMessage.textContent = message;
    statusMessage.className = `status-msg ${type}`;
    statusMessage.classList.remove('hidden');
    setTimeout(() => {
        statusMessage.classList.add('hidden');
    }, 5000);
}

function fetchPosts() {
    loadingSpinner.classList.remove('hidden');
    postsContainer.innerHTML = '';

    fetch(`${API_URL}?_limit=6`)
        .then(response => {
            console.log(`GET Response Status: ${response.status}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            posts = data;
            renderPosts();
            loadingSpinner.classList.add('hidden');
            showStatus(`GET successful! Posts loaded. Check the console for response status 200.`, 'success');
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            loadingSpinner.classList.add('hidden');
            showStatus(`Failed to load posts: ${error.message}`, 'error');
        });
}

function renderPosts() {
    postsContainer.innerHTML = '';
    postsCount.textContent = `${posts.length} posts shown`;

    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <div>
                <div class="post-meta">Post ID: ${post.id} &middot; User ID: ${post.userId || 1}</div>
                <h3 class="post-title">${escapeHtml(post.title)}</h3>
                <p class="post-body">${escapeHtml(post.body)}</p>
            </div>
            <div class="card-actions">
                <button class="btn btn-green" onclick="openEditModal(${post.id}, 'PUT')">PUT full update</button>
                <button class="btn btn-amber" onclick="openEditModal(${post.id}, 'PATCH')">PATCH title</button>
                <button class="btn btn-red" onclick="deletePost(${post.id})">DELETE</button>
            </div>
        `;
        postsContainer.appendChild(card);
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

addPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('post-title').value.trim();
    const userId = parseInt(document.getElementById('user-id').value) || 1;
    const body = document.getElementById('post-body').value.trim();

    const newPost = { title, body, userId };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(newPost)
    })
    .then(response => {
        console.log(`POST Response Status: ${response.status}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('POST Response Data:', data);
        posts.unshift(data);
        renderPosts();
        addPostForm.reset();
        document.getElementById('user-id').value = '1';
        showStatus(`POST successful! New post added with ID: ${data.id}. Status: 201`, 'success');
    })
    .catch(error => {
        console.error('Error adding post:', error);
        showStatus(`Failed to add post: ${error.message}`, 'error');
    });
});

reloadBtn.addEventListener('click', fetchPosts);

window.openEditModal = function(id, mode) {
    currentEditMode = mode;
    const post = posts.find(p => p.id === id);
    if (!post) return;

    editIdInput.value = post.id;
    editTitleInput.value = post.title;

    if (mode === 'PUT') {
        modalTitle.textContent = `PUT Full Update (Post ID: ${id})`;
        editBodyInput.value = post.body;
        editBodyGroup.style.display = 'block';
        editBodyInput.required = true;
        modalSubmitBtn.textContent = 'Save Full Update (PUT)';
        modalSubmitBtn.className = 'btn btn-green';
    } else {
        modalTitle.textContent = `PATCH Title Update (Post ID: ${id})`;
        editBodyGroup.style.display = 'none';
        editBodyInput.required = false;
        modalSubmitBtn.textContent = 'Update Title (PATCH)';
        modalSubmitBtn.className = 'btn btn-amber';
    }

    editModal.classList.remove('hidden');
};

modalCancelBtn.addEventListener('click', () => {
    editModal.classList.add('hidden');
});

editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = parseInt(editIdInput.value);
    const title = editTitleInput.value.trim();
    const body = editBodyInput.value.trim();

    const url = `${API_URL}/${id}`;
    let payload = {};
    let method = currentEditMode;

    if (currentEditMode === 'PUT') {
        payload = { id, title, body, userId: 1 };
    } else {
        payload = { title };
    }

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        console.log(`${method} Response Status: ${response.status}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(`${method} Response Data:`, data);
        posts = posts.map(p => {
            if (p.id === id) {
                return currentEditMode === 'PUT' ? { ...p, title, body } : { ...p, title };
            }
            return p;
        });
        renderPosts();
        editModal.classList.add('hidden');
        showStatus(`${method} successful for Post ID ${id}! Status: ${response.status}`, 'success');
    })
    .catch(error => {
        console.error(`Error with ${method}:`, error);
        showStatus(`Failed to update post: ${error.message}`, 'error');
    });
});

window.deletePost = function(id) {
    if (!confirm(`Are you sure you want to delete post ID ${id}?`)) return;

    fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        console.log(`DELETE Response Status: ${response.status}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        posts = posts.filter(p => p.id !== id);
        renderPosts();
        showStatus(`DELETE successful for Post ID ${id}! Status: ${response.status}`, 'success');
    })
    .catch(error => {
        console.error('Error deleting post:', error);
        showStatus(`Failed to delete post: ${error.message}`, 'error');
    });
};

document.addEventListener('DOMContentLoaded', fetchPosts);