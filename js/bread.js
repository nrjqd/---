// 只宣告一次變數
if (!window.breadcrumbsInitialized) {
    const breadcrumbsSpan = document.querySelector('.breadcrumbs span');
    const contentSections = document.querySelectorAll('.content-section, .timeline-section');


    window.addEventListener('scroll', () => {
        let currentSection = '首頁'; 
        contentSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                const title = section.querySelector('.section-title, h2');
                if (title) currentSection = title.innerText;
            }
        });
        breadcrumbsSpan.textContent = currentSection;
    });

    window.breadcrumbsInitialized = true; // 標記初始化完成
}