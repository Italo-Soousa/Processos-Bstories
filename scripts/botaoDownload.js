let deferredPrompt;

function isIOS() {
    return /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
}

document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = document.querySelector('.install-btn');
    const modal = document.getElementById('install-modal');

    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('beforeinstallprompt capturado');
        e.preventDefault();
        deferredPrompt = e;
    });

    downloadBtn.addEventListener('click', () => {
        if (isIOS()) {
            console.log('Dispositivo iOS detectado');
            modal.style.display = 'flex';
        } else if (/android/i.test(navigator.userAgent)) {
            console.log('Android detectado. Redirecionando para o APK...');
            window.location.href = "assets/downloads/app-release.apk";
        } else {
            console.log('Dispositivo Desktop detectado');
            alert('Para baixar o aplicativo, acesse esta página pelo seu celular.');
        }
    });

    window.fecharModal = function () {
        modal.style.display = 'none';
    }

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            fecharModal();
        }
    });
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../scripts/service-worker.js')
    .then(reg => console.log('Service Worker registrado!', reg))
    .catch(err => console.log('Erro ao registrar o Service Worker', err));
}