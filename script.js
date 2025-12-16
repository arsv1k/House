const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// Проверка, чтобы не было ошибок на страницах без поиска
if (btn && search && input) {
    btn.addEventListener('click', () => {
        search.classList.toggle('active')
        input.focus()
    })
}

const infoLinks = document.querySelectorAll('.info-link');
const indicator = document.querySelector('.active-indicator');

if (infoLinks.length > 0 && indicator) {
    infoLinks.forEach(link => {
        link.addEventListener('click', () => {
            const linkRect = link.getBoundingClientRect();
            const barRect = link.parentElement.getBoundingClientRect();

            // анимация индикатора
            indicator.style.width = `${linkRect.width}px`;
            indicator.style.left = `${linkRect.left - barRect.left}px`;
            indicator.style.opacity = '1';

            // переход на страницу
            const url = link.dataset.link;

            // небольшая задержка, чтобы анимация успела начаться
            setTimeout(() => {
                window.location.href = url;
            }, 200);
        });
    });
}


const phoneBtn = document.getElementById('phoneBtn');

if (phoneBtn) {
    phoneBtn.addEventListener('click', () => {
        
        alert('Наш номер: +375 (33) 123-45-67 (МТС)');
    });
}