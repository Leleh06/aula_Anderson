const video = document.getElementById('meuVideo');
const btnPlay = document.getElementById('btnPlay');
const btnPause = document.getElementById('btnPause');
const btnVolume = document.getElementById('btnVolume');

btnPlay.addEventListener('click', function() {
    video.play();
});

btnPause.addEventListener('click', function() {
    video.pause();
});

btnVolume.addEventListener('click', function() {
    video.volume = 0.2; // 20% do volume
});

video.addEventListener('ended', function() {
    alert('O vídeo terminou!');
});