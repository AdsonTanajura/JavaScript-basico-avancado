const textLimited = (text) => {
  if(text.length > 10) {
    console.log('Texto muito longo');
  } else if (text.length > 0) {
    console.log('Texto dentro do limite');
  } else {
    console.log('Digite alguma coisa, por favor!');
  }
};

textLimited('Adson');

textLimited('dawdawdawdwadaw');

textLimited('');