const button = document.querySelectorAll('.button')
console.log(button);

 const body = document.querySelector('body')
button.forEach(function(b){
   b.addEventListener('click', function(e){
    if (e.target.id === "grey") {
        body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "orange") {
        body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
        body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "pink") {
        body.style.backgroundColor = e.target.id;
    }
   })
    
})