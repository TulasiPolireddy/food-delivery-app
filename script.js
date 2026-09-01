// =========================================
// 1. COMPREHENSIVE MENU DATA (South Indian + Global)
// =========================================
const menuData = [
  // --- South Indian Specialties ---
  {
    id: 1,
    title: "Ghee Roast Masala Dosa",
    category: "South Indian",
    price: 130,
    rating: 4.9,
    isVeg: true,
    desc: "Crispy golden crepe roasted in pure desi ghee, filled with spiced potato masala. Served with 3 chutneys & sambar.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&q=80"
  },
  {
    id: 2,
    title: "Ghee Podi Thatte Idli (2 Pcs)",
    category: "South Indian",
    price: 95,
    rating: 4.8,
    isVeg: true,
    desc: "Steamed fluffy disk idlis generously smeared with spicy gun powder (podi) and hot melted ghee.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&q=80"
  },
  {
    id: 3,
    title: "Crispy Medu Vada (2 Pcs)",
    category: "South Indian",
    price: 80,
    rating: 4.7,
    isVeg: true,
    desc: "Golden fried crispy lentil donuts flavored with crushed peppercorns, ginger, and curry leaves.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&q=80"
  },
  {
    id: 4,
    title: "Onion Rava Masala Dosa",
    category: "South Indian",
    price: 145,
    rating: 4.6,
    isVeg: true,
    desc: "Crispy semolina crepe studded with diced onions, green chillies, and cumin seeds.",
    image: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=500&q=80"
  },
  {
    id: 5,
    title: "Hyderabadi Chicken Dum Biryani",
    category: "Biryani",
    price: 280,
    rating: 4.9,
    isVeg: false,
    desc: "Long grain basmati rice slow cooked on dum with marinated tender chicken, saffron, and aromatic spices. Served with Mirchi ka Salan & Raita.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80"
  },
  {
    id: 6,
    title: "Chettinad Spicy Chicken Curry",
    category: "Starters",
    price: 260,
    rating: 4.8,
    isVeg: false,
    desc: "Fiery Tamil-style chicken prepared with freshly roasted coconut, star anise, black pepper, and curry leaves.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80"
  },
  {
    id: 7,
    title: "Malabar Parotta with Veg Kurma",
    category: "South Indian",
    price: 160,
    rating: 4.7,
    isVeg: true,
    desc: "2 flaky layered Kerala parottas paired with rich coconut-based mixed vegetable kurma.",
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=500&q=80"
  },
  {
    id: 8,
    title: "Traditional Filter Kaapi",
    category: "Beverages",
    price: 45,
    rating: 4.9,
    isVeg: true,
    desc: "Authentic South Indian chicory blend coffee frothed in traditional brass davarah and tumbler.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&q=80"
  },
  {
    id: 9,
    title: "Melt-in-Mouth Mysore Pak (4 Pcs)",
    category: "Desserts",
    price: 110,
    rating: 4.9,
    isVeg: true,
    desc: "Royal sweet prepared from gram flour, sugar syrup, and generous pure desi ghee.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80"
  },

  // --- Global / Fast Bites ---
  {
    id: 10,
    title: "Smoky Bacon & Cheddar Burger",
    category: "Burgers & Pizzas",
    price: 249,
    rating: 4.7,
    isVeg: false,
    desc: "Juicy grilled patty topped with melted cheddar cheese, smoky BBQ sauce & crisp lettuce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80"
  },
  {
    id: 11,
    title: "Classic Margherita Supreme Pizza",
    category: "Burgers & Pizzas",
    price: 299,
    rating: 4.6,
    isVeg: true,
    desc: "Hand-stretched sourdough pizza with San Marzano tomato sauce, fresh basil, and bocconcini mozzarella.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80"
  },
  {
    id: 12,
    title: "Tender Coconut Payasam",
    category: "Desserts",
    price: 120,
    rating: 4.8,
    isVeg: true,
    desc: "Creamy dessert made of tender coconut pulp, condensed milk, cardamom, and roasted cashews.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80"
  }
];

// =========================================
// 2. STATE & CONSTANTS
// =========================================
let cart = JSON.parse(localStorage.getItem('dakshin_cart')) || [];
let appliedDiscount = 0;
let vegOnlyFilter = false;
let activeCategory = 'all';
const DELIVERY_FEE = 35.00;

// Delivery Driver Profile Data
const driverProfiles = [
  {
    name: "Ramesh Kumar",
    phone: "+919876543210",
    rating: "4.9",
    plate: "KA-05-EQ-7712",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80"
  },
  {
    name: "Suresh Gowda",
    phone: "+919811223344",
    rating: "4.8",
    plate: "KA-01-MJ-3390",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
  }
];

