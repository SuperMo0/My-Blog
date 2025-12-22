export default async function apiRequest(path, options = {}) {

    let baseUrl = import.meta.env.VITE_API;
    let url = baseUrl + path;

    let response = await fetch(url, options);
    return await response.json();
}
