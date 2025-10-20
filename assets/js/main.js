// Golden Supplies Trading - Main JavaScript

// Language translations
const translations = {
    en: {
        'header.language': 'العربية',
        'header.since2007': 'Since 2007',
        'nav.home': 'Home',
        'nav.products': 'Products',
        'nav.brands': 'Brands',
        'nav.contact': 'Contact Us',
        'preloader.loading': 'Loading...',
        'hero.title': 'GST - Golden Supplies Trading',
        'hero.subtitle': 'Premium Tools & Equipment for Professionals',
        'hero.browseProducts': 'Browse Products',
        'hero.visitUs': 'Visit Us',
        'hero.contactUs': 'Contact Us',
        'branches.riyadh': 'Riyadh',
        'branches.dammam': 'Dammam',
        'branches.jeddah': 'Jeddah',
        'home.title': 'GST - Golden Supplies Trading',
        'home.slogan': 'Your Trusted Partner for Premium Tools & Equipment',
        'home.description': 'Since 2007, we have been providing industries across Saudi Arabia with the finest cutting tools, abrasives, and woodworking equipment from leading international brands. Our commitment to quality and exceptional service has made us the preferred choice for contractors, craftsmen, and businesses.',
        'home.quality': 'Premium Quality',
        'home.qualityDesc': 'Only the finest tools from leading international brands',
        'home.experience': 'Expert Service',
        'home.experienceDesc': 'Professional guidance and support for all your needs',
        'home.reliability': 'Trusted Partner',
        'home.reliabilityDesc': 'Reliable supply chain and customer service since 2007',
        'products.title': 'Featured Products',
        'products.subtitle': 'Professional tools and equipment for every need',
        'products.cuttingTools': 'Cutting Tools',
        'products.cuttingToolsDesc': 'Router bits, circular saw blades, and precision cutting equipment',
        'products.routerBits': 'Router Bits',
        'products.sawBlades': 'Saw Blades',
        'products.abrasives': 'Abrasives',
        'products.abrasivesDesc': 'Abrasive discs, rolls, and cloth for all finishing needs',
        'products.abrasiveDiscs': 'Abrasive Discs',
        'products.abrasiveRolls': 'Abrasive Rolls',
        'products.woodAdhesive': 'Wood Adhesive',
        'products.woodAdhesiveDesc': 'High-quality wood adhesives and bonding solutions',
        'products.woodGlue': 'Wood Glue',
        'products.handTools': 'Hand Tools',
        'products.handToolsDesc': 'Professional hand tools and accessories',
        'products.orbitalSanders': 'Orbital Sanders',
        'products.kitchenAccessories': 'Kitchen Accessories',
        'products.kitchenTools': 'Kitchen Tools',
        'products.services': 'Services',
        'products.sawBladeSharpening': 'Saw Blade Sharpening',
        'products.foamPads': 'Foam Pads',
        'products.profilingTools': 'Profiling Tools',
        'brands.title': 'Featured Brands',
        'brands.subtitle': 'Trusted by professionals worldwide',
        'brands.keyProducts': 'Key Products:',
        'brands.germany': 'Germany',
        'brands.italy': 'Italy',
        'brands.usa': 'USA',
        'brands.china': 'China',
        'brands.turkey': 'Turkey',
        'brands.korea': 'Korea',
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Get in touch with our team',
        'contact.getInTouch': 'Get in Touch',
        'contact.description': 'Ready to get started? Contact us today for all your tool and equipment needs.',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.calling': 'Calling',
        'contact.callingDesc': 'Get in touch with us directly',
        'contact.branches': 'Branches',
        'contact.branchesDesc': 'Visit us at our locations',
        'contact.quickContact': 'Quick Contact',
        'contact.callUs': 'Call Us',
        'contact.whatsappUs': 'WhatsApp Us',
        'contact.easternProvince': 'Eastern Province',
        'contact.riyadhBranch': 'Riyadh Branch',
        'contact.dammamBranch': 'Dammam Branch',
        'contact.jeddahBranch': 'Jeddah Branch',
        'contact.address': 'Address',
        'contact.viewOnMaps': 'View on Google Maps',
        'contact.chooseRegion': 'Choose your region',
        'contact.visitUs': 'Visit Us',
        'contact.riyadh': 'Riyadh',
        'contact.jeddah': 'Jeddah',
        'contact.dammamAddress': 'Mabni Al-Mahna Commercial, King Abdulaziz St, Al Muhammadiyah, Dammam 32432',
        'contact.jeddahAddress': 'Qryniah, Jeddah',
        'contact.riyadhAddress': 'Al Madina Al Munawwarah Rd, Al Sina\'iyah, Riyadh 12843',
        'contact.phoneEasternJeddah': '+966 56 266 2485',
        'contact.phoneRiyadh': '+966 56 308 7176',
        'contact.emailGeneral': 'sales@golden-supplies.com',
        'contact.emailRiyadh': 'salesriyadh@golden-supplies.com',
        
        // Footer translations
        'footer.description': 'Your trusted partner for premium tools and equipment since 2007. We provide high-quality products from leading international brands to industries across Saudi Arabia.',
        'footer.quickLinks': 'Quick Links',
        'footer.contactInfo': 'Contact Information',
        'footer.followUs': 'Follow Us',
        'footer.instagram': 'Instagram',
        'footer.linkedin': 'LinkedIn',
        'footer.copyright': '© 2025 Golden Supplies Trading. All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.companyName': 'Golden Supplies Trading',
        'stats.years': 'Years of Excellence',
        'stats.yearsDesc': 'Serving industries across Saudi Arabia since 2007',
        'stats.brands': 'Premium Brands',
        'stats.brandsDesc': 'Leading international manufacturers in our portfolio',
        'stats.products': 'Quality Products',
        'stats.productsDesc': 'Wide range of tools and equipment for every need',
        'stats.clients': 'Satisfied Clients',
        'stats.clientsDesc': 'Trusted by contractors and professionals nationwide'
    },
    ar: {
        'header.language': 'English',
        'header.since2007': 'منذ ٢٠٠٧',
        'nav.home': 'الرئيسية',
        'nav.products': 'المنتجات',
        'nav.brands': 'العلامات التجارية',
        'nav.contact': 'اتصل بنا',
        'preloader.loading': 'جاري التحميل...',
        'hero.title': 'مؤسسة التوريدات الذهبية - التوريدات الذهبية',
        'hero.subtitle': 'أدوات ومعدات عالية الجودة',
        'hero.browseProducts': 'تصفح المنتجات',
        'hero.visitUs': 'زرنا',
        'hero.contactUs': 'اتصل بنا',
        'branches.riyadh': 'الرياض',
        'branches.dammam': 'الدمام',
        'branches.jeddah': 'جدة',
        'home.title': 'مؤسسة التوريدات الذهبية - التوريدات الذهبية',
        'home.slogan': 'شريكك الموثوق للأدوات والمعدات عالية الجودة',
        'home.description': 'منذ عام ٢٠٠٧، نوفر للشركات في جميع أنحاء المملكة العربية السعودية أفضل أدوات القطع والمواد الكاشطة ومعدات النجارة من العلامات التجارية الدولية الرائدة. التزامنا بالجودة والخدمة الاستثنائية جعلنا الخيار المفضل للمقاولين والحرفيين والشركات.',
        'home.quality': 'جودة عالية',
        'home.qualityDesc': 'فقط أفضل الأدوات من العلامات التجارية الدولية الرائدة',
        'home.experience': 'خدمة خبيرة',
        'home.experienceDesc': 'إرشاد ودعم مهني لجميع احتياجاتك',
        'home.reliability': 'شريك موثوق',
        'home.reliabilityDesc': 'سلسلة توريد موثوقة وخدمة عملاء منذ عام 2007',
        'products.title': 'منتجات مميزة',
        'products.subtitle': 'أدوات ومعدات مهنية لكل احتياج',
        'products.cuttingTools': 'أدوات القطع',
        'products.cuttingToolsDesc': 'أدوات قطع دقيقة للنجارة والأعمال المعدنية والبناء. نوفر ريشة راوتر، صينية منشار، وأدوات تشكيل خشب للتطبيقات المهنية.',
        'products.cuttingToolsDescOld': 'بتات الراوتر، شفرات المنشار الدائري، ومعدات القطع الدقيقة',
        'products.routerBits': 'ريشة راوتر',
        'products.sawBlades': 'صينية منشار',
        'products.abrasives': 'الصنفرة',
        'products.abrasivesDesc': 'مواد صنفرة وتلميع عالية الجودة لإعداد الأسطح والتشطيب. نوفر أقراص الصنفرة، لفات الصنفرة، سيور صنفرة، قماش الصنفرة، وماكينات الصنفرة المدارية لأعمال التشطيب المهنية.',
        'products.abrasivesDescOld': 'أقراص الصنفرة، اللفائف، والقماش لجميع احتياجات التشطيب',
        'products.abrasiveDiscs': 'صنفرة دائرية',
        'products.abrasiveRolls': 'سيور صنفرة',
        'products.woodAdhesive': 'غراء خشب',
        'products.woodAdhesiveDesc': 'حلول ربط مهنية لمشاريع النجارة والبناء. نوفر غراء خشب سائل، غراء بودرة، ولاصقات عالية الجودة لصناعة الأثاث والنجارة والتطبيقات الإنشائية.',
        'products.woodAdhesiveDescOld': 'لاصقات خشب عالية الجودة وحلول الربط',
        'products.woodGlue': 'غراء الخشب',
        'products.handTools': 'الأدوات اليدوية',
        'products.handToolsDesc': 'أدوات يدوية وملحقات أساسية للنجارة والبناء المهنية. نوفر ماكينة صنفرة ترددية بالهواء، قاعدة ماكينة صنفرة، وأدوات متخصصة للعمل الدقيق والتشطيب.',
        'products.handToolsDescOld': 'أدوات يدوية مهنية وملحقات',
        'products.orbitalSanders': 'ماكينة صنفرة ترددية بالهواء',
        'products.kitchenAccessories': 'إكسسوارات المطبخ',
        'products.kitchenTools': 'أدوات المطبخ',
        'products.services': 'الخدمات',
        'products.sawBladeSharpening': 'خدمة سن صواني المنشار',
        'products.foamPads': 'قاعدة ماكينة صنفرة',
        'products.profilingTools': 'أدوات تشكيل خشب',
        'brands.title': 'العلامات التجارية المميزة',
        'brands.subtitle': 'موثوق من قبل المحترفين حول العالم',
        'brands.germany': 'ألمانيا',
        'brands.italy': 'إيطاليا',
        'brands.usa': 'الولايات المتحدة',
        'brands.china': 'الصين',
        'brands.turkey': 'تركيا',
        'brands.korea': 'كوريا',
        'brands.keyProducts': 'المنتجات الرئيسية',
        'contact.title': 'اتصل بنا',
        'contact.subtitle': 'تواصل مع فريقنا',
        'contact.getInTouch': 'تواصل معنا',
        'contact.description': 'مستعد للبدء؟ اتصل بنا اليوم لجميع احتياجاتك من الأدوات والمعدات.',
        'contact.phone': 'الهاتف',
        'contact.email': 'البريد الإلكتروني',
        'contact.calling': 'الاتصال',
        'contact.callingDesc': 'تواصل معنا مباشرة',
        'contact.branches': 'الفروع',
        'contact.branchesDesc': 'زرنا في مواقعنا',
        'contact.quickContact': 'اتصال سريع',
        'contact.callUs': 'اتصل بنا',
        'contact.whatsappUs': 'واتساب',
        'contact.easternProvince': 'المنطقة الشرقية',
        'contact.riyadhBranch': 'فرع الرياض',
        'contact.dammamBranch': 'فرع الدمام',
        'contact.jeddahBranch': 'فرع جدة',
        'contact.address': 'العنوان',
        'contact.viewOnMaps': 'عرض على خرائط جوجل',
        'contact.chooseRegion': 'اختر منطقتك',
        'contact.visitUs': 'زرنا',
        'contact.riyadh': 'الرياض',
        'contact.jeddah': 'جدة',
        'contact.dammamAddress': 'مبني المهنا التجاري، شارع الملك عبدالعزيز، المحمدية، الدمام 32432',
        'contact.jeddahAddress': 'قرينيا، جدة',
        'contact.riyadhAddress': 'طريق المدينة المنورة، الصناعية، الرياض 12843',
        'contact.phoneEasternJeddah': '+966 56 266 2485',
        'contact.phoneRiyadh': '+966 56 308 7176',
        'contact.emailGeneral': 'sales@golden-supplies.com',
        'contact.emailRiyadh': 'salesriyadh@golden-supplies.com',
        
        // Statistics translations
        'stats.years': 'سنوات من التميز',
        'stats.yearsDesc': 'نخدم المحترفين في جميع أنحاء المملكة العربية السعودية منذ عام 2007',
        'stats.brands': 'علامات تجارية متميزة',
        'stats.brandsDesc': 'أبرز الشركات المصنعة الدولية في محفظتنا',
        'stats.products': 'منتجات عالية الجودة',
        'stats.productsDesc': 'مجموعة واسعة من الأدوات والمعدات لكل احتياج',
        'stats.clients': 'عملاء راضون',
        'stats.clientsDesc': 'موثوق من قبل المقاولين والمحترفين على مستوى المملكة',
        
        // Footer translations
        'footer.description': 'شريكك الموثوق للأدوات والمعدات المتميزة منذ عام ٢٠٠٧. نوفر منتجات عالية الجودة من العلامات التجارية الدولية الرائدة للشركات في جميع أنحاء المملكة العربية السعودية.',
        'footer.quickLinks': 'روابط سريعة',
        'footer.contactInfo': 'معلومات الاتصال',
        'footer.followUs': 'تابعنا',
        'footer.instagram': 'إنستغرام',
        'footer.linkedin': 'لينكد إن',
        'footer.copyright': '© 2025 مؤسسة التوريدات الذهبية. جميع الحقوق محفوظة.',
        'footer.privacy': 'سياسة الخصوصية',
        'footer.terms': 'شروط الخدمة',
        'footer.companyName': 'مؤسسة التوريدات الذهبية'
    }
};

