// Articles Page JavaScript

// Article titles for sticky header
const articleTitles = {
    1: "خواص میوه‌های تازه برای سلامتی",
    2: "همه چیز درباره میوه خشک",
    3: "طرز تهیه اسموتی‌های سالم",
    4: "بهترین میوه‌های فصل زمستان",
    5: "راهنمای انتخاب میوه‌های تازه",
    6: "خواص آبمیوه‌های طبیعی",
    7: "رژیم غذایی سالم با میوه‌ها",
    8: "کشت میوه در خانه: راهنمای کامل باغبانی خانگی",
    9: "ترکیب میوه و عسل: خواص درمانی و دستورات مفید",
    10: "فریز کردن میوه: راهنمای کامل نگهداری طولانی مدت",
    11: "دسرهای میوه‌ای: دستورات خوشمزه و سالم",
    12: "نگهداری میوه‌ها در کرمان: نکات و روش‌ها",
    13: "گنجینه طعم و رنگ: با میوه‌های خاص کرمان بیشتر آشنا شوید!",
    14: "کرمان: تابلوی رنگارنگ فصول و میوه‌های بهشتی",
    15: "باغ‌های پنهان: سفری به دنیای میوه‌های خاص و بومی استان کرمان",
    16: "راهنمای انتخاب میوه‌های مناسب برای آب و هوای کرمان",
    17: "میوه‌های خوشمزه کرمان: سفری به دنیای طعم‌ها و خواص",
    18: "رازهای نگهداری میوه: چطور میوه‌ها رو تازه نگه داریم تا بیشتر لذت ببریم؟"
};

