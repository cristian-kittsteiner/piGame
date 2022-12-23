let input = document.getElementById('input')
let button = document.getElementById('button')
// 3.141592653589793
let x = Math.PI;
let strPi = x.toString();
let piArr = [];

// this is for standard Math.PI. it uses 17 digits, so 16 numbers. 
for (let index = 0; index < strPi.length; index++) {
    let num = strPi[index];
    piArr.push(num)
}
console.log(piArr)

button.onclick = () =>{
    console.log(input.value)
    if(input.value === piArr[0]){
        console.log('good guess, but everyone should know Pi starts with 3')
    } else {
        console.log('come on man, how do you not know that Pi starts with 3.')
    }
}