// Current language state - load from localStorage or default to 'en'
let currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

// Initialize scroll restoration
(function() {
    // Allow browser to restore scroll position naturally
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
    }
})();

// Device detection function
function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Check for mobile user agents
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
    const isMobileUserAgent = mobileRegex.test(userAgent);
    
    // Check for touch capability
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Check screen size
    const isSmallScreen = window.innerWidth <= 768;
    
    // Check for mobile-specific features
    const isMobileFeatures = 'orientation' in window && 'onorientationchange' in window;
    
    return isMobileUserAgent || (isTouchDevice && isSmallScreen) || isMobileFeatures;
}

// Redirect to mobile version if on mobile device
function redirectToMobileIfNeeded() {
    // Check if we're already on the mobile version
    if (window.location.pathname.includes('mobile') || window.location.pathname.includes('index-mobile')) {
        return;
    }
    
    // Check if user has manually chosen desktop version
    const userPreference = localStorage.getItem('preferDesktop');
    if (userPreference === 'true') {
        return;
    }
    
    // Check if this is a mobile device
    if (isMobileDevice()) {
        // Add a small delay to prevent flash
        setTimeout(() => {
            window.location.href = 'index-mobile.html';
        }, 100);
    }
}

// Video Carousel Functionality
let currentVideoIndex = 0;
let videoInterval;
const videoSlides = document.querySelectorAll('.video-slide');
const indicators = document.querySelectorAll('.indicator');