// Select article function
function selectArticle(articleNumber) {
    // Hide all articles
    document.querySelectorAll('.article-content').forEach(article => {
        article.classList.remove('active');
    });

    // Remove active class from all menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show selected article
    const articleEl = document.getElementById(`article-${articleNumber}`);
    articleEl.classList.add('active');

    // Add active class to selected menu item
    document.querySelector(`[data-article="${articleNumber}"]`).classList.add('active');

    // Update sticky title
    updateStickyTitle(articleTitles[articleNumber]);

    // تغییر عنوان صفحه (title) بر اساس مقاله فعال
    if (articleTitles[articleNumber]) {
        document.title = articleTitles[articleNumber] + ' | سرزمین میوه';
    }

    // فوکوس خودکار روی تیتر مقاله برای دسترس‌پذیری
    setTimeout(() => {
        const h2 = articleEl.querySelector('h2');
        if (h2) {
            h2.setAttribute('tabindex', '-1');
            h2.focus();
        }
    }, 100);

    // Scroll to article with smooth animation
    if (articleEl) {
        articleEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Update sticky title
function updateStickyTitle(title) {
    const stickyTitle = document.querySelector('.sticky-article-title');
    if (stickyTitle) {
        stickyTitle.textContent = title;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Menu functionality
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Add click event listeners to menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const articleNumber = this.getAttribute('data-article');
            selectArticle(parseInt(articleNumber));
            
            // Update active state
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Mobile Articles Button Functionality
    const mobileArticlesBtn = document.getElementById('mobile-articles-btn');
    const mobileArticlesContainerOverlay = document.getElementById('mobile-articles-container-overlay');
    const mobileArticlesContainerClose = document.getElementById('mobile-articles-container-close');
    const mobileArticlesContainerList = document.querySelector('.mobile-articles-container-list');

    // Article data for mobile container
    const mobileArticleData = [
        {
            id: 1,
            title: "خواص میوه‌های تازه برای سلامتی",
            description: "ویتامین‌ها، مواد معدنی و آنتی‌اکسیدان‌های موجود در میوه‌ها",
            image: "1.png"
        },
        {
            id: 2,
            title: "همه چیز درباره میوه خشک",
            description: "خواص، روش تهیه و مصرف میوه‌های خشک",
            image: "2.png"
        },
        {
            id: 3,
            title: "طرز تهیه اسموتی‌های سالم",
            description: "دستور پخت اسموتی‌های مقوی و خوشمزه",
            image: "3.png"
        },
        {
            id: 4,
            title: "بهترین میوه‌های فصل زمستان",
            description: "بهترین میوه‌ها برای فصل سرما",
            image: "4.png"
        },
        {
            id: 5,
            title: "راهنمای انتخاب میوه‌های تازه",
            description: "نکات مهم در انتخاب میوه‌های با کیفیت",
            image: "5.png"
        },
        {
            id: 6,
            title: "خواص آبمیوه‌های طبیعی",
            description: "فواید و روش تهیه آبمیوه‌های خانگی",
            image: "6.png"
        },
        {
            id: 7,
            title: "رژیم غذایی سالم با میوه‌ها",
            description: "نکات مهم در برنامه‌ریزی رژیم غذایی سالم",
            image: "1.png"
        },
        {
            id: 8,
            title: "کشت میوه در خانه",
            description: "راهنمای کامل باغبانی خانگی",
            image: "2.png"
        },
        {
            id: 9,
            title: "ترکیب میوه و عسل",
            description: "خواص درمانی و دستورات مفید",
            image: "3.png"
        },
        {
            id: 10,
            title: "فریز کردن میوه",
            description: "راهنمای کامل نگهداری طولانی مدت",
            image: "4.png"
        },
        {
            id: 11,
            title: "دسرهای میوه‌ای",
            description: "دستورات خوشمزه و سالم",
            image: "5.png"
        },
        {
            id: 12,
            title: "نگهداری میوه‌ها در کرمان",
            description: "نکات و روش‌های نگهداری",
            image: "6.png"
        },
        {
            id: 13,
            title: "گنجینه طعم و رنگ",
            description: "با میوه‌های خاص کرمان آشنا شوید",
            image: "1.png"
        },
        {
            id: 14,
            title: "کرمان تابلوی رنگارنگ",
            description: "فصول و میوه‌های بهشتی",
            image: "2.png"
        },
        {
            id: 15,
            title: "باغ‌های پنهان",
            description: "سفری به دنیای میوه‌های خاص کرمان",
            image: "3.png"
        },
        {
            id: 16,
            title: "راهنمای انتخاب میوه کرمان",
            description: "مناسب برای آب و هوای کرمان",
            image: "4.png"
        },
        {
            id: 17,
            title: "میوه‌های خوشمزه کرمان",
            description: "سفری به دنیای طعم‌ها و خواص",
            image: "5.png"
        },
        {
            id: 18,
            title: "رازهای نگهداری میوه",
            description: "چطور میوه‌ها را تازه نگه داریم",
            image: "6.png"
        }
    ];

    // Function to create mobile article items
    function createMobileArticleItems() {
        if (mobileArticlesContainerList) {
            mobileArticlesContainerList.innerHTML = '';
            mobileArticleData.forEach(article => {
                const articleItem = document.createElement('div');
                articleItem.className = 'mobile-article-container-item';
                articleItem.setAttribute('data-article', article.id);
                articleItem.innerHTML = `
                    <img src="${article.image}" alt="${article.title}">
                    <div class="mobile-article-container-content">
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                    </div>
                `;
                
                // Add click event
                articleItem.addEventListener('click', function() {
                    const articleNumber = this.getAttribute('data-article');
                    selectArticle(parseInt(articleNumber));
                    
                    // Close overlay
                    mobileArticlesContainerOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                });
                
                mobileArticlesContainerList.appendChild(articleItem);
            });
        }
    }

    // Open mobile articles container overlay
    if (mobileArticlesBtn) {
        mobileArticlesBtn.addEventListener('click', function() {
            createMobileArticleItems();
            mobileArticlesContainerOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        });
    }

    // Close mobile articles container overlay
    if (mobileArticlesContainerClose) {
        mobileArticlesContainerClose.addEventListener('click', function() {
            mobileArticlesContainerOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scroll
        });
    }

    // Close overlay when clicking outside
    if (mobileArticlesContainerOverlay) {
        mobileArticlesContainerOverlay.addEventListener('click', function(e) {
            if (e.target === mobileArticlesContainerOverlay) {
                mobileArticlesContainerOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Close overlay on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileArticlesContainerOverlay.classList.contains('active')) {
            mobileArticlesContainerOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Initialize
    updateStickyTitle(articleTitles[1]);

    // Scroll tracking for sticky title and progress bar
    let ticking = false;

    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        // Update progress bar
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }

        // Show/hide sticky title
        const stickyTitle = document.getElementById('sticky-title');
        if (stickyTitle) {
            if (scrollTop > 200) {
                stickyTitle.classList.add('show');
            } else {
                stickyTitle.classList.remove('show');
            }
        }

        // Update back button position based on scroll
        const backBtn = document.querySelector('.back-btn');
        if (backBtn) {
            if (scrollTop > 100) {
                backBtn.classList.add('scrolled');
            } else {
                backBtn.classList.remove('scrolled');
            }
        }

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollProgress);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
});