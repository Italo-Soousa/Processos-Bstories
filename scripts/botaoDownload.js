// Primeiro código

document.addEventListener('DOMContentLoaded', function () {
    const installBtn = document.querySelector('.install-btn');
    const modal = document.getElementById('install-modal');

    installBtn.addEventListener('click', () => {
        if (isIOS()) {
          modal.style.display = 'flex';
        } else if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
              console.log('Usuário aceitou a instalação');
            } else {
              console.log('Usuário recusou a instalação');
            }
            deferredPrompt = null;
          });
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

// Segundo código


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../../../assets/service-worker.js')
    .then(reg => console.log('Service Worker registrado!', reg))
    .catch(err => console.log('Erro ao registrar o Service Worker', err));
}

// Lógica que indentifica o aparelho da pessao 

function isIOS() {
    return /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
  }