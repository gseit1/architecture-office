const { createApp } = Vue;

createApp({
    data() {
        return {
            // Statistics data
            stats: {
                projects: 150,
                awards: 25,
                years: 10
            },

            // Project categories for filtering
            projectCategories: ['All', 'Residential', 'Commercial', 'Institutional', 'Mixed-Use'],
            activeFilter: 'All',

            // Projects portfolio
            projects: [
                {
                    id: 1,
                    title: 'Modern Villa Estate',
                    description: 'A contemporary residential masterpiece featuring clean lines and sustainable design elements.',
                    category: 'Residential',
                    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop&crop=edges'
                },
                {
                    id: 2,
                    title: 'Corporate Headquarters',
                    description: 'An innovative office complex designed to foster collaboration and productivity.',
                    category: 'Commercial',
                    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop&crop=edges'
                },
                {
                    id: 3,
                    title: 'Urban Library',
                    description: 'A public library that serves as a cultural hub with modern learning spaces.',
                    category: 'Institutional',
                    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=edges'
                },
                {
                    id: 4,
                    title: 'Skyline Residences',
                    description: 'Luxury high-rise apartments with panoramic city views and premium amenities.',
                    category: 'Residential',
                    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop&crop=edges'
                },
                {
                    id: 5,
                    title: 'Innovation Center',
                    description: 'A cutting-edge research facility designed for technological advancement.',
                    category: 'Commercial',
                    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&h=400&fit=crop&crop=edges'
                },
                {
                    id: 6,
                    title: 'Community Campus',
                    description: 'An integrated development combining residential, retail, and office spaces.',
                    category: 'Mixed-Use',
                    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop&crop=edges'
                },
                {
                    id: 7,
                    title: 'Wellness Retreat',
                    description: 'A serene residential complex focused on health and well-being.',
                    category: 'Residential',
                    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop&crop=edges'
                },
                {
                    id: 8,
                    title: 'Art Museum',
                    description: 'A contemporary museum designed to showcase art in an inspiring environment.',
                    category: 'Institutional',
                    image: 'https://images.unsplash.com/photo-1554306297-0c86e837d24e?w=600&h=400&fit=crop&crop=edges'
                },
                {
                    id: 9,
                    title: 'Tech Campus',
                    description: 'A dynamic workspace designed for the digital age with flexible environments.',
                    category: 'Commercial',
                    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=edges'
                }
            ],

            // Services offered
            services: [
                {
                    id: 1,
                    icon: 'fas fa-drafting-compass',
                    title: 'Architectural Design',
                    description: 'Comprehensive design services from concept to completion, creating spaces that inspire and function beautifully.'
                },
                {
                    id: 2,
                    icon: 'fas fa-building',
                    title: 'Urban Planning',
                    description: 'Strategic planning for sustainable communities and urban development projects that enhance quality of life.'
                },
                {
                    id: 3,
                    icon: 'fas fa-leaf',
                    title: 'Sustainable Design',
                    description: 'Eco-friendly architectural solutions that minimize environmental impact while maximizing efficiency.'
                },
                {
                    id: 4,
                    icon: 'fas fa-cube',
                    title: '3D Visualization',
                    description: 'Cutting-edge 3D modeling and rendering services to bring your vision to life before construction begins.'
                },
                {
                    id: 5,
                    icon: 'fas fa-tools',
                    title: 'Project Management',
                    description: 'End-to-end project coordination ensuring timely delivery and quality construction management.'
                },
                {
                    id: 6,
                    icon: 'fas fa-home',
                    title: 'Interior Design',
                    description: 'Thoughtful interior spaces that complement architectural design with functionality and aesthetic appeal.'
                }
            ]
        }
    },

    computed: {
        // Filter projects based on active category
        filteredProjects() {
            if (this.activeFilter === 'All') {
                return this.projects;
            }
            return this.projects.filter(project => project.category === this.activeFilter);
        }
    },

    methods: {
        // Filter projects by category
        filterProjects(category) {
            this.activeFilter = category;
            
            // Add smooth transition effect
            const projectItems = document.querySelectorAll('.project-item');
            projectItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
            });
            
            setTimeout(() => {
                projectItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }, 200);
        },

        // Smooth scroll to section
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        },

        // Initialize animations and scroll effects
        initializeAnimations() {
            // Intersection Observer for fade-in animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, observerOptions);

            // Observe all sections for animation
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                observer.observe(section);
            });

            // Navbar background on scroll
            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 100) {
                    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    navbar.style.backdropFilter = 'blur(20px)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                }
            });

            // Update active nav link on scroll
            this.updateActiveNavLink();
        },

        // Update active navigation link based on scroll position
        updateActiveNavLink() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

            window.addEventListener('scroll', () => {
                let current = '';
                const scrollPos = window.scrollY + 100;

                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
        },

        // Initialize counter animation for stats
        animateCounters() {
            const counters = document.querySelectorAll('.stat-item h3');
            const speed = 200;

            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target') || +counter.innerText.replace('+', '');
                    const count = +counter.innerText.replace('+', '');
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target + (counter.innerText.includes('+') ? '+' : '');
                    }
                };

                // Set data-target for animation
                const text = counter.innerText;
                counter.setAttribute('data-target', text.replace('+', ''));
                counter.innerText = '0';
                
                // Start animation when element is visible
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            updateCount();
                            observer.unobserve(entry.target);
                        }
                    });
                });

                observer.observe(counter);
            });
        },

        // Handle contact form submission (placeholder)
        handleContactSubmit(event) {
            event.preventDefault();
            // Add form handling logic here
            alert('Thank you for your interest! We will contact you soon.');
        }
    },

    mounted() {
        // Initialize all animations and effects when component is mounted
        this.$nextTick(() => {
            this.initializeAnimations();
            this.animateCounters();
            
            // Add smooth transitions to project items
            const style = document.createElement('style');
            style.textContent = `
                .project-item {
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }
                
                .animate-in {
                    animation: slideInUp 0.8s ease forwards;
                }
                
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `;
            document.head.appendChild(style);
        });
    }
}).mount('#app');
