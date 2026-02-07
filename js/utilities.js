// ===========================================
// NAVIGATION & SECTION MANAGEMENT
// ===========================================

function showSection(id) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Show the target section
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Update nav item active states
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const onclick = item.getAttribute('onclick');
        if (onclick && onclick.includes(`showSection('${id}')`)) {
            item.classList.add('active');
        }
    });
    
    // AUTO-HIDE SIDEBAR ON MOBILE
    if (window.innerWidth <= 768) {
        const sidebar = document.querySelector('.sidebar');
        const main = document.querySelector('.main-content');
        
        if (sidebar) sidebar.classList.remove('open');
        if (main) main.classList.remove('sidebar-open');
    }
}

function handleUrlHash() {
    const hash = window.location.hash.substring(1);
    
    if (hash && document.getElementById(hash)) {
        // Show the section
        document.querySelectorAll('.content-section').forEach(s => {
            s.style.display = 'none';
        });
        document.getElementById(hash).style.display = 'block';
        
        // Add active class to corresponding nav item
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            const onclick = item.getAttribute('onclick');
            if (onclick && onclick.includes(`showSection('${hash}')`)) {
                item.classList.add('active');
            }
        });
        
        // Scroll to the section
        document.getElementById(hash).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        // If no valid hash, show default section
        const defaultSection = document.getElementById('projects');
        if (defaultSection) {
            defaultSection.style.display = 'block';
            const firstNavItem = document.querySelector('.nav-item');
            if (firstNavItem) {
                firstNavItem.classList.add('active');
            }
        }
    }
}

// ===========================================
// SIDEBAR MOBILE TOGGLE
// ===========================================

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('.main-content');
    
    if (sidebar) sidebar.classList.toggle('open');
    if (main) main.classList.toggle('sidebar-open');
}

// ===========================================
// TIMELINE ANIMATION
// ===========================================

function animateTimeline() {
    document.querySelectorAll('.timeline-entry').forEach(entry => {
        const rect = entry.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            entry.classList.add('animate');
        }
    });
}

// ===========================================
// SWIPE HANDLING (for future use)
// ===========================================

function handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);
    
    // Check if it's a valid swipe (minimum distance)
    if (Math.max(absDeltaX, absDeltaY) < 50) return;
    
    // Determines if horizontal or vertical swipe
    if (absDeltaX > absDeltaY) {
        if (deltaX > 0) {
            // Swipe right - go to previous
            if (typeof this.previousItem === 'function') {
                this.previousItem();
            }
        } else {
            // Swipe left - go to next  
            if (typeof this.nextItem === 'function') {
                this.nextItem();
            }
        }
    } else {
        if (deltaY > 0) {
            // Swipe down - close modal
            if (typeof closeModal === 'function') {
                closeModal();
            }
        }
    }
}

// ===========================================
// TOUCH SUPPORT INITIALIZATION
// ===========================================

function initTouchSupport() {
    document.addEventListener('touchstart', function(e) {
        if (e.target.closest('.mobile-toggle')) {
            e.preventDefault();
            toggleSidebar();
        }
    }, { passive: false });
}

// ===========================================
// LIGHTBOX INITIALIZATION
// ===========================================

function initLightbox() {
    const lightboxOverlay = document.getElementById('image-lightbox-overlay');
    const lightboxClose = document.getElementById('lightbox-close');
    
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', () => {
            lightboxOverlay.style.display = 'none';
        });
    }
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            if (lightboxOverlay) {
                lightboxOverlay.style.display = 'none';
            }
        });
    }
}

// ===========================================
// INITIALIZATION ON LOAD
// ===========================================

window.addEventListener('load', function() {
    // Handle URL hash first
    handleUrlHash();
    
    // Set up hash change listener
    window.addEventListener('hashchange', handleUrlHash);
    
    // Initialize scroll animations
    window.addEventListener('scroll', animateTimeline);
    
    // Remove active class from nav items initially (will be set by handleUrlHash)
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
});

// Make functions globally available for onclick handlers
window.showSection = showSection;
window.toggleSidebar = toggleSidebar;
