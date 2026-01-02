const buttons =  document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(b){
    //console.log(b);
    b.addEventListener('click', function(e){
        // console.log(e);
        // console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'orange') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'pink') {
            body.style.backgroundColor = e.target.id;
        }
        
    })
})
