const yesOrNo = (text) => {
    const userText = String(text);
    const textConvert = userText.trim().toLocaleLowerCase();
    console.log(textConvert);
    if(textConvert != 'yes' && textConvert != 'no') {
        console.log('Por fravor digite Yes or No');
    } else {
        console.log('Obrigado por dar a sua opniao!');
    }
}

yesOrNo('No');