function initializeVideoCarousel() {
    if (videoSlides.length === 0) return;
    
    // Add time limit event listeners for cutting videos
    videoSlides.forEach((video, index) => {
        video.addEventListener('timeupdate', function() {
            // CuttingVideo.mp4 (index 0) - show from 0:16 to 0:30
            if (index === 0 && this.currentTime >= 30) {
                this.currentTime = 16; // Loop back to start of segment
            }
            // CuttingVideo2.mp4 (index 2) - show from 0:10 to 0:22
            else if (index === 2 && this.currentTime >= 22) {
                this.currentTime = 10; // Loop back to start of segment
            }
        });
        
        // Set initial start time for the first video (CuttingVideo.mp4)
        if (index === 0) {
            video.addEventListener('loadeddata', function() {
                this.currentTime = 16;
            }, { once: true });
        }
    });
    
    // Start auto-rotation
    startVideoRotation();
}

function switchToVideo(index) {
    if (index === currentVideoIndex) return;
    
    // Remove active class from current video
    videoSlides[currentVideoIndex].classList.remove('active');
    
    // Pause current video
    videoSlides[currentVideoIndex].pause();
    
    // Update current index
    currentVideoIndex = index;
    
    // Add active class to new video
    videoSlides[currentVideoIndex].classList.add('active');
    
    // Set specific time segments for cutting videos after video is ready
    const currentVideo = videoSlides[currentVideoIndex];
    
    if (index === 0) { // CuttingVideo.mp4 - start from 0:16
        if (currentVideo.readyState >= 2) { // HAVE_CURRENT_DATA
            currentVideo.currentTime = 16;
        } else {
            currentVideo.addEventListener('loadeddata', function() {
                currentVideo.currentTime = 16;
            }, { once: true });
        }
    } else if (index === 2) { // CuttingVideo2.mp4 - show from 0:10 to 0:22
        if (currentVideo.readyState >= 2) { // HAVE_CURRENT_DATA
            currentVideo.currentTime = 10;
        } else {
            currentVideo.addEventListener('loadeddata', function() {
                currentVideo.currentTime = 10;
            }, { once: true });
        }
    } else {
        currentVideo.currentTime = 0;
    }
    
    // Play new video
    currentVideo.play();
}

function startVideoRotation() {
    clearInterval(videoInterval);
    videoInterval = setInterval(() => {
        const nextIndex = (currentVideoIndex + 1) % videoSlides.length;
        switchToVideo(nextIndex);
    }, 8000); // Change video every 8 seconds
}

