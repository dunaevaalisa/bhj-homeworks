const editor = document.getElementById('editor');

editor.addEventListener('change', () => {
    localStorage.setItem('editorText', editor.value);
});

window.addEventListener('DOMContentLoaded', () => {
    editor.textContent = localStorage.getItem('editorText');
});

