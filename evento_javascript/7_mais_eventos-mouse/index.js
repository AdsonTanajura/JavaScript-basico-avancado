const button = document.querySelector('#haha');

button.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/';
})

button.addEventListener('dblclick', () => {
    window.location.href = 'https://www.youtube.com/watch?v=ZUHh2PU3Lao&list=RDZUHh2PU3Lao&start_radio=1';
})

const button2 = document.querySelector('#hihi');

button2.addEventListener('mousup', () => {
    console.log('Soltou o botao');
});

button2.addEventListener('mousedown', () => {
    console.log('Apretou o botao');
});