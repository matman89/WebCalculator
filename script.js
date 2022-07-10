/*Query Selectors to enable event listeners later in script*/

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const clear = document.querySelector('.clear');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const equalsign = document.querySelector('.equalsign');

// these variables will initialize as null. Their status will determine which 'phase' we are in
let storage = '';
let l_number = '';
let operand = '';
let r_number = '';

function display()
{
    if (operand == '' && r_number == '')
    {
        l_number += storage;
        storage = ''
        document.querySelector('.display').textContent = `${l_number}`;
    }
    if (operand != '' && l_number != '')
    {
        /* If you haven't finished the operand selection this next line checks*/
        if(storage == '')
        {
            document.querySelector('.display').textContent = `${l_number+operand}`;
        }
        r_number += storage;
        document.querySelector('.display').textContent = `${l_number+operand+r_number}`;
        storage = ''
    }

}

// call display function through series of clicks//
one.addEventListener('click',() => 
{
    storage = '1';
    display();
})
two.addEventListener('click',() => 
{
    storage = '2';
    display();
})
three.addEventListener('click',() => 
{
    storage = '3';
    display();
})
four.addEventListener('click',() => 
{
    storage = '4';
    display();
})
five.addEventListener('click',() => 
{
    storage = '5';
    display();
})
six.addEventListener('click',() => 
{
    storage = '6';
    display();
})
seven.addEventListener('click',() => 
{
    storage = '7';
    display();
})
eight.addEventListener('click',() => 
{
    storage = '8';
    display();
})
nine.addEventListener('click',() => 
{
    storage = '9';
    display();
})
zero.addEventListener('click',() => 
{
    storage = '0';
    display();
})
plus.addEventListener('click',() => 
{
    operand = '+';
    display();
})
minus.addEventListener('click',() => 
{
    operand = '-';
    display();
})
multiply.addEventListener('click',() => 
{
    operand = '*';
    display();
})
divide.addEventListener('click',() => 
{
    operand = '/';
    display();
})
clear.addEventListener('click',() => 
{
    storage = '';
    l_number = '';
    operand = '';
    r_number = '';
    document.querySelector('.display').textContent = ``;
})
clear.addEventListener('click',() => 
{
    storage = '';
    l_number = '';
    operand = '';
    r_number = '';
    document.querySelector('.display').textContent = ``;
})
equalsign.addEventListener('click',() => 
{
    if(operand=='+')
    {
        l_number = Number(l_number) + Number(r_number)
    }

    if(operand=='-')
    {
        l_number = Number(l_number) - Number(r_number)
    }

    if(operand=='/')
    {
        l_number = Number(l_number) / Number(r_number)
    }

    if(operand=='*')
    {
        l_number = Number(l_number) * Number(r_number)
    }
    l_number.toString()
    document.querySelector('.display').textContent = `${l_number}`;
    r_number = ''
    storage = ''
    operand = ''
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

