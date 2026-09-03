// Sample Data with Veg, Non-Veg, and Restaurant Information
const foodItems = [
    {
        id: 1,
        name: "Paneer Butter Masala",
        type: "veg",
        price: 11.99,
        restaurant: "Spice Symphony",
        rating: 4.6,
        time: "30 mins",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&auto=format&fit=crop&q=80",
        desc: "Rich cottage cheese cubes cooked in creamy tomato & butter gravy."
    },
    {
        id: 2,
        name: "Butter Chicken",
        type: "non-veg",
        price: 13.99,
        restaurant: "Delhi Darbar",
        rating: 4.8,
        time: "35 mins",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop&q=80",
        desc: "Tender boneless chicken marinated and cooked in rich spiced gravy."
    },
    {
        id: 3,
        name: "Margherita Pizza",
        type: "veg",
        price: 9.99,
        restaurant: "Luigi's Italian",
        rating: 4.5,
        time: "25 mins",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=500&auto=format&fit=crop&q=80",
        desc: "Fresh mozzarella, tomato sauce, and aromatic basil leaves."
    },
    {
        id: 4,
        name: "Pepperoni Passion",
        type: "non-veg",
        price: 14.50,
        restaurant: "Luigi's Italian",
        rating: 4.7,
        time: "25 mins",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=80",
        desc: "Topped with spicy pepperoni slices and extra melted mozzarella."
    },
    {
        id: 5,
        name: "Veggie Supreme Burger",
        type: "veg",
        price: 7.99,
        restaurant: "Burger Town",
        rating: 4.3,
        time: "20 mins",
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500&auto=format&fit=crop&q=80",
        desc: "Crispy vegetable patty with fresh lettuce, onions, and spicy mayo."
    },
    {
        id: 6,
        name: "Crispy Fried Chicken Burger",
        type: "non-veg",
        price: 8.99,
        restaurant: "Burger Town",
        rating: 4.6,
        time: "20 mins",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80",
        desc: "Golden fried chicken breast tossed with secret seasoning & lettuce."
    },
    {
        id: 7,
        name: "Hyderabadi Chicken Biryani",
        type: "non-veg",
        price: 12.99,
        restaurant: "Nawab's Kitchen",
        rating: 4.9,
        time: "40 mins",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80",
        desc: "Long grain basmati rice slow-cooked with aromatic spiced chicken."
    },
    {
        id: 8,
        name: "Royal Veg Dum Biryani",
        type: "veg",
        price: 10.50,
        restaurant: "Nawab's Kitchen",
        rating: 4.4,
        time: "35 mins",
        image: "https://images.unsplash.com/photo-1642821373181-696a54913e9a?w=500&auto=format&fit=crop&q=80",
        desc: "Layered basmati rice cooked with fresh seasonal vegetables and saffron."
    }
];

// App State
let cart = [];
const deliveryFee = 2.50;

// DOM Elements
const menuGrid = document.getElementById("menuGrid");
const vegFilter = document.getElementById("vegFilter");
const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItemsContainer = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartFooter = document.getElementById("cartFooter");
const cartRestaurantInfo = document.getElementById("cartRestaurantInfo");
const subTotalEl = document.getElementById("subTotal");
const grandTotalEl = document.getElementById("grandTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const trackingModal = document.getElementById("trackingModal");
const closeTracking = document.getElementById("closeTracking");
const deliveryBike = document.getElementById("deliveryBike");

// Initialize Application
function init() {
    renderMenu(foodItems);
    setupEventListeners();
}

// Render Food Cards
function renderMenu(items) {
    menuGrid.innerHTML = "";
    items.forEach(item => {
        const isVeg = item.type === "veg";
        const card = document.createElement("div");
        card.className = "food-card";
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="card-img">
            <div class="card-body">
                <div class="badge-row">
                    <span class="diet-indicator ${isVeg ? 'veg' : 'non-veg'}">
                        ${isVeg ? '● VEG' : '▲ NON-VEG'}
                    </span>
                    <span class="restaurant-name"><i class="fa-solid fa-store"></i> ${item.restaurant}</span>
                </div>
                <h4 class="food-title">${item.name}</h4>
                <p class="food-desc">${item.desc}</p>
                <div class="card-footer">
                    <span class="price">$${item.price.toFixed(2)}</span>
                    <button class="add-btn" onclick="addToCart(${item.id})">Add +</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

// Filter Menu Items (Veg Only)
vegFilter.addEventListener("change", (e) => {
    if (e.target.checked) {
        const vegItems = foodItems.filter(item => item.type === "veg");
        renderMenu(vegItems);
    } else {
        renderMenu(foodItems);
    }
});

// Cart Functions
function addToCart(id) {
    const item = foodItems.find(f => f.id === id);
    const existingIndex = cart.findIndex(c => c.id === id);

    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateCartUI();
}

function changeQty(id, delta) {
    const index = cart.findIndex(c => c.id === id);
    if (index > -1) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
    }
    updateCartUI();
}

function updateCartUI() {
    // Total count calculation
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCount.innerText = totalCount;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-msg">Your cart is currently empty!</p>`;
        cartFooter.style.display = "none";
        cartRestaurantInfo.innerHTML = "";
        return;
    }

    cartFooter.style.display = "block";

    // Show Restaurant info of items in cart
    const restaurantsInCart = [...new Set(cart.map(item => item.restaurant))].join(", ");
    cartRestaurantInfo.innerHTML = `
        <strong><i class="fa-solid fa-utensils"></i> Ordering From:</strong> ${restaurantsInCart}
    `;

    // Render cart item rows
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <small>$${item.price.toFixed(2)} x ${item.qty}</small>
            </div>
            <div class="qty-controls">
                <button onclick="changeQty(${item.id}, -1)">-</button>
                <span>${item.qty}</span>
                <button onclick="changeQty(${item.id}, 1)">+</button>
            </div>
        </div>
    `).join("");

    // Calculate subtotal & grand total
    const subTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    subTotalEl.innerText = `$${subTotal.toFixed(2)}`;
    grandTotalEl.innerText = `$${(subTotal + deliveryFee).toFixed(2)}`;
}

// Order Simulation & Live Tracking Logic
function startOrderTracking() {
    cartModal.style.display = "none";
    trackingModal.style.display = "flex";
    
    // Reset steps
    const steps = [
        document.getElementById("step1"),
        document.getElementById("step2"),
        document.getElementById("step3"),
        document.getElementById("step4")
    ];

    steps.forEach(s => s.classList.remove("active"));
    steps[0].classList.add("active");
    deliveryBike.style.left = "5%";

    // Simulated Progress Timers
    setTimeout(() => {
        steps[1].classList.add("active");
    }, 2500);

    setTimeout(() => {
        steps[2].classList.add("active");
        deliveryBike.style.left = "80%"; // Bike moves forward
    }, 5500);

    setTimeout(() => {
        steps[3].classList.add("active");
        // Clear cart after complete delivery
        cart = [];
        updateCartUI();
    }, 9500);
}

// Event Listeners
function setupEventListeners() {
    cartBtn.onclick = () => cartModal.style.display = "flex";
    closeCart.onclick = () => cartModal.style.display = "none";
    closeTracking.onclick = () => trackingModal.style.display = "none";
    
    checkoutBtn.onclick = () => {
        if (cart.length > 0) {
            startOrderTracking();
        }
    };

    // Close modals on clicking outside overlay
    window.onclick = (e) => {
        if (e.target === cartModal) cartModal.style.display = "none";
        if (e.target === trackingModal) trackingModal.style.display = "none";
    };
}

// Run app
init();
