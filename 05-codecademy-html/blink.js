function blink() {

    let alert = document.querySelector('.alert');

    if (alert.style.visibility === 'visible') {
        alert.style.visibility = 'hidden';
    } else {
        alert.style.visibility = 'visible';
    }
}


// to blink every 0.5 seconds (500 mS)
window.setInterval(blink, 400);