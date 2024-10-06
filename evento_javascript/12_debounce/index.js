let time;

window.addEventListener('mousemove', (e) => {
    clearTimeout(time);
    time = setTimeout(()=>{
        console.log(e.y);
    }, 500)
})