window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
});

$(document).ready(function () {
    let addClass = 'color';
    let amountItem = $('.amount-item');
    let amountItemChild2 = $('.amount :nth-child(2)');
    let donationInput = $('#donation-input');
    let btns = $('.categories-articles-links .btn');
    let $cols = amountItem.click(function () {
        if (donationInput.val() === '') {
            $cols.removeClass(addClass);
            $(this).addClass(addClass);
        }
        if (donationInput.val() !== '') {
            $cols.removeClass(addClass);
        }
    });
    // const backToTopButton = document.querySelector(".back-to-top");
    // const pageProgressBar = document.querySelector(".progress-bar");
    // const scrollContainer = () => {
    //
    //     return document.documentElement || document.body;
    // };
    // const goToTop = () => {
    //
    //     document.body.scrollIntoView({
    //         behavior: "smooth"
    //     });
    // };

    // document.addEventListener("scroll", () => {
    //     const scrolledPercentage = (
    //         scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight)
    //     ) * 100;
    //
    //     pageProgressBar.style.width = `${scrolledPercentage}%`;
    // });
    //
    // backToTopButton.addEventListener("click", goToTop);

    amountItemChild2.addClass(addClass);
    donationInput.click(function () {
        amountItem.removeClass(addClass)
    });

    // Add active class to the current button (highlight it)
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            let current = $('.active');
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
