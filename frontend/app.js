const API_URL = 'http://localhost:3001/api/message';

// Fetch para traer datos del backend
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
