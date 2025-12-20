/**
 * Unified Navigation Component
 * Creates consistent header and footer across all pages
 * Includes global theme toggle functionality
 */

// ============================================
// GLOBAL THEME FUNCTIONALITY
// ============================================

// Get user's preferred theme (localStorage > system preference > dark default)
function getPreferredTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

// Set theme and update localStorage
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update all theme toggle buttons on the page
    const themeIcons = document.querySelectorAll('#theme-icon, .theme-icon');
    const themeToggles = document.querySelectorAll('#theme-toggle, .theme-toggle');

    themeIcons.forEach(icon => {
        icon.textContent = theme === 'dark' ? '🌙' : '☀️';
    });

    themeToggles.forEach(toggle => {
        toggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        toggle.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });

    console.log(`🎨 Theme set to: ${theme}`);
}

// Toggle between light and dark themes
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Initialize theme immediately (before DOM ready to prevent flash)
setTheme(getPreferredTheme());

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only auto-switch if user hasn't manually set a preference
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Make toggleTheme globally available
window.toggleTheme = toggleTheme;

// ============================================
// END GLOBAL THEME FUNCTIONALITY
// ============================================

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

// Create theme toggle button HTML
function createThemeToggleButton() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const icon = currentTheme === 'dark' ? '🌙' : '☀️';
    const ariaLabel = currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

    const button = document.createElement('button');
    button.id = 'theme-toggle';
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', ariaLabel);
    button.setAttribute('title', ariaLabel);
    button.innerHTML = `<span id="theme-icon" class="theme-icon">${icon}</span>`;
    button.addEventListener('click', toggleTheme);

    return button;
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

    // ============================================
    // THEME TOGGLE BUTTON INSERTION
    // ============================================

    // Check if theme toggle button already exists
    let themeToggle = document.getElementById('theme-toggle');

    if (!themeToggle) {
        // Find the mobile menu button to insert theme toggle before it
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

        if (mobileMenuBtn && mobileMenuBtn.parentElement) {
            // Create a wrapper div if one doesn't exist
            let buttonWrapper = mobileMenuBtn.parentElement;

            // If the parent isn't a flex container, we need to handle differently
            if (!buttonWrapper.style.display || buttonWrapper.style.display !== 'flex') {
                // Create a new wrapper
                const wrapper = document.createElement('div');
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.gap = '1rem';

                // Insert the theme toggle
                wrapper.appendChild(createThemeToggleButton());

                // Move the mobile menu button into wrapper
                mobileMenuBtn.parentElement.insertBefore(wrapper, mobileMenuBtn);
                wrapper.appendChild(mobileMenuBtn);
            } else {
                // Parent is already a flex container, insert before mobile menu button
                buttonWrapper.insertBefore(createThemeToggleButton(), mobileMenuBtn);
            }

            console.log('🌙 Theme toggle button added');
        } else {
            // Fallback: Try to find nav and add to the end
            const nav = document.querySelector('header nav');
            if (nav) {
                nav.appendChild(createThemeToggleButton());
                console.log('🌙 Theme toggle button added to nav');
            }
        }
    } else {
        // Theme toggle exists, make sure it has the click event listener
        themeToggle.addEventListener('click', toggleTheme);
        console.log('🌙 Theme toggle event listener attached');
    }

    // Update theme icon to match current theme
    setTheme(getPreferredTheme());
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
