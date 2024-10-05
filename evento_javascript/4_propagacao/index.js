const buttonADD = document.querySelector('#add-evento');
const buttonRMV = document.querySelector('#remov-evento');
const p = document.querySelector('#ppp');


const sendMessagem = (e) => {
    console.log('Clicou no botton!!!');
    e.stopPropagation();
};

buttonADD.addEventListener('click', sendMessagem);
buttonRMV.addEventListener('click', (e) => {
   console.log(e);
});

p.addEventListener('click', () => {
    console.log('cliclou no PPP');
})