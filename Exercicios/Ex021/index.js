const dataType = (data) => {
     if (typeof data === 'boolean') {
         console.log('Esse tipo de dado é booleano');
     } else if (typeof data === 'number') {
         console.log('Esse tipo de dado é Number');
     } else if (typeof data === 'string') {
         console.log('Esse tipo de dado é String');
     } else {
         console.log('O tipo de dado não é String, Number nem Boolean');
     }
 };
 

dataType(123);
dataType('Adson');
dataType(true);