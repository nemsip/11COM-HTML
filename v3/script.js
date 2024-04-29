document.addEventListener('DOMContentLoaded', function() {
    const blurredElement = document.getElementById('blurred-element');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = scrollPosition / maxScroll;

        // kill me now please
        const newPosition = 50 - (scrollPercentage * 50);
        const newBlur = 10 + (scrollPercentage * 10);

        blurredElement.style.right = `${newPosition}%`;
        blurredElement.style.filter = `blur(${newBlur}px)`;
    });
});

// saves (they dont work)
// https://stackoverflow.com/questions/19731730/jquery-js-detect-users-scroll-attempt-without-any-window-overflow-to-scroll
// https://stackoverflow.com/questions/23762774/is-there-a-reliable-way-to-detect-scrolling-on-all-devices-using-javascript-jq