// Function to calculate years of excellence automatically
function calculateYearsOfExcellence() {
    const foundingYear = 2007;
    const currentYear = new Date().getFullYear();
    const yearsInBusiness = currentYear - foundingYear;
    
    // Update main website
    const yearsElement = document.getElementById('yearsOfExcellence');
    if (yearsElement) {
        yearsElement.textContent = yearsInBusiness + '+';
        yearsElement.setAttribute('data-original', yearsInBusiness + '+');
    }
    
    // Update mobile website
    const mobileYearsElement = document.getElementById('mobileYearsOfExcellence');
    if (mobileYearsElement) {
        mobileYearsElement.setAttribute('data-original', yearsInBusiness + '+');
    }
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    hamburgerMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('show');
    
    // Prevent body scroll when menu is open
    if (mobileMenuOverlay.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    hamburgerMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Back to Top Button Functionality
function initBackToTopButton() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (!backToTopButton) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    // Smooth scroll to top when clicked
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Close mobile menu when clicking outside
function initMobileMenuClickOutside() {
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    if (!mobileMenuOverlay) return;
    
    mobileMenuOverlay.addEventListener('click', function(e) {
        if (e.target === mobileMenuOverlay) {
            closeMobileMenu();
        }
    });
}

// Update language switcher for mobile
function updateLanguageSwitcherForMobile() {
    const langButton = document.querySelector('.lang-switch-btn span');
    if (!langButton) return;
    
    const currentLang = document.documentElement.lang || 'en';
    
    // Update button text for mobile (shorter labels)
    if (window.innerWidth <= 767) {
        if (currentLang === 'ar') {
            langButton.textContent = 'EN';
        } else {
            langButton.textContent = 'AR';
        }
    } else {
        // Desktop version
        if (currentLang === 'ar') {
            langButton.textContent = 'English';
        } else {
            langButton.textContent = 'العربية';
        }
    }
}

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    
    // Check for mobile device and redirect if needed
    redirectToMobileIfNeeded();
    
    // Hide preloader after page loads
    hideInitialPreloader();
    
    // Set initial language from localStorage or default to 'en'
    updateLanguage(currentLanguage);
    
    // Add smooth scrolling for navigation
    addSmoothScrolling();
    
    // Add scroll effect to header
    addHeaderScrollEffect();
    
    // Initialize stat numbers to 0
    initializeStatNumbers();
    addScrollAnimations();
    
    // Initialize dropdown functionality
    initializeDropdown();
    
    // Initialize video carousel
    initializeVideoCarousel();
    
    // Calculate years of excellence automatically
    calculateYearsOfExcellence();
    
    // Initialize responsive features
    initBackToTopButton();
    initMobileMenuClickOutside();
    updateLanguageSwitcherForMobile();
    
    // Update language switcher on window resize
    window.addEventListener('resize', updateLanguageSwitcherForMobile);
    
    // Initialize auto-carousels
    initializeAutoCarousels();
    
    
    // Scroll to top on page load/refresh with a small delay
    setTimeout(function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, 100);
});

// Also scroll to top when page fully loads (for refresh)
window.addEventListener('load', function() {
    setTimeout(function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, 100);
});

// Hide preloader function
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        
        // Remove preloader from DOM after fade out
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    }
}

// Initial preloader hide function for page load
function hideInitialPreloader() {
    const preloader = document.getElementById('preloader');
    
    // Wait for page to fully load
    window.addEventListener('load', function() {
        setTimeout(function() {
            hidePreloader();
        }, 1500); // Show preloader for at least 1.5 seconds
    });
}

// Toggle language function
function toggleLanguage() {
    // Show preloader
    showPreloader();
    
    // Scroll to top when changing language
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
    });
    
    // Wait a moment then change language and hide preloader
    setTimeout(function() {
        const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
        updateLanguage(newLanguage);
        
        // Update language switcher for mobile after language change
        setTimeout(function() {
            updateLanguageSwitcherForMobile();
        }, 100);
        
        // Hide preloader after language change
        setTimeout(function() {
            hidePreloader();
        }, 500);
    }, 1000);
}

// Show preloader function
function showPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
    preloader.style.display = 'flex';
        preloader.style.opacity = '1';
        preloader.style.visibility = 'visible';
    preloader.classList.remove('fade-out');
    }
}

// Update language function
function updateLanguage(language) {
    currentLanguage = language;
    
    // Save language choice to localStorage
    localStorage.setItem('selectedLanguage', language);
    
    // Update document direction and language with a small delay to prevent white screen
    setTimeout(() => {
        document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', language);
        
        // Force a reflow to ensure the changes take effect
        document.documentElement.offsetHeight;
    }, 10);
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    
    // Update page title
    document.title = language === 'ar' ? 'مؤسسة التوريدات الذهبية' : 'Golden Supplies Trading';
    
    // Close any open brand popup when switching languages
    const popup = document.getElementById('brandPopup');
    if (popup && popup.style.display === 'block') {
        closeBrandPopup();
    }
    
    // Close any open dropdowns when switching languages
    const callDropdown = document.getElementById('callDropdown');
    const callBackdrop = document.getElementById('callBackdrop');
    const whatsappDropdown = document.getElementById('whatsappDropdown');
    const whatsappBackdrop = document.getElementById('whatsappBackdrop');
    const emailDropdown = document.getElementById('emailDropdown');
    const emailBackdrop = document.getElementById('emailBackdrop');
    
    if (callDropdown && callDropdown.classList.contains('show')) {
        callDropdown.classList.remove('show');
        callBackdrop.classList.remove('show');
    }
    if (whatsappDropdown && whatsappDropdown.classList.contains('show')) {
        whatsappDropdown.classList.remove('show');
        whatsappBackdrop.classList.remove('show');
    }
    if (emailDropdown && emailDropdown.classList.contains('show')) {
        emailDropdown.classList.remove('show');
        emailBackdrop.classList.remove('show');
    }
    
    // Reinitialize carousels after language change to fix RTL issues
    setTimeout(() => {
        initializeAutoCarousels();
    }, 100);
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add smooth scrolling for navigation
function addSmoothScrolling() {
    // This would be used if we had navigation links
    // For now, it's prepared for future navigation
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = 80; // Adjust this value based on your header height
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add header scroll effect
function addHeaderScrollEffect() {
    const header = document.querySelector('.site-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });
}

// Add animation on scroll
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // If it's a stat card, start counting animation
                if (entry.target.classList.contains('stat-card')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Observe stat cards for counting animation
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        observer.observe(card);
    });
}

// Animate counter from 0 to target number
function animateCounter(statCard) {
    const numberElement = statCard.querySelector('.stat-number');
    if (!numberElement) return;
    
    // Check if already animated
    if (numberElement.classList.contains('animated')) return;
    numberElement.classList.add('animated');
    
    const targetText = numberElement.getAttribute('data-original') || numberElement.textContent;
    const targetNumber = parseInt(targetText.replace(/\D/g, '')); // Extract number
    const suffix = targetText.replace(/\d/g, ''); // Extract suffix like "+"
    
    if (isNaN(targetNumber)) return;
    
    let currentNumber = 0;
    const increment = targetNumber / 60; // 60 frames for smooth animation
    const duration = 2000; // 2 seconds
    const stepTime = duration / 60;
    
    const timer = setInterval(() => {
        currentNumber += increment;
        
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(timer);
        }
        
        // Update the display
        numberElement.textContent = Math.floor(currentNumber) + suffix;
    }, stepTime);
}

