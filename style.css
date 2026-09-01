/* =========================================
   VARIABLES & THEME
   ========================================= */
:root {
  --primary: #d9381e;
  --primary-hover: #b82b13;
  --primary-light: #fff0ed;
  --secondary: #1a1e21;
  --accent: #ff9f1c;
  --bg: #f4f6f8;
  --card-bg: #ffffff;
  --text: #2d3436;
  --text-muted: #636e72;
  --border: #e2e8f0;
  --success: #00b894;
  --veg-color: #2e7d32;
  --nonveg-color: #c62828;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 6px 20px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 16px 36px rgba(0, 0, 0, 0.14);
  --transition: all 0.25s ease-in-out;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

body {
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.5;
  overflow-x: hidden;
}

/* =========================================
   NAVBAR
   ========================================= */
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.9rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-box {
  flex: 1;
  max-width: 480px;
  position: relative;
}

.search-box input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.6rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: #f1f3f5;
  font-size: 0.92rem;
  outline: none;
  transition: var(--transition);
}

.search-box input:focus {
  background: #fff;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(217, 56, 30, 0.12);
}

.search-box i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
}

.cart-btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.65rem 1.25rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
}

.cart-btn:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
}

.cart-badge {
  background: white;
  color: var(--primary);
  font-size: 0.75rem;
  padding: 0.1rem 0.5rem;
  border-radius: 50%;
  font-weight: 800;
}

/* =========================================
   RESTAURANT DETAILS CARD
   ========================================= */
.restaurant-section {
  max-width: 1200px;
  margin: 1.5rem auto;
  padding: 0 1.5rem;
}

.restaurant-banner {
  position: relative;
  min-height: 240px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  box-shadow: var(--shadow-md);
}

.banner-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.restaurant-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%);
}

.restaurant-header-content {
  position: relative;
  z-index: 2;
  color: white;
  padding: 2rem;
  width: 100%;
}

.restaurant-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.restaurant-name {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}

.restaurant-cuisine {
  font-size: 0.95rem;
  opacity: 0.9;
  margin-bottom: 1rem;
}

.restaurant-meta-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}

.meta-item {
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.rating-chip {
  background: #2e7d32;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-sm);
}

.promo-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #ffa502;
  color: #1a1e21;
  padding: 0.35rem 0.8rem;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 0.82rem;
}

/* =========================================
   CATEGORIES & FILTER
   ========================================= */
.categories-wrapper {
  max-width: 1200px;
  margin: 1.5rem auto 0;
  padding: 0 1.5rem;
}

.category-header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 1.35rem;
  font-weight: 800;
}

.filter-toggle {
  background: white;
  border: 1px solid var(--border);
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius-lg);
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
}

.filter-toggle.active {
  background: #e8f5e9;
  border-color: var(--veg-color);
  color: var(--veg-color);
}

.categories-list {
  display: flex;
  gap: 0.65rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  scrollbar-width: none;
}

.categories-list::-webkit-scrollbar {
  display: none;
}

.category-pill {
  background: var(--card-bg);
  border: 1px solid var(--border);
  padding: 0.55rem 1.1rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 0.88rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  transition: var(--transition);
}

.category-pill.active, .category-pill:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

/* =========================================
   FOOD GRID & CARDS
   ========================================= */
.food-section {
  max-width: 1200px;
  margin: 1.5rem auto 4rem;
  padding: 0 1.5rem;
}

.food-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1.5rem;
}

.food-card {
  background: var(--card-bg);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.food-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.food-img-wrapper {
  position: relative;
  width: 100%;
  height: 185px;
  overflow: hidden;
}

.food-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.food-card:hover .food-img {
  transform: scale(1.05);
}

.diet-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.food-type-icon {
  width: 14px;
  height: 14px;
  border: 2px solid;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
}

.food-type-icon::after {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.food-type-icon.veg {
  border-color: var(--veg-color);
}
.food-type-icon.veg::after {
  background: var(--veg-color);
}

.food-type-icon.non-veg {
  border-color: var(--nonveg-color);
}
.food-type-icon.non-veg::after {
  background: var(--nonveg-color);
}

.food-rating-chip {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.95);
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text);
}

.food-info {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.food-category {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  font-weight: 700;
}

.food-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0.2rem 0 0.35rem;
}

.food-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
  flex: 1;
}

.food-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.food-price {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--primary);
}

.add-to-cart-btn {
  background: var(--primary-light);
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.45rem 1rem;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: var(--transition);
}

.add-to-cart-btn:hover {
  background: var(--primary);
  color: white;
}

/* =========================================
   CART DRAWER
   ========================================= */
.cart-drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
}

.cart-drawer-overlay.open {
  opacity: 1;
  visibility: visible;
}

.cart-drawer {
  position: fixed;
  top: 0;
  right: -440px;
  width: 100%;
  max-width: 420px;
  height: 100%;
  background: var(--card-bg);
  z-index: 999;
  box-shadow: var(--shadow-lg);
  transition: right 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
}

.cart-drawer.open {
  right: 0;
}

.cart-header {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-cart-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text-muted);
}

