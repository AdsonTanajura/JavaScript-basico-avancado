const test = 'test no escopo global';

const testandoTest = () => {
    const test = ('test do escopo da funcao');
    console.log(test);
};
testandoTest();
console.log(test);