// Branch locations for Google Maps
const branchLocations = {
    'riyadh': {
        name: 'Golden Supplies Trading - Riyadh',
        address: 'Riyadh, Saudi Arabia',
        coords: '24.7136,46.6753',
        directLink: 'https://maps.app.goo.gl/qEmBZUSdPcV3QR6b8'
    },
    'dammam': {
        name: 'Golden Supplies Trading - Dammam',
        address: 'Dammam, Saudi Arabia',
        coords: '26.4207,50.0888',
        directLink: 'https://maps.app.goo.gl/UB7s6EWwUizwHtGU9'
    },
    'jeddah': {
        name: 'Golden Supplies Trading - Jeddah',
        address: 'Qryniah, Jeddah',
        coords: '21.4858,39.1925',
        directLink: 'https://maps.app.goo.gl/LHE6mK4nJKPcW56r7'
    }
};

// Initialize dropdown functionality
function initializeDropdown() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    if (dropdownBtn && dropdownContent) {
        // Toggle dropdown on button click
        dropdownBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdownContent.classList.toggle('show');
        });
        
        // Handle branch selection
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const branch = this.getAttribute('data-branch');
                openGoogleMaps(branch);
                dropdownContent.classList.remove('show');
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdownBtn.contains(e.target) && !dropdownContent.contains(e.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    }
}

// Open Google Maps with branch location
function openGoogleMaps(branch) {
    const location = branchLocations[branch];
    if (location) {
        // Use direct link if available, otherwise use search API
        const mapsUrl = location.directLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name + ', ' + location.address)}`;
        window.open(mapsUrl, '_blank');
    }
}

// Phone numbers for different locations
const phoneNumbers = {
    'riyadh': '+966563087176',
    'eastern': '+966562662485',
    'jeddah': '+966562662485'
};

// Toggle Call dropdown
function toggleCallDropdown() {
    const dropdown = document.getElementById('callDropdown');
    const backdrop = document.getElementById('callBackdrop');
    const whatsappDropdown = document.getElementById('whatsappDropdown');
    const whatsappBackdrop = document.getElementById('whatsappBackdrop');
    
    // Close WhatsApp dropdown if open
    if (whatsappDropdown.classList.contains('show')) {
        whatsappDropdown.classList.remove('show');
        whatsappBackdrop.classList.remove('show');
    }
    
    // Toggle Call dropdown
    dropdown.classList.toggle('show');
    backdrop.classList.toggle('show');
}

// Toggle WhatsApp dropdown
function toggleWhatsAppDropdown() {
    const dropdown = document.getElementById('whatsappDropdown');
    const backdrop = document.getElementById('whatsappBackdrop');
    const callDropdown = document.getElementById('callDropdown');
    const callBackdrop = document.getElementById('callBackdrop');
    
    // Close Call dropdown if open
    if (callDropdown.classList.contains('show')) {
        callDropdown.classList.remove('show');
        callBackdrop.classList.remove('show');
    }
    
    // Toggle WhatsApp dropdown
    dropdown.classList.toggle('show');
    backdrop.classList.toggle('show');
}

// Close Call dropdown
function closeCallDropdown() {
    const dropdown = document.getElementById('callDropdown');
    const backdrop = document.getElementById('callBackdrop');
    dropdown.classList.remove('show');
    backdrop.classList.remove('show');
}

// Close WhatsApp dropdown
function closeWhatsAppDropdown() {
    const dropdown = document.getElementById('whatsappDropdown');
    const backdrop = document.getElementById('whatsappBackdrop');
    dropdown.classList.remove('show');
    backdrop.classList.remove('show');
}

// Call specific location
function callLocation(location) {
    const phoneNumber = phoneNumbers[location];
    if (phoneNumber) {
        window.open(`tel:${phoneNumber}`, '_self');
    }
    
    // Close popup
    closeCallDropdown();
}

// WhatsApp specific location
function whatsappLocation(location) {
    const phoneNumber = phoneNumbers[location];
    if (phoneNumber) {
        // Remove the + and any spaces for WhatsApp
        const cleanNumber = phoneNumber.replace(/[\s+]/g, '');
        const whatsappUrl = `https://wa.me/${cleanNumber}`;
        window.open(whatsappUrl, '_blank');
    }
    
    // Close popup
    closeWhatsAppDropdown();
}

// Toggle Email dropdown
function toggleEmailDropdown() {
    const dropdown = document.getElementById('emailDropdown');
    const backdrop = document.getElementById('emailBackdrop');
    const callDropdown = document.getElementById('callDropdown');
    const callBackdrop = document.getElementById('callBackdrop');
    const whatsappDropdown = document.getElementById('whatsappDropdown');
    const whatsappBackdrop = document.getElementById('whatsappBackdrop');
    
    // Close other dropdowns if open
    if (callDropdown.classList.contains('show')) {
        callDropdown.classList.remove('show');
        callBackdrop.classList.remove('show');
    }
    if (whatsappDropdown.classList.contains('show')) {
        whatsappDropdown.classList.remove('show');
        whatsappBackdrop.classList.remove('show');
    }
    
    // Toggle Email dropdown
    dropdown.classList.toggle('show');
    backdrop.classList.toggle('show');
}

