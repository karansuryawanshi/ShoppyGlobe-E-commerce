# 🛒 ShoppyGlobe - E-commerce React App

ShoppyGlobe is a basic e-commerce web application built using **React**, **Redux**, and **Tailwind CSS**. It allows users to browse products, view product details, add items to a cart, modify quantities, and proceed to checkout.

---

## 🚀 Features

- 🧾 Product listing from API (`https://dummyjson.com/products`)
- 🔍 Real-time search functionality
- 🛍 Add to Cart & Remove from Cart
- 🔄 Quantity update (with validation)
- 🔗 Product detail page with route param
- 📦 Redux-based cart management
- 🔀 Routing with React Router
- 💡 Lazy loading for pages (code splitting)
- 📱 Fully responsive design using Tailwind CSS
- ❌ 404 Page for unknown routes

---

## 🧑‍💻 Tech Stack

- **React 18**
- **Redux Toolkit**
- **React Router DOM**
- **Tailwind CSS**
- **Vite** (for fast development build)
- **Lucide-react** (for icons)

---

## 📂 Folder Structure

```
src/
│
├── components/ # Reusable components like Header, ProductItem, Cart
├── pages/ # Page-level components (Home, CartPage, Checkout)
├── redux/ # Redux store, cart slice
├── hooks/ # Custom hook for data fetching
├── router/ # React Router setup
├── App.jsx # Main layout component
├── main.jsx # Entry point
└── index.css # Tailwind styles
```

---

## 📦 Getting Started

```bash
git clone https://github.com/karansuryawanshi/ShoppyGlobe-E-commerce

cd shoppyglobe
npm install
npm run dev
```

Visit http://localhost:5173 in your browser.
