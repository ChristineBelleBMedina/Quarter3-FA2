
function Calcuresult(output) {
    document.getElementById('result').innerHTML = output;
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function mod(num1, num2) {
    return num1 % num2;
}

function calcu(simpcalc) 
{
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);

    switch (simpcalc) 
    {
        case '+':
            result = `The sum of ${num1} and ${num2} is ${add(num1, num2)}.`;
            break;
        case '-':
            result = `The difference of ${num1} and ${num2} is ${sub(num1, num2)}.`;
            break;
        case '*':
            result = `The product of ${num1} and ${num2} is ${mul(num1, num2)}.`;
            break;
        case '/':
            result = `The quotient of ${num1} and ${num2} is ${div(num1, num2)}.`;
            break;
        case '%':
            result = `The remainder of ${num1} and ${num2} is ${mod(num1, num2)}.`;
            break;
       
    }
return Calcuresult(result);

}
