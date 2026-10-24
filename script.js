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
        image: "assets/images/products/coffee/latte-de-lavanda.jpg",
        tags: ["Floral", "Bestseller"]
    },
    {
        id: 2,
        name: "Kyoto Cold Brew",
        category: "coffee",
        price: 6200,
        description: "Cold brew de 12 horas con notas cítricas y miel.",
        image: "assets/images/products/coffee/kyoto-cold-brew.jpg",
        tags: ["Frío", "Premium"]
    },
    {
        id: 3,
        name: "Earl Grey Royal",
        category: "tea",
        price: 4800,
        description: "Té negro premium con bergamota de Calabria y pétalos de aciano.",
        image: "assets/images/products/tea/earlye-grey-royal-te.webp",
        tags: ["Elegante"]
    },
    {
        id: 4,
        name: "Frappé de Avellana",
        category: "frappe",
        price: 6800,
        description: "Crema de avellanas tostadas, cacao puro y hielo triturado.",
        image: "assets/images/products/frappe/frappe-de-avellana.webp",
        tags: ["Nuevo"]
    },
    {
        id: 5,
        name: "Croissant de Almendras",
        category: "pastry",
        price: 4500,
        description: "Hojaldre artesanal francés con crema de almendras y aroma de azahar.",
        image: "assets/images/products/pastry/croisant-de-almendra.jpeg",
        tags: ["Artesanal"]
    },
    {
        id: 6,
        name: "Flat White Velvet",
        category: "coffee",
        price: 5000,
        description: "Doble shot de expresso con leche micro-cremada sedosa.",
        image: "assets/images/products/coffee/flat-white-velvet.jpeg",
        tags: ["Clásico"]
    },
    {
        id: 7,
        name: "Medialuna de Manteca",
        category: "pastry",
        price: 2500,
        description: "Clásica medialuna de manteca, suave y almibarada.",
        image: "assets/images/products/pastry/media-luna-de-manteca.jpg",
        tags: ["Clásico"]
    },
    {
        id: 8,
        name: "Rollo de Canela",
        category: "pastry",
        price: 4000,
        description: "Esponjoso rollo de canela con glaseado de queso crema.",
        image: "assets/images/products/pastry/rollos-de-canela.webp",
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
        image: "assets/images/products/frappe/frappe-de-oreo.jpeg",
        tags: ["Dulce"]
    },
    {
        id: 11,
        name: "Infusión de Manzanilla",
        category: "tea",
        price: 3500,
        description: "Infusión relajante de flores de manzanilla naturales.",
        image: "assets/images/products/tea/infusion-de-manzanilla.webp",
        tags: ["Suave"]
    },
    {
        id: 12,
        name: "Té Verde Sencha",
        category: "tea",
        price: 4200,
        description: "Té verde japonés tradicional con notas herbáceas.",
        image: "assets/images/products/tea/te-verde.jpg",
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
function startApp() {
    try { initLoader(); } catch(e) { console.error('initLoader error:', e); }
    try { initSlideshow(); } catch(e) { console.error('initSlideshow error:', e); }
    try { initNavbar(); } catch(e) { console.error('initNavbar error:', e); }
    try { initMenu(); } catch(e) { console.error('initMenu error:', e); }
    try { initProduct3DCarousel(); } catch(e) { console.error('initProduct3DCarousel error:', e); }
    try { initGallery(); } catch(e) { console.error('initGallery error:', e); }
    try { initAnimations(); } catch(e) { console.error('initAnimations error:', e); }
    try { initTestimonialsCarousel(); } catch(e) { console.error('initTestimonialsCarousel error:', e); }
    try { initStats(); } catch(e) { console.error('initStats error:', e); }
    try { initNewsletter(); } catch(e) { console.error('initNewsletter error:', e); }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}

// --- LOADER ---
function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    setTimeout(() => {
        loader.style.transition = 'transform 1s cubic-bezier(0.77, 0, 0.175, 1)';
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
            slide.playbackRate = 0.7;
        }
    });

    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 8000);
    }
}

