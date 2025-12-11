/**
 * Unified Navigation Component
 * Creates consistent header and footer across all pages
 */

// Detect current page for active state
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page;
}

// Create unified navigation HTML
function createUnifiedNav() {
    const currentPage = getCurrentPage();
    
    // Determine if we're on index page for anchor links vs absolute links
    const isIndexPage = currentPage === '' || currentPage === 'index.html';
    
    // Navigation links configuration
    const navLinks = [
        { text: 'Home', href: isIndexPage ? '#home' : 'index.html', id: 'index.html' },
        { text: 'Process', href: isIndexPage ? '#process' : 'index.html#process', id: 'process' },
        { text: 'Video Library', href: isIndexPage ? '#videos' : 'index.html#videos', id: 'videos' },
        { text: 'Design Menus', href: 'design-menus.html', id: 'design-menus.html' },
        { text: 'Community', href: isIndexPage ? '#community' : 'index.html#community', id: 'community' },
        { text: 'Worksheets', href: 'worksheets.html', id: 'worksheets.html' },
        { text: 'Bookmarks', href: 'bookmarks.html', id: 'bookmarks.html' },
        { text: 'My Learning', href: 'my-learning.html', id: 'my-learning.html' },
        { text: 'Research & Thinking', href: 'research.html', id: 'research.html' }
    ];
    
    // Build desktop nav links
    const desktopNavHTML = navLinks.map(link => {
        const isActive = currentPage === link.id || 
                        (link.id === 'index.html' && (currentPage === '' || currentPage === 'index.html'));
        const activeClass = isActive ? ' class="active"' : '';
        return `<li><a href="${link.href}"${activeClass}>${link.text}</a></li>`;
    }).join('');
    
    // Build mobile nav links
    const mobileNavHTML = navLinks.map(link => {
        return `<li><a href="${link.href}" onclick="closeMobileMenu()">${link.text}</a></li>`;
    }).join('');
    
    return { desktopNavHTML, mobileNavHTML };
}

// Create unified footer HTML
function createUnifiedFooter() {
    return `
        <div class="footer-content">
            <div class="footer-section">
                <h3>About</h3>
                <p>Free Design Thinking Hub is a global initiative to democratize design thinking education and empower the next generation of diverse innovators.</p>
            </div>
            <div class="footer-section">
                <h3>Resources</h3>
                <p><a href="index.html#videos">Video Library</a></p>
                <p><a href="index.html#community">Community Resources</a></p>
                <p><a href="design-menus.html">Design Menus</a></p>
                <p><a href="worksheets.html">Worksheets</a></p>
            </div>
            <div class="footer-section">
                <h3>Connect</h3>
                <p><a href="index.html#community">Join Community</a></p>
                <p><a href="bookmarks.html">My Bookmarks</a></p>
                <p><a href="my-learning.html">My Learning</a></p>
                <p><a href="research.html">Research & Thinking</a></p>
            </div>
        </div>
        <div style="border-top: 1px solid #333; padding-top: 2rem; margin-top: 2rem;">
            <p>&copy; 2025 Free Design Thinking Hub. All rights reserved. Built with <span aria-label="love" role="img"><span aria-hidden="true">❤️</span></span> for global accessibility.</p>
        </div>
    `;
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Update navigation if unified-nav class exists
    const navList = document.querySelector('.nav-links.unified-nav');
    const mobileNavList = document.querySelector('.mobile-nav.unified-nav ul');
    const footer = document.querySelector('footer .container.unified-footer');
    
    if (navList || mobileNavList || footer) {
        const { desktopNavHTML, mobileNavHTML } = createUnifiedNav();
        
        if (navList) {
            navList.innerHTML = desktopNavHTML;
        }
        
        if (mobileNavList) {
            mobileNavList.innerHTML = mobileNavHTML;
        }
        
        if (footer) {
            footer.innerHTML = createUnifiedFooter();
        }
        
        console.log('✅ Unified navigation loaded');
    }
});

// Mobile menu functions (global)
window.toggleMobileMenu = function() {
    const mobileNav = document.getElementById('mobile-nav') || document.querySelector('.mobile-nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileNav && menuBtn) {
        const isExpanded = mobileNav.classList.contains('active');
        
        mobileNav.classList.toggle('active');
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        
        if (menuIcon) {
            menuIcon.textContent = !isExpanded ? '✕' : '☰';
        }
    }
};

window.closeMobileMenu = function() {
    const mobileNav = document.getElementById('mobile-nav') || document.querySelector('.mobile-nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileNav) {
        mobileNav.classList.remove('active');
    }
    
    if (menuBtn) {
        menuBtn.setAttribute('aria-expanded', 'false');
    }
    
    if (menuIcon) {
        menuIcon.textContent = '☰';
    }
};

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
    const mobileNav = document.getElementById('mobile-nav') || document.querySelector('.mobile-nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (mobileNav && mobileNav.classList.contains('active')) {
        if (!mobileNav.contains(e.target) && !menuBtn.contains(e.target)) {
            window.closeMobileMenu();
        }
    }
});

// Close mobile menu on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const mobileNav = document.getElementById('mobile-nav') || document.querySelector('.mobile-nav');
        if (mobileNav && mobileNav.classList.contains('active')) {
            window.closeMobileMenu();
        }
    }
});

console.log('📱 Unified navigation script loaded');
