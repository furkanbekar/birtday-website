// Doğum günü tarihini ayarlayın (YYYY, MM-1, DD formatında)
const birthdayDate = new Date(2024, 11, 31); // Ay değeri 0'dan başlar (0=Ocak, 11=Aralık)

function updateCountdown() {
    const now = new Date();
    const difference = birthdayDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (difference < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown-timer').innerHTML = '<h2>İyi ki Doğdun Sevgilim!</h2>';
    }
}

// Her saniye güncelle
const countdownInterval = setInterval(updateCountdown, 1000);

// Sayfa yüklendiğinde müziği otomatik başlat
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.5; // Ses seviyesini %50'ye ayarla
});

// Fotoğraf galerisi için tıklama efekti
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
}); 