// --- NAVBAR ---
function initNavbar() {
    const nav = document.getElementById('navbar');
    const progressBar = document.getElementById('scroll-progress');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuBtn) menuBtn.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    window.addEventListener('scroll', () => {
        if (nav) {
            if (window.scrollY > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }

        if (progressBar) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        }
    });
}

// --- MENU ---
function initMenu() {
    const grid = document.getElementById('menu-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!grid) return;

    function renderMenu(items) {
        grid.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card fade-in';
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img src="${item.image}" alt="${item.name}" class="card-img" loading="lazy">
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

        setTimeout(() => initAnimations(), 100);
    }

    renderMenu(MENU_DATA);

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Centrar el tab seleccionado y asegurar visibilidad del siguiente
            btn.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });

            const filter = btn.dataset.filter;
            const filtered = filter === 'all' ? MENU_DATA : MENU_DATA.filter(item => item.category === filter);
            renderMenu(filtered);
        });
    });
}

// --- COMBOS & OFERTAS 3D CAROUSEL DATA ---
const COMBOS_DATA = [
    {
        id: 101,
        name: "Combo Ritual Matutino",
        badge: "Ahorrá 20%",
        oldPrice: 10000,
        price: 8000,
        description: "Latte de Lavanda o Flat White + Croissant de Almendras francés tibio recién horneado.",
        image: "assets/images/products/pastry/croisant-de-almendra.jpeg",
        tag: "Desayuno Premium"
    },
    {
        id: 102,
        name: "Dúo París & Kioto",
        badge: "Bestseller",
        oldPrice: 11200,
        price: 9200,
        description: "Kyoto Cold Brew infusionado 12 hs + Brownie artesanal de chocolate amargo con nuez.",
        image: "assets/images/products/coffee/kyoto-cold-brew.jpg",
        tag: "Maridaje Estrella"
    },
    {
        id: 103,
        name: "Hora del Té Real",
        badge: "Edición Limitada",
        oldPrice: 8800,
        price: 6900,
        description: "Earl Grey Royal de bergamota + Rollo de canela con glaseado sedoso de queso crema.",
        image: "assets/images/products/pastry/rollos-de-canela.webp",
        tag: "Té de la Tarde"
    },
    {
        id: 104,
        name: "Experiencia Sweet Frappé",
        badge: "Nuevo Combo",
        oldPrice: 9300,
        price: 7600,
        description: "Frappé cremoso de Oreo o Avellana + Clásica Medialuna de manteca almibarada.",
        image: "assets/images/products/frappe/frappe-de-oreo.jpeg",
        tag: "Placer Dulce"
    },
    {
        id: 105,
        name: "Trilogía de Degustación",
        badge: "Oferta Exclusiva",
        oldPrice: 13500,
        price: 10500,
        description: "Flat White Velvet + Degustación de Brownie intenso y Croissant de hojaldre.",
        image: "assets/images/products/coffee/flat-white-velvet.jpeg",
        tag: "Para Compartir"
    }
];

// Añadir combos a MENU_DATA dinámicamente para que el carrito pueda agregarlos
COMBOS_DATA.forEach(combo => {
    if (!MENU_DATA.some(p => p.id === combo.id)) {
        MENU_DATA.push({
            id: combo.id,
            name: combo.name,
            category: "combo",
            price: combo.price,
            description: combo.description,
            image: combo.image,
            tags: ["Oferta", combo.badge]
        });
    }
});

// --- PRODUCT 3D CAROUSEL ---
let carousel3DIndex = 0;

