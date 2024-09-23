

const images = document.querySelectorAll('.images img');
const submitButton = document.getElementById('submit');

let selectedRating = 0


function showStars(n) {
    images.forEach((image, index) =>{
        if(index < n){
            image.style.display = 'inline-block';
        }else{
            image.style.display = 'none';
        }
        selectedRating = n
    })
}
const button1 = document.getElementById('button1').addEventListener('click', () =>{
    showStars(1)
});
const button2 = document.getElementById('button2').addEventListener('click', () =>{
    showStars(2)
});
const button3 = document.getElementById('button3').addEventListener('click', () =>{
    showStars(3)
});
const button4 = document.getElementById('button4').addEventListener('click', () =>{
    showStars(4)
});
const button5 = document.getElementById('button5').addEventListener('click', () =>{
    showStars(5)
})

//submit button
submitButton.addEventListener('click', (e)=>{
  e.preventDefault()

  window.location.href = `message.html?rating=${selectedRating}`;

})
 