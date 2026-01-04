const form = document.querySelector('form')

// this usecase will give you empty
//const height =  parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height =  parseInt(document.querySelector('#height').value)
    const weight =  parseInt(document.querySelector('#weight').value)
    const results =  document.querySelector('#results')
    const weightguide = document.querySelector('#weight-guide')

    if (height === "" || height <= 0 || isNaN(height)) {
      results.innerHTML = "Please give a valid Height";  
    }else if (weight === "" || weight <= 0 || isNaN(weight)) {
      results.innerHTML = "Please give a valid Weight";  
    } else {
      const bmi =  (weight / ((height*height)/10000)).toFixed(2)
      // show the results
      results.innerHTML = `<span>${bmi}</span>`
      if(bmi < 18.6){
        weightguide.innerHTML = `<span>Your Weight is Under Weight</span>`
    }else if(bmi >= 18.6 || bmi <= 24.9 ){
        weightguide.innerHTML = `<span>Your Weight is Normal</span>`
    }
      else{
        weightguide.innerHTML = `<span>Your Weight is Over Weight</span>`
    }
}
})