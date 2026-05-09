/**
 * L'Artiste Café - Premium Vanilla Script
 */

// --- DATA ---
const MENU_DATA = [
    {
        id: 1,
        name: "Latte de Lavanda",
        category: "coffee",
        price: 5500,
        description: "Expresso de especialidad infusionado con flores de lavanda orgánica.",
        image: "assets/images/products/coffee/Latte de lavanda.jpg",
        tags: ["Floral", "Bestseller"]
    },
    {
        id: 2,
        name: "Kyoto Cold Brew",
        category: "coffee",
        price: 6200,
        description: "Cold brew de 12 horas con notas cítricas y miel.",
        image: "assets/images/products/coffee/Kyoto Cold brew.jpg",
        tags: ["Frío", "Premium"]
    },
    {
        id: 3,
        name: "Earl Grey Royal",
        category: "tea",
        price: 4800,
        description: "Té negro premium con bergamota de Calabria y pétalos de aciano.",
        image: "assets/images/products/tea/Earlye grey royal te.webp",
        tags: ["Elegante"]
    },
    {
        id: 4,
        name: "Frappé de Avellana",
        category: "frappe",
        price: 6800,
        description: "Crema de avellanas tostadas, cacao puro y hielo triturado.",
        image: "assets/images/products/frappe/Frappe de avellana.webp",
        tags: ["Nuevo"]
    },
    {
        id: 5,
        name: "Croissant de Almendras",
        category: "pastry",
        price: 4500,
        description: "Hojaldre artesanal francés con crema de almendras y aroma de azahar.",
        image: "assets/images/products/pastry/Croisant de almendra.jpeg",
        tags: ["Artesanal"]
    },
    {
        id: 6,
        name: "Flat White Velvet",
        category: "coffee",
        price: 5000,
        description: "Doble shot de expresso con leche micro-cremada sedosa.",
        image: "assets/images/products/coffee/Flat white velvet.jpeg",
        tags: ["Clásico"]
    },
    {
        id: 7,
        name: "Medialuna de Manteca",
        category: "pastry",
        price: 2500,
        description: "Clásica medialuna de manteca, suave y almibarada.",
        image: "assets/images/products/pastry/Media luna de manteca.jpg",
        tags: ["Clásico"]
    },
    {
        id: 8,
        name: "Rollo de Canela",
        category: "pastry",
        price: 4000,
        description: "Esponjoso rollo de canela con glaseado de queso crema.",
        image: "assets/images/products/pastry/Rollos de canela.webp",
        tags: ["Dulce"]
    },
    {
        id: 9,
        name: "Brownie Artesanal",
        category: "pastry",
        price: 3800,
        description: "Brownie húmedo de chocolate semi-amargo con nueces.",
        image: "assets/images/products/pastry/Brownie.jpeg",
        tags: ["Intenso"]
    },
    {
        id: 10,
        name: "Frappé de Oreo",
        category: "frappe",
        price: 6500,
        description: "Frappé cremoso con galletas Oreo trituradas y crema batida.",
        image: "assets/images/products/frappe/Frappe de oreo.jpeg",
        tags: ["Dulce"]
    },
    {
        id: 11,
        name: "Infusión de Manzanilla",
        category: "tea",
        price: 3500,
        description: "Infusión relajante de flores de manzanilla naturales.",
        image: "assets/images/products/tea/INfusion de manzanilla.webp",
        tags: ["Suave"]
    },
    {
        id: 12,
        name: "Té Verde Sencha",
        category: "tea",
        price: 4200,
        description: "Té verde japonés tradicional con notas herbáceas.",
        image: "assets/images/products/tea/Te verde.jpg",
        tags: ["Detox"]
    }
];

const GALLERY_DATA = [
    "assets/images/gallery/Coffee_shop_exterior_interior_202605091452.jpeg",
    "assets/images/gallery/Coffee_shop_interior_Buenos_Aires_202605091454.jpeg",
    "assets/images/gallery/Gemini_Generated_Image_ba408pba408pba40.png",
    "assets/images/gallery/Gemini_Generated_Image_v0h59lv0h59lv0h5.png",
    "assets/images/gallery/Gemini_Generated_Image_2uwvqi2uwvqi2uwv.png",
    "assets/images/gallery/Gemini_Generated_Image_k9tujzk9tujzk9tu.png",
    "assets/images/gallery/Gemini_Generated_Image_oq6cygoq6cygoq6c.png",
    "assets/images/gallery/Gemini_Generated_Image_rdalu1rdalu1rdal.png"
];

// --- APP STATE ---
let cart = [];
let currentSlide = 0;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initSlideshow();
    initNavbar();
    initMenu();
    initFeatured();
    initGallery();
    initAnimations();
    initStats();
    initNewsletter();
});