// Close Email dropdown
function closeEmailDropdown() {
    const dropdown = document.getElementById('emailDropdown');
    const backdrop = document.getElementById('emailBackdrop');
    dropdown.classList.remove('show');
    backdrop.classList.remove('show');
}

// Email specific location
function emailLocation(location) {
    let emailAddress;
    if (location === 'eastern' || location === 'jeddah') {
        emailAddress = 'sales@golden-supplies.com';
    } else if (location === 'riyadh') {
        emailAddress = 'salesriyadh@golden-supplies.com';
    }
    
    if (emailAddress) {
        window.open(`mailto:${emailAddress}`);
    }
    
    closeEmailDropdown();
}

// Carousel functionality
function moveCarousel(button, direction) {
    const carouselContainer = button.closest('.carousel-container');
    const track = carouselContainer.querySelector('.carousel-track');
    const slides = track.querySelectorAll('.carousel-slide');
    const currentTransform = track.style.transform || 'translateX(0px)';
    const currentX = parseInt(currentTransform.match(/-?\d+/) || 0);
    const slideWidth = 100; // Each slide is 100% width
    const maxX = -(slides.length - 1) * slideWidth;
    
    let newX = currentX + (direction * slideWidth);
    
    // Handle wrapping
    if (newX > 0) {
        newX = maxX;
    } else if (newX < maxX) {
        newX = 0;
    }
    
    track.style.transform = `translateX(${newX}%)`;
}

// Auto-carousel functionality
function startAutoCarousel(carouselContainer) {
    const track = carouselContainer.querySelector('.carousel-track');
    const slides = track.querySelectorAll('.carousel-slide');
    let currentSlideIndex = 0;
    let interval;
    
    // Clear any existing intervals for this carousel
    if (carouselContainer.autoCarouselInterval) {
        clearInterval(carouselContainer.autoCarouselInterval);
    }
    
    // Preload all images to prevent white screens
    slides.forEach(slide => {
        const img = slide.querySelector('img');
        if (img && img.src) {
            const preloadImg = new Image();
            preloadImg.src = img.src;
            preloadImg.onload = () => {
                img.style.opacity = '1';
            };
        }
    });
    
    function moveToSlide(index) {
        // Ensure smooth transition
        track.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        track.style.transform = `translateX(-${index * 100}%)`;
    }
    
    function nextSlide() {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }
        moveToSlide(currentSlideIndex);
    }
    
    function startInterval() {
        if (interval) clearInterval(interval);
        interval = setInterval(nextSlide, 4000);
        carouselContainer.autoCarouselInterval = interval;
    }
    
    function stopInterval() {
        if (interval) {
            clearInterval(interval);
            interval = null;
            carouselContainer.autoCarouselInterval = null;
        }
    }
    
    // Reset carousel position
    track.style.transform = 'translateX(0%)';
    currentSlideIndex = 0;
    
    // Start the auto-carousel after a small delay to ensure images are loaded
    setTimeout(() => {
        startInterval();
    }, 500);
    
    // Pause auto-carousel on hover
    carouselContainer.addEventListener('mouseenter', stopInterval);
    
    // Resume auto-carousel when mouse leaves
    carouselContainer.addEventListener('mouseleave', startInterval);
}

// Initialize all auto-carousels
function initializeAutoCarousels() {
    const carouselContainers = document.querySelectorAll('.carousel-container');
    carouselContainers.forEach(container => {
        // Clear any existing intervals first
        if (container.autoCarouselInterval) {
            clearInterval(container.autoCarouselInterval);
            container.autoCarouselInterval = null;
        }
        startAutoCarousel(container);
    });
}

// Initialize stat numbers to 0
function initializeStatNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(numberElement => {
        const originalText = numberElement.textContent;
        const suffix = originalText.replace(/\d/g, ''); // Extract suffix like "+"
        numberElement.textContent = '0' + suffix;
        numberElement.setAttribute('data-original', originalText);
    });
}

