// =========================================
// 1. RESTAURANTS DATA
// =========================================
const restaurantsData = [
  {
    id: "r1",
    name: "Sri Udupi Grand",
    cuisine: "Pure Veg • Tiffins & Snacks",
    rating: 4.8,
    time: "20-25 mins",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80"
  },
  {
    id: "r2",
    name: "Meghana Biryani House",
    cuisine: "Royal Biriyanis & Starters",
    rating: 4.9,
    time: "30-35 mins",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80"
  },
  {
    id: "r3",
    name: "Annapurna Traditional Meals",
    cuisine: "Full Meals & Thalis",
    rating: 4.7,
    time: "25-30 mins",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80"
  },
  {
    id: "r4",
    name: "Chai & Snack Junction",
    cuisine: "Evening Snacks & Bajjis",
    rating: 4.6,
    time: "15-20 mins",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80"
  },
  {
    id: "r5",
    name: "Fresh Juice & Shakes Club",
    cuisine: "Fresh Juices & Beverages",
    rating: 4.8,
    time: "15-20 mins",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&q=80"
  }
];

// =========================================
// 2. DISHES ORGANIZED BY CATEGORY
// =========================================
const menuData = [
  // --- TIFFINS ---
  {
    id: 1,
    title: "Ghee Roast Masala Dosa",
    category: "Tiffins",
    restaurantId: "r1",
    restaurantName: "Sri Udupi Grand",
    price: 120,
    rating: 4.9,
    isVeg: true,
    desc: "Crisp golden crepe roasted in pure desi ghee, served with potato masala, 3 chutneys & hot sambar.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80"
  },
  {
    id: 2,
    title: "Ghee Podi Thatte Idli (2 Pcs)",
    category: "Tiffins",
    restaurantId: "r1",
    restaurantName: "Sri Udupi Grand",
    price: 90,
    rating: 4.8,
    isVeg: true,
    desc: "Soft steamed plate idli smeared with spicy gunpowder and melted homemade ghee.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80"
  },
  {
    id: 3,
    title: "Crispy Medu Vada (2 Pcs)",
    category: "Tiffins",
    restaurantId: "r1",
    restaurantName: "Sri Udupi Grand",
    price: 70,
    rating: 4.7,
    isVeg: true,
    desc: "Crunchy lentil donuts flavored with crushed black pepper, ginger, and curry leaves.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&q=80"
  },
  {
    id: 4,
    title: "Poori Bhaji Combo (3 Pcs)",
    category: "Tiffins",
    restaurantId: "r1",
    restaurantName: "Sri Udupi Grand",
    price: 110,
    rating: 4.7,
    isVeg: true,
    desc: "Fluffy whole wheat pooris served with lightly spiced potato onion curry.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80"
  },

  // --- BIRIYANIS ---
  {
    id: 5,
    title: "Hyderabadi Chicken Dum Biryani",
    category: "Biriyanis",
    restaurantId: "r2",
    restaurantName: "Meghana Biryani House",
    price: 280,
    rating: 4.9,
    isVeg: false,
    desc: "Slow-cooked saffron basmati rice layered with juicy marinated chicken pieces, served with Mirchi Ka Salan.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80"
  },
  {
    id: 6,
    title: "Special Paneer Tikka Biryani",
    category: "Biriyanis",
    restaurantId: "r2",
    restaurantName: "Meghana Biryani House",
    price: 240,
    rating: 4.7,
    isVeg: true,
    desc: "Charcoal grilled paneer cubes tossed in rich dum biryani rice with aromatic mint and fried onions.",
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=500&q=80"
  },
  {
    id: 7,
    title: "Andhra Special Mutton Biryani",
    category: "Biriyanis",
    restaurantId: "r2",
    restaurantName: "Meghana Biryani House",
    price: 350,
    rating: 4.9,
    isVeg: false,
    desc: "Tender goat meat slow cooked with fiery spices and long grain rice.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&q=80"
  },

  // --- MEALS ---
  {
    id: 8,
    title: "South Indian Unlimited Bhojanam",
    category: "Meals",
    restaurantId: "r3",
    restaurantName: "Annapurna Traditional Meals",
    price: 190,
    rating: 4.9,
    isVeg: true,
    desc: "Rice, Sambar, Rasam, 2 Veg Curries, Sweet Payasam, Papad, Curd, and Ghee Podi.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=500&q=80"
  },
  {
    id: 9,
    title: "Mini Sambar Rice & Curd Rice Combo",
    category: "Meals",
    restaurantId: "r3",
    restaurantName: "Annapurna Traditional Meals",
    price: 130,
    rating: 4.8,
    isVeg: true,
    desc: "Comforting ghee sambar rice and tempered pomegranate curd rice with crispy papad.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80"
  },
  {
    id: 10,
    title: "Andhra Non-Veg Meal Box",
    category: "Meals",
    restaurantId: "r3",
    restaurantName: "Annapurna Traditional Meals",
    price: 250,
    rating: 4.8,
    isVeg: false,
    desc: "Steamed rice served with Andhra chicken curry, egg fry, rasam, curd, and gun powder.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80"
  },

  // --- SNACKS ---
  {
    id: 11,
    title: "Hyderabadi Mirchi Bajji (4 Pcs)",
    category: "Snacks",
    restaurantId: "r4",
    restaurantName: "Chai & Snack Junction",
    price: 60,
    rating: 4.8,
    isVeg: true,
    desc: "Spicy stuffed banana peppers deep fried in chickpea batter and topped with onions & chaat masala.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80"
  },
  {
    id: 12,
    title: "Crispy Onion Pakoda",
    category: "Snacks",
    restaurantId: "r4",
    restaurantName: "Chai & Snack Junction",
    price: 70,
    rating: 4.6,
    isVeg: true,
    desc: "Crunchy golden sliced onion fritters seasoned with fresh coriander and green chillies.",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&q=80"
  },
  {
    id: 13,
    title: "Mysore Bonda (6 Pcs)",
    category: "Snacks",
    restaurantId: "r4",
    restaurantName: "Chai & Snack Junction",
    price: 65,
    rating: 4.7,
    isVeg: true,
    desc: "Fluffy deep fried curd and flour snack balls served with spicy coconut chutney.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80"
  },

  // --- JUICES ---
  {
    id: 14,
    title: "Fresh Mosambi (Sweet Lime) Juice",
    category: "Juices",
    restaurantId: "r5",
    restaurantName: "Fresh Juice & Shakes Club",
    price: 70,
    rating: 4.8,
    isVeg: true,
    desc: "100% freshly pressed sweet lime juice with a pinch of black salt and mint.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80"
  },
  {
    id: 15,
    title: "Royal Alphonso Mango Lassi",
    category: "Juices",
    restaurantId: "r5",
    restaurantName: "Fresh Juice & Shakes Club",
    price: 90,
    rating: 4.9,
    isVeg: true,
    desc: "Thick chilled yogurt smoothie blended with sweet mango pulp and topped with pistachios.",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80"
  },
  {
    id: 16,
    title: "Chilled Badam Milk",
    category: "Juices",
    restaurantId: "r5",
    restaurantName: "Fresh Juice & Shakes Club",
    price: 80,
    rating: 4.9,
    isVeg: true,
    desc: "Slow simmered milk infused with real almond paste, saffron strands, and crushed nuts.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80"
  }
];

