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

let storage = null;
let l_number = null;
let operand = null;
let r_number = null;


function display()
// Just need to add dom here //
{
    if(operand != '' && !r_number)
    {
        return toString(l_number) + ' ' + operand 
    }
    if(operand != '' && r_number)
    {
        return toString(l_number) + ' ' + operand + ' ' + toString(r_number)
    }
    else
    {
        return l_number
    }
}

function calculator()
{
// phase 1: user enters l_number, all constants null at this point, disallow operands
if (!l_number && !operand)
    {
        one.addEventListener('click',() => 
        {
            l_number += 1
            display()
        })
        two.addEventListener('click',() => 
        {
            l_number += 2
        })
        three.addEventListener('click',() => 
        {
            l_number += 3
        })
        four.addEventListener('click',() => 
        {
            l_number += 4
        })
        five.addEventListener('click',() => 
        {
            l_number += 5
        })
        six.addEventListener('click',() => 
        {
            l_number = 6
        })
        seven.addEventListener('click',() => 
        {
            l_number = 7
        })
        eight.addEventListener('click',() => 
        {
            l_number = 8
        })
        nine.addEventListener('click',() => 
        {
            l_number = 9
        })
        zero.addEventListener('click',() => 
        {
            l_number = 0
        })
    }
// phase 2: user enters an operand, disallow all other keys
if (l_number && !operand)
    {
        plus.addEventListener('click',() => 
        {
            operand = '+'
            display()
        })
        minus.addEventListener('click',() => 
        {
            operand = '-'
            display()
        })
        multiply.addEventListener('click',() => 
        {
            operand = '*'
            display()
        })
        divide.addEventListener('click',() => 
        {
            operand = '/'
            display()
        })
    }
}
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

