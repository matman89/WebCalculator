/*add event listeners*/

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven= document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const clear = document.querySelector('.clear');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const equal = document.querySelector('.equal');

let display = 0;
let l_number = 0;
let operand = '';
let r_number = 0;

/*add a dom to row 1*/
/* ... */

one.addEventListener('click',() => 
{
    return '1'
})

//step 1 -- Show something on the screen. Should default to 0
//step 2a -- If the user types in an operand, it should prepare to operand to 0
//step 2b -- if the user types in a number
    // step 2b.1 -- concatenate the strings of digits
    // steb 2b.2 -- continue to concatenate until a non-equal sign operand is used (disable equal)
    // steb 2b.3 -- ensure that if a different operand is selected, it supersedes the former
    // step 2b.4 -- show the number with the operand on the screen
    // step 2b.5 -- store the number and operand seperately
    // step 2b.6 -- when the next number is entered, continue to concatenate on the right side
    // step 2b.7 -- disable operands at this point
    // step 2b.8 -- pass in the right-hand digit to 'storage' once right-side number complete
    // step 2b.9 -- evaluate the expression and update display to that number
    // step 2b.10 -- allow calculations to continue
//step 3 clear button reverts back to 0


