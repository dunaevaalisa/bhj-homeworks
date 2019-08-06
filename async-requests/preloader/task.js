const items = document.getElementById('items'),
        loader = document.querySelector('.loader');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.timeout = 20000;
xhr.addEventListener('readystatechange', () => {

    if (xhr.readyState === 4 && xhr.status === 200) {
      const obj = JSON.parse(xhr.response).response.Valute;
      for (const i in obj) {
            const item = `<div class="item">
                            <div class="item__code">
                                ${obj[i].CharCode} 
                            </div>
                            <div class="item__value">
                                ${obj[i].Value}
                            </div>
                            <div class="item__currency">
                                ${obj[i].Name}
                            </div>
                        </div>`;
            
            items.insertAdjacentHTML('afterbegin', item);
        };
        loader.classList.remove('loader_active');

        localStorage.setItem('currencyData', JSON.stringify(items.innerHTML));
    };
});

xhr.addEventListener('timeout', () => {
    alert('Извините, запрос превысил максимальное время');
});

window.addEventListener('load', () => {
    items.innerHTML = JSON.parse(localStorage.getItem('currencyData'));
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
    xhr.send();
})
