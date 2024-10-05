const buttonADD = document.querySelector('#add-evento');
const buttonRMV = document.querySelector('#remov-evento');

const sendMessagem = (e) => {
    console.log(e);
};

buttonADD.addEventListener('click', sendMessagem);
buttonRMV.addEventListener('click', (e) => {
   console.log(e);
});