function update3DCarouselDisplay() {
    const stage = document.getElementById('carousel-3d-stage');
    if (!stage) return;
    const cards = stage.querySelectorAll('.carousel-3d-card');
    const total = cards.length;
    if (total === 0) return;

    const isMobile = window.innerWidth <= 768;
    const radius = isMobile ? 220 : 380;
    const spacingX = isMobile ? 140 : 260;

    cards.forEach((card, idx) => {
        let diff = idx - carousel3DIndex;
        while (diff > total / 2) diff -= total;
        while (diff < -total / 2) diff += total;

        card.classList.remove('active', 'prev', 'next', 'hidden');

        if (diff === 0) {
            card.classList.add('active');
            card.style.transform = `translate3d(0, 0, 0) scale(1) rotateY(0deg)`;
            card.style.opacity = '1';
            card.style.zIndex = '10';
            card.style.pointerEvents = 'auto';
        } else if (diff === 1) {
            card.classList.add('next');
            card.style.transform = `translate3d(${spacingX}px, 0, -${radius * 0.4}px) scale(0.85) rotateY(-28deg)`;
            card.style.opacity = '0.75';
            card.style.zIndex = '5';
            card.style.pointerEvents = 'auto';
        } else if (diff === -1) {
            card.classList.add('prev');
            card.style.transform = `translate3d(-${spacingX}px, 0, -${radius * 0.4}px) scale(0.85) rotateY(28deg)`;
            card.style.opacity = '0.75';
            card.style.zIndex = '5';
            card.style.pointerEvents = 'auto';
        } else if (Math.abs(diff) === 2) {
            const sign = Math.sign(diff);
            card.style.transform = `translate3d(${sign * spacingX * 1.6}px, 0, -${radius * 0.8}px) scale(0.7) rotateY(${-sign * 42}deg)`;
            card.style.opacity = '0.35';
            card.style.zIndex = '2';
            card.style.pointerEvents = 'none';
        } else {
            card.classList.add('hidden');
            card.style.transform = `translate3d(0, 0, -${radius}px) scale(0.5)`;
            card.style.opacity = '0';
            card.style.zIndex = '1';
            card.style.pointerEvents = 'none';
        }
    });

    const dots = document.querySelectorAll('#carousel-3d-dots .carousel-3d-dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === carousel3DIndex);
    });
}

window.slideCarousel3D = function(direction) {
    const stage = document.getElementById('carousel-3d-stage');
    if (!stage) return;
    const cards = stage.querySelectorAll('.carousel-3d-card');
    const total = cards.length || 5;

    if (direction === 'next') {
        carousel3DIndex = (carousel3DIndex + 1) % total;
    } else if (direction === 'prev') {
        carousel3DIndex = (carousel3DIndex - 1 + total) % total;
    } else if (typeof direction === 'number') {
        carousel3DIndex = direction;
    }
    update3DCarouselDisplay();
};

function initProduct3DCarousel() {
    const stage = document.getElementById('carousel-3d-stage');
    if (!stage) return;
    const dotsContainer = document.getElementById('carousel-3d-dots');
    const prevBtn = document.getElementById('carousel-3d-prev');
    const nextBtn = document.getElementById('carousel-3d-next');
    let cards = stage.querySelectorAll('.carousel-3d-card');

    // Generar dinámicamente si no estaban en el HTML
    if (cards.length === 0) {
        COMBOS_DATA.forEach((combo, idx) => {
            const card = document.createElement('div');
            card.className = 'carousel-3d-card';
            card.dataset.index = idx;
            card.innerHTML = `
                <div class="carousel-3d-card-inner">
                    <div class="carousel-3d-badge">${combo.badge}</div>
                    <div class="carousel-3d-img-box">
                        <img src="${combo.image}" alt="${combo.name}" loading="lazy">
                    </div>
                    <div class="carousel-3d-info">
                        <span class="carousel-3d-tag">${combo.tag}</span>
                        <h3 class="carousel-3d-title">${combo.name}</h3>
                        <p class="carousel-3d-desc">${combo.description}</p>
                        <div class="carousel-3d-pricing">
                            <span class="carousel-3d-old-price">$ ${combo.oldPrice.toLocaleString()}</span>
                            <span class="carousel-3d-new-price">$ ${combo.price.toLocaleString()}</span>
                        </div>
                        <button class="btn btn-primary carousel-3d-btn" onclick="addToCart(${combo.id})">
                            <img src="assets/svgs/add-btn/icon.svg" alt="" class="btn-icon">
                            Pedir Combo
                        </button>
                    </div>
                </div>
            `;
            stage.appendChild(card);
        });
        cards = stage.querySelectorAll('.carousel-3d-card');
    }

    // Vincular clic en tarjetas
    cards.forEach((card, idx) => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            if (carousel3DIndex !== idx) {
                window.slideCarousel3D(idx);
            }
        });
    });

    // Generar dots
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        cards.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.className = `carousel-3d-dot ${idx === carousel3DIndex ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Ir a combo ${idx + 1}`);
            dot.addEventListener('click', () => {
                window.slideCarousel3D(idx);
            });
            dotsContainer.appendChild(dot);
        });
    }

    // Botones prev / next
    if (prevBtn) {
        prevBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            window.slideCarousel3D('prev');
        };
    }

    if (nextBtn) {
        nextBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            window.slideCarousel3D('next');
        };
    }

    // Gesto táctil / swipe en móvil
    let touchStartX = 0;
    stage.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchEndX - touchStartX;
        if (Math.abs(diffX) > 35) {
            window.slideCarousel3D(diffX < 0 ? 'next' : 'prev');
        }
    }, { passive: true });

    window.addEventListener('resize', update3DCarouselDisplay);
    update3DCarouselDisplay();
}

