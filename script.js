function flipCard(card) {
    const inner = card.querySelector('.flipcard-post');
    inner.classList.toggle('is-flipped');
}

function toggleMusic() {
    const audio = document.getElementById('ocean-audio');
    const button = document.getElementById('music-toggle');

    if (audio.paused) {
        audio.play();
        button.innerText = "🔇 Pause Music";
    } else {
        audio.pause();
        button.innerText = "🔊 Play Music";
    }
}