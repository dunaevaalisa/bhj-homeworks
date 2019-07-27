const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItem = [...document.querySelectorAll('.dropdown__item')];
  const dropdownItemLength = dropdownItem.length;

function showDropdown() {
    if(!dropdownList.classList.contains('dropdown__list_active')) {
        dropdownList.classList.add('dropdown__list_active');
    } else {
        dropdownList.classList.remove('dropdown__list_active');
    };
};

dropdownValue.addEventListener('click', () => {
    showDropdown();
});

for ( let i = 0; i < dropdownItemLength; i++) {
    dropdownItem[i].addEventListener('click', (e) => {
        e.preventDefault();
        dropdownList.classList.remove('dropdown__list_active');
        dropdownValue.textContent = dropdownItem[i].textContent;
    });
};
