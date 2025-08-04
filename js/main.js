// Main initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    handleUrlHash();
    window.addEventListener('hashchange', handleUrlHash);
    initTouchSupport();
    
    // Initialize timeline animation
    window.addEventListener('scroll', animateTimeline);
    
    // Initialize lightbox
    initLightbox();
    
    // Initialize modal event listeners
    initModalEventListeners();
    
    // Initialize project click handlers
    initProjectClickHandlers();
    
    // Remove active class from nav items initially
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
});

function animateTimeline() {
    document.querySelectorAll('.timeline-entry').forEach(entry => {
        const rect = entry.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            entry.classList.add('animate');
        }
    });
}

function initModalEventListeners() {
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalNext = document.querySelector('.modal-next');
    const modalPrev = document.querySelector('.modal-prev');

    modalClose.addEventListener('click', closeModal);
    modalNext.addEventListener('click', () => navigateProject(1));
    modalPrev.addEventListener('click', () => navigateProject(-1));

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    window.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') navigateProject(1);
            if (e.key === 'ArrowLeft') navigateProject(-1);
        }
    });
}

function initProjectClickHandlers() {
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', () => {
            const id = project.getAttribute('data-project-id');
            if (id) openModal(id);
        });
    });
}
