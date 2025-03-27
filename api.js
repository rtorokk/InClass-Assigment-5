const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export function getPosts() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new error(`HTTP error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch failed:', error.message);
        throw error;
    }
}
