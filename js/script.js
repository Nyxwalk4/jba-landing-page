/**
 * JBA - Japanese Base Academy
 * Interactive UX Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle UX
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            navLinks.classList.toggle('active');
        });

        // Close nav when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. FAQ Accordion UX
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other accordion items
            faqItems.forEach(i => i.classList.remove('active'));

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 3. Testimonial Dots Pagination UX
    const dots = document.querySelectorAll('.dot');
    const cards = document.querySelectorAll('.testimonial-card');

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));

            // Update active dot
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');

            // Highlight corresponding testimonial card
            cards.forEach((card, cIdx) => {
                if (cIdx === index) {
                    card.classList.add('active');
                    card.style.borderColor = 'var(--primary-border)';
                    card.style.transform = 'translateY(-4px)';
                } else {
                    card.classList.remove('active');
                    card.style.borderColor = '#f1f5f9';
                    card.style.transform = 'none';
                }
            });
        });
    });
});
