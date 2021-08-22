//1. (Main theme: Programming Basics)
//Write a function that logs to the console numbers 1 to 100.
function getNumbers(){
    for(let i=1; i <= 100; i++){
    if (i%3 == 0 && i%5 == 0){
        console.log(`${i}, jackpot`);
    }else if(i%3 == 0){
        console.log(`${i}, this number is divisible by 3`);
    }else if(i%5 == 0){
        console.log(`${i}, this number is divisible by 5`);
    }else{
        console.log(i);
    }
}
}
getNumbers();

//2. (Main theme: DOM manipulation)
const button = document.createElement('button');
const body = document.querySelector('body');

button.innerHTML = 'Click me';
body.appendChild(button);
let myPics = new Array("myPics/lion.jpeg","myPics/butterfly.jpeg",
"myPics/minions.jpeg","myPics/panda.jpeg", "myPics/sunflower.jpeg" );
let img = document.createElement('img');
function onClick(){ 
    let randomImg = Math.floor(Math.random() * myPics.length);
    img.src = myPics[randomImg];  
}
body.appendChild(img);
button.addEventListener('click', onClick);

//3. (Main theme: Async API calls)

fetch('https://reqres.in/api/users')
  .then(response => response.json())
  .then(data => {
      console.log(data);
      for(let i = 0; i < 3; i++)
      {
      const h2 = document.createElement('h2');
      h2.innerHTML = data.data[i].first_name;
      body.appendChild(h2);
      }   
  });