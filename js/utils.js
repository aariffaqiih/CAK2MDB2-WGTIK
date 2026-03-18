// Utility functions for validation, escaping, and DOM manipulation

/**
 * Validate if the input is a valid email.
 * @param {string} email - The email to validate.
 * @returns {boolean} - Returns true if valid, otherwise false.
 */
function validateEmail(email) {
    const regex = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/;
    return regex.test(email);
}

/**
 * Escape HTML to prevent XSS attacks.
 * @param {string} html - The HTML string to escape.
 * @returns {string} - Escaped HTML string.
 */
function escapeHTML(html) {
    const div = document.createElement('div');
    div.innerText = html;
    return div.innerHTML;
}

/**
 * Get an element by ID and set its text content.
 * @param {string} id - The id of the element.
 * @param {string} text - The text to set.
 */
function setTextById(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    }
}