let string = "";
let buttons = document.querySelectorAll('.button');

function increaseHeight(y){
    let numberOfCharacters = y.value.length;
    if(numberOfCharacters>=5){
        let height = numberOfCharacters + "ch";
        y.style.height = height;
    } 
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            const result = new Function('return ' + string)();
            string = result;
            document.querySelector('input').value = string;
        } 
        else if(e.target.innerHTML === 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML === 'x') {
            string += '*';
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML === 'del') {
            string = string.substring(0, string.length-1);
            document.querySelector('input').value = string;
        }
        else {
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});

















// let string = "";
// let buttons = document.querySelectorAll('.button');

// Array.from('buttons').forEach(('button') => {
//     button.addEventListener('click', (e) => {
//         if (e.target.innerHTML == '=') {
//             string = eval(string)
//             document.querySelector('input').value = string;
//         } else {
//             string += e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// })