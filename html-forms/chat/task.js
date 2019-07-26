const chatWidgetSide = document.querySelector('.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');

const messages = document.querySelector( '.chat-widget__messages' );

const botAnswers = [
    'Вы не купили ни одного товара, чтобы с нами так разговаривать!',
    'Кто тут?',
    'Добрый день! До свидания!',
    'Где ваша совесть?',
    'К сожалению, все наши оперторы заняты. Не пишите нам больше!'
];

chatWidgetSide.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

let delayID;

chatWidgetInput.addEventListener('keyup', (e) => {

    let message = chatWidgetInput.value.trim();

    if ((e.key).toLowerCase() === 'enter' && message !== '') {
        clearTimeout(delayID);
            addClientMessage(message);
                addBotMessage();
                    cleanUpInputField(chatWidgetInput);
                        delayID = delayMes();         
    };
});

function delayMes () {
    let id = setTimeout(() => {
        addBotMessage();
    }, 30000);
    
    return id;
};

function scrollToBottom() {
    const widgetContainer = document.querySelector('.chat-widget__messages-container');
    widgetContainer.scrollTop = widgetContainer.scrollHeight;
};

function getTime() {
    const hh = new Date().getHours(),
            mm = new Date().getMinutes();

    return `${hh}:${mm < 10 ? '0' + mm : mm}`;
};

function getRandomBotAnswer() {

    return botAnswers[Math.floor(Math.random() * botAnswers.length)];

};

function addClientMessage(message) {

    messages.innerHTML += 
            `<div class="message message_client">
                <div class="message__time">${getTime()}</div>
                <div class="message__text">${message}</div>
            </div>`;

    scrollToBottom();
};

function addBotMessage() {

    messages.innerHTML += 
        `<div class="message">
            <div class="message__time">${getTime()}</div>
            <div class="message__text">${getRandomBotAnswer()}</div>
        </div>`;

    scrollToBottom();
};

function cleanUpInputField(message) {
    message.value = '';
};


