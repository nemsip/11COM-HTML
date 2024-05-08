document.addEventListener('DOMContentLoaded', function() {
    const blurredElement = document.getElementById('blurred-element');

    window.addEventListener('mousewheel', function(e) {
        console.log(e)

        // add logic to move "blurred-element" to the left of the screen as user scrolls

        e.preventDefault();

    });
});

// saves (they dont work)
// https://stackoverflow.com/questions/19731730/jquery-js-detect-users-scroll-attempt-without-any-window-overflow-to-scroll
// https://stackoverflow.com/questions/23762774/is-there-a-reliable-way-to-detect-scrolling-on-all-devices-using-javascript-jq