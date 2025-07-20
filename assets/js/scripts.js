document.addEventListener('DOMContentLoaded', function() {

    const themeToggleBtns = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    const moonIcon = `<i class="bi bi-moon-stars-fill"></i>`;
    const sunIcon = `<i class="bi bi-sun-fill"></i>`;

    const applyTheme = () => {
        if (localStorage.getItem('color-theme') === 'dark' || 
           (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            themeToggleBtns.forEach(btn => btn.innerHTML = sunIcon);
        } else {
            document.documentElement.classList.remove('dark');
            themeToggleBtns.forEach(btn => btn.innerHTML = moonIcon);
        }
    };

    applyTheme();

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            
            if (document.documentElement.classList.contains('dark')) {
                localStorage.setItem('color-theme', 'dark');
                themeToggleBtns.forEach(b => b.innerHTML = sunIcon);
            } else {
                localStorage.setItem('color-theme', 'light');
                themeToggleBtns.forEach(b => b.innerHTML = moonIcon);
            }
        });
    });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = mobileMenuButton.querySelector('i');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenuIcon.classList.remove('bi-x');
            mobileMenuIcon.classList.add('bi-list');
        } else {
            mobileMenuIcon.classList.remove('bi-list');
            mobileMenuIcon.classList.add('bi-x');
        }
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuIcon.classList.remove('bi-x');
            mobileMenuIcon.classList.add('bi-list');
        });
    });

    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-xl');
        } else {
            header.classList.remove('shadow-xl');
        }
    });

    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;
            const accordionIcon = header.querySelector('i');

            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-content').style.maxHeight = null;
                    item.querySelector('.accordion-header i').classList.remove('rotate-180');
                }
            });
            
            accordionItem.classList.toggle('active');
            accordionIcon.classList.toggle('rotate-180');

            if (accordionItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
});