const tabNavigation = document.querySelector('.tab__navigation');
const tabs = [...tabNavigation.querySelectorAll('.tab')];
const numbOfTubs = tabs.length;

const tabContent = [...document.querySelectorAll('.tab__content')];

function changeTab (e) {
    if(!e.target.classList.contains('tab_active') && e.target.classList.contains('tab')) {
        
        removeActiveTabs ();
        
        e.target.classList.add('tab_active');
        tabContent[tabs.indexOf(e.target)].classList.add('tab__content_active');
    };
};

tabNavigation.addEventListener('click', changeTab);

function removeActiveTabs () {
    for (var tab = 0; tab < numbOfTubs; tab++) {
        tabs[tab].classList.remove('tab_active');
        tabContent[tab].classList.remove('tab__content_active');
    };
};
