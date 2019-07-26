const book = document.getElementById('book');
const bookFontSize = book.querySelector('.book__control_font-size');

function changeFontSize (e) {
  const fontSizes = [...bookFontSize.querySelectorAll('.font-size')];
  if (!e.target.classList.contains('font-size')) return;
  for ( const fontSize of fontSizes) {
    fontSize.classList.remove('font-size_active');
        };
  book.classList.remove('book_fs-small', 'book_fs-big');
  book.classList.add(`book_fs-${e.target.dataset.size}`);        
  e.target.classList.add('font-size_active');
  e.preventDefault();
};

bookFontSize.addEventListener('click', changeFontSize);