// =========================================
// 3. APP STATE & LOCAL STORAGE
// =========================================
let cart = JSON.parse(localStorage.getItem('eatsbook_cart')) || [];
let currentUser = JSON.parse(localStorage.getItem('eatsbook_user')) || null;
let orderHistory = JSON.parse(localStorage.getItem('eatsbook_orders')) || [];

let appliedDiscount = 0;
let selectedRestaurantId = null;
let activeCategory = 'all';
let vegOnlyFilter = false;
const DELIVERY_FEE = 35.00;

// =========================================
// 4. DOM ELEMENTS
// =========================================
const restaurantsGrid = document.getElementById('restaurantsGrid');
const resetRestaurantBtn = document.getElementById('resetRestaurantBtn');
const foodGrid = document.getElementById('foodGrid');
const categoryContainer = document.getElementById('categoryContainer');
const vegOnlyToggle = document.getElementById('vegOnlyToggle');
const searchInput = document.getElementById('searchInput');
const menuSectionTitle = document.getElementById('menuSectionTitle');
const activeFilterLabel = document.getElementById('activeFilterLabel');

// Cart Elements
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartBadge = document.getElementById('cartBadge');
const cartCountHeader = document.getElementById('cartCountHeader');

const subtotalPrice = document.getElementById('subtotalPrice');
const totalPrice = document.getElementById('totalPrice');
const discountRow = document.getElementById('discountRow');
const discountPrice = document.getElementById('discountPrice');
const couponInput = document.getElementById('couponInput');
const applyCouponBtn = document.getElementById('applyCouponBtn');

