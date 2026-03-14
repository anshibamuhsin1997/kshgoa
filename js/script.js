// Project Data Initialization
const stateCommittee = [
    { name: "Dummy Name 1", position: "President", image: "https://ui-avatars.com/api/?name=President&background=0B2447&color=fff&size=400" },
    { name: "Dummy Name 2", position: "General Secretary", image: "https://ui-avatars.com/api/?name=General+Secretary&background=19376D&color=fff&size=400" },
    { name: "Dummy Name 3", position: "Vice President", image: "https://ui-avatars.com/api/?name=Vice+President&background=576CBC&color=fff&size=400" },
    { name: "Dummy Name 4", position: "Chairman", image: "https://ui-avatars.com/api/?name=Chairman&background=0B2447&color=fff&size=400" },
    { name: "Dummy Name 5", position: "Treasurer", image: "https://ui-avatars.com/api/?name=Treasurer&background=19376D&color=fff&size=400" },
    { name: "Dummy Name 6", position: "Executive Member", image: "https://ui-avatars.com/api/?name=Executive&background=576CBC&color=fff&size=400" }
];

const districts = [
    { name: "Thiruvananthapuram", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] },
    { name: "Kollam", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] },
    { name: "Pathanamthitta", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] },
    { name: "Alappuzha", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] },
    { name: "Kottayam", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] },
    { name: "Idukki", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] },
    { name: "Ernakulam", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] },
    { name: "Thrissur", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] },
    { name: "Palakkad", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] },
    { name: "Malappuram", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] },
    { name: "Kozhikode", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] },
    { name: "Wayanad", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] },
    { name: "Kannur", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] },
    { name: "Kasaragod", members: [{ pos: "President", name: "Dummy Name" }, { pos: "Secretary", name: "Dummy Name" }, { pos: "Treasurer", name: "Dummy Name" }] }
];