// =========================================
// 3. DOM ELEMENTS
// =========================================
const foodGrid = document.getElementById('foodGrid');
const categoryContainer = document.getElementById('categoryContainer');
const vegOnlyToggle = document.getElementById('vegOnlyToggle');
const searchInput = document.getElementById('searchInput');

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
// 4. RENDER MENU WITH VEG / NON-VEG TAGS
// =========================================
function renderMenu() {
  const searchQuery = searchInput.value.toLowerCase().trim();

  const filtered = menuData.filter(item => {
    const matchesCategory = (activeCategory === 'all') || (item.category === activeCategory);
    const matchesSearch = item.title.toLowerCase().includes(searchQuery) || item.desc.toLowerCase().includes(searchQuery);
    const matchesVeg = vegOnlyFilter ? item.isVeg : true;
    return matchesCategory && matchesSearch && matchesVeg;
  });

  if (filtered.length === 0) {
    foodGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">
        <i class="fa-solid fa-utensils" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
        <p>No delicious dishes found matching your selection.</p>
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
        <div class="food-rating-chip"><i class="fa-solid fa-star" style="color: #ffa502;"></i> ${item.rating}</div>
      </div>
      <div class="food-info">
        <span class="food-category">${item.category}</span>
        <h3 class="food-title">${item.title}</h3>
        <p class="food-desc">${item.desc}</p>
        <div class="food-footer">
          <span class="food-price">₹${item.price}</span>
          <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
            + ADD
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// =========================================
// 5. CART MANAGEMENT
// =========================================
function saveCart() {
  localStorage.setItem('dakshin_cart', JSON.stringify(cart));
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
  showToast(`Added "${product.title}" to cart!`);
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
    cartItemsContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); margin-top: 3rem;">Your cart is empty 🥣<br><small>Add some hot dosa or biryani!</small></div>`;
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
          <span style="font-size:0.85rem; font-weight:700;">${item.qty}</span>
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

// Promo code logic
applyCouponBtn.addEventListener('click', () => {
  const code = couponInput.value.trim().toUpperCase();
  if (code === "DAKSHIN20") {
    appliedDiscount = 0.20;
    showToast("20% Discount Coupon Applied!");
    updateCartUI();
  } else {
    showToast("Invalid Coupon Code");
  }
});

// =========================================
// 6. FILTERS & SEARCH
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

// =========================================
// 7. CART DRAWER TOGGLE
// =========================================
function toggleCart(open) {
  cartDrawer.classList.toggle('open', open);
  cartOverlay.classList.toggle('open', open);
}

openCartBtn.addEventListener('click', () => toggleCart(true));
closeCartBtn.addEventListener('click', () => toggleCart(false));
cartOverlay.addEventListener('click', () => toggleCart(false));

// =========================================
// 8. CHECKOUT & LIVE ORDER SIMULATION WITH DRIVER
// =========================================
openCheckoutModalBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    showToast("Your cart is empty!");
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

  // Assign random driver
  const assignedDriver = driverProfiles[Math.floor(Math.random() * driverProfiles.length)];
  document.getElementById('driverName').innerText = assignedDriver.name;
  document.getElementById('driverPlate').innerText = assignedDriver.plate;
  document.getElementById('driverPhoto').src = assignedDriver.photo;
  document.getElementById('callDriverBtn').href = `tel:${assignedDriver.phone}`;

  // Clear Cart
  cart = [];
  appliedDiscount = 0;
  saveCart();
  checkoutForm.reset();

  // Show live tracker
  document.getElementById('orderIdDisplay').innerText = `Order #DK-${Math.floor(10000 + Math.random() * 90000)}`;
  trackerModal.classList.add('open');
  simulateDeliveryProgress();
});

// Dynamic live progress countdown
let etaInterval;
function simulateDeliveryProgress() {
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
  trackingStatusHeading.innerText = "Chef is preparing your meal!";

  clearInterval(etaInterval);
  etaInterval = setInterval(() => {
    if (eta > 2) eta -= 1;
    etaTimeDisplay.innerText = eta;
  }, 2000);

  // Step 3: Out for delivery at 4s
  setTimeout(() => {
    s2.className = "tracker-step completed";
    s3.className = "tracker-step active";
    trackingStatusHeading.innerText = "Rider picked up order!";
    showToast("Ramesh has picked up your food on his bike!");
  }, 4500);

  // Step 4: Delivered at 9s
  setTimeout(() => {
    s3.className = "tracker-step completed";
    s4.className = "tracker-step completed";
    trackingStatusHeading.innerText = "Order Delivered! Enjoy 🎉";
    etaTimeDisplay.innerText = "0";
    clearInterval(etaInterval);
    showToast("Order delivered successfully!");
  }, 9000);
}

closeTrackerBtn.addEventListener('click', () => {
  trackerModal.classList.remove('open');
});

// =========================================
// 9. TOAST NOTIFICATIONS
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
renderMenu();
updateCartUI();