// Auth Elements
const authModal = document.getElementById('authModal');
const closeAuthBtn = document.getElementById('closeAuthBtn');
const authNavContainer = document.getElementById('authNavContainer');
const loginTabBtn = document.getElementById('loginTabBtn');
const signupTabBtn = document.getElementById('signupTabBtn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const quickDemoLoginBtn = document.getElementById('quickDemoLoginBtn');

// Orders History Elements
const ordersModal = document.getElementById('ordersModal');
const openOrdersBtn = document.getElementById('openOrdersBtn');
const closeOrdersBtn = document.getElementById('closeOrdersBtn');
const orderHistoryContainer = document.getElementById('orderHistoryContainer');
const ordersBadge = document.getElementById('ordersBadge');

// Checkout & Tracker Elements
const checkoutModal = document.getElementById('checkoutModal');
const openCheckoutModalBtn = document.getElementById('openCheckoutModalBtn');
const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const trackerModal = document.getElementById('trackerModal');
const closeTrackerBtn = document.getElementById('closeTrackerBtn');
const etaTimeDisplay = document.getElementById('etaTimeDisplay');
const trackingStatusHeading = document.getElementById('trackingStatusHeading');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

// =========================================
// 5. USER AUTHENTICATION
// =========================================
function updateAuthUI() {
  if (currentUser) {
    authNavContainer.innerHTML = `
      <div class="user-profile-chip">
        <div class="user-avatar-circle">${currentUser.name.charAt(0).toUpperCase()}</div>
        <span class="user-name-text">${currentUser.name.split(' ')[0]}</span>
        <button class="logout-icon-btn" onclick="logoutUser()" title="Logout"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
      </div>
    `;
    // Pre-fill checkout form if logged in
    document.getElementById('custName').value = currentUser.name || '';
    document.getElementById('custPhone').value = currentUser.phone || '';
  } else {
    authNavContainer.innerHTML = `
      <button class="login-btn" onclick="openAuthModal()">
        <i class="fa-solid fa-user"></i>
        <span>Login</span>
      </button>
    `;
  }
}

function openAuthModal() {
  authModal.classList.add('open');
}

function closeAuthModal() {
  authModal.classList.remove('open');
}

// Toggle Tabs
loginTabBtn.addEventListener('click', () => {
  loginTabBtn.classList.add('active');
  signupTabBtn.classList.remove('active');
  loginForm.style.display = 'block';
  signupForm.style.display = 'none';
});

signupTabBtn.addEventListener('click', () => {
  signupTabBtn.classList.add('active');
  loginTabBtn.classList.remove('active');
  signupForm.style.display = 'block';
  loginForm.style.display = 'none';
});

// Handle Login Form Submit
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailVal = document.getElementById('loginEmail').value.trim();
  const nameFromEmail = emailVal.split('@')[0] || "Foodie User";
  
  currentUser = {
    name: nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1),
    email: emailVal,
    phone: "+91 98765 43210"
  };

  localStorage.setItem('eatsbook_user', JSON.stringify(currentUser));
  updateAuthUI();
  closeAuthModal();
  showToast(`Welcome back to Eats Book, ${currentUser.name}!`);
});

// Handle Sign Up Form Submit
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const phone = document.getElementById('signupPhone').value.trim();

  currentUser = { name, email, phone };
  localStorage.setItem('eatsbook_user', JSON.stringify(currentUser));
  updateAuthUI();
  closeAuthModal();
  showToast(`Account created! Welcome, ${name}!`);
});

