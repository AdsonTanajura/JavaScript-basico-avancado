function iterarArrat(arr) {
    if(arr.length == 0) {
        throw new Error("O array precisa ter elementos");
    } else {
        for(let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}

itens = [];

iterarArrat(itens);