// Brand popup functionality
const brandData = {
    'deerfos': {
        name: 'Deerfos',
        country: 'Korea',
        description: 'Manufacturer of coated abrasives offering a wide range of sanding and polishing products for wood, metal, and composites.',
        descriptionAr: 'مصنع للمواد الكاشطة المطلية يقدم مجموعة واسعة من منتجات الصنفرة والتلميع للخشب والمعادن والمركبات.',
        products: ['Sanding Belts', 'Sanding Discs', 'Abrasive Sheets', 'Flap Wheels'],
        productsAr: ['أحزمة الصنفرة', 'أقراص الصنفرة', 'أوراق كاشطة', 'عجلات الصنفرة']
    },
    'freud': {
        name: 'Freud',
        country: 'Italy',
        description: 'Precision tool manufacturer specializing in woodworking and industrial cutting applications, part of the Bosch Group.',
        descriptionAr: 'مصنع أدوات دقيقة متخصص في النجارة وتطبيقات القطع الصناعية، جزء من مجموعة بوش.',
        products: ['Saw Blades', 'Router Bits', 'Cutterheads', 'Industrial Knives'],
        productsAr: ['شفرات المنشار', 'بتات الراوتر', 'رؤوس القطع', 'سكاكين صناعية']
    },
    'kleiberit': {
        name: 'Kleiberit',
        country: 'Germany',
        description: 'German adhesive manufacturer focused on bonding solutions for woodworking, furniture, and construction industries.',
        descriptionAr: 'مصنع ألماني للمواد اللاصقة متخصص في حلول الربط لصناعات النجارة والأثاث والبناء.',
        products: ['PUR Adhesives', 'Hotmelts', 'Wood Glues', 'Laminating Adhesives', 'Dispersion Adhesives'],
        productsAr: ['مواد لاصقة PUR', 'مواد لاصقة ساخنة', 'غراء الخشب', 'مواد لاصقة للتصفيح', 'مواد لاصقة مبعثرة']
    },
    'leuco': {
        name: 'Leuco',
        country: 'Germany',
        description: 'Specialist in industrial cutting tools for wood, plastics, and composites. Provides innovative tooling solutions for CNC and production lines.',
        descriptionAr: 'متخصص في أدوات القطع الصناعية للخشب والبلاستيك والمركبات. يقدم حلول أدوات مبتكرة لخطوط CNC والإنتاج.',
        products: ['Saw Blades', 'Router Bits', 'Cutterheads', 'Diamond Tools', 'Boring Tools'],
        productsAr: ['شفرات المنشار', 'بتات الراوتر', 'رؤوس القطع', 'أدوات الماس', 'أدوات الحفر']
    },
    'leitz': {
        name: 'Leitz',
        country: 'Germany',
        description: 'Leading German manufacturer of precision cutting tools for woodworking, plastics, and non-ferrous metals. Known for durability and high-performance tooling systems.',
        descriptionAr: 'مصنع ألماني رائد لأدوات القطع الدقيقة للنجارة والبلاستيك والمعادن غير الحديدية. معروف بمتانة وأنظمة أدوات عالية الأداء.',
        products: ['Saw Blades', 'Milling Cutters', 'Drill Bits', 'Router Tools', 'Tool Holders'],
        productsAr: ['شفرات المنشار', 'قواطع الطحن', 'بتات الحفر', 'أدوات الراوتر', 'حاملات الأدوات']
    },
    'cmt': {
        name: 'CMT',
        country: 'Italy',
        description: 'Renowned Italian brand specializing in professional cutting tools for woodworking and CNC applications.',
        descriptionAr: 'علامة تجارية إيطالية مشهورة متخصصة في أدوات القطع المهنية للنجارة وتطبيقات CNC.',
        products: ['Router Bits', 'Saw Blades', 'Drill Bits', 'CNC Tools'],
        productsAr: ['بتات الراوتر', 'شفرات المنشار', 'بتات الحفر', 'أدوات CNC']
    },
    'gda': {
        name: 'GDA',
        country: 'Italy',
        description: 'Producer of industrial cutting tools for wood and composite materials, offering customized tooling solutions.',
        descriptionAr: 'منتج لأدوات القطع الصناعية للخشب والمواد المركبة، يقدم حلول أدوات مخصصة.',
        products: ['Saw Blades', 'Cutterheads', 'Router Bits', 'Diamond Tools'],
        productsAr: ['شفرات المنشار', 'رؤوس القطع', 'بتات الراوتر', 'أدوات الماس']
    },
    'twt': {
        name: 'TWT',
        country: 'Italy',
        description: 'Italian manufacturer of precision cutting tools and accessories for CNC machining and panel processing.',
        descriptionAr: 'مصنع إيطالي لأدوات القطع الدقيقة وملحقاتها لآلات CNC ومعالجة الألواح.',
        products: ['Router Bits', 'Cutterheads', 'Boring Tools', 'Tool Holders'],
        productsAr: ['بتات الراوتر', 'رؤوس القطع', 'أدوات الحفر', 'حاملات الأدوات']
    },
    'jowat': {
        name: 'Jowat',
        country: 'Germany',
        description: 'Global supplier of industrial adhesives for woodworking, packaging, and textile applications.',
        descriptionAr: 'مورد عالمي للمواد اللاصقة الصناعية للنجارة والتعبئة والتغليف وتطبيقات النسيج.',
        products: ['Hotmelt Adhesives', 'PUR Adhesives', 'Dispersion Adhesives', 'Solvent-Based Adhesives'],
        productsAr: ['مواد لاصقة ساخنة', 'مواد لاصقة PUR', 'مواد لاصقة مبعثرة', 'مواد لاصقة مذابة']
    },
    'tigra': {
        name: 'Tigra',
        country: 'Germany',
        description: 'German producer of carbide solutions for cutting tools and wear parts, serving woodworking and metal industries.',
        descriptionAr: 'منتج ألماني لحلول الكربيد لأدوات القطع وأجزاء التآكل، يخدم صناعات النجارة والمعادن.',
        products: ['Carbide Inserts', 'Knife Blanks', 'Tipped Tools', 'Wear Parts'],
        productsAr: ['إدراجات كربيد', 'فراغات السكاكين', 'أدوات مطلية', 'أجزاء التآكل']
    },
    'wemaro': {
        name: 'Wemaro',
        country: 'Germany',
        description: 'German producer of precision cutting and drilling tools for aluminum, PVC, and composite materials.',
        descriptionAr: 'منتج ألماني لأدوات القطع والحفر الدقيقة للألمنيوم وPVC والمواد المركبة.',
        products: ['Router Bits', 'Drill Bits', 'End Mills', 'Countersinks'],
        productsAr: ['بتات الراوتر', 'بتات الحفر', 'مطاحن النهاية', 'مثقاب التوسيع']
    },
    'bsp': {
        name: 'BSP',
        country: 'Germany',
        description: 'Supplier of industrial tooling systems and spare parts for woodworking and aluminum machining.',
        descriptionAr: 'مورد لأنظمة الأدوات الصناعية وقطع الغيار للنجارة وآلات الألمنيوم.',
        products: ['Cutterheads', 'Tool Bodies', 'Inserts', 'Boring Tools'],
        productsAr: ['رؤوس القطع', 'أجسام الأدوات', 'إدراجات', 'أدوات الحفر']
    },
    'g3': {
        name: 'G3 di Fantacci',
        country: 'Italy',
        description: 'Manufacturer of woodworking tools specializing in cutterheads and knives for solid wood and panels.',
        descriptionAr: 'مصنع لأدوات النجارة متخصص في رؤوس القطع والسكاكين للخشب الصلب والألواح.',
        products: ['Cutterheads', 'Profile Knives', 'Router Bits', 'Inserts'],
        productsAr: ['رؤوس القطع', 'سكاكين التشكيل', 'بتات الراوتر', 'إدراجات']
    },
    'ilma': {
        name: 'ILMA',
        country: 'Italy',
        description: 'Italian producer of high-precision tools for furniture and panel production industries.',
        descriptionAr: 'منتج إيطالي لأدوات عالية الدقة لصناعات إنتاج الأثاث والألواح.',
        products: ['Cutterheads', 'Router Bits', 'Boring Tools', 'Diamond Tools'],
        productsAr: ['رؤوس القطع', 'بتات الراوتر', 'أدوات الحفر', 'أدوات الماس']
    },
    'carl-rontigen': {
        name: 'Carl Rontgen',
        country: 'Germany',
        description: 'Manufacturer of precision saw blades and band saws for wood, metal, and plastic industries.',
        descriptionAr: 'مصنع شفرات المنشار الدقيقة ومناشير الشريط للخشب والمعادن وصناعات البلاستيك.',
        products: ['Band Saw Blades', 'Circular Saw Blades', 'Frame Saw Blades'],
        productsAr: ['شفرات منشار الشريط', 'شفرات المنشار الدائري', 'شفرات منشار الإطار']
    },
    'interabrasive': {
        name: 'Inter Abrasive',
        country: 'Turkey',
        description: 'Producer of coated abrasives supplying sanding and grinding solutions for multiple industries.',
        descriptionAr: 'منتج للمواد الكاشطة المطلية يقدم حلول الصنفرة والطحن لصناعات متعددة.',
        products: ['Sanding Belts', 'Discs', 'Rolls', 'Sheets', 'Flap Wheels'],
        productsAr: ['أحزمة الصنفرة', 'أقراص', 'لفائف', 'أوراق', 'عجلات الصنفرة']
    },
    'dynabrade': {
        name: 'Dynabrade',
        country: 'USA',
        description: 'American manufacturer of high-quality pneumatic tools for surface finishing and material removal.',
        descriptionAr: 'مصنع أمريكي لأدوات هوائية عالية الجودة لإنهاء السطح وإزالة المواد.',
        products: ['Air Sanders', 'Grinders', 'Polishers', 'Abrasive Tools'],
        productsAr: ['صنافير هوائية', 'طواحين', 'ملمعات', 'أدوات كاشطة']
    },
    'dj-tol': {
        name: 'DJ Tol',
        country: 'Italy',
        description: 'Italian company providing precision tools for wood, plastic, and non-ferrous materials.',
        descriptionAr: 'شركة إيطالية تقدم أدوات دقيقة للخشب والبلاستيك والمعادن غير الحديدية.',
        products: ['Router Bits', 'Cutterheads', 'Drilling Tools', 'CNC Tools'],
        productsAr: ['بتات الراوتر', 'رؤوس القطع', 'أدوات الحفر', 'أدوات CNC']
    },
    'utensil-centro': {
        name: 'Utensil Centro',
        country: 'Italy',
        description: 'Tool manufacturer specializing in carbide and diamond tools for wood and aluminum industries.',
        descriptionAr: 'مصنع أدوات متخصص في أدوات الكربيد والماس لصناعات الخشب والألمنيوم.',
        products: ['Cutterheads', 'Router Bits', 'Saw Blades', 'Diamond Tools'],
        productsAr: ['رؤوس القطع', 'بتات الراوتر', 'شفرات المنشار', 'أدوات الماس']
    },
    'said-tools': {
        name: 'Said Tools',
        country: 'Italy',
        description: 'Italian manufacturer of diamond and carbide tools for woodworking and composite materials.',
        descriptionAr: 'مصنع إيطالي لأدوات الماس والكربيد للنجارة والمواد المركبة.',
        products: ['Diamond Tools', 'Router Bits', 'Cutterheads', 'Inserts'],
        productsAr: ['أدوات الماس', 'بتات الراوتر', 'رؤوس القطع', 'إدراجات']
    }
};

