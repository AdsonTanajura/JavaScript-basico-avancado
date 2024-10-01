const x = 1;
const y = 2;

if(x == 1 && y == 2) {
    let z = 5;
    if(z > 2){
        console.log(z);
        console.log('De 1 a 100 os números a baixo é inpar');
        for(i = 1; i <= 100; i++) {
            if((i % 2) !== 0) {
                console.log(i);
            }
        }
    }
}