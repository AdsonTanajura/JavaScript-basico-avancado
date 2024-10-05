const newH1 = document.createElement('h1');
newH1.textContent = 'Hello world NEW ELEMENT BY JS';

const oldH1 = document.getElementById('first-h1');

const pai = oldH1.parentNode;

pai.replaceChild(newH1, oldH1);