// --- GALLERY (Masonry + Image Mask Reveal + Parallax) ---
function initGallery() {
    const gallery = document.querySelector('.gallery-grid');
    if (!gallery) return;

    // Alturas dinámicas estilo Pinterest y factores de velocidad parallax
    const itemConfigs = [
        { heightClass: 'tall', speed: 0.08, label: 'Interior Minimalista' },
        { heightClass: 'medium', speed: -0.05, label: 'Ritual de Filtrado' },
        { heightClass: 'wide', speed: 0.06, label: 'Espacio Exterior' },
        { heightClass: 'tall', speed: -0.07, label: 'Horneado Artesanal' },
        { heightClass: 'medium', speed: 0.09, label: 'Arte Latte' },
        { heightClass: 'tall', speed: -0.04, label: 'Rincón de Lectura' },
        { heightClass: 'medium', speed: 0.07, label: 'Barra de Especialidad' },
        { heightClass: 'tall', speed: -0.06, label: 'Atardecer en Palermo' }
    ];

    gallery.innerHTML = '';

    GALLERY_DATA.forEach((img, idx) => {
        const config = itemConfigs[idx % itemConfigs.length];
        const item = document.createElement('div');
        item.className = `gallery-masonry-item ${config.heightClass}`;
        item.dataset.parallaxSpeed = config.speed;
        item.innerHTML = `
            <div class="gallery-mask-wrapper">
                <div class="gallery-mask-curtain"></div>
                <div class="gallery-parallax-inner">
                    <img src="${img}" alt="${config.label}" class="gallery-parallax-img" loading="lazy">
                </div>
                <div class="gallery-overlay">
                    <span class="gallery-tag">L'Artiste</span>
                    <span class="gallery-caption">${config.label}</span>
                </div>
            </div>
        `;
        gallery.appendChild(item);
    });

    // IntersectionObserver para Image Mask Reveal animado
    const maskObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    const maskItems = gallery.querySelectorAll('.gallery-masonry-item');
    maskItems.forEach(item => maskObserver.observe(item));

    // Parallax Gallery: Desplazamiento a velocidades diferentes durante el scroll
    let ticking = false;
    function updateGalleryParallax() {
        const windowHeight = window.innerHeight;
        maskItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            // Solo calcular si está cerca del viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                const speed = parseFloat(item.dataset.parallaxSpeed) || 0.05;
                const distanceToCenter = (rect.top + rect.height / 2) - (windowHeight / 2);
                const translateY = distanceToCenter * speed;
                const inner = item.querySelector('.gallery-parallax-inner');
                if (inner) {
                    inner.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
                }
            }
        });
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateGalleryParallax);
            ticking = true;
        }
    }, { passive: true });

    // Ejecutar cálculo inicial
    setTimeout(updateGalleryParallax, 200);
}

