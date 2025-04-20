let deferredPrompt;

function isIOS() {
    return /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
}

document.addEventListener('DOMContentLoaded', function () {
    const installBtn = document.querySelector('.install-btn');
    const modal = document.getElementById('install-modal');

    window.addEventListener('beforeinstallprompt', (e) => {
        console.log('beforeinstallprompt capturado');
        e.preventDefault();
        deferredPrompt = e;
    });

    installBtn.addEventListener('click', () => {
        if (isIOS()) {
            console.log('Dispositivo iOS detectado');
            modal.style.display = 'flex';
        } else if (deferredPrompt) {
            console.log('Dispositivo com suporte detectado. Mostrando prompt de instalação...');
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(choiceResult => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('Usuário aceitou a instalação');
                } else {
                    console.log('Usuário recusou a instalação');
                }
                deferredPrompt = null;
            });
        } else {
            console.log('beforeinstallprompt não foi disparado ou já foi usado');
            alert('Este app não pode ser instalado agora. Tente novamente mais tarde ou use outro navegador.');
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
    navigator.serviceWorker.register('../../../scripts/service-worker.js')
    .then(reg => console.log('Service Worker registrado!', reg))
    .catch(err => console.log('Erro ao registrar o Service Worker', err));
}