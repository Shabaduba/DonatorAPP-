let tg = window.Telegram.WebApp;
tg.expand();

// Функция отправки данных боту
function send(method) {
    const data = JSON.stringify({
        action: "donate",
        method: method
    });
    tg.sendData(data); // Отправляет данные и закрывает Mini App
}

// Функция для кнопки Меню
function openMenu() {
    tg.showAlert("Меню: здесь будут отчеты и история донатов.");
}

// Подтверждаем, что приложение готово
tg.ready();