// --- CART LOGIC ---
window.addToCart = (id) => {
    const product = MENU_DATA.find(p => p.id === id);
    if (!product) return;

    const existing = cart.find(item => item.product.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }

    updateCartUI();

    // Feedback en el botón flotante del carrito (pequeño rebote al agregar)
    const floatBtn = document.getElementById('floating-cart-btn');
    if (floatBtn) {
        floatBtn.classList.remove('cart-bounce');
        void floatBtn.offsetWidth; // Trigger reflow
        floatBtn.classList.add('cart-bounce');
    }
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
                <span class="cart-item-subtotal">$ ${subtotal.toLocaleString()}</span>
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
    if (!form) return;
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

// --- TESTIMONIALS AUTOPLAY CAROUSEL ---
function initTestimonialsCarousel() {
    const track = document.getElementById('testimonials-track');
    const dotsContainer = document.getElementById('testimonials-dots');
    const prevBtn = document.getElementById('testimonials-prev');
    const nextBtn = document.getElementById('testimonials-next');
    if (!track) return;

    const cards = track.querySelectorAll('.testimonial-card');
    const totalCards = cards.length;
    if (totalCards === 0) return;

    let currentIndex = 0;
    let autoplayTimer = null;
    let isHovered = false;

    // Calcular cuántos cards se muestran según resolución
    function getVisibleCardsCount() {
        if (window.innerWidth <= 640) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    function getMaxIndex() {
        const visible = getVisibleCardsCount();
        return Math.max(0, totalCards - visible);
    }

    // Generar dots dinámicamente
    function setupDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        const maxIndex = getMaxIndex();
        const totalDots = maxIndex + 1;

        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('button');
            dot.className = `testimonials-dot ${i === currentIndex ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Ir a reseña ${i + 1}`);
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoplay();
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateTrack() {
        const maxIndex = getMaxIndex();
        if (currentIndex > maxIndex) currentIndex = 0;
        if (currentIndex < 0) currentIndex = maxIndex;

        const visible = getVisibleCardsCount();
        let cardPercentage = 100 / visible;
        // Tomar en cuenta el gap de 2rem (32px) o 1.25rem (20px en móvil)
        const gapPx = window.innerWidth <= 640 ? 20 : 32;
        const offsetPx = currentIndex * (track.children[0].offsetWidth + gapPx);

        track.style.transform = `translateX(-${offsetPx}px)`;

        // Actualizar dots
        const dots = dotsContainer ? dotsContainer.querySelectorAll('.testimonials-dot') : [];
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateTrack();
    }

    function nextSlide() {
        const maxIndex = getMaxIndex();
        if (currentIndex >= maxIndex) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateTrack();
    }

    function prevSlide() {
        const maxIndex = getMaxIndex();
        if (currentIndex <= 0) {
            currentIndex = maxIndex;
        } else {
            currentIndex--;
        }
        updateTrack();
    }

    // Botones
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoplay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoplay();
        });
    }

    // Autoplay continuo cada 4 segundos
    function startAutoplay() {
        stopAutoplay();
        autoplayTimer = setInterval(() => {
            if (!isHovered) {
                nextSlide();
            }
        }, 4000);
    }

    function stopAutoplay() {
        if (autoplayTimer) {
            clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    // Pausar autoplay al pasar el cursor o interactuar
    const wrapper = track.closest('.testimonials-carousel-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => {
            isHovered = true;
        });
        wrapper.addEventListener('mouseleave', () => {
            isHovered = false;
        });
    }

    // Soporte táctil / swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        stopAutoplay();
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchEndX - touchStartX;
        if (Math.abs(diffX) > 40) {
            if (diffX < 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        startAutoplay();
    }, { passive: true });

    window.addEventListener('resize', () => {
        setupDots();
        updateTrack();
    });

    setupDots();
    updateTrack();
    startAutoplay();
}
