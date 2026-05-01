function flipCard(card) {
    const inner = card.querySelector('.flipcard-post');
    inner.classList.toggle('is-flipped');
}

function toggleMusic() {
    const audio = document.getElementById('ocean-audio');
    const button = document.getElementById('music-toggle');

    if (audio.paused) {
        audio.play();
        button.innerText = "🔇";
    } else {
        audio.pause();
        button.innerText = "🔊";
    }
}

window.addEventListener('scroll', function() {
    const goupbtn = document.getElementById('goup');
    if (window.scrollY > 400) {
        goupbtn.classList.add('show');
    } else {
        goupbtn.classList.remove('show');
    }
});

function goTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}