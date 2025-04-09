import { fetchProducts } from './api.js';

const gallery = document.querySelector(".gallery");

fetchProducts().then(products => {
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = `product-card ${product.category}`;
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
    `;
    gallery.appendChild(card);
  });
});


const products = [
  { title: "Bear Plushie", category: "plushies", image: "https://images.unsplash.com/photo-1585238342028-ec7fba3f4bd9" },
  { title: "Rainbow Notebook", category: "stationery", image: "https://images.unsplash.com/photo-1596464716121-6c1d710b33dd" },
  { title: "Heart Keychain", category: "accessories", image: "https://images.unsplash.com/photo-1612197605565-c06c3a2b47df" },
  { title: "Kitty Plushie", category: "plushies", image: "https://images.unsplash.com/photo-1596461404969-9c6f5d9383a1" },
  { title: "Cute Pens Set", category: "stationery", image: "https://images.unsplash.com/photo-1612521348685-81cf3f6df0eb" },
  { title: "Pink Hair Clip", category: "accessories", image: "https://images.unsplash.com/photo-1589217154683-55f8711c2f0" }
];

products.forEach(product => {
  const card = document.createElement("div");
  card.className = `product-card ${product.category}`;
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <h3>${product.title}</h3>
  `;
  gallery.appendChild(card);
});
