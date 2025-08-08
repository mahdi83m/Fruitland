// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Countdown timers for deals

function updateTimer(elementId, endTime) {
    const timerElement = document.getElementById(elementId);
    if (!timerElement) return;

    const now = new Date().getTime();
    const distance = endTime - now;

    if (distance < 0) {
        timerElement.textContent = '00';
        return;
    }

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.textContent = hours.toString().padStart(2, '0');
    
    // Update minutes and seconds for the specific timer
    const timerContainer = timerElement.closest('.timer');
    if (timerContainer) {
        const minutesElement = timerContainer.querySelector('.timer-number:nth-child(2)');
        const secondsElement = timerContainer.querySelector('.timer-number:nth-child(3)');
        
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
}

// Set end times for countdowns (24 hours and 12.5 hours from now)
const endTime1 = new Date().getTime() + (24 * 60 * 60 * 1000);
const endTime2 = new Date().getTime() + (12 * 60 * 60 * 1000) + (30 * 60 * 1000);

// Update timers every second
setInterval(() => {
    updateTimer('hours1', endTime1);
    updateTimer('hours2', endTime2);
}, 1000);


// Notification system
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #26de81, #20bf6b);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Custom notification for demo site (for .card-btn, .deal-btn, .article-btn)
function showCustomNotif() {
    // Remove existing notif if present
    const oldNotif = document.querySelector('.custom-notif');
    if (oldNotif) oldNotif.remove();

    const notif = document.createElement('div');
    notif.className = 'custom-notif';
    notif.textContent = 'این سایت دمو است !';
    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'custom-notif-progress';
    notif.appendChild(progress);
    document.body.appendChild(notif);
    // Animate in
    setTimeout(() => {
        notif.classList.add('show');
        progress.style.transition = 'transform 2.2s linear';
        progress.style.transform = 'scaleX(0)';
    }, 10);
    // Animate out after 2.2s
    setTimeout(() => {
        notif.classList.remove('show');
        notif.classList.add('hide');
        setTimeout(() => {
            notif.remove();
        }, 700);
    }, 2200);
}
document.body.addEventListener('click', function(e) {
    if (e.target.closest('.card-btn, .deal-btn, .article-btn, .social-links a')) {
        showCustomNotif();
    }
});

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a');

    // Open mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    });

    // Close mobile menu
    function closeMobileMenu() {
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    }

    mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileNavOverlay.addEventListener('click', function(e) {
        if (e.target === mobileNavOverlay) {
            closeMobileMenu();
        }
    });

    // Close menu when clicking on links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.category-card, .deal-card, .special-content > *').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});



// Add hover effects to category cards
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to all buttons
document.querySelectorAll('.btn, .card-btn, .deal-btn, .special-btn').forEach(button => {
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);



const images = [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
    "6.png"
  ];
  
  const slider = document.querySelector(".slider");
  let currentIndex = 0;
  const slideElements = [];
  
  // یک‌بار همه اسلایدها رو می‌سازیم
  images.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Image ${index + 1}`;
    slide.appendChild(img);
    slider.appendChild(slide);
    slideElements.push(slide);
  });
  
  function updateSlides() {
    slideElements.forEach((slide, index) => {
      slide.classList.remove("prev", "center", "next");
  
      if (index === (currentIndex - 1 + images.length) % images.length) {
        slide.classList.add("prev");
      } else if (index === currentIndex) {
        slide.classList.add("center");
      } else if (index === (currentIndex + 1) % images.length) {
        slide.classList.add("next");
      }
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlides();
  }
  
  updateSlides();
setInterval(nextSlide, 3000);


  