// Quick Demo Login
quickDemoLoginBtn.addEventListener('click', () => {
  currentUser = {
    name: "Aarav Sharma",
    email: "aarav@example.com",
    phone: "+91 98765 43210"
  };
  localStorage.setItem('eatsbook_user', JSON.stringify(currentUser));
  updateAuthUI();
  closeAuthModal();
  showToast("Logged in as Aarav Sharma!");
});

function logoutUser() {
  currentUser = null;
  localStorage.removeItem('eatsbook_user');
  updateAuthUI();
  showToast("Logged out successfully.");
}

closeAuthBtn.addEventListener('click', closeAuthModal);

// =========================================
// 6. PREVIOUS ORDER HISTORY SYSTEM
// =========================================
function updateOrdersBadge() {
  ordersBadge.innerText = orderHistory.length;
}

function renderOrderHistory() {
  updateOrdersBadge();

  if (orderHistory.length === 0) {
    orderHistoryContainer.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <i class="fa-solid fa-receipt" style="font-size: 3rem; opacity: 0.3; margin-bottom: 0.75rem;"></i>
        <p style="font-weight: 700; font-size: 1.1rem; color: var(--text);">No previous orders found!</p>
        <small>Your ordered dishes and receipts will be saved right here.</small>
      </div>
    `;
    return;
  }

  orderHistoryContainer.innerHTML = orderHistory.map(order => `
    <div class="order-history-card">
      <div class="order-card-header">
        <div>
          <span class="order-id-txt">${order.orderId}</span>
          <div class="order-date"><i class="fa-regular fa-calendar"></i> ${order.date}</div>
        </div>
        <span class="order-status-badge ${order.status === 'Delivered' ? 'delivered' : 'live'}">
          ${order.status === 'Delivered' ? '● Delivered' : '● In Transit'}
        </span>
      </div>
      <div class="order-items-summary">
        ${order.items.map(i => `
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.2rem;">
            <span>${i.qty}x ${i.title}</span>
            <span style="font-weight: 600;">₹${i.price * i.qty}</span>
          </div>
        `).join('')}
      </div>
      <div class="order-card-footer">
        <div>
          <small style="color: var(--text-muted);">Total Paid</small>
          <div class="order-price-val">₹${order.totalAmount}</div>
        </div>
        <button class="reorder-btn" onclick="reorderItems('${order.orderId}')">
          <i class="fa-solid fa-rotate-right"></i> Reorder Items
        </button>
      </div>
    </div>
  `).join('');
}

function reorderItems(orderId) {
  const pastOrder = orderHistory.find(o => o.orderId === orderId);
  if (!pastOrder) return;

  pastOrder.items.forEach(pastItem => {
    const existing = cart.find(c => c.id === pastItem.id);
    if (existing) {
      existing.qty += pastItem.qty;
    } else {
      cart.push({ ...pastItem });
    }
  });

  saveCart();
  ordersModal.classList.remove('open');
  toggleCart(true);
  showToast("Reordered items added to your bag!");
}

openOrdersBtn.addEventListener('click', () => {
  renderOrderHistory();
  ordersModal.classList.add('open');
});

closeOrdersBtn.addEventListener('click', () => {
  ordersModal.classList.remove('open');
});

// =========================================
// 7. RENDER RESTAURANTS & MENU
// =========================================
function renderRestaurants() {
  restaurantsGrid.innerHTML = restaurantsData.map(res => `
    <div class="restaurant-card ${selectedRestaurantId === res.id ? 'active' : ''}" onclick="selectRestaurant('${res.id}')">
      <img src="${res.image}" class="restaurant-img" alt="${res.name}" />
      <div class="restaurant-info">
        <h4 class="restaurant-title">${res.name}</h4>
        <p class="restaurant-meta">${res.cuisine}</p>
        <p class="restaurant-meta"><span class="restaurant-rating">★ ${res.rating}</span> • ${res.time}</p>
      </div>
    </div>
  `).join('');
}

function selectRestaurant(id) {
  selectedRestaurantId = (selectedRestaurantId === id) ? null : id;
  renderRestaurants();
  renderMenu();
}

resetRestaurantBtn.addEventListener('click', () => {
  selectedRestaurantId = null;
  renderRestaurants();
  renderMenu();
});

function renderMenu() {
  const query = searchInput.value.toLowerCase().trim();

  if (selectedRestaurantId) {
    const matchedRes = restaurantsData.find(r => r.id === selectedRestaurantId);
    menuSectionTitle.innerText = `Menu from ${matchedRes.name}`;
    activeFilterLabel.innerText = `Showing exclusive items from ${matchedRes.name}`;
  } else {
    menuSectionTitle.innerText = "Explore Menu";
    activeFilterLabel.innerText = activeCategory === 'all' ? "Showing all categories" : `Showing ${activeCategory}`;
  }

  const filtered = menuData.filter(item => {
    const matchesRestaurant = !selectedRestaurantId || item.restaurantId === selectedRestaurantId;
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesVeg = vegOnlyFilter ? item.isVeg : true;
    const matchesSearch = item.title.toLowerCase().includes(query) ||
                          item.desc.toLowerCase().includes(query) ||
                          item.category.toLowerCase().includes(query) ||
                          item.restaurantName.toLowerCase().includes(query);

    return matchesRestaurant && matchesCategory && matchesVeg && matchesSearch;
  });

  if (filtered.length === 0) {
    foodGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">
        <i class="fa-solid fa-utensils" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
        <p>No dishes found matching your criteria.</p>
      </div>
    `;
    return;
  }

  foodGrid.innerHTML = filtered.map(item => `
    <div class="food-card">
      <div class="food-img-wrapper">
        <img src="${item.image}" alt="${item.title}" class="food-img" loading="lazy" />
        <div class="diet-tag">
          <span class="food-type-icon ${item.isVeg ? 'veg' : 'non-veg'}"></span>
        </div>
        <span class="rest-tag"><i class="fa-solid fa-store"></i> ${item.restaurantName}</span>
      </div>
      <div class="food-info">
        <span class="food-cat-label">${item.category}</span>
        <h3 class="food-title">${item.title}</h3>
        <p class="food-desc">${item.desc}</p>
        <div class="food-footer">
          <span class="food-price">₹${item.price}</span>
          <button class="add-btn" onclick="addToCart(${item.id})">
            <i class="fa-solid fa-plus"></i> ADD
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// =========================================
// 8. CART MANAGEMENT
// =========================================
function saveCart() {
  localStorage.setItem('eatsbook_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const product = menuData.find(item => item.id === productId);
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  showToast(`Added "${product.title}" to your Eats Book bag!`);
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== productId);
  }
  saveCart();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  cartBadge.innerText = totalItems;
  cartCountHeader.innerText = totalItems;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); margin-top: 3rem;">
        <i class="fa-solid fa-bag-shopping" style="font-size: 2.5rem; opacity: 0.4; margin-bottom: 0.5rem;"></i>
        <p>Your Eats Book bag is empty!</p>
      </div>
    `;
    subtotalPrice.innerText = `₹0.00`;
    totalPrice.innerText = `₹0.00`;
    discountRow.style.display = 'none';
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" class="cart-item-img" alt="${item.title}" />
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-price">₹${item.price * item.qty}</div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
          <span style="font-size: 0.85rem; font-weight: 700;">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = subtotal * appliedDiscount;
  const finalTotal = subtotal - discount + DELIVERY_FEE;

  subtotalPrice.innerText = `₹${subtotal.toFixed(2)}`;
  if (appliedDiscount > 0) {
    discountRow.style.display = 'flex';
    discountPrice.innerText = `-₹${discount.toFixed(2)}`;
  } else {
    discountRow.style.display = 'none';
  }
  totalPrice.innerText = `₹${finalTotal.toFixed(2)}`;
}

applyCouponBtn.addEventListener('click', () => {
  const code = couponInput.value.trim().toUpperCase();
  if (code === "EATSBOOK20") {
    appliedDiscount = 0.20;
    showToast("Coupon Applied: 20% OFF on Eats Book!");
    updateCartUI();
  } else {
    showToast("Invalid Coupon Code");
  }
});

// =========================================
// 9. FILTER LISTENERS & CART DRAWER
// =========================================
categoryContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.category-pill');
  if (!btn) return;

  document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  activeCategory = btn.dataset.category;
  renderMenu();
});