function openBrandPopup(brandId) {
    const brand = brandData[brandId];
    if (!brand) return;
    
    const popup = document.getElementById('brandPopup');
    const brandImage = document.getElementById('popupBrandImage');
    const brandName = document.getElementById('popupBrandName');
    const brandCountry = document.getElementById('popupBrandCountry');
    const brandDescription = document.getElementById('popupBrandDescription');
    const brandProducts = document.getElementById('popupBrandProducts');
    
    // Get current language
    const currentLang = document.documentElement.lang || 'en';
    const isArabic = currentLang === 'ar';
    
    // Set brand information with proper image path
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.svg'];
    let imageSrc = '';
    
    // Handle special cases for image file names
    const imageMap = {
        'deerfos': 'Deerfos.jpg',
        'freud': 'Freud.jpg',
        'kleiberit': 'Kleiberit.jpg',
        'leuco': 'Leuco.jpg',
        'leitz': 'Leitz.jpg',
        'cmt': 'CMT.jpg',
        'gda': 'GDA.jpg',
        'twt': 'TWT.jpg',
        'jowat': 'Jowat.jpg',
        'tigra': 'Tigra.jpg',
        'wemaro': 'wemaro.svg',
        'bsp': 'BSP.JPG',
        'g3': 'G3.jpeg',
        'ilma': 'ILMA.jpg',
        'carl-rontigen': 'CarlRontigen.jpg',
        'interabrasive': 'Interabrasive.png',
        'dynabrade': 'Dynabrade.svg',
        'dj-tol': 'DJTol.jpg',
        'utensil-centro': 'UtensilCentro.jpg',
        'said-tools': 'SaidTools.jpg'
    };
    
    imageSrc = `assets/img/uploads/${imageMap[brandId] || brandId.charAt(0).toUpperCase() + brandId.slice(1).replace('-', '') + '.jpg'}`;
    brandImage.src = imageSrc;
    brandImage.alt = `${brand.name} - ${brand.country}`;
    brandName.textContent = brand.name;
    brandCountry.textContent = brand.country;
    
    // Set description based on language
    brandDescription.textContent = isArabic ? brand.descriptionAr : brand.description;
    
    // Clear and populate products list based on language
    brandProducts.innerHTML = '';
    const productsList = isArabic ? brand.productsAr : brand.products;
    productsList.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        brandProducts.appendChild(li);
    });
    
    // Show popup
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeBrandPopup() {
    const popup = document.getElementById('brandPopup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    const popup = document.getElementById('brandPopup');
    if (event.target === popup) {
        closeBrandPopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeBrandPopup();
    }
});

console.log('Golden Supplies Trading website loaded successfully');