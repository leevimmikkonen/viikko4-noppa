const noppa = document.querySelector('#dice')
const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

noppa.addEventListener('click',() => {
    const randomized_number = getRandomIntNumberInRange(1,6)
    if (randomized_number === 1) {
        noppa.innerHTML = '<img src="./img/1.png">';
      } else if (randomized_number === 2) {
        noppa.innerHTML = '<img src="./img/2.png">';
      } else if (randomized_number === 3) {
        noppa.innerHTML = '<img src="./img/3.png">';
      } else if (randomized_number === 4) {
        noppa.innerHTML = '<img src="./img/4.png">';
      } else if (randomized_number === 5) {
        noppa.innerHTML = '<img src="./img/5.png">';
      } else if (randomized_number === 6) {
        noppa.innerHTML = '<img src="./img/6.png">';
      }  
})