vegOnlyToggle.addEventListener('click', () => {
  vegOnlyFilter = !vegOnlyFilter;
  vegOnlyToggle.classList.toggle('active', vegOnlyFilter);
  renderMenu();
});

searchInput.addEventListener('input', renderMenu);

function toggleCart(open) {
  cartDrawer.classList.toggle('open', open);
  cartOverlay.classList.toggle('open', open);
}

openCartBtn.addEventListener('click', () => toggleCart(true));
closeCartBtn.addEventListener('click', () => toggleCart(false));
cartOverlay.addEventListener('click', () => toggleCart(false));

// =========================================
// 10. CHECKOUT & LIVE ORDER SIMULATION
// =========================================
openCheckoutModalBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    showToast("Add items to your bag first!");
    return;
  }
  
  // Require login if not authenticated
  if (!currentUser) {
    toggleCart(false);
    openAuthModal();
    showToast("Please log in to complete your checkout!");
    return;
  }

  toggleCart(false);
  checkoutModal.classList.add('open');
});

closeCheckoutBtn.addEventListener('click', () => {
  checkoutModal.classList.remove('open');
});

checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkoutModal.classList.remove('open');

  const newOrderId = `Order #EB-${Math.floor(10000 + Math.random() * 90000)}`;
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = subtotal * appliedDiscount;
  const finalTotal = (subtotal - discount + DELIVERY_FEE).toFixed(2);

  // Save to Order History
  const placedOrder = {
    orderId: newOrderId,
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }),
    items: [...cart],
    totalAmount: finalTotal,
    status: 'In Transit'
  };

  orderHistory.unshift(placedOrder);
  localStorage.setItem('eatsbook_orders', JSON.stringify(orderHistory));
  updateOrdersBadge();

  // Reset Cart
  cart = [];
  appliedDiscount = 0;
  saveCart();
  checkoutForm.reset();

  // Show Tracker Modal
  document.getElementById('orderIdDisplay').innerText = newOrderId;
  trackerModal.classList.add('open');
  simulateDeliveryProgress(newOrderId);
});

let etaInterval;
function simulateDeliveryProgress(orderId) {
  const s1 = document.getElementById('step1');
  const s2 = document.getElementById('step2');
  const s3 = document.getElementById('step3');
  const s4 = document.getElementById('step4');

  s1.className = "tracker-step completed";
  s2.className = "tracker-step active";
  s3.className = "tracker-step";
  s4.className = "tracker-step";

  let eta = 20;
  etaTimeDisplay.innerText = eta;
  trackingStatusHeading.innerText = "Chef is cooking your meal!";

  clearInterval(etaInterval);
  etaInterval = setInterval(() => {
    if (eta > 2) eta -= 1;
    etaTimeDisplay.innerText = eta;
  }, 2000);

  setTimeout(() => {
    s2.className = "tracker-step completed";
    s3.className = "tracker-step active";
    trackingStatusHeading.innerText = "Rider picked up the order!";
    showToast("Ramesh picked up your food on his bike!");
  }, 4500);

  setTimeout(() => {
    s3.className = "tracker-step completed";
    s4.className = "tracker-step completed";
    trackingStatusHeading.innerText = "Order Delivered! Enjoy 🎉";
    etaTimeDisplay.innerText = "0";
    clearInterval(etaInterval);

    // Update status in previous orders
    const targetOrder = orderHistory.find(o => o.orderId === orderId);
    if (targetOrder) {
      targetOrder.status = 'Delivered';
      localStorage.setItem('eatsbook_orders', JSON.stringify(orderHistory));
      updateOrdersBadge();
    }

    showToast("Order Delivered! Thank you for ordering on Eats Book!");
  }, 9000);
}

closeTrackerBtn.addEventListener('click', () => {
  trackerModal.classList.remove('open');
});

// =========================================
// 11. TOAST NOTIFIER
// =========================================
let toastTimeout;
function showToast(message) {
  toastMsg.innerText = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Initial Boot
updateAuthUI();
updateOrdersBadge();
renderRestaurants();
renderMenu();
updateCartUI();