// --- LOADER ---
function initLoader() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.transform = 'translateY(-100%)';
        document.body.style.overflow = 'visible';
    }, 2000);
}

// --- SLIDESHOW ---
function initSlideshow() {
    const slides = document.querySelectorAll('.hero-slideshow .slide');
    if (slides.length === 0) return;

    slides.forEach(slide => {
        if (slide.tagName === 'VIDEO') {
            slide.playbackRate = 0.7; // A little bit slower
        }
    });

    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 8000); // Cambia cada 8 segundos
    }
}

// --- NAVBAR ---
function initNavbar() {
    const nav = document.getElementById('navbar');
    const progressBar = document.getElementById('scroll-progress');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    window.addEventListener('scroll', () => {
        // Nav background
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        // Progress bar
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });


}

// --- MENU ---
function initMenu() {
    const grid = document.getElementById('menu-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderMenu(items) {
        grid.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card fade-in';
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy" referrerPolicy="no-referrer">
                </div>
                <div class="card-info">
                    <div class="card-tags">
                        ${item.tags.map(t => `<span class="tag ${t === 'Nuevo' ? 'tag-new' : t === 'Bestseller' ? 'tag-best' : ''}">${t}</span>`).join('')}
                    </div>
                    <h3 class="card-title">${item.name}</h3>
                    <p class="card-desc">${item.description}</p>
                    <div class="card-footer">
                        <span class="card-price">$ ${item.price.toLocaleString()}</span>
                        <button class="add-btn" onclick="addToCart(${item.id})">
                            <img src="assets/svgs/add-btn/icon.svg" alt="" class="btn-icon">
                            Añadir
                        </button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
        
        // Re-init scroll reveals for new items
        setTimeout(() => initAnimations(), 100);
    }

    renderMenu(MENU_DATA);

    // Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            const filtered = filter === 'all' ? MENU_DATA : MENU_DATA.filter(item => item.category === filter);
            renderMenu(filtered);
        });
    });


}

// --- FEATURED SLIDER ---
function initFeatured() {
    const slider = document.getElementById('featured-slider');
    const featuredItems = MENU_DATA.slice(0, 4);
    
    featuredItems.forEach(item => {
        const feat = document.createElement('div');
        feat.className = 'feat-item';
        feat.innerHTML = `
            <div class="feat-card glass-card-dark">
                <img src="${item.image}" alt="${item.name}" class="feat-img" loading="lazy">
                <div class="feat-content">
                    <span class="section-tag" style="color: var(--coffee-light);">Destacado</span>
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="card-footer">
                         <span class="card-price">$ ${item.price.toLocaleString()}</span>
                         <button class="btn btn-transparent-small" onclick="addToCart(${item.id})">
                             <img src="assets/svgs/add-btn/icon.svg" alt="" class="btn-icon">
                             Probar Ahora
                         </button>
                    </div>
                </div>
            </div>
        `;
        slider.appendChild(feat);
    });

    // Eliminamos clase si venía del marquee anterior
    slider.classList.remove('marquee-slider');

    let currentOffset = 0;
    
    function getOffsetWidth() {
        const firstItem = slider.querySelector('.feat-item');
        return firstItem ? firstItem.offsetWidth : window.innerWidth;
    }

    function moveSlider(direction) {
        const itemWidth = getOffsetWidth();
        const maxOffset = -(itemWidth * (featuredItems.length - 1));
        
        if (direction === 'next') {
            currentOffset = currentOffset <= maxOffset ? 0 : currentOffset - itemWidth;
        } else {
            currentOffset = currentOffset >= 0 ? maxOffset : currentOffset + itemWidth;
        }
        slider.style.transform = `translateX(${currentOffset}px)`;
    }

    document.getElementById('next-feat').addEventListener('click', () => moveSlider('next'));
    document.getElementById('prev-feat').addEventListener('click', () => moveSlider('prev'));

    window.addEventListener('resize', () => {
        currentOffset = 0;
        slider.style.transform = `translateX(0)`;
    });
}

// --- GALLERY ---
function initGallery() {
    const gallery = document.querySelector('.gallery-grid');
    GALLERY_DATA.forEach(img => {
        const item = document.createElement('div');
        item.className = 'gallery-item fade-in';
        item.innerHTML = `
            <img src="${img}" alt="Cafe Gallery" loading="lazy">
            <div class="gallery-overlay">
                <span>Pinterest Vibes</span>
            </div>
        `;
        gallery.appendChild(item);
    });
}