.cart-items-list {
  flex: 1;
  overflow-y: auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.cart-item {
  display: flex;
  gap: 0.9rem;
  align-items: center;
  background: var(--bg);
  padding: 0.75rem;
  border-radius: var(--radius-sm);
}

.cart-item-img {
  width: 60px;
  height: 60px;
  border-radius: var(--radius-sm);
  object-fit: cover;
}

.cart-item-details {
  flex: 1;
}

.cart-item-title {
  font-size: 0.9rem;
  font-weight: 700;
}

.cart-item-price {
  font-size: 0.85rem;
  color: var(--primary);
  font-weight: 700;
}

.qty-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.35rem;
}

.qty-btn {
  width: 24px;
  height: 24px;
  background: white;
  border: 1px solid var(--border);
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.cart-summary {
  padding: 1.25rem 1.5rem;
  border-top: 1px solid var(--border);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.45rem;
  font-size: 0.88rem;
  color: var(--text-muted);
}

.summary-total {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text);
  border-top: 1px solid var(--border);
  padding-top: 0.75rem;
  margin-top: 0.6rem;
}

.coupon-box {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.coupon-box input {
  flex: 1;
  padding: 0.55rem 0.75rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  text-transform: uppercase;
  font-size: 0.85rem;
}

.coupon-box button {
  background: var(--secondary);
  color: white;
  border: none;
  padding: 0 1rem;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  cursor: pointer;
}

.checkout-btn {
  width: 100%;
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.9rem;
  border-radius: var(--radius-md);
  font-weight: 700;
  font-size: 0.98rem;
  cursor: pointer;
  transition: var(--transition);
}

.checkout-btn:hover {
  background: var(--primary-hover);
}

/* =========================================
   MODALS
   ========================================= */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  padding: 1.5rem;
}

.modal-overlay.open {
  opacity: 1;
  visibility: visible;
}

.modal {
  background: white;
  border-radius: var(--radius-md);
  width: 100%;
  max-width: 480px;
  padding: 1.8rem;
  transform: scale(0.95);
  transition: var(--transition);
  max-height: 90vh;
  overflow-y: auto;
}

.modal-overlay.open .modal {
  transform: scale(1);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
}

.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 0.65rem 0.85rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  outline: none;
  font-size: 0.9rem;
}

.cancel-link {
  width: 100%;
  background: none;
  border: none;
  margin-top: 0.6rem;
  color: var(--text-muted);
  cursor: pointer;
  font-weight: 600;
}

/* =========================================
   DELIVERY TRACKING & PARTNER CARD
   ========================================= */
.tracking-modal {
  max-width: 520px;
}

.tracking-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border);
  padding-bottom: 1rem;
  margin-bottom: 1.25rem;
}

.live-pulse {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 0 3px rgba(0, 184, 148, 0.3);
  margin-right: 4px;
}

.order-id-label {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.eta-box {
  background: var(--primary-light);
  border: 1px solid rgba(217, 56, 30, 0.2);
  padding: 0.4rem 0.8rem;
  border-radius: var(--radius-md);
  text-align: center;
}

.eta-time {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--primary);
  display: block;
  line-height: 1.1;
}

.eta-unit {
  font-size: 0.65rem;
  font-weight: 800;
  color: var(--primary);
}

/* Delivery Partner Card */
.driver-card {
  background: #f8f9fa;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.driver-photo {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--success);
}

.driver-info {
  flex: 1;
}

.driver-name-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.driver-name-row h4 {
  font-size: 0.95rem;
  font-weight: 700;
}

.driver-rating {
  background: #2e7d32;
  color: white;
  font-size: 0.72rem;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-weight: 700;
}

.driver-vehicle {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin: 0.15rem 0;
}

.driver-tag {
  font-size: 0.72rem;
  color: var(--success);
  font-weight: 700;
}

.driver-call-btn {
  width: 42px;
  height: 42px;
  background: var(--success);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.1rem;
  transition: var(--transition);
}

.driver-call-btn:hover {
  transform: scale(1.08);
}

/* Tracking Step Visualizer */
.tracker-steps {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.tracker-step {
  display: flex;
  align-items: center;
  gap: 0.9rem;
}

.step-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--border);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.tracker-step.completed .step-icon {
  background: var(--success);
  color: white;
}

.tracker-step.active .step-icon {
  background: var(--primary);
  color: white;
  box-shadow: 0 0 0 4px rgba(217, 56, 30, 0.2);
}

.step-text h4 {
  font-size: 0.92rem;
}

.step-text p {
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* Toast */
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: var(--secondary);
  color: white;
  padding: 0.85rem 1.25rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  font-size: 0.88rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transform: translateY(100px);
  opacity: 0;
  transition: var(--transition);
  z-index: 1100;
}

.toast.show {
  transform: translateY(0);
  opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    flex-wrap: wrap;
  }
  .search-box {
    order: 3;
    max-width: 100%;
    width: 100%;
  }
  .restaurant-header-content {
    padding: 1.25rem;
  }
  .restaurant-name {
    font-size: 1.4rem;
  }
}
