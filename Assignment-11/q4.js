const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

const announcementForm = document.getElementById('announcement-form');
const outputBox = document.getElementById('output-box');

const btnPost = document.getElementById('btn-post');
const btnPut = document.getElementById('btn-put');
const btnPatch = document.getElementById('btn-patch');
const btnDelete = document.getElementById('btn-delete');

/**
 * Reusable Request Helper
 * Accepts a URL, HTTP method, and optional request body.
 * 
 * NOTE ON JSON.stringify() and Content-Type header:
 * - HTTP request bodies sent via fetch() must be strings (or FormData/Blob/etc.), not raw JavaScript objects.
 *   JSON.stringify() serializes our JavaScript announcement object into a valid JSON formatted string.
 * - The 'Content-Type': 'application/json; charset=UTF-8' header tells the receiving server that the 
 *   payload being transmitted is encoded in JSON format so the server can correctly parse the body.
 */
async function sendApiRequest(url, method = 'GET', bodyData = null) {
    try {
        const options = {
            method: method,
            headers: {}
        };

        if (bodyData) {
            // Serialize JavaScript object to JSON string
            options.body = JSON.stringify(bodyData);
            // Inform server that the body content is JSON
            options.headers['Content-Type'] = 'application/json; charset=UTF-8';
        }

        const response = await fetch(url, options);
        console.log(`${method} request to ${url} - Status: ${response.status}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} ${response.statusText}`);
        }

        const contentType = response.headers.get('content-type');
        let responseData = {};
        if (contentType && contentType.includes('application/json')) {
            responseData = await response.json();
        } else {
            responseData = { message: 'Operation completed successfully (No content returned)' };
        }

        return {
            status: response.status,
            ok: response.ok,
            data: responseData
        };

    } catch (error) {
        console.error(`API Request Error (${method} ${url}):`, error);
        throw error;
    }
}

announcementForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const userId = parseInt(document.getElementById('userId').value) || 1;
    const body = document.getElementById('body').value.trim();

    const postPayload = { title, body, userId };

    outputBox.textContent = 'Sending POST request...';

    try {
        const result = await sendApiRequest(BASE_URL, 'POST', postPayload);
        outputBox.textContent = `=== POST SUCCESSFUL ===\nStatus Code: ${result.status}\nReturned ID: ${result.data.id}\n\nFull Response:\n` + JSON.stringify(result.data, null, 2);
        announcementForm.reset();
        document.getElementById('userId').value = '1';
    } catch (error) {
        outputBox.textContent = `=== POST FAILED ===\nError: ${error.message}`;
    }
});

btnPost.addEventListener('click', async () => {
    outputBox.textContent = 'Executing test POST request...';
    try {
        const payload = {
            title: 'Sample Test Announcement',
            body: 'This is a test body for POST request practice.',
            userId: 1
        };
        const result = await sendApiRequest(BASE_URL, 'POST', payload);
        outputBox.textContent = `=== TEST POST SUCCESSFUL ===\nStatus Code: ${result.status}\nReturned ID: ${result.data.id}\n\nFull Response:\n` + JSON.stringify(result.data, null, 2);
    } catch (error) {
        outputBox.textContent = `=== TEST POST FAILED ===\nError: ${error.message}`;
    }
});

btnPut.addEventListener('click', async () => {
    outputBox.textContent = 'Executing PUT request to /posts/1...';
    try {
        const putPayload = {
            id: 1,
            title: 'Fully Updated Announcement Title (PUT)',
            body: 'This entire post has been replaced using a PUT request.',
            userId: 1
        };
        const result = await sendApiRequest(`${BASE_URL}/1`, 'PUT', putPayload);
        outputBox.textContent = `=== PUT SUCCESSFUL (/posts/1) ===\nStatus Code: ${result.status}\n\nFull Response:\n` + JSON.stringify(result.data, null, 2);
    } catch (error) {
        outputBox.textContent = `=== PUT FAILED ===\nError: ${error.message}`;
    }
});

btnPatch.addEventListener('click', async () => {
    outputBox.textContent = 'Executing PATCH request to /posts/1...';
    try {
        const patchPayload = {
            title: 'Partially Updated Title Only (PATCH)'
        };
        const result = await sendApiRequest(`${BASE_URL}/1`, 'PATCH', patchPayload);
        outputBox.textContent = `=== PATCH SUCCESSFUL (/posts/1) ===\nStatus Code: ${result.status}\n\nFull Response:\n` + JSON.stringify(result.data, null, 2);
    } catch (error) {
        outputBox.textContent = `=== PATCH FAILED ===\nError: ${error.message}`;
    }
});

btnDelete.addEventListener('click', async () => {
    outputBox.textContent = 'Executing DELETE request on /posts/1...';
    try {
        const result = await sendApiRequest(`${BASE_URL}/1`, 'DELETE');
        outputBox.textContent = `=== DELETE SUCCESSFUL (/posts/1) ===\nStatus Code: ${result.status} (No Content / Success)\n\nResponse:\n` + JSON.stringify(result.data, null, 2);
    } catch (error) {
        outputBox.textContent = `=== DELETE FAILED ===\nError: ${error.message}`;
    }
});