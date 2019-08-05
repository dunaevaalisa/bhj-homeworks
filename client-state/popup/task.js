const modal = document.querySelector('.modal');
const closeBtn = modal.querySelector('.modal__close');

window.addEventListener('DOMContentLoaded', () => {
    if (getCookie('modalShowOnlyOnce') !== 'true') {
        modal.classList.add('modal_active');
    };
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('modalShowOnlyOnce', true, {expires: 9999});
});

function getCookie(name) {

    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : undefined
};

function deleteCookie(name) {

    setCookie(name, null, { expires: -1 })

};

function setCookie(name, value, props) {

    let exp = props.expires;

    if (typeof exp === "number" && exp) {

        let d = new Date();

        d.setTime(d.getTime() + exp*1000);

        exp = props.expires = d;

    };

    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() };

    value = encodeURIComponent(value);
    
    let updatedCookie = name + "=" + value;

    for (const propName in props) {

        updatedCookie += "; " + propName;

        let propValue = props[propName];

        if(propValue !== true){ updatedCookie += "=" + propValue };
    };

    document.cookie = updatedCookie;
};
