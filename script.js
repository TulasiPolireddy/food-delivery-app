// =========================================
// 1. MENU DATA
// =========================================
const menuData = [
  {
    id: 1,
    title: "Smoky Bacon Cheeseburger",
    category: "Burger",
    price: 9.99,
    rating: 4.8,
    desc: "Angus beef patty with melted cheddar, smoked bacon & house BBQ sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80"
  },
  {
    id: 2,
    title: "Classic Pepperoni Pizza",
    category: "Pizza",
    price: 13.99,
    rating: 4.9,
    desc: "Hand-tossed dough with mozzarella cheese and spicy Italian pepperoni.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80"
  },
  {
    id: 3,
    title: "Spicy Ramen Bowl",
    category: "Asian",
    price: 11.50,
    rating: 4.7,
    desc: "Authentic pork broth, soft egg, scallions, nori, and wavy noodles.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=80"
  },
  {
    id: 4,
    title: "Truffle Mushroom Burger",
    category: "Burger",
    price: 10.99,
    rating: 4.6,
    desc: "Sautéed mushrooms, swiss cheese, truffle aioli & crispy lettuce.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80"
  },
  {
    id: 5,
    title: "Margherita Supreme Pizza",
    category: "Pizza",
    price: 12.00,
    rating: 4.5,
    desc: "Fresh basil, sliced Roma tomatoes, extra virgin olive oil & fresh mozzarella.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80"
  },
  {
    id: 6,
    title: "Japanese Salmon Teriyaki",
    category: "Asian",
    price: 14.25,
    rating: 4.9,
    desc: "Glazed wild salmon with steamed Jasmine rice and sautéed broccoli.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80"
  },
  {
    id: 7,
    title: "Choco Molten Lava Cake",
    category: "Dessert",
    price: 6.50,
    rating: 4.9,
    desc: "Rich dark chocolate cake with a warm flowing molten center.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80"
  },
  {
    id: 8,
    title: "Iced Berry Lemonade",
    category: "Drinks",
    price: 4.00,
    rating: 4.4,
    desc: "Refreshing homemade lemonade infused with crushed raspberries.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&q=80"
  }
];

// =========================================
// 2. APP STATE & CONSTANTS
// =========================================
let cart = JSON.parse(localStorage.getItem('cravebite_cart')) || [];
let appliedDiscount = 0;
const DELIVERY_FEE = 2.99;

// =========================================
// 3. DOM ELEMENTS
// =========================================
const foodGrid = document.getElementById('foodGrid');
const categoryContainer = document.getElementById('categoryContainer');
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
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

// =========================================
// 4. RENDER MENU ITEMS
// =========================================
function renderMenu(items) {
  if (items.length === 0) {
    foodGrid.innerHTML = `
      <p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem;">
        No food items found matching your search.
      </p>
    `;
    return;
  }

  foodGrid.innerHTML = items.map(item => `
    <div class="food-card">
      <div class="food-img-wrapper">
        <img src="${item.image}" alt="${item.title}" class="food-img" loading="lazy" />
        <div class="badge-rating"><i class="fa-solid fa-star"></i> ${item.rating}</div>
      </div>
      <div class="food-info">
        <span class="food-category">${item.category}</span>
        <h3 class="food-title">${item.title}</h3>
        <p class="food-desc">${item.desc}</p>
        <div class="food-footer">
          <span class="food-price">$${item.price.toFixed(2)}</span>
          <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
            <i class="fa-solid fa-plus"></i> Add
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// =========================================
// 5. CART OPERATIONS
// =========================================
function saveCart() {
  localStorage.setItem('cravebite_cart', JSON.stringify(cart));
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
    cartItemsContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); margin-top: 3rem;">Your cart is empty 🍕</div>`;
    subtotalPrice.innerText = `$0.00`;
    totalPrice.innerText = `$0.00`;
    discountRow.style.display = 'none';
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" class="cart-item-img" alt="${item.title}" />
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.title}</h4>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
          <span class="qty-number">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discount = subtotal * appliedDiscount;
  const finalTotal = subtotal - discount + DELIVERY_FEE;

  subtotalPrice.innerText = `$${subtotal.toFixed(2)}`;
  if (appliedDiscount > 0) {
    discountRow.style.display = 'flex';
    discountPrice.innerText = `-$${discount.toFixed(2)}`;
  } else {
    discountRow.style.display = 'none';
  }
  totalPrice.innerText = `$${finalTotal.toFixed(2)}`;
}

// =========================================
// 6. PROMO CODE LOGIC
// =========================================
applyCouponBtn.addEventListener('click', () => {
  const code = couponInput.value.trim().toUpperCase();
  if (code === "TASTY20") {
    appliedDiscount = 0.20; // 20% discount
    showToast("Promo applied: 20% OFF!");
    updateCartUI();
  } else {
    showToast("Invalid Coupon Code.");
  }
});

// =========================================
// 7. CATEGORY FILTER & SEARCH
// =========================================
categoryContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.category-pill');
  if (!btn) return;

  document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const category = btn.dataset.category;
  if (category === 'all') {
    renderMenu(menuData);
  } else {
    const filtered = menuData.filter(i => i.category === category);
    renderMenu(filtered);
  }
});

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  const filtered = menuData.filter(i => 
    i.title.toLowerCase().includes(query) || 
    i.desc.toLowerCase().includes(query) ||
    i.category.toLowerCase().includes(query)
  );
  renderMenu(filtered);
});

// =========================================
// 8. CART DRAWER TOGGLE
// =========================================
function toggleCart(open) {
  if (open) {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
  } else {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
  }
}

openCartBtn.addEventListener('click', () => toggleCart(true));
closeCartBtn.addEventListener('click', () => toggleCart(false));
cartOverlay.addEventListener('click', () => toggleCart(false));

// =========================================
// 9. CHECKOUT & LIVE ORDER SIMULATION
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
  
  // Clear Cart
  cart = [];
  appliedDiscount = 0;
  saveCart();
  checkoutForm.reset();

  // Show live tracker
  document.getElementById('orderIdDisplay').innerText = `Order #CB-${Math.floor(10000 + Math.random() * 90000)}`;
  trackerModal.classList.add('open');
  simulateDeliveryProgress();
});

function simulateDeliveryProgress() {
  const s1 = document.getElementById('step1');
  const s2 = document.getElementById('step2');
  const s3 = document.getElementById('step3');
  const s4 = document.getElementById('step4');

  s1.className = "tracker-step completed";
  s2.className = "tracker-step active";
  s3.className = "tracker-step";
  s4.className = "tracker-step";

  // Simulating step transitions
  setTimeout(() => {
    s2.className = "tracker-step completed";
    s3.className = "tracker-step active";
  }, 4000);

  setTimeout(() => {
    s3.className = "tracker-step completed";
    s4.className = "tracker-step completed";
  }, 8000);
}

closeTrackerBtn.addEventListener('click', () => {
  trackerModal.classList.remove('open');
});

// =========================================
// 10. TOAST NOTIFICATIONS
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
renderMenu(menuData);
updateCartUI();
