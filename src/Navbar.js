import React, { useEffect } from 'react';

function Navbar() {
    useEffect(() => {
        const navOpenBtn = document.querySelector('.nav-open-btn');
        const navCloseBtn = document.querySelector('.close-btn');
        const overlay = document.querySelector('.overlay');

        const openMenu = () => {
            // Logic to open the menu
            const navbar = document.querySelector('[data-navbar]');
            if (navbar) {
                navbar.classList.add('active'); // Add a class to show the menu
            }
        };

        const closeMenu = () => {
            // Logic to close the menu
            const navbar = document.querySelector('[data-navbar]');
            if (navbar) {
                navbar.classList.remove('active'); // Remove the class to hide the menu
            }
        };

        if (navOpenBtn) {
            navOpenBtn.addEventListener('click', openMenu);
        }

        if (navCloseBtn) {
            navCloseBtn.addEventListener('click', closeMenu);
        }

        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }

        // Cleanup function to remove event listeners
        return () => {
            if (navOpenBtn) {
                navOpenBtn.removeEventListener('click', openMenu);
            }
            if (navCloseBtn) {
                navCloseBtn.removeEventListener('click', closeMenu);
            }
            if (overlay) {
                overlay.removeEventListener('click', closeMenu);
            }
        };
    }, []); // Empty dependency array means it runs once on mount

    return (
        <header className="header" data-header>
            <div className="container">
                <a href="#" className="logo">
                    <img src="./images/603logo (1).avif" width="160" height="50" alt="Grilli - Home" />
                </a>
                <nav className="navbar" data-navbar>
                    <button className="close-btn" aria-label="close menu" data-nav-toggler>
                        <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                    </button>
                    <a href="#" className="logo">
                        <img src="./images/603logo (1).avif" width="160" height="50" alt="Grilli - Home" />
                    </a>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="#home" className="navbar-link hover-underline active">
                                <div className="separator"></div>
                                <span className="span">Home</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#menu" className="navbar-link hover-underline">
                                <div className="separator"></div>
                                <span className="span">Spaces</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#about" className="navbar-link hover-underline">
                                <div className="separator"></div>
                                <span className="span">About Us</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link hover-underline">
                                <div className="separator"></div>
                                <span className="span">Images</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="navbar-link hover-underline">
                                <div className="separator"></div>
                                <span className="span">Contact</span>
                            </a>
                        </li>
                    </ul>
                    <div className="text-center">
                        <p className="headline-1 navbar-title">Visit Us</p>
                        <address className="body-4">
                            Restaurant St, Delicious City, <br />
                            London 9578, UK
                        </address>
                        <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
                        <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">booking@grilli.com</a>
                        <div className="separator"></div>
                        <p className="contact-label">Booking Request</p>
                        <a href="tel:+88123123456" className="body-1 contact-number hover-underline">+88-123-123456</a>
                    </div>
                </nav>
                <a href="https://603interiorlayout.netlify.app/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <span className="text text-1">Make Your Space</span>
                    <span className="text text-2" aria-hidden="true">Make Your Space</span>
                </a>
                <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </button>
                <div className="overlay" data-nav-toggler data-overlay></div>
            </div>
        </header>
    );
}

export default Navbar;
