// api.js
export const API_BASE = "https://67f627cc913986b16fa6f6c6.mockapi.io";

export async function fetchProducts() {
    const response = await fetch(`${API_BASE}/Products`);
    const data = await response.json();
    return data;
}