// --- CART LOGIC ---
window.addToCart = (id) => {
    const product = MENU_DATA.find(p => p.id === id);
    const existing = cart.find(item => item.product.id === id);
    
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }
    
    updateCartUI();
};

function updateCartUI() {
    const list = document.getElementById('cart-modal-items');
    const total = document.getElementById('cart-modal-total-price');
    const floatBtn = document.getElementById('floating-cart-btn');
    const floatCount = document.getElementById('floating-cart-count');
    
    let totalItems = 0;
    let sum = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        sum += item.product.price * item.quantity;
    });
    
    if (floatCount) floatCount.innerText = totalItems;
    
    if (floatBtn) {
        if (totalItems > 0) {
            floatBtn.classList.add('visible');
        } else {
            floatBtn.classList.remove('visible');
        }
    }
    
    if (cart.length === 0) {
        if(list) list.innerHTML = '<p class="empty-msg" style="text-align:center; padding: 2rem; opacity: 0.5;">Tu carrito está vacío.</p>';
        if(total) total.innerText = '$ 0';
        return;
    }

    if(list) {
        list.innerHTML = '';
        cart.forEach((item, index) => {
            const subtotal = item.product.price * item.quantity;
            const div = document.createElement('div');
            div.className = 'cart-modal-item fade-in visible';
            div.innerHTML = `
                <img src="${item.product.image}" alt="${item.product.name}">
                <div class="cart-item-info">
                    <h4>${item.product.name}</h4>
                    <p>$ ${item.product.price.toLocaleString()}</p>
                </div>
                <div class="cart-qty-controls">
                    <button class="cart-qty-btn" onclick="updateQty(${index}, -1)">-</button>
                    <span class="cart-qty">${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="updateQty(${index}, 1)">+</button>
                </div>
                <div style="font-weight: 700; font-size: 1rem; margin-left: 0.5rem; min-width: 70px; text-align: right; color: var(--black);">
                    $ ${subtotal.toLocaleString()}
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Eliminar">
                    ×
                </button>
            `;
            list.appendChild(div);
        });
    }

    if(total) total.innerText = '$ ' + sum.toLocaleString();
}

window.updateQty = (index, delta) => {
    cart[index].quantity += delta;
    if(cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
};

window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartUI();
};

// Toggle Modal & WhatsApp
document.addEventListener('DOMContentLoaded', () => {
    const floatBtn = document.getElementById('floating-cart-btn');
    const modalOverlay = document.getElementById('cart-modal-overlay');
    const closeBtn = document.getElementById('close-cart-modal');
    const waBtn = document.getElementById('btn-whatsapp-order');

    if(floatBtn) {
        floatBtn.addEventListener('click', () => {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    if(modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if(e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    if(waBtn) {
        waBtn.addEventListener('click', () => {
            if(cart.length === 0) return;
            
            const tableNum = document.getElementById('table-number').value;
            if(!tableNum) {
                showToast('Por favor, indica tu número de mesa');
                return;
            }

            let msg = "*Nuevo Pedido - L'Artiste Café* ☕\n\n";
            msg += `📍 *Mesa:* ${tableNum}\n\n`;
            let sum = 0;
            
            cart.forEach(item => {
                const subtotal = item.product.price * item.quantity;
                sum += subtotal;
                msg += `▪ *${item.quantity}x* ${item.product.name} - $ ${subtotal.toLocaleString()}\n`;
            });
            
            msg += `\n*Total Final: $ ${sum.toLocaleString()}*\n\n`;
            msg += `¡Hola! Me gustaría confirmar este pedido.`;
            
            const whatsappUrl = `https://wa.me/541172023171?text=${encodeURIComponent(msg)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});

// --- ANIMATIONS & INTERSECTION OBSERVER ---
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .section-title, .stat-card').forEach(el => observer.observe(el));
}

// --- STATS COUNTER ---
function initStats() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                let count = 0;
                const increment = target / 50;
                const updateCount = () => {
                    if (count < target) {
                        count += increment;
                        entry.target.innerText = Math.ceil(count);
                        setTimeout(updateCount, 40);
                    } else {
                        entry.target.innerText = target + (target > 100 ? '+' : '');
                    }
                };
                updateCount();
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
}

// --- NEWSLETTER & TOAST ---
function initNewsletter() {
    const form = document.getElementById('newsletter-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('¡Te has unido con éxito!');
        form.reset();
    });
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '2rem';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    toast.style.background = 'var(--coffee-dark)';
    toast.style.color = 'white';
    toast.style.padding = '1rem 2rem';
    toast.style.borderRadius = '2px';
    toast.style.zIndex = '10000';
    toast.style.opacity = '0';
    toast.style.transition = 'all 0.4s ease';
    toast.innerText = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    }, 100);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}
