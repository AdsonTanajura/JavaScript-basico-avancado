const url = document.getElementById('url');

console.log(url.getAttribute('href'));

url.setAttribute('href', 'https://www.youtube.com/watch?v=ZUHh2PU3Lao&list=RDMMZUHh2PU3Lao&index=1');

console.log(url.getAttribute('href'));
