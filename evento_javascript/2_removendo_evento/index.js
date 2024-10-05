const buttonADD = document.querySelector('#add-evento');
const buttonRMV = document.querySelector('#remov-evento');

const sendMessagem = () => {
    console.log('BOM DIA! O SOL JÀ NASCEU LÀ NA FAZENDIANHA, ACORDA O.......')
};

buttonADD.addEventListener('click', sendMessagem);
buttonRMV.addEventListener('click', () => {
    buttonADD.removeEventListener('click', sendMessagem)
});