const galleryImages = [
    "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511578314322-379a1bd9cd6e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1475721025592-220a21cf12da?auto=format&fit=crop&q=80&w=800"
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect & Mobile Menu
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const mobileContactInfo = document.getElementById('mobile-contact-info');
    let isMenuOpen = false;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md', 'py-2');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('shadow-md', 'py-2');
            navbar.classList.add('py-4');
        }
    });

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        mobileMenuBtn.classList.toggle('active');

        if (isMenuOpen) {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';

            // Animate links in
            setTimeout(() => {
                mobileLinks.forEach((link, index) => {
                    setTimeout(() => {
                        link.classList.remove('translate-x-4', 'opacity-0');
                    }, index * 100);
                });
                setTimeout(() => {
                    mobileContactInfo.classList.remove('translate-y-4', 'opacity-0');
                }, mobileLinks.length * 100);
            }, 300);
        } else {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';

            // Reset links
            mobileLinks.forEach(link => {
                link.classList.add('translate-x-4', 'opacity-0');
            });
            mobileContactInfo.classList.add('translate-y-4', 'opacity-0');
        }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });

    // 2. DOM Injection (State Committee, Districts, Gallery)
    const stateCommitteeContainer = document.querySelector('#state-committee .grid');
    stateCommittee.forEach((member, index) => {
        const delay = (index % 3) * 0.1;
        stateCommitteeContainer.innerHTML += `
            <div class="member-card bg-white rounded-3xl overflow-hidden shadow-premium hover:shadow-2xl transition-all duration-500 group border border-gray-100 gsap-stagger-up" data-delay="${delay}">
                <div class="h-80 overflow-hidden relative">
                    <div class="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img src="${member.image}" alt="${member.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out">
                    <div class="absolute bottom-4 right-4 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                        <i class="fa-solid fa-arrow-right -rotate-45"></i>
                    </div>
                </div>
                <div class="p-8 text-center relative bg-white z-20 transform -translate-y-4 rounded-t-3xl border-t border-gray-100/50">
                    <h3 class="text-2xl font-heading font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">${member.name}</h3>
                    <p class="text-accent font-bold text-sm tracking-wide uppercase">${member.position}</p>
                </div>
            </div>
        `;
    });

    const districtGrid = document.getElementById('district-grid');
    districts.forEach((district, index) => {
        const delay = (index % 4) * 0.05;
        let membersHTML = district.members.map(m => `
            <div class="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <span class="text-sm font-bold text-gray-700">${m.pos}</span>
                <span class="text-sm text-gray-600 font-medium">${m.name}</span>
            </div>
        `).join('');

        districtGrid.innerHTML += `
            <div class="accordion-item bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg gsap-stagger-up" data-delay="${delay}">
                <button class="accordion-header w-full px-6 py-5 flex justify-between items-center bg-white text-left transition-colors hover:bg-gray-50/80">
                    <div class="flex items-center">
                        <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                            <i class="fa-solid fa-location-dot text-sm"></i>
                        </div>
                        <h3 class="text-lg font-heading font-bold text-gray-900">${district.name}</h3>
                    </div>
                    <i class="fa-solid fa-chevron-down text-gray-400 transition-transform duration-300 accordion-icon"></i>
                </button>
                <div class="accordion-content bg-gray-50/50">
                    <div class="p-6 pt-2">
                        <div class="space-y-1">
                            ${membersHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.accordion-item').forEach(acc => {
                acc.classList.remove('active');
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    const galleryGrid = document.getElementById('gallery-grid');
    galleryImages.forEach((src, index) => {
        // Vary heights for masonry look
        const heights = ['h-64', 'h-80', 'h-96', 'h-72'];
        const heightClass = heights[index % heights.length];
        const delay = index * 0.05;

        galleryGrid.innerHTML += `
            <div class="gallery-item relative overflow-hidden rounded-2xl mb-4 group cursor-pointer gsap-stagger-up ${heightClass}" data-delay="${delay}">
                <img src="${src}" alt="Gallery Image ${index + 1}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out">
                <div class="gallery-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-3">
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                        <h4 class="text-white font-heading font-bold text-xl">Event Highlights</h4>
                        <p class="text-white/80 text-sm">KSHGOA Gathering</p>
                    </div>
                </div>
            </div>
        `;
    });


    // 3. Three.js Hero Background Animation
    initThreeJS();

    // 4. GSAP Animations Setup (Counters & Scroll)
    initGSAP();
});

function initThreeJS() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Objects
    const group = new THREE.Group();
    scene.add(group);

    // Create floating geometric shapes (representing hire goods/structures)
    const geometries = [
        new THREE.OctahedronGeometry(2),
        new THREE.IcosahedronGeometry(1.5),
        new THREE.BoxGeometry(2, 2, 2),
        new THREE.TetrahedronGeometry(2),
        new THREE.TorusGeometry(1.5, 0.4, 16, 50)
    ];

    // Colors derived from palette: Primary, Secondary, Accent
    const colors = [0x08338A, 0x1E5BB8, 0x4F8EF7];

    const shapes = [];

    for (let i = 0; i < 40; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];

        // Material with wireframe for a modern tech/structural look
        const material = new THREE.MeshBasicMaterial({
            color: colors[Math.floor(Math.random() * colors.length)],
            wireframe: true,
            transparent: true,
            opacity: 0.15 + (Math.random() * 0.15)
        });

        const mesh = new THREE.Mesh(geometry, material);

        // Random positioning
        mesh.position.x = (Math.random() - 0.5) * 60;
        mesh.position.y = (Math.random() - 0.5) * 40;
        mesh.position.z = (Math.random() - 0.5) * 40 - 10;

        // Random rotation
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;

        // Custom properties for animation
        mesh.userData = {
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01
            },
            floatSpeed: (Math.random() * 0.02) + 0.005,
            floatRange: (Math.random() * 2) + 1,
            initialY: mesh.position.y,
            timeOffset: Math.random() * Math.PI * 2
        };

        group.add(mesh);
        shapes.push(mesh);
    }

    // Add particles (representing connectivity)
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 80;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.15,
        color: 0x576CBC,
        transparent: true,
        opacity: 0.6
    });

    const particlesMesh = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlesMesh);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX) * 0.001;
        mouseY = (event.clientY - windowHalfY) * 0.001;
    });

    // Animation Loop
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.01;

        // Smooth mouse target following
        targetX = mouseX * 0.5;
        targetY = mouseY * 0.5;

        // Move camera slightly based on mouse
        group.rotation.x += 0.05 * (targetY - group.rotation.x);
        group.rotation.y += 0.05 * (targetX - group.rotation.y);

        // Animate particles
        particlesMesh.rotation.y = time * 0.05;

        // Animate shapes
        shapes.forEach(shape => {
            // Rotate
            shape.rotation.x += shape.userData.rotationSpeed.x;
            shape.rotation.y += shape.userData.rotationSpeed.y;
            shape.rotation.z += shape.userData.rotationSpeed.z;

            // Float up and down smoothly
            shape.position.y = shape.userData.initialY + Math.sin(time * shape.userData.floatSpeed * 50 + shape.userData.timeOffset) * shape.userData.floatRange;
        });

        renderer.render(scene, camera);
    }

    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

function initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Initial Animations
    const heroTl = gsap.timeline();
    heroTl.to('.gsap-hero-item', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
    });

    // 2. Fade Up Elements (Generic)
    const fadeElements = document.querySelectorAll('.gsap-fade-up');
    fadeElements.forEach(el => {
        const delay = el.getAttribute('data-delay') || 0;
        gsap.fromTo(el,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                delay: Number(delay),
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // 3. Staggered Grid Animations (Cards, Districts, Activities)
    // Select containers that house staggered elements to setup ScrollTriggers
    const staggerContainers = [
        { trigger: '#about', targets: '#about .gsap-stagger-up' },
        { trigger: '#state-committee', targets: '#state-committee .gsap-stagger-up' },
        { trigger: '#district-committees', targets: '#district-grid .gsap-stagger-up' },
        { trigger: '#activities', targets: '#activities .gsap-stagger-up' },
        { trigger: '#gallery', targets: '#gallery .gsap-stagger-up' }
    ];

    staggerContainers.forEach(container => {
        const elements = document.querySelectorAll(container.targets);
        if (elements.length > 0) {
            ScrollTrigger.batch(elements, {
                start: "top 85%",
                onEnter: batch => gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out"
                }),
                // Optional: set initial state if not handled by CSS
                onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 50 })
            });
            // Initial set
            gsap.set(elements, { opacity: 0, y: 50 });
        }
    });

    // 4. Counter Animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2; // seconds

        // Initial setup
        counter.innerText = '0';

        ScrollTrigger.create({
            trigger: counter,
            start: "top 90%",
            once: true,
            onEnter: () => {
                gsap.to(counter, {
                    innerHTML: target,
                    duration: duration,
                    snap: { innerHTML: 1 },
                    ease: "power1.inOut",
                    onUpdate: function () {
                        counter.innerHTML = Math.round(this.targets()[0].innerHTML);
                    }
                });
            }
